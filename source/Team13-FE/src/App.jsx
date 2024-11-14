

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { PublicRoutes } from "../src/components/Routes/index";
import LayoutHomepage from './components/Layout/LayoutHomepage/LayoutHomepage';

import LayoutAdmin from './components/Layout/LayoutAdmin/LayoutAdmin';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';
import { Fragment } from 'react';
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>

        {
          PublicRoutes.map((route, index) => {
            // console.log("route",route.path)
            const Page = route.component
            let Layout = LayoutHomepage
            if (route.layout != null) {
              Layout = LayoutAdmin
            }
            // console.log("something",route.path)
            return (<Route key={index} path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            } />)
          })
        }
        <Route exact path='*' element={<PageNotFound />} />
      </Routes>
    </>

  )
}

export default App