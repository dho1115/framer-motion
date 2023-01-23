import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; //import motion.

const Home = () => {
  return (
    <motion.div className="home container"
      animate={{}}
      // animate={{marginTop: 150, opacity: 0.3, rotateZ: 185}}
    >
      {/* See #ToAninmate(start). */}
      {/* <motion.h2 animate={{fontSize: 53, color: "#ff2994", x: 17}}>
        Welcome to Pizza Joint
      </motion.h2> */}
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        {/* See #ToAninmate(start). */}
        <motion.button
          // animate={{scale: 1.75}}
          animate={{}}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;