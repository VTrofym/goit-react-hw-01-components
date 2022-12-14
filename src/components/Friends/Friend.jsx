import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './Friend.styled';

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" width="90" />
      <Name>{name}</Name>
    </Item>
  );
};


Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friend;

