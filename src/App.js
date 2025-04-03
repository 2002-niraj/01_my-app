import { useState } from 'react';
import  Navbar from './components/Navbar';
import  TextForm  from  './components/TextForm'

import Alert from './components/Alert'
  
function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  function showAlert(message,type){
        setAlert({
          msg:message,
          type:type
        })

        setTimeout(()=>{
            setAlert(null)
        },1500)
  }

  function toogleMode(){
    if(mode == 'light'){
      setMode('dark')
      showAlert("Dark mode has been enabled","Success")
    }
    else{
      setMode('light')
      showAlert("Light mode has been enabled","Success")
    }
  }
  
  return (
  <div className={`bg-${mode} ${mode == 'dark' ? "text-light" : "text-dark"}`}> 
   <Navbar title="TextUtils" mode={mode}  toogleMode = {toogleMode} />
   <Alert alert={alert}></Alert>
   <div className='container my-3'>
    <TextForm showAlert={showAlert} heading="Enter to text to analyze below"></TextForm>
   </div>
  </div>
  );
}

export default App;
