import React, { useState } from 'react'
import './header.css'
import logos from '../../image/logo.png'
import { Link } from 'react-router-dom'
import Form from '../form/Form'
const Header = () => {
  const [index, setIndex] = useState(false)
  return (
    <>
      <div className='main-div'>
        <div className='logo'>
          <img src={logos} alt='' />
        </div>

        <div className='menu'>
          <ul className='ul'>
            <li> <Link to='/'>Home</Link> </li>
            <li> <Link to='/about'>About Us</Link></li>
            <li> <Link to='/treeForLife'> TreeForLife?</Link></li>
            <li> <Link to='/Works'>Works</Link> </li>
            <li> <Link to='/faq'>Faq</Link></li>
            <li> <Link to='/Fact'> Plantation Facts </Link> </li>
            <li><Link to='/Contact'>  Contact </Link></li>
            <li> <Link to='/Shop'> Shop </Link></li>
            <li> <Link to='/Cart'> Cart </Link></li>
          </ul>
        </div>
        <div className='right-menu'>
          <h3>login as</h3>
          <ul className='ul'>
            <li> <p onClick={() => setIndex(true)} > Individual </p> </li>
            <li> <p onClick={() => setIndex(true)} > corporate </p> </li>

          </ul>
        </div>
      </div>
      <div className='wrapper-1'>
        <div className="content-1">
          <div className='content-flex'>
            <div className="heart"></div>
            <p className='plant-name'>  plant for tree</p>
          </div>
        </div>
      </div>
      {
        index && (<div className='login-form' > <Form setIndex={setIndex} index={index} /> </div>)
      }

    </>
  )
}

export default Header
