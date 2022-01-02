import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../img/fruit.png'

const Fruits = ({ name, id, nutritions }) => {
  return (
    <>
      <article className='fruits-contant'>
        <div className='fruit-title'>
          <img src={logoImg} alt='logoImg' /> Fruit Name:
          <span> {name}</span>
        </div>

        <p className='line' />
        <div className='nutritions-center'>
          <div className='nutritions-item'>
            <div className='nutritions'>
              <p>calories</p>
              <h2>{nutritions.calories}</h2>
            </div>
            <div className='nutritions'>
              <p>carbohydrates</p>
              <h2>{nutritions.carbohydrates}</h2>
            </div>
            <div className='nutritions'>
              <p>fat</p>
              <h2>{nutritions.fat}</h2>
            </div>
          </div>

          <div className='nutritions-item'>
            <div className='nutritions'>
              <p>protein</p>
              <h2>{nutritions.protein}</h2>
            </div>
            <div className='nutritions'>
              <p>sugar</p>
              <h2>{nutritions.sugar}</h2>
            </div>
          </div>
        </div>
        <Link to='' className='link'>
          view details
        </Link>
      </article>
    </>
  )
}

export default Fruits
