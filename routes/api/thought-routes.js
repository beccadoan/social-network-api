const router = require('express').Router();
const {
    addThought,
    removeThought,
    addReaction,
    removeReaction,
    getAllThoughts,
    getThoughtById
} = require('../../controllers/thought-controllers')

router
    .route('/')
    .get(getAllThoughts)

router.route('/:thoughtId').get(getThoughtById)

router
    .route('/:userId')
    .post(addThought)

router
    .route('/:userId/:thoughtId')
    .delete(removeThought)
    .put(addReaction)

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);



module.exports = router;