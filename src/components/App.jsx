import { Profile } from './Profile';
import user from '../configs/user';

export const App = () => {
  return (
    <Profile 
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
    
  );
};
