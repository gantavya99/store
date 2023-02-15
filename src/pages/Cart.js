import { getNodeText } from '@testing-library/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
import { increment } from '../store/countSlice';
const Cart = () => {
    const dispatch = useDispatch();
    const count = useSelector((state)=>state.count);
    const products = useSelector((state) => state.cart);

    // const incrementCount  = ((counterNumber)=>{
    //     dispatch(increment(counterNumber));
    // })
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                <h1> Count is : {count}</h1>
                <button onClick={()=>dispatch(increment())}>
                    Click here to increase count
                </button>
                {products.map((product) => (
                    <div key={product.id} className="cartCard">
                        <img src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;