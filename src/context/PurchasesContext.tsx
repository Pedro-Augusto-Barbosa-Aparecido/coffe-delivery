import React, { createContext, useState } from "react";

interface Coffee {
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
  addProductOnCart: (product: Coffee) => void;
  changeQuantityOfProduct: (data: ChangeQuantityParams) => void;
  removeProduct: (productId: string) => void;
}

export const PurchasesContext = createContext({} as PurchasesContextType);

interface PurchasesContextProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

export function PurchasesContextProvider({
  children,
}: PurchasesContextProviderProps) {
  const [quantityProducts, setQuantityProducts] = useState<number>(0);
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  function addProductOnCart(product: Coffee) {
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

  return (
    <PurchasesContext.Provider
      value={{
        quantityProducts,
        productsOnCart: coffees,
        addProductOnCart,
        changeQuantityOfProduct: changeQuantityProduct,
        removeProduct,
      }}
    >
      {children}
    </PurchasesContext.Provider>
  );
}
