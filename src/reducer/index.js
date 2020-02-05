import React, { useState } from 'react'

import useStore from './somaReducer'

function ReducerHook() {

    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [store, dispatch] = useStore()

    const somar = () => {
        const n1 = parseInt(num1)
        const n2 = parseInt(num2)

        dispatch({
            type: 'SOMA',
            payload: n1 + n2
        })
    }


    return (
        <div>
            <input type="text" value={num1} onChange={e => setNum1(e.target.value)} /> <br />
            <input type="text" value={num2} onChange={e => setNum2(e.target.value)} /> <br />
            <button className="btn btn-primary" onClick={somar}> Somar </button> <br />
            <input type="text" value={store.resultado} />
        </div>
    );
}

export default ReducerHook;
