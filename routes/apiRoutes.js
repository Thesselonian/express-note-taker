const router = require('express').Router();
const { deleteFromMemory } = require('../lib/notes');
const notes = require('../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.delete('/notes/:id', (req, res) => {
    var newNotesArray = deleteFromMemory(req.params.id, notes)
    notes = newNotesArray
    res.send('deleting notes')
//delete out of the notes object
//delete out of the db.json
});

router.post('/notes', (req, res) => {
    res.send('posting notes')
  // set id based on what the next index of the array will be
//   req.body.id = animals.length.toString();

//   if (!validateAnimal(req.body)) {
//     res.status(400).send('The animal is not properly formatted.');
//   } else {
//     const animal = createNewAnimal(req.body, animals);
//     res.json(animal);
//   }
});

module.exports = router;