import React, { Component } from 'react'

class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <div className="contact-con" id="contact">
                <h1>Contact Us</h1>

                <div className="contact">
                    <div className="left">
                        <h3>call me</h3>
                        <p><i className="fa-solid fa-phone"></i> +2 01210712683</p>
                        <p><i className="fa-solid fa-phone"></i> +2 01140981712</p>
                        <p><i className="fa-brands fa-google"></i> saadelmaasrawy@gmail.com</p>
                        <div className="social-media">
                            <a href="https://www.linkedin.com/in/saadelmaas"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://www.linkedin.com/in/saadelmaas"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/saadelmaas"><i className="fa-brands fa-youtube"></i></a>
                            <a href="https://www.linkedin.com/in/saadelmaas"><i className="fa-brands fa-facebook"></i></a>

                        </div>
                    </div>
                    <div className="right">
                        <h3>Your Name</h3>
                        <input type="text" placeholder='Name' />
                        <h3>Your Email</h3>
                        <input type="text" placeholder='example@any.com' />

                        <button className="send">Send</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Contact;