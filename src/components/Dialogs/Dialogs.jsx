import React from 'react';
import test from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import state from '../../redux/state';


const Dialogs = (props) => {
    console.log(state);

    let dialogsElements = 
    props.one.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);

    let messageElements = 
    props.one.messages.map( m => <Message message={m.message} />);

    return(
        <div className={test.dialogs}>
            <div className={test.dialogsItems}>
                <div className={test.dialogsWrapper}>
                    {dialogsElements}
                </div>
            </div>
            <div className={test.messages}>
                <div className={test.messagewrapper}>
                    {messageElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

