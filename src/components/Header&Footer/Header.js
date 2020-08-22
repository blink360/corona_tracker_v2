import React from 'react'
import logo from '../../assets/images/logo.svg'
import {Image} from 'react-bootstrap';

function Header() {
    return (
        <div style={{padding:"5px"}}> 
           <Image src={logo} fluid />
        </div>
    )
}

export default Header
