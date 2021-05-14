import React, {useState, useEffect} from 'react';
import '../App.css';

//VIEW PAGE OF ENTIRE PROFILE DETAILS

function Screen7(props) {
  const [user, setUsers] = useState({});
  const [path, setPath] = useState("");

  useEffect(() => {
    var userArr = JSON.parse(localStorage.getItem('users'));
    var userName = localStorage.getItem('currentUser');
  
    setPath(path);
    for (let i = 0; i < userArr.length; i++){
      if (userArr[i].username == userName)
      {
        setUsers(userArr[i]);
        return
        }
    }
  }, [])
  const  handleClose = () => {
    props.history.push('/')
  }
  
  return (
    <div className="App">
      <div className="containerend">
     
        <h2 style={{ textAlign:"center",padding:'20px'}}>User Profile Card</h2>

        <div class="card">
          
          <img src={user.profilepic} alt="pic" />
            <p>{ user.name}</p>
            <p >{ user.course}</p>
            <p>{user.insname}</p>
            <p>{user.domain}</p>
            <p>{user.phoneNumber}</p>
            
 
        </div>
        <input type='submit' value="Close" name='' onClick={() => handleClose()}/>
      </div>
      </div>
  );
}

export default Screen7;
