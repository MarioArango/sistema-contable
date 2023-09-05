import { applyMiddleware, compose, legacy_createStore as createStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from "../reducers"

const composedEnhancers = compose(applyMiddleware(thunk))

export const store = createStore(rootReducer, composedEnhancers)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch