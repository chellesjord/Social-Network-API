const router = require('express').Router();
//TODO: change/crete friend controllers
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    createUser
} = require('../../controllers/user-controller');

//TODO: double check this
// /api/user/:userid/friends/:friendId
router 
    .route('/:userId/friends/:friendId')
    .get(getFriendbyId)
    .post()

    module.exports = friendControlller;