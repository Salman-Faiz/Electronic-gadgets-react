const getValueFromLS = () => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
        return JSON.parse(cartData)
    }
    return []
}

const saveCartToLS = (cart) => {
    const stringifiedValue = JSON.stringify(cart);

    localStorage.setItem('cart', stringifiedValue);
}

const addToLS = (id) => {
    const cart = getValueFromLS();
    cart.push(id);

    saveCartToLS(cart)
}

export {addToLS ,getValueFromLS}