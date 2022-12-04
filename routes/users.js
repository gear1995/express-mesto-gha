const router = require("express").Router();

const {
  getUsers,
  createUser,
  getUsersById,
  updateProfile,
  updateAvatar,
} = require("../contollers/users");

router.post("/", createUser);

router.get("/:userId", getUsersById);

router.get("/", getUsers);

router.patch("/me", updateProfile);

router.patch("/me/avatar ", updateAvatar);

module.exports = router;
