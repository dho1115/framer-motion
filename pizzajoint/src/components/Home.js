import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; //import motion.

const Home = () => {
  return (
    // Please see #Initial. inside references for initial prop.
    <motion.div className="home container"
      transition={{duration: 7, delay: 7.1}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      // animate={{marginTop: 150, opacity: 0.3, rotateZ: 185}}
    >
      {/* See #ToAninmate(start). */}
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          animate={{}}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;