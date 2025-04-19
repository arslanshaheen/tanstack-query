import { createContext } from "react"

// Step 1
export const BioContext = createContext()

// Step 2
export const BioProvider = ({ children }) => {
  const myName = "arslan"
   const myAge = 30
console.log(children)
  return (
    <BioContext.Provider value={{myName, myAge}}>
      {children}
    </BioContext.Provider>
  )
}
