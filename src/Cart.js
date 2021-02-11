import React, {useState} from 'react';


function Cart(){
    let [count, addCount] = useState(1);
    let [isColor, setColor ] = useState(true);
    
    return(
        <div className={ `box ${isColor ? 'red' : 'blue'}`}>
            <h4>Counter Value {count}</h4>
            <button className='btn' onClick={ ()=> addCount(++count)}> Click to Add</button>
            <button className='btn' onClick={ ()=> setColor(!isColor)}>{`Change ${isColor ? 'blue' : 'red'} color`}</button>
            <button className='btn' onClick={ ()=> addCount(0)}> Reset Value</button>
        </div>
    );

}


export default Cart;