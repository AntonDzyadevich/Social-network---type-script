import React from "react";
import {ProfileType} from "../../../Redux/profile-reducer";
import {createField, Input, Textarea} from "../../common/Preloader/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import s from './ProfileInfo.module.css';




type ProfileDataFormPropsType = {
    profile: ProfileType
}
const ProfileDataForm: React.FC<InjectedFormProps<ProfileType,
    ProfileDataFormPropsType> & ProfileDataFormPropsType> = ({handleSubmit,
                                                                                        profile,
                                                                                        error}) => {
        return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
            {error && <div className={s.formSummaryError}>
                {error}
            </div>
            }
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
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
            <b>{key}: {createField("Full name", "contacts" + key, [], Input)}</b>
            </div>
        })}
        </div>

    </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileType,ProfileDataFormPropsType>({form:'edit-profile'}) (ProfileDataForm)

export default ProfileDataFormReduxForm;