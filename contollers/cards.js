const Card = require("../models/card");

module.exports.getCards = (req, res) => {
  Card.find({}).then((cards) => res.send({ data: cards }));
};

module.exports.postCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link })
    .then((data) => res.status(201).send(data))
    .catch((err) => {
      res.status(400).send({ message: "Некорректные данные" });
    });
};

module.exports.deleteCard = (req, res) => {
  const { cardId } = req.params;
  Card.findById(cardId)
    .then((card) => {
      if (!card) {
        res.status(400).send({ message: "Нет карточки с таким id" });
      }
      return Card.remove(card);
    })
    .then(() => res.status(200).send({ message: "Карточка удалена" }))
    .catch((err) => {
      res.status(400).send({ message: "Некорректный id" });
      return;
    });
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true }
      .then((card) => {
        if (!card) {
          res.status(400).send({ message: "Некорректный id карточки" });
        }
        res.status(400).send(card);
      })
      .catch((err) => {
        res.status(400).send({ message: "Переданы некорректные данные" });
        return;
      })
  );
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // убрать _id из массива
    { new: true }
  )
    .then((card) => {
      if (!card) {
        res.status(400).send({ message: "Некорректный id карточки" });
      }
      res.status(400).send(card);
    })
    .catch((err) => {
      res.status(400).send({ message: "Переданы некорректные данные" });
      return;
    });
};