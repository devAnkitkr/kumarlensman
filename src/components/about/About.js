import React from 'react'
import { motion } from "framer-motion"


const variants = {
    enter: {
        opacity: 0,
        x: 1000
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: {
        zIndex: 0,
        x: -1000,
        opacity: 0
    }
}


function About() {
    return (
        <motion.div
            className='container-fluid text-center d-flex align-items-center p-4' style={{ minHeight: '73vh' }}
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{ duration: 0.5 }}>
            <div className='p-4 m-4'>
                <h1>Kumar Ankit</h1>
                <h3>PROFESSIONAL PHOTOGRAPHER</h3>
                <p>Nice to meet you, friend! My name is Kumar Ankit. I’m a professional photographer from New Delhi, India. I hope, that you will enjoy with my photo portfolio and after that we can create something great together!</p>
                <p>Through the lens the world looks different and i would like to show you this difference. I learned that from age 10, when I was first time take photos on manual camera with my Uncle. After that with years of practice and tons of experience I learned the techniques, that helps me in my work with modern brands and companies. And all of this may be yours, just get in touch.</p>
                <div>
                    <i className="fab fa-facebook fa-3x m-2"></i>
                    <i className="fab fa-twitter fa-3x m-2"></i>
                    <i className="fab fa-instagram fa-3x m-2"></i>
                    <i className="fab fa-flickr fa-3x m-2"></i>
                </div>
            </div>
        </motion.div>
    )
}

export default About
