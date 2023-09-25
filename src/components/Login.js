import React, { useState } from 'react'
import '../styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSignin = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password).then(userCredentials => {
            navigate('/')
        }).catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
            if (userCredentials) {
                navigate('/');
            }
        }).catch(error => alert(error.message))
    }
  return (
    <div className='login'>
        <Link to='/'>
            <img
                className='login__logo'
                src='https://pngimg.com/uploads/amazon/amazon_PNG1.png'
                alt='logo'
            />
        </Link>

        <div className='login__container'>
            <h1>Sign in</h1>

            <form>
                <h5>Email</h5>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <h5>Password</h5>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type='submit' onClick={handleSignin} className='login__signInButton'>Sign in</button>
            </form>

            <p>
                By continuing, you agree to Amazon clone's Conditions of Use and Privacy Notice.
            </p>

            <button onClick={register} className='login__registerButton'>Create your Amazon account</button>
        </div>
    </div>
  )
}

export default Login