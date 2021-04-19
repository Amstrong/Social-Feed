import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './views/Home/home';
import Configuration from './views/Configuration/configuration';
import GlobalStyles from './globalStyles';
import NotFound from './components/NotFound/NotFound'
const history = createBrowserHistory();
function App() {
   return (
      <>
         <GlobalStyles />
         <BrowserRouter history={history}>
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/configuration" component={Configuration} />
               <Route component={NotFound} />
            </Switch>
         </BrowserRouter>
      </>
   );
}

export default App;
