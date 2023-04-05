import './style.css'
import { Link } from 'react-router-dom'

export default function StudentCard({ student }) {
    const { _id, name, branch, batch, rollno, isLE } = student;


    return (
        <Link to={`${_id}`} state={_id} className='student-card morph-m'>
            <div className="card-heading">
                <h2 className="student-name">{name}</h2>
                <h3 className="student-batch">{batch}</h3>
            </div>
            <div className={`card-body`}>
                <div className="card-body-details">
                    <div className="icon">
                        <i className="fi fi-br-wheat"></i>
                    </div>
                    <div className="label">
                        {branch.toUpperCase()}
                    </div>

                </div>
                <div className="card-body-details">
                    <div className="icon">
                        <i className="fi fi-br-hastag"></i>
                    </div>
                    <div className="label">
                        {rollno}
                    </div>
                </div>
                {
                    isLE &&
                    <div className="card-body-details">
                        <div className="icon">
                            <i className="fi fi-br-door-open"></i>
                        </div>
                        <div className='label'>Lateral Entry</div>
                    </div>
                }
            </div>
        </Link>
    )
}
