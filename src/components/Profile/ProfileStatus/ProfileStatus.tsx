import React, {useEffect, useState,ChangeEvent} from 'react'

type PrpsTypes = {
    status: string
    updateStatus: (status: string) => void
}


let ProfileStatus: React.FC<PrpsTypes>;
ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true)
    };

    const deActivateEditMode = () => {
        setEditMode(!editMode);
        props.updateStatus(status)
    };

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {

        setStatus(e.target.value)
    };

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    return (
        <div>
            {!editMode ?
                (<div onDoubleClick={activateEditMode}>
                    <b>Status :</b> <span>{props.status || "add status"}</span>
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

};

export default ProfileStatus