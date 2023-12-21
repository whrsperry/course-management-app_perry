import { Link } from 'react-router-dom';
import profileIcon from '../assets/course-detail-profile.png';
import stars from '../assets/icons/stars-icon.png';
import coverImage from "../assets/course-image-1.png"

const CourseDetail = (props) => {

  const { id = '', title = '', creator = '', image = '', description = '', price = 0, lessons = 0, duration = 0, level = '', language = '' } = props.selectedCourse || {};

  if (!props) {
    return (
      <div className='course-detail'>
        <div className="course-detail__wrapper">
          <h2>Loading..</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="course-detail">
      <div className="course-detail__wrapper wrapper">
        <div className="course-detail__study-content">
          <div className="course-detail__creator-content">
            <div className="course-detail__creator-container">
              <img
                className="course-detail__profile"
                src={profileIcon}
                alt="creator's profile picture"
              />
              <div className="course-detail__creator-info">
                <span className="course-detail__creator-label">Created by:</span>
                <span className="course-detail__creator-name">{creator}</span>
              </div>
            </div>
            <div className="course-detail__ratings-container">
              <img
                className="course-detail__stars"
                src={stars}
                alt="rating stars icon"
              />
              <span className="course-detail__rating">4.9 Rating</span>
            </div>
          </div>
          <div className="course-detail__image-container">
            <img className="course-detail__image" src={coverImage} alt="course cover" />
          </div>
          <div className="course-detail__heading">
            <h3 className="course-detail__header">{title}</h3>
          </div>
          <div className="course-detail__description-content">
            <h4 className="course-detail__description-header">Description</h4>
            <p className="course-detail__description">{description}</p>
          </div>
        </div>
        <aside className="course-detail__aside-content">
          <span className="course-detail__price">{`$${price}`}</span>
          <div className="course-detail__border"></div>
          <div className="course-detail__module-info">
            <div className="course-detail__module-wrapper">
              <span className="course-detail__module-label">
                Number of Lessons:
              </span>
              <span className="course-detail__module-data">{lessons}</span>
            </div>
            <div className="course-detail__module-wrapper">
              <span className="course-detail__module-label">
                Course Duration:
              </span>
              <span className="course-detail__module-data">
                {duration} {duration > 1 ? "Months" : "Month"}
              </span>
            </div>
            <div className="course-detail__module-wrapper">
              <span className="course-detail__module-label">
                Course Level:
              </span>
              <span className="course-detail__module-data">{level}</span>
            </div>
            <div className="course-detail__module-wrapper">
              <span className="course-detail__module-label">
                Course Language:
              </span>
              <span className="course-detail__module-data">{language}</span>
            </div>
          </div>
          <div className="course-detail__border"></div>
          <div className="course-detail__button-wrapper">
            <button className='button'>
              <Link className='button-link' to={`/update/${id}`}>Edit Course</Link>
            </button>
            <button className='button button--detail-back'>
              <Link className='button-link' to={`/`}>Back</Link>
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CourseDetail;
