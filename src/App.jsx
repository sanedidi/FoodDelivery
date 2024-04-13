import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import queryClient from './Services/QueryClient/index';
import Router from './Router';
import { QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <Router />
          </CartProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
