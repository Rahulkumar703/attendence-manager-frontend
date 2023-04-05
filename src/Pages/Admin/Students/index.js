import StudentCard from "../../../Components/StudentCard";
import './style.css'
import Loader from "../../../Components/Loader";
import useGetRequest from "../../../Hooks/useGetRequest";
import { useState } from "react";
import axios from "axios";

export default function Students() {


    const [searchQuery, setSearchQuery] = useState('');
    const [studentFilter, setStudentFilter] = useState({ isLE: '' });
    const [error, setError] = useState({ message: '', type: '' });
    const [addStudentPopUp, setAddStudentPopUp] = useState(false);
    const [student, setStudent] = useState(
        {
            name: '',
            branch: '',
            batch: '',
            rollno: '',
            email: '',
            phone: '',
            password: '',
            isLE: false,
            confirmPassword: ''
        }
    )

    const handelChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    }

    const addStudent = async (e) => {
        e.preventDefault();

        if (
            student.name !== '' ||
            student.branch !== '' ||
            student.rollno !== '' ||
            student.rollno !== 0
        ) {
            if (student.password !== student.confirmPassword) {
                setError({ message: 'Password not matched', type: 'warning' });
            }
            else {

                const year = new Date().getFullYear().toString();
                let batch = Number(year[0] + year[1] + student.rollno.toString()[0] + student.rollno.toString()[1]);
                if (student.isLE)
                    batch -= 1;

                setError({ message: '', type: 'warning' })
                setStudent({ ...student, batch, phone: Number(student.phone), rollno: Number(student.rollno) });
                try {
                    const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/student`, student);
                    if (data) {
                        setError({ message: 'Added Successfully', type: 'success' });
                    }
                } catch (error) {
                    setError({ message: error.response.data.message, type: 'danger' });
                }

            }
        }
        else
            setError({ message: "Please fill all details.", type: 'danger' });


        setTimeout(() => setError({ message: '', type: '' }), 5000);

    }


    const students = useGetRequest(`${process.env.REACT_APP_BACKEND_URL}/students`);

    return (
        <section className='section students-section'>
            <div className="section-heading">
                <h3>Students</h3>
            </div>
            <div className="section-body">
                <div className="body-top">
                    <div className="search-box">
                        <div className="searchbar">
                            <input type="text"
                                autoComplete="off"
                                autoFocus="on"
                                value={searchQuery}
                                onChange={(e) => { setSearchQuery(e.target.value) }}
                                placeholder="Search for a student"
                            />
                            <div className="icon">
                                <i className="fi fi-br-search"></i>
                            </div>
                        </div>
                        <button className="add-student-pop-up-button" onClick={() => setAddStudentPopUp(!addStudentPopUp)}>
                            <div className="icon">
                                <i className="fi fi-br-user-add"></i>
                            </div>
                            <div className="label">Add new student</div>
                        </button>
                    </div>

                    <div className="students-filter">
                        <div className="filters morph-s">
                            <input type="checkbox" onClick={(e) => setStudentFilter({ ...studentFilter, isLE: e.target.checked })} id="le-filter" />
                            <label htmlFor="le-filter">Lateral Entry</label>
                        </div>
                    </div>
                </div>


                {
                    addStudentPopUp ?
                        <div className="addStudent-form-container">
                            {error.message !== '' && <div className={`message-box ${error.type}`}>{error.message}</div>}
                            <form onSubmit={addStudent} className="morph-l">
                                <div className="input-container">
                                    <input type="text" name="name" placeholder="Student name" value={student.name} onChange={handelChange} />
                                    <input type="number" name="rollno" placeholder="Student rollno" value={student.rollno} onChange={handelChange} />
                                </div>
                                <div className="input-container">
                                    <select name="branch" value={student.branch} onChange={handelChange}>
                                        <option disabled value=''>Student's branch</option>
                                        <option value="C.S.E">Computer Science And Engineering (C.S.E)</option>
                                        <option value="eee">Electrical And Electronics Engineering (E.E.E)</option>
                                        <option value="civil">Civil Engineering (CIVIL)</option>
                                        <option value="mechanical">Mechanical Engineering (MECH)</option>
                                        <option value="cse(a.i)">Artificial Intelligence CSE(A.I)</option>
                                        <option value="civil(c.a)">Civil with Computer Application CIVIL(C.A)</option>
                                    </select>
                                </div>
                                <div className="input-container">
                                    <input type="checkbox" name="isLE" id="le-student" checked={student.isLE} onChange={(e) => setStudent({ ...student, isLE: e.target.checked })} />
                                    <label htmlFor="le-student">Lateral Entry</label>
                                </div>
                                <div className="form-buttons">
                                    <button type="button" className="danger" onClick={() => setAddStudentPopUp(false)}>
                                        <div className="icon">
                                            <i className="fi fi-br-cross-circle"></i>
                                        </div>
                                        <div className="label">Cancel</div>
                                    </button>
                                    <button type="submit" className="success">
                                        <div className="icon">
                                            <i className="fi fi-br-user-add"></i>
                                        </div>
                                        <div className="icon">Add</div>
                                    </button>
                                </div>
                            </form>
                        </div>
                        :
                        null
                }

                <div className="students-stats"></div>

                <div className="students-container">
                    {
                        students ?
                            students
                                .filter((student) => {
                                    if (studentFilter.isLE)
                                        return student.isLE
                                    else return true;
                                })
                                .filter((student) => {
                                    return (
                                        student?.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
                                        student?.rollno.toString().includes(searchQuery) ||
                                        student?.batch.toString().includes(searchQuery) ||
                                        student?.branch.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
                                    )
                                })
                                .map(student => {
                                    return <StudentCard student={student} key={student._id} />
                                })
                            :
                            <Loader />
                    }
                </div>
            </div>
        </section>
    )
}
