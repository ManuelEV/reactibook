import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { msgError } = useSelector(state => state.ui);


    const [formValues, handleInputChange] = useForm({
        name: '', 
        email: '', 
        password: '', 
        passwordConfirmation: '',
    });

    const {name, email, password, passwordConfirmation} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()){
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }

    };

    const isFormValid = () => {
        if (name.trim().length === 0){
            dispatch(setError('El nombre es requerido'));
            return false;
        } else if ( !validator.isEmail( email ) ){
            dispatch(setError('El email no es válido'));
            return false;
        }else if ( password !== passwordConfirmation || password.length < 5 ){
            dispatch(setError('La contraseña debe ser de al menos 6 caracteres'));
            return false;
        }

        dispatch( removeError() );

        return true;
    };


    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-800 text-white">

            
            <form 
                className="md:w-1/4 sm:w-1/2 bg-gradient-to-b from-primary-400 to-primary-800
                rounded-lg shadow-lg p-10"
                onSubmit={handleRegister}
            >

                {
                    msgError &&
                    (
                        <div className="w-full text-sm text-red-500 text-center">
                            {msgError}
                        </div>
                    )
                }

                <div className="w-full my-2">
                    <input 
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="w-full rounded px-2 text-black
                        border border-transparent focus:outline-none focus:ring-2 
                        focus:ring-secondary-100 focus:border-transparent"
                        autoComplete="off"
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="w-full my-2">
                    <input 
                        type="text"
                        placeholder="Email"
                        name="email"
                        className="w-full rounded px-2 text-black
                        border border-transparent focus:outline-none focus:ring-2 
                        focus:ring-secondary-100 focus:border-transparent"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="w-full my-2">
                    <input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="w-full rounded px-2 text-black
                        border border-transparent focus:outline-none focus:ring-2 
                        focus:ring-secondary-100 focus:border-transparent"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="w-full my-2">
                    <input 
                        type="password"
                        placeholder="Confirm password"
                        name="passwordConfirmation"
                        className="w-full rounded px-2 text-black
                        border border-transparent focus:outline-none focus:ring-2 
                        focus:ring-secondary-100 focus:border-transparent"
                        value={passwordConfirmation}
                        onChange={handleInputChange}
                    />
                </div>


                <div className="w-full flex justify-center my-4">
                    <button
                        type="submit"
                        className="bg-secondary-700 py-1 px-5 rounded shadow font-bold
                        hover:bg-secondary-900"
                    >
                        Registrarse
                    </button>
                </div>



                <div className="w-full text-center cursor-pointer">
                    <Link 
                        to="/auth/login"
                        className="link"
                    >
                        ¿Ya estás registrado?
                    </Link>
                </div>

            </form>
            
        </div>
    )
}
