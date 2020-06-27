import React,{FC} from "react"
import s from "./Dialogs.module.scss"
import DialogItem from "./DialogItem/DialogItem";
import Massages from "./Massages/Massages";
import MessengerChatInput from "../MessengerChatInput/MessengerChatInput";
import {
    addDialogsMessageDataActionCreator,
    initialStateType,
    setNewMessageTextActionCreator
} from "../../redux/redusers/dialogsRedusers";


type PropsType = {
    addDialogsMessageDataActionCreator: ()=> void
    setNewMessageTextActionCreator: (value:string)=> void
    state: initialStateType
}

const Dialogs:FC<PropsType> = ({addDialogsMessageDataActionCreator,setNewMessageTextActionCreator,state}) => {
    return (
        <div className={s.dialogWrap}>
            <div className={s.dialogItems}>
                {state.dialogsData.map(item => (
                    <DialogItem name={item.name} id={item.id} key={item.id}/>
                ))
                }
            </div>
            <div className={s.messages}>
                {state.messegesData.map(item => (
                    <Massages key={item.id} text={item.text}/>
                ))}

                <MessengerChatInput
                    setValue={setNewMessageTextActionCreator}
                    sendMessage={addDialogsMessageDataActionCreator}
                    valueOfInput={state.newMessageText}
                />

            </div>
        </div>
    )
}

export default Dialogs