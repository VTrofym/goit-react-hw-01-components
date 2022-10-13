import UserList from "./userList";
import StatList from "./Statistics/StatList";
// import Section from './Section'
import { usersData } from "./user_data";
import statistics from '../dataJSON/statistics.json'

export default function App() {
  return (
    <div>
      <UserList items={usersData} />
      <StatList items={statistics} />
    </div>
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
      

