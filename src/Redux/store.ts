import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from './doctorslice'
export const store = configureStore({
     reducer : {
          doctors : doctorsReducer,
     }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;




