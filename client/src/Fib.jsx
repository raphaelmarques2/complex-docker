import React, {Component, useEffect, useState} from 'react'

import axios from 'axios'
import TheHeader from './TheHeader'

function Fib(){
    const [seenIndexes, setSeenIndexes] = useState([])
    const [values, setValues] = useState([])
    const [index,setIndex] = useState('')

    useEffect(() => {
        fetchValues();
        fetchIndexes();
    },[])

    async function fetchValues(){
        const result = await axios.get('/api/values/current')
        console.log('fetchValues() result', result)
        setValues(() => result.data)
    }
    async function fetchIndexes(){
        const result = await axios.get('/api/values/all')
        console.log('fetchIndexes() result', result)
        setSeenIndexes(() => result.data)
    }

    async function handleSubmit(event){
        event.preventDefault();
        await axios.post('/api/values', {
            index: index
        })
        setIndex(() => "")
    }

    return (
        <>
        <TheHeader/>
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter yout index:</label>
                <input 
                    value={index}
                    onChange={event => setIndex(event.target.value)}
                    />
                <button>Submit</button>
            </form>

            <h3>Indexes I have seen:</h3>
            <div>
                { seenIndexes.map(({number}) => number).join(', ') }
            </div>

            <h3>Calculated values:</h3>
            <div>
                {
                    Object.keys(values).map(key => (
                        <div key={key}>
                            index {key} | calculated {values[key]}
                        </div>
                    ))
                }
            </div>
        </div>
    </>
    );

}
export default Fib