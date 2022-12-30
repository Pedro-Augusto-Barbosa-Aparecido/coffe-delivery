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
import { useNavigate, useParams } from "react-router-dom";
import { Coffee, PurchaseInformation } from "../../context/PurchasesContext";
import { useEffect, useState } from "react";

type PurchaseOnLocalStorage = PurchaseInformation & {
  coffees: Coffee[];
  purchase: string;
};

export function SuccessPurchase() {
  const [purchaseInformation, setPurchaseInformation] =
    useState<PurchaseOnLocalStorage | null>(null);
  const { purchase_id: purchaseID } = useParams();
  const navigate = useNavigate();
  const colors = useTheme();

  useEffect(() => {
    if (purchaseID) {
      const purchase = localStorage.getItem(
        `@coffee-delivery-product-${purchaseID}`
      );

      if (!purchase) navigate("/");

      const purchaseObject: PurchaseOnLocalStorage = JSON.parse(purchase!);

      if (purchaseID !== purchaseObject.purchase) navigate("/");
      setPurchaseInformation(purchaseObject);
    } else navigate("/");
  }, [navigate, purchaseID]);

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
                  Entrega em{" "}
                  <strong>
                    {purchaseInformation?.street}, {purchaseInformation?.number}
                  </strong>
                </span>
                <span>
                  {purchaseInformation?.district} - {purchaseInformation?.city},{" "}
                  {purchaseInformation?.uf}
                </span>
              </div>
            </OrderInformation>
            <OrderInformation>
              <IconContainer bgColor={colors["yellow-500"]}>
                <Timer size={24} weight={"fill"} color={colors["white-100"]} />
              </IconContainer>
              <div>
                <span>Previsão de entrega</span>
                <span>
                  <strong>20 min - 30 min</strong>
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
                  <strong>{purchaseInformation?.paymentWay}</strong>
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
