import './App.css';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { TextForms } from './components/TextForms';
import React, { useState } from 'react';
import { Alert } from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#092a46'
      showAlert('Dark Mode Enabled', 'success')
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode Enabled', 'success')
    }
  }


  return (
    <>
      <Router>
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/About" element={<About mode = {mode} toggleMode={toggleMode}/>}></Route>
            <Route
              exact path="/" element={<TextForms showAlert={showAlert} heading='Enter text to analyse' mode={mode} />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
