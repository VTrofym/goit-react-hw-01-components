import UsersList from "../Profile/UsersList";
import StatList from "../Statistics/StatList";
import FriendList from "../Friends/FriendList";
import TransactionList from "../Transactions/TransactionList";

import users from '../../dataJSON/users.json';
import statistics from '../../dataJSON/statistics.json';
import friends from '../../dataJSON/friends.json';
import transaction from '../../dataJSON/transaction.json';

import { Container } from "./App.styled";

export default function App() {
  return (
    <Container>
      <UsersList items={users} />
      <StatList items={statistics} />
      <FriendList items={friends} />
      <TransactionList items={transaction} />
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
      

