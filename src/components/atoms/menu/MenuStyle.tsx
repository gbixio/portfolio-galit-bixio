import styled from "styled-components";

export const MenuStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100vw;
  min-height: 10vh;

  li {
    margin: 0 auto;
    position: relative;
    font-weight: 500;
    padding: 1rem;
    transition: var(--transition);
  }

  li::before {
    content: "___";
    position: absolute;
    height: 5px;
    bottom: -5px;
    left: 2;
    background-color: ${(props) => props.theme.primarycolor};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.5s ease-in-out;
    opacity: 0.7;
  }

  li:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }

  li:hover {
    color: ${(props) => props.theme.highlightcolor};
  }
`;
