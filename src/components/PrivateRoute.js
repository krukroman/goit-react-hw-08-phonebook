import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const PrivatRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getLoginStatus);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivatRoute;

PrivatRoute.propTypes = {
  children: PropTypes.shape({}).isRequired,
  redirectTo: PropTypes.string,
};
