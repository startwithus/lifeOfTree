import React from 'react'
import Layout from '../../layout/Layout'
import './fact.css'
import data from './data'
const Facts = () => {
   
    return (
        <>
            <Layout>
                <div className='fact'>
                </div>

                <div className='Quick'>
                    <div className='amount'>
                        <h1>Plantation-Facts</h1>
                        <h3>Quick facts:</h3>

                        <ul>
                           {
                            data.map(e=>{(
                             <li>e</li>
                            )})
                           }
                        </ul>

                        <h3>Trees combat the greenhouse effect</h3>
                        <p>Global warming is the result of excess greenhouse gases, created by burning fossil fuels and destroying tropical rainforests. Heat from the sun, reflected back from the earth, is trapped in this thickening layer of gases, causing global temperatures to rise. Carbon dioxide (CO2) is a major greenhouse gas. Trees absorb CO2, removing and storing the carbon while releasing the oxygen back into the air. In one year, an acre of mature trees absorbs the amount of CO2 produced when you drive your car 26,000 miles.</p>

                        <h3>Trees clean the air</h3>
                        <p>Trees absorb odors and pollutant gases (nitrogen oxides, ammonia, sulfur dioxide and ozone) and filter particulates out of the air by trapping them on their leaves and bark</p>

                        <h3>Trees provide oxygen</h3>
                        <p>In one year an acre of mature trees can provide enough oxygen for 18 people.</p>

                        <h3>Trees cool the streets and the city</h3>
                        <p>Average temperatures in Los Angeles have risen 6°F in the last 50 years as tree coverage has declined and the number of heat-absorbing roads and buildings has increased.
                        </p>
                        <p>Trees cool the city by up to 10°F, by shading our homes and streets, breaking up urban “heat islands” and releasing water vapor into the air through their leaves.

                        </p>

                        <h3>
                            Trees conserve energy
                        </h3>

                        <p>Three trees placed strategically around a single-family home can cut summer air conditioning needs by up to 50 percent. By reducing the energy demand for cooling our houses, we reduce carbon dioxide and other pollution emissions from power plants.</p>

                        <h3>Trees save water</h3>
                        <p>Shade from trees slows water evaporation from thirsty lawns. Most newly planted trees need only fifteen gallons of water a week. As trees transpire, they increase atmospheric moisture.</p>

                        <h3>Trees help prevent water pollution</h3>
                        <p>Trees reduce runoff by breaking rainfall thus allowing the water to flow down the trunk and into the earth below the tree. This prevents stormwater from carrying pollutants to the ocean. When mulched, trees act like a sponge that filters this water naturally and uses it to recharge groundwater supplies.</p>
    
                        <h3>Trees help prevent soil erosion</h3>
                        <p>On hillsides or stream slopes, trees slow runoff and hold soil in place.</p>

                        <h3>Trees shield children from ultra-violet rays</h3>
                        <p>Skin cancer is the most common form of cancer in the United States. Trees reduce UV-B exposure by about 50 percent, thus providing protection to children on school campuses and playgrounds - where children spend hours outdoors.</p>

                        <h3>Trees provide food</h3>
                        <p>An apple tree can yield up to 15-20 bushels of fruit per year and can be planted on the tiniest urban lot. Aside from fruit for humans, trees provide food for birds and wildlife.</p>

                        <h3>Trees heal</h3>
                        <p>Studies have shown that patients with views of trees out their windows heal faster and with less complications. Children with ADHD show fewer symptoms when they have access to nature. Exposure to trees and nature aids concentration by reducing mental fatigue.</p>

                        <h3>Trees reduce violence</h3>
                        <p>Neighborhoods and homes that are barren have shown to have a greater incidence of violence in and out of the home than their greener counterparts. Trees and landscaping help to reduce the level of fear.</p>

                        <h2>
                        Issues due to deforestation:
                        </h2>
                        <p>So far what we have seen is that situation is alarming and for the mentioned reason deforestation has become a no. one issue in these recent years.</p>

                        <h2>Environmental problems:</h2>
                        <h3>Atmospheric</h3>
                        <ul>
                            <li>Deforestation is a contributor to global warming.</li>
                            <li>More pollutant in air either due to forest burning or lack of plantation</li>
                            <li>Oxygen ratio in air has been decreased over the period.</li>
                            <li>Thinning of ozone layer, harmful radiations entering into atmosphere.</li>
                        </ul>

                        <h3>Hydrological </h3>
                        <ul>
                            <li>It reduced the content of water in the soil, ground and atmosphere.</li>
                            <li>Absence of trees changed the quantity of water.</li>
                            <li>Tropical rainforests produce about 30% of our planet's fresh water; deforestation has a waste effect on primary and tropical forests.</li>
                        </ul>

                        <h3>Soil</h3>
                        <ul>
                            <li>
                            Deforestation generally increases rates of soil. 

                            </li>
                            <li>Erosion leads to fertility loss which result in more waste land.</li>
                        </ul>

                        <h3>Biodiversity</h3>
                        <ul>
                            <li>Destruction of significant areas of forest cover has resulted in a degraded environment with reduced biodiversity</li>
                            <li>An estimation, we are losing 137 plants, animal and insect species every single day due to rainforest deforestation. ~50000 a Year!</li>
                            <li>More than 40% of the species in SA could be wiped out in the 100 yrs.</li>
                        </ul>

                        <h3>Social and economic problems</h3>
                        <ul>
                        <li>Extreme weathers, global warming situation, witnessed huge loss due to natural calamities.</li>
                        <li>More impact on poor, global GDP reduced to 7% by 2050.</li>
                        <li>Impacting long-term income, resource and productivity.</li>
                        </ul>

                    </div>

                </div>
            </Layout>
        </>
    )
}

export default Facts
