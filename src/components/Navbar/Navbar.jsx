import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';

const Navbar = () => {
    const { isLoading, customerGroup } = useContext(StoreContext);
     const [menu, setMenu] = useState("");

    const menuClick = (item) => {
        setMenu(item.customer_group);
        // setSelectCustomer("");
    }


    return (
        <>

            <div className="title">
                {/* <Link to="/smart-dishwasher" >Smart Dishwasher</Link> */}
                Smart Dishwasher
            </div>

            {(isLoading) && <center> <div><img className='loading' src="./spinner.svg" alt="" /></div> </center>}


            <div className="navbar">
                 
                 {(!isLoading) &&<hr />}
                {(customerGroup.length !== 0) &&
                    
                    <div className="navbar-menu">
                        {
                            customerGroup.map((item, index) => {
                                // var param = "/smart-dishwasher/";
                                // var customer_group = item.customer_group;
                                return (
                                    // <div key={index} onClick={() => menuClick(item)}>
                                    //     <Link to={param} onClick={()=>setMenuCustomer(customer_group)} className={menu === item.customer_group ? "active" : ""}>
                                    //        { item.customer_group}
                                    //     </Link>
                                    // </div>

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
