import React from 'react';
import {createStore , combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import DeliveryReducer from '../Reducers/Delivery';
import thunk from 'redux-thunk';

let rootReducer = combineReducers({
    Delivery: DeliveryReducer
})
let store = createStore(rootReducer,applyMiddleware(thunk));

const  App = (props) => {
    return(
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

export default App;