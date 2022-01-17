import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers.js/auth'
import reservationReducer from './reducers.js/reservations'

export const store = configureStore({
  reducer: {
      user: authReducer,
      reservations: reservationReducer
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['reservations/getAll/fulfilled'],
      },
    }),
})
