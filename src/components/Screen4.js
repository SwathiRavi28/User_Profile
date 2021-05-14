import React, { useState,useEffect } from "react";
import firebase from "../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//MOBILE NO VERIFICATION USIN FIREBASE

function Screen4(props) {

  const [mobile, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [currname, setCurrname] = useState("");
  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    setUpRecaptcha();
    let phoneNumber = "+91" + mobile;
    console.log(phoneNumber);
    let appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // console.log(confirmationResult);
        console.log("OTP is sent");
        toast.primary("OTP sent!!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton:'0.1px'
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmitOtp = (e) => {
    e.preventDefault();
    let otpInput = otp;
    let optConfirm = window.confirmationResult;
    // console.log(codee);
    optConfirm
      .confirm(otpInput)
      .then(function (result) {
        let user = result.user;
        console.log(user)
        var userArr= JSON.parse(localStorage.getItem('users'))
      var obj = userArr[userArr.length - 1];
      obj.phoneNumber = mobile;
      userArr.pop();
      userArr.push(obj);
      localStorage.removeItem('users');
      localStorage.setItem('users',JSON.stringify(userArr));
      props.history.push('/end')
      })
      .catch(function (error) {
        console.log(error);
        toast.warning("Incorrect OTP", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton:'0.1px'
        });
      });
  };
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
            <div id="recaptcha-container"></div>
            <label>Mobile</label><br></br>
            <input type="text" name="mobile" onChange={(e) => setPhoneNumber(e.target.value)} >
            </input> <br></br>
            <input type='button' value="Done" name='' onClick={onSignInSubmit}>
            </input>   <br></br>
            <label>OTP</label><br></br>
            <input id="otp"
              type="text"
              name="otp"
              onChange={(e) => setOtp(e.target.value)} value={otp}>
            </input> <br></br>
            <input type='button' value="Submit" name='' onClick={onSubmitOtp}>
            </input>   <br></br>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Screen4;