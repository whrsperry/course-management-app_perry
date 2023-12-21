import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import profileIcon from '../assets/course-detail-profile.png';
import stars from '../assets/icons/stars-icon.png';

const CourseDetail = (props) => {

  return (
    <div className="course-detail">
      <div className="course-detail__wrapper">
        <div className="course-detail__study-content">
          <div className="course-detail__heading">
            <h3 className="course-detail__header">
              {/* {isEditMode ? (
                <input
                  type="text"
                  name="title"
                  value={editedCourse.title}
                  onChange={handleInputChange}
                />
              ) : (
                selectedCourse.title
              )} */}
            </h3>
          </div>
          <div className="course-detail__creator-content">
            <div className="course-detail__creator-container">
              <img
                className="course-detail__profile"
                src={profileIcon}
                alt="creator's profile picture"
              />
              <div className="course-detail__creator-info">
                <span className="course-detail__creator-label">Created by:</span>
                <span className="course-detail__creator-name">
                  {/* {isEditMode ? (
                    <input
                      type="text"
                      name="creatorName"
                      value={editedCourse.creatorName}
                      onChange={handleInputChange}
                    />
                  ) : (
                    selectedCourse.creatorName
                  )} */}
                </span>
              </div>
            </div>
            <div className="course-detail__ratings-container">
              <img
                className="course-detail__stars"
                src={stars}
                alt="rating stars icon"
              />
              <span className="course-detail__rating">
                {/* {`${isEditMode ? editedCourse.rating : selectedCourse.rating} Rating`} */}
              </span>
            </div>
          </div>
          <div className="course-detail__image-container">
            <img
              className="course-detail__image"
              // src={isEditMode ? editedCourse.image : selectedCourse.image}
              alt=""
            />
          </div>
          <div className="course-detail__description-content">
            <h4 className="course-detail__description-header">Description</h4>
            <p className="course-detail__description">
              {/* {isEditMode ? (
                <textarea
                  name="description"
                  value={editedCourse.description}
                  onChange={handleInputChange}
                />
              ) : (
                selectedCourse.description
              )} */}
            </p>
          </div>
        </div>
        <aside className="course-detail__aside-content">
          <span className="course-detail__price">
            {/* {`$${isEditMode ? editedCourse.price : selectedCourse.price}`} */}
          </span>
          <div className="course-detail__border"></div>
          <div className="course-detail__module-info">
            <div className="course-detail__module-wrapper">
              <span className="course-detail__module-label course-detail__module-label--lessons">
                Number of Lessons
              </span>
              <span className="course-detail__module-data">
                {/* {isEditMode ? (
                  <input
                    type="number"
                    name="lessons"
                    value={editedCourse.lessons}
                    onChange={handleInputChange}
                  />
                ) : (
                  selectedCourse.lessons
                )} */}
              </span>
            </div>
            <div className="course-detail__module-wrapper">
              <span className="course-detail__module-label course-detail__module-label--duration">
                Course Duration
              </span>
              <span className="course-detail__module-data">
                {/* {isEditMode ? (
                  <input
                    type="text"
                    name="duration"
                    value={editedCourse.duration}
                    onChange={handleInputChange}
                  />
                ) : (
                  selectedCourse.duration
                )} */}
              </span>
            </div>
            <div className="course-detail__module-wrapper">
              <span className="course-detail__module-label course-detail__module-label--level">
                Course Level
              </span>
              <span className="course-detail__module-data">
                {/* {isEditMode ? (
                  <input
                    type="text"
                    name="level"
                    value={editedCourse.level}
                    onChange={handleInputChange}
                  />
                ) : (
                  selectedCourse.level
                )} */}
              </span>
            </div>
            <div className="course-detail__module-wrapper">
              <span className="course-detail__module-label course-detail__module-label--students">
                Students Enrolled
              </span>
              <span className="course-detail__module-data">
                {/* {isEditMode ? (
                  <input
                    type="number"
                    name="student"
                    value={editedCourse.student}
                    onChange={handleInputChange}
                  />
                ) : (
                  selectedCourse.student
                )} */}
              </span>
            </div>
            <div className="course-detail__module-wrapper">
              <span className="course-detail__module-label course-detail__module-label--language">
                Language
              </span>
              <span className="course-detail__module-data">
                {/* {isEditMode ? (
                  <input
                    type="text"
                    name="language"
                    value={editedCourse.language}
                    onChange={handleInputChange}
                  />
                ) : (
                  selectedCourse.language
                )} */}
              </span>
            </div>
          </div>
          <div className="course-detail__border"></div>
          <div className="course-detail__button-wrapper">
            {/* <button className='button button--update'>
                <Link to={`/course-detail/${props.id}`}>Update Course</Link>
              </button>
              <button 
                className='button button--delete' 
                onClick={props.handleDelete}>
                  Delete Course
              </button> */}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CourseDetail;
