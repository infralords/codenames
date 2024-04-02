import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const ElementOptionSwitch = ({ stateProp } : any) => {
  const [state, dispatch] = useReducer(reducer, {
    currentState: stateProp || "off",
    lastVisitedTeam: 'team-b'
  });

  return (
    <div
      className={`element-option-switch ${state.currentState}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <img className="thumb" alt="Thumb" src="src/components/tristateSwitch/thumb-3.svg" />
    </div>
  );
};

function reducer(state : any, action : any) {
  if(action === "click"){
    if(state.currentState === 'off' && state.lastVisitedTeam === 'team-a'){
      return{
        currentState: 'team-b',
        lastVisitedTeam: 'team-b'
      }
    } else if(state.currentState === 'off' && state.lastVisitedTeam === 'team-b'){
      return{
        currentState: 'team-a',
        lastVisitedTeam: 'team-a'
      }
    } else {
      return {
        currentState: 'off',
        lastVisitedTeam: state.lastVisitedTeam
      }
    }
  }
  return state
}

ElementOptionSwitch.propTypes = {
  stateProp: PropTypes.oneOf(["team-a", "off", "team-b"]),
};
