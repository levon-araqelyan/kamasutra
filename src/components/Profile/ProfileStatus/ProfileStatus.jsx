import React ,{useState,useEffect} from 'react'


const ProfileStatus = (props) =>  {

    const [editMode,setEditMode] = useState(false);
    const [status,setStatus] = useState(props.status);

    const activateEditMode =() => {
        setEditMode(true)
    }

    const deActivateEditMode =() =>{
        setEditMode(!editMode)
        props.updateStatus(status)
    }

    const onStatusChange=(e)=>{

        setStatus(e.target.value)
    }

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

        return (
            <div>
                {!editMode ?
                    (<div onDoubleClick={activateEditMode}>
                        <span>{props.status || "add status"}</span>
                    </div>) :
                    (<div>
                        <input
                            onChange={onStatusChange}
                            autoFocus={true}
                            onBlur={deActivateEditMode}
                            value={status}
                        />
                    </div>)
                }
            </div>
        )

}

export default ProfileStatus