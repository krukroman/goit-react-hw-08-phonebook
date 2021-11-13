const getUserName = state => state.user.name;

const getUserEmail = state => state.user.email;

const getToken = state => state.user.token;

const getLoginStatus = state => state.user.isLoggedIn;

const getFetchingCurrentStatus = state => state.user.isFetchingCurrentUser;

const authSelectors = {
  getUserName,
  getUserEmail,
  getToken,
  getLoginStatus,
  getFetchingCurrentStatus,
};

export default authSelectors;
