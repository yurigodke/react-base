class Auth {
  checkAuth(tokenData, level = 0) {
    let isAuth = false;

    if (tokenData) {
      const levelNumber = parseInt(tokenData.level);
      isAuth = tokenData.token && levelNumber <= level;
    }

    return isAuth;
  }
}

export default new Auth();
