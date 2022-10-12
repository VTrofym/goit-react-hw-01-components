import UserList from "./userList";
// import Section from './Section'
import { usersData } from "./user_data";

export default function App() {
  return (
    <div>
      <UserList items={ usersData} />
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
      

