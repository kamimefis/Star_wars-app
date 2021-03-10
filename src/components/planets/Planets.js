import React, { useEffect, useContext} from 'react'
import { Context } from '../../store/appContext';
import DeckCard from '../planets/DeckCard';

const Planets = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchPlanets();
        actions.addFavorites();
    }, [])

    return (
        <>
            {
                store.planets.map((item, index) => (
                    <DeckCard
                        nombre={item.name}
                        poblacion={item.population}
                        terreno={item.terrain}
                        clima={item.climate}
                        key={index}
                        id={++index}
                    />
                ))
            }
        </>
    )
}

export default Planets;
