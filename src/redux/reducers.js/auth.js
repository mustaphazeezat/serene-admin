import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  navToggle: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userDetails: (state, userDetails) => {
        state.user={...state.user , id: userDetails.payload}
    },
    navToggler: (state) => {
      state.navToggle = !state.navToggle
  }
  },
})

// Action creators are generated for each case reducer function
export const { userDetails, navToggler } = userSlice.actions

export default userSlice.reducer