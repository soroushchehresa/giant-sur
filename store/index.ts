import { useMemo } from 'react'
import { createStore, action, persist } from 'easy-peasy'

let store: any;

const initialState: any = {
  menuBar: {
    isMenuOpen: false,
  },
}

const menuBarModel = {
  ...initialState.menuBar,
  closeMenu: action((state: any) => {
    if (state.isMenuOpen) {
      state.isMenuOpen = false
    }
  }),
  openMenu: action((state: any) => {
    if (!state.isMenuOpen) {
      state.isMenuOpen = true
    }
  }),
}

const storeModel = {
  menuBar: menuBarModel,
}

function initStore(preloadedState = initialState) {
  return createStore(persist(storeModel, { allow: [] }), {
    initialState: preloadedState,
  })
}

export const initializeStore = (preloadedState: any) => {
  let _store = store ?? initStore(preloadedState)

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    store = undefined
  }

  if (typeof window === 'undefined') return _store
  if (!store) store = _store

  return _store
}

export function useStore(initialState: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
