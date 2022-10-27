import React, {useState} from 'react'
import ValidatorError from './ValidatorError'

const Form = () => {
    
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
    })

    const inputHandler = (e) => {
        const {name,value} = e.target
        setForm((form) => ({
            ...form,
            [name]: value
        }));
    }

    return (
        <form className='form container'>
            <div className="mb-3">
                <label HTMLfor="first_name" className="form-label">First Name</label>
                <input type="text" className="form-control" name="first_name" aria-describedby="emailHelp" onChange={inputHandler} value={form.first_name}/>
                { form.first_name.length <= 2 ? <ValidatorError message='First Name must be more than 2 characters' /> : <br/> }
            </div>
            <div className="mb-3">
                <label HTMLfor="last_name" className="form-label">Last Name</label>
                <input type="text" className="form-control" name="last_name" aria-describedby="emailHelp" onChange={inputHandler} value={form.last_name}/>
                { form.last_name.length <= 2 ? <ValidatorError message='Last Name must be more than 2 characters' /> : <br/> }
            </div>
            <div className="mb-3">
                <label HTMLfor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" aria-describedby="emailHelp" onChange={inputHandler} value={form.email}/>
                { form.email.length <= 2 ? <ValidatorError message='Email must be more than 2 characters' /> : <br/> }
            </div>
            <div className="mb-3">
                <label HTMLfor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" onChange={inputHandler} value={form.password}/>
                { form.password.length < 8 ? <ValidatorError message='Password must be at least 8 characters' /> : <br/> }
            </div>
            <div className="mb-3">
                <label HTMLfor="confirm_password" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" name="confirm_password" onChange={inputHandler} value={form.confirm_password}/>
                { form.confirm_password !== form.password ? <ValidatorError message="Passwords don't match" /> : <br/> }
            </div>
        </form>
    )
}

export default Form