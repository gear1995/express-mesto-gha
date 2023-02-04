const jwt = require('jsonwebtoken');
const UnautorizedError = require('../errors/unauthorized-error');

module.exports = (req, res, next) => {
  const { auth } = req.cookies;

  if (!auth) {
    throw new UnautorizedError('Необходимо зарегистрироваться');
  }

  let payload;
  try {
    payload = jwt.verify(auth, 'some-secret-key');
  } catch (err) {
    // отправим ошибку, если не получилось
    throw new UnautorizedError('Необходима авторизация, истекший токен');
  }

  req.user = payload;
  next();
};
