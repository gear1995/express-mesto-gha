function validateUrl(url) {
  const regEx = /https?:\/\/(www)?[0-9a-z\-._~:/?#[\]@!$&'()*+,;=]+#?$/i;

  if (regEx.test(url)) {
    return url;
  }
  throw new Error('Некорректый формат ссылки');
}

module.exports = { validateUrl };
