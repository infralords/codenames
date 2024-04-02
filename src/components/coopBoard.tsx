import React from "react"
import Color from "../utils/colors"
import { ElementOptionSwitch } from "./tristateSwitch/ElementOptionSwitch";
import { getRandomBoard, getGenerator, getRandomSeed } from "../logic/generate";

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
    render(){
        return (
            <button 
                style = {{ backgroundColor: this.props.color}}
                className = "gameCard">
            </button>
        )
    }
}

export class CoopGameUI extends React.Component{

    constructor(props: {
        teamA : Color[][],
        teamB : Color[][]
    }){
        super(props)
    }
    render(){
        return (
            <div style={{flex: 'auto', justifyContent: 'center'}}>
                <HideControls />
                    <div>
                        <Board board={ getRandomBoard(getGenerator(getRandomSeed())) }/>
                    </div>
                <GamesControls/>
            </div>
        )
    }
}

export class HideControls extends React.Component{
    constructor(props : {}){
        super(props)
    }

    render(){
        return (
            <ElementOptionSwitch/>
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
            <div>
                <button>previous</button>
                <button>regenerate</button>
                <button>next</button>
            </div>
        )
    }
}



