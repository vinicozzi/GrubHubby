import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './LoginForm.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const sessionUser = useSelector(state => state.session.user);
    const [errors, setErrors] = useState([]);

if (sessionUser) return <Redirect to="/"/>

const handleSubmit = (e) => {

    e.preventDefault();

    setErrors([])

    return dispatch(sessionActions.login({credential, password}))

    .catch (async (res) => {
        let data; 
        try {

            data = await res.clone().json();
        } catch {

            data = await res.text();

        }

        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);

        })

    }

return (

<div className="login-form">
<form onSubmit={handleSubmit}>
{errors.length > 0 && (

<ul className="error-message">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
    )}

<label>

Phone Number or Email

<input 
type='text'
value={credential}
onChange={(e) => setCredential(e.target.value)}
required
/>
</label>

<label>
    Password 
    <input
    type='password'
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required 
/>
</label>
<button type='submit'>Log in</button>
</form>
</div>

);

};

export default LoginFormPage;