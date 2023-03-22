import React, { useReducer } from 'react'
import GlobalContext from './GlobalContext'
import globalReducer from './globalReducer';

export default function GlobalState({ children }) {

    const initialState = {
        isHamburgerActive: false,
    }


    const [globalState, dispatch] = useReducer(globalReducer, initialState);

    return (
        <GlobalContext.Provider value={{ globalState, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}
