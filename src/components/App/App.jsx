import UsersList from '../Profile/UsersList';
import Statistics from 'components/Statistics/Statistics';
import FriendList from '../Friends/FriendList';
import Transaction from '../Transactions/Transaction';

import users from '../../dataJSON/users';
import statistics from '../../dataJSON/statistics';
import friends from '../../dataJSON/friends';
import transaction from '../../dataJSON/transaction';

import { Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <UsersList items={users} />
      <Statistics items={statistics} title="Upload stats" />
      <FriendList items={friends} />
      <Transaction items={transaction} />
    </Container>
  );
}




// использование логического И и тернарника
// const isOnline = true
//   return (
//     <div>
// {isOnline && 'Онлайн'}
// {isOnline ? 'Онлайн' : 'Офлайн'}

//map React
// {[1, 2, 3, 4, 5].map(el => (
//         <div>{el}</div>
//       ))}

// было для примера заголовков
/* <Section title="Лучшее">
        <UserList items={usersData} />
</Section> */
