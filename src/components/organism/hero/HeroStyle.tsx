import styled from "styled-components";

export const HeroStyle = styled.section`
  display: flex;
  height: 70%;
  align-items: center;
  justify-content: center;
  gap: 10rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;
export const LeftContainer = styled.div`
  width: 30vw;
  height: 100%;
  margin: 1rem;
  justify-content: flex-end;

  p {
    line-height: 1.8rem;
    margin-bottom: 3rem;
  }
  Button {
    margin-left: 20vw;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
    p {
      margin-bottom: 1.5rem;
    }
    Button {
      margin-left: 30vw;
    }
  }
`;
export const RightContainer = styled.div`
  img {
    width: 27rem;
    margin: 2rem;
  }

  @media screen and (max-width: 768px) {
    img {
      display: none;
    }
  }
`;
