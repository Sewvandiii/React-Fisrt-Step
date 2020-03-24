import React from 'react'

function NameList() {

    const persons=[{
        id: 1,
        name :'bruno',
        age :34,
        skill : 'Angular'
    },
    {
        id: 2,
        name :'aria',
        age :34,
        skill : 'Java'
    }
]
    const personList = persons.map(person => <Person person = {person} />)
    //passing person as a props to Person component
    return <div>{personList}</div> 

            // <h2>{names[0]}</h2>
            // <h2>{names[1]}</h2>
            // <h2>{names[2]}</h2>
            // name parameter      
    }

export default NameList
