// import logo from './logo.svg';
import React, { useState } from 'react'
import About from './About'
import Alert from './Alert'
import './App.css'
import Navbar from './components/Navbar'
import Textform from './Textform'
// import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

function App() {
  const[mode, setmode]= useState('light') 
  const [alert, setAlert] = useState(null) 
  const [theme, setTheme]= useState(mode==="light"? "Dark Theme":"Light Theme");
  const setMode=(givemode)=>{
      setTheme(givemode);
  }
  const showAlert=(message, type)=>{
    setAlert({
    msg: message,
    type: type
    })
  }//This function now can be used in all the components
  setTimeout(() => {
    setAlert(null);
  }, 5000);
  const toggleMode=()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor="rgb(0, 0, 74)";
      document.body.style.color="white";
      showAlert("Dark mode activated", "success");
      setMode("Light Theme");
      // document.title="TextUtils-DarkMode";
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Light mode activated", "success");
      setMode("Dark Theme");
    }
  }
  const colorTheme=(color)=>{
    if(mode==="dark"){
      if(color==="green"){
        console.log("green");
        document.body.style.backgroundColor="rgb(0, 62, 41)";
        // setmode("dark");
      }
      else if(color==="blue"){
        console.log("blue");
        document.body.style.backgroundColor="rgb(0, 0, 74)";
        // setmode("dark");
      }
      else if(color==="purple"){
        console.log("purple");
        document.body.style.backgroundColor="rgb(52, 0, 56)";
        // setmode("dark");
      }
    }
  }
  return (
  <>
    <Router>

      <Navbar title="TextUtil" colorTheme={colorTheme} navtext1="Home" navtext2="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <Textform theme={theme} setMode={setMode} mode={mode} showAlert={showAlert} heading="Enter the Text to analyze"/>
          </Route>
        </Switch>
    </Router>
  </>
  )
}

export default App
