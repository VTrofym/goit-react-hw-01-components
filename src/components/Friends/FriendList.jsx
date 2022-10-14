import Friend from "./Friend";
import PropTypes from 'prop-types'

function FriendList({ items }) {
  return <ul>
    {items.map(item =>(
      <div key={item.id}>
      <Friend
        avatar={item.avatar}
        name={item.name}
        isOnline={item.isOnline}
      />
    </div>))}
  </ul>
}

Friend.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }))
}

export default FriendList;