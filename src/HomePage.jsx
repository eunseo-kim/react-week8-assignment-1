import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import Title from './css/Title';

const List = styled.ul({
  display: 'flex',
  listStyle: 'none',
});

const Item = styled.li({
  padding: '10px 16px',
  '& a': {
    textDecoration: 'none',
    color: 'black',
    ':hover': {
      textDecorationLine: 'underline',
      cursor: 'pointer',
    },
  },
});

export default function HomePage() {
  return (
    <div>
      <Title>Home</Title>
      <List>
        <Item><Link to="/about">About</Link></Item>
        <Item><Link to="/login">Log in</Link></Item>
        <Item><Link to="/restaurants">Restaurants</Link></Item>
        <Item><Link to="/xxx">멸망의 길</Link></Item>
      </List>
    </div>
  );
}
