import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const openMenu = () => {
    setIsMenuOpen(true)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const loading = () => {
    setLoading(true)
  }
  const notLoading = () => {
    setLoading(false)
  }

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        isLoading,
        openMenu,
        closeMenu,
        loading,
        notLoading,
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
