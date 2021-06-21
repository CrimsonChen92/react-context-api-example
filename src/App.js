import React from "react";
import { DisplayUser } from "./component/DisplayUser";
import { UserContextProvider } from "./context/UserContext";
import { DisplayAge } from "./component/DisplayAge";

function App() {
  return (
    <UserContextProvider>
      {/* here we wrap everything with UserContextProvider that we made, so everything is linked to our context */}
      <DisplayUser />
      <DisplayUser />
      <UserContextProvider>
        <DisplayUser />
      </UserContextProvider>
      <DisplayAge />
    </UserContextProvider>
  );
}

export default App;
