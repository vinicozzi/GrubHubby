import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom"
import * as sessionActions from "../../store/session";
import './signup-form.css';

function SignUpForm()

{

    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [phone_number, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState([])

    if (sessionUser) return <Redirect to="/"/>;

    const handleSubmit = (e) => {

        e.preventDefault()

    if (password === confirmPassword) {

        setErrors([])

        return dispatch(sessionActions.signup({first_name, last_name, address, email, phone_number, password}))

        .catch (async (res) => {
            let data;
            try {

                data = await res.clone().json()
            } catch {

                data = await res.text()
            }

            if (data?.errors) setErrors(data.errors)
            else if (data) setErrors([data])
            else setErrors([res.statusText])
        }) 
    }

    }

    return (
        <>
        <div className="signup-form">
        <h1>Sign Up </h1>
        <form onSubmit={handleSubmit}>
            <ul>

            {errors.map((error, index) => (
            <li key={index}>{error}</li>
            ))}

            </ul>

        <label>

            First Name
            <input

            type='text'
            value = {first_name}
            onChange = {(e) => setFirstName(e.target.value)}
            required
            />
            </label>

        <label>

            Last Name
            <input

            type='text'
            value = {last_name}
            onChange = {(e) => setLastName(e.target.value)}
            required
            />
            </label>
        
        <label>

            Address
            <input

            type='text'
            value = {address}
            onChange = {(e) => setAddress(e.target.value)}
            required
            />
            </label>

        <label>

        Email
        <input
        
        type='text'
        value = {email}
        onChange = {(e) => setEmail(e.target.value)}
        required
        />
        </label>

        <label>

        Phone Number
        <input

        type="text"
        value= {phone_number}
        onChange ={(e) => setPhoneNumber(e.target.value)}
        />
        </label>

        <label>

        Password
        <input 

        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}

        />

        </label>


        <label>

        Confirm Password 

        <input

        type="password"
        value = {confirmPassword}
        onChange ={(e) => setConfirmPassword(e.target.value)}
        />

        </label>

        <button type="submit"> Sign Up </button>

        </form>
        </div>
        </>
        
        );
}

export default SignUpForm;