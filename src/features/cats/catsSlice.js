import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cats: [],
  loading: false,
  error: false,
}

export const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    getCats: state => {
      state.loading = true
    },
    getCatsSuccess: (state, action) => {
      state.cats = action.payload
      state.loading = false
      state.error = false
    },
    getCatsFailure: state => {
      state.loading = false
      state.error = true
    },
    getCatsByAmount: (state, action) => {
      state.cats = state.cats + action.payload
    }
  }
})

export function fetchByCategoryID(categoryID, limit=10) {
  return async dispatch => {
    dispatch(getCats())

    try {
      const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_ids=${categoryID}`)
      const data = await res.json()
      console.log(data)

      dispatch(getCatsSuccess(data))
    } catch (error) {
      dispatch(getCatsFailure())
    }
  }
}

export const selectCats = state => state.cats

export const { getCats, getCatsSuccess, getCatsFailure } = catsSlice.actions
export default catsSlice.reducer
