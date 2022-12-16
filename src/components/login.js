import React from 'react'
import { useState } from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom' 
import Navbar from './Navbar'
export default function Login() {
const [Username, setUsername] = useState("");
const [Password, setPassword] = useState("");
      let handleSubmit = async (e) => {
                                        e.preventDefault();
                                        try {
                                          let res = await fetch("https://localhost:3000/auth/signup", {
                                            method: "POST",
                                            headers: {
                                              'Content-Type': 'application/x-www-form-urlencoded',
                                              
                                            },
                                            body: new URLSearchParams ({
                                              'Username': Username,
                                              'Password': Password,
                                            }).toString(),
                                          });
                                          
                                          // let resJson = await res.json();
                                          if (res.status === 200) {
                                            setUsername("");
                                            setPassword("")
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
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                    <input className="Hello" type="email"  value={Username}name="username" id="username" placeholder='Email'onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                    <input className="Hello" type="Password" value={Password}name="password" id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </form>
                <button type="submit" className="Signup" onClick={handleSubmit}><Link to="/dashboard">Login</Link></button>
                <div className="member">Become A Part Of The Family
                <Link className="m" to="/signup">Registration</Link></div>
                {/* <Link className="Signup" to="/Layout">Login</Link> */}
            </div>
        </div>   
    </div>
    </>
  )
}
