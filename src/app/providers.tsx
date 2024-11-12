import { Flex } from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";
import NavBar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { getListProducts } from "./services/products.service";
import { useQuery } from "react-query";
import { ProductsContext } from "./context/ProductsContext";
import { ProductDTO } from "./DTOs/product.dto";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  // Queries
  const { data, isError, isLoading } = useQuery("products", getListProducts);

  useEffect(() => {}, [data, isError, isLoading]);
  return (
    <ProductsContext.Provider
      value={{
        listProducts: data?.products.map((product: ProductDTO) => {
          return {
            title: product.title,
            description: product.description,
            price: product.price,
            images: product.images,
            rating: product.rating,
          };
        }),
        isError,
        isLoading,
      }}
    >
      <Flex flexDirection={"column"}>
        <NavBar></NavBar>
        <Flex minHeight={"90vh"}>{children}</Flex>
        <Footer></Footer>
      </Flex>
    </ProductsContext.Provider>
  );
}
