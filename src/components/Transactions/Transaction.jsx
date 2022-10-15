import PropTypes from 'prop-types';
import { Table, Thead, Tr, Th, Tb, Td} from './Transaction.styled';

const Transaction = ({items}) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>
      <Tb>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Tr key={id}>
              <Td>{ type}</Td>
              <Td>{ amount}</Td>
              <Td>{ currency}</Td>
            </Tr>
          )
        })}
      </Tb>
    </Table>
  );
};

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
    })
  )
};

export default Transaction;
