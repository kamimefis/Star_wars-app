import React from 'react'
import {Link} from 'react-router-dom'

const DetailCard = (props) => {

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-sm-6 text-center">
                    <img 
                    style={{ width: '20rem' }}
                    alt="..."
                    src="https://vignette.wikia.nocookie.net/starwars/images/9/93/Do_or_Do_Not_SWDTPG.png/revision/latest?cb=20190428031515"
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
                <p className="col-sm-2 text-center" style={{ color: 'crimson' }}><b>Model</b> <br/> {props.modelo}</p>
                <p className="col-sm-2 text-center" style={{ color: 'crimson' }}><b>Manufacturer</b> <br/> {props.manufactura}</p>
                <p className="col-sm-2 text-center" style={{ color: 'crimson' }}><b>Vehicle Class</b> <br/> {props.clase}</p>
                <p className="col-sm-2 text-center" style={{ color: 'crimson' }}><b>Cost in Credit</b> <br/> {props.costo}</p>
                <p className="col-sm-2 text-center" style={{ color: 'crimson' }}><b>Cargo Capacity</b> <br/> {props.capacidad}</p>
            </div>
            <br/>
            <Link to= {"/"}><button className="btn btn-outline-success">Back to Home</button></Link>
        </div>
    )
}

export default DetailCard
