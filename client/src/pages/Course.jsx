import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import bulb from "../assets/home-bulb.png";
import girl from "../assets/home-girl.png"
import CourseCard from "../components/CourseCard";

const Course = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchAllCourses = async () => {
      try {
        const res = await axios.get("http://localhost:8800/course");
        setCourses(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCourses();
  }, [courses]);

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
    />
  ))

  return (
    <>
      <main className="section home">
        <div className="wrapper home__wrapper">
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

      <section className="home__course-list" id='course-list'>
      <div className="home__course-list-wrapper">
        <div className="home__course-list-header-container">
          <h2 className="home__course-list-header">Explore Our Courses</h2>
          <p className="home__course-list-description">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical</p>
        </div>
        <button className="button home__course-list-button">
          <Link to="/add">Add Course</Link>
        </button>
        <div className="home__course-list-card-list">
          {courseElement}
        </div>
      </div>
    </section>
    </>
  )
};

export default Course;