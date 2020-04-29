import React from 'react';
import test from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={test.dialog + ' ' + test.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={test.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sergey'},
        {id: 4, name: 'Ryslan'},
        {id: 5, name: 'Anna'},
        {id: 6, name: 'Bububu'},
        {id: 7, name: 'Olga'},
        {id: 8, name: 'Rita'}
    ]

    let messagesData = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "Hello!"},
        {id: 3, message: "That's up!"},
        {id: 4, message: "Good Day!"},
        {id: 5, message: "Hi man!"},
    ]

    return(
        <div className={test.dialogs}>
            <div className={test.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
                <DialogItem name={dialogsData[6].name} id={dialogsData[6].id}/>
                <DialogItem name={dialogsData[7].name} id={dialogsData[7].id}/>
            </div>
            <div className={test.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
                <Message message={messagesData[4].message} />
            </div>
        </div>
    )
}

export default Dialogs;

