import React from 'react'
import { reducer } from './reducer'

export const useFetchData = (url, isLoading) => {
  const [user, setUser] = useState([])

  const getFruits = async () => {
    const response = await fetch(url)
    const user = await response.json()
    setUser(user)
    setLoading(false)
  }
  useEffect(() => {
    getFruits()
  }, [url])
  return { loading, user }
}
