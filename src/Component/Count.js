import React from 'react'

function Count({text,count}){
    console.log("Count rendering "+text)
    return (
        <div>{text} - {count}</div>
    )
}

export default Count