import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface LayoutType {
  isShowLeft: boolean;
  isShowRight: boolean;
}

const initialState: LayoutType = {
  isShowLeft: false,
  isShowRight: false,
};

export const layoutSlice = createSlice({
  name: 'layoutSlice',
  initialState: initialState,
  reducers: {
    setIsShowLeft: (state, action: PayloadAction<boolean>) => {
      state.isShowLeft = action.payload;
    },
    setIsShowRight: (state, action: PayloadAction<boolean>) => {
      state.isShowRight = action.payload;
    },
  },
});

export const { setIsShowLeft, setIsShowRight } = layoutSlice.actions;
export const layoutSelect = (state: RootState) => state.layoutSlice;
export default layoutSlice.reducer;
