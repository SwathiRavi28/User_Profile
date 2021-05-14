import React, { useState }from 'react';
import '../App.css';
import PersonTwoToneIcon from '@material-ui/icons/PersonTwoTone';

// UPDATE PROFILE PICTURE
//CONVERTING THE FILE INTO BASE64 FORMAT AND STORING IN LOCALSTORAGE
function Screen6(props) {
  const [pictures, setPictures] = useState("");
  const imageUpload = (e) => {
  const file = e.target.files[0];
  getBase64(file).then(base64 => {
      var userArr = JSON.parse(localStorage.getItem('users'));
      var username = localStorage.getItem('currentUser');
      var newArr = [];
      console.log(base64)
      for (let i=0; i < userArr.length; i++){
        if (userArr[i].username == username) {
          var obj = userArr[i];
          obj.profilepic = base64;
          newArr.push(obj);
          console.log("if");
        } else {
          newArr.push(userArr[i])
        }

      }
     
    
  localStorage.removeItem('users');
  localStorage.setItem('users',JSON.stringify(newArr));
      // localStorage["fileBase64"] = base64;
      // console.debug("file stored",base64);
    });
  };
 const  handleUpload = () => {
 props.history.push('/dashboard')
  }
  
    const getBase64 = (file) => {
    return new Promise((resolve,reject) => {
       const reader = new FileReader();
       reader.onload = () => resolve(reader.result);
       reader.onerror = error => reject(error);
       reader.readAsDataURL(file);
    });
  }
  return (
    <div className="App">
        <div className="container">
          <div className="left">
            <h2>Add Profile Picture</h2>
          
        </div>
          <div className="right">
          <div className="flexBx1">
          
        {pictures !== "" ?null:
          <PersonTwoToneIcon style={{ fontSize: '200px', color: '#226aee' }} ></PersonTwoToneIcon>}
        <input 
        type="file" 
        id="imageFile" 
        name='imageFile' 
          onChange={imageUpload} />;<br></br>
        <input type='submit' value="Sign in" name='' onClick={() => handleUpload()}/>
          </div>
        </div>
      </div>
      </div>
    
      
  
  );
}

export default Screen6;
