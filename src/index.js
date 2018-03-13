import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react'
//import persistor from './store/configureStore'
import  store  from './store/configureStore'


//const store = configureStore();
//persistStore(store);
ReactDOM.render(
    <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
<App />
</PersistGate>
 </Provider>, document.getElementById('root'));
registerServiceWorker();
