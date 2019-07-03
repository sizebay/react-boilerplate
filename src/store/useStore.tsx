import React, { createContext, useReducer, useContext } from 'react'
import { fooInitialState } from './states.initial'

const initialState: any = {
  ...fooInitialState,
}

const StoreContext = createContext(initialState)

const reducer = (state: any, action: any) => {
  const { type, payload } = action

  switch (type) {
    case 'GET_FOO':
      return {
        ...state,
        gotFoo: !payload,
      }
    default:
      throw new Error('Should have a case. Please open an issue.')
  }
}

export function StoreProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  const { state, dispatch }: any = useContext(StoreContext)
  return { state, dispatch }
}
