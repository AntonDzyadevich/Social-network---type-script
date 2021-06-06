import React from "react";
import {ProfileType} from "../../../Redux/profile-reducer";
import {createField, FieldValidatorType, Input, Textarea} from "../../common/Preloader/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import {LoginForm} from "../../Login/Login";




type ProfileDataFormPropsType = {
    profile: ProfileType
}
const ProfileDataForm: React.FC<ProfileDataFormPropsType> = ({handleSubmit,profile}) => {
        return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        <div>
            <b>Full name</b>: {createField("Full name", "full name", [], Input)}
        </div>

        <div>
            <b>Looking for a job</b>:
            { createField("", "lookingForAJob", [], Input, {type: "checkbox"}) }
        </div>

        <div>
            <b>My professional skills</b>:
            { createField("My professional skills", "lookingForAJobDescription", [], Textarea )}
        </div>

        <div>
            <b>About me</b>:
            { createField("About me", "lookingForAJobDescription", [], Textarea )}
        </div>
        <div>
        {/*    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {*/}
        {/*    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>*/}
        {/*})}*/}
        </div>

    </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileType,ProfileDataFormPropsType>({form:'edit-profile'}) (ProfileDataForm)

export default ProfileDataFormReduxForm;