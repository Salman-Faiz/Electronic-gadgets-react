import { useEffect } from "react";
import { useState } from "react";
import Device from "../Device/Device";
import './Devices.css'
import {addToLS, getValueFromLS } from '../../Utilities/localStorage';



const Devices = () => {
    const [devices, setDivices] = useState([]);
    const [cart, setCart]= useState([]);

    useEffect(() => {
        fetch('DemoData.json')
            .then(res => res.json())
            .then(data => setDivices(data));
    }, [])

    // load data from local storage
  useEffect(()=>{
    const existingCart =[];
    console.log('form load data',devices.length);
    if(devices.length>0){
       const storedID =getValueFromLS();
    // console.log(storedID,devices); 

//this process is not recommended ,because in real application there will be the possibilities of thousands or more data..this process will not be best method to find data..
   
    for(const id of storedID){
        console.log(id);
       const device= devices.find(device => device.id === id);
      if(device){
        existingCart.push(device);
      }
    }
    console.log('save cart',existingCart);
    
    }
    setCart(existingCart);
   
  },[devices]);



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