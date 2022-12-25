import styled from "styled-components";

export const CardContainer = styled.div`
  border: 0;
  border-radius: 6px 36px;

  background-color: ${(props) => props.theme["gray-100"]};

  max-width: fit-content;
  min-height: fit-content;

  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;

  gap: 0.75rem;
  padding: 0 1rem 2rem;

  text-align: center;

  & > img {
    margin-top: -1.25rem;
  }

  & > span {
    font-family: "Baloo 2", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    margin-top: 0.25rem;

    color: ${(props) => props.theme["gray-800"]};
  }

  & > p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;

    color: ${(props) => props.theme["gray-600"]};

    margin-top: -0.25rem;
  }
`;

export const TypeContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 0.25rem;

  max-width: 84%;
  height: fit-content;

  flex-wrap: wrap;
`;

export const Type = styled.span`
  padding: 0.25rem 0.5rem;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;

  text-transform: uppercase;

  color: ${(props) => props.theme["yellow-700"]};

  background-color: ${(props) => props.theme["yellow-200"]};

  border: 0;
  border-radius: 100px;
`;

export const Purchase = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 1.4375rem;
`;

export const Price = styled.span`
  font-family: "Baloo 2", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 130%;

  color: ${(props) => props.theme["gray-700"]};
`;

export const CardActionContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 0.5rem;
`;

export const ButtonQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme["gray-300"]};

  padding: 0.8rem;
  gap: 0.5rem;

  text-align: center;

  border: 0;
  border-radius: 6px;

  & > span {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }

  & > svg:hover {
    cursor: pointer;
    fill: ${(props) => props.theme["purple-800"]};
  }
`;

export const ShoppingCardButton = styled.button`
  border: 0;
  border-radius: 6px;

  background-color: ${(props) => props.theme["purple-800"]};
  padding: 0.5rem 0.75rem;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme["purple-500"]};
  }
`;
