import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ items, title }) => {
  return (
    <Section>
      {title ? <Title>{title}</Title> : false}
      <StatList>
        {items.map(item => {
          return (
            <Item key={item.id}>
              <Label>{item.label}</Label>
              <Percentage>{item.percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
