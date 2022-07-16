import React, { useEffect, useState } from "react";
import './app.css'
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import MyRoute from "./Router/MyRoute";

function App() {


  return (
    <>
      <Header />
      <MyRoute />
    </>
  )

}




export default App;
