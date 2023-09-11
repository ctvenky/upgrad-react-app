// src/components/EditProduct.js
import React, { useState, useEffect } from 'react';

function EditProduct({ match }) {
  const productId = match.params.id;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    // Fetch product details using the productId from the URL
    // Set the fetched product data in the state (name, description, price)
  }, [productId]);

  const handleEditProduct = () => {
    // Implement product editing logic here (e.g., make an API call to update the product)
    // Display a success message upon successful modification
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Product Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleEditProduct}>Save Changes</button>
    </div>
  );
}

export default EditProduct;
