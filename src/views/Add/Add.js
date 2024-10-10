import React, { useState } from 'react'
import './Add.css'
import toast from 'react-hot-toast';
import left from '../Home/work.png';

const Add = () => {

  const [tittle, setTittle] = useState('')
  const [category, setcategory] = useState('')
  const [description, setdescription] = useState('')

  // create toast messagegs...
  const notify = (Message, type) => {
    if (type === 'e') {
      toast.error(Message)
    } else if (type === 's') {
      toast.success(Message)
    }
  }


  //add notes into localStorage....
  const addNotes = () => {
    if (tittle.length <= 0 && description.length <= 0 && category === '') {
      toast.error('please fill full add fields', 'e')
    } else {
      let Notes = JSON.parse(localStorage.getItem('Notes')) || []
      Notes.push({ tittle, description, category })
      localStorage.setItem('Notes', JSON.stringify(Notes))
      setTittle('')
      setcategory('')
      setdescription('')
      notify('add note successfully...', 's')
    }
  }


  return (
    <div>  
      <h1 className='text-center text-primary'>Add Note✍️</h1>
      <p className='tag-line '>Share Notes of the day!</p>

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
        <div className='form-div'>
          <input placeholder='Enter the tittle'
            className='form-inputs'
            value={tittle} onChange={(e) => {
              setTittle(e.target.value)
            }}></input>
          <select placeholder="select" className='form-inputs' value={category} onChange={(e) => {
            setcategory(e.target.value)
          }}>
            <option>Select</option>
            <option className='select' value='common'>Regular🤩</option>
            <option className='select' value='education'>Education📚</option>
            <option className='select' value='outdoor'>Outdoor🏏</option>
            <option className='select' value='shoping'>Shopping🛍️</option>
          </select>
          <textarea className='form-inputs txt-area' placeholder='Add the description' value={description} onChange={(e) => {
            setdescription(e.target.value)
          }}></textarea>

          <div className='btns'>
            <button className='bnt' onClick={() => {
              addNotes()
            }}>Add Note </button>

            <button className='bnt btn-sec' onClick={() => {
              setTittle('')
              setcategory('')
              setdescription('')
              notify('clear successfully', 's')
            }}>Clear</button>
          </div>
        </div>
      </div>
      </div>
      )

}

      export default Add