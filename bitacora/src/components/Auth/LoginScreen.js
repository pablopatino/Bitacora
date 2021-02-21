import React from 'react'
import { useForm } from '../../hooks/useForm';

import { Link } from "react-router-dom";
import { startlogin } from '../../actions/auth';
import { useDispatch } from 'react-redux';

import Swal from "sweetalert2";

export const LoginScreen = () => {

    const dispatch = useDispatch();


    const loginUser = {
        uid: Date.now(),
        Usuario: '',
        password: ''

    }

    const [ formularios, manejarFormulario ] = useForm( loginUser );
    
    const { Usuario, password, uid } =  formularios

    const handleInputForm = ( e ) => {
        e.preventDefault()
        

        if( Usuario === '' || password === '' )  {
            return Swal.fire('Error','Ningun espacio puede quedar en blanco', 'error')
        } else {
            dispatch( startlogin( uid ,Usuario ) )
        }
        
            
    }

    return (
        <div className="auth__main">
           
            
                <form
                 className="auth__form"
                 onSubmit = { handleInputForm }
                 >
                 <h2 className = "auth__tittle"> Login </h2>
                
                <input
                type="text"
                name = "Usuario"
                className= "auth__inputs"
                placeholder = "Usuario"
                autoComplete = "off"
                onChange = { manejarFormulario }
                >
                </input>
               

                <br />
                <input
                type="password"
                name = "password"
                className="auth__inputs"
                autoComplete = "off"
                placeholder= "Password"
                onChange = { manejarFormulario }
                >
                </input>
                <br />

                <button
                className= "auth__button"
                > Entrar </button>


                <Link to="/auth/Register" className="link">
                    Create new account
                </Link>

                </form>
           


        </div>
    )
}
