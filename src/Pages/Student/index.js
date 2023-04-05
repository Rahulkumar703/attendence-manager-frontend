import { useParams } from 'react-router-dom'
import Loader from '../../Components/Loader';
import useGetRequest from '../../Hooks/useGetRequest';
import './style.css'
import StudentCard from '../../Components/StudentCard'
export default function Student() {

    const { id } = useParams();
    const student = useGetRequest(`${process.env.REACT_APP_BACKEND_URL}/student/${id}`);



    return (
        student ?
            <div className='page student-page'>
                <div className="page-heading">
                    <h1>{student.name}</h1>
                </div>
                <div className="page-body">
                    <StudentCard student={student} />
                </div>
            </div>
            :
            <Loader />
    )
}
