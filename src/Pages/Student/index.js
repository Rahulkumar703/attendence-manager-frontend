import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import Loader from '../../Components/Loader';
import useGetRequest from '../../Hooks/useGetRequest';
import './style.css'
export default function Student() {

    const location = useLocation();
    const student = useGetRequest(`${process.env.REACT_APP_BACKEND_URL}/student/${location.state}`);





    return (
        student ?
            <div className='page student-page'>
                <div className="page-heading">
                    <h1>{student.name}</h1>
                </div>
            </div>
            :
            <Loader />
    )
}
