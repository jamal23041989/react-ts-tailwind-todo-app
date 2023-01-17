import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook } from 'react-redux'
import todoReducer from './todoSlice'

const store = configureStore({ reducer: { todo: todoReducer } })

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => RootDispatch = useDispatch

export default store
