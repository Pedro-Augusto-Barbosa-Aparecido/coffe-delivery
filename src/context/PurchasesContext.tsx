import React, { createContext } from "react";

interface PurchasesContextProps {}

export const PurchasesContext = createContext({} as PurchasesContextProps);

interface PurchasesContextProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

export function PurchasesContextProvider({
  children,
}: PurchasesContextProviderProps) {
  return (
    <PurchasesContext.Provider value={{}}>{children}</PurchasesContext.Provider>
  );
}
