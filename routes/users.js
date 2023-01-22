const router = require('express').Router();

const {
  getUsers,
  getUsersById,
  updateProfile,
  updateAvatar,
} = require('../contollers/users');

const { validateUpdateAvatar, validateUpdateProfile, validateGetUsersById } = require('../middlewares/validator');

router.get('/:userId', validateGetUsersById, getUsersById);

router.get('/', getUsers);

router.patch('/me', validateUpdateProfile, updateProfile);

router.patch('/me/avatar', validateUpdateAvatar, updateAvatar);

router.get('/me', getUsersById);

module.exports = router;
