import React from "react"
import Color from "../utils/colors"

export function Board(props : { board : Color[][]}, boardIndex = 0){
    return (
        <>
            {
                props.board.map((row,i)=>{
                        return (
                            <div key={`${boardIndex},${i}`}>
                                {
                                    row.map((color,j)=>{
                                        return <button 
                                                key   = { `${boardIndex},${i},${j}` } 
                                                style = {{ backgroundColor: color }}
                                                className = "gameCard">
                                                </button>
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

export class CoopGameUI extends React.Component{

    constructor(props: {
        teamA : Color[][],
        teamB : Color[][]
    }){
        super(props)
    }
    render(){
        return (
            <div>
                <HideControls />
                {/* boards */}
                <GamesControls/>
            </div>
        )
    }
}

export function HideControls(){
    return (
        <>
        </>
    )
}


/**
 * @function GamesControls 
 * previous boards, generate new board, next board if it's on a previous board
 */

export function GamesControls(){
    return (
        <>
        </>
    )
}



