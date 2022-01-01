import React from 'react'
import SearchForm from '../component/SearchForm'
import FruitsList from '../component/FruitsList'

const Home = () => {
  return (
    <>
      <main className='home-container'>
        <div className='home-contant'>
          <SearchForm />
          <FruitsList />
        </div>
      </main>
    </>
  )
}

export default Home
