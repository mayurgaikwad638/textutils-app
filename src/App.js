
import './App.css';
import Navbar from './components/Navbar';
//import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import About from './components/About' ;
import TextForm from './components/TextForm' ;
import Alert from './components/Alert';
import { useState } from 'react';
function App() {
  const [mode,setMode] = useState('light') ;
  const [alert,setAlert] = useState(null) ;

  const showAlert = (message,type) => {
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null) ;
    }, 1200);
  }
  const togglemode = () => {
    if(mode==='light'){
      setMode('dark') ;
      document.body.style.backgroundColor = '#353333' ;
      showAlert('Dark mode enabled.','success') ;
    }
    else{
      setMode('light') ;
      document.body.style.backgroundColor = 'white' ;
      showAlert('light mode enabled.','success') ;
    }
  }
  return (
    <>
    
    {/* <Router> */}
    <Navbar title='TextUtils' mode={mode} togglemode={togglemode}></Navbar>
    <Alert alert={alert}></Alert>
    {/* <Routes> */}
      <TextForm mode={mode} alert={showAlert}/>
      
    {/* </Routes>
    </Router> */}
    
    </>
  );
}

export default App;
