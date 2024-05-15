import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div style={{ paddingLeft: '15px' }}>
            <h4>Cart Items :{cart.length}</h4>
            {
                cart.map(product =><div className='cartDiv'>
                   <div >
                   <img className="Cart-Container" src={product.img}></img> 
                    <h5>{product.name}</h5>
                   </div>
                    
                </div>
             )
            }
        </div>
    );
};

export default Cart;