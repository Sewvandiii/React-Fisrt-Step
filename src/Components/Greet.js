import React from 'react'

// function Greet(){
//     return <h1>Hello Sewvandi</h1>
// }

//This will not display in the browser since we dont export it to App component
//ES6 arrow function sysntax

// const Greet = props => {

// console.log(props)
//props.name="Bruno" => cannot assign to read only property'name' of the object props
//****props are immutable
// return( 
// <div>
// <h1>Hello {props.name} {props.surname}</h1>
// {props.children}
// </div> 
// )
// }
//render the paragraph using props.childern
//create a property called props
//this is called a "Name export"

//destructuring parameters
// const Greet = ({name, surname}) => {
//     return(
//         <div>
//             <h1>
//                 Hello {name} {surname}
//             </h1>
//         </div>
//     )

// }

//destructuring in function body
const Greet = props => {
    const {name, surname} = props
    return(
        <div>
            <h1>
                Hello {name} {surname}
            </h1>
        </div>
    )

}

export default Greet 