const router = require("express").Router();

const {
  getCards,
  postCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require("../contollers/users");

router.get("/cards", getCards);

router.post("/cards", postCard);

router.delete("/cards/:cardId", deleteCard);

router.put("/cards/:cardId/likes", likeCard);

router.delete("/cards/:cardId/likes", dislikeCard);
module.exports = router;
