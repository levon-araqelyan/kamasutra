import React from 'react'


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode() {
        this.setState({editMode: true})
    }

    deActivateEditMode() {
        this.setState({editMode: !this.state.editMode})
        this.props.updateStatus(this.state.status)
    }

    onStatusChange=(e)=>{
        this.setState({status:e.target.value})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({status:this.props.status})
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    (<div onDoubleClick={this.activateEditMode.bind(this)}>
                        <span>{this.props.status || "add status"}</span>
                    </div>) :
                    (<div>
                        <input
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            onDoubleClick={this.deActivateEditMode.bind(this)}
                            value={this.state.status}
                        />
                    </div>)
                }
            </div>
        )

    }
}

export default ProfileStatus