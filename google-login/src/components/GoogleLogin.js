import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { useHistory } from "react-router-dom";
import { toast} from "react-toastify";
import axios from 'axios';
// const cors = require('cors');
// app.use(cors())

const clientId = '837470057959-cjqh23oq9llmd0qkgo4a70ugs9nj4449.apps.googleusercontent.com';

const GoogleLogin = (props) => {
  let history = useHistory();

  const onSuccess = async (res) => {
    console.log('Google Login Name', res.profileObj);
     axios.post(`http://localhost:8080/loginGoogle`, {
      email: res.profileObj.email,
      familyName: res.profileObj.familyName,
      givenName: res.profileObj.givenName,
      googleId: res.profileObj.googleId,
      imageUrl: res.profileObj.imageUrl,
      name: res.profileObj.name,
    })
    .then(res => {
      if(res.data.success === true){
        console.log(res.data.usersid);
        localStorage.setItem('loginID',JSON.stringify(res.data.usersid));
        toast.success('Login Successfully', {position: "top-center",autoClose: 5000,hideProgressBar: false, closeOnClick: true,pauseOnHover: true,draggable: true,}); 
        
        history.push('/Dashboard');
      }
      if(res.data.success === false){
        toast.error(res.data.msg, {position: "top-center",autoClose: 5000,hideProgressBar: false, closeOnClick: true,pauseOnHover: true,draggable: true,}); 
      }
    })
  };        
  
  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  });
           
  return (<>
    <button onClick={signIn} className="gr__button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>       
        <span className="buttonText">{props.text} </span>
    </button>
  </> )
}
export default GoogleLogin
