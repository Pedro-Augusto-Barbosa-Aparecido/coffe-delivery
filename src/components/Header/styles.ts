import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 104px;

  padding: 2rem 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.75rem;
  }
`;

export const Location = styled.div`
  width: fit-content;
  height: fit-content;

  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.25rem;

  border: 0;
  border-radius: 6px;

  background-color: ${(props) => props.theme["purple-200"]};

  color: ${(props) => props.theme["purple-800"]};

  span {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 1.3;

    font-size: 0.875rem;
  }
`;

export const PurchasesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  background-color: ${(props) => props.theme["yellow-200"]};

  border: 0;
  border-radius: 6px;

  padding: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;

export const QuantityOnCart = styled.span`
  background-color: ${(props) => props.theme["yellow-700"]};
  color: ${(props) => props.theme["white-100"]};

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 130%;

  position: absolute;
  right: 0;
  top: 0;

  width: 20px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 50%;

  padding: 0.25rem 0 0;

  margin-top: -0.625rem;
  margin-right: -0.625rem;
`;
