const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

notesDB = {
    deleteFromMemory: function(noteId) {
        const notesArray = this.getNotes()
        const deletedNotes = notesArray.filter(note => note.id != noteId)
        fs.writeFileSync('./db/db.json', JSON.stringify(deletedNotes))
    },

    getNotes: function() {
        let results = fs.readFileSync('./db/db.json')
        results = JSON.parse(results);
        return results
    },
    writeNewTask: function(note) {
        const tempObject = {
            id: uuidv4(),
            title: note.title,
            text: note.text
        }
        const notesArray = this.getNotes()
        notesArray.push(tempObject)
        fs.writeFileSync('./db/db.json', JSON.stringify(notesArray))
    }
};

module.exports = notesDB