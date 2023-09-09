import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HooksApp } from './HooksApp';
import { CounterApp } from './01-Usestate/CounterApp';
import { CounterWithCustomHook } from './01-Usestate/CounterWithCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <SimpleForm />
  // </React.StrictMode>
);
