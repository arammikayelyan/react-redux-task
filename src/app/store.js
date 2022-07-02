import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../features/categories/categoriesSlice';
import catsReducer from '../features/cats/catsSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    cats: catsReducer,
  },
});
