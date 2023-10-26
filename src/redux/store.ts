
import {configureStore} from '@reduxjs/toolkit'
import clientReducer from './slices/clientSlice'
//import plansReducer from './slices/plansSlice'
//import infoReducer from './slices/infoSlice'

export const store = configureStore({
  reducer: {
    client: clientReducer,
/*     info:infoReducer,
    plans: plansReducer, */
  }
})




