import React from "react";
import {Field, reduxForm} from "redux-form";
import InputComponent from "../../Input/InputComponent";
import s from "../../LoginContainer/LoginContainer.module.scss";
import Button from "../../Button/Button";
import {maxLengthCreator} from "../../../utils/validation/validation";

const ProfileDataForm = ({handleSubmit, profile,error}) => {
    let maxLength20 = maxLengthCreator(40);
    return (
        <form onSubmit={handleSubmit}>
            <Button>
                save
            </Button>
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
                    <b>Contacts</b> : {Object.keys(profile.contacts).map(key =>
                    <div>
                        <b>{key}</b> :
                        <Field
                            placeholder={key}
                            name={`contacts.${key}`}
                            component={InputComponent}
                        />
                    </div>
                )}

            </div>
            {
                error && (<div className={s.allError}>{error}</div>)
            }
            <div>
            </div>
        </form>
    )
};

const ProfileDataReduxForm = reduxForm({
    form: 'edit-profile',
})(ProfileDataForm);

export default ProfileDataReduxForm