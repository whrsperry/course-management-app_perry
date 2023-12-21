import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

const Update = ({selectedCourse, updateCourses}) => {

  const { id } = useParams();

  const [course, setCourse] = useState({
    title: "",
    description: "",
    image: "",
    creator: "",
    lessons: "",
    duration: "",
    level: "",
    price: "",
    language: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (selectedCourse) {
      setCourse(selectedCourse);
    }
  }, [selectedCourse]);

  // Handle input changes
  const handleChange = (e) => {
    setCourse(prevCourse => ({
      ...prevCourse,
      [e.target.name]: e.target.value
    }))
  };

  // Handle form submission
    const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8800/course/${id}`, course);
      updateCourses();
      navigate("/");
    } catch (err) {
      console.log("Error updating course", err);
    }
  };

  // Prevents the input number to change when scrolling
  const handleWheel = (event) => {
    if (
      document.activeElement.type === "number" &&
      document.activeElement.classList.contains("disable-scroll")
    ) {
      event.preventDefault();
    }
  };

  // Attach wheel event listener when component mounts
  useEffect(() => {
    document.addEventListener("wheel", handleWheel, { passive: false });

    // Cleanup: Remove event listener when component unmounts
    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  if (!course) {
    return (
      <div className="section">
        <div className="wrapper">
          <h2>Loading...</h2>
        </div>
      </div>
    ) 
  }

  return ( 
    <div className="update">
      <div className="wrapper">
        <h2 className="update__header">Update Course</h2>
        <form className="update__form">
          <label className="update__label" htmlFor="image">Upload Cover Image:</label>
          <input
            className="update__input-text"
            type="text"
            id="image"
            name="image"
            value={course.image}
            onChange={handleChange}
            aria-label="Course Cover Image"
          />

          <label className="update__label" htmlFor="title">Title of Course:</label>
          <input
            className="update__input-text"
            type="text"
            id="title"
            name="title"
            value={course.title}
            placeholder="Web Development for Beginners "
            onChange={handleChange}
            aria-label="Title of Course"
          />

          <label className="update__label" htmlFor="description">Course Description:</label>
          <textarea
            className="update__input-textarea"
            id="description"
            name="description"
            value={course.description}
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            onChange={handleChange}
            aria-label="Lorem20" 
          ></textarea>

          <label className="update__label" htmlFor="creator">Name of Creator:</label>
          <input
            className="update__input-text"
            type="text"
            id="creator"
            name="creator"
            value={course.creator}
            placeholder="John Doe"
            onChange={handleChange}
            aria-label="Name of Creator"
          />

          <label className="update__label" htmlFor="price">Price:</label>
          <input
            className="update__input-text"
            type="number"
            id="price"
            name="price"
            value={course.price}
            placeholder="200"
            onChange={handleChange}
            onWheel={(e) => handleWheel(e)}
            aria-label="Price"
          />

          <label className="update__label" htmlFor="lessons">Number of Lessons:</label>
          <input
            className="update__input-text"
            type="number"
            id="lessons"
            name="lessons"
            value={course.lessons}
            placeholder="20"
            onChange={handleChange}
            onWheel={handleWheel}
            aria-label="Number of Lessons"
          />

          <label className="update__label" htmlFor="duration">Duration (in months):</label>
          <input
            className="update__input-text"
            type="number"
            id="duration"
            name="duration"
            value={course.duration}
            placeholder="2"
            onChange={handleChange}
            aria-label="Duration"
          />

          <label className="update__label" htmlFor="level">Course Level:</label>
          <select
            className="update__input-select"
            id="level"
            name="level"
            value={course.level}
            onChange={handleChange}
            aria-label="Course Level"
          >
            <option value="">--Choose Difficulty--</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>

          <label className="update__label" htmlFor="language">Language:</label>
          <input
            className="update__input-text"
            type="text"
            id="language"
            name="language"
            value={course.language}
            placeholder="English"
            onChange={handleChange}
            aria-label="Language"
          />

          <button className="button button--update" onClick={handleUpdate}>Update Course</button>
          <button className="button button--back">
            <Link className='button-link' to="/course-detail/:id">Back</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;