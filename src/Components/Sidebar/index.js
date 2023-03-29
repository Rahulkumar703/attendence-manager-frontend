import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
function Sidebar() {
    const [isSidebarClosed, setIsSidebarClosed] = useState(false);
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        const path = window.location.pathname;
        setActiveTab(path);
    }, [activeTab])

    const handelClick = (e) => {
        setActiveTab(window.location.pathname);
    }

    return (
        <aside className={`sidebar ${isSidebarClosed ? 'closed' : 'morph-l'}`}>
            <ul className="sidelist ">
                <li className="sidelist-items">
                    <button type="button" title="Sidebar Toggle Button" className="sidebar-toggle-button " onClick={() => setIsSidebarClosed(!isSidebarClosed)}>
                        <div className="icon">
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </li>
                <li className={`sidelist-items ${activeTab === '/admin' ? 'morph-s active' : ''}`} onClick={handelClick}>
                    <Link to="/admin">
                        <div className="icon">
                            <i className="fi fi-br-layout-fluid"></i>
                        </div>
                        <div className="text">Dashboard</div>
                    </Link>
                </li>
                <li className={`sidelist-items ${activeTab === '/admin/students' ? 'morph-s active' : ''}`} onClick={handelClick}>
                    <Link to="/admin/students">
                        <div className="icon">
                            <i className="fi fi-br-pen-clip"></i>
                        </div>
                        <div className="text">Students</div>
                    </Link>
                </li>
                <li className={`sidelist-items ${activeTab === '/admin/faculties' ? 'morph-s active' : ''}`} onClick={handelClick}>
                    <Link to="/admin/faculties">
                        <div className="icon">
                            <i className="fi fi-br-graduation-cap"></i>
                        </div>
                        <div className="text">Faculties</div>
                    </Link>
                </li>
            </ul>
        </aside >
    )
}

export default Sidebar
