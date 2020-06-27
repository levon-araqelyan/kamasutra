import {addDialogsMessageDataActionCreator, setNewMessageTextActionCreator, initialStateType} from "../../redux/redusers/dialogsRedusers";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {AppStateType} from "../../redux/reduxStore"


type MapStatePropsType = {
    state:initialStateType
}

type MapDispatchPropsType = {
    setNewMessageTextActionCreator:(value:string)=> void
    addDialogsMessageDataActionCreator:()=> void
}

type OwnPropsType = {
}



const mapStateToProps = (state:AppStateType)=> ({
    state: state.dialogsReduser,
})

const DialogsContainer = connect<MapStatePropsType,MapDispatchPropsType,OwnPropsType,AppStateType>
(mapStateToProps,{setNewMessageTextActionCreator,addDialogsMessageDataActionCreator})(WithAuthRedirect(Dialogs));

export default DialogsContainer


