import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../img/fruit.png'

const Home = () => {
  return (
    <>
      <main className='home-container'>
        <div className='home-contant'>
          <div className='input-field'>
            <img className='logo-img' src={logoImg} alt='logoImg' />
            <input
              type='search'
              id='search'
              list='fruits'
              placeholder='eg:- apple'
              name='search'
            />
            <datalist id='fruits'>
              <option value='apple' />
              <option value='banana' />
              <option value='mango' />
              <option value='blueberry' />
            </datalist>
            <button className='search-but'>
              <span className='material-icons'>search</span>
            </button>
          </div>

          <div className='card-contant'>
            <div className='card'>
              <h1>Apple</h1>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              <Link className='link' to={`/fruit/${1}`}>
                vew details
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
