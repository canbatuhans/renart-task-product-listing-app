import React from "react";
import useProducts from "../../hooks/useProducts/useProducts";
import Carousel from "../Carousel/Carousel";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList() {
  const { products, loading, error } = useProducts();

  if (loading)
    return (
      <div style={{ textAlign: "center", marginTop: 40 }}>Yükleniyor...</div>
    );
  if (error)
    return (
      <div style={{ textAlign: "center", marginTop: 40 }}>
        Ürünler yüklenemedi.
      </div>
    );

  return (
    <div className="product-list-root">
      <div className="product-list-header">
        <span className="product-list-title">Product List</span>
      </div>
      <Carousel>
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </Carousel>
    </div>
  );
}

export default ProductList;
