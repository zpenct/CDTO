import React, { useState, useEffect, useCallback, useMemo } from "react";
import { ProductCard } from "../components/item";

import styled from "styled-components";
import Container from "../components/layout/container";
import { Input } from "../components/ui/input";
import { fetchProducts } from "../api";
import { TProduct } from "../types";

const TotalPrice = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #2c3e50;
`;

const StorePage = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState<TProduct[]>([]);

  const getProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleAddToCart = useCallback((product: TProduct) => {
    setCart((prevCart) => [...prevCart, product]);
  }, []);

  const totalPrice = useMemo(() => {
    return cart.reduce((total, product) => total + product.price, 0);
  }, [cart]);

  return (
    <div>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <TotalPrice>Total Price: ${totalPrice.toFixed(2)}</TotalPrice>
      </div>

      <Container isLoading={isLoading} titleSection="Product">
        {filteredProducts?.map((item: TProduct) => (
          <ProductCard
            key={item.id}
            product={item}
            onAddToCart={handleAddToCart}
          />
        ))}
      </Container>
    </div>
  );
};

export default StorePage;
