import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ProductPage = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://v2.api.noroff.dev/online-shop/${productId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setProduct(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (loading) return <p>Loading product details ...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image.url} alt={product.image.alt} />
      <p>{product.description}</p>
      <p>Price: ${product.discountedPrice}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <h2>Reviews</h2>
      {product.reviews && product.reviews.length > 0 ? (
        <ul>
          {product.reviews.map((review, index) => (
            <li key={index}>
              <strong>{review.username}:</strong> {review.description} (⭐{" "}
              {review.rating})
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default ProductPage;
