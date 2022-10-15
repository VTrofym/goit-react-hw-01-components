import Statistics from './Statistics';
import PropTypes from 'prop-types'


function StatList({items}) {
  return <ul>
    {items.map(item => (
    <li key={item.id}>
      <Statistics
      id={item.id}
      label={item.label}
      percentage={item.percentage}
    />
    </li>
  ))}
  </ul>
}

StatList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  }))
}

export default StatList;



