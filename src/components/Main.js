import React, { useState }  from 'react';
import '../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// LOGIN SCREEN ALONG WITH REGISTER 

function App(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentuser, setCurrentUser] = useState("");
  

    const handleregister=()=>{
        props.history.push('/name')
    }
    const handleSubmit = (event) => {
      event.preventDefault()
      if (!username || !password) {
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
    const users = JSON.parse(localStorage.getItem('users')) == null ? [] : JSON.parse(localStorage.getItem('users'));
      console.log(users);
      console.log(username)
    for (let i = 0; i < users.length; i++) {
      if (users[i].username == username) {

        if (users[i].password == password) {
          localStorage.setItem('currentUser', username);
          toast.success("Successfully LoggedIn", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            closeButton:'0.1px'
        });    
          localStorage.setItem('currentUser', username);
          props.history.push("/upload");
          return
        }
      }
    }
    toast.warning("User not valid", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      closeButton:'0.1px'
  });
  }

  return (
    <div className="App">
      <div className="containerBx">
        <ToastContainer></ToastContainer>
        <div className="flex-item">
          <h1>Sign in</h1>
          <input type='text' placeholder="Username" name='' onChange={(e) => setUsername(e.target.value)} value={username}>
          </input>
          <br></br>
          <input type='password' placeholder="Password" name='' onChange={(e) => setPassword(e.target.value)} value={password}>
          </input>   <br></br>
          <input type='button' value="login" name='' onClick={handleSubmit}>
          </input>   <br></br>
          <h5>Dont have account?</h5> <input type='button' value="Register" name='' onClick={handleregister}>
          </input>   <br></br>
         </div>
      </div>
    </div>
  );
}

export default App;
