import PropTypes from 'prop-types';
import './styles.scss';

const TitleWithImage = ({ title, description, image, className }) => {
  return (
    <div className={`header ${className}`}>
      <div className="header-text">
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
      <div className="header-image">
        <img
          alt={title}
          src={image}
          />
      </div>
    </div>
  )
}

TitleWithImage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TitleWithImage