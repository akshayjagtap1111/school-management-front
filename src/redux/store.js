import {createStore, combineReducers, compose, applyMiddleware} from "redux"

import thunk from "redux-thunk"
import { admin_reducer } from "./admin/reducer";
import { teacher_reducer } from "./teacher/reducer";


const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        
      })
    : compose;

const middleware = [thunk];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);

const rootreducer = combineReducers({
    admin:admin_reducer,
    teacher:teacher_reducer,
})

export const store = createStore(rootreducer,enhancer)
