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
  justify-content: ${(props) => props.justifyContent ?? "center"};
  align-items: ${(props) => props.alignItems ?? "center"};
  /* Color */
  background-color: ${(props) => props.color ?? "transparent"};
  /* Other */
  transition: box-shadow 0.3s ease;
  /* Indent text within the card */
  p,
  h2 {
    padding: 0rem 1.5rem;
  }
`;

export const CardTitle = styled.div`
  /* Display & Box Model */
  padding: 1.5rem 1.5rem 0.5rem;
  /* Flex */
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
  /* Make some room between the icon and the title */
  h2 {
    /* Reset padding from CardContainer */
    padding: 0rem;
    margin: 0rem 0rem 0rem 0.75rem;
  }
`;

export const CallToAction = styled.p`
  font-weight: 600;
  color: var(--darkBlue);
  /* Reset default agent margin */
  margin: 0rem;
`;
