

import { Route, Routes } from 'react-router-dom'
import { PublicRoutes } from "../src/components/Routes/index"
import LayoutHomepage from './components/Layout/LayoutHomepage/LayoutHomepage'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>

        {
          PublicRoutes.map((route, index) => {
            // console.log("route",route.path)
            const Page = route.component
            const Layout = LayoutHomepage
            if (route.layout != null) {
              return frameElement
            }
            return <Route key={index} path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            } />
          })
        }
      </Routes>
    </>

  )
}

export default App