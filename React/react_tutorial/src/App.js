import './App.css';
// import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { TextForms } from './components/TextForms';
import React,{useState} from 'react';

function App() {
  const [mode, setmode] = useState('light')
  
  const toggleMode = ()=>{
    if(mode ==='light'){
      setmode('dark')
      document.body.style.backgroundColor = '#092a46'
    }else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
    <Navbar title = 'TextUtils' mode ={mode} toggleMode ={toggleMode}/>
    <TextForms heading = 'Enter text to analyse' mode ={mode}/>
    {/* <About/> */}
    </>
  );
}

export default App;
