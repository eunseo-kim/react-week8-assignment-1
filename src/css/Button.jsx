import styled from '@emotion/styled';

const Button = styled.button({
  margin: '0 16px',
  padding: '5px 10px',
  borderRadius: '10px',
  border: '1px solid black',
  ':hover': {
    backgroundColor: 'gray',
    color: 'white',
    cursor: 'pointer',
  },
});

export default Button;
