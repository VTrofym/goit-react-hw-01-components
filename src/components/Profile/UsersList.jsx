import User from './User';
import PropTypes from 'prop-types';
import { UserContainers } from './UserList.styled';

function UsersList({ items }) {
  return (
    <UserContainers>
      {items.map(item => (
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
        </li>
      ))}
    </UserContainers>
  );
}

UsersList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string.isRequired,
    })
  ),
};

export default UsersList;

