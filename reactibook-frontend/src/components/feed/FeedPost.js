import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/es';
import { startDeleting, startUpdatingPost } from '../../actions/posts';

export const FeedPost = ({id, content, date, fileUrl, author}) => {

    moment().locale('es');

    const postDate = moment(date);

    const { uid } = useSelector( state => state.auth );

    const dispatch = useDispatch();

    const [editionMode, setEditionMode] = useState(false);

    const [editedPostContent, setEditedPostContent] = useState(content);

    const handleInputChange = (e) => {
        setEditedPostContent(e.target.value);
    }

    const [formErrorMsg, setformErrorMsg] = useState('');

    const isFormValid = () => {

        if ( content === editedPostContent ) {
            setformErrorMsg('El contenido del post no debe ser el mismo que el anterior');
            return false;
        } else if ( editedPostContent.trim().length === 0 ) {
            setformErrorMsg('El contenido del post no debe estar vacío');
            return false;
        }          

        return true;
    }

    const handlePostUpdate = () => {
        if (isFormValid()) {
            dispatch(startUpdatingPost(id, {content: editedPostContent}));
            setEditionMode(false);
        }
    }

    const handlePostDelete = () => {
        dispatch(startDeleting(id));
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
                        <div className="text-xl font-semibold">{author.name}</div>
                        <div className="text-sm">{postDate.calendar()}</div>
                    </div>
                </div>

                
                {
                    editionMode ? (
                        <div className="w-full">
                            <textarea 
                                className="w-full rounded flex items-start p-2 text-black resize-none"
                                type="textarea"
                                autoComplete="off"
                                placeholder="¿Qué está pasando?"
                                name="editedPostContent"
                                value={editedPostContent}
                                onChange={handleInputChange}
                            >
                            </textarea>
                            <span className="text-red-500 text-sm">
                                {formErrorMsg}
                            </span>
                            <div className="w-full flex justify-end px-3 text-sm underline">
                                <span 
                                    className="pr-2 cursor-pointer"
                                    onClick={() => setEditionMode(false)}
                                >
                                    Cancelar
                                </span>
                                <span
                                    className="cursor-pointer"
                                    onClick={handlePostUpdate}
                                >
                                    Guardar
                                </span>
                            </div>
                        </div>
                    )

                    : (
                        <div 
                            className="w-full rounded flex items-start p-2"
                        >
                            {content}
                        </div>
                    )
                }

                <div 
                    className="w-full flex justify-center"
                >
                    <img src={fileUrl} alt="" />
                </div>
                
                {
                    (uid === author.id) &&
                    (<div className="w-full flex items-start px-3 text-sm underline">
                        <span 
                            className="pr-2 cursor-pointer"
                            onClick={() => setEditionMode(true)}
                        >
                            Editar
                        </span>
                        <span
                            className="cursor-pointer"
                            onClick={handlePostDelete}
                        >
                            Eliminar
                        </span>
                    </div>)
                }
            </div>
        </div>
    )
}
