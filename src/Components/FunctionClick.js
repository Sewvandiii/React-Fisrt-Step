import React from 'react'

//rfce
//calling a function in anothor function is very much possible
function FunctionClick() {

    function clickHandler(){
        console.log('Button clicked') //can see the msg in the console
    }
    return (
        <div>
            <button onClick ={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
