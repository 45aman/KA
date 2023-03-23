
import React, {useState} from "react";
import i2 from "../img/1.png"
import axios from "axios";
import { Navbar } from "../Navbar";
import {
    Link,
    useNavigate 
   } from "react-router-dom";

const Login =() => {

  const nevigate = useNavigate()


   
  const [user, setUser] = useState({
    email: "",
    password: "",
    
  })

  const handlechange = e => {
    const {name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const login = () => {
    axios.post("http://localhost:9000/login", user)
    .then(res => {
      alert(res.data.message)
      if(res.data.message === "Login Sucessfull" ){
        nevigate("/home")
      }else{
        nevigate("/")
      }
    })
  }

  return (
    <>
    {console.log(user)}
  
   <section id="header" className="d-flex align-items-centre mt-3 ">

   <div className="container-fluid nav_bg">
            <div className='row'>
            <div className="col-6 mx-auto  align-items-centre ">

          





        <div className="col-lg-6 order-1 order-lg-2 header-img ms-2">
        <img src={i2} className="ps-5 ms-5" alt="home img"/>

        </div>

        </div>
        </div>

        <div className='row'>


        <div className="col-6 mx-auto  mt-5  ">
        


        <form className="border border-secondary bg-light rounded-lg  p-5">
        <h2 className="navbar-brand">LOGIN FORM </h2>        
<br/>
<br/>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">EMAIL</label>
    <input type="email" name="email"   value={user.email} className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handlechange}/>
    <small id="emailHelp" className="form-text text-muted"></small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">PASSWORD</label>
    <input type="password" name="password"   value={user.password} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" onChange={handlechange}/>
  </div>
   
  <div /*to="/home"*/ className="btn btn-success btn-block btn-lg gradient-custom-4 " onClick={login} >LOG-IN</div>
  <br/>
  <br/>

  <label>Not registered yet?<Link to="/signup" > SIGN-UP</Link></label>
  


</form>
        </div>

        </div>
        </div>


</section>
    </>
  );
};

export default Login;