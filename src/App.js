import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { CardWrapper } from './Dashboard/CardWrapper';
import { Button } from '@mui/base';

function App() {
  const [text,setText]=useState("")
  const [show,setShow]=useState(false)
  const AddAnotherList=async()=>{
    try {
      let response=await axios.post("http://localhost:5000/card/addcard",{heading:text})

      console.log("response",response.data)
      setShow(false)
      setText("")
    } catch (error) {
      console.log("error",error)
    }

   
        
  }
  return (
    <div className="App">
      <CardWrapper key={show} />
      <div className='add-new-List'>
      {(show==true)?<>
        <input type="text" placeholder='Enter list Title' value={text} onChange={(e)=>setText(e.target.value)}/>
        <Button onClick={AddAnotherList}>+ Add List</Button>
      </>:
      <Button onClick={()=>setShow(true)}>+ Another List</Button>}
      </div>
  
    </div>
  );
}

export default App;
