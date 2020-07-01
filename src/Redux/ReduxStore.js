import { createStore, combineReducers } from 'redux';
import MainPageReducer from './MainPageReducer';



let reducers = combineReducers({
    MainPage: MainPageReducer
})

let store = createStore(reducers);

export default store;
