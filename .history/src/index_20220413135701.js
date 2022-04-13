import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { Provider } from '@reduxjs/toolkit';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider><App /></Provider>);
