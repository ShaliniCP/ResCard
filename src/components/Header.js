import { useState } from 'react'
import logo from '../components/logo.png'
import { Link } from 'react-router-dom'
const Header=()=>{
    let [btnValue,setbtnValue]=useState('Login')
    return(
        <div className="header">
            <div className="logo">
                <img className='logo_img' src={logo} alt='logo'/>
            </div>
            <div className="nav-items">
                <ul >
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Contact'>Contact Us</Link></li>
                    <li>Cart</li>
                    <button onClick={()=>{
                        btnValue==='Login'?setbtnValue('Logout'):setbtnValue('Login')
                       
                    }} className='lg-btn'>{btnValue}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;