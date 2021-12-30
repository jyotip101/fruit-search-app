import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
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
