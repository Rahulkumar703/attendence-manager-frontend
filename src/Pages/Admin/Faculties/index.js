import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Faculties() {

    const [faculties, setFaculties] = useState();

    useEffect(() => {
        const getFaculties = async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/faculties`)
        }
        getFaculties();
    }, [])
    return (
        <section className='section students-section'>
            <div className="section-heading">
                <h3>Faculties</h3>
            </div>
            <div className="section-body">
                <p>This is Faculties section</p>
                {
                    console.log(faculties)
                }
            </div>
        </section>
    )
}
