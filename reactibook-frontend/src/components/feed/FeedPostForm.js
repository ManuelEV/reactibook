import React from 'react'

export const FeedPostForm = () => {
    return (
        <div className="w-full flex justify-center">
            <form className="bg-gray-600 w-3/5 h-full px-5 py-5 mt-4
                rounded">
                <textarea 
                    className="w-full rounded flex items-start p-2 text-black resize-none"
                    type="textarea"
                    autoComplete="off"
                    placeholder="¿Qué está pasando?"
                    
                ></textarea>

                <div className="w-full flex row mt-2 mx-2">
                    <div className="w-1/3 flex items-start">
                        <input
                            className=""
                            type="file"
                            name="file"
                            accept="image/png, image/jpeg"
                        />
                    </div>
                    <div className="w-2/3 flex justify-end">
                        <select
                            className="mr-2 text-black"
                            name="postVisibility"
                        >
                            <option value="friends">Amigos</option>
                            <option value="public">Público</option>
                        </select>
                        <button
                            className="bg-primary-600 rounded px-2 text-white
                            hover:bg-primary-500"
                        >
                            publicar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
