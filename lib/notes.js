const deleteFromMemory = (noteId, notesArray) => {
    return notesArray.filter(note => note.id != noteId )
}

//save file