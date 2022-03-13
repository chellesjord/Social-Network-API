const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    createUser
} = require('../../controllers/user-controller');

// /api/user
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// /api/user/:userid
router
    .route('/:userid')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

    module.exports = router;