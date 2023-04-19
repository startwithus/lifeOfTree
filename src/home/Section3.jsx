import React from 'react'
import can from '../image/green-border.png'
import rate from '../image/4176f4ecde3bbf74c7895bb0be4e2de7.jpg'
import './Section3.css'
const Section3 = () => {
    return (
        <>
            <div className='sec3'>

                <div className='news'>
                    <h2> LATEST NEWS    </h2>
                    <img src={can} alt='' />
                </div>
                <div className='rate'>
                    <img src={rate} alt="" />
                </div>
                <div className='trop'>
                    <h2>Tropical deforestation rate</h2>

                </div>


               

            </div>
            <div className='cen'>
                    <div className='view'>
                        <h3> VIEW ALL NEWS</h3>

                    </div>

                </div>
        </>
    )
}

export default Section3
