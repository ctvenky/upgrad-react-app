// src/components/ProductsPage.js
import React, { useState, useEffect } from 'react';
import { Card, ToggleButton, ToggleButtonGroup } from '@material-ui/core';

function ProductsPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('default');

  // Fetch categories and products on component mount
  useEffect(() => {
    // Fetch categories using the /products/categories endpoint
    // Set the fetched categories in the state (setCategories)

    // Fetch products using the /products endpoint
    // Set the fetched products in the state (setProducts)
  }, []);

  // Handle category selection
  const handleCategoryChange = (event, newCategory) => {
    setSelectedCategory(newCategory);
  };

  // Handle sorting option change
  const handleSortChange = (event, newSortBy) => {
    setSortBy(newSortBy);
  };

  return (
    <div>
      <ToggleButtonGroup value={selectedCategory} exclusive onChange={handleCategoryChange}>
        {categories.map((category) => (
          <ToggleButton key={category.id} value={category.id}>
            {category.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <ToggleButtonGroup value={sortBy} exclusive onChange={handleSortChange}>
        <ToggleButton value="default">Default</ToggleButton>
        <ToggleButton value="priceHighToLow">Price High to Low</ToggleButton>
        <ToggleButton value="priceLowToHigh">Price Low to High</ToggleButton>
        <ToggleButton value="newest">Newest</ToggleButton>
      </ToggleButtonGroup>
      <div>
        {products.map((product) => (
          <Card key={product.id}>
            {/* Display product information */}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
