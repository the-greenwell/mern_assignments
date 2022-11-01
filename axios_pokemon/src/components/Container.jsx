import React, { useState, useEffect } from 'react'
import { FetchButton } from './FetchButton'
import { PokeName } from './PokeName'
import axios from 'axios';

export const Container = () => {
    const [pokemon,setPokemon] = useState([]);

    const getPokemon = () => {
        let arr = []
            axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1054`)
                .then(response=>{
                    setPokemon(response.data.results) 
                })
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
                    {pokemon.map((poke, i)=>{
                        console.log(poke);
                        return (<tr>
                            <PokeName pokemon={poke} id={i+1}/>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}
