import styled from "styled-components";

export const CardContainer = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  &:hover {
    .front-content {
      transform: translateY(-30%);
    }

    .front-content p {
      opacity: 0;
    }

    .content {
      transform: translateY(0);
    }
  }
  @media screen and (max-width: 1200px) {
    width: 20rem;
    height: 20rem;
  }
`;

export const Cards = styled.div`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;

export const FrontContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);

  p {
    font-size: 2rem;
    font-weight: 700;
    opacity: 1;
    background: linear-gradient(-45deg, #53f2a5 0%, rgb(113, 5, 208) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(-45deg, #36ac73 0%, rgb(113, 5, 208) 100%);
  color: #e8e8e8;
  padding: 10px;
  line-height: 1.2;
  border-radius: 5px;
  pointer-events: none;
  transform: translateY(96%);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
`;

export const Heading = styled.p`
  font-size: 32px;
  font-weight: 700;
`;
