import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/state';
import {addDialog} from './redux/state';
import {updateNewPostText} from './redux/state';
import {BrowserRouter} from 'react-router-dom';


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} 
                 addDialog={addDialog}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                  />
        </BrowserRouter>,
    document.getElementById('root'));
}


