import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const FruitDetails = () => {
  const [fruitData, setFruitData] = useState('')

  const { id } = useParams()

  return (
    <>
      <div className='FruitDetails-container'>
        <h1>FruitDetails {id}</h1>
        <Link to='/' className='link'>
          back to home
        </Link>
      </div>
    </>
  )
}

export default FruitDetails
