import styled from "styled-components";

export const CardContainer = styled.div`
  /* Display & Box Model */
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;
  margin: 0rem auto;
  border-radius: 1.5rem;
  box-shadow: 2rem 6.25rem 3.75rem -3.25rem rgba(0, 0, 0, 0.18);
  overflow: hidden;
  /* Flex */
  display: flex;
  align-items: center;
  justify-content: center;
  /* Other */
  transition: box-shadow 0.3s ease;
`;
