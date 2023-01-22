const router = require('express').Router();

const {
  getCards,
  postCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../contollers/cards');

const { validatePostCard } = require('../middlewares/validator');

router.get('/', getCards);

router.post('/', validatePostCard, postCard);

router.delete('/:cardId', deleteCard);

router.put('/:cardId/likes', likeCard);

router.delete('/:cardId/likes', dislikeCard);

module.exports = router;
