import { HeaderContainer, Location, PurchasesContainer } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";

import logo from "../../assets/logo.svg";
import { useTheme } from "styled-components";

export function Header() {
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
        </PurchasesContainer>
      </div>
    </HeaderContainer>
  );
}
