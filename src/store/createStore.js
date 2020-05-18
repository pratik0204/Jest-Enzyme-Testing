import {createStore,applyMiddleware} from 'redux'
import RootReducer from './reducers';
import ReduxThunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

export const middlewares =[ReduxThunk]

export const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(...middlewares)))