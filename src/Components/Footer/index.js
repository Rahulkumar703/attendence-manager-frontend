import React from 'react'
import './style.css'

export default function Footer() {
    const date = new Date().getFullYear();
    return (
        <footer className='footer'>
            <h5>&copy; {date}. All rights reserved</h5>
        </footer>
    )
}
