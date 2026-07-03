import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext();

const StoreContextProvider = (props) => {

const url_api_backend = "https://script.google.com/macros/s/AKfycbyHsYdEpFtYJ3PZ7XUzNZnemdOnfWcUFh6fIswM_Yf-uCVHfC_vio3gQQ9mQXPwgyGhzw/exec";

 const [isLoading,setIsLoading] = useState(true);
const [customerGroup,setCustomerGroup] = useState([]);  //เมนูกลุ่มลูกค้า




 const fetCustomerGroup = async () => {
        const post = {
            function: 'getCustomerGroup',
            payload: {

            }
        }

        setIsLoading(true)
        const response = await axios.post(`${url_api_backend}`, post,
            {
                headers: {
                    'Content-Type': 'text/plain',
                },
                mode: "no-cors"
            }
        )

        if (response.data.success) {
            // setDataBuilding(response.data.data);
            setCustomerGroup(response.data.data);
            setIsLoading(false)
            console.log(response.data.data);
        }

    }


        useEffect(() => {
        fetCustomerGroup();  
       
    },[])

    const contextValue = {
        url_api_backend,
        isLoading,
        setCustomerGroup,
        customerGroup,
        // setMenuCustomer,
        // menuCustomer,
        // setCustomer,
        // customer,
        // setSelectCustomer,
        // selectCustomer,
        // deviceList
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );

}

export default StoreContextProvider;