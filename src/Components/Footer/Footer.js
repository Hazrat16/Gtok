import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <h1 className="text-center">Feel Free To Contact Us</h1>
            <form>
                <input name="name" type="text" className="feedback-input" placeholder="Name" />
                <input name="email" type="text" className="feedback-input" placeholder="Email" />
                <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    );
};

export default Footer;