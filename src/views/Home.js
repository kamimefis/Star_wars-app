import React from 'react'
import People from '../components/people/People'
import Planets from '../components/planets/Planets'
import Vehicles from '../components/vehicles/Vehicles'

const Home = () => {
    return (
        <div className="container">
            <h2 style={{ color: 'crimson' }}>People</h2> <br/>
            <div className="row flex-row flex-nowrap overflow-auto"><People/></div>
            <h2 style={{ color: 'crimson' }}>Planets</h2> <br/>
            <div className="row flex-row flex-nowrap overflow-auto"><Planets/></div>
            <h2 style={{ color: 'crimson' }}>Vehicles</h2> <br/>
            <div className="row flex-row flex-nowrap overflow-auto"><Vehicles/></div>
        </div>
    )
}

export default Home
