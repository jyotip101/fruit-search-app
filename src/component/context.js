import React, { useContext, useState, useEffect } from 'react'

const API_URL =
  'https://raw.githubusercontent.com/jyotip101/fruits-api/main/Data.json'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [seaechTerm, setSearchTerm] = useState('apple')
  const [fruits, setFruits] = useState([])

  const openMenu = () => {
    setIsMenuOpen(true)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const getFruits = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${API_URL}`)
      const data = await response.json()

      if (data) {
        const newFruits = data.map((item) => {
          const { name, id, nutritions } = item
          return { name, id, nutritions }
        })
        setFruits(newFruits)
      } else {
        setFruits([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getFruits()
  }, [seaechTerm])

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        loading,
        fruits,
        setFruits,
        openMenu,
        closeMenu,
        setSearchTerm,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
