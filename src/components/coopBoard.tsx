import React from "react"
import Color from "../utils/colors"
import { ElementOptionSwitch } from "./tristateSwitch/ElementOptionSwitch";

export function Board(props : { board : Color[][]}, boardIndex = 0){
    return (
        <>
            {
                props.board.map((row,i)=>{
                        return (
                            <div key={`${boardIndex},${i}`}>
                                {
                                    row.map((color,j)=>{
                                        return (
                                            <GameCardButton
                                                key={`${boardIndex},${i},${j}`}
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
        </>
    )
}

export class GameCardButton extends React.Component<{
    color: Color,
}>{
    public marked = false;

    render(){
        return (
            <button 
                style = {{ backgroundColor: this.props.color, opacity: (this.marked) ? '20%' : '100%'}}
                className = "gameCard"
                onClick={() =>{
                    this.marked = !this.marked
                    this.forceUpdate()
                }}>
            </button>
        )
    }
}

export class CoopGameUI extends React.Component<{
        teamA : Color[][],
        teamB : Color[][]
}>{
    render(){
        return (
            <div>
                <HideControls />
                    <div>
                        <Board board={ this.props.teamA }/>
                    </div>
                <GamesControls/>
            </div>
        )
    }
}

export class HideControls extends React.Component{
    render(){
        return (
            <div style={{display: "flex", justifyContent: 'center', padding: '1em'}}>
                <ElementOptionSwitch/>
            </div>
        )
    }
}


/**
 * @function GamesControls 
 * previous boards, generate new board, next board if it's on a previous board
 */

export class GamesControls extends React.Component{
    render(){
        return(
            <div style={{display: "flex", justifyContent: 'center', padding: '0.5em', gap: "0.5em"}}>
                <button>previous</button>
                <button>regenerate</button>
                <button>next</button>
            </div>
        )
    }
}



