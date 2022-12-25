import {
  HeaderContainer,
  Location,
  PurchasesContainer,
  QuantityOnCart,
} from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";

import logo from "../../assets/logo.svg";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { PurchasesContext } from "../../context/PurchasesContext";

export function Header() {
  const { quantityProducts } = useContext(PurchasesContext);
  const colors = useTheme();

  return (
    <HeaderContainer>
      <img src={logo} alt={""} />
      <div>
        <Location>
          <MapPin weight={"fill"} size={20} />
          <span>Pouso Alegre, MG</span>
        </Location>
        <PurchasesContainer>
          <ShoppingCart
            weight={"fill"}
            size={20}
            color={colors["yellow-700"]}
          />
          {quantityProducts > 0 && (
            <QuantityOnCart>{quantityProducts}</QuantityOnCart>
          )}
        </PurchasesContainer>
      </div>
    </HeaderContainer>
  );
}
