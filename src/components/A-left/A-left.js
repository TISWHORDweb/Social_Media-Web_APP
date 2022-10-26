import React from 'react'
import './A-left.css'
import Logo from '../../img/logo.png'
const Left  = () => {
  return (
    <div className="Auth">
         <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>ZKC Media</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>
    </div>
  )
}

export default Left