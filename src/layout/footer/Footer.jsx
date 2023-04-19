import React from 'react'
import { FiMail } from 'react-icons/fi'
import logo from '../../image/footer-logo.png'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineGooglePlus } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { IoLogoYoutube } from 'react-icons/io'
import './footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <div className='footer-main'>
                <div className='footer-sign'>
                    <div className='sign-up'>
                        <div className='sign'>
                            <div className='icon'>
                                <FiMail />
                            </div>
                            <div className='paragraph'>
                                <h2> Sign up for our Newsletter</h2>
                                <h4>Get the Latest Updates and News from Tree For Life</h4>
                            </div>
                        </div>
                        <div className='input'>
                            <div className='input-box'>  <input placeholder='Enter Your Email' /></div>
                            <button type='button'>Subscribe</button>
                        </div>
                    </div>
                    <div className='footer-contact'>
                        <div className='blog'>

                            <h1>BLOG</h1>
                            <div className='blank'>
                                <div className='blank-box-1'>
                                </div>
                                <h2>CONTACT US</h2>
                                <div className='blank-box-2'>
                                </div>
                            </div>
                            <h3>info@treeforlife.net
                                <br />+91 98105 01764
                            </h3>

                        </div>


                        <div className='tree'>
                            <img src={logo} alt='' />
                        </div>


                        <div className='map'>
                            <h1>VIEW MAP</h1>
                            <div className='blank'>
                                <div className='blank-box-3'>
                                </div>
                                <h2>CONTACT WITH US</h2>
                                <div className='blank-box-4'>
                                </div>
                            </div>
                            <div className='facebook'>
                                <p><FiFacebook /></p>
                                <p><AiOutlineTwitter /></p>
                                <p><AiOutlineGooglePlus /></p>
                               <p> <AiFillLinkedin /></p>
                                <p><IoLogoYoutube /></p>

                            </div>

                        </div>
                    </div>
                </div>


                <div className='footer-home'>
                    <div className='footer-last'>
                        <ul>
                            <li> <Link to ='home'>Home</Link> </li>
                            <li> <Link to ='it'>How it works</Link> </li>
                            <li> <Link to ="privacy"> Privacy Policy</Link></li>
                            <li> <Link to ='terms'>Terms of Service</Link> </li>
                            <li> <Link to ='Refound'>Refund Policy</Link> </li>
                            <li> <Link to ='donate'>Donate Us</Link> </li>
                        </ul>
                    </div>
                    <div className='footer-copyright'>
                        <p>Copyright © 2023 Tree For Life. All Rights Reserved. Designed by CLOUDSTOK</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
