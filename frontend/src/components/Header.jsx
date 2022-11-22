import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {link} from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <link to="/">WorkoutSetter</link>
        </div>
        <ul>
            <li>
                <link to="/login">
                    <FaSignInAlt /> Login
                </link>
            </li>
            <li>
                <link to="/register">
                    <FaUser /> Register
                </link>
            </li>
        </ul>
    </header>
  )
}

export default Header