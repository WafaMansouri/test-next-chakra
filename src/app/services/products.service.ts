import axios from "axios";

export const getListProducts = async () => {
  const { data } = await axios.get("https://dummyjson.com/products/");

  return data;
};
