import React from 'react';
import reactDom from 'react-dom';
import TestComponent from './components/TestComponent';

// reactDom.render(<TestComponent />, document.getElementById('root'));

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<TestComponent />);
