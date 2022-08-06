import { configureStore } from '@reduxjs/toolkit'
import StoreMenu from './MenuManagerStore'

export default configureStore({
  reducer: {
    menuManager:StoreMenu,
  },
})