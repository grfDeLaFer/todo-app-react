import React from 'react';

import './post-add-form';

const PostAddFrom = ({onAdd}) => {
    return(
        <div className="bottom-panel d-flex">
            <input 
                type="text"
                placeholder="Напишите новое задание для Ярослава ..."
                className="form-control new-post-label"
            />
            <button 
                type="submit"
                className="btn btn-outline-secondary"
                onClick={() => onAdd('Hello')}>
                Добавть
            </button>
        </div>
    )
};

export default PostAddFrom;