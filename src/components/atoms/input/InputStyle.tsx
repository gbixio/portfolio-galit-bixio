import styled from "styled-components";

export const InputStyle = styled.input`
  width: 40vw;
  height: 50px;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.textcolor};
  outline: transparent;
  font-weight: 400;
  font-size: 16px;
  padding-left: 1.5em;
  background-color: transparent;
  color: gray;

  &:focus {
    transition: 0.2s;
    border-bottom: 2px solid ${(props) => props.theme.highlightcolor};
  }

  @media screen and (max-width: 768px) {
    width: 272px;
  }
`;
