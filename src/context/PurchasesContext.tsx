import React, { createContext, useState } from "react";
import { purchaseSchemaType } from "../pages/payment";
import { v4 as uuid } from "uuid";

export type PurchaseInformation = purchaseSchemaType & {
  totalOfCost: number;
  shipping: number;
  total: number;
};

export interface Coffee {
  image: string;
  title: string;
  price: number;
  quantity: number;
  id: string;
}

interface ChangeQuantityParams {
  productId: string;
  quantity: number;
}

interface PurchasesContextType {
  quantityProducts: number;
  productsOnCart: Coffee[];
  purchaseId: string | null;
  products: any[];
  addProductOnCart: (product: Coffee) => void;
  changeQuantityOfProduct: (data: ChangeQuantityParams) => void;
  removeProduct: (productId: string) => void;
  makePurchase: (info: PurchaseInformation) => string;
}

export const PurchasesContext = createContext({} as PurchasesContextType);

interface PurchasesContextProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

export function PurchasesContextProvider({
  children,
}: PurchasesContextProviderProps) {
  const [quantityProducts, setQuantityProducts] = useState<number>(0);
  const [purchaseId, setPurchaseId] = useState<string | null>(null);
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  const [products] = useState([
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

  function addProductOnCart(product: Coffee) {
    if (coffees.some((coffee) => coffee.id === product.id)) return;
    setCoffees((state) => {
      const temp = [...state, product];
      setQuantityProducts(temp.length);

      return temp;
    });
  }

  function changeQuantityProduct({
    productId,
    quantity,
  }: ChangeQuantityParams) {
    const coffeeChanged = coffees.map((coffee) => {
      if (productId === coffee.id) coffee.quantity += quantity;

      return coffee;
    });

    setCoffees(() => {
      const coffeeQuantityGreaterThanOne = coffeeChanged.filter(
        (coffee) => !(coffee.quantity < 1)
      );
      setQuantityProducts(coffeeQuantityGreaterThanOne.length);
      return coffeeQuantityGreaterThanOne;
    });
  }

  function removeProduct(productId: string) {
    const productFiltered = coffees.filter((coffee) => coffee.id !== productId);
    setCoffees(productFiltered);
    setQuantityProducts(productFiltered.length);
  }

  function makePurchase(purchaseInformation: PurchaseInformation) {
    const purchase = uuid();

    localStorage.setItem(
      `@coffee-delivery-product-${purchase}`,
      JSON.stringify({
        ...purchaseInformation,
        purchase,
        coffees,
      })
    );

    setPurchaseId(purchase);
    setQuantityProducts(0);
    setCoffees([]);

    return purchase;
  }

  return (
    <PurchasesContext.Provider
      value={{
        products,
        purchaseId,
        quantityProducts,
        productsOnCart: coffees,
        addProductOnCart,
        changeQuantityOfProduct: changeQuantityProduct,
        removeProduct,
        makePurchase,
      }}
    >
      {children}
    </PurchasesContext.Provider>
  );
}
