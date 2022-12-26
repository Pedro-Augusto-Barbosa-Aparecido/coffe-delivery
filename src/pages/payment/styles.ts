import styled, { css } from "styled-components";
import { ButtonQuantity, Price } from "../home/components/Card/styles";

import * as Radio from "@radix-ui/react-radio-group";

export const FormContainer = styled.form`
  padding: 2.5rem 10rem 15rem;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  gap: 2rem;
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: flex-start;

  gap: 1rem;

  & > span {
    font-family: "Baloo 2", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;

    color: ${(props) => props.theme["gray-800"]};
  }
`;

export const PaymentWayContainer = styled.div`
  padding: 2.5rem;

  border: 0;
  border-radius: 6px;

  height: fit-content;
  width: 40rem;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;

  gap: 2rem;

  background-color: ${(props) => props.theme["gray-100"]};
`;

export const PaymentWayTitle = styled.div`
  display: flex;

  align-items: flex-start;
  justify-content: flex-start;

  gap: 0.5rem;

  & > div {
    span {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;

      color: ${(props) => props.theme["gray-800"]};
    }

    p {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;

      color: ${(props) => props.theme["gray-700"]};
    }
  }
`;

interface PaymentWayBodyProps {
  orientation: "column" | "row";
}

export const PaymentWayBody = styled.div<PaymentWayBodyProps>`
  width: 100%;
  height: fit-content;

  display: flex;
  ${(props) => {
    if (props.orientation === "column")
      return css`
        flex-direction: column;
      `;
    return css`
      flex-direction: row;
    `;
  }}

  justify-content: flex-start;
  align-items: flex-start;

  gap: 1rem;
`;

export const PaymentWayBodyGroup = styled(Radio.Root)`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: row;

  justify-content: flex-start;
  align-items: flex-start;

  gap: 1rem;
`;

interface PaymentWayInputContainerProps {
  size: "full" | "medium" | "small" | "max";
}

export const PaymentWayInputContainer = styled.div<PaymentWayInputContainerProps>`
  width: ${(props) => {
    switch (props.size) {
      case "max":
        return "max-content";
      case "full":
        return "100%";
      case "medium":
        return "45%";
      case "small":
        return "10%";
      default:
        return "80%";
    }
  }};

  height: 42px;

  gap: 0.25rem;

  border: 1px solid ${(props) => props.theme["gray-300"]};
  border-radius: 4px;

  background-color: ${(props) => props.theme["gray-200"]};

  display: flex;

  justify-content: flex-start;
  align-items: center;

  input {
    width: 100%;
    height: 100%;

    padding: 0.75rem;

    border: 2px solid transparent;
    border-radius: 4px;

    background-color: transparent;
    color: ${(props) => props.theme["gray-700"]};
  }

  input::placeholder {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;

    text-transform: capitalize;

    color: ${(props) => props.theme["gray-600"]};
  }

  input:focus {
    border-color: ${(props) => props.theme["yellow-700"]};
  }

  span {
    font-family: "Roboto", sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 130%;

    color: ${(props) => props.theme["gray-600"]};

    padding: 0.75rem 0.75rem 0.75rem 0.5rem;
  }
`;

export const PaymentWayInputContainerGroup = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 0.75rem;
`;

export const PaymentWayOption = styled(Radio.Item)`
  width: fit-content;
  min-width: 11.25rem;

  border: 2px solid transparent;
  border-radius: 6px;

  padding: 1rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 0.5rem;

  background-color: ${(props) => props.theme["gray-300"]};

  span {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 160%;

    padding: 0;
    margin: 0;

    text-transform: uppercase;

    color: ${(props) => props.theme["gray-700"]};

    width: fit-content;
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme["gray-400"]};
    color: ${(props) => props.theme["gray-800"]};
  }

  &[data-state="checked"] {
    background-color: ${(props) => props.theme["purple-200"]};
    border: 2px solid ${(props) => props.theme["purple-800"]};
  }
`;

export const CoffeeSelectedContainer = styled.div`
  border: 0;
  border-radius: 6px 36px;

  background-color: ${(props) => props.theme["gray-100"]};

  max-width: fit-content;
  min-height: fit-content;

  padding: 2.5rem;
`;

export const CoffeeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 0.5rem 0.25rem;
  gap: 3.75rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  & > div {
    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: flex-start;

    gap: 0.5rem;

    span {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
    }

    & > div {
      display: flex;

      align-items: flex-start;
      justify-content: flex-start;

      gap: 0.5rem;
    }
  }
`;

export const ButtonRemove = styled.button`
  display: flex;

  align-items: center;
  justify-content: flex-start;

  gap: 0.25rem;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;

  text-transform: uppercase;

  border: 0;
  border-radius: 6px;

  padding: 0.5rem;

  height: 2rem;

  background-color: ${(props) => props.theme["gray-300"]};
  color: ${(props) => props.theme["gray-700"]};

  &:hover {
    cursor: pointer;

    background-color: ${(props) => props.theme["gray-400"]};
    color: ${(props) => props.theme["gray-800"]};
  }
`;

export const Quantity = styled(ButtonQuantity)`
  height: 2rem;
`;

export const CoffeePrice = styled(Price)`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1rem;
`;

export const Separator = styled.div`
  width: 100%;
  height: 0;

  border: 1px solid ${(props) => props.theme["gray-300"]};

  margin: 1.5rem 0;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const PurchaseInformationContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;

  gap: 0.75rem;

  width: 100%;

  margin-bottom: 1.5rem;

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    span {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;

      color: ${(props) => props.theme["gray-700"]};
    }
  }

  & div:last-child {
    span {
      font-weight: 700;
      font-size: 1.25rem;

      color: ${(props) => props.theme["gray-800"]};
    }
  }
`;

export const SubmitButton = styled.button`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;

  color: ${(props) => props.theme["white-100"]};

  text-transform: uppercase;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 6px;

  width: 100%;
  padding: 0.75rem 0.5rem;

  background-color: ${(props) => props.theme["yellow-500"]};

  gap: 0.25rem;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme["yellow-700"]};
  }
`;
