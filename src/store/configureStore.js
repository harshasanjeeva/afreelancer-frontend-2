import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk';
import {persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
//import {asyncSessionStorage} from 'redux-persist/storages';

const persistConfig = {
    key: 'root',
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore (initialState){
    let store = createStore(
        rootReducer,
        initialState,
         compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    return store;
}


// export default function configureStore (initialState){
//     let store = createStore(
//         rootReducer,
//         initialState,
//          compose(
//             applyMiddleware(thunk),
//             window.devToolsExtension ? window.devToolsExtension() : f => f
//         )
//     );
//     return store;
// }