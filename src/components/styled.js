import styled from "styled-components";

export const CardTitle = styled.div`
  /* Display & Box Model */
  & h2 {
    margin-inline-start: 1rem;
  }
  /* Flex */
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
`;

// SIMPLE LINK

export const SimpleLinkContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
  // SVG Chevron imported in the rendered component
  & > svg {
    transition: all 250ms ease-in-out;
  }

  &:hover > svg {
    transform: translateX(0.25rem);
  }
`;

export const SimpleLink = styled.p`
  font-weight: 600;
  color: var(--darkBlue);
  /* Reset default agent margin */
  margin: 0rem;
`;

// CARD CONTAINER

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
  padding: 1rem 1.5rem 1.5rem;
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
`;

export const CallToAction = styled.p`
  font-weight: 600;
  color: var(--darkBlue);
  /* Reset default agent margin */
  margin: 0rem;
`;
