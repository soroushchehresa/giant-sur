import { useMemo } from 'react'
import { createStore, action, persist, Action, Store, createTypedHooks } from 'easy-peasy'

interface MenuBar {
  isMenuOpen: boolean,
  closeMenu: Action<MenuBar>,
  openMenu: Action<MenuBar>,
}

export interface StoreModel {
  menuBar: MenuBar,
}

interface InitialState {
  menuBar: {
    isMenuOpen: boolean,
  }
}

let store: Store | undefined;
const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

const initialState: InitialState = {
  menuBar: {
    isMenuOpen: false,
  },
}

const menuBarModel: MenuBar= {
  ...initialState.menuBar,
  closeMenu: action((state) => {
    if (state.isMenuOpen) {
      state.isMenuOpen = false
    }
  }),
  openMenu: action((state) => {
    if (!state.isMenuOpen) {
      state.isMenuOpen = true
    }
  }),
}

const storeModel: StoreModel = {
  menuBar: menuBarModel,
}

function initStore(preloadedState = initialState) {
  return createStore<StoreModel, InitialState>(persist(storeModel, { allow: [] }), {
    initialState: preloadedState,
  })
}

export const initializeStore = (preloadedState: InitialState) => {
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

export function useStore(initialState: InitialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
