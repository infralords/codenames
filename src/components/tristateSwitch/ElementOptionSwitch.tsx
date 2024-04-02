import {useEffect} from "react";
import { useReducer } from "react";
import "./style.css";

export const ElementOptionSwitch = ({ stateProp , onSignalChange } : tristateProps ) => {
  const [state, dispatch] = useReducer(reducer, {
    currentState: stateProp || "off",
    lastVisitedTeam: 'team-b',
  });

  useEffect(() => {
    if (onSignalChange) {
      onSignalChange(state.currentState);
    }
  }, [state, onSignalChange]);

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
      return {
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

export type switchTriStates = "team-a" | "off" | "team-b"
export interface tristateProps {
  stateProp? : switchTriStates,
  onSignalChange: Function 
}
