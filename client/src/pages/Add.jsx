import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Add = ({updateCourses}) => {

  const [course, setCourse] = useState({
    key: "",
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

  // Handle input changes
  const handleChange = (e) => {
    setCourse(prevCourse => ({
      ...prevCourse,
      [e.target.name]: e.target.value
    }))
  };

  // Handle form submission
    const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8800/course", course);
      console.log("Server Response:", response);
  
      // Update the state with the new course
      updateCourses();

      // Navigate to the home page or wherever you want to navigate
      navigate("/");
    } catch (err) {
      console.log("Error posting new course", err);
    }
  };


  return ( 
    <div className="add section">
      <div className="wrapper">
        <h2 className="add__header">Add New Course</h2>
        <form className="add__form">
          <label className="add__label" htmlFor="image">Upload Cover Image:</label>
          <input
            className="add__input-text"
            type="text"
            id="image"
            name="image"
            value={course.image}
            onChange={handleChange}
            aria-label="Course Cover Image"
          />

          <label className="add__label" htmlFor="title">Title of Course:</label>
          <input
            className="add__input-text"
            type="text"
            id="title"
            name="title"
            value={course.title}
            placeholder="Web Development for Beginners "
            onChange={handleChange}
            aria-label="Title of Course"
          />

          <label className="add__label" htmlFor="description">Course Description:</label>
          <textarea
            className="add__input-textarea"
            id="description"
            name="description"
            value={course.description}
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            onChange={handleChange}
            aria-label="Lorem20" 
          ></textarea>

          <label className="add__label" htmlFor="creator">Name of Creator:</label>
          <input
            className="add__input-text"
            type="text"
            id="creator"
            name="creator"
            value={course.creator}
            placeholder="John Doe"
            onChange={handleChange}
            aria-label="Name of Creator"
          />

          <label className="add__label" htmlFor="price">Price:</label>
          <input
            className="add__input-text"
            type="number"
            id="price"
            name="price"
            value={course.price}
            placeholder="200"
            onChange={handleChange}
            aria-label="Price"
          />

          <label className="add__label" htmlFor="lessons">Number of Lessons:</label>
          <input
            className="add__input-text"
            type="number"
            id="lessons"
            name="lessons"
            value={course.lessons}
            placeholder="20"
            onChange={handleChange}
            aria-label="Number of Lessons"
          />

          <label className="add__label" htmlFor="duration">Duration (in months):</label>
          <input
            className="add__input-text"
            type="number"
            id="duration"
            name="duration"
            value={course.duration}
            placeholder="2"
            onChange={handleChange}
            aria-label="Duration"
          />

          <label className="add__label" htmlFor="level">Course Level:</label>
          <select
            className="add__input-select"
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

          <label className="add__label" htmlFor="language">Language:</label>
          <input
            className="add__input-text"
            type="text"
            id="language"
            name="language"
            value={course.language}
            placeholder="English"
            onChange={handleChange}
            aria-label="Language"
          />

          <button className="button button--add" onClick={handleAdd}>Add Course</button>
          <button className="button button--back">
            <Link className='button-link' to="/">Back</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;