import { createContext } from 'react';

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    updateItemQuantity: () => {}
});

// export function CartContextProvider({ children }){
//     return <CartContext.Provider>{children}</CartContext.Provider>
//   }
// export default CartContext;
