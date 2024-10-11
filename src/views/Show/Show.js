import React from 'react';
import './Show.css';
import left from '../Add/imgs.png';

const Show = () => {
  const Notes = JSON.parse(localStorage.getItem('Notes')) || [];

  return (
    <div >
      <div className='heading-txt add-heading'>
        View Notes🗒️
      </div>
      <p className='tag-line'>View all your notes!</p>

      <div className='main'>
        <div>
          <img src={left} alt='Work illustration' />
        </div>
        <div>
          <p>
            Welcome to Quick Notes, your go-to platform for capturing thoughts, ideas, and important information effortlessly! Whether you’re a busy professional, a student, or someone who loves to jot down insights, our user-friendly interface makes it easy to create, organize, and access your notes anytime, anywhere.
          </p>
          <p>
            Enjoy seamless syncing across devices, customizable templates, and powerful search features that ensure you never lose track of what matters most. Start jotting down your ideas today and experience the convenience of Quick Notes!
          </p>
        </div>
      </div>

      <div className='main-container'>
      <div className='notes-container'>
        {Notes.length === 0 ? (
          <p>No notes available. Start adding some!</p>
        ) : (
          Notes.map((note, index) => (
            <div key={index} className='note-card'>
              <h3 className='note-title'>{note.tittle}</h3>
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
