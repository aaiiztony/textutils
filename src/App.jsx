import React, { useState } from "react";
import Header from "./MyComponents/Header";
import Hero from "./MyComponents/Hero";
import Alert from "./MyComponents/Alert";
// import Contact from "./MyComponents/Contact";
// import Contact from "./MyComponents/Contact";
// import Footer from "./MyComponents/Footer";
// import About from "./MyComponents/About";
// import {Routes, Route} from "react-router-dom"

const App = () => {
const [mode, setMode] = useState("white"); //check if dark mode is enabled
const toggleMode=()=>{
  if(mode==='black'){
    setMode('white');
    document.body.style.backgroundColor = "#cbb4f587";
    showAlert("Light Mode Enabled", "info");
  }
  else{
    setMode('black')
    showAlert("Dark Mode Enabled", "dark");
    document.body.style.backgroundColor = "rgb(39, 37, 37)"
  }}
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type:  type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2100);
  }
return (
  <>
  {/* PUTING THE HEADER OUTSIDE OF THE ROUTES AS THIS WOULD EXIST THERE ALL THE TIME */}
    <Header link1="Projects" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Hero upc="Uppercase" lwc="Lowercase" mode={mode} showAlert={showAlert}/>
    {/* <Routes> */}
      {/* <Route exact path="/" element={}/> */}
      {/* <Route exact path="/contact" element={}/> */}
      {/* <Contact mode={mode} /> */}
      {/* <Route exact path="/about" element={}/> */}
      {/* <About mode={mode}/> */}
      {/* <Footer/> */}
      {/* </Routes>  */}
    </>
)}

export default App
