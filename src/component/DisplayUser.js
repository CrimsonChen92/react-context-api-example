import React from "react";
import { useUserContext, useUserUpdateContext } from "../context/UserContext";
//the useUserC and useUserU is exported and is linked by useContext so now we can use this context api info

export function DisplayUser() {
  const user = useUserContext(); //here we made an user const and linked that to the useUserContext from UserContext.js
  const userUpdate = useUserUpdateContext(); //here we make userUpdate and this is linked to the reducer/dispatch on the UserContext

  return (
    <div>
      <h1>Display User Component </h1>
      <p>{user?.name ? `logged in as ${user.name} ` : "no user"}</p>
      <button
        onClick={() => {
          userUpdate({ type: "ADD_NAME", name: "Chen", age: 29 }); //here we use our userUpdate, which is the dispatch on the other page.
        }} //And we say the type is ADD_NAME from the dispatch reducer on the other page, and we add in the name and age
      >
        logged in
      </button>
      <button
        onClick={() => {
          userUpdate({ type: "CLEAR" });
        }}
      >
        Log Out
      </button>
    </div>
  );
}
