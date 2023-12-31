import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { persistor, store } from 'redux/store';
// import { store } from 'redux/store';
// import { Provider } from 'react-redux';
import { App } from 'App';
import { BrowserRouter } from 'react-router-dom';
 import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}> 
     <PersistGate loading={<p>loading...</p>} persistor={persistor}> 
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <App />
        </BrowserRouter>
         </PersistGate> 
       </Provider> 
      </React.StrictMode>
);
