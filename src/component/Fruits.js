import React, { useReducer } from 'react'
import { reducer } from './reducer'
import { useFetchData } from './FetchData'

const API_URL = 'https://www.fruityvice.com/api/fruit/apple'

const initialState = {
  data: [useFetchData(url, isLoading)],
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
