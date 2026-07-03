import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext();

const StoreContextProvider = (props) => {

    const url_api_backend = "https://script.google.com/macros/s/AKfycbyHsYdEpFtYJ3PZ7XUzNZnemdOnfWcUFh6fIswM_Yf-uCVHfC_vio3gQQ9mQXPwgyGhzw/exec";

    const [isLoadingNavbar, setIsLoadingNavbar] = useState(true);
    const [isLoadingSideBar, setIsLoadingSideBar] = useState(true);
    const [navbarMenu, setNavbarMenu] = useState([]);  //เมนูกลุ่มลูกค้า
    const [customer, setCustomer] = useState([]);  //เมนู Side bar กลุ่มลูกค้า
    const [deviceList, setDeviceList] = useState([]);
    const [selectNavbar, setSelectNavbar] = useState("");
    const [selectSideBar, setSelectSideBar] = useState("");
    const [selectMachine, setSelectMachine] = useState("");



    const fetNavbarMenu = async () => {
        const post = {
            function: 'getCustomerGroup',
            payload: {

            }
        }

        setIsLoadingNavbar(true)
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
            setNavbarMenu(response.data.data);
            setIsLoadingNavbar(false)
            console.log(response.data.data);
        }

    }

    const fetSidebar = async () => {
        const post = {
            function: 'getCustomer',
            payload: {

            }
        }

        setIsLoadingSideBar(true)
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
            setCustomer(response.data.data);
            setIsLoadingSideBar(false);
            // console.log(response.data.data);
        }

    }

    const fetDevice = async () => {
        const post = {
            function: 'getDevice',
            payload: {

            }
        }

        // setIsLoading(true)
        const response = await axios.post(`${url_api_backend}`, post,
            {
                headers: {
                    'Content-Type': 'text/plain',
                },
                mode: "no-cors"
            }
        )

        if (response.data.success) {
            setDeviceList(response.data.data);
            // setIsLoading(false)
            // console.log(response.data.data);
        }

    }

    useEffect(() => {
        fetNavbarMenu();

    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            fetSidebar();
            fetDevice(); // Call the function to fetch data
        }, 3000); // Update every 1 second

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    const contextValue = {
        url_api_backend,
        isLoadingNavbar,
        isLoadingSideBar,
        setNavbarMenu,
        navbarMenu,
        setCustomer,
        customer,
        setSelectNavbar,
        selectNavbar,
        setSelectSideBar,
        selectSideBar,
        setSelectMachine,
        selectMachine,
        deviceList
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );

}

export default StoreContextProvider;