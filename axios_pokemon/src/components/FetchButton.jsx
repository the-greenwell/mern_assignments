import React from 'react'

export const FetchButton = (props) => {
    return (
        <button className='btn btn-outline-dark' onClick={props.getPokemon}>Fetch Button</button>
    )
}
