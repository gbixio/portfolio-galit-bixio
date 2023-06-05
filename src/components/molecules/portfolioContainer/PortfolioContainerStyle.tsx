import styled from "styled-components";

export const PortfolioContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 80vw;
  margin: 0 auto;
  align-items: center;
  justify-items: center;
  row-gap: 2rem;

  grid-template-areas: "col1 col2 col3"
                         "col1 col4 col5";

    .card1{
        grid-area: col1;
    }

    .card2{
        grid-area: col2;
    }

    .card3{
        grid-area: col3;
    }
    .card4{
        grid-area: col4;
    }
    .card5{
        grid-area: col5;
    }
`;

