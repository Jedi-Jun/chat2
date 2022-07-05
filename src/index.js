import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

/* const rootNode = document.getElementById('root');
ReactDOM.createRoot(rootNode).render(<App />); */

// ReactDOM.render(<App />, document.getElementById('root'));

const root = createRoot(document.getElementById('root'));

root.render(<App />);
