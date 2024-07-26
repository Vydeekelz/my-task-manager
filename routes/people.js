const express = require('express');
const router = express.Router();

const { getPeople, getPerson, searchPeople, addPerson, updatePeople, deletePerson } = require('../controllers/people');

router.route('/').get(getPeople).post(addPerson)
router.route('/:id').get(getPerson).put(updatePeople).delete(deletePerson)


router.route('/search').get(searchPeople)



module.exports = router