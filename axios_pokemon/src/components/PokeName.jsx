import React from 'react'

export const PokeName = ({ pokemon, id }) => {
    return (
        <>
            <th scope="row">{id}</th>
            <td>{pokemon.name}</td>
        </>
    )
}
