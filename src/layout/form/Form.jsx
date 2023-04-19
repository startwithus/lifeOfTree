import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './form.css'
import { useState } from 'react'

const Form = ({ setIndex, index }) => {
    const [userData, setUserData] = useState([])
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = await fetch('http://localhost:5050/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(user)
        })
        const response = await data.json();
        console.log(response)
        alert(response.msg)
    }
    return (
        <div className='trans'>
            <div className='trans-content'>
                <div className='circleForm' onClick={() => setIndex(false)}>
                    <AiOutlineCloseCircle />
                </div>
                <div className='containerForm'>
                    <div className='bloc-tabs'>
                        <div className='tabs'>Individual</div>
                        <div className='tabs'>corporate</div>
                    </div>
                </div>

                <div className='containerFacebook'>

                    <div className='content-tabs'>
                        <div className='face-Book'>
                            <h2><FaFacebook /></h2>
                            <button type='Login With Facebook'>Login With Facebook</button>
                        </div>
                    </div>

                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className='placeholder'>
                            <input type="email" name='email' placeholder='Email' value={user.email} onChange={(e) => handleChange(e)}></input>
                            <input type="password" name='password' value={user.password} placeholder='Password' onChange={(e) => handleChange(e)}></input>
                            <h3>Forget Password?</h3>

                            <div className='container-button'>
                                <button type='submit'>Login</button>
                                <h3>Create Your Account Signup Now </h3>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Form
