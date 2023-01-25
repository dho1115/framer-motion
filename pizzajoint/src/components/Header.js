import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  //test comment here.
  return (
    <header>
      <Link to='/'>
        <div className="logo">
          <svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path
              fill="lightseagreen"
              d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            />
            <path
              fill="crimson"
              d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            />
          </svg>
        </div>
      </Link>
      {/* See #Initial In references. */}
      <motion.div className="title"
        initial={{y: -175}}
        animate={{ y: -10 }}
        // transition={{ delay: 0.75, type: "tween" }} //See #type tween
        transition={{ delay: 0.75, type: "spring", stiffness: 150 }} //default type. Also, see #stiffness and #duration.
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header;