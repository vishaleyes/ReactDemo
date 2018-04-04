import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware,compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import reducer from './reducers'
import App from './containers/App/App'
import registerServiceWorker from './registerServiceWorker'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
        reducer, 
composeEnhancers(
    applyMiddleware(...middleware),
)
)

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('app')
);
registerServiceWorker();
