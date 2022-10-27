import React from 'react'
import Person from './Person'

const Container = () => {
    const users = [{name: 'Jane Doe', age: 45, hair_color: 'Black'}, {name: 'John Smith', age: 88, hair_color: 'Brown'}, {name: 'Millard Fillmore', age: 50, hair_color: 'Brown'}, {name: 'Maria Smith', age: 62, hair_color: 'Brown'}]
    return (
        <>
        {users.map((x)=>{
            return <Person name={x.name} age={x.age} hair_color={x.hair_color} />
        })}
        </>
    )
}

export default Container