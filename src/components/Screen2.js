import React,  { useState,useEffect } from 'react'
import '../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// BACKGROUND DETAILS SCREEN

function Screen2(props) {
  const [insname, setNameIns] = useState("");
  const [course, setCourse] = useState("");
  const [domain, setDomain] = useState("");
  const [currname, setCurrname] = useState("");
  
  const handleDetail = () => {
    if (!insname || !course || !domain) {
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
    var userArr = localStorage.getItem('users')==null?[]:JSON.parse(localStorage.getItem('users'))
    let id = userArr.length + 1;
    const obj = {
      id,
      insname,
      course,
      domain,
      name:currname
    }
    userArr.push(obj);
    if(localStorage.getItem('users')!==null)
    localStorage.removeItem('users');
    localStorage.setItem('users', JSON.stringify(userArr));
    props.history.push('/signup')
  }
  
useEffect(() => {
    setCurrname(localStorage.getItem('currentName'));
}, [])
  
    return (
        <div className="App">
        <div className="container">
          <ToastContainer></ToastContainer>
          <div className="left">
            <h2>Hi {currname}</h2>
            <h5>Please enter your college details</h5>
          </div>
          <div className="right">
        
          <div className="flexBx">
          
          <label>Name of Institution</label><br></br>
          <input type='text'  name='' onChange={(e) => setNameIns(e.target.value)} value={insname}>
          </input> <br></br>
          <label>Course</label><br></br>
          <input type='text'  name='' onChange={(e) => setCourse(e.target.value)} value={course}>
          </input> <br></br>
          <label>Domain</label><br></br>
          <input type='text'  name='' onChange={(e) => setDomain(e.target.value)} value={domain}>
          </input> <br></br>
          <input type='button' value="Next" name='' onClick={handleDetail}>
          </input>   <br></br>
         
        </div>  
      </div>
        </div>
        </div>
      
    )
}

export default Screen2
