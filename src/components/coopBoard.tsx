import Color from "../utils/colors"

export function ComposeUIBoard(props : { board : Color[][]}, boardIndex = 0){
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

