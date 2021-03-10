import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailCard from './DetailCard'

const PeopleCard = (props) => {
    const [accion, setAccion] = useState([])
    const { id } = useParams()


    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const res = await fetch(`https://swapi.dev/api/people/${id}/`)
        const data = await res.json()
        setAccion(data)
        console.log(data)
    }

    return (
        <div>
            <DetailCard
                nombre={accion.name}
                cumple={accion.birth_year}
                genero={accion.gender}
                altura={accion.height}
                piel={accion.skin_color}
                ojos={accion.eye_color} />
        </div>
    )
}

export default PeopleCard
