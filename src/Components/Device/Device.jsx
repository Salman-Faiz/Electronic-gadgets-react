
import './Device.css'


const Device = ({ device ,handleAddToCart }) => {
    const { name, price, img, ratings,id} = device;
    return (
        <div className="product-style">
            {
                <img src={img} />
            }
            <h3>{name}</h3>
            <h5>Price :{price}</h5>
            <p><small>Ratings : {ratings}</small></p>
            <button onClick={()=>{handleAddToCart(device)}} style={{ margin: '10px', color: 'green', background: 'skyblue' }}>Purchase</button>

        </div>
    );
};

export default Device;