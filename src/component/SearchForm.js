import React from 'react'
import { useGlobalContext } from './context'
import logoImg from '../img/fruit.png'
const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  return (
    <>
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
    </>
  )
}

export default SearchForm
