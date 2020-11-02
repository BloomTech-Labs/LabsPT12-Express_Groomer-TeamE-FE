import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
  withRouter,
} from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import 'antd/dist/antd.less';
import { config } from './utils/oktaConfig';
import { reducer } from './state/reducers';

// Routes
import { NotFoundPage } from './components/pages/NotFound';
import { HomePage } from './components/pages/Home';
import { LoginPage } from './components/pages/Login';
import { LoadingComponent } from './components/common';
import OnBoardingContainer from './components/pages/userOnBoarding/OnBoardingContainer.js';
import ClientOnBoardingForm from './components/pages/userOnBoarding/ClientOnBoardingForm.js';
import ManagePetContainer from './components/pages/ClientDashboard/ManagePet/ManagePetContainer';
// import UpdatePetForm from './components/pages/ClientDashboard/UpdatePetForm/UpdatePetForm.js';

const AppWithRouter = withRouter(App);
const store = createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  return (
    <Security {...config} onAuthRequired={authHandler}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/implicit/callback" component={LoginCallback} />
        <Route path="404" component={NotFoundPage} />

        {/* any of the routes you need secured should be registered as SecureRoutes */}
        <SecureRoute
          path="/"
          exact
          component={() => <HomePage LoadingComponent={LoadingComponent} />}
        />
        <SecureRoute path="/onboarding" component={OnBoardingContainer} />
        <SecureRoute
          path="/onboardingClient"
          component={ClientOnBoardingForm}
        />
        <SecureRoute path="/PetPortal" component={ManagePetContainer} />
      </Switch>
    </Security>
  );
}
