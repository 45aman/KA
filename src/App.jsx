import React, {useState} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Iadd from "./item/Iadd";
import IUpdate from "./item/Iupdate";
import Idelete from "./item/Idelete";
import Iview from "./item/Iview";
import Bill from "./bill/Bill";
import Login from "./SignIn/Login";
import Signup from "./SignIn/Signup";
import Sadd from "./supplier/Sadd";
import Sedit from "./supplier/Sedit";
import Sview from "./supplier/Sview";
import Ocreate from "./Order/Ocreate";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


const App =() => {

  return (
    < >
    <Router>
        <Routes>
        <Route path="/" element={<Login />}/>
        
        <Route path="/signup" element={<Signup />} />
        

       { /*{
          user && user._id ? <Route path="/home" element={<Home />}/> : <Route path="/" element={<Login setLoginUser={setLoginUser} />} />
        }*/}

        <Route path="/home"  element={<Home />}/>
        
        


       
        <Route path="/service" element={<Service />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/item/Iadd" element={<Iadd/>}/>
        <Route path="/item/Iupdate" element={<IUpdate/>}/>   
        <Route path="/item/Idelete" element={<Idelete/>}/>
        <Route path="/item/Iview" element={<Iview/>}/>
        <Route path="/bill/Bill" element={<Bill/>}/>
        <Route path="/supplier/Sadd" element={<Sadd/>}/>
        <Route path="/supplier/Sedit" element={<Sedit/>}/>
        <Route path="/supplier/Sview" element={<Sview/>}/>
        <Route path="/Order/Ocreate" element={<Ocreate/>}/>





        </Routes>

        </Router>
        
        </>
  );
};

export default App;