import styled from "styled-components";

export const NavStyle = styled.section`
display: flex;
align-items: flex-end;
flex-direction: column;
  svg {
    margin: 1rem;
    width: 25px;
    height: 25px;
  }
  @media screen and (min-width: 768px) {
   
    svg {
    display: none;
    }
  }
`;
