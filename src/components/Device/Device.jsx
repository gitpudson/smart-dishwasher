import React, { useContext, useEffect, useState } from 'react'
import './Device.css'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { BsLightbulb } from "react-icons/bs";

const Device = () => {
    const { isLoadingSideBar, url_api_backend, deviceList, selectSideBar, setSelectMachine, selectMachine } = useContext(StoreContext);
    const [machineNo, setMachineNo] = useState([]);

    // useEffect(() => {

    //     const machine_id = [
    //         ...new Set(deviceList.filter(f => f.branch_name === selectSideBar && f.machine_number === selectMachine).map(item => item.id))
    //     ];

    //     setMachineNo(machine_id);
    //     console.log(machine_id);

    // }, [deviceList, selectSideBar, selectMachine])

    const onSwitch = async (state) => {


        const result = deviceList.find(
            item =>
                item.branch_name === selectSideBar &&
                item.device_name === "Relay1"
        );

        const id = result?.id;

        const post = {
            function: 'updateTodo',
            "payload": {
                "id": id,
                "status": state
            }
        }

        const response = await axios.post(`${url_api_backend}`, post,
            {
                headers: {
                    'Content-Type': 'text/plain',
                },
                mode: "no-cors"
            }
        )

        if (response.data.success) {

        }

    }

    return (
        <>
            {/* <div className='device'>
                <div className="switch">
                    <button onClick={() => onSwitch("on")}>Relay ON</button>
                    <button onClick={() => onSwitch("off")}>Relay OFF</button>
                </div>
                <div className="relay">Relay</div>
                <div className="sensor">Sensor</div>
            </div> */}
            <div className="switch">
                <button onClick={() => onSwitch("on")}>Switch ON Relay1</button>
                <button onClick={() => onSwitch("off")}>Switch OFF Relay1</button>
            </div>

            <div className='device'>
                <div className="relay">

                    {
                        deviceList.filter(f => f.branch_name === selectSideBar && f.machine_number === selectMachine && f.category_device === "Relay").map((item, index) => {
                            return (
                                <div key={index}>
                                    {/* <div>Relay1 : {item.device_name === "Relay1" ? item.status : ""}</div> */}
                                    {item.device_desc} 
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    {item.status === "on" ? "ON" :"OFF"} &nbsp; &nbsp; 
                                    {item.status === "on" ? <BsLightbulb className='icon-light' style={{color:"yellow"}}/> :
                                                            <BsLightbulb className='icon-light' style={{color:"black"}}/> }
                                </div>
                            )
                        }
                        )
                        
                    }

                    {
                        deviceList.filter(f => f.branch_name === selectSideBar && f.machine_number === selectMachine && f.category_device === "Sensor").map((item, index) => {
                            return (
                                <div key={index}>
                                    {/* <div>Relay1 : {item.device_name === "Relay1" ? item.status : ""}</div> */}
                                    {item.device_desc} &nbsp; &nbsp; &nbsp; &nbsp;{item.status}  องศา
                                </div>
                            )
                        }
                        )
                        
                    }

                </div>
                {/* <div className="sensor">Sensor</div> */}
            </div>


        </>
    )
}

export default Device
