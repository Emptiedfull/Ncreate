
import '../components/styles/contact.css'

import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState('')
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form submitted:', formData);
        setFormStatus('Thank you for your message! We will get back to you soon.');
       
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };


    return (
        <>
          
            <div className="Contact-Main">
                <div className="Contact-hero">
                    <div className="Contact-Title">
                        <h1 data-text="Contact Us"> Contact Us</h1>

                    </div>
                    <div className="Contact-Subtitle">
                        <p>Have a question, comment, or suggestion? We'd love to hear from you! Feel free to contact us using the form below,We strive to respond to all inquiries promptly.</p>
                    </div>
                </div>
                <div className="Contact-form">
                    <div class="contact-form">
                        <span class="circle one"></span>
                        <span class="circle two"></span>

                        <form action="index.html" autocomplete="off">
                            <h3 class="xtitle">Send a message</h3>
                            <div class="input-container">
                                <input type="text" placeholder="Full Name" name="name" class="input" onChange={handleChange} required value={formData.name}/>
                                
                                
                            </div>
                            <div class="input-container">
                                <input type="email" placeholder="Email"name="email" class="input"  onChange={handleChange} required/>
                               
                               
                            </div>
                            <div class="input-container">
                                <input type="tel" name="phone" placeholder="Phone no." class="input" onChange={handleChange} required />
                                
                            </div>
                            <div class="input-container textarea">
                                <textarea name="message" class="input" placeholder="Message" required onChange={handleChange}></textarea>
                               
                            </div>
                            <input type="submit" onClick={handleSubmit} class="btn" />
                            {formStatus && <p className="form-status" >{formStatus}</p>}
                        </form>
                       
                    </div>
                </div>
            

        </div>
        </>
    )
}