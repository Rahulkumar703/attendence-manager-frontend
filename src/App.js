import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout';
import Home from './Pages/Home';
import Students from './Pages/Admin/Students';
import AdminLayout from './Layouts/AdminLayout';
import Faculties from './Pages/Admin/Faculties';
import Dashboard from './Pages/Admin/Dashboard';
import Student from './Pages/Student';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path=':branch' element={<Home />} />
      <Route path=':branch/:batch' element={<Home />} />
      <Route path=':branch/:batch/:id' element={<Student />} />

      <Route path='admin' element={<AdminLayout />} >
        <Route index element={<Dashboard />} />
        <Route path='students' element={<Students />} />
        <Route path='student/:id' element={<Student />} />
        <Route path='faculties' element={<Faculties />} />
      </Route>
    </Route>
  )

)

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
