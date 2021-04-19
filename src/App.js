import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './views/Home/home';
import Configuration from './views/Configuration/configuration';
import GlobalStyles from './globalStyles';
const history = createBrowserHistory();
function App() {
   return (
      <>
         <GlobalStyles />
         <BrowserRouter history={history}>
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/configuration" component={Configuration} />
            </Switch>
         </BrowserRouter>
      </>
   );
}

export default App;
