import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 7px 15px;
  margin: 10px 0px;

  font-weight: bold;
  text-transform: capitalize;

  color: #ffffff;
  cursor: pointer;
  background: ${({ selected }) => (selected ? '#fc1503' : 'transparent')};
  outline: none;
  border: none;

  border-radius: 20px;
  transition: all 0.3s ease;

  @media screen and (max-width: 900px) {
    margin: 10px;
  }

  &:hover {
    background-color: #fc1503;
  }

  & span.button__icon {
    margin-right: 15px;
    color: ${({ selected }) => (selected ? '#ffffff' : 'red')};
  }

  & span.button__label {
    margin-right: 15px;
    opacity: ${({ selected }) => (selected ? 1 : 0.8)};
  }
`;
