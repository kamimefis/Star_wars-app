import React, { useEffect, useContext } from 'react'
import { Context } from '../../store/appContext';
import DeckCard from './DeckCard';

const People = () => {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchPeople();
        actions.addFavorites();
    }, [])

    return (
        <>
            {
                store.people.map((item, index) => (
                    <DeckCard
                        nombre={item.name}
                        genero={item.gender}
                        pelo={item.hair_color}
                        ojos={item.eye_color}
                        key={index}
                        id={++index}
                    />
                ))
            }
        </>
    )
}

export default People;