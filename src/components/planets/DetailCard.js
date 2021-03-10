import React from 'react'
import {Link} from 'react-router-dom'

const DetailCard = (props) => {

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-sm-6 text-center">
                    <img 
                    alt="..."
                    style={{ width: '20rem' }}
                    src="https://i.insider.com/567ae13edd0895c3058b4787?width=1100&format=jpeg&auto=webp"
                    />
                </div>
                <div className="col-sm-6 text-center">
                    <h1>{props.nombre}</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>
            <hr></hr>
            <div className="row">
                <p className="col-sm-2 text-center" style={{ color: 'crimson' }}><b>Name</b> <br/> {props.nombre}</p>
                <p className="col-sm-2 text-center" style={{ color: 'crimson' }}><b>Population</b> <br/> {props.poblacion}</p>
                <p className="col-sm-2 text-center" style={{ color: 'crimson' }}><b>Climate</b> <br/> {props.clima}</p>
                <p className="col-sm-2 text-center" style={{ color: 'crimson' }}><b>Terrain</b> <br/> {props.terreno}</p>
                <p className="col-sm-2 text-center" style={{ color: 'crimson' }}><b>Gravity</b> <br/> {props.gravedad}</p>
                <p className="col-sm-2 text-center" style={{ color: 'crimson' }}><b>Rotation Period</b> <br/> {props.rotacion}</p>
            </div>
            <br/>
            <Link to= {"/"}><button className="btn btn-outline-success">Back to Home</button></Link>
        </div>
    )
}

export default DetailCard
