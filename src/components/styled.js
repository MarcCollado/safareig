import styled from "styled-components";

export const CardContainer = styled.div`
  /* Display & Box Model */
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;
  margin: 1.5rem auto;
  border-radius: 1.5rem;
  box-shadow: ${(props) =>
    props.plain === true
      ? "none"
      : "2rem 6.25rem 3.75rem -3.25rem rgba(0, 0, 0, 0.18)"};
  overflow: hidden;
  /* Flex */
  display: flex;
  flex-flow: ${(props) => props.flexFlow ?? "row nowrap"};
  align-items: center;
  justify-content: center;
  /* Color */
  background-color: ${(props) => props.color ?? "transparent"};
  /* Other */
  transition: box-shadow 0.3s ease;

  /* Reset margin for the cover element */
  &:first-child {
    margin-block-start: 0rem;
  }

  /* Indent text within the card */
  p {
    padding: 0rem 1.5rem;
  }
`;

export const CardTitle = styled.div`
  /* Display & Box Model */
  padding: 1.5rem;
  /* Flex */
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;

  /* Make some room between the icon and the title */
  h2 {
    margin: 0rem 0rem 0rem 0.75rem;
  }
`;

export const CallToAction = styled.p`
  margin: 0rem;
  font-weight: 600;
  color: var(--darkBlue);
`;
