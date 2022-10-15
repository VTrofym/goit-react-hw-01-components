// import PropTypes from 'prop-types'

const Statistics = ({ items, title }) => {
  return (
    <section class="statistics">
      {title ? <h2 class="title">{title}</h2> : false}
      <ul class="stat-list">
        {items.map(item => {
          return (
            <li class="item" key={item.id}>
              <span class="label">{item.label}</span>
              <span class="percentage">{item.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

// Statistics.propTypes = {
//   id: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired
// }

export default Statistics;
