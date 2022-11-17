import React from 'react'
import {Link} from 'react-router-dom'
import TheHeader from './TheHeader'

function OtherPage(){
    return (
        <>
        <TheHeader/>
        <div>
            Im some other page!!!
            <Link to='/'> Go back home</Link>
        </div>
        </>
    )
}

export default OtherPage