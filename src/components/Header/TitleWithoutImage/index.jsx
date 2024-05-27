import PropTypes from 'prop-types';
import './styles.scss';

const TitleWithoutImage = ({ title, description }) => {
  return (
    <div className='container-without'>
      <h1 className="title">
        {title}
      </h1>
      <h2 className="description">
        {description}
      </h2>
    </div>
  )
}

TitleWithoutImage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TitleWithoutImage