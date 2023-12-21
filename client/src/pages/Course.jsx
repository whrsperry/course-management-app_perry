import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import bulb from "../assets/home-bulb.png";
import girl from "../assets/home-girl.png"
import CourseCard from "../components/CourseCard";

const Course = ({courses, setCourses, setSelectedCourse}) => {

  // Function to handle course selection
  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/course/${id}`);
      setCourses((prevCourses) => prevCourses.filter(course => course.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  const courseElement = courses.map((course) => (
    <CourseCard 
      key={course.id}
      title={course.title}
      description={course.description}
      image={course.image}
      creator={course.creator}
      lessons={course.lessons}
      duration={course.duration}
      level={course.level}
      price={course.price}
      language={course.language}
      handleDelete={() => handleDelete(course.id)}
      id={course.id}
      handleCourseSelect={() => handleCourseSelect(course)}
    />
  ))

  return (
    <>
      <main className="home">
        <div className="home__wrapper wrapper">
          <div className="home__text-content">
            <img className="home__bulb-image" src={bulb} alt="bulb image" />
            <div className="home__text-container">
              <h1 className="home__header">
                Start <span className="home__span">learning</span> skill from your favorite mentor
              </h1>
              <p className="home__description">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
              </p>
              <a className='button home__button' href="#course-list">Explore Course</a>
            </div>
          </div>
          <div className="home__image-content">
            <img className="home__girl-image" src={girl} alt="girl studying image" />
          </div>
        </div>
      </main>

      <section className="course" id='course-list'>
        <div className="course__wrapper wrapper">
          <div className="course__header-container">
            <h2 className="course__header">Explore Our Courses</h2>
            <p className="course__description">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical</p>
          </div>
          <button className="button">
            <Link className="button-link" to="/add">Add Course</Link>
          </button>
          <div className="course__card-list">{courseElement}</div>
        </div>
      </section>
    </>
  )
};

export default Course;