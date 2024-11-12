import { ProductDTO } from "../DTOs/product.dto";

export default class ProductFilter {
  private listProducts: ProductDTO[];

  constructor(listProducts: ProductDTO[]) {
    this.listProducts = listProducts;
  }

  addFilterProducts(rating: number) {
    if (rating) {
      const listProductsFiltered = this.listProducts?.filter(
        (product) => product.rating >= rating
      );
      this.listProducts = listProductsFiltered;
    }
    return this.listProducts;
  }
}
