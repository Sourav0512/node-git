console.log('Starting notes.js');

const fs = require('fs');


var FetchNotes = () =>
{
  try {
    return JSON.parse(fs.readFileSync('notes-data.json'));
  } catch (e) {
    console.log(e);
  }ya
  return [];
};

var SaveNote = (notes) => fs.writeFileSync('notes-data.json', JSON.stringify(notes));

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title:title,
    body:body
  };
  notes = FetchNotes();

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    console.log(`Adding ${title} with ${body} to notes.`);
    SaveNote(notes);
  }
  else {
    console.log(`${title} is already present in notes.`);
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => (FetchNotes().filter(note => note.title===title))[0];

var removeNote = (title) => {
  console.log(`Removing ${title} from notes.`);
  var notes = FetchNotes();
  var modNotes = notes.filter((note) => !(note.title===title));
  SaveNote(modNotes);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
