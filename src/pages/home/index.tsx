import { v4 as uuid } from "uuid";

import { CoffeeList, Container, Intro, Title } from "./styles";
import * as Items from "./components/Items";

import image from "../../assets/image.svg";
import { useTheme } from "styled-components";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { Card } from "./components/Card";
import { useState } from "react";

export function Home() {
  const [coofeeList] = useState([
    {
      image: "/src/assets/coffees/expresso-tradicional.svg",
      title: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: "9.90",
      coffeeTypes: [{ typeText: "Tradicional", id: uuid() }],
      id: uuid(),
    },
    {
      image: "/src/assets/coffees/expresso-amaericano.svg",
      title: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: "9.90",
      coffeeTypes: [{ typeText: "Tradicional", id: uuid() }],
      id: uuid(),
    },
    {
      image: "/src/assets/coffees/expresso-cremoso.svg",
      title: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: "9.90",
      coffeeTypes: [{ typeText: "Tradicional", id: uuid() }],
      id: uuid(),
    },
    {
      image: "/src/assets/coffees/expresso-gelado.svg",
      title: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: "9.90",
      coffeeTypes: [{ typeText: "Tradicional", id: uuid() }],
      id: uuid(),
    },
    {
      image: "/src/assets/coffees/cafe-com-leite.svg",
      title: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: "9.90",
      coffeeTypes: [
        { typeText: "Tradicional", id: uuid() },
        { typeText: "com leite", id: uuid() },
      ],
      id: uuid(),
    },
    {
      image: "/src/assets/coffees/latte.svg",
      title: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: "9.90",
      coffeeTypes: [
        { typeText: "Tradicional", id: uuid() },
        { typeText: "com leite", id: uuid() },
      ],
      id: uuid(),
    },
    {
      image: "/src/assets/coffees/capuccino.svg",
      title: "Capuccino",
      description:
        "OBebida com canela feita de doses iguais de café, leite e espuma",
      price: "9.90",
      coffeeTypes: [
        { typeText: "Tradicional", id: uuid() },
        { typeText: "com leite", id: uuid() },
      ],
      id: uuid(),
    },
    {
      image: "/src/assets/coffees/macchiato.svg",
      title: "Macchiato",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      price: "9.90",
      coffeeTypes: [
        { typeText: "Tradicional", id: uuid() },
        { typeText: "com leite", id: uuid() },
      ],
      id: uuid(),
    },
    {
      image: "/src/assets/coffees/mocaccino.svg",
      title: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: "9.90",
      coffeeTypes: [
        { typeText: "Tradicional", id: uuid() },
        { typeText: "com leite", id: uuid() },
      ],
      id: uuid(),
    },
    {
      image: "/src/assets/coffees/chocalate-quente.svg",
      title: "Chocolate Quente",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      price: "9.90",
      coffeeTypes: [
        { typeText: "Especial", id: uuid() },
        { typeText: "com leite", id: uuid() },
      ],
      id: uuid(),
    },
    {
      image: "/src/assets/coffees/cubano.svg",
      title: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: "9.90",
      coffeeTypes: [
        { typeText: "especial", id: uuid() },
        { typeText: "alcoólico", id: uuid() },
        { typeText: "gelado", id: uuid() },
      ],
      id: uuid(),
    },
    {
      image: "/src/assets/coffees/havaiano.svg",
      title: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: "9.90",
      coffeeTypes: [{ typeText: "especial", id: uuid() }],
      id: uuid(),
    },
    {
      image: "/src/assets/coffees/arabe.svg",
      title: "Árabe",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: "9.90",
      coffeeTypes: [{ typeText: "especial", id: uuid() }],
      id: uuid(),
    },
    {
      image: "/src/assets/coffees/inlandes.svg",
      title: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: "9.90",
      coffeeTypes: [
        { typeText: "especial", id: uuid() },
        { typeText: "alcoólico", id: uuid() },
      ],
      id: uuid(),
    },
  ]);

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
          {coofeeList.map((coffee) => {
            return (
              <Card
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
