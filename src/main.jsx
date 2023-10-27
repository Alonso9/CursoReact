import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { HooksApp } from './HooksApp';
import { CounterApp } from './01-Usestate/CounterApp';
import { CounterWithCustomHook } from './01-Usestate/CounterWithCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { MultiplecustomHooks } from './03-examples/MultiplecustomHooks';
import { FocusScreen } from './04-useRef/FocusScreen';
import { Layout } from './05-useLayoutEffect/Layout';
import { Memorize } from './06-memos/Memorize';
import { TodoApp } from './08-UseReducer/TodoApp';
import { MainApp } from './09-UseContext/MainApp';

// import './08-UseReducer/intro-reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultiplecustomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <Layout /> */}
    {/* <Memorize /> */}
    {/* <TodoApp /> */}
    <MainApp />
  </BrowserRouter>
  // </React.StrictMode>
);
