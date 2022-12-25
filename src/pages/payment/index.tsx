import {
  ButtonRemove,
  CoffeeContainer,
  CoffeePrice,
  CoffeeSelectedContainer,
  Container,
  PaymentContainer,
  PaymentWayBody,
  PaymentWayContainer,
  PaymentWayInputContainer,
  PaymentWayInputContainerGroup,
  PaymentWayOption,
  PaymentWayTitle,
  PurchaseInformationContainer,
  Quantity,
  Separator,
  SubmitButton,
} from "./styles";

import {
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Plus,
  Trash,
} from "phosphor-react";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { PurchasesContext } from "../../context/PurchasesContext";

import { formatCurrencyToBRL } from "../../utils/format/currency";

export function Payment() {
  const { productsOnCart, changeQuantityOfProduct, removeProduct } =
    useContext(PurchasesContext);
  const handleIncreaseQuantity = (productId: string) =>
    changeQuantityOfProduct({ productId, quantity: 1 });
  const handleDecreaseQuantity = (productId: string) =>
    changeQuantityOfProduct({ productId, quantity: -1 });

  const colors = useTheme();

  const totalOfCost = productsOnCart.reduce(
    (acc, coffee) => (acc += coffee.price * coffee.quantity),
    0
  );

  return (
    <Container>
      <PaymentContainer>
        <span>Complete seu pedido</span>
        <PaymentWayContainer>
          <PaymentWayTitle>
            <MapPinLine
              weight={"regular"}
              color={colors["yellow-500"]}
              size={24}
            />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </PaymentWayTitle>
          <PaymentWayBody orientation={"column"}>
            <PaymentWayInputContainer size={"medium"}>
              <input type="text" name="cep" id="cep" placeholder="CEP" />
            </PaymentWayInputContainer>
            <PaymentWayInputContainer size={"full"}>
              <input type="text" name="street" id="street" placeholder="rua" />
            </PaymentWayInputContainer>
            <PaymentWayInputContainerGroup>
              <PaymentWayInputContainer style={{ flex: 1 }} size={"medium"}>
                <input
                  type="text"
                  name="number"
                  id="number"
                  placeholder="número"
                />
              </PaymentWayInputContainer>
              <PaymentWayInputContainer style={{ flex: 2 }} size={"full"}>
                <input
                  type="text"
                  name="complement"
                  id="complement"
                  placeholder="complemento"
                />
                <span>Opcional</span>
              </PaymentWayInputContainer>
            </PaymentWayInputContainerGroup>
            <PaymentWayInputContainerGroup>
              <PaymentWayInputContainer style={{ flex: 2 }} size={"medium"}>
                <input
                  type="text"
                  name="district"
                  id="district"
                  placeholder="bairro"
                />
              </PaymentWayInputContainer>
              <PaymentWayInputContainer style={{ flex: 3 }} size={"full"}>
                <input type="text" name="city" id="city" placeholder="cidade" />
              </PaymentWayInputContainer>
              <PaymentWayInputContainer style={{ flex: 1 }} size={"small"}>
                <input type="text" name="uf" id="uf" placeholder="UF" />
              </PaymentWayInputContainer>
            </PaymentWayInputContainerGroup>
          </PaymentWayBody>
        </PaymentWayContainer>
        <PaymentWayContainer>
          <PaymentWayTitle>
            <CurrencyDollar
              weight={"regular"}
              color={colors["purple-500"]}
              size={24}
            />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentWayTitle>
          <PaymentWayBody orientation={"row"}>
            <PaymentWayOption>
              <CreditCard
                weight={"regular"}
                size={20}
                color={colors["purple-500"]}
              />
              <span>cartão de crédito</span>
            </PaymentWayOption>
            <PaymentWayOption>
              <CreditCard
                weight={"regular"}
                size={20}
                color={colors["purple-500"]}
              />
              <span>cartão de débito</span>
            </PaymentWayOption>
            <PaymentWayOption>
              <CreditCard
                weight={"regular"}
                size={20}
                color={colors["purple-500"]}
              />
              <span>dinheiro</span>
            </PaymentWayOption>
          </PaymentWayBody>
        </PaymentWayContainer>
      </PaymentContainer>
      <PaymentContainer>
        <span>Cafés selecionados</span>
        <CoffeeSelectedContainer>
          {productsOnCart.map((coffee, index) => {
            return (
              <div key={coffee.id}>
                <CoffeeContainer>
                  <img src={coffee.image} alt={coffee.title} />
                  <div>
                    <span>{coffee.title}</span>
                    <div>
                      <Quantity>
                        <Minus
                          onClick={() => handleDecreaseQuantity(coffee.id)}
                          weight={"bold"}
                          color={colors["purple-500"]}
                          size={16}
                        />
                        <span>{coffee.quantity}</span>
                        <Plus
                          onClick={() => handleIncreaseQuantity(coffee.id)}
                          weight={"bold"}
                          color={colors["purple-500"]}
                          size={16}
                        />
                      </Quantity>
                      <ButtonRemove onClick={() => removeProduct(coffee.id)}>
                        <Trash
                          size={16}
                          weight={"regular"}
                          color={colors["purple-500"]}
                        />
                        remover
                      </ButtonRemove>
                    </div>
                  </div>
                  <CoffeePrice>
                    {Intl.NumberFormat("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                      minimumFractionDigits: 2,
                    }).format(coffee.price)}
                  </CoffeePrice>
                </CoffeeContainer>
                <Separator />
              </div>
            );
          })}
          <PurchaseInformationContainer>
            <div>
              <span>Total de itens</span>
              <span>{formatCurrencyToBRL(totalOfCost)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>{formatCurrencyToBRL(3.8)}</span>
            </div>
            <div>
              <span>Total</span>
              <span>{formatCurrencyToBRL(totalOfCost + 3.8)}</span>
            </div>
          </PurchaseInformationContainer>
          <SubmitButton>Confirmar pedido</SubmitButton>
        </CoffeeSelectedContainer>
      </PaymentContainer>
    </Container>
  );
}
