import styled from '@emotion/styled';

const Button = styled.button({
  padding: '5px 10px',
  borderRadius: '4px',
  border: '1px solid black',
  ':hover': {
    backgroundColor: 'gray',
    color: 'white',
    cursor: 'pointer',
  },
});

export default Button;
