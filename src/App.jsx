import React, { useContext } from 'react'
import Navbar from './components/Navbar/Navbar'
import { StoreContext } from './Context/StoreContext';
import Home from './pages/Home/Home'

const App = () => {
   const { customerGroup } = useContext(StoreContext);


  return (
    <div className="app">
      <Navbar/>

      {
        customerGroup !== "" ? <Home /> : <></>
      }


    </div>
  )
}

export default App
