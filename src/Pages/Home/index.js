import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import StudentCard from '../../Components/StudentCard'
import './style.css'

export default function Home() {

    const params = useParams();
    const navigate = useNavigate();
    let years = [2018, 2019, 2020, 2021, 2022].reverse();
    let branches = ['cse', 'eee', 'mechanical', 'civil', 'civil (ca)', 'cse (ai)'].sort();

    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                setIsLoading(true);
                console.log(params);
                if (params.branch && params.batch) {
                    const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/students`, {
                        params: {
                            batch: Number(params.batch),
                            branch: params.branch
                        }
                    });

                    setStudents(data);
                    setIsLoading(false);
                }
            } catch (error) {
                setError(error);
            }
            finally {
            }
        }
        fetchStudents();
    }, [params])


    const Header = ({ children, title }) =>
        <div className='page home_page'>
            <div className="page-heading">
                <button onClick={() => navigate(-1)}>
                    <div className="icon">
                        <i className="fi fi-br-arrow-small-left"></i>
                    </div>
                </button>
                <h2>{title}</h2>
            </div>
            <div className="page-body">
                <div className="card-container">
                    {children}
                </div>
                <Link to='/admin'>Admin</Link>
            </div>
        </div>





    if (!params.branch && !params.batch) {
        return <Header title={'Home'}>
            {
                branches.map((branch, index) => {
                    return <Link to={`/${branch}`} key={index} className="card morph-m">
                        <div className="img"></div>
                        <div className="text">{branch.toUpperCase()}</div>
                    </Link>
                })
            }
        </Header>
    }
    else if (params.branch) {
        if (params.batch) {
            return <Header title={`${params.branch.toUpperCase()} / ${params.batch}`}>

                {
                    !isLoading ?
                        error ? 'error ocured' :
                            students
                                .map(student => {
                                    return <StudentCard key={student._id} student={student} />
                                })
                        :
                        'Loading...'
                }
                {

                    students.filter(student => {
                        return student.batch === Number(params.batch) && student.branch === params.branch
                    }).length === 0
                        ?
                        <div className="message-box">
                            <p>No data Available</p>
                        </div>
                        :
                        null
                }
            </Header>
        }
        else {
            return <Header title={`${params.branch.toUpperCase()}`}>
                {
                    years.map((year, index) => {
                        return <Link key={index} to={`${year}`} className="card morph-m">
                            <div className="img"></div>
                            <div className="text">{year}</div>
                        </Link>
                    })
                }
            </Header>
        }
    }


}
