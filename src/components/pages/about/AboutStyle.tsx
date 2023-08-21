import styled from "styled-components";

export const AboutStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  z-index: -2;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
export const LeftContainer = styled.div`
  width: 40%;
  justify-content: flex-end;

  p {
    line-height: 1.8rem;
    margin-bottom: 3rem;
    font-size: 16px;
  }
  Button {
    margin-left: 20vw;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const RightContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  padding-top: 3rem;
  align-items: center;
  justify-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    height: 90%;
  }
`;
