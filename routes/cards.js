const router = require('express').Router();
const auth = require('../middlewares/auth');

const {
  getCards,
  postCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../contollers/cards');

const { validatePostCard, validateCardId } = require('../middlewares/validator');

router.get('/', getCards);

router.post('/', auth, validatePostCard, postCard);

router.delete('/:cardId', auth, validateCardId, deleteCard);

router.put('/:cardId/likes', auth, validateCardId, likeCard);

router.delete('/:cardId/likes', auth, validateCardId, dislikeCard);

module.exports = router;
