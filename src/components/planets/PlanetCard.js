import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailCard from './DetailCard'

const PlanetCard = (props) => {
    const [accion, setAccion] = useState([])
    const { id } = useParams()


    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const res = await fetch(`https://swapi.dev/api/planets/${id}/`)
        const data = await res.json()
        setAccion(data)
        console.log(data)
    }

    return (
        <div>
            <DetailCard
                nombre={accion.name}
                poblacion={accion.population}
                clima={accion.climate}
                terreno={accion.terrain}
                gravedad={accion.gravity}
                rotacion={accion.rotation_period} />
        </div>
    )
}

export default PlanetCard