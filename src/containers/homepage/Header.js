import React from 'react'
import BackgroundImage from '../reusable/bgimage/BgImage'
import NavBar from '../reusable/navbar/NavBar'
import Login from './login/Login'


function Header() {
    return (
        <div>
            <BackgroundImage>
            <NavBar/>
                <div style={{display : 'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
                    <h2 style={{flex:'1',fontSize:'40px',color:'#fff',lineHeight:'15vh'}}>
                    Sign up for a virtual demonstration 
with one of our Senior Sourcing 
Consultants to see for yourself 
how easily Scanmarket
                    </h2>
                <div style={{flex:'.8'}}>
                <Login/>
                </div>
                </div>
           </BackgroundImage>
        </div>
    )
}

export default Header