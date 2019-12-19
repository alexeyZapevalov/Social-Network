import React from 'react';
import Style from '../Dialogs.module.css'
import {NavLink} from 'react-router-dom'

const DialogItem = (props)=>{
    let path = '/dialogs/' + props.id;
    let name = props.name;
    let ava = props.ava;
    return (
        <div className={Style.dialog}>
            <img src={ava}></img>
            <NavLink to = {path}> {name} </NavLink>
        </div>
    )
};

export default DialogItem