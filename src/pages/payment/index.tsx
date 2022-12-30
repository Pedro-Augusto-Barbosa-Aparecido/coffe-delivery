import {
  ButtonRemove,
  CoffeeContainer,
  CoffeePrice,
  CoffeeSelectedContainer,
  FormContainer,
  PaymentContainer,
  PaymentWayBody,
  PaymentWayBodyGroup,
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
import { useContext, useEffect } from "react";
import { useTheme } from "styled-components";
import { PurchasesContext } from "../../context/PurchasesContext";

import { formatCurrencyToBRL } from "../../utils/format/currency";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { useNavigate } from "react-router-dom";

const purchaseSchema = z.object({
  cep: z.string().min(1, "Digite seu CEP"),
  street: z.string().min(1, "Digite o nome da sua rua"),
  number: z.string().min(1, "Digite o número da sua casa"),
  complement: z.string().optional(),
  district: z.string().min(1, "Digite o nome do seu bairro"),
  city: z.string().min(1, "Digite o nome da sua cidade"),
  uf: z.string().min(1, "Digite a sigla do seu estado"),
  paymentWay: z.enum(["credit", "debit", "money"]),
});

type purchaseSchemaType = z.infer<typeof purchaseSchema>;

export function Payment() {
  const navigate = useNavigate();
  const { productsOnCart, changeQuantityOfProduct, removeProduct } =
    useContext(PurchasesContext);
  const handleIncreaseQuantity = (productId: string) =>
    changeQuantityOfProduct({ productId, quantity: 1 });
  const handleDecreaseQuantity = (productId: string) =>
    changeQuantityOfProduct({ productId, quantity: -1 });

  const colors = useTheme();
  const { register, handleSubmit, control, watch } =
    useForm<purchaseSchemaType>({
      resolver: zodResolver(purchaseSchema),
    });

  const totalOfCost = productsOnCart.reduce(
    (acc, coffee) => (acc += coffee.price * coffee.quantity),
    0
  );

  const shipping = 3.8;
  const total = shipping + totalOfCost;

  const cepContent = watch("cep") ?? "";
  const cepValue = cepContent
    ?.replace(/\D/g, "")
    ?.replace(/(\d{5})(\d)/, "$1-$2")
    ?.replace(/(-\d{3})\d+?$/, "$1");

  function handleConfirmPurchases(purchaseInformation: purchaseSchemaType) {
    console.log({ ...purchaseInformation, totalOfCost, shipping, total });
  }

  useEffect(() => {
    if (productsOnCart.length === 0) navigate("/");
  }, [productsOnCart, navigate]);

  return (
    <FormContainer onSubmit={handleSubmit(handleConfirmPurchases)}>
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
              <input
                type="text"
                id="cep"
                placeholder="CEP"
                value={cepValue}
                {...register("cep")}
              />
            </PaymentWayInputContainer>
            <PaymentWayInputContainer size={"full"}>
              <input
                type="text"
                id="street"
                placeholder="rua"
                {...register("street")}
              />
            </PaymentWayInputContainer>
            <PaymentWayInputContainerGroup>
              <PaymentWayInputContainer style={{ flex: 1 }} size={"medium"}>
                <input
                  type="text"
                  id="number"
                  placeholder="número"
                  {...register("number")}
                />
              </PaymentWayInputContainer>
              <PaymentWayInputContainer style={{ flex: 2 }} size={"full"}>
                <input
                  type="text"
                  id="complement"
                  placeholder="complemento"
                  {...register("complement")}
                />
                <span>Opcional</span>
              </PaymentWayInputContainer>
            </PaymentWayInputContainerGroup>
            <PaymentWayInputContainerGroup>
              <PaymentWayInputContainer style={{ flex: 2 }} size={"medium"}>
                <input
                  type="text"
                  id="district"
                  placeholder="bairro"
                  {...register("district")}
                />
              </PaymentWayInputContainer>
              <PaymentWayInputContainer style={{ flex: 3 }} size={"full"}>
                <input
                  type="text"
                  id="city"
                  placeholder="cidade"
                  {...register("city")}
                />
              </PaymentWayInputContainer>
              <PaymentWayInputContainer style={{ flex: 1 }} size={"small"}>
                <input
                  type="text"
                  id="uf"
                  placeholder="UF"
                  {...register("uf")}
                />
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
          <Controller
            control={control}
            name="paymentWay"
            render={({ field }) => {
              return (
                <PaymentWayBodyGroup
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <PaymentWayOption value="credit">
                    <CreditCard
                      weight={"regular"}
                      size={20}
                      color={colors["purple-500"]}
                    />
                    <span>cartão de crédito</span>
                  </PaymentWayOption>
                  <PaymentWayOption value="debit">
                    <CreditCard
                      weight={"regular"}
                      size={20}
                      color={colors["purple-500"]}
                    />
                    <span>cartão de débito</span>
                  </PaymentWayOption>
                  <PaymentWayOption value="money">
                    <CreditCard
                      weight={"regular"}
                      size={20}
                      color={colors["purple-500"]}
                    />
                    <span>dinheiro</span>
                  </PaymentWayOption>
                </PaymentWayBodyGroup>
              );
            }}
          />
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
              <span>{formatCurrencyToBRL(shipping)}</span>
            </div>
            <div>
              <span>Total</span>
              <span>{formatCurrencyToBRL(total)}</span>
            </div>
          </PurchaseInformationContainer>
          <SubmitButton>Confirmar pedido</SubmitButton>
        </CoffeeSelectedContainer>
      </PaymentContainer>
    </FormContainer>
  );
}
