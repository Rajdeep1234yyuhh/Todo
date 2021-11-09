import React from "react";
import auth from "./Auth";
import "./Land.css";

export const LandingPage = (props) => {
  return (
    <div className="container px-5 py-2">
      <h1 id="head1">Welcome To the TODO APP</h1>
      <br />

      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            ID/Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            auth.login(() => {

              props.history.push("/Landing")
              if(auth.isAuthenticated()){
                console.log("True")
              }
              else{
                console.log("false")
              }
            });
          }}
        >
          Login
        </button>
      </form>
      <button onClick={()=>
       { alert("You need to log in First")}} className="btn btn-success btn-lg mt-5">Create list</button>
    </div>
  );
};
