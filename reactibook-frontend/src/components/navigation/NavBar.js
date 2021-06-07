import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startLogout } from '../../actions/auth';

export const NavBar = () => {

    const dispatch = useDispatch();

    const { name } = useSelector( state => state.auth );

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <div className="flex flex-row p-4 bg-gray-700 w-full
                    bg-gradient-to-b from-primary-400 to-primary-500">
            <div className="w-2/3 text-xl tracking-wide font-semibold">
                Bievenid@ {name}
            </div>

            <div className="w-1/3 flex justify-end">
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
