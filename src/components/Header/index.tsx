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
import { NavLink } from "react-router-dom";

export function Header() {
  const { quantityProducts } = useContext(PurchasesContext);
  const colors = useTheme();

  return (
    <HeaderContainer>
      <NavLink to={"/"}>
        <img src={logo} alt={""} />
      </NavLink>
      <div>
        <Location>
          <MapPin weight={"fill"} size={20} />
          <span>Pouso Alegre, MG</span>
        </Location>
        {quantityProducts ? (
          <NavLink to={"/payment"}>
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
          </NavLink>
        ) : (
          <PurchasesContainer style={{ cursor: "default" }}>
            <ShoppingCart
              weight={"fill"}
              size={20}
              color={colors["yellow-700"]}
            />
          </PurchasesContainer>
        )}
      </div>
    </HeaderContainer>
  );
}
