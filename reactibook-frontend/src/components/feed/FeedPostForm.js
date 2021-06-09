import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startNewPost, startUploading } from '../../actions/posts';
import { useForm } from '../../hooks/useForm';

export const FeedPostForm = () => {

    const dispatch = useDispatch();

    const handlePictureClick = (e) => {
        e.preventDefault();
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        
        e.preventDefault();

        const file = e.target.files[0];
        if (file) {
            dispatch(startUploading( file ));
        }
    }

    const [formValues, handleInputChange, reset] = useForm({ content: '', visibility: 'friends' });

    const { content, visibility } = formValues;

    const [formErrorMsg, setformErrorMsg] = useState('');

    const isFormValid = () => {
        if ( content.trim().length === 0 ) {
            setformErrorMsg('El contenido del post no debe estar vacío');
            return false;
        } 

        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isFormValid()){
            dispatch(startNewPost(content, visibility));
            reset();
        }
    }


    return (
        <div className="w-full flex justify-center">
            <form 
                className="bg-gray-600 w-3/5 h-full px-5 py-5 mt-4
                rounded"
                onSubmit={handleSubmit}
            >
                <textarea 
                    className="w-full rounded flex items-start p-2 text-black resize-none"
                    type="textarea"
                    autoComplete="off"
                    placeholder="¿Qué está pasando?"
                    name="content"
                    value={content}
                    onChange={handleInputChange}
                ></textarea>
                <span
                    className="text-sm text-red-500"
                >
                    {formErrorMsg}
                </span>

                <div className="w-full flex row mt-2 mx-2">
                    <div className="w-1/3 flex items-start">
                        <input
                            id="fileSelector"
                            style={{display: 'none'}}
                            className=""
                            type="file"
                            name="file"
                            accept="image/png, image/jpeg"
                            onChange={handleFileChange}
                        />
                        <button
                            className="bg-gray-200 text-black px-3 py-1 rounded"
                            onClick={handlePictureClick}
                        >
                            Subir imagen
                        </button>
                    </div>
                    <div className="w-2/3 flex justify-end">
                        <select
                            className="mr-2 text-black"
                            name="visibility"
                            value={visibility}
                            onChange={handleInputChange}
                        >
                            <option value="friends">Amigos</option>
                            <option value="public">Público</option>
                        </select>
                        <button
                            type="submit"
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
