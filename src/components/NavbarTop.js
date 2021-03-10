import React, {useContext, useEffect} from 'react'
import {Context} from '../store/appContext'
import { Navbar, DropdownButton, Dropdown } from 'react-bootstrap'

const NavbarTop = (index) => {
    const { store, actions } = useContext(Context);
    useEffect(() => { actions.deleteFavorites(index) }, []);

    return (
        <Navbar bg="light">
            <Navbar.Brand>
                <img
                    src="starwars_logo.png"
                    width="60"
                    height="60"
                    alt=""
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <DropdownButton className="ml-auto" id="dropdown-basic-button" title="Favorites">
                {
                    store.favorites.map( (item, index)=> (
                        <Dropdown.Item key={index}>{item}
                        <button onClick={()=> actions.deleteFavorites(index)} className="btn btn-sm btn-primary">X</button>
                        </Dropdown.Item>
                    ))
                }
            </DropdownButton>
        </Navbar>
    )
}

export default NavbarTop
