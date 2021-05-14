import React, { useState,useEffect } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import '../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//REGISTER SCREEN

function Screen3(props) {
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [currname, setCurrname] = useState("");
    const handleSubmit = (event) => {
      console.log("triggerd")
      //event.preventDefault()
      if (!email || !password1 || !password2) {
        toast.warning("Please enter the details", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton:'0.1px'
        });
        
        return
      }
      if (password1.length < 6) {
        toast.warning("Please enter strong password", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton:'0.1px'
        });
        return
      }
      if (password1 !== password2) {
        toast.warning("Password don't match", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton:'0.1px'
        });
    
        return
      }
      var users = []
      users = JSON.parse(localStorage.getItem('users')) == null ? [] : JSON.parse(localStorage.getItem('users'));
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
          toast.warning("User already exist", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            closeButton:'0.1px'
          });
        
          return
        }
      }

      var userArr=JSON.parse(localStorage.getItem('users'))
      var obj = userArr[userArr.length - 1];
      obj.username = email;
      obj.password = password1;
      userArr.pop();
      userArr.push(obj);
      localStorage.removeItem('users');
      localStorage.setItem('users',JSON.stringify(userArr));
      props.history.push('/mobileverify')
  
  }
  useEffect(() => {
    setCurrname(localStorage.getItem('currentName'));
}, [])
  
    return (
        <div className="App">
        <div className="container">
          <ToastContainer></ToastContainer>
          <div className="left">
          <h2>We are glad to have<br></br> you {currname}!</h2>
          <h5>your privacy is our concern, please <br></br>enter your <b>credentials </b></h5>
        </div>
          <div className="right">
          <div className="flexBx">
          <label>Username</label><br></br>
          <input type='text' name='' onChange={(e) => setEmail(e.target.value)} value={email}>
          </input> <br></br>
          <label>Password</label><br></br>
          <input type='password'  name='' onChange={(e) => setPassword1(e.target.value)} value={password1}>
          </input> <br></br>
          <label>Confirm Password</label><br></br>
          <input type='password'  name=''  onChange={(e) => setPassword2(e.target.value)}  value={password2}>
          </input> <br></br>
          <input type='button' value="Sign in" name='' onClick={() => handleSubmit()}>
          </input>   <br></br>
         </div>
          
      </div>
        </div>
        </div>
      
    )
}

export default Screen3
