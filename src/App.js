import { Route, Switch, BrowserRouter } from "react-router-dom";
import { history } from "./Routes/history";
import Home from "./views/Home/home";
import Configuration from "./views/Configuration/configuration"
import GlobalStyles from "./globalStyles";
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
