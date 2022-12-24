import styled from "styled-components";

interface IconStyleProps {
  backgroundColor: string;
}

export const RootStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2.5rem;
  grid-row-gap: 1.25rem;

  & > div {
    width: max-content;
    height: fit-content;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.75rem;
  }
`;

export const IconStyle = styled.div<IconStyleProps>`
  padding: 0.5rem;
  background-color: ${(props) => props.backgroundColor};

  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 50%;
`;

export const TextStyle = styled.span`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;

  color: ${(props) => props.theme["gray-700"]};
`;
