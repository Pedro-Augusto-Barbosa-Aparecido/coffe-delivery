import { CoffeeList, Container, Intro, Title } from "./styles";
import * as Items from "./components/Items";

import image from "../../assets/image.svg";
import { useTheme } from "styled-components";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { Card } from "./components/Card";
import { useContext } from "react";
import { PurchasesContext } from "../../context/PurchasesContext";

export function Home() {
  const { products: coffeeList } = useContext(PurchasesContext);

  const colors = useTheme();

  return (
    <Container>
      <Intro>
        <div>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </Title>
          <Items.Root>
            <div>
              <Items.Icon backgroundColor={colors["yellow-700"]}>
                <ShoppingCart
                  size={20}
                  weight={"fill"}
                  color={colors["white-100"]}
                />
              </Items.Icon>
              <Items.Text text={"Compra simples e segura"} />
            </div>
            <div>
              <Items.Icon backgroundColor={colors["yellow-500"]}>
                <Timer size={20} weight={"fill"} color={colors["white-100"]} />
              </Items.Icon>
              <Items.Text text={"Entrega rápida e rastreada"} />
            </div>
            <div>
              <Items.Icon backgroundColor={colors["gray-700"]}>
                <Package
                  size={20}
                  weight={"fill"}
                  color={colors["white-100"]}
                />
              </Items.Icon>
              <Items.Text text={"Embalagem mantém o café intacto"} />
            </div>
            <div>
              <Items.Icon backgroundColor={colors["purple-500"]}>
                <Coffee size={20} weight={"fill"} color={colors["white-100"]} />
              </Items.Icon>
              <Items.Text text={"O café chega fresquinho até você"} />
            </div>
          </Items.Root>
        </div>
        <img src={image} alt="" />
      </Intro>
      <CoffeeList>
        <span>Nossos Cafés</span>
        <div>
          {coffeeList.map((coffee) => {
            return (
              <Card
                key={coffee.id}
                id={coffee.id}
                image={coffee.image}
                description={coffee.description}
                title={coffee.title}
                price={parseFloat(coffee.price)}
                coffeeTypes={coffee.coffeeTypes}
              />
            );
          })}
        </div>
      </CoffeeList>
    </Container>
  );
}
