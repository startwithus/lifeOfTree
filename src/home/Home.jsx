import React from 'react'
import Banner from '../layout/banner/Banner'
import Layout from '../layout/Layout'
import Cards from './Cards'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

const Home = () => {
  return (
   <Layout>
   <Banner/>
   <Cards/>
   <Section1/>
   <Section2/>
   <Section3/>
   </Layout>
  )
}

export default Home
