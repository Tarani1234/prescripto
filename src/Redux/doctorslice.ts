import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { doctors } from '../assets/assets/assets_frontend/assets';

// Define the state type
interface DoctorType {
  doctors: typeof doctors;
  currency: string; // fixed typo
}

// Initial state with type
const initialState: DoctorType = {
  doctors: doctors,
  currency: '₹',
};

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
    setDoctors: (state, action: PayloadAction<typeof doctors>) => {
      state.doctors = action.payload;
    },
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload; // assign to currency
    },
  },
});

export const { setDoctors, setCurrency } = doctorsSlice.actions;
export default doctorsSlice.reducer;
