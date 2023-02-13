import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Components/Home/Home';
import {   BrowserRouter,
  Routes,
  Route,
   } from 'react-router-dom';
import Userinformation from './Components/UserInfo/Userinformation';
import Login from './Components/Login/Login';
function App() {

  return (
    <div >
      <BrowserRouter>
        {/* Routes Definition */}
        <Routes>
          {/* Parent Navigation Routes */}
          <Route path="/" element={<Home/>} />
          <Route path="/user-info" element={<Userinformation/>} />
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/secondpage" element={<SecondPage/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
