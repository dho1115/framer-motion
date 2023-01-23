import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; //import motion.

const Home = () => {
  return (
    <div className="home container">
      {/* See #ToAninmate(start). */}
      <motion.h2 animate={{fontSize: 53, color: "#ff2994", x: 305, y: 177}}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <button>
          Create Your Pizza
        </button>
      </Link>
    </div>
  )
}

export default Home;