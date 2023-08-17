import styled from "styled-components";

export const NavStyle = styled.ul`
  svg {
    width: 25px;
    height: 25px;
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    svg {
      display: block;
    }
  }
`;
