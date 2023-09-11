// src/components/AppBarComponent.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function AppBarComponent({ isAdmin }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <ShoppingCartIcon />
        </IconButton>
        <Typography variant="h6" style={{ flex: 1 }}>
          upGrad Eshop
        </Typography>
        {isAdmin ? (
          <>
            <Link to="/add-product">Add Product</Link>
          </>
        ) : (
          <></>
        )}
        {/* Rest of the navigation items */}
      </Toolbar>
    </AppBar>
  );
}

export default AppBarComponent;
