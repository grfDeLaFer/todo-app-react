import React from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list/';
import PostAddFrom from '../post-add-form/';

import './app.css';

const App = () =>{

    const data = [
        {label: "Прочитать книгу" , important: true, id: "qwe"},
        {label: "Отжаться 5 раз" , important: false , id: "erf"},
        {label: "Сделать уборку" , important: false, id: "rgf"},

    ]; 

    return (
       <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddFrom />
       </div>
        
    )
}

export default App;