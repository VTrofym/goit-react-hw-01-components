import PropTypes from 'prop-types';
import defaulImage from '../logo512.png';
import { Profile, Description, Avatar, Name, Tag, Location, Stats, Block, Label,Quantity} from './User.styled';

const User = ({ imageUrl = defaulImage, name = 'не известно', tag, location, followers, views, likes }) => {
  return (
    <Profile>
    <Description>
      <Avatar
        src={imageUrl}
        alt="User avatar"
      />
      <Name>{name}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>
    <Stats>
      <Block>
        <Label>Followers </Label><br></br>
        <Quantity>{followers}</Quantity>
      </Block>
      <Block>
        <Label>Views</Label><br></br>
        <Quantity>{views}</Quantity>
      </Block>
      <Block>
        <Label>Likes</Label><br></br>
        <Quantity>{likes}</Quantity>
      </Block>
    </Stats>
  </Profile>
  );
};

User.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}

export default User;





// тернарный оператор
/* <span className="label">Likes {likes < 100 ? 'плохо' : 'хорошо'} </span> */


