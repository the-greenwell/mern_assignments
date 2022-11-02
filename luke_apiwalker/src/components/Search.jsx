import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Search = () => {
    const [form,setForm] = useState({
        category: 'people',
        id: ''
    })
    const [error,setError] = useState(false)
    const navigate = useNavigate();

    const changeHandler =(e)=>{
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }

    const submitHandler =(e)=>{
        e.preventDefault();
        console.log(form)
        setError(false);
        if (form.category && form.id) {
            navigate(`/${form.category}/${form.id}`);
        } else {
            setError(true);
        }
    }


    return (
        <form className="row g-3 align-items-center m-3" onSubmit={submitHandler}>
            <div className="col-auto">
                <label htmlFor="category" className="col-form-label">Category</label>
            </div>
            <div className="col-auto">
                <select className="form-select" onChange={changeHandler} name='category' aria-label="Category" value={form.category}>
                    <option value='people' defaultChecked>People</option>
                    <option value="planets">Planets</option>
                    <option value="films">Films</option>
                </select>
            </div>
            <div className="col-auto">
                <label htmlFor='id' className='col-form-label'>ID</label>
            </div>
            <div className="col-auto">
                <input type="text" onChange={changeHandler} className="form-control" name="id" value={form.id}/>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary">Search Data</button>
            </div>
            <div className="col-auto">
                {error ? <p class='text-danger m-0'>Please select category and enter an id</p>:''}
            </div>
        </form>
    )
}
