import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

//See #variants.
const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring' /* default */, delay: 1.25 }
  }
}

const nextVariants = {
  hidden: {
    x: '-100vw'
  },
  visible: {
    x: 0, //See #animating x:0
    transition: {
      type: 'spring', stiffness: 305 //see #stiffness.
    }
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      {/* See #variants */}
      motion.
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{ scale: 1.5, originX: 0, color: 'burlywood' }}
              transition={{ type: 'spring', stiffness: 355 }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>
      {/* Please see #Initial. inside references for initial prop. */}
      {pizza.base && (
        <motion.div className="next"
          variants={nextVariants} //See #variantPropagation.
        >
          <Link to="/toppings">
            <motion.button
              whileHover={{ scale: 1.5, textShadow: '0px 0px 55px rgb(255, 255, 255)', boxShadow: '0px 0px 55px rgb(255, 255, 255)' }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;