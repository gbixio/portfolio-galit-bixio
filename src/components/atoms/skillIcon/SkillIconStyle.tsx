import styled from "styled-components";

export const SkilIconStyle = styled.section`
  display: grid;
  grid-template-rows: repeat(1.5fr 0.5fr);
  justify-items: center;
  font-size: 1.2rem;
  padding-bottom: 2rem;

  svg {
    width: 3rem;
    height: 3rem;
  }

  svg:hover {
    transform: skew(-9deg);
    transition: var(--transition);
    cursor: default;
    color: ${(props) => props.theme.highlightcolor};
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 1rem;
    margin: 0.3rem;
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;
