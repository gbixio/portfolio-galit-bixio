import styled from "styled-components";

export const TextareaStyle = styled.textarea`
  width: 40vw;
  height: 8em;
  border: 2px solid ${(props) => props.theme.textcolor};
  border-radius: 5px;
  outline: transparent;
  font-size: 16px;
  padding: 1.5em;
  font-family: "Ubuntu", sans-serif;
  text-align: justify;
  background-color: transparent;
  color: gray;

  &:focus {
    transition: 0.2s;
    border: 2px solid ${(props) => props.theme.highlightcolor};
  }

  @media screen and (max-width: 768px) {
    width: 272px;
  }
`;
