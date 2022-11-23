const router = require("express").Router();

const {
  getUsers,
  createUser,
  getUsersById,
  updateProfile,
  updateAvatar,
} = require("../contollers/users");

module.exports = router;

router.post("/users", createUser);

router.get("/users/:id", getUsersById);

router.get("/users", getUsers);

router.patch("/users/me", updateProfile);

router.patch("/users/me/avatar ", updateAvatar);
