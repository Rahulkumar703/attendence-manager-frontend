import React, { useContext } from 'react'
import Navbar from './Navbar'
import './style.css'
import GlobalContext from '../../Contexts/GlobalContext';
import { CgClose, CgMenu } from 'react-icons/cg'


export default function Header() {

    const { globalState, dispatch } = useContext(GlobalContext);

    return (
        <>
            <header className='header'>
                <div className="header_toggle_button">
                    <button aria-expanded={globalState.isHamburgerActive} className="hamburger" onClick={() => { dispatch({ type: 'TOGGLE_HAMBURGER' }) }} >
                        <div className="icon">
                            {globalState.isHamburgerActive ? < CgClose size={20} color={'white'} /> : <CgMenu size={20} />}
                        </div>
                    </button>
                </div>
                <div className="header_heading">
                    <h1>Attendence Manager</h1>
                </div>
            </header>
            {globalState.isHamburgerActive ? <Navbar /> : null}
        </>
    )
}
