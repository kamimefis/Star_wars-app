import React, { useEffect, useContext} from 'react'
import { Context } from '../../store/appContext';
import DeckCard from './DeckCard';

const Vehicles = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchVehicles();
        actions.addFavorites();
    }, [])

    return (
        <>
            {
                store.vehicles.map((item, index) => (
                    <DeckCard
                        nombre={item.name}
                        modelo={item.model}
                        manufactura={item.manufacturer}
                        clase={item.vehicle_class}
                        key={index}
                        id={++index}
                    />
                ))
            }
        </>
    )
}

export default Vehicles;