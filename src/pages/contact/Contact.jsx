import React from 'react'
import Layout from '../../layout/Layout'
import './contact.css'
import MyComponent from './Map'

const Contact = () => {
    return (
        <>
            <Layout>

                <div className='connect'>
                    <div className='connectUS'>
                        <h1>Contact US</h1>

                        <div>
                            <MyComponent/>
                        </div>
                       
                    </div>
                   

                    <div className='location'>
                        <div className='out'>
                            <h3> out Location </h3>
                        </div>
                        <div className='callUs'>
                            <h3>Call Us On <br/>
                                +91 98105 01764</h3>
                        </div>
                        <div className='emailUs'>
                            <h3>Email Us 
                                <br/>info@treeforlife.net</h3>

                        </div>


                    </div>


                </div>





            </Layout>
        </>

    )
}

export default Contact
