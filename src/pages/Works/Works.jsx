import React from 'react'
import Layout from '../../layout/Layout'
import '../Works/work.css'

const Works = () => {
    return (
        <>
            <Layout>

                <div className='Work'>

                </div>

                <div className='website'>
                    <div className='planning'>
                        <h1>How it works</h1>
                        <p>Once you reach to our website, your planation is just click away from you since we made the complete process quite interactive and user friendly.</p>
                        <h2>Ordering online:</h2>
                        <ol>
                            <li>At home page, click on banner at top right-hand side “plant a tree”</li>
                            <li>Next page will show you plantation locations, choose any location of your choice and click on “plan” tab at bottom right to proceed</li>
                            <li>This page will show you plans available for the plantation. You may check the detail of plan by clicking on “i” at top right corner of specific plan tab. Once you make selection of a plan, click on “tree” tab at bottom right to proceed</li>
                            <li>Now you can see all tree available under a specific location and plan. Make a selection of tree you want to plant and click on “summary” tab at bottom right to proceed</li>
                            <p>Note: you could select multiple tree type under a plan now, provided they are listed on this section</p>
                            <li>This page will show you the summary of your transaction i.e. location, plan, cost and type of tree you selected. Click on “Add to Cart” tab at bottom right to proceed</li>
                            <h3>Note: At any given time, you can go back by clicking  back arrow at bottom right.</h3>
                            <li>This page will show you your cart with all your tree selection. You may use + (to increase the count of trees), - (to decrease the count of trees) and Remove (to remove a tree). As soon as you make changes pricing detail will change. Once you satisfy with your selection and pricing, you can proceed by clicking on “order now” tab</li>
                            <li>At this step, if you not login to our website you will be provided three options to login:</li>
                            <ul>
                                <li>Login using Facebook account</li>
                                <li>Login as individual (if your account is created)</li>
                                <li>Login as corporate (admin of corporate account on our website, usually HR people)</li>
                            </ul>
                            <h3>Note: You may create a fresh account using “signup” option. In case you forgot your password, you can reset it by clicking “forgot your password?”</h3>
                            <li>Once you are login, at top right side you can see your name (with pic) or corporation name (with logo). To complete the transaction, you can choose among two options now:</li>
                            <ul>
                                <li>Do you want to send as a gift – an email with gift certificate will be send to the email ID you will save using this option. Invoice and welcome email will be send to you</li>
                                <li>Order now – Both certificate, invoice will be send to you along with welcome email</li>
                            </ul>
                            <li>At this page you require to add an address if it is not already listed. A user may have multipole address but require to choose only one address to complete the transaction. Once you choose an address, you will land on to your order and payment summary page</li>
                            <li>At this page, review your order once again and select payment gateway for final transaction.</li>
                            <ul>
                                <li>
                                    PayPal – any customer
                                </li>
                                <li>CC Avenue – Indian customer (since payment will be in INR and from banks within India)</li>
                            </ul>
                        </ol>

                        <h2>Login to your account:</h2>
                        <h4>Login to your treeforlife account is quite important for following reasons:</h4>
                        <ol>
                            <li>To view all your tree plantations and timeline</li>
                            <li>To update tree planation timeline, tree detail etc.</li>
                            <li>To view and download all you invoice and certificates for your orders</li>
                            <li>To update your personal information and social media feed preference</li>
                            <li>To update or add new address</li>
                            <li>To visit your tree by making an online appointment on our website (this service will be enabled soon)</li>
                            <li>To reset you password</li>
                        </ol>

                        <h2>Login options:</h2>
                        <h4>You are provided three options to login:</h4>
                        <ul>
                            <li>Login using Facebook account</li>
                            <li>Login as individual (if your account is created)</li>
                            <li>Login as corporate (admin of corporate account on our website, usually HR people)</li>
                        </ul>
                        <h3>Note: You may create a fresh account using “signup” option. In case you forgot your password, you can reset it by clicking “forgot your password?”</h3>

                    </div>

                </div>






            </Layout>
        </>
    )
}

export default Works
