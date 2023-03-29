import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'

export default function AdminLayout() {

    return (
        <section className='page admin-page'>
            <div className="page-heading">
                <div className="icon">
                    <i className="fi fi-br-settings-sliders"></i>
                </div>
                <div className="label">
                    <h2>Admin Panel</h2>
                </div>
            </div>
            <div className="page-content">
                <Sidebar />
                <Outlet />
            </div>
        </section>
    )
}
