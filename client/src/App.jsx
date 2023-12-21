import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './scss/index.scss';
import Header from "./components/Header";
import Course from './pages/Course';
import Add from './pages/Add';
import Update from './pages/Update';
import CourseDetail from './pages/CourseDetail';

function App() {

  // State to manage the list of courses
  const [courses, setCourses] = useState([]);

  // State to manage details of the currently selected course
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Fetch the list of courses from the backend
  const fetchAllCourses = async () => {
    try {
      const res = await axios.get("http://localhost:8800/course");
      setCourses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  // Function to update the list of courses
  const updateCourses = async () => {
    await fetchAllCourses();
  };

  return (
    <div className='app-container'>
      <Router>
        <Header />
        <Routes>
          <Route 
            exact path="/" 
            element={<Course courses={courses} setCourses={setCourses} setSelectedCourse={setSelectedCourse} />} 
          />
          <Route 
            exact path="/add" 
            element={<Add updateCourses={updateCourses}/>} 
          />
          <Route 
            exact path="/course-detail/:id" 
            element={<CourseDetail selectedCourse={selectedCourse}/>} 
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
