import React, {useState} from 'react'

const Person = (props) => {
    const nameFormat = props.name.split(' ')
    const [age, changeAge] = useState(props.age)
    return (
        <>
            <h1>{nameFormat[1]}, {nameFormat[0]}</h1>
            <p>Age: {age}</p>
            <p>Hair color: {props.hair_color}</p>
            <button className='btn btn-primary' onClick={()=>changeAge(age+1)}>It's {props.name}'s birthday!</button>
        </>
    )
}

export default Person