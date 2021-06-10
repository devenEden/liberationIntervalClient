import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import publicRoutes from './routes/publicRoutes';
import PageNotFound from './components/common/PageNotFound';
import 'antd/dist/antd.css';
 
const App = () => {
  return (
    <div>
       <Layout>
          <Router>
            <Switch>
              {
                publicRoutes.map(route => {
                  return (
                    <Route exact key={route.key} path={route.path} component={route.component} />
                  )
                })
              }
              <Route><PageNotFound /></Route>
            </Switch>
          </Router>
       </Layout>
    </div>
  )
}

export default App
