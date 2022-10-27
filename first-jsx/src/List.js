import React from 'react';
import ReactDOM from 'react-dom';

const List=()=>
{
    return (
        <>
            <h1>Things I need to do:</h1>
            <ul className='list-group'>
                <li className='list-group-item'>code react</li>
                <li className='list-group-item'>overwatch 2</li>
                <li className='list-group-item'>watch streams</li>
                <li className='list-group-item'>do da dew</li>
            </ul>
        </>
    );
}

export default List;