import React from 'react';
import '../App.css';
import NavBar from '../components/NavBar'
import { useEffect, useState} from 'react';
import jwt_decode from "jwt-decode"
import TestDomain from '../components/Test-Domain';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

const clientId = "23929124380-5kl26aj3kc0898vq72v3lqel50brpbg8.apps.googleusercontent.com";

function App() {
const [user, setUser] = useState ({})

//   function handleCallBackResponse (response){
//     var userObject = jwt_decode(response.credential);
//     setUser(userObject);
//     document.getElementById("signInDiv").hidden = true;

//   }
//   function handleSignOut(event){
//     setUser({});
//     document.getElementById("signInDiv").hidden = false;
//   }
// useEffect (()=>{
// /* global google */
// google.accounts.id.initialize({
//   client_id: "23929124380-5kl26aj3kc0898vq72v3lqel50brpbg8.apps.googleusercontent.com",
//   callback: handleCallBackResponse
// })
// google.accounts.id.renderButton(
//   document.getElementById("signInDiv"),
//   {theme: "outline", size: "large"}
// )
// },[]);

  return (
    <div className="App">
      {/* <div id="signInDiv"></div>
      {Object.keys(user).length !== 0 &&
      <button onClick={(e)=> handleSignOut()}>Sign Out</button>
      }
      {user &&
      <div> 
        <img src = {user.picture}></img>
        <h3>{user.name}</h3>
      </div>} */}
      <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />;
        <NavBar/>
        <TestDomain/>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
