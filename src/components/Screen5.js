import React,{useState,useEffect} from 'react'
import '../App.css';

function Screen5(props) {
  const [currname, setCurrname] = useState("");
  const handleSubmit = () => {
    props.history.push('/')
  
  }
  useEffect(() => {
    setCurrname(localStorage.getItem('currentName'));
}, [])
    return (
        <div className="App">
        <div className="container">
          <div className="left">
            <h2>We are glad to have<br></br> you {currname}!</h2>
        
        </div>
          <div className="right">
          <div className="flexBx">
            <h1>Thank You!</h1>
            <br></br>
            <h1>Your are successfully  registered</h1>
            <input type='submit' value="Sign in" name='' onClick={() => handleSubmit()}/>
        </div>
          
      </div>
        </div>
        </div>
      
    )
}

export default Screen5
