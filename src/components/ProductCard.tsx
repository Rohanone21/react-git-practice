import { Product } from "../types/product.types";

interface ProductCardProps {
  product: Product;
  onView: (id: number) => void;
}

const ProductCard = ({
  product,
  onView,
}: ProductCardProps) => {
  return (
    <div>
      <img
        src={product.image}
        alt={product.title}
        width="150"
      />

      <h3>{product.title}</h3>

      <p>₹{product.price}</p>

      <p>{product.category}</p>

      <button onClick={() => onView(product.id)}>
        View Details
      </button>
    </div>
  );
};

export default ProductCard;