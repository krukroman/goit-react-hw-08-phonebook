import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

const PrivatRoute = ({ children, redirectTo, ...routeProps }) => {
  const isLogin = useSelector(authSelectors.getLoginStatus);
  return (
    <Route {...routeProps}>
      {isLogin ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivatRoute;
