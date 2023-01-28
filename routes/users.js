const router = require('express').Router();
const auth = require('../middlewares/auth');

const {
  getUsers,
  getUsersById,
  updateProfile,
  updateAvatar,
  getCurrentUser,
} = require('../contollers/users');

const { validateUpdateAvatar, validateUpdateProfile, validateGetUsersById } = require('../middlewares/validator');

router.get('/me', getCurrentUser);

router.get('/', auth, getUsers);

router.get('/:userId', auth, validateGetUsersById, getUsersById);

router.patch('/me', auth, validateUpdateProfile, updateProfile);

router.patch('/me/avatar', auth, validateUpdateAvatar, updateAvatar);

module.exports = router;
