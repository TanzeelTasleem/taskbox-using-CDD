import {configureStore} from '@reduxjs/toolkit'
import task from '../features/taskSlice'

export const store = configureStore({
   reducer : task
})