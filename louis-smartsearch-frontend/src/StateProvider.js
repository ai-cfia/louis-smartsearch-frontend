import {createContext, useContext, useReducer} from "react";

// Creating Context
export const StateContext = createContext();

//Creating State Provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>

)

export const useStateValue = () => useContext(StateContext);