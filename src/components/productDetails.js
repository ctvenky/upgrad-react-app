// src/components/ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, TextField } from '@material-ui/core';

function ProductDetails() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Fetch product details using the /products/{id} endpoint
  useEffect(() => {
    // Fetch product details based on the 'id' parameter
    // Set the fetched product in the state (setProduct)
  }, [id]);

  const handleQuantityChange = (event) => {
    // Update the quantity in the state
    setQuantity(event.target.value);
  };

  return (
    <div>
      {product ? (
        <Card>
          <CardMedia
            component="img"
            alt={product.name}
            height="200"
            image={product.imageUrl || 'alternate-image-url'} // Provide a fallback image URL
            title={product.name}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Price: ${product.price}
            </Typography>
            <TextField
              type="number"
              label="Quantity"
              variant="outlined"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button>Buy Now</button> {/* Implement buy functionality */}
          </CardContent>
        </Card>
      ) : (
        <Typography variant="body2">Loading...</Typography>
      )}
    </div>
  );
}

export default ProductDetails;
