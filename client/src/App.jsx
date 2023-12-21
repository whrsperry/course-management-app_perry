import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './scss/index.scss';
import Header from "./components/Header";
import Course from './pages/Course';
import Add from './pages/Add';
import Update from './pages/Update';
import CourseDetail from './pages/CourseDetail';

function App() {

  return (
    <div className='app-container'>
      <Router>
        <Header />
        <Routes>
          <Route 
            exact path="/" 
            element={<Course />} 
          />
          <Route 
            exact path="/add" 
            element={<Add />} 
          />
          <Route 
            exact path="/course-detail/:id" 
            element={<CourseDetail />} 
          />
          {/* <Route 
            exact path="/courses" 
            element={
              <Courses 
                courseCard={courseDataComponent} 
                courseData={courseData} 
                updateCourseData={updateCourseData}
              />
            } 
          />
          <Route 
            exact path="/course-detail/:courseId" 
            element={
            <CourseDetail 
              courseData={courseData}
              updateCourseData={updateCourseData}
            />
          } 
          /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App;
