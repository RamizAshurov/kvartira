import { useState, createContext } from 'react'

const UnitContext = createContext()

const UnitProvider = ({children}) => {
    const [unit, setUnit] = useState("km")

    const changeUnit = (newUnit) => {
        if (unit === newUnit)
            return false
        setUnit(newUnit)
    }
    
    return <UnitContext.Provider value={{unit, changeUnit}}>{children}</UnitContext.Provider>
}

export { UnitProvider, UnitContext } 