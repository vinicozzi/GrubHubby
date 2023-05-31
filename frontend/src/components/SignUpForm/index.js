import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom"
import * as sessionActions from "../../store/session";
import './signup-form.css';

function SignUpForm()

{

    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState([])

    if (sessionUser) return <Redirect to="/"/>;

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([])
    if (password === confirmPassword) {

        // setErrors([])
        await dispatch(sessionActions.signup({firstName, lastName, address, email, phoneNumber, password}))

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
    } else {
        // setErrors([...errors, 'Passwords do not match']); }
        setErrors((prevErrors) => [...prevErrors, 'Passwords do not match']); }

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
            value = {firstName}
            onChange = {(e) => setFirstName(e.target.value)}
            required
            />
            </label>

        <label>

            Last Name
            <input

            type='text'
            value = {lastName}
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
        value= {phoneNumber}
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