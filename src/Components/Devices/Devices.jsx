import { useEffect } from "react";
import { useState } from "react";
import Device from "../Device/Device";
import './Devices.css'
import {addToLS} from '../../Utilities/localStorage';



const Devices = () => {
    const [devices, setDivices] = useState([]);
    const [cart, setCart]= useState([]);

    useEffect(() => {
        fetch('DemoData.json')
            .then(res => res.json())
            .then(data => setDivices(data));
    }, [])

    const handleAddToCart = (device) => {
        console.log('cart added');
        const newCart = [...cart,device];
        setCart(newCart);
        console.log(device.id)
        addToLS(device.id)
        
    }
    return (
        <div >
            <h2 style={{ padding: '15px' }}>Total Devices {devices.length}</h2>
            <h4 style={{ padding: '15px' }}  >Selected Products : {cart.length}</h4>
            <div className="products-container">
                {
                    devices.map(device => <Device 
                        device={device}
                        key={device.id}
                      
                        handleAddToCart={handleAddToCart}
                        ></Device>)
                }

            </div>


        </div>
    );
};

export default Devices;