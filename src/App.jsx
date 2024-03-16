import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [typeofColor, SettypeofColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  function randomgeneratecolor(length){
      return Math.floor(Math.random()*length);
  }
  function createrandomcolor(){
    const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexColor='#';
    for(let i=0;i<6;i++)
    {
      hexColor+=hex[randomgeneratecolor(hex.length)]
    }
    setColor(hexColor);
  }
  function creatergbcolor(){
    const r=randomgeneratecolor(256);
    const g=randomgeneratecolor(256);
    const b=randomgeneratecolor(256);
    setColor(`rgb(${r},${g},${b})`);
    console.log(color);
  }
  useEffect(()=>{
    typeofColor==='rgb'? creatergbcolor() : createrandomcolor();
    console.log('hello');
  },[typeofColor]);
  return (
    <>
      <div style={{ width: "100vw", padding:"0", height: "100vh", backgroundColor: color }}>
        <button onClick={()=>SettypeofColor('hex')}>create Hex Color</button>
        <button onClick={()=>SettypeofColor('rgb')}>create rgb color</button>
        <button onClick={typeofColor==='hex' ? createrandomcolor :creatergbcolor}>generate random color</button>
        <div>
          <h2 style={{color:"white", fontSize:"55px", fontWeight:"bold", marginTop:"100px"}}>Color value is {color}</h2>
      </div>
      </div>
      
    </>
  )
}

export default App
