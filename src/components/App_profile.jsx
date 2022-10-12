import App from "./user";
import { data } from "./user_data";

export default function AppProfile() {
  return (<div>
    <App
    url={data.avatar}
    Name={data.username}
    tag={data.tag}
    location={data.location}
    followers={data.stats.followers}
    views={data.stats.views}
    likes={data.stats.likes}
  />
  </div>
  )
}