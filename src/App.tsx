import React, { useState } from 'react'
import HappyB from './components/HappyB'
import './App.css'

function App() {
  const [showModal,setShowModal]=useState<boolean>(false)


  const clickHandler = (e:React.MouseEvent<HTMLButtonElement>)=>{
  setShowModal(true)
  }
    return (
      <div>
        <button onClick={clickHandler} >отправить открытку</button>
        {showModal && <HappyB setShowModal={setShowModal}  />}
      </div>
    );
  };

 



export default App
