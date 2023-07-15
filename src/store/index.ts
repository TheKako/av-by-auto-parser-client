import { configureStore } from '@reduxjs/toolkit'

import reducers from './reducers';
import { vehiclesSoldApi } from '../pages/VehiclesSold/store/vehiclesSoldApi';
import { vehicleApi } from '../pages/Vehicle/store/vehicleApi';

export const store = configureStore({
  reducer: reducers,
  middleware: (gDM) => gDM()
    .concat(vehiclesSoldApi.middleware)
    .concat(vehicleApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch