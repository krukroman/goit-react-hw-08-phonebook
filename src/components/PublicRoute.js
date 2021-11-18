import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

const PublicRoute = ({ children, restricted = false, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getLoginStatus);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

export default PublicRoute;

PublicRoute.propTypes = {
  children: PropTypes.shape({}).isRequired,
  restricted: PropTypes.bool,
  redirectTo: PropTypes.string,
};
