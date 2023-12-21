import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {

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

  const handleChange = (e) => {
    setCourse(prevCourse => ({
      ...prevCourse,
      [e.target.name]: e.target.value
    }))
  };

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:8800/course", course);
  //     navigate("/");
  //   } catch (err) {
  //     console.log("Error posting new course", err);
  //   }
  // };

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:8800/course", course);
  //     const addedCourse = response.data; // Assuming the server sends back the added course
  
  //     // Update the state with the new course
  //     setCourse((prevCourses) => [...prevCourses, addedCourse]);
  
  //     // Navigate to the home page or wherever you want to navigate
  //     navigate("/");
  //   } catch (err) {
  //     console.log("Error posting new course", err);
  //   }
  // };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8800/course", course);
      console.log("Server Response:", response);
  
      // Update the state with the new course
      setCourse((prevCourses) => {
        const updatedCourses = [...prevCourses, response.data.addedCourse];
        console.log("Updated Courses:", updatedCourses);
        return updatedCourses;
      });
  
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
          {/* <label>Upload Image</label>
          <input
            type="file"
            name="file"
            onChange={handleChange}
          /> */}
          <label>Course Cover Image:</label>
          <input
            type="text"
            name="image"
            value={course.image}
            onChange={handleChange}
          />
          <label>Title of Course:</label>
          <input
            type="text"
            name="title"
            value={course.title}
            onChange={handleChange}
          />
          <label>Course Description:</label>
          <input
            type="text"
            name="description"
            value={course.description}
            onChange={handleChange}
          />
          <label>Name of Creator:</label>
          <input
            type="text"
            name="creator"
            value={course.creator}
            onChange={handleChange}
          />
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={course.price}
            onChange={handleChange}
          />
          <label>Number of Lessons:</label>
          <input
            type="number"
            name="lessons"
            value={course.lessons}
            onChange={handleChange}
          />
          <label>Duration (in months):</label>
          <input
            type="text"
            name="duration"
            value={course.duration}
            onChange={handleChange}
          />
          <label>Course Level:</label>
          <select
            name="level"
            value={course.level}
            onChange={handleChange}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <label>Language:</label>
          <input
            type="text"
            name="language"
            value={course.language}
            onChange={handleChange}
          />

          <button onClick={handleClick}>Add Course</button>
        </form>
      </div>
    </div>
  );
}

export default Add;