import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { removeLoginError, setLoginError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const { loading } = useSelector( state => state.ui );

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: '',
    });

    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        if(isFormValid()){
            dispatch(startLoginEmailPassword(email, password));
        }
    };

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    
    const isFormValid = () => {
        const errors = {};
        let isValid = true;


        if ( !validator.isEmail( email ) ){
            errors['emailMsg'] = 'El email no es válido';
            isValid = false;
        }
        
        if (password.length < 5 ){
            errors['passwordMsg'] = 'La contraseña debe ser de al menos 6 caracteres';
            isValid = false;
        }

        if (isValid) {
            dispatch( removeLoginError() );
        } else {
            dispatch(setLoginError(errors));
        }

        return isValid;
    };

    const { emailMsg, passwordMsg } = useSelector( state => state.ui.loginErrors );

    return (
        <div className="w-screen h-screen flex justify-center items-center text-white bg-gray-800">

            <form 
                className="md:w-1/4 sm:w-1/2 bg-gradient-to-b from-primary-400 to-primary-800
                rounded-lg shadow-lg p-10"
                onSubmit={handleLogin}
            >

                <div className="">
                    Email:
                </div>

                <div className="w-full">
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
                    <span className="text-sm text-red-500">
                        {emailMsg}
                    </span>
                </div>

                <div className="pt-2">
                    Password:
                </div>

                <div className="w-full">
                    <input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="w-full rounded px-2 text-black
                        border border-transparent focus:outline-none focus:ring-2 
                        focus:ring-secondary-900 focus:border-transparent"
                        value={password}
                        onChange={handleInputChange}
                    />
                    <span className="text-sm text-red-500">
                        {passwordMsg}
                    </span>
                </div>


                <div className="w-full flex justify-center my-3">
                    <button
                        type="submit"
                        className="bg-secondary-700 py-1 px-5 rounded shadow font-bold
                            hover:bg-secondary-900"
                        disabled={loading}
                    >
                        Login
                    </button>
                </div>

                
                <div className="w-full mt-4">

                    <div 
                        className="w-full cursor-pointer"
                        onClick={handleGoogleLogin}
                    >
                        <div className="flex justify-center">
                            <img 
                                className="h-14 w-14 rounded-full p-1 bg-black bg-opacity-20" 
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                                alt="google button" 
                            />
                        </div>
                        <div className="text-center">
                            <span>Ingresar con Google</span>
                        </div>
                    </div>
                </div>

                <div className="w-full text-center cursor-pointer underline mt-4">
                    <Link 
                        to="/auth/register"
                        className=""
                    >
                        Crear una nueva cuenta  
                    </Link>
                </div>

            </form>
        </div>
    )
}
