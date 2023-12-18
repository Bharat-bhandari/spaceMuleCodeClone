import React from "react";
import Hero from "./components/Hero";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <h3 className="headLine">SpaceMuleCode</h3>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
