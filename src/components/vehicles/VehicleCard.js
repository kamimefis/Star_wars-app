import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailCard from './DetailCard'

const VehicleCard = (props) => {
    const [accion, setAccion] = useState([])
    const { id } = useParams()


    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const res = await fetch(`https://swapi.dev/api/vehicles/${id}/`)
        const data = await res.json()
        setAccion(data)
        console.log(data)
    }

    return (
        <div>
            <DetailCard
                nombre={accion.name}
                modelo={accion.model}
                manufactura={accion.manufacturer}
                clase={accion.vehicle_class}
                costo={accion.cost_in_credits}
                capacidad={accion.cargo_capacity} />
        </div>
    )
}

export default VehicleCard
