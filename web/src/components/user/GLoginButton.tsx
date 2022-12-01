import React, { useEffect, useRef, useState } from "react";
import jwt_decode from "jwt-decode";
import { Button } from "@mui/material";

const client_id: string = process.env.REACT_APP_GOOGLE_ACCOUT_ID;

function GLoginButton(): JSX.Element {
  const [user, setUser] = useState ({})
  const kk = Object.keys(user).length;

  const handleCallBackResponse = (response) => {
    console.log('sign in = ', user)
    setUser(jwt_decode(response.credential));
    document.getElementById("signInDiv")!.hidden = true;
  }
  const handleSignOut = () => {
    setUser({});
    document.getElementById("signInDiv")!.hidden = false;
  }

  useEffect (()=>{
    window.google!.accounts.id.initialize({
      client_id: client_id,
      callback: handleCallBackResponse
    })
    console.log(user);
    window.google!.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    )
  },[]);

  useEffect( () => {

  });

  return (
  // <div>
  //     <div id="signInDiv"></div>
  //       {Object.keys(user).length !== 0 &&
  //       <button onClick={(e)=> handleSignOut()}>Sign Out</button>
  //       }
  //       {user &&
  //     <div> 
  //       <img src = {user.picture!}></img>
  //       <h3>{user.name!}</h3>
  //     </div>}
  // </div>
  <div>
    {
      user ? 
      <Button 
        // id="signInDiv"
        onClick={(event) => {handleCallBackResponse(event)}}
        color="inherit">
        Login
      </Button> :
      <Button onClick={(e)=> handleSignOut()}>Sign Out</Button>
    }
  </div>
  );
}

export default GLoginButton;