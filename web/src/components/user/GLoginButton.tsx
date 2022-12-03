import React, { ReactElement, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { Button } from "@mui/material";
import { GOOGLE_ACCOUNT_ID } from "../../utils/constants";


const client_id: string = GOOGLE_ACCOUNT_ID;

function GLoginButton(): ReactElement {
  const [user, setUser] = useState ({})

  const handleCallBackResponse = (response) => {

    console.log(response.credential)
    setUser(jwt_decode(response.credential));
    document.getElementById("signInDiv")!.hidden = true;
  }
  
  const handleSignOut = () => {
    setUser({});
    document.getElementById("signInDiv")!.hidden = false;
  }

  useEffect (()=>{
    (window as any).google.accounts.id.initialize({
      client_id: client_id,
      callback: handleCallBackResponse
    })
    console.log(user);
    (window as any).google!.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    )
  },[]);

  useEffect( () => {

  });

  return (
  <div>
    {
      user ? 
      <Button 
        id="signInDiv"
        onClick={(event) => {handleCallBackResponse(event)}}
        color="inherit"
        fullWidth
      >
        Login
      </Button> :
      <Button onClick={(e)=> handleSignOut()}>Sign Out</Button>
    }
  </div>
  );
}

export default GLoginButton;