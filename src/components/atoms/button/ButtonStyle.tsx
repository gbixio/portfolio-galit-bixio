import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: inline-block;
  font-weight: 500;
  width: 177px;
  height: 50px;
  background-color: var(--text-color);
  color: var(--bg-card-color);
  padding: 0.7rem 1.5rem;
  border-radius: var(--border-radius);
  border: none;
  transition: var(--transition);
  text-decoration: none;
  font-family: "Ubuntu", sans-serif;
  font-size: var(--font-size);

:hover {
  background-color: var(--highlight-color);
  transform: translateY(-5px);
}

`