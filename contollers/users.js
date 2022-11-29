const User = require("../models/user");

module.exports.getUsersById = (req, res, next) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: "Нет пользователя с таким id" });
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(400).send({ message: "Несуществующий id" });
      return;
    });
  next(err);
};

module.exports.createUser = (req, res, next) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((data) =>
      res.status(201).send({
        name: data.name,
        about: data.about,
        avatar: data.avatar,
        _id: data._id,
      })
    )
    .catch((err) => {
      res.status(400).send({ message: "Некорректные данные" });
    });
  next(err);
};

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(next);
};

module.exports.updateProfile = (req, res, next) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send({ message: "Некоректные данные" });
      return;
    });
  next(err);
};

module.exports.updateAvatar = (req, res, next) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send({ message: "Некоректные данные" });
      return;
    });
  next(err);
};
