import React, { useState } from 'react';
import './Add.css';
import toast from 'react-hot-toast';
import left from '../Home/rb_2148222501.png';

const Add = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const notify = (message, type) => {
    toast[type === 'e' ? 'error' : 'success'](message);
  };

  const addNotes = () => {
    if (!title) {
      return notify('Title is required', 'e');
    }
    if (!description) {
      return notify('Description is required', 'e');
    }
    if (!category) {
      return notify('Please select a category', 'e');
    }

    const notes = JSON.parse(localStorage.getItem('Notes')) || [];
    notes.push({ title, description, category });
    localStorage.setItem('Notes', JSON.stringify(notes));

    setTitle('');
    setCategory('');
    setDescription('');
    notify('Note added successfully!', 's');
  };

  return (
    <div>
      <h1 className='text-center text-primary'>Add Note ✍️</h1>
      <p className='tag-line'>Share Notes of the day!</p>

      <div className='main'>
        <div className='form-div'>
          <div className='form-container'>
            <input
              placeholder='Enter the title'
              className='form-inputs'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <select
              className='form-inputs'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value=''>Select</option>
              <option value='Regular🤩'>Regular 🤩</option>
              <option value='Education📚'>Education 📚</option>
              <option value='Outdoor'>Outdoor 🏏</option>
              <option value='Shopping'>Shopping 🛍️</option>
            </select>
            <textarea
              className='form-inputs txt-area'
              placeholder='Add the description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <div className='btns'>
              <button className='bnt' onClick={addNotes}>
                Add Note
              </button>
              <button
                className='bnt btn-sec'
                onClick={() => {
                  setTitle('');
                  setCategory('');
                  setDescription('');
                  notify('Cleared successfully', 's');
                }}
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        <div className='img-container'>
          <img src={left} alt='Work illustration' />
        </div>
      </div>
    </div>
  );
};

export default Add;
