import { useState } from 'react';
import { Link } from 'react-router-dom';
import lessonIcon from "../assets/icons/lesson-icon.png";
import starsIcon from "../assets/icons/stars-icon.png";
import studentIcon from "../assets/icons/student-icon.png";
import arrowIcon from "../assets/icons/arrow-icon.png";
import coverImage from "../assets/course-image-1.png";
import ConfirmationDialog from './ConfirmationDialog';

const CourseCard = (props) => {

  const [isConfirmationOpen, setConfirmationOpen] = useState(false);

  const confirmDelete = () => {
    setConfirmationOpen(true);
  };

  const handleCancel = () => {
    setConfirmationOpen(false);
  };

  const handleConfirm = () => {
    setConfirmationOpen(false);
    props.handleDelete();
  };

  return (
    <>
    <div className="course-card">
      <div className="course-card__wrapper">
        <div className="course-card__image-container">
          <img className="course-card__image" src={coverImage} alt="course image" />
        </div>
        <div className="course-card__lesson-content">
          <img className="course-card__lesson-icon" src={lessonIcon} alt="lesson icon" />
          <span className="course-card__lesson-text">{props.lessons} {props.lessons > 1 ? "Lessons" : "Lesson"}</span>
        </div>
        <h3 className="course-card__title">{props.title}</h3>
        <div className="course-card__buyer-info">
          <span className="course-card__price">{`$${props.price}`}</span>
          <div className="course-card__rating-container">
            <img className="course-card__stars" src={starsIcon} alt="stars rating" />
            <span className="course-card__rating">4.9 Rating</span>
          </div>
        </div>
        <div className="course-card__border"></div>
        <div className="course-card__user-info">
          <div className="course-card__student-container">
            <img className="course-card__student-icon" src={studentIcon} alt="students icon" />
            <span className="course-card__student-text">200 Students</span>
          </div>
          <div className="course-card__button-container">
            <button className='course-card__detail-button' onClick={() => {props.handleCourseSelect()}}>
              <Link to={`/course-detail/${props.id}`}>
                <img className="course-card__details-icon" src={arrowIcon} alt="arrow icon" />
              </Link>
            </button>
            <button className='button button--delete' onClick={confirmDelete}>Delete Course</button>
          </div>
        </div>
      </div>
    </div>

    {/* Confirmation Dialog */}
    <ConfirmationDialog
      isOpen={isConfirmationOpen}
      onCancel={handleCancel}
      onConfirm={handleConfirm}
    />
    </>
  )
};

export default CourseCard;