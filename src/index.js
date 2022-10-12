import React from 'react';
import ReactDOM from 'react-dom/client';
// import AppProfile from 'components/App_profile';
// import { App } from 'components/App';
import { data } from './components/user_data';
import './index.css';

const App = (props) => {
  console.log(props)
  return (
  <div className="profile">
    <div className="description">
      <img
        src={data.avatar}
        alt="User avatar"
        className="avatar"
      />
      <p className="name">{data.username }</p>
      <p className="tag">@{data.tag }</p>
      <p className="location">{ data.location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">{ data.stats.followers}</span>
        <span className="quantity">1000</span>
      </li>
      <li>
        <span className="label">{ data.stats.views}</span>
        <span className="quantity">2000</span>
      </li>
      <li>
        <span className="label">{ data.stats.likes}</span>
        <span className="quantity">3000</span>
      </li>
    </ul>
  </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <App
    url={data.avatar}
    Name={data.username}
    tag={data.tag}
    location={data.location}
    followers={data.stats.followers}
    views={data.stats.views}
    likes={data.stats.likes}
  />
);



