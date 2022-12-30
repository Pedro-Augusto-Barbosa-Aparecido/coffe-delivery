import styled from "styled-components";

export const Container = styled.main`
  padding: 5rem 10rem;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 2.5rem;

  & > div:first-child {
    display: flex;

    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    gap: 0.25rem;
  }

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    color: ${(props) => props.theme["yellow-700"]};
  }

  h4 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme["gray-800"]};
  }
`;

export const InformationContainer = styled.div`
  display: flex;

  width: 80%;

  justify-content: space-between;
  align-items: center;

  //gap: 6.375rem;
`;

export const Order = styled.div`
  background-image: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  border-radius: 6px 36px;

  padding: 1px;

  & > div {
    background-color: ${(props) => props.theme["white-200"]};
    border-radius: 6px 36px;

    display: flex;

    justify-content: flex-start;
    align-items: flex-start;

    flex-direction: column;

    padding: 2.5rem;
    gap: 2.5rem;
  }

  width: fit-content;
  height: fit-content;
`;

export const OrderInformation = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-start;

  gap: 0.75rem;

  & > div {
    display: flex;

    justify-content: flex-start;
    align-items: flex-start;

    flex-direction: column;

    span {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;

      color: ${(props) => props.theme["gray-700"]};
    }
  }
`;

interface IconContainerProps {
  bgColor: string;
}

export const IconContainer = styled.div<IconContainerProps>`
  background-color: ${(props) => props.bgColor};
  padding: 0.5rem;

  display: flex;

  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 50%;
`;
