import React, { useState } from "react";

export const Signup7 = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`My name is ${name} and my email is ${email}`);
    }

    
    return (
        <div className="auth-form-container">
            <h2>Sign Up</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name"  >Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Sign Up</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        <a href="./../../index.html"><button class="back-home">Back Home</button></a> 
    </div>
    )
}