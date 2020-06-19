import React from 'react'
import {addPostActionCreator, setNewPostTextActionCreator} from "../../../redux/redusers/profileRedusers";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



const mapStateToProps = (state)=>{
    return {
        postData: state.profileReduser,
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        addPosts : () => {
            dispatch(addPostActionCreator())
        },
        handleTextareaChange:(value)=>{

            dispatch( setNewPostTextActionCreator(value))
        }
    }
};

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer