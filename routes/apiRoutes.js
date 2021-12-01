const router = require('express').Router();
const notesDB = require('../lib/notes');

router.get('/notes', (req, res) => {
    const results = notesDB.getNotes();
    res.json(results);
});

router.delete('/notes/:id', (req, res) => {
    notesDB.deleteFromMemory(req.params.id)
    res.status(200).send('note deleted')
});

router.post('/notes', (req, res) => {
    notesDB.writeNewTask(req.body)
    res.status(200).send('posting notes')
});

module.exports = router;