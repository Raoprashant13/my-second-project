import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Button from './Button'
import {} from 'react-icons/fa'
import{FaYoutube} from 'react-icons/fa'

const App = () => {
  return (
    <>
    <Navbar/>
   
    <div className='dev'>
      <h1 className='header'> Full screen landing page with transparent navbar</h1> 
      
      <FaYoutube style={{color:'RED',fontSize:180}}/> 
      <h2 className='para'>YOUTUBE 2.O</h2>
       <input type='email' className='inpu' placeholder='email' />
       <input type='password' className='inpu' placeholder='password'/>
     <Button/>
      
    </div>
    
    </>  
  )
}

export default App
