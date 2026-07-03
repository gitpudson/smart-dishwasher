import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';

const Navbar = () => {
    const { isLoadingNavbar,isLoadingSideBar, navbarMenu,setSelectNavbar,customer,setSelectSideBar,setSelectMachine } = useContext(StoreContext);
     const [menu, setMenu] = useState("");

    const menuClick = (item) => {
        setMenu(item.customer_group);
        setSelectNavbar(item.customer_group);
        setSelectSideBar("");
        setSelectMachine("");
    }


    return (
        <>

            <div className="title">
                Smart Dishwasher
            </div>

            {(isLoadingNavbar || customer.length === 0) && <center> <div><img className='loading' src="./spinner.svg" alt="" /></div> </center>}
            {/* {(isLoadingNavbar || customer.length === 0) && <center> <div><img className='loading' src="./smart-dishwasher/spinner.svg" alt="" /></div> </center>} */}


            <div className="navbar">
                 
                 {(!isLoadingNavbar) &&<hr />}
                {(navbarMenu.length !== 0) &&
                    
                    <div className="navbar-menu">
                        {
                            navbarMenu.map((item, index) => {
                                return (
                                    <div key={index} onClick={() => menuClick(item)} className={menu === item.customer_group ? "active" : ""}>
                                        { item.customer_group}
                                    </div>
                                )
                            }
                            )
                        }


                    </div>
                }

            </div>

        </>
    )
}

export default Navbar
