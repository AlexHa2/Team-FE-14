import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import UserContext from "../src/Context/UserContext.jsx"
import { Provider } from 'react-redux';
import store from '../src/components/redux/Store.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <UserContext>
          <App />
        </UserContext>
      </Provider>,
    </BrowserRouter>
  </StrictMode>,
)