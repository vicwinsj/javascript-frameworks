import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import {
  ProductContainer,
  ImageContainer,
  ProductImage,
  ContentContainer,
  ProductInfo,
  ProductReviews,
  ReviewList,
  ReviewIntro,
  Review,
} from "./ProductStyles";
import { PrimaryButton } from "../../components/Button/ButtonStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
    <ProductContainer>
      <ImageContainer>
        <ProductImage src={product.image.url} alt={product.image.alt} />
      </ImageContainer>
      <ContentContainer>
        <ProductInfo>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>
            $ <strong>{product.discountedPrice}</strong>
          </p>
          <PrimaryButton onClick={() => addToCart(product)}>
            Add to Cart
          </PrimaryButton>
        </ProductInfo>
        <ProductReviews>
          <h2>Reviews</h2>
          {product.reviews && product.reviews.length > 0 ? (
            <ReviewList>
              {product.reviews.map((review, index) => (
                <Review key={index}>
                  <ReviewIntro>
                    <strong>
                      <FontAwesomeIcon icon={faStar} /> {review.rating}
                    </strong>
                    {review.username}
                  </ReviewIntro>{" "}
                  <em>– {review.description}</em>
                </Review>
              ))}
            </ReviewList>
          ) : (
            <p>No reviews yet.</p>
          )}
        </ProductReviews>
      </ContentContainer>
    </ProductContainer>
  );
};

export default ProductPage;
