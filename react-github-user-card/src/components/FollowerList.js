import React from 'react';

class FollowerList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return <p>FollowerList</p>
  }
}

export default FollowerList;





// response.data.forEach(follower => {
//   this.getFollowerData(follower.login);
// })

// getFollowerData = follower => {
//   axios.get(`https://api.github.com/users/${follower}`)
//     .then(response => {
//       // console.log("response in getFollowerData: ", response);
//     })
//     .catch(err => {
//       console.log("There was an error: ", err);
//     })
// }
