import User from "./user"
import { usersData } from "./user_data";

export default function App() {
  return (
    <div>
      {usersData.map(user => (
        <User
        key={user.tag}
        imageUrl={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      ))}
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


