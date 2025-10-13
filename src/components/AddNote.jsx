import { useState } from 'react';

function AddNote({ onNoteAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddNote = () => {
    if (!title.trim() && !description.trim()) return;

    onNoteAdded({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Start writing your note..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
}

export default AddNote;
