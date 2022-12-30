import {
  Container,
  IconContainer,
  InformationContainer,
  Order,
  OrderInformation,
} from "./styles";

import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import deliveryImage from "../../assets/delivery-image.svg";
import { useTheme } from "styled-components";

export function SuccessPurchase() {
  const colors = useTheme();

  return (
    <Container>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <h4>Agora é só aguardar que logo o café chegará até você</h4>
      </div>

      <InformationContainer>
        <Order>
          <div>
            <OrderInformation>
              <IconContainer bgColor={colors["purple-500"]}>
                <MapPin size={24} weight={"fill"} color={colors["white-100"]} />
              </IconContainer>
              <div>
                <span>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </OrderInformation>
            <OrderInformation>
              <IconContainer bgColor={colors["yellow-500"]}>
                <Timer size={24} weight={"fill"} color={colors["white-100"]} />
              </IconContainer>
              <div>
                <span>Previsão de entrega</span>
                <span>
                  <strong>20 min - 30 min </strong>
                </span>
              </div>
            </OrderInformation>
            <OrderInformation>
              <IconContainer bgColor={colors["yellow-700"]}>
                <CurrencyDollar
                  size={24}
                  weight={"fill"}
                  color={colors["white-100"]}
                />
              </IconContainer>
              <div>
                <span>Pagamento na entrega</span>
                <span>
                  <strong>Cartão de Crédito</strong>
                </span>
              </div>
            </OrderInformation>
          </div>
        </Order>
        <img src={deliveryImage} alt={"delivery image"} />
      </InformationContainer>
    </Container>
  );
}
