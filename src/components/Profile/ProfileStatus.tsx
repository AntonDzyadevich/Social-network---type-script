import React from "react";
import {ProfilePropsType} from "./Profile";




type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}



class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: any) => {
        this.setState({
            status:  e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "This I'am" }</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                </div>
                }
            </div>
        )}
}



export default ProfileStatus ;