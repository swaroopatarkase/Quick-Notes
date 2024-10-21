import React from 'react';
import { Link } from 'react-router-dom';
import './Show.css';
import home from '../Home/home-button.png';

const Show = () => {
  const Notes = JSON.parse(localStorage.getItem('Notes')) || [];

  return (
    <div>
      <div className="header">
        <Link to="/" className='link'>
          <img src={home} alt='Go to home' className='icon' />
        </Link>
        <div className='text-center header-title text-primary'>
          View Notes 🗒️
        </div>
      </div>
      <p className='tag-line'>View all your notes!</p>

      <div className='main-container'>
        <div className='notes-container'>
          {Notes.length === 0 ? (
            <p>No notes available. Start adding some!</p>
          ) : (
            Notes.map((note, index) => (
              <div key={index} className='note-card'>
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
