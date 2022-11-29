const Card = require("../models/card");

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(next);
};

module.exports.postCard = (req, res, next) => {
  const { name, link } = req.body;

  Card.create({ name, link })
    .then((data) => res.status(201).send(data))
    .catch((err) => {
      res.status(400).send({ message: "Некорректные данные" });
      return;
    });
  next(err);
};

module.exports.deleteCard = (req, res, next) => {
  const { cardId } = req.params;
  Card.findById(cardId)
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: "Нет карточки с таким id" });
      }
      return Card.remove(card);
    })
    .then(() => res.status(200).send({ message: "Карточка удалена" }))
    .catch((err) => {
      res.status(400).send({ message: "Некорректный id" });
      return;
    });
  next(err);
};

module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true }
  )
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: "Некорректный id карточки" });
      }
      res.status(400).send(card);
    })
    .catch((err) => {
      res.status(400).send({ message: "Переданы некорректные данные" });
      return;
    });
  next(err);
};

module.exports.dislikeCard = (req, res, next) => {
  const { cardId } = req.params;
  Card.findByIdAndUpdate(
    cardId,
    { $pull: { likes: req.user._id } }, // убрать _id из массива
    { new: true }
  )
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: "Некорректный id карточки" });
      }
      res.status(200).send(card);
    })
    .catch((err) => {
      res.status(400).send({ message: "Переданы некорректные данные" });
      return;
    });
  next(err);
};
