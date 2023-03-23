
import {React, useState} from "react";
import '../SignIn/Signup.css';
import i2 from "../img/1.png"
import { Navbar } from "../Navbar";
import axios from "axios";
import {
    Link
    
     
   } from "react-router-dom";

const Signup =() => {


 
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: ""
  })

  const handlechange = e => {
    const {name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const signup = () => {
    const { name,  email, password, reEnterPassword
     } = user
    if( name && email && password && (password===reEnterPassword )){
      axios.post("http://localhost:9000/signup", user)  
      .then(res => console.log(res))
    }else{
       alert("invalid input")
    }

  }
 
  return (
    <>
  
  <div className="register">
            <h1>Register</h1>
            <input type="text" name="name"  value={user.name} placeholder="Your Name" onChange={handlechange} ></input>
            <input type="text" name="email"   value={user.email} placeholder="Your Email" onChange={handlechange} ></input>
            <input type="password" name="password"   value={user.password} placeholder="Your Password" onChange={handlechange} ></input>
            <input type="password" name="reEnterPassword"   value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handlechange} ></input>
            <div className="button" onClick={signup} >Register</div>
            <div>or</div>
            <Link to="/" className="button">Login</Link>
        </div>

    </>
  );
};

export default Signup;