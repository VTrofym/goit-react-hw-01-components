const User = ({imageUrl, name = 'не известно', tag, location, followers, views, likes} ) => {
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

export default User;