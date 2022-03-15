// Import React
import { Route } from 'react-router-dom';

// Import Components
import DefaultLayout from '../_layout/default-layout/DefaultLayout';

function PrivateRoute(props) {
  // Desctruct Props
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      exact
      render={(props) => {
        return (
          <DefaultLayout>
            <Component {...props} />
          </DefaultLayout>
        );
      }}
    />
  );
}

export default PrivateRoute;
