import React, { useState, useContext, useReducer } from "react";

const UserContext = React.createContext(); //first we create a context api called UserContext

const UserUpdateContext = React.createContext(); //Here we create another context that update user context

function userReducer(state, action) {
  //here we make a reducer note called userReducer.(not the same as the built in fn called useReducer)
  console.log(state); //this reducer fn will then be used below to be linked by useReducer built in fuction
  switch (action.type) {
    case "ADD_NAME":
      return {
        ...state,
        name: action.name,
        age: action.age,
      };
    case "CLEAR":
      return {};
    default:
      return state;
  }
}

export function UserContextProvider({ children }) {
  //here we destructure {children}, so we don't need to do props.children. This is then exported to the top level js file, which is App.js
  const [userData, dispatch] = useReducer(userReducer, {}); // here we use the built in fn called useReducer, that takes the reducer fn we made above, and an {}
  // we also make a userData and dispatch that links to the useReducer of userReducer
  return (
    //below we give the UUC.provider the value of the dispatch, the UC value of the userData
    <UserUpdateContext.Provider value={dispatch}>
      <UserContext.Provider value={userData}>{children}</UserContext.Provider>
    </UserUpdateContext.Provider>
  );
}

export function useUserContext() {
  //here we link the userContext by doig useContext and making a fn and exporting it to DisplayUser/
  return useContext(UserContext);
}

export function useUserUpdateContext() {
  return useContext(UserUpdateContext);
}
