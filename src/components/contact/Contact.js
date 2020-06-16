import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
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


// function Map() {
//     return (
//         <GoogleMap defaultZoom={10} defaultCenter={{ lat: 28.687757, lng: 77.332158 }} />
//     )
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map))

const Contact = () => {
    const [message, setMessage] = useState({
        msg: null,
        class: ''
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleForm = (e) => {
        e.preventDefault()
        const { name, email, message } = e.target
        fetch('https://68.183.90.34:4000/send', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                message: message.value
            })
        }).then(res => res.json())
            .then(result => {
                if (result.msg === 'success') {
                    setMessage({
                        msg: 'Message is sent',
                        class: 'alert alert-success'
                    })
                    setIsSubmitted(true)
                }
                else {
                    window.location.reload()
                    setInterval(3000);
                    setMessage({
                        msg: 'Message not send',
                        class: 'alert alert-danger'
                    })
                }
            })
            .catch(err => console.log('error', err))
    }




    return (

        <motion.div
            className='container min-vh-100'
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{ duration: 0.5 }}>
            <div className='row'>
                {/*<WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px`,width: '-webkit-fill-available' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />*/}
            </div>
            <div className='row'>

                <div className='col-sm text-left p-4 m-4'>
                    <h2>Contact info</h2>
                    <p><b>Address:</b>Shalimar garden <br></br>Ghaziabad U.P India</p>
                    <p><b>Mail:</b>itsmeankit12feb@gmail.com</p>
                    <p><b>Phone:</b>9958071589</p>
                </div>
                <div className='col-sm p-4 m-4'>
                    {message.msg != null && <div className={message.class}>{message.msg}</div>}

                    {!isSubmitted
                        ? <form onSubmit={handleForm}>
                            <h3>Leave a message</h3>
                            <lable>Name</lable>
                            <br></br>
                            <input name='name' type='text'></input>
                            <br></br>
                            <lable>Email</lable>
                            <br></br>
                            <input name='email' type='email'></input>
                            <br></br>
                            <label>Message</label>
                            <br></br>
                            <textarea name='message' rows='5'></textarea>
                            <br></br>
                            <button type='submit' className='btn btn-success'>Send</button>
                        </form>

                        : null
                    }
                </div>

            </div>
        </motion.div>


    )
}


export default Contact;