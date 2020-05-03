import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are you?', like: 12},
    {id: 2, message: 'What are you doing?', like: 99},
    {id: 3, message: 'Hello, that time it is?', like: 0},
    {id: 4, message: 'Hi man!', like: 33},
    {id: 5, message: 'Hu are you?', like: 77}
]

let messages = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "Hello!"},
    {id: 3, message: "That's up!"},
    {id: 4, message: "Good Day!"},
    {id: 5, message: "Hi man!"},
]

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sergey'},
    {id: 4, name: 'Ryslan'},
    {id: 5, name: 'Anna'},
    {id: 6, name: 'Bububu'},
    {id: 7, name: 'Olga'},
    {id: 8, name: 'Rita'}
]

ReactDOM.render(<App posts={posts} messages={messages} dialogs={dialogs} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
