
import { Route, Router, Switch } from "react-router";
import SiderBar from "./components/SiderBar/Siderbar";
import { createBrowserHistory } from 'history';
import LoginTemplate from "./template/LoginTemplate/LoginTemplate";
import UserLogin from "./pages/UserLogin/UserLogin";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Loading from "./components/Loading/Loading";
import { ClientRoutes } from "./routes";

export const history = createBrowserHistory()

function App() {


  const renderRouter = (routes, Layout) => {
    return routes.map((item, index) => {
      return <Layout
        key={index}
        exact={item.exact}
        path={item.path}
        Component={item.Component}
        isPrivate={item.isPrivate}
      />
    })
  }
  return (
    <Router history={history}>
      <Loading/>
      <Switch>
        {renderRouter(ClientRoutes, LoginTemplate)}
        <Route exact path="/home" component={SiderBar}/>
        <Route path="*" component={PageNotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
