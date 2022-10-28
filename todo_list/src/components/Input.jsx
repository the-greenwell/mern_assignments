import React from 'react'

const Input = (props) => {

    return (
        <form className='form container-sm d-flex gap-1' onSubmit={props.submitHandler}>
            <input className='form-control' type="text" placeholder='New Todo' onChange={props.changeHandler} value={props.value} />
            <button className='btn btn-outline-dark' type="submit">Submit</button>
        </form>
    )
}

export default Input