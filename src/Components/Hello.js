import React from 'react'

const Hello = () => {
    // return(
    //     <div className = 'dummyclass'>
    //         <h1>Hello Sewvandiii</h1>
    //     </div>
    // )
    return React.createElement('div',{id:'hello',className: 'dummyclass'},React.createElement('h1',null,'hello wendi'))
} 

//this is the JSX version of Hello Components 
//without using JSX //3 parameters

export default Hello