import PropTypes from 'prop-types'
// import css from './Statistics.module.css'

const CreatePage = ({id, label, percentage}) => {
  return (
  <section className="statistics">
    <h2 className="title">Upload stats</h2>
    <ul className="stat-list">
        <li className="item">{id}
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
      </li>
    </ul>
  </section>
  );
};

CreatePage.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
}

export default CreatePage;

