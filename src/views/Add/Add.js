import React, {useState} from 'react'
import './Add.css'
import toast from 'react-hot-toast';

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
       Notes.push({tittle,description,category})
       localStorage.setItem('Notes',JSON.stringify(Notes))
       setTittle('')
       setcategory('')
       setdescription('')
       notify('add note successfully...','s')
    }
  }


  return (
    <div className='main-container'>
      <div className='heading-txt add-heading'>Add Note✍️</div>
      <p className='tag-line '>Share Notes of the day!</p>

      <div className='form-div'>
        <input placeholder='Enter the tittle'
          className='form-inputs'
          value={tittle} onChange={(e) => {
            setTittle(e.target.value)
          }}></input>
        <select placeholder="select" className='form-inputs' value={category}  onChange={(e) => {
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
  )

}

export default Add