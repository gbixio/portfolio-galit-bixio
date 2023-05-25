import styled from "styled-components";

export const ContactStyle = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto;

@media screen and (max-width: 768px) {
    flex-direction: column;
}

`;
export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
margin: 0 auto;


@media screen and (max-width: 768px) {
width: 100vw;
padding: 3em;
}`;

export const BottomContainer = styled.div`
display: flex;
gap: 2rem;

a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

  }

svg {
    height: 25px;
    width: 25px;
    cursor: pointer;
  }

@media screen and (max-width: 768px) {
width: 80vw;
}
`;
