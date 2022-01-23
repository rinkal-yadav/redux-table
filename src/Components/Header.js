import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
           <nav class="navbar navbar-light bg-light">
                <form class="container-fluid justify-content-evenly">
                <Link className='color' to='/home'><button class="btn btn-outline-success me-2" type="button">Home</button></Link>
                <Link className='color' to='/student'><button class="btn btn-outline-success me-2" type="button">Students</button></Link>
                <Link className='color' to='/contact'><button class="btn btn-outline-success me-2" type="button">Contact Us</button></Link>

                </form>
            </nav>
        
    )
}

export default Header