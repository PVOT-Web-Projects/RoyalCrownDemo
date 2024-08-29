"use client"
import React from 'react'
import Marquee from "react-fast-marquee";
import "./Certification.scss";
import Image from 'next/image';
import intertek from '@/images/certi1.png'
import iso from '@/images/certi2.png'
import {motion} from "framer-motion"
const Certification = () => {
  return (
    <>
     <div className="certification_main" style={{marginTop:"140px"}}>
     <motion.div
     className="certification_heading"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          CERTIFICATIONS
        </motion.div>
     {/* <h2 className='certification_heading'>CERTIFICATIONS</h2> */}
        <Marquee speed={50} loop={0}> 
          <div className='certificate_marqee'>
            <Image className='logocertificate' src={intertek} alt="certificationimg" />
            <Image className='logocertificate' src={iso} alt="certificationimg" />
            <Image className='logocertificate' src={intertek} alt="certificationimg" />
            <Image className='logocertificate' src={iso} alt="certificationimg" />
            <Image className='logocertificate' src={intertek} alt="certificationimg" />
            <Image className='logocertificate' src={iso} alt="certificationimg" />
            <Image className='logocertificate' src={intertek} alt="certificationimg" />
            <Image className='logocertificate' src={iso} alt="certificationimg" />
            <Image className='logocertificate' src={intertek} alt="certificationimg" />
            <Image className='logocertificate' src={iso} alt="certificationimg" />
            
          </div>
        </Marquee>
      </div>
      
    </>
  )
}

export default Certification
