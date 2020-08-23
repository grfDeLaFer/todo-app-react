import React from 'react';

import './post-add-form';

const PostAddFrom = () => {
    return(
        <form className="bottom-panel d-flex">
            <input 
                type="text"
                placeholder="Напишите новое задание для Ярослава ..."
                className="form-control new-post-label"
            />
            <button 
                type="submit"
                className="btn btn-outline-secondary">
                Добавть
            </button>
        </form>
    )
};

export default PostAddFrom;