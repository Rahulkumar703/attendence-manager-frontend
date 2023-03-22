import React, { useContext } from 'react'
import { CgClose, CgHome, CgInfo, CgMenu } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import GlobalContext from '../../../Contexts/GlobalContext';
import './style.css'

export default function Navbar() {
    const { globalState, dispatch } = useContext(GlobalContext);
    return (
        <nav className="navbar">

            <div className="navbar_header">
                <button aria-expanded={globalState.isHamburgerActive} className="navbar_toggle_button" onClick={() => { dispatch({ type: 'TOGGLE_HAMBURGER' }) }} >
                    <div className="icon">
                        {globalState.isHamburgerActive ? < CgClose size={20} /> : <CgMenu size={20} />}
                    </div>
                </button>
                <div className="navbar_heading">
                    <h1>Attendence Manager</h1>
                </div>
            </div>

            <ul className="nav_list">
                <li className="nav_list_items">
                    <Link to="/" className="nav_links">
                        <div className="icon">
                            <CgHome />
                        </div>
                        <div className="label">
                            Home
                        </div>
                    </Link>
                </li>
                <li className="nav_list_items">
                    <Link to="/" className="nav_links">
                        <div className="icon">
                            <CgInfo />
                        </div>
                        <div className="label">
                            About
                        </div>
                    </Link>
                </li>
            </ul>

        </nav>
    )
}
