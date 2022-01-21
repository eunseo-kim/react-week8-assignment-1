import styled from '@emotion/styled';

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

export default Item;
