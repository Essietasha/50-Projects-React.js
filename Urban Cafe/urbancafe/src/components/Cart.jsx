import React from 'react';
import Modal from './UI/Modal';
import Button from './UI/Button';
import CartItem from './CartItem';
import { currencyFormatter } from '../util/formatting';
import { useContext } from 'react';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

const Cart = () => {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
        return totalPrice + item.quantity * item.price
    }, 0)

    function handleCloseCart(){
        userProgressCtx.hideCart();
    };

    function handleOpenCheckout(){
        userProgressCtx.showCheckout();
    }


  return (
    <Modal className='cart' open={userProgressCtx.progress === 'cart'} onCloseProp={userProgressCtx.progress === 'cart' ? handleCloseCart : null}>
        <h2>Your Cart</h2>
        <ul>
            {cartCtx.items.map(item =>
                <CartItem key={item.id} cartItem={item}/>
                // <CartItem key={item.id} cartItem={item} onIncrease={() => cartCtx.addItem(item)} onDecrease={() => cartCtx.removeItem(item.id)}/>
            )}
        </ul>
        <p className='cart-total'>{currencyFormatter.format(cartTotal)}</p>
        <p className='modal-actions'>
            <Button textOnly onClick={handleCloseCart}> Close </Button>
           {cartCtx.items.length > 0 && <Button onClick={handleOpenCheckout}> Go to Checkout</Button> }
        </p>
    </Modal>
  )
}

export default Cart