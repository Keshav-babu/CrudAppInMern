import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider,extendTheme } from '@chakra-ui/react';
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })


ReactDOM.render(
  
    <ChakraProvider theme={theme}>
      <React.StrictMode>
      <App />
      </React.StrictMode>
    </ChakraProvider>,
  document.getElementById('root')
);


