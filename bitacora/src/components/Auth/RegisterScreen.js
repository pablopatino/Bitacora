import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { startlogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
    
    let disable = true
    const dispatch = useDispatch()

    const NewUser = {
        uid: Date.now(),
        User: '',
        password: '',
        password2: '',
    }
    
    const [ formularios, manejarFormulario ] = useForm( NewUser );
    
    const { User, password, uid, password2 } =  formularios



    const handleInputForm = ( e ) => {
        e.preventDefault();
        
        if( User ==='' || password ==='' || password2 ===''){
            return Swal.fire('Error','Todos los campos deben de ser llenados', 'error')
        } else if ( password !== password2 ) {
            return Swal.fire('Error','La contraseña debe de coincidir', 'error')
        }

            
        Swal.fire('Succes','Registro Exitoso', 'success')
          
        dispatch( startlogin( uid, User ) )

    }

    return (
        <div>
             <form
                 className="auth__form"
                 onSubmit = { handleInputForm }
                 >
                 <h2 className = "auth__tittle"> Registrate </h2>
                
                <input
                type="text"
                name = "User"
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

                <input
                type="password"
                name = "password2"
                className="auth__inputs"
                autoComplete = "off"
                placeholder= "Repite tu password"
                onChange = { manejarFormulario }
                >
                </input>
              
                    <button
                    className= "auth__button" 
                    
                    > Crear </button>
                    
              

            
                <Link to="/auth/login" className = "link">
                    Ya tienes cuenta? loguea
                </Link>

                </form>
        </div>
    )
}
