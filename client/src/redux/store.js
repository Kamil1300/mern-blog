import { configureStore, combineReducers } from '@reduxjs/toolkit'
import useReducer from './users/userSlice'
import themeReducer from './theme/themeSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { getDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'  

const rootReducer = combineReducers({
  user: useReducer,
  theme: themeReducer
})

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false})
})

export const persistor = persistStore(store)