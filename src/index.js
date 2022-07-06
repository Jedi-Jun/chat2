import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';

/* const rootNode = document.getElementById('root');
ReactDOM.createRoot(rootNode).render(<App />); */

// ReactDOM.render(<App />, document.getElementById('root'));

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    {/* {localStorage.setItem('chakra-ui-color-mode', 'dark')} */}
    {/* {!localStorage.getItem('chakra-ui-color-mode') &&
      localStorage.setItem('chakra-ui-color-mode', 'dark')} */}
    <ChakraProvider theme={theme}>
      {/* <ColorModeScript initialColorMode={'dark'} /> */}
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
