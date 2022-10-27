import React from 'react'
import {Link} from 'react-router-dom';

function UserCard(props) {
  const {user} = props;
  return (
  <div>
    <div className="ui fluid card">
        <div className="image">
          <img src={user.picture.large}/>
        </div>
        <div className="content">
          <p className="">{`${user.name.first} ${user.name.last} `}</p>
          <Link to={`/users/user/${user.login.uuid}`} state={user}>click to user detail</Link>
        </div>
    </div>
</div>
  )
}

export default UserCard;