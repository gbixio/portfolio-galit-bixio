import styled from "styled-components";

export const TitleStyle = styled.h1<{ hlcolor: string }>`
  width: fit-content;
  font-size: 2.5rem;
  font-weight: 700;

  span {
    color: ${(props) => props.hlcolor};
  }

  @media screen and (max-width: 768px) {
  font-size: 1.7rem;
  font-weight: 700;
  }
`;
