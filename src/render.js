import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/state';
import {addDialog} from './redux/state';
import {updateNewPostText, updateNewDialogText} from './redux/state';
import {BrowserRouter} from 'react-router-dom';


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} 
                 addDialog={addDialog}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 updateNewDialogText={updateNewDialogText}
                  />
        </BrowserRouter>,
    document.getElementById('root'));
}


