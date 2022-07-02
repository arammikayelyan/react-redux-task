import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  loading: false,
  error: false,
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategories: state => {
      state.loading = true
    },
    getCategoriesSuccess: (state, action) => {
      state.categories = action.payload
      state.loading = false
      state.error = false
    },
    getCategoriesFailure: state => {
      state.loading = false
      state.error = true
    }
  }
})

export function fetchCategories() {
  return async dispatch => {
    dispatch(getCategories())

    try {
      const res = await fetch('https://api.thecatapi.com/v1/categories')
      const data = await res.json()
      console.log(data)

      dispatch(getCategoriesSuccess(data))
    } catch (error) {
      dispatch(getCategoriesFailure())
    }
  }
}

export const selectCategories = state => state.categories

export const { getCategories, getCategoriesSuccess, getCategoriesFailure } = categoriesSlice.actions
export default categoriesSlice.reducer
