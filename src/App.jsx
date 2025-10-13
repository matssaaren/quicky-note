import { useState, useEffect } from 'react';
import localforage from 'localforage';
import AddNote from './components/AddNote.jsx';
import List from './components/List.jsx';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [theme, setTheme] = useState('App');

  // Configure localforage
  localforage.config({
    name: 'QuickyNotes',
    storeName: 'notes'
  });

  // Load notes from local DB
  const loadNotes = async () => {
    const stored = await localforage.getItem('notes');
    if (stored) setNotes(stored);
  };

  // Save notes to local DB
  const saveNotes = async (newNotes) => {
    setNotes(newNotes);
    await localforage.setItem('notes', newNotes);
  };

  // Add a new note
  const handleAddNote = async (note) => {
    const newNote = {
      id: Date.now(),
      ...note,
      date: new Date().toISOString(),
    };
    const updated = [newNote, ...notes];
    await saveNotes(updated);
  };

  // Theme loader (keep your current setup)
  useEffect(() => {
    const existing = document.getElementById('theme-style');
    if (existing) existing.remove();

    const link = document.createElement('link');
    link.id = 'theme-style';
    link.rel = 'stylesheet';
    link.href = `/themes/${theme}.css`;
    document.head.appendChild(link);
  }, [theme]);

  // Load notes once
  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div className="app">
      <header style={{ textAlign: 'center', margin: '1rem 0' }}>
        <span>Quicky Notes - Beta 1.0</span>
        <div style={{ marginTop: '0.5rem' }}>
          <span>Select Theme:</span>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            style={{
              background: 'black',
              color: 'inherit',
              border: '1px solid #555',
              borderRadius: '0.3rem',
              padding: '0.3rem 0.6rem',
            }}
          >
            <option value="App">App</option>
            <option value="Ass">Ass</option>
            <option value="Hacker">Hacker</option>
            <option value="Hacker2">Hacker2</option>
            <option value="Orginal">Orginal</option>
          </select>
        </div>
      </header>

      <div className="main">
        <div className="block">
          <AddNote onNoteAdded={handleAddNote} />
          <List notes={notes} />
        </div>
      </div>
    </div>
  );
}

export default App;
