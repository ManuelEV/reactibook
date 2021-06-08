import React, { useState } from 'react';

export const FeedPost = () => {

    const postContent = 'ASDASDASDASDASDASDASDASDAD';

    const [editionMode, setEditionMode] = useState(false);

    const handleEditionMode = (newEditionMode) => {
        setEditionMode(newEditionMode);
    }

    return (
        <div className="w-full flex justify-center">
            <div className="bg-gray-600 w-3/5 h-full px-5 py-5 mt-4
                rounded">
                <div 
                    className="flex row mb-2"
                >
                    <img 
                            className="h-14 w-14"
                            src="./assets/user.svg" alt="user_profile"
                    />
                    <div className="grid grid-cols-1 ml-3">
                        <div className="text-xl font-semibold">Juan</div>
                        <div className="text-sm">Hoy 10:00</div>
                    </div>
                </div>

                
                {
                    editionMode ? (
                        <form className="w-full">
                            <textarea 
                                className="w-full rounded flex items-start p-2 text-black resize-none"
                                type="textarea"
                                autoComplete="off"
                                placeholder="¿Qué está pasando?"
                                value={postContent}
                            >
                            </textarea>
                            <div className="w-full flex justify-end px-3 text-sm underline">
                                <span 
                                    className="pr-2 cursor-pointer"
                                    onClick={() => handleEditionMode(false)}
                                >
                                    Cancelar
                                </span>
                                <span className="cursor-pointer">
                                    Guardar
                                </span>
                            </div>
                        </form>
                    )

                    : (
                        <div 
                            className="w-full rounded flex items-start p-2"
                        >
                            {postContent}
                        </div>
                    )
                }
                
                <div className="w-full flex items-start px-3 text-sm underline">
                    <span 
                        className="pr-2 cursor-pointer"
                        onClick={() => handleEditionMode(true)}
                    >
                        Editar
                    </span>
                    <span className="cursor-pointer">
                        Eliminar
                    </span>
                </div>
            </div>
        </div>
    )
}
