import { configureStore } from '@reduxjs/toolkit'
import { casesApi } from '../../shared/api/casesApi'
import activeCategory from '../sliced/activeCategorySlice'

export const store = configureStore({
  reducer: {
    activeCategory: activeCategory,
    [casesApi.reducerPath]: casesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(casesApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch