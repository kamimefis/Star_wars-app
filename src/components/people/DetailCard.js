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
                    src="https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/XTP5QOJSEBGOPADNWUHOTYNTXM.jpg"
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
                <p className="col-sm-2 text-center" style={{ color: 'crimson' }}><b>Birth Year</b> <br/> {props.cumple}</p>
                <p className="col-sm-2 text-center" style={{ color: 'crimson' }}><b>Gender</b> <br/> {props.genero}</p>
                <p className="col-sm-2 text-center" style={{ color: 'crimson' }}><b>Height</b> <br/> {props.altura}</p>
                <p className="col-sm-2 text-center" style={{ color: 'crimson' }}><b>Skin Color</b> <br/> {props.piel}</p>
                <p className="col-sm-2 text-center" style={{ color: 'crimson' }}><b>Eye Color</b> <br/> {props.ojos}</p>
            </div>
            <br/>
            <Link to= {"/"}><button className="btn btn-outline-success">Back to Home</button></Link>
        </div>
    )
}

export default DetailCard
