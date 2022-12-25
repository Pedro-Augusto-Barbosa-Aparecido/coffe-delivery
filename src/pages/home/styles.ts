import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
`;

export const Intro = styled.section`
  width: 100%;
  height: 33.375rem;
  max-height: 534px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5.875rem 10rem 6.75rem;

  & > div {
    max-width: 588px;
    display: flex;

    flex-direction: column;

    justify-content: flex-start;
    align-items: flex-start;

    gap: 3.5rem;
  }

  //background-image: url("/src/assets/intro-bg.svg");
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;

  gap: 1rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;

    color: ${(props) => props.theme["gray-900"]};
  }

  span {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme["gray-800"]};
  }
`;

export const CoffeeList = styled.section`
  padding: 2rem 10rem;

  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: flex-start;

  gap: 3.375rem;

  & > div {
    height: fit-content;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(5, 1fr);

    grid-row-gap: 2.5rem;
    grid-column-gap: 2.5rem;
  }

  & > span {
    font-family: "Baloo 2", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    color: ${(props) => props.theme["gray-800"]};
  }
`;
