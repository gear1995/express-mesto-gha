const router = require("express").Router();

const {
  getUsers,
  createUser,
  getUsersById,
  updateProfile,
  updateAvatar,
} = require("../contollers/users");

router.post("/users", createUser);

router.get("/users/:userId", getUsersById);

router.get("/users", getUsers);

router.patch("/users/me", updateProfile);

router.patch("/users/me/avatar", updateAvatar);

module.exports = router;
