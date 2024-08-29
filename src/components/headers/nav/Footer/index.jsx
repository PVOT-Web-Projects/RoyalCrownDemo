import './style3.css';
import { translate } from '../../anim';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <div className="footer_navbar">
            <ul className='ul'>
                <motion.li 
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    <span>Email:</span>Pvot@gmail.com
                </motion.li>
            </ul>
            <ul className='ul'>
                <motion.li  
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    <span>Contact:</span> 123456789
                </motion.li>
            </ul>
            <ul className='ul'>
                <motion.li
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    <span>Social:</span> Instagram , Facebook
                </motion.li>
            </ul>
            <ul className='ul'>
                <motion.li
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    Address:
                </motion.li>
                <motion.li 
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    Testing address for navbar  123456
                </motion.li>
            </ul>
        </div>
    )
}
