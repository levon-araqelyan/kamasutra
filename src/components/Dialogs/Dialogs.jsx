import React from "react"
import s from "./Dialogs.module.scss"
import DialogItem from "./DialogItem/DialogItem";
import Massages from "./Massages/Massages";
import MessengerChatInput from "../MessengerChatInput/MessengerChatInput";
import {addDialogsMessageDataActionCreator, setNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = ({messagesData,dialogsData,newMessageText,dispatch}) => {

   const handleTextareaChange = (value) => {
       dispatch(setNewMessageTextActionCreator(value))
   };

   const addDialogsMessage = ()=>{

       dispatch(addDialogsMessageDataActionCreator())
   }

    return (
        <div className={s.dialogWrap}>
            <div className={s.dialogItems}>
                {dialogsData.map(item => (
                    <DialogItem name={item.name} id={item.id} key={item.id}/>
                ))}
            </div>
            <div className={s.messages}>
                {messagesData.map(item => (
                    <Massages key={item.id} text={item.text}/>
                ))}
                <MessengerChatInput setValue={handleTextareaChange} sendMessage={addDialogsMessage}  valueOfInput={newMessageText}/>
            </div>
        </div>
    )
}

export default Dialogs