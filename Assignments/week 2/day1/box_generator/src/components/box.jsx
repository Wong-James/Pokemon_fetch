import React, { useState } from "react"

const Box = props => {

    const {color} = props

    const [boxList, setBoxList] = useState([""])

    const boxStyle = {
        "backgroundColor" : color,
        "width" : "100px",
        "height" : "100px",
    }

    return(
        <div style={boxStyle}>
            {
                boxList.map((box, i) =>{
                    return <Box key={i} color={color}/>
                })
            }
        </div>
    )
}
export default Box