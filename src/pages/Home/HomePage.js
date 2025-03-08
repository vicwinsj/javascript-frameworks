import React, { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import {
  HomeContainer,
  ProductGrid,
  ProductCard,
  ProductImageContainer,
  ProductImage,
  ProductContent,
  ProductCardBottom,
} from "./HomeStyles";
import { PrimaryButton } from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  useEffect(() => {
    document.title = "Fyke | Buy all you can think of – online";
  }, []);

  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.data);
        setSearchResults(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setSearchResults(products);
      return;
    }
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <HomeContainer>
      <h1>Products for the whole household</h1>
      <Search onSearch={handleSearch} />
      {loading ? (
        <Loader count={6} />
      ) : (
        <ProductGrid>
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <ProductCard key={product.id}>
                <ProductImageContainer>
                  <ProductImage
                    src={product.image.url}
                    alt={product.image.alt}
                  />
                </ProductImageContainer>
                <ProductCardBottom>
                  <ProductContent>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>
                      $ <strong>{product.discountedPrice}</strong>
                    </p>
                  </ProductContent>
                  <PrimaryButton as="a" href={`/product/${product.id}`}>
                    View Product
                  </PrimaryButton>
                </ProductCardBottom>
              </ProductCard>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </ProductGrid>
      )}
    </HomeContainer>
  );
};

export default HomePage;
