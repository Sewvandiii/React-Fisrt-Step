import React from 'react'
import Person from './Person'

function NameList() {

    const name =['bruno', 'aria', 'mia', 'bruno ']
    const NameList = name.map((name,index) => <h2 key = {index}>{index} {name}</h2>)
//     const persons=[{
//         id: 1,
//         name :'bruno',
//         age :34,
//         skill : 'Angular'
//     },
//     {
//         id: 2,
//         name :'aria',
//         age :34,
//         skill : 'Java'
//     }
// ]
    // const personList = persons.map(person => <Person key = {person.id} person = {person} />)
    //passing person as a props to Person component
    return <div>{NameList}</div> 

            // <h2>{names[0]}</h2>
            // <h2>{names[1]}</h2>
            // <h2>{names[2]}</h2>
            // name parameter      
    }

export default NameList
