import React from 'react';
import Style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateNewMessageBodyCreator, SendMessageCreator} from '../../redux/dialogs-reducer'
// import {NavLink} from 'react-router-dom'

const Dialogs = (props)=> {

    let state = props.store.getState().dialogs;
    let dialogsElements = state.dialogsData.map( d => <DialogItem name={d.name} id={d.id} ava={d.ava} />);
    let messagesElements = state.messagesData.map( m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;
    
    let onSendMessageClick = ()=>{
        props.store.dispatch(SendMessageCreator())
    }
    let onNewMessageChange =(e)=>{
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <div className={Style.dialogs}>
            <div className={Style.dialogItems}>
                {dialogsElements}
            </div>
            <div className={Style.messages}>
                <div>
                    {messagesElements}
                </div>
                <div className={Style.sendMessage}>
                    <div>
                        <textarea placeholder='Enter your message' 
                            value={newMessageBody} 
                            onChange={onNewMessageChange}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs