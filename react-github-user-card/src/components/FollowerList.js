import React from 'react';

import Follower from './Follower';

const FollowerList = props => {

  return (
    <>
      <h2>Followed By: </h2>
      {props.followers.map(follower => {
        return <Follower key={follower.id} follower={follower} />
      })}
    </>
  )
}

export default FollowerList;



// getFollowerData = follower => {
//   axios.get(`https://api.github.com/users/${follower}`)
//     .then(response => {
//       // console.log("response in getFollowerData: ", response);
//     })
//     .catch(err => {
//       console.log("There was an error: ", err);
//     })
// }
