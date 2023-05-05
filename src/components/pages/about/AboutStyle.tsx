import styled from "styled-components";

export const AboutStyle = styled.section`
  display: flex;
  height: 70vh;
  align-items: center;
  justify-content: center;
  gap: 10rem;
`
export const LeftContainer = styled.div`
  width: 30vw;
  margin: 1rem;
  justify-content: flex-end;

  p {
  line-height: 1.8rem;
  margin-bottom: 3rem;
}
 Button {
  margin-left: 20vw;
 }
`
export const RightContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  padding-top: 3rem;
  align-items: center;
  justify-items: center;
`