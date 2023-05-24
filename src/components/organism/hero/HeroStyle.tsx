import styled from "styled-components";

export const HeroStyle = styled.section`
  display: flex;
  height: 70vh;
  align-items: center;
  justify-content: center;
  gap: 10rem;
`;
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
`;
export const RightContainer = styled.div`
  img {
    width: 27rem;
    margin: 2rem;
  }
`;
