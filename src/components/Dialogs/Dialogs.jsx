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

    let newDialogElement = React.createRef();

    let addDialog = () => {
        let text = newDialogElement.current.value;
        alert(text);
    }

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
                <div className={test.buttonWrapper}>
                    <div className={test.textareaWrapper}>
                        <textarea ref={newDialogElement} cols="30" rows="2"></textarea>
                    </div>
                    <div>
                        <button onClick={ addDialog }>Add post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

