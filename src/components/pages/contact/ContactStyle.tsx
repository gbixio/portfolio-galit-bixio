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
flex-direction: row;
gap: 4rem;
align-items: center;
justify-content:center;
width: 90%;
height: 60vh;
margin: 0 auto;
text-align: center;



@media screen and (max-width: 768px) {
width: 100vw;
padding: 3em;
}`;

export const BottomContainer = styled.div`
display: flex;
gap: 2rem;
position: fixed;
bottom: 1rem;

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


