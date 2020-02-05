import { useReducer } from 'react'

const ESTADO_INICIAL = {
    resultado: ''
}

const somaReducer = (state = ESTADO_INICIAL, action) => {
    switch(action.type){
        case 'SOMA': 
            return {...state, resultado: action.payload}
        default:
            return state
    }
}

const useStore = () => useReducer(somaReducer, ESTADO_INICIAL)

export default useStore