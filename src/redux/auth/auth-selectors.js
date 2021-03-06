const getUserName = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

const getToken = state => state.auth.token;

const getLoginStatus = state => state.auth.isLoggedIn;

const getFetchingCurrentStatus = state => state.auth.isFetchingCurrentUser;

const getServerError = state => state.auth.serverError;

const authSelectors = {
  getUserName,
  getUserEmail,
  getToken,
  getLoginStatus,
  getFetchingCurrentStatus,
  getServerError,
};

export default authSelectors;
