import React from "react";
import auth from "./Auth";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deletTodo, removeAll } from "./Actions/index";
import "./App.css";

export const AppLayout = (props) => {
  const list = useSelector((state) => state.Reducer1.list);
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState();
  return (
    <>
      <div className=" px-13 ">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
            placeholder="Add a Todo Here and click on the plus button on RHS to add"
            aria-label="Todo"
            aria-describedby="button-addon2"
          />
          
          <button
            className=" fa fa-plus add-btn btn btn-dark btn-outline-light"
            type="button"
            title="Add Todo"
            id="button-addon2 btn-22"
            onClick={() =>{
              if(inputData==''){
              alert("Add a todo first")}
              else
              dispatch(addTodo(inputData), setInputData([""]))}}
          ></button>
        </div>
        <div>
          <div>
            {list.map((elem) => {
              if (elem.data) {
                return (
                  <div key={elem.id} id="show-element">
                    <div id="newItem">{elem.data}</div>
                    <button
                      className=" far fa-trash-alt add-btn btn btn-outline-danger btn-lg "
                      type="button"
                      title="Delet Todo"
                      id="button-trash"
                      onClick={() =>
                        dispatch(deletTodo(elem.id), setInputData([""]))
                      }
                    ></button>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <br />
        <br />

        <div className="d-grid gap-2 d-md-block">
          <button 
          
            onClick={() => dispatch(removeAll())}
            className="btn btn-primary"
            type="button"
          >
            Remove All
          </button>
        </div>
      </div>
      <br />
      <br />


      <div className="">
        <button
          className=" btn btn-danger"
          onClick={() => {
            auth.logout(() => {
              props.history.push("/");
              if(auth.isAuthenticated()){
                console.log("True")
              }
              else{
                console.log("false")
              }
            });
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
};
