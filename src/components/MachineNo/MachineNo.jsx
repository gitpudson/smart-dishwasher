import React, { useContext, useEffect, useState } from 'react'
import './MachineNo.css'
import { StoreContext } from '../../Context/StoreContext';

const MachineNo = () => {
    const { isLoadingSideBar, deviceList, selectSideBar,setSelectMachine,selectMachine } = useContext(StoreContext);
    const [machineNo, setMachineNo] = useState([]);

    useEffect(() => {

        const machine_number = [
            ...new Set(deviceList.filter(f => f.branch_name === selectSideBar).map(item => item.machine_number))
        ];

        setMachineNo(machine_number);
        

    }, [deviceList, selectSideBar])
   

    const menuClick = (no) => {
        setSelectMachine(no);
        console.log(selectMachine);
    }

    return (
        <div className='machine-no'>

            {(selectSideBar !== "" ) &&
                machineNo.map((no, index) => {
                    return (
                        // <div key={index} className='sidebar-item' onClick={() => setSelectMachine(no)}>
                        <div key={index} className='sidebar-item' onClick={() => setSelectMachine(no)}>
                            <div className='machineNo-item-name'>{no}</div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default MachineNo
