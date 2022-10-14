import styled from 'styled-components';

export const Button = styled.button`
  padding: 4px 8px;
  font-size: 14px;
  text-transform: capitalize;
  border-radius: 4px;
  border: 1px solid #e1e1e1;
  background-color: #ffffff;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.2);

  :not(:last-child) {
    margin-right: 10px;
  }

  :hover,
  :focus {
    background-color: #e1e1e1;
    );
  }
`;
