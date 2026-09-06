import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ProductCard from "../../components/ProductCard";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchProducts } from "../../store/slices/productSlice";

const ProductListPage = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const {
    products,
    loading,
    error,
  } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleViewProduct = (id: number) => {
    navigate(`/products/${id}`);
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onView={handleViewProduct}
        />
      ))}
    </div>
  );
};

export default ProductListPage;