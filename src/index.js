import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import { 
  CartProvider, 
  FilterProvider, 
  WishlistProvider, 
  CategoryProvider, 
  AuthProvider, 
  ModalProvider, 
  AddressProvider} from "./Context"
import { makeServer } from "./server"
import reportWebVitals from './reportWebVitals';

makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AddressProvider>
          <ModalProvider>
            <CategoryProvider>
              <FilterProvider>
                <CartProvider>
                  <WishlistProvider>
                    <App />
                  </WishlistProvider>
                </CartProvider>
              </FilterProvider>
            </CategoryProvider>
          </ModalProvider>
        </AddressProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
