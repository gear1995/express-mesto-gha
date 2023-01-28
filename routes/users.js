const router = require('express').Router();
const auth = require('../middlewares/auth');

const {
  getUsers,
  getUsersById,
  updateProfile,
  updateAvatar,
} = require('../contollers/users');

const { validateUpdateAvatar, validateUpdateProfile, validateGetUsersById } = require('../middlewares/validator');

router.get('/:userId', auth, validateGetUsersById, getUsersById);

router.get('/', auth, getUsers);

router.patch('/me', auth, validateUpdateProfile, updateProfile);

router.patch('/me/avatar', auth, validateUpdateAvatar, updateAvatar);

router.get('/me', getUsersById);

module.exports = router;
