
import {configureStore} from '@reduxjs/toolkit'
import clientReducer from './slices/clientSlice'
import plansReducer from './slices/plansSlice'


export const store = configureStore({
  reducer: {
    client: clientReducer,
    plans: plansReducer
  }
})




