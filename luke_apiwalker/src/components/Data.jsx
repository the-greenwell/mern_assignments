import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const People = ({data}) => {
    const planet = data?.homeworld?.split("/").slice(-3).join('/')
    return !data.detail ? (
        <div>
            <h1>{data.name}</h1>
            <h5>Height: {data.height} cm</h5>
            <h5>Mass: {data.mass} kg</h5>
            <h5>Hair Color: {data.hair_color}</h5>
            <h5>Skin Color: {data.skin_color}</h5>
            {planet && (<Link to={'/' + planet}>Home World</Link>)}
        </div>
    )
        :
        <h1>Person not found</h1>
}

const Planet = ({data}) => {
    return !data.detail ? (
        <div>
            <h1>{data.name}</h1>
            <h5>Climate: {data.climate}</h5>
            <h5>Terrain: {data.terrain}</h5>
            <h5>Surface Water: {data.surface_water == '1' ? 'True' : 'False'}</h5>
            <h5>Population: {data.population}</h5>
        </div>
    )
        :
        <h1>Planet not found</h1>
}

const Films = ({data}) => {
    const crawl = data?.opening_crawl?.split('\r\n')
    return !data.detail ? (
        <div>
            <h1>{data.title}</h1>
            <h5>Episode: {data.episode_id}</h5>
            <h5>Producer(s): {data.producer}</h5>
            <h5>Release Date: {data.release_date}</h5>
            <h3>Opening Crawl</h3>
            <ul style={{listStyle: 'none'}}>
                {crawl?.map((line,i) => {
                    return <li key={i}>{line}</li>
                })}
            </ul>
        </div>
    )
        :
        <h1>Film not found</h1>
}

const getData = async (category, id) => {
    return await fetch(`https://swapi.dev/api/${category}/${id}`).then((res) => res.json()).catch((err)=> console.log(err))
}

export const Data = () => {
    const [data, setData] = useState(null);
    const { category, id } = useParams();

    useEffect(() => {
        getData(category, id)
            .then((data) => setData(data))
    },[category,id]);

    return data && (
        <div>
            {
                { 
                    'films': <Films data={data}/>,
                    'planets': <Planet data={data}/>,
                    'people': <People data={data}/>
                }[category] || '' }
        </div>
    )
}
