import React, { useContext, useEffect,useState } from 'react'
import './Sidebar.css'
import { StoreContext } from '../../Context/StoreContext';
import { BiSend } from "react-icons/bi";

const Sidebar = () => {
    const { isLoadingSideBar, customer, selectNavbar, setSelectSideBar,setSelectMachine } = useContext(StoreContext);
    const [menu,setMenu] = useState("");

    useEffect(() => {
        console.log(customer);

    }, [])

    const menuClick = (item) => {
        setSelectSideBar(item.customer_name);
        setSelectMachine("");
        setMenu(item.customer_name)
    }

    return (
        <>
            {/* {(isLoadingSideBar) && <center> <div><img className='loading' src="./smart-dishwasher/spinner.svg" alt="" /></div> </center>} */}

            <div className='sidebar'>
                {                
                    customer.filter(c => c.customer_group === selectNavbar).map((item, index) => {
                        return (
                            <div key={index} className='sidebar-item' onClick={() => menuClick(item)}>
                                <BiSend className='icon-side-bar' />
                                {/* <div className='sidebar-item-name'>{item.customer_name}</div> */}
                                <div className={menu === item.customer_name ? "active" : "sidebar-item-name"}>{item.customer_name}</div>
                            </div>
                        )
                    })
                
                }
            </div>
        </>

    )
}

export default Sidebar
