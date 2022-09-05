const router = require('express').Router();
const {
    addThought,
    removeThought,
    addReaction,
    removeReaction,
    getAllThoughts,
    getThoughtById,
    updateThought
} = require('../../controllers/thought-controllers')

router
    .route('/')
    .get(getAllThoughts)
    .post(addThought)

router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)

router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought)

router
    .route('/:thoughtId/reactions').post(addReaction)

router
    .route('/:thoughtId/reactions/:reactionId').delete(removeReaction)



module.exports = router;