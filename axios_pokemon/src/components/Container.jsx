import React, { useState, useEffect } from 'react'
import { FetchButton } from './FetchButton'
import { PokeName } from './PokeName'
import axios from 'axios';

export const Container = () => {
    const [pokemon,setPokemon] = useState([]);

    const getPokemon = () => {
        let arr = []
        for (let index = 1; index < 808; index++) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
                .then(response=>{
                    arr.push({name: response.data.name, id: response.data.id}) 
                })
        }
        setPokemon(arr)
    };

    return (
        <div>
            <h1>Container</h1>
            <FetchButton getPokemon={getPokemon} />
            <table className='table table-striped'>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemon.map((poke)=>{
                        console.log(poke);
                        return (<tr>
                            <PokeName pokemon={poke} />
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}
