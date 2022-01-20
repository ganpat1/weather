import React from 'react'

const date= new Date();
// const hor = date.toLocaleTimeString([], { hour: '2-digit' })
const hor = date.getHours()

const next = hor +3 
const data = () => {


    return (
        <div>

<h1>{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h1>
<h1>{next}</h1>
        </div>
    )
}

export default data
