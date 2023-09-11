// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppBarComponent from './components/AppBarComponent';
import Home from './components/Home';
import ProductsPage from './components/ProductsPage';
import Login from './components/Login';
import Signup from './components/Signup';
import ProductDetails from './components/ProductDetails';
import CreateOrder from './components/CreateOrder';
import ManageProducts from './components/ManageProducts'; // Import the ManageProducts component
import AddProduct from './components/AddProduct'; // Import the AddProduct component
import EditProduct from './components/EditProduct'; // Import the EditProduct component

function App() {
  const isLoggedIn = true; // Replace with your authentication logic
  const isAdmin = true; // Replace with your logic to determine if the user is an admin

  return (
    <Router>
      <div className="App">
        <AppBarComponent isAdmin={isAdmin} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/products" component={ProductsPage} isLoggedIn={isLoggedIn} />
          <Route path="/product-details/:id" component={ProductDetails} />
          <PrivateRoute path="/create-order" component={CreateOrder} isLoggedIn={isLoggedIn} />
          <PrivateRoute path="/manage-products" component={ManageProducts} isAdmin={isAdmin} /> {/* Add this route */}
          <PrivateRoute path="/add-product" component={AddProduct} isAdmin={isAdmin} /> {/* Add this route */}
          <PrivateRoute path="/edit-product/:id" component={EditProduct} isAdmin={isAdmin} /> {/* Add this route */}
          {/* Add other routes as your project progresses */}
        </Switch>
      </div>
    </Router>
  );
}

// PrivateRoute component to handle authentication checks
const PrivateRoute = ({ component: Component, isLoggedIn, isAdmin, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? (
        <Component {...props} isAdmin={isAdmin} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default App;
