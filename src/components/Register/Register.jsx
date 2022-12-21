import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Joi from "joi";
export default function Register() {
    let [errorList, setErrorList] = useState([]);
    let navigate = useNavigate();
    let [error, seterror] = useState("")
    let [loading, setLoading] = useState(false)
    let [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        age: ""
    });
    async function sendUserData() {
        let { data } = await axios.post("https://sticky-note-fe.vercel.app/signup", user)
        if (data.message === "success") {
            navigate("/");
            setLoading(false)
        } else {
            seterror(data.message)
            setLoading(false)
        }
    }
    function validation() {
        let scheme = Joi.object({
            first_name: Joi.string().min(3).max(10).required(),
            last_name: Joi.string().min(3).max(10).required(),
            email: Joi.string()
                .email({ tlds: { allows: ["com", "net"] } })
                .required(),
            age: Joi.number().min(15).max(80).required(),
            password: Joi.string()
                .pattern(/^[A-Z][a-z]{3,6}/)
                .required(),
        });
        return scheme.validate(user, { abortEarly: true });
    }
    function saveRegisterData(e) {
        let newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }
    function formHandler(e) {
        e.preventDefault();
        let validator = validation();
        if (validator.error) {
            setLoading(false)
            setErrorList(validator.error);
        } else {
            sendUserData();
        }
    }
    return (
        <div className='py-5 mt-5'>
            <div className='container w-75 '>
                <form className='mx-auto  p-3 bg-light shadow rounded' onSubmit={formHandler}>
                    <h2 className='h1 text-center pt-3 fw-bold text-muted'>Create New Account</h2>
                    {error ? <p className='alert alert-danger'>{error}</p> : ""}
                    {errorList ? <p className='text-danger'>{errorList.toString()}</p> : ""}


                    <div className="mb-3 d-flex pt-3">
                        <input onChange={saveRegisterData} type="text" className="form-control me-2" name='first_name' placeholder={'First Name'} />
                        <input onChange={saveRegisterData} type="text" className="form-control ms-2" name='last_name' placeholder='last Name' />
                    </div>
                    <div className="mb-3">
                        <input onChange={saveRegisterData} type="email" className="form-control" name='email' placeholder='Email' />
                    </div>
                    <div className="mb-3">
                        <input onChange={saveRegisterData} type="number" className="form-control" name='age' placeholder='Age' />
                    </div>
                    <div className="mb-3">
                        <input onChange={saveRegisterData} type="password" className="form-control" name='password' placeholder='Password' />
                    </div>
                    <button type="submit" className="btn btn-primary mx-auto d-block">{loading === true ? <i className="fas fa-spinner fa-spin"></i> : "Create Account"}</button>
                </form>
            </div>
        </div>
    )
}
