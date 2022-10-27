import './App.css';
import './Ecuatie'
import Ecuatie from './Ecuatie';
import StartComponent from './Start';
import { useState } from 'react';
function App() {
const [gameSetup,setGameSetup]=useState(false)
const [userName,setUserName]=useState('')
const [ecuatii,setEcuatii]=useState(0)
var i=0
var arrNum1=[]
if (gameSetup===true) {
  for (i=0; i<ecuatii ; i++) {
    var num1 = Math.random()*20;
    var num2 = Math.random()*20;
    num1=Math.round(num1)
    num2=Math.round(num2)
    arrNum1.push({'num1':num1,'num2':num2,'index':i,'corect':false})
  }
}
  return (
    <div className="App">
          <>{gameSetup? 
              <Ecuatie setUserName={setUserName} setEcuatii={setEcuatii}
                      
                      arrNum1={arrNum1} startGame={setGameSetup}
                        userName={userName} ecuatii={ecuatii}/>:
              <StartComponent className={'equation'} setUserName={setUserName} setEcuatii={setEcuatii} 

                        userName={userName} ecuatii={ecuatii} startGame={setGameSetup}/>}</>
    </div>
  );
}

export default App;
