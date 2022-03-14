const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controllers.js');

router
    .route('/')
    .get(getAllThoughts)

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

// /api/thoughts/<userId>/<thoughttId>
router
    .route('/:thoughtId/reactions')
    .post(addReaction)

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router
    .route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
