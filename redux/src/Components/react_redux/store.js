import { createStore } from "redux";
import rootReducer from "./rootreducers";

const store = createStore(rootReducer)

export default store;