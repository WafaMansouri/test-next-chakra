"use client";

import { productsContext } from "../context/ProductsContext";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import CardProduct from "../components/CardProduct";
import { FilterProduct, ProductDTO } from "../DTOs/product.dto";
import SelectList from "../components/common/SelectList";
import ProductFilter from "../utils/ProductFilter";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ListProducts() {
  const { listProducts, isLoading, isError } = productsContext();
  const [ratingMin, setRatingMin] = useState(2);

  const productFilter = new ProductFilter(listProducts);
  const filteredProducts: ProductDTO[] =
    productFilter.addFilterProducts(ratingMin);

  const filterRatingItems: FilterProduct[] = [
    { name: "Rating > 0", value: 0 },
    { name: "Rating > 1", value: 1 },
    { name: "Rating > 2", value: 2 },
    { name: "Rating > 3", value: 3 },
    { name: "Rating > 4", value: 4 },
  ];

  useEffect(() => {
    if (isError) {
      toast.error("Server Error !");
    }
  }, isError);

  return isLoading ? (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
      position={"absolute"}
      top={"30%"}
      left={"45%"}
    />
  ) : (
    <Box>
      <Flex justifyContent={"center"} marginTop={"2em"}>
        <SelectList
          listItems={filterRatingItems}
          setRatingMin={setRatingMin}
        ></SelectList>
      </Flex>
      <Flex flexDirection="row" flexWrap="wrap" justifyContent={"center"}>
        {filteredProducts?.map((product: ProductDTO, index: number) => (
          <CardProduct product={product} key={index}></CardProduct>
        ))}
      </Flex>
    </Box>
  );
}
