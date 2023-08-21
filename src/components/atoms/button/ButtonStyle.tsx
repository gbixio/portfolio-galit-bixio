import styled from "styled-components";

export const ButtonStyle = styled.button`
  font-weight: 500;
  width: 177px;
  height: 50px;
  background-color: ${(props) => props.theme.textcolor};
  color: ${(props) => props.theme.bgcardcolor};
  padding: 0.7rem 1.5rem;
  border-radius: var(--border-radius);
  border: none;
  transition: var(--transition);
  text-decoration: none;
  font-family: "Ubuntu", sans-serif;
  font-size: var(--font-size);

  :hover {
    background-color: ${(props) => props.theme.highlightcolor};
    transform: translateY(-5px);
  }
`;
