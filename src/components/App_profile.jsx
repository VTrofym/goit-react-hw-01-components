import User from "./user"
import { usersData } from "./user_data";

export default function App() {
  return (
    <div>
      <User
        imageUrl={usersData[0].avatar}
        name={usersData[0].username}
        tag={usersData[0].tag}
        location={usersData[0].location}
        followers={usersData[0].stats.followers}
        views={usersData[0].stats.views}
        likes={usersData[0].stats.likes}
      />
      
      <User
        imageUrl={usersData[1].avatar}
        name={usersData[1].username}
        tag={usersData[1].tag}
        location={usersData[1].location}
        followers={usersData[1].stats.followers}
        views={usersData[1].stats.views}
        likes={usersData[1].stats.likes}
      />
    </div>
  );
}