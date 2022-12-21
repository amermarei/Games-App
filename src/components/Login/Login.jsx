import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login({ saveUserData }) {
    let navigate = useNavigate();
    let [error, seterror] = useState("")
    let [loading, setLoading] = useState(false)
    let [user, setUser] = useState({
        email: "",
        password: "",
    });
    async function sendUserData() {
        let { data } = await axios.post("https://sticky-note-fe.vercel.app/signin", user)
        if (data.message === "success") {
            navigate("/home");
            setLoading(false);
            localStorage.setItem("userData", data.token);
            saveUserData();
        } else {
            seterror(data.message)
            setLoading(false)
        }
    }
    function saveLoginData(e) {
        let newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }
    function formHandler(e) {
        e.preventDefault();
        sendUserData();
        setLoading(true)
    }
    return (
        <div className="py-5 mt-5">
            <div className='container w-75 '>
                <form className='mx-auto  p-3 bg-light shadow rounded' onSubmit={formHandler}>
                    <h2 className='h1 text-center py-4 fw-bold text-muted'>Log in to GameOver</h2>
                    {error ? <p className='alert alert-danger'>{error}</p> : ""}
                    <div className="m-4">
                        <input onChange={saveLoginData} type="email" className="form-control" name='email' placeholder='Email' />
                    </div>
                    <div className="m-4">
                        <input onChange={saveLoginData} type="password" className="form-control" name='password' placeholder='Password' />
                    </div>
                    <button type="submit" className="btn btn-primary mx-auto d-block">{loading === true ? <i className="fas fa-spinner fa-spin"></i> : "Login"}</button>
                </form>
            </div>
        </div>
    )
}

