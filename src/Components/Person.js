//refactor the jsx into a seperate components => list rendering
import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>
        {key} I am {person.name}. I am {person.age}. I know{person.skill}
    </h2>
        </div>
    )
}

export default Person
