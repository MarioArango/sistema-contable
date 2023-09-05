'use client'
import { Provider } from 'react-redux'
import { store } from './store'

interface IPropsProviderStore {
  children: React.ReactNode
}

export default function ProviderStore ({ children } : IPropsProviderStore) {
  return (
    <Provider store={store}>
      { children }
    </Provider>
  )
}