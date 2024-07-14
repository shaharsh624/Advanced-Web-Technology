import './App.css';
import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header className="App-header" style={{ width: '100vw' }}>
        <h2>Practical 6</h2>
        <Link to="/student" className='link'>Go to Task 1 and 2</Link>
        <br />
        <Link to="/furniture" className='link'>Go to Task 3 and 4</Link>
      </header>
    </div>
  )
}

export default Home;