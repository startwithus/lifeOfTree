import React from 'react'
import can from '../image/green-border.png'
import './Section.css'
import donation from '../image/make-a-donation.png'
import plant from '../image/plant-a-tree.png'
import volunteer from '../image/volunteer.png'
const Section1 = () => {
    return (
        <>
            <div className='section'>

                <div className='can'>
                    <h1>Three ways you can make a diffrence!!!</h1>
                    <img src={can} alt="" />
                    <div className='click'> <h3>Please click on each circle to know more...</h3></div>
                </div>

                <div className='circle'>
                    <div className='container'>
                        <div className='donation'>
                            <img src={donation} alt="" />
                            <h3>Make a Donation</h3>

                        </div>
                        <div className='donation pic2'>

                            <img src={plant} alt='' />
                            <h3>Plant A Tree </h3>
                        </div>
                        <div className='donation'>
                            <img src={volunteer} alt='' />
                            <h3>Become a volunteer</h3>
                        </div>

                    </div>


                </div>

                <div className='donate'>
                    <div className='DonateUs'>
                        <h3>DONATE US</h3>
                        <h3> VOLUNTEER</h3>

                    </div>

                </div>

                <div className='Change'>
                    <div className='life'>
                        <h1>TreeForLife is making the difference, we are the change!</h1>
                        <img src={can} alt = ''/>
                        <h3>The stats given below are just for display purpose, will update them with real data soon...</h3>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Section1
