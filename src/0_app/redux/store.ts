import layoutSlice from './layout/layoutSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    layoutSlice,
  },
  //JSON 직렬화 되지 않아서 middleware에서 직렬화 끄기

  middleware: (getDefaultMiddleware) => {
    const result = getDefaultMiddleware({
      serializableCheck: false,
    });

    return result;
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
