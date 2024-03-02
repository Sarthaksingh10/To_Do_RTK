//Creating a store  for the rtkb

import {configureStore} from '@reduxjs/toolkit';
import todoSlice from '../Features/Todo/todoslice';
export const store=configureStore({
    reducer:todoSlice
})