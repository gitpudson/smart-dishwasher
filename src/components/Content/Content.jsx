import React, { useContext } from 'react'
import './Content.css'
import MachineNo from '../MachineNo/MachineNo'
import Device from '../Device/Device'
import { StoreContext } from '../../Context/StoreContext'

const Content = () => {

    const { selectMachine } = useContext(StoreContext);
    return (
        <div className='content'>
            <MachineNo />
            {
                selectMachine !== "" ? <Device /> : <></>
            }
            {/* <Device /> */}
        </div>
    )
}

export default Content
