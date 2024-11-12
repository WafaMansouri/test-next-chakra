"use client";

import { createContext, useContext } from "react";

export const ProductsContext = createContext<any | undefined>(null);

export const productsContext = (): any => {
  const context = useContext(ProductsContext);

  return context;
};
