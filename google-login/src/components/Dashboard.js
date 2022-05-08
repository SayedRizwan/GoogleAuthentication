import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useHistory } from "react-router-dom";
import { toast} from "react-toastify";

const clientId = '837470057959-cjqh23oq9llmd0qkgo4a70ugs9nj4449.apps.googleusercontent.com';

const Dashboard = () => {
  let history = useHistory();

  const onLogoutSuccess = () => {
    toast.success('Logged out Successfully', {position: "top-center",autoClose: 5000,hideProgressBar: false, closeOnClick: true,pauseOnHover: true,draggable: true,}); 
    localStorage.removeItem('loginID');
    history.push('/');
  };
  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };  
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <div>
      <h1> Dashboard </h1>
      <h4> Insert Id : {JSON.parse(localStorage.getItem('loginID'))} </h4>
      <button onClick={signOut} className="gr__log__button">Logout</button>
    </div>
    
  )
}

export default Dashboard
