const User = require("../models/user");

module.exports.getUsersById = (req, res) => {
  User.findById(req.user._id)
    .then((user) => {
      res.status(200).send({ data: user });
    })
    .catch(err);
};

module.exports.createUser = (req, res) => {
  User.create({ ...req.body })
    .then((data) => res.status(201).send(data))
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports.getUsers = (req, res) => {
  User.find({}).then((users) => res.send({ data: users }));
};

module.exports.updateProfile = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(req.user._id, { name, about })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(err);
};

module.exports.updateAvatar = (req, res, next) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(req.user._id, { avatar })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      return;
    });
};
