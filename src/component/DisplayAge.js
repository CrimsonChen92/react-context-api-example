import React from "react";
import { useUserContext, useUserUpdateContext } from "../context/UserContext";

export function DisplayAge() {
  const userAge = useUserContext();
  const userAgeUpdate = useUserUpdateContext();

  return (
    <div>
      <h1>Display User Age</h1>
      <p>
        {userAge ? `The user age is ${userAge.age}` : "Click for the user Age"}
      </p>
      <button
        onClick={() => {
          userAgeUpdate({ type: "ADD_NAME", age: 29 });
        }}
      >
        Get User Age
      </button>
      <button
        onClick={() => {
          userAgeUpdate({ type: "CLEAR" });
        }}
      >
        Clear Age
      </button>
    </div>
  );
}
