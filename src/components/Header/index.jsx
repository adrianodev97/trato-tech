import PropTypes from 'prop-types';
import './styles.scss';
import TitleWithImage from './TitleWithImage';
import TitleWithoutImage from './TitleWithoutImage';


const Header = ({title, description, image, className = ''}) => {
  return (
    <header className="header-default">
      {image ? 
        <TitleWithImage title={title} description={description} image={image} className={className} /> 
        :
        <TitleWithoutImage title={title} description={description} />
      }
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  className: PropTypes.string,
};

export default Header