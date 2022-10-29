import React from 'react'

export const PokeName = ({ pokemon }) => {
    console.log(pokemon)
    return (
        <>
            <th scope="row">{pokemon.id}</th>
            <td>{pokemon.name}</td>
        </>
    )
}
