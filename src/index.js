// src/index.js
import { createRoot } from 'react-dom/client';
import clerkConfig from './clerkConfig';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(clerkConfig);
