import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startLogout } from '../../actions/auth';

export const NavBar = () => {


    const dispatch = useDispatch();

    const { name } = useSelector( state => state.auth );

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    const handleGoUp = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="flex flex-row p-4 bg-gray-700 w-full fixed
                    bg-gradient-to-b from-primary-400 to-primary-600">
            <div className="w-2/3 text-xl tracking-wide font-semibold">
                <span
                    onClick={handleGoUp}
                    className="cursor-pointer"
                >
                    REACTIBOOK
                </span>
            </div>

            <div className="w-1/3 flex justify-end">
                <div className="bg-primary-600 px-2 py-1 mx-2">
                    {name}
                </div>
                <button 
                        className="bg-secondary-500 rounded font-bold px-2 py-1"
                        onClick={handleLogout}
                    >
                        Logout
                </button>
            </div>
        </div>
    )
}
