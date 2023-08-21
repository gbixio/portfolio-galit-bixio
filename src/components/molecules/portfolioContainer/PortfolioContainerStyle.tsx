import styled from "styled-components";

export const PortfolioContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;
  gap: 1rem;
  align-items: center;
  justify-items: center;
  width: 80vw;
  z-index: -2;
  

  grid-template-areas:
    "col1 col2 col3"
    "col1 col4 col5";

  .card1 {
    grid-area: col1;
  }

  .card2 {
    grid-area: col2;
  }

  .card3 {
    grid-area: col3;
  }
  .card4 {
    grid-area: col4;
  }
  .card5 {
    grid-area: col5;
  }

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
