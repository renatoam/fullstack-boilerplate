import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '.'

/**
 * É melhor usar versões tipadas de useDispatch e useSelector, porque:
 * Para o useSelector: ele evita que você tenha que informar (state: RootState) em todo lugar
 * Para o useDispatch: ele evita que você tenha que importar o AppDispatch em todo lugar
 * em que for disparar thunks
 */

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
