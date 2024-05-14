import './Device.css'

const Device = ({device}) => {
    const {name,price,img,ratings} =device;
    return (
        <div className="product-style">
            {
         <img src={img} />
       }
            <h3>{name}</h3>
            <h5>Price :{price}</h5>
            <p><small>Ratings : {ratings}</small></p>
            <button style={{margin:'10px',color:'green', background:'skyblue'}}>Purchase</button>
       
        </div>
    );
};

export default Device;