import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `https://v2.api.noroff.dev/online-shop/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.discountedPrice}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
