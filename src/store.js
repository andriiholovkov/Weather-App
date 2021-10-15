import { createStore, applyMiddleware } from "redux";
//import rootReducer from './rootReducer';
import weatherReducer from './components/weather/reducer';
import thunk from "redux-thunk";

const store = createStore(weatherReducer, applyMiddleware(thunk));

export default store;