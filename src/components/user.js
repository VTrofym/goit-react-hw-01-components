import PropTypes from 'prop-types'
import defaulImage from './logo512.png'

const User = ({ imageUrl = defaulImage, name = 'не известно', tag, location, followers, views, likes }) => {
  return (
  <div className="profile">
    <div className="description">
      <img
        src={imageUrl}
        alt="User avatar"
        className="avatar"
      />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
    <ul className="stats">
      <li className='block'>
        <span className="label">Followers </span><br></br>
        <span className="quantity">{followers}</span>
      </li>
      <li className='block'>
        <span className="label">Views</span><br></br>
        <span className="quantity">{views}</span>
      </li>
      <li className='block'>
        <span className="label">Likes</span><br></br>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  </div>
  );
};

User.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
}




export default User;





// тернарный оператор
/* <span className="label">Likes {likes < 100 ? 'плохо' : 'хорошо'} </span> */

