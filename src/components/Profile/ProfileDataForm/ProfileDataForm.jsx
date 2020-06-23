import React from "react";
import {Field, reduxForm} from "redux-form";
import InputComponent from "../../Input/InputComponent";

const ProfileDataForm = ({handleSubmit, profile}) => {
    // let maxLength20 = maxLengthCreator(40);
    return (
        <form onSubmit={handleSubmit}>
            <button>
                save
            </button>
            <div>
                <b>full Name</b> :
                <Field
                    placeholder={"full Name"}
                    name="fullName"
                    component={InputComponent}
                    validate={[]}
                />
            </div>

            <div>
                <b>Looking for a job</b> :
                <Field
                  name="lookingForAJob"
                  component={InputComponent}
                  type={"checkbox"}
                  />
            </div>

            <div>
               <b>My professionals skills</b> :
                <Field
                    placeholder={"My professionals skills"}
                    name="lookingForAJobDescription"
                    component={InputComponent}
                    type={"textarea"}
                />
            </div>


            <div>
                <b>About my</b> :
                <Field
                    placeholder={"About my"}
                    name="AboutMe"
                    component={InputComponent}
                    type={"textarea"}
                />
            </div>
            <div>
                {/*    <b>Contacts</b> : {Object.keys(profile.contacts).map(key =>*/}
                {/*    <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
                {/*)}*/}
            </div>
        </form>
    )
};

const ProfileDataReduxForm = reduxForm({
    form: 'edit-profile',
})(ProfileDataForm);

export default ProfileDataReduxForm