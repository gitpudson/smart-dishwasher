import React, { useContext } from 'react'
import './Home.css'
import { StoreContext } from '../../Context/StoreContext';
import Sidebar from '../../components/Sidebar/Sidebar';
import Content from '../../components/Content/Content';

const Home = () => {
  const { selectNavbar, selectSideBar } = useContext(StoreContext);


  return (
    <div className='home'>
      <div className="menu-side-bar">
        {
          selectNavbar !== "" ? <Sidebar /> : <></>
        }
      </div>
      <div className="menu-content">

        {
          selectSideBar !== "" ? <Content /> : <></>

        }

      </div>
    </div>
  )
}

export default Home
