const jwt = require('jsonwebtoken');
const UnautorizedError = require('../errors/unauthorized-error');

module.exports = (req, res, next) => {
  /* const { autorization } = req.headers; */
  const { autorization } = req.cookies;
  if (!autorization || !autorization.startsWith('Bearer ')) {
    throw new UnautorizedError('Необходимо зарегистрироваться');
  }

  //const token = autorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    // отправим ошибку, если не получилось
    next(new UnautorizedError('Необходима авторизация, истекший токен'));
  }

  req.user = payload;
  next();
};
