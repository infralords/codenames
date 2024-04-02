import React, { useReducer } from "react"
import Color from "../utils/colors"
import { ElementOptionSwitch } from "./tristateSwitch/ElementOptionSwitch";
import type { switchTriStates } from "./tristateSwitch/ElementOptionSwitch";
import { getRandomBoard, getRandomSeed, getGenerator } from "../logic/generate";

export function Board(props : {
    board: Color[][],
    mockup?: boolean 
}) {
        return (
            <div className="board">
                {
                    props.board.map((row,i)=>{
                            return (
                                <div key={`${props.board.flat().toString()},${i}`}>
                                    {
                                        row.map((color,j)=>{
                                            return (
                                                <GameCardButton
                                                    key={`${props.board.flat().toString()},${i},${j}`}
                                                    color= {color}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    )
                }
            </div>
        )
}

export class GameCardButton extends React.Component<{
    color: Color,
}>{
    public state = {
        marked: false
    };


    render(){
        return (
            <button 
                style = {{ backgroundColor: this.props.color, opacity: (this.state.marked) ? '20%' : '100%'}}
                className = "gameCard"
                onClick={() =>{
                    this.state.marked = !this.state.marked
                    this.forceUpdate()
                }}>
            </button>
        )
    }
}
interface teamProps {
    teamA: Color[][],
    teamB: Color[][]
}
export class CoopGameUI extends React.Component<{},{
    teamSwitchButtonState : switchTriStates,
    board : Color[][],
    teamA: Color[][],
    teamB: Color [][]
}>{
    constructor(props : teamProps ){
        super(props)
        const boardA  = getRandomBoard(getGenerator(getRandomSeed()))
        const boardB  = getRandomBoard(getGenerator(getRandomSeed())) 

        this.state = {
            teamSwitchButtonState: 'off',
            board: boardA,
            teamA: boardA,
            teamB: boardB
        }
    }

    regenerateTeamState = () => {
        this.setState((state)=>{
           const boardA = getRandomBoard(getGenerator(getRandomSeed()))
            return {
                teamSwitchButtonState: state.teamSwitchButtonState,
                board: boardA,
                teamA: boardA,
                teamB: getRandomBoard(getGenerator(getRandomSeed()))
            }
        })
    }

    handleToggleChange = (childState : switchTriStates) => {
        this.setState(() => {
            return {
                teamSwitchButtonState: childState,
                board: childState === 'team-a' ? this.state.teamA : this.state.teamB
            }
        })
      };

    render(){
        return (
            <div>
                <div style={{display: "flex", justifyContent: 'center', padding: '1em'}}>
                    <ElementOptionSwitch onSignalChange={this.handleToggleChange}/>
                </div>
                
                {
                    this.state.teamSwitchButtonState !== 'off'  ? 
                    <Board board = {this.state.board} />        :
                    <div style={{display: 'flex'}}>
                        <img src="src/assets/no-eye.svg" 
                         alt="no view para los papis"
                         className="eye"/> 
                    </div>
                }

                <div style={{display: "flex", justifyContent: 'center', padding: '0.5em', gap: "0.5em"}}>
                    <button>previous</button>
                    <button onClick={this.regenerateTeamState}>regenerate</button>
                    <button>next</button>
                </div>
            </div>
        )   
    }
}