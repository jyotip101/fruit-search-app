import React from 'react'
import { useGlobalContext } from './context'
import logoImg from '../img/fruit.png'

const SearchForm = () => {
  const { setSearchTerm, setFruits, fruits } = useGlobalContext()

  const searchText = React.useRef()

  React.useEffect(() => {
    searchText.current.focus()
  }, [])

  const searchFruits = () => {
    let val = searchText.current.value
    console.log(val)

    let newValue = fruits.filter((item) => item.name.toLowerCase() === val)
    setFruits(newValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className='input-field'>
        <form className='search-form' onSubmit={handleSubmit}>
          <div className='from-control'>
            <img className='logo-img' src={logoImg} alt='logoImg' />
            <input
              type='text'
              ref={searchText}
              onChange={searchFruits}
              id='search'
              placeholder='eg:- apple'
              name='search'
            />

            <button className='search-but'>
              <span className='material-icons'>search</span>
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default SearchForm
