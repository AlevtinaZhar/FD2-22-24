const noteInput = document.getElementById('noteInput');
const addNoteButton = document.getElementById('addNoteButton');
const noteList = document.getElementById('noteList');
const searchInput = document.getElementById('searchInput');

let notes = JSON.parse(localStorage.getItem('notes')) || [];

function renderNotes(filteredNotes = notes) {
    noteList.innerHTML = '';
    filteredNotes.forEach((note, index) => {
        const li = document.createElement('li');
        li.textContent = note;

        const editButton = document.createElement('button');
        editButton.textContent = 'Редактировать';
        editButton.className = 'edit';
        editButton.onclick = () => editNote(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.onclick = () => deleteNote(index);

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        noteList.appendChild(li);
    });
}

function addNote() {
    const noteText = noteInput.value.trim();
    if (noteText) {
        notes.push(noteText);
        saveNotes();
        noteInput.value = '';
    }
}

function editNote(index) {
    const newNoteText = prompt('Редактировать заметку:', notes[index]);
    if (newNoteText !== null) {
        notes[index] = newNoteText;
        saveNotes();
    }
}

function deleteNote(index) {
    notes.splice(index, 1);
    saveNotes();
}

function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes();
}

function searchNotes() {
    const query = searchInput.value.toLowerCase();
    const filteredNotes = notes.filter(note => note.toLowerCase().includes(query));
    renderNotes(filteredNotes);
}

addNoteButton.addEventListener('click', addNote);
searchInput.addEventListener('input', searchNotes);

// Синхронизация с другими вкладками
window.addEventListener('storage', (event) => {
    if (event.key === 'notes') {
        notes = JSON.parse(event.newValue);
        renderNotes();
    }
});

// Инициализация
renderNotes();