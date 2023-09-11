// src/components/ManageProducts.js
import React, { useState, useEffect } from 'react';
import { Card, CardContent, IconButton, Dialog, DialogActions, DialogContent, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Fetch all products using the /products endpoint
    // Set the fetched products in the state (setProducts)
  }, []);

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    // Make an API call to delete the selected product using the /products/{id} endpoint
    // Display a success message upon successful deletion
    setIsDeleteDialogOpen(false);
  };

  const handleEditClick = (product) => {
    // Redirect to the product editing page (implement this page separately)
  };

  return (
    <div>
      <Typography variant="h4">Manage Products</Typography>
      {products.map((product) => (
        <Card key={product.id}>
          <CardContent>
            <Typography variant="h6">{product.name}</Typography>
            <Typography variant="body2">{product.description}</Typography>
            <Typography variant="body2">${product.price}</Typography>
            <IconButton onClick={() => handleDeleteClick(product)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => handleEditClick(product)}>
              <EditIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
      {/* Delete confirmation dialog */}
      <Dialog open={isDeleteDialogOpen} onClose={() => setIsDeleteDialogOpen(false)}>
        <DialogContent>
          <Typography>Are you sure you want to delete {selectedProduct?.name}?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDeleteConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ManageProducts;
