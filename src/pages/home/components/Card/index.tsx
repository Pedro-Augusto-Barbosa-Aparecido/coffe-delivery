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
}: CardProps) {
  const colors = useTheme();

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
        <Price>
          {Intl.NumberFormat("pt-BR", {
            currency: "BRL",
            style: "currency",
            minimumFractionDigits: 2,
          }).format(price)}
        </Price>
        <CardActionContainer>
          <ButtonQuantity>
            <Minus weight={"bold"} color={colors["purple-500"]} size={16} />
            <span>1</span>
            <Plus weight={"bold"} color={colors["purple-500"]} size={16} />
          </ButtonQuantity>
          <ShoppingCardButton>
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
