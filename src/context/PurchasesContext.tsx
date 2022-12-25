import React, { createContext, useState } from "react";

interface Coffee {
  image: string;
  title: string;
  price: number;
  quantity: number;
  id: string;
}

interface PurchasesContextType {
  quantityProducts: number;
  productsOnCart: Coffee[];
  addProductOnCart: (product: Coffee) => void;
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

  return (
    <PurchasesContext.Provider
      value={{
        quantityProducts,
        productsOnCart: coffees,
        addProductOnCart,
      }}
    >
      {children}
    </PurchasesContext.Provider>
  );
}
