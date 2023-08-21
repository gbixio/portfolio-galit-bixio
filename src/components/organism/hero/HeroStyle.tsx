import styled from "styled-components";

export const HeroStyle = styled.section`
  display: flex;
  height: 80%;
  width: 90vw;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;
export const LeftContainer = styled.div`
  width: 40%;
  height: 100%;
  margin: 1rem;
  display: blok;

  align-items: center;

  p {
    line-height: 1.8rem;
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 768px) {
    width: 95%;
    p {
      margin-bottom: 1.5rem;
    }
    Button {
      margin-top: 2rem;
    }
  }
`;
export const RightContainer = styled.div`
  width: 40%;
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
