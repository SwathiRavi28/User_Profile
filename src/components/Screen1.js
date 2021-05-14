import React, { useState } from 'react'
import '../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//WELCOME SCREEN ASK NAME TO PROCEED

function Screen1(props) {
  const [name, setName] = useState("")
  const handleName = () => {
    
    localStorage.setItem('currentName', name);
    if (!name) {
      toast.warning("Please enter the details", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: '0.1px'
      });
      return
    }
    props.history.push('/details')
  }
  
    return (
        <div className="App">
        <div className="container">
          <ToastContainer></ToastContainer>
        <div className="left">
            <h2>Hi there!</h2>
            <h5>Please enter your name</h5>
        </div>
          <div className="right">
          <div className="flexBx">
            <h1>Welcome</h1>
          
          <label>Enter your name</label><br></br>
          <input type='text' placeholder="Name" name='' onChange={(e) => setName(e.target.value)} value={name}>
          </input> <br></br>
          <input type='button' value="Next" name='' onClick={handleName}>
          </input>   
         </div>
        </div>
        </div>
        </div>
      
    )
}

export default Screen1
