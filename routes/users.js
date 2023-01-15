const router = require('express').Router();

const {
  getUsers,
  getUsersById,
  updateProfile,
  updateAvatar,
} = require('../contollers/users');

router.get('/:userId', getUsersById);

router.get('/', getUsers);

router.patch('/me', updateProfile);

router.patch('/me/avatar', updateAvatar);

module.exports = router;
