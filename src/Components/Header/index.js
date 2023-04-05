import { Link } from 'react-router-dom'
import './style.css'


export default function Header() {


    const changeTheme = (e) => {
        if (e.target.checked) {
            document.body.classList.add('dark')
        }
        else document.body.classList.remove('dark')
    }

    return (
        <header className='header'>
            <Link to='/' className="header_heading">
                <div className="logo">
                    <img src="/Assets/logo.png" alt="logo" />
                </div>
                <div className="title">
                    <h1>Attendence Manager</h1>
                </div>
            </Link>
            <div className="theme">
                <input type="checkbox" onChange={changeTheme} />
            </div>
        </header>
    )
}
