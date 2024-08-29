import React from 'react'
import { motion } from 'framer-motion';
import './style2.css';
import { opacity } from '../../anim';

export default function NavImage({src, isActive}) {
  return (
    <motion.div variants={opacity} initial="initial" animate={isActive ? "open" : "closed"} className="nav_image">
        <img
        src={src}
        alt="image"
        />
    </motion.div>
  )
}