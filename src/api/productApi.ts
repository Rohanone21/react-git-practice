import axiosInstance from "./axiosInstance";
import { Product } from "../types/product.types";

export const getProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get<Product[]>("/products");

  return response.data;
};
const var1="first variable";
export const getProductById = async (
  id: number
): Promise<Product> => {
  const response = await axiosInstance.get<Product>(`/products/${id}`);

  return response.data;
};