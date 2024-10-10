import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import left from './work.png';

function Home() {
  return (
    <div>
      <h1 className='text-center text-primary'>Quick Notes</h1>
      <div className='text-center text-secondary'>
        Simplify Your Day, Amplify Your Productivity.
      </div>

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

      <div className='button-container'>
        <Link to={"/add"}>
          <button className="btn-primary">Add Note✍️</button>
        </Link>
        <Link to={"/show"}>
          <button className="btn-primary">Show Note🗒️</button>
        </Link>

      </div>
    </div>
  );
}

export default Home;
