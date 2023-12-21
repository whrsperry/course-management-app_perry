import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Add = ({ updateCourses }) => {
  const [course, setCourse] = useState({
    key: "",
    title: "",
    description: "",
    creator: "",
    lessons: "",
    duration: "",
    level: "",
    price: "",
    language: "",
  });

  const [validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setCourse((prevCourse) => ({
      ...prevCourse,
      [e.target.name]: e.target.value,
    }));
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "", // Clear validation error when the user starts typing
    }));
  };

  // Handle form submission
  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      // Validate the form before submitting
      const errors = validateForm();
      if (Object.keys(errors).length > 0) {
        // If there are validation errors, set them in the state and return
        setValidationErrors(errors);
        return;
      }

      // If no validation errors, proceed with form submission
      const response = await axios.post("http://localhost:8800/course", course);

      // Update the state with the new course
      updateCourses();

      // Navigate to the home page or wherever you want to navigate
      navigate("/");
    } catch (err) {
      console.log("Error posting new course", err);
    }
  };

  // Function to validate the form fields
  const validateForm = () => {
    const errors = {};
    const requiredFields = [
      "title",
      "description",
      "creator",
      "lessons",
      "duration",
      "level",
      "price",
      "language",
    ];

    for (const field of requiredFields) {
      if (!course[field]) {
        errors[field] = `Please fill out the "${field}" field.`;
      }
    }

    return errors;
  };

  return (
    <div className="add">
      <div className="add__wrapper wrapper">
        <h2 className="add__header">Add New Course</h2>
        <form className="add__form">
          <label className="add__label" htmlFor="title">
            Title of Course:
          </label>
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

          <label className="add__label" htmlFor="description">
            Course Description:
          </label>
          <textarea
            className="add__input-textarea"
            id="description"
            name="description"
            value={course.description}
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            onChange={handleChange}
            aria-label="Lorem20"
          ></textarea>

          <label className="add__label" htmlFor="creator">
            Name of Creator:
          </label>
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

          <label className="add__label" htmlFor="price">
            Price:
          </label>
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

          <label className="add__label" htmlFor="lessons">
            Number of Lessons:
          </label>
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

          <label className="add__label" htmlFor="duration">
            Duration (in months):
          </label>
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

          <label className="add__label" htmlFor="level">
            Course Level:
          </label>
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

          <label className="add__label" htmlFor="language">
            Language:
          </label>
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

          <button className="button button--add" onClick={handleAdd}>
            Add Course
          </button>
          <button className="button button--back">
            <Link className="button-link" to="/">
              Back
            </Link>
          </button>

          {/* Validation error messages */}
          <div className="validation-errors">
            {Object.keys(validationErrors).map((field) => (
              <p key={field} className="error-message">
                {validationErrors[field]}
              </p>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
