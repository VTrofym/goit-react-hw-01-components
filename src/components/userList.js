import User from "./user";
import PropTypes from 'prop-types'

function UserList({ items }) {
  return <ul>
    {items.map(item =>(
      <li key={item.tag}>
      <User
        imageUrl={item.avatar}
        name={item.username}
        tag={item.tag}
        location={item.location}
        followers={item.stats.followers}
        views={item.stats.views}
        likes={item.stats.likes}
      />
    </li>))}
  </ul>
}

UserList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }))
}

export default UserList;


