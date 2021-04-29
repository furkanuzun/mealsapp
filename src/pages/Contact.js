import React, { useState } from 'react'
import Navigation from '../components/Navigation'

export default function Contact() {

    const [yourMessage, setYourMessage] = useState(null);
    const [inputHasError, setInputHasError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(yourMessage !== null && yourMessage.length > 8) {
            alert('Congrats! Your message was submitted.');
            document.getElementById("contactForm").reset();
        }
        else {
            setInputHasError(true);
        }
    }

    const handleMessage = (event) => {
        setInputHasError(false);
        setYourMessage(event.target.value);
    }
    return (
        <>
            <Navigation />
            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-5">
                    <div className="col-span-2 col-start-2">
                        <h1 className="page-title">Contact Form</h1>
                        <p className="sub-title">Contact with us for anything.</p>
                    </div>
                    <div className="col-span-2 col-start-2">
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-5">
                                <div className="col-span-1">
                                    <input className="w-full focus:outline-none focus:border-gray-300 py-2 px-4 border border-gray-100 rounded" type="text" required placeholder="Name" />
                                </div>
                                <div className="col-span-1">
                                    <input className="w-full focus:outline-none focus:border-gray-300 py-2 px-4 border border-gray-100 rounded" type="mail" required placeholder="Mail" />
                                </div>
                                <div className="col-span-2">
                                    <textarea onChange={handleMessage} className="resize-none w-full focus:outline-none focus:border-gray-300 py-2 px-4 border border-gray-100 rounded" placeholder="Your Message (must be 10 characters min)" name="message" id="message" cols="30" rows="5">
                                    </textarea>
                                    {inputHasError && <div className="text-red-500 my-2">* Your message must be min 8 characters.</div> }
                                </div>
                                <div className="col-span-2 flex justify-center">
                                    <button className="focus:outline-none active:outline-none bg-green-500 py-2 text-lg text-white px-20 rounded-lg" types="submit">Gönder</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
