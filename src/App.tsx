// Import React
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// Import Components
import PrivateRoute from './components/private-route/PrivateRoute';

// Import Store
import store from './store/store';

// Import Routes
import { routes } from './common/routes/routes';

// Import Style
import 'normalize.css';
import './assets/css/app.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {routes?.map((route) => (
            <PrivateRoute key={route?.title} exact path={route?.path} component={route?.component} />
          ))}

          <Route path="*">
            <div>Sayfa Bulunamadı</div>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
