import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; //import motion.

const Home = () => {
  return (
    // Please see #Initial. inside references for initial prop.
    <motion.div className="home container"
      initial={{opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ delay: 5.3, duration: 3.7 }} //Start this transition after 1.5 seconds.
    >
      {/* See #ToAninmate(start). */}
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          whileHover={{ scale: 1.5 }}
          // whileHover={{ scale: 1.5, transition: { duration: 3.1 } }}
          // whileTap={{ backgroundColor: 'red' }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;