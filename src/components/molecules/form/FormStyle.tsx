import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 656px;
  height: 100%;
  margin: 0 auto;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    width: 20em;
    height: 500px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 1em;
  @media screen and (max-width: 768px) {
  }
`;
