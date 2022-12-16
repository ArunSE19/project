import React from 'react'
import { useState } from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
export default function Login() {
    const [FirstName, setFname] = useState("");
    const [LastName, setLname] = useState("");
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [Confirm_Password, setconfirmPassword] = useState("");
    const [Role, setrole] = useState("");
    const [message, setMessage] = useState("");
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://localhost:3000/auth/signup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',

                },
                body: new URLSearchParams({
                    'First_Name': FirstName,
                    'Last_Name': LastName,
                    'Username': Username,
                    'Password': Password,
                    'Role': Role,
                }).toString(),
            });

            // let resJson = await res.json();
            if (res.status === 200) {
                setFname("");
                setLname("");
                setUsername("");
                setPassword("")
                setconfirmPassword("")
                setrole("")
                setMessage("User created successfully");
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
        <Navbar/>
            <div className="login_only">
                <div className="body_only">
                    <div className="wrapper">
                        <h1>Sign Up</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input className="Hello" type="text" value={FirstName} name="name" id="name" placeholder='FirstName' onChange={(e) => setFname(e.target.value)} />
                            </div>
                            <div>
                                <input className="Hello" type="text" value={LastName} name="lastname" id="lastname" placeholder='LastName' onChange={(e) => setLname(e.target.value)} />
                            </div>
                            <div>
                                <input className="Hello" type="email" name="email" value={Username} id="email" placeholder='Email' onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div>
                                <input className="Hello" type="Password" name="password" id="password" value={Password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                                <input className="Hello" type="Confirm Password" name="con_password" id="con_password" value={Confirm_Password} placeholder='Confirm Password' onChange={(e) => setconfirmPassword(e.target.value)} />
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" value={Role} name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label class="form-check-label" for="flexRadioDefault2">
                                 Student
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" value={Role} name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                Instructor                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" value={Role} name="flexRadioDefault" id="flexRadioDefault2" />
                                <label class="form-check-label" for="flexRadioDefault2">
                                 Recruiter
                                </label>
                            </div>
                        </form>
                        {/* <div className="terms">
                            <input type="checkbox" id='checkbox' />
                            <label htmlFor="checkbox">I agree to these <Link to="/">Terms And Conditions</Link></label>
                        </div> */}
                        <button type="submit" className="Signup" onClick={handleSubmit}>SignUp</button>
                        <div className="message">{message ? <p>{message}</p> : null}</div>
                        <div className="member">Already Registered?<Link className="m" to="/login">Login</Link></div>
                    </div>
                </div>

            </div>

        </>
    )
}
