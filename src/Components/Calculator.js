import React, { useState } from 'react';
import '../Css/Calculator.css';


const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    setExpression(expression + value);
  };

  const handleClear = () => {
    setExpression('');
  };

  const handleEvaluate = () => {
    try {
      setExpression(String(eval(expression)));
    } catch (error) {
      setExpression('Error');
    }
  };

  const [items, setItems] = useState([
    { id: 1, name: "Iphone 14", price: 1999 },
    { id: 2, name: "Smart TV", price: 799 },
    { id: 3, name: "Air pods", price: 129 }
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart([...cart, item]);
  };

  return (
    <div>
        <h3>To see the Second project <br/> <span>SCROLL DOWN</span></h3>

        <div className="calculator">
            <h1>CALCULATOR</h1>
        <div className="expression">{expression}</div>
        <div className="buttons">
            <button className="number" onClick={() => handleClick('1')}>1</button>
            <button className="number" onClick={() => handleClick('2')}>2</button>
            <button className="number" onClick={() => handleClick('3')}>3</button>
            <button className='char' onClick={() => handleClick('+')}>+</button>
            <button className="number" onClick={() => handleClick('4')}>4</button>
            <button className="number" onClick={() => handleClick('5')}>5</button>
            <button className="number" onClick={() => handleClick('6')}>6</button>
            <button className='char' onClick={() => handleClick('-')}>-</button>
            <button className="number" onClick={() => handleClick('7')}>7</button>
            <button className="number" onClick={() => handleClick('8')}>8</button>
            <button className="number" onClick={() => handleClick('9')}>9</button>
            <button className='char' onClick={() => handleClick('*')}>x</button>
            <button className='char' onClick={handleClear}>C</button>
            <button className="number" onClick={() => handleClick('0')}>0</button>
            <button className='char' onClick={handleEvaluate}>=</button>
            <button className='char' onClick={() => handleClick('/')}>÷</button>
        </div>
        <footer>
            A project by Saad Kaabouche
        </footer>
        </div>

    {/* the second project SHOPPING CART */}

        <div className="container">
      <h2 className="title">Shopping Cart</h2>
      <h2 className="description">After adding to the cart <br/> the item will show bellow.</h2>
      
      <div className="items">
        {items.map(item => (
          <div key={item.id} className="item">
            <p className="item-name">{item.name}</p>
            <p className="item-price">${item.price}</p>
            <button className='btn' onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h3 className="title">Cart</h3>
      <div className="cart">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <p className="cart-item-name">{item.name}</p>
            <p className="cart-item-price">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
    </div>

  );
};






export default Calculator;