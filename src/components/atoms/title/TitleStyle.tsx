import styled from "styled-components";

export const TitleStyle = styled.h1<{ hlcolor: string }>`
  width: fit-content;
  font-size: 2.5rem;
  font-weight: 700;

  span {
    color: ${(props) => props.hlcolor};
  }
`;
