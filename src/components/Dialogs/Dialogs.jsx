import React from 'react';
import test from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = 
    props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);

    let messageElements = 
    props.state.messages.map( m => <Message message={m.message} />);

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

