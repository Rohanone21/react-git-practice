import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductById } from "../../api/productApi";
import { Product } from "../../types/product.types";

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] =
    useState<Product | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        if (!id) {
          throw new Error("Product ID is missing");
        }

        const data = await getProductById(Number(id));

        setProduct(data);
      } catch (err) {
        setError("Unable to load product");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Product not found first merge conflict </p>;
  }

  return (
    <div>
      <h1>{product.title}</h1>

      <img
        src={product.image}
        alt={product.title}
        width="200"
      />

      <p>{product.description}</p>

      <h2>₹{product.price}</h2>

      <p>{product.category}</p>
    </div>
  );
};

export default ProductDetailsPage;