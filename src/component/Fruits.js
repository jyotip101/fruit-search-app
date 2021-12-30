import React, { useReducer } from 'react'
import { reducer } from './reducer'

const API_URL = 'https://www.fruityvice.com/api/fruit/apple'

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
}
const Fruits = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <h1>fruits</h1>
    </>
  )
}

export default Fruits
