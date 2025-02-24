import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface activeCategory {
  category: string
}

const initialState: activeCategory = {
  category: '',
}

export const activeCategorySlice = createSlice({
  name: 'activeCategory',
  initialState,
  reducers: {
    changeActiveCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeActiveCategory } = activeCategorySlice.actions

export default activeCategorySlice.reducer