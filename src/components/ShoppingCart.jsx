import React from 'react';
import { useCart } from './CartContext';

const ShoppingCart = () => {
    const { cartState, cartDispatch } = useCart();

    const addToCart = (item) => {
        const existingCartItem = cartState.cartItems.find((cartItem) => cartItem.id === item.id);

        if (existingCartItem) {
            cartDispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: existingCartItem.quantity + 1 } });
        } else {
            cartDispatch({ type: 'ADD_TO_CART', payload: { ...item, quantity: 1 } });
        }
    };

    const updateQuantity = (itemId, quantity) => {
        if (quantity > 0) {
            cartDispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity } });
        }
    };

    const removeFromCart = (itemId) => {
        cartDispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    };

    const products = [
        { id: 1, name: 'product 1' },
        { id: 2, name: 'product 2' },
        { id: 3, name: 'product 3' }
    ];

    return (
        <div className="p-4 bg-white dark:bg-gray-800 min-h-screen transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Shopping Cart</h2>
            <ul className="mb-8">
                {cartState.cartItems.map((item) => (
                    <li key={item.id} className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-2 mb-2 rounded">
                        <span className="text-gray-800 dark:text-gray-200">{item.name} - {item.quantity}</span>
                        <div>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-blue-500 text-white rounded ml-2">+</button>
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-red-500 text-white rounded ml-2">-</button>
                            <button onClick={() => removeFromCart(item.id)} className="px-2 py-1 bg-red-600 text-white rounded ml-2">Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id} className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-2 mb-2 rounded">
                        <span className="text-gray-800 dark:text-gray-200">{product.name}</span>
                        <button onClick={() => addToCart(product)} className="px-2 py-1 bg-green-500 text-white rounded">Add To Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;
