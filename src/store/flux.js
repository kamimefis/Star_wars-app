const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            planets: [],
            vehicles: [],
            favorites: []
        },
        actions: {
            fetchPeople: async() =>{
                const config= {
                    "method": "GET",
                    "headers": {"Content-type": "application/json"}
                }

                const res= await fetch(`https://swapi.dev/api/people/`, config)
                const data= await res.json()
                
                setStore({people: data.results})
            },
            fetchPlanets: async() =>{
                const config= {
                    "method": "GET",
                    "headers": {"Content-type": "application/json"}
                }

                const res= await fetch(`https://swapi.dev/api/planets/`, config)
                const data= await res.json()
                
                setStore({planets: data.results})
            },
            fetchVehicles: async() =>{
                const config= {
                    "method": "GET",
                    "headers": {"Content-type": "application/json"}
                }

                const res= await fetch(`https://swapi.dev/api/vehicles/`, config)
                const data= await res.json()
                
                setStore({vehicles: data.results})
            },
            addFavorites: (name)=>{
				const store= getStore();
				const {favorites} = store;
				setStore({ favorites: favorites.concat(name) })
			},
            deleteFavorites: (index)=>{
				const store= getStore();
				const {favorites}= store;
				const removeFavorite= favorites.filter(item => item !== favorites[index]);
				setStore({ favorites: [removeFavorite] });
			}
        }
    }
}
export default getState;