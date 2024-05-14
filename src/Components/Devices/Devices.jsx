import { useEffect } from "react";
import { useState } from "react";
import Device from "../Device/Device";
import './Devices.css'



const Devices = () => {
    const [devices, setDivices] =useState([]);

    useEffect(()=>{
        fetch('DemoData.json')
        .then(res => res.json())
        .then(data => setDivices(data));
    },[])
    return (
        <div >
            <h2 style={{padding:'15px'}}>Total Devices {devices.length}</h2>
            <div className="products-container">
                 {
                devices.map(device => <Device device={device}></Device> )
            }

            </div>
            
           
        </div>
    );
};

export default Devices;