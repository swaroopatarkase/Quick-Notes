import React from 'react';
import { Link } from 'react-router-dom';
import './Show.css';

const Show = () => {
  const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem('Notes')) || []);

  const handleDelete = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    localStorage.setItem('Notes', JSON.stringify(updatedNotes));
  };

  return (
    <div>
      <div className="header">
        <Link to="/" className='link'>
        <button className='btn-primary'>
          Home
                </button>
        </Link>
        <div className='text-center header-title text-primary'>
          View Notes 🗒️
        </div>
      </div>
      <div className='main-container'>
        <div className='notes-container'>
          {notes.length === 0 ? (
            <p>No notes available. Start adding some!</p>
          ) : (
            notes.map((note, index) => (
              <div key={index} className='note-card'>
                <button className='delete-button' onClick={() => handleDelete(index)}>
                  ✖️
                </button>
                <h3 className='note-title'>{note.title}</h3>
                <p className='note-category'>Category: {note.category}</p>
                <p className='note-description'>{note.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Show;
