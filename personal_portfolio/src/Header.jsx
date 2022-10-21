import React from 'react'
import './css/header.css'

export const Header = () => {
    return (
        <div className='header'>
            <div className='header-banner'>
                <span>Sheng</span>
            </div>
            <div className='header-list'>
                <ul>
                    <li>Home</li>
                    <li>Works</li>
                    <li>About</li>
                    <li>Projects</li>
                </ul>
            </div>
        </div>
    )
}
