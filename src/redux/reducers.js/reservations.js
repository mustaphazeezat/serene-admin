import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from '../../firebase';

const initialState = {
    reservation: [],
    loading: false,
    error: ''
}

export const getReservations = createAsyncThunk(
    "reservations/getAll",
    async ()=>{
        const postsRef = collection(db, 'reservations')
        const q = query(postsRef, orderBy("createdAt", "desc"));
        const data = await getDocs(q)
        return data.docs.map((doc) => ({...doc.data(), id: doc.id}))
      
    }
)

export const reservationSlice = createSlice({
    name: 'reservations',
    initialState,
    extraReducers: {
        [getReservations.pending]: (state) => {
            state.loading = true
          },
        [getReservations.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.reservation = payload
        },
        [getReservations.rejected]: (state, {payload}) => {
            state.loading = false 
            state.error = payload
        }
    },

})

export default reservationSlice.reducer



