import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className='Header'>
                    
                            <span > <Link className='color' to='/home'>Home</Link></span>
                            <span > <Link className='color' to='/student'>Students</Link></span>
                            <span > <Link className='color' to='/contact'>Contact Us</Link></span>

                    

        </div>
    )
}

export default Header