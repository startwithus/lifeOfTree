import React from 'react'
import './card.css'
import arrow from '../image/green-border.png'
import d from '../image/tree-fertilizing.png'
import a from '../image/save-damaged-trees.png'
import b from '../image/tree-disease-treatment.png'
import c from '../image/get-expert-advice.png'

const Cards = () => {

    const data = [
        {
            icon: d,
            heading: "WHAT IS CURRENT SITUATION?",
            para: "Each day at least 80,000 acres (32,300 ha) of forest disappear from Earth. At least another 80,000 acres (32,300 ha) of forest are degraded."

        },
        {
            icon: b,
            heading: "WHAT IS FUTURE CHALLENGE?",
            para: "As per a recent study world’s rain forests could completely vanish next 100 years with current rate of deforestation! So need to plant more trees.."

        },
        {
            icon: a,
            heading: "WHAT TREEFORLIFE AIMING?",
            para: "We still have some control in hand and the best thing is that we can do it since forest/trees can be renewed in limited time."

        },
        {
            icon: c,
            heading: "WHAT YOU CAN DO?",
            para: "One tree produces 260 pounds of oxygen each year, which means 2 mature trees can supply enough oxygen annually to support a family!"

        }
    ]
    return (
        <>
            <div className='card'>
                <div className='support'>
                    <h2>Why support TreeForLife?</h2>
                    <div className='icons'>
                        <img src={arrow} alt="" />
                    </div>
                </div>

                <div className='mainCard'>
                    {
                        data.map((el, i) => (
                            <div className='current'>
                                <div className='pic'>
                                    <img src={el.icon} alt='' />
                                    <div className='heading-box'>
                                        <h2>{el.heading}</h2>
                                        <div className='box'></div>
                                    </div>
                                </div>
                                <div className='para'>
                                    <h3>{el.para}</h3>
                                </div>

                            </div>

                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default Cards
