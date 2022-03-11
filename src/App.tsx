// Import React
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import Components
import PrivateRoute from './components/private-route/PrivateRoute';

// Import Routes
import { routes } from './common/routes/routes';

// Import Style
import 'normalize.css';
import './assets/css/app.css';
// import Home from './pages/home/Home';

function App() {
  return (
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
  );
}

export default App;
