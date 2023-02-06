import React from 'react';
import { Link } from 'react-router-dom';

//Dependencies.
import { motion } from 'framer-motion';

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <div className="toppings container">
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.5, color: '#f8e112', originX: 0 }}
              transition={{ type: 'spring', stiffness: 355 }}
            >
              {/* See #origin in reference. */}
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          whileHover={{
            scale: 1.5,
            textShadow: '0px 0px 55px rgb(255, 255, 255)',
            boxShadow: '0px 0px 55px rgb(255, 255, 255)'
          }}
        >
          Order
        </motion.button>
      </Link>

    </div>
  )
}

export default Toppings;