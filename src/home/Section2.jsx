import React from 'react'
import dote from '../image/dote.png'
import photo from '../image/full-border.jpg'
import can from '../image/white-border.png'
import pics1 from '../image/2.jpg'
import pics2 from '../image/2.jpg'
import pics3 from '../image/price-bg (1).png'
// import pics3 from '../image/2 (1).jpg'
import './section2.css'
const Section2 = () => {
    return (
        <>
            <div className='num'>
                <div className='num2'>
                    <div className='number'>
                        <h2>34</h2>
                        <h3>PROJECTS REALIZED</h3>
                        <img src={dote} alt='' />
                    </div>

                    <div className='number2'>
                        <h2>9400</h2>
                        <h3>TREES PLANTED</h3>
                        <img src={dote} alt="" />

                    </div>
                    <div className='number3'>
                        <h2>985</h2>
                        <h3>VOLUNTEERS INVOLVED</h3>
                        <img src={dote} alt="" />

                    </div>

                    <div className='number4'>
                        <h2>852</h2>
                        <h3>CHARITY DONORS</h3>
                        <img src={dote} alt="" />

                    </div>
                </div>

                <div className='photo'>
                    <img src={photo} alt="" />
                </div>
            </div>

            <div className='back'>
                <div className='shop'>
                    <h1> Shop</h1>
                    <img src={can} alt='' />
                    <h3>***The TreeForLife shop is not active yet. please do not try to make any transactions***</h3>

                </div>

                <div className='pics2'>
                    <div className='dollar'>
                        <img src={pics1} alt='' />
                        <div className='pic3'>

                            <img src={pics3} alt='' />
                            <div className='date'>
                                <h2>$2.00</h2>

                            </div>
                        </div>
                    </div>
                    <div className='dollar'>
                        <img src={pics2} alt="" />
                        <div className='pic3'>
                            <img src={pics3} alt='' />
                            <div className='date'>
                                <h2>$6.00</h2>

                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}

export default Section2
