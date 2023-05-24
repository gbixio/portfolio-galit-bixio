import styled from "styled-components";

export const ContactStyle = styled.section`
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto;

@media screen and (max-width: 768px) {
flex-direction: column;
}

`;
export const LeftContainer = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
margin: 0 auto;
gap: 1em;


@media screen and (max-width: 768px) {
width: 100vw;
padding: 3em;
}`;

export const RightContainer = styled.div`
margin: 0 auto;

@media screen and (max-width: 768px) {
width: 80vw;
}
`;