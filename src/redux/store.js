import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers.js/auth'

export const store = configureStore({
  reducer: {
      user: authReducer
  },
})