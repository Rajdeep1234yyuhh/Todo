import React from "react";
import auth from "./Auth";


export const LandingPage2 = (props) => {
  return (
    <div className="container px-5 py-5">
      <h1>You are logged in</h1>
     

      <button
      onClick={()=>{
        if(auth.isAuthenticated()){
            props.history.push("/app")
          }
          else{
            props.history.push("/")
      }}}
      className="btn btn-success btn-lg mt-5">Create list</button>
    </div>
  );
};
