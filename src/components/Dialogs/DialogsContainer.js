import React from "react"
import {addDialogsMessageDataActionCreator, setNewMessageTextActionCreator} from "../../redux/redusers/dialogsRedusers";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

const mapStateToProps = (state)=>{
    return {
        state: state.dialogsReduser,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleTextareaChange: (value)=>{
            dispatch(setNewMessageTextActionCreator(value))
        },
        addDialogsMessage: ()=>{
            dispatch(addDialogsMessageDataActionCreator())
        }

    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(WithAuthRedirect(Dialogs))

export default DialogsContainer


