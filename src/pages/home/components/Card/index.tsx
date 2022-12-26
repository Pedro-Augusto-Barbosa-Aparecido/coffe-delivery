import {
  ButtonQuantity,
  CardActionContainer,
  CardContainer,
  Price,
  Purchase,
  ShoppingCardButton,
  Type,
  TypeContainer,
} from "./styles";

import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { useContext, useState } from "react";
import { PurchasesContext } from "../../../../context/PurchasesContext";

import { formatCurrencyToBRL } from "../../../../utils/format/currency";

interface CoffeeType {
  typeText: string;
  id: string;
}

interface CardProps {
  image: any;
  title: string;
  description: string;
  price: number;
  coffeeTypes?: CoffeeType[];
  id: string;
}

export function Card({
  coffeeTypes,
  description,
  title,
  price,
  image,
  id,
}: CardProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState<number>(1);

  const { addProductOnCart } = useContext(PurchasesContext);
  const colors = useTheme();

  const handleIncreaseQuantity = () => setCoffeeQuantity((state) => state + 1);
  const handleDecreaseQuantity = () =>
    setCoffeeQuantity((state) => (state > 1 ? state - 1 : state));

  return (
    <CardContainer>
      <img src={image} alt={title} />
      <TypeContainer>
        {coffeeTypes?.map((type) => {
          return <Type key={type.id}>{type.typeText}</Type>;
        })}
      </TypeContainer>
      <span>{title}</span>
      <p>{description}</p>
      <Purchase>
        <Price>{formatCurrencyToBRL(price)}</Price>
        <CardActionContainer>
          <ButtonQuantity>
            <Minus
              onClick={handleDecreaseQuantity}
              weight={"bold"}
              color={colors["purple-500"]}
              size={16}
            />
            <span>{coffeeQuantity}</span>
            <Plus
              onClick={handleIncreaseQuantity}
              weight={"bold"}
              color={colors["purple-500"]}
              size={16}
            />
          </ButtonQuantity>
          <ShoppingCardButton
            onClick={() => {
              addProductOnCart({
                quantity: coffeeQuantity,
                image,
                id,
                price,
                title,
              });
            }}
          >
            <ShoppingCart
              weight={"fill"}
              color={colors["white-100"]}
              size={24}
            />
          </ShoppingCardButton>
        </CardActionContainer>
      </Purchase>
    </CardContainer>
  );
}
