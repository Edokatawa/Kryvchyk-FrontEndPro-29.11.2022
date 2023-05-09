import {FORM_VALIDATION} from "../constants/FORM_VALIDATION";

export const isFormValid = formValues => {
    let isValid = true;
    let errors = {};

    for (const key in formValues) {
        const {regex, errorMessage} = FORM_VALIDATION[key];

        if (!regex.test(formValues[key])) {
            isValid = false;
            errors[key] = errorMessage;
        } else {
            errors[key] = "";
        }
    }

    return {isValid, errors};
};
