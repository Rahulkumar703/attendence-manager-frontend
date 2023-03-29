

export default function Home() {
    // const [inputs, setInputs] = useState({
    //     name: "",
    //     branch: "",
    //     rollno: "",
    //     batch: "",
    //     email: "",
    //     password: "",
    // });
    // const fethStudent = (id) => {
    //     axios.get(`${process.env.REACT_APP_BACKEND_URL}/student/${id}`)
    // }

    // const handleChange = (e) => {
    //     setInputs({ ...inputs, [e.target.name]: e.target.value });
    // }


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/student`, inputs);
    //     console.log(data);
    // }

    return (
        <div className='page home_page'>
            <h1>Home</h1>
            {/* 
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' onChange={handleChange} placeholder='enter name' value={inputs.name} />
                <input type="text" name='branch' onChange={handleChange} placeholder='enter branch' value={inputs.branch} />
                <input type="number" name='rollno' onChange={handleChange} placeholder='enter rollno' value={inputs.rollno} />
                <input type="number" name='batch' onChange={handleChange} placeholder='enter batch' value={inputs.batch} />
                <input type="email" name='email' onChange={handleChange} placeholder='enter email' value={inputs.email} />
                <input type="password" name='password' onChange={handleChange} placeholder='enter password' value={inputs.password} />
                <button type='submit'>Submit</button>
            </form> */}
        </div>
    )
}
