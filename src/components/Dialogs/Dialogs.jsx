import React from 'react';
import test from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

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

    let messages = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "Hello!"},
        {id: 3, message: "That's up!"},
        {id: 4, message: "Good Day!"},
        {id: 5, message: "Hi man!"},
    ]

    let dialogsElements = dialogs
        .map( d => <DialogItem name={d.name} id={d.id} />);

    let messageElements = messages
        .map( m => <Message message={m.message} />);

    return(
        <div className={test.dialogs}>
            <div className={test.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={test.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;

