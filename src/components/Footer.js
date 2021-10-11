import React from 'react';
import { useHistory } from 'react-router-dom'

export default function Footer() {
    const { push } = useHistory()

    return (
        <footer>
            <div id='footer-container'>
                <div id='footer-contents-container'>
                    <div id='footer-contents'>
                        <div id='contact-us'>
                            <h2>Contact Us</h2>
                        </div>
                        <div id='contact-contents-wrapper'>
                            <div className='contact address'>
                                <div><i className="fa fa-home"></i></div>
                                <div>1234 Lambda School <br />San Jose, CA, 951XX</div>
                            </div>
                            <div className='contact phone'>
                                <div><i className="fa fa-phone"></i></div>
                                <div><a href='tel:XXX-XXX-XXXX'>xxx-xxx-xxxx</a></div>
                            </div>
                            <div className='contact email'>
                                <div><i className="fa fa-envelope"></i></div>
                                <div><a href='mailto: adopt_me@mockmail.com'>adopt_me@mockmail.com</a></div>
                            </div>
                        </div>

                    </div>
                    <div id='follow-us'>
                        <div id='follow-us-container'>
                            <div id='follow-us-header'>
                                <h2>Follow Us</h2>
                            </div>
                            <div id='follow-us-links-container'>
                                <div onClick={() => push('/')}><i className="fa fa-facebook"></i></div>
                                <div onClick={() => push('/')}><i className="fa fa-instagram"></i></div>
                                <div onClick={() => push('/')}><i className="fa fa-github"></i></div>
                                <div onClick={() => push('/')}><i className="fa fa-linkedin"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
