import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'
import configureStore from './config/store'
import App from './App'
import reportWebVitals from './reportWebVitals'
import * as serviceWorker from './serviceWorker'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import './config/localization/i18n'

export const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <App />
      <ToastContainer />
    </PersistGate>
  </Provider>,
)
reportWebVitals()
serviceWorker.unregister()
