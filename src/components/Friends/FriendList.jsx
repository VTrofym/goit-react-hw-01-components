import Friend from "./Friend";
import PropTypes from 'prop-types'
import { Block} from './FriendList.styled';

function FriendList({ items }) {
  return <ul>
    {items.map(item =>(
      <Block key={item.id}>
      <Friend
        avatar={item.avatar}
        name={item.name}
        isOnline={item.isOnline}
      />
    </Block>))}
  </ul>
}

Friend.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }))
}

export default FriendList;
