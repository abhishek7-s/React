import {configureStore} from '@reduxjs/toolkit';
import todoReducers from '../features/Todo/todoSlice'

export const store = configureStore({
    reducer: todoReducers
})