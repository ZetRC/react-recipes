import React , { createContext , useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) =>{

    const [ foodSearch , setFoodSearch ] = useState("low carb")

    return(

        <DataContext.Provider value={[ foodSearch , setFoodSearch]}>
            { children }
        </DataContext.Provider>

    )
}

