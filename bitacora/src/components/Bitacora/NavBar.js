import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StartLogOut } from '../../actions/auth'

export const NavBar = () => {
    
const dispatch = useDispatch()
const { user } = useSelector(state => state.auth)

const handleInputLogOut = () => {

    dispatch( StartLogOut() )
}

    return (
        <div className = "Navbar__div">
            
            <span className="Navbar__span">
                { user }
            </span>

            <button className="Navbar__Button" 
            onClick = { handleInputLogOut }
            >   
            Logout
            </button>
    </div>
    )
}
