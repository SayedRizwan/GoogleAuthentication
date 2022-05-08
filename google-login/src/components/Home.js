import React from 'react'
import GoogleLogin from "./GoogleLogin";

const Home = () => {
  return (
    <div>
      <h1>Choose an Account </h1>
      <div className="wrapper">
        <GoogleLogin text={"Log in with Google"}/>
      </div>
    </div>
  )
}
export default Home


