import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 656px;
  height: 535px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 20em;
    height: 500px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 3em;
  @media screen and (max-width: 768px) {
  }
`;
