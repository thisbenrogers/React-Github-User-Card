import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const User = (props) => {
  const { avatar_url, bio, login, created_at, followers, html_url } = props.userData;
  return (
    <Card>
      <Image src={avatar_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{login}</Card.Header>
        <Card.Meta>
          <span className='date'>Joined on {created_at}</span>
        </Card.Meta>
        <Card.Description>
          {bio}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href={html_url}>
          <Icon name='user' /> Followed by {followers} users
        </a>
      </Card.Content>
    </Card>
  )
}


export default User;