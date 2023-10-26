import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { fetchPlans } from '../../api/apiPlans.js'

export const fetchDataPlans = createAsyncThunk('dataPlans', async () => {
  const dataPlans = await fetchPlans()
  return dataPlans
})

const plansSlice = createSlice({
  name: 'rimacPlans',
  initialState: {
    status: 'loading',
    list:[]
  },
  reducers: {
    setPlans: (state, action) => {
      state.list = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataPlans.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchDataPlans.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.list = action.payload
      })
  }
})

export const { setPlans } = plansSlice.actions
export default plansSlice.reducer
