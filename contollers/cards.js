const Card = require("../models/card");

module.exports.getCards = (req, res) => {
  Card.find({}).then((cards) => res.send({ data: cards }));
};

module.exports.postCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link })
    .then((data) => res.status(201).send(data))
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports.deleteCard = (req, res) => {
  const { cardId } = req.params;
  Card.findById(cardId)
    .then((card) => {
      return Card.remove(card);
    })
    .then(() => res.status(200).send("Карточка удалена"))
    .catch(err);
};

module.exports.likeCard = (req, res) =>
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true }
  );

module.exports.dislikeCard = (req, res) =>
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // убрать _id из массива
    { new: true }
  );
