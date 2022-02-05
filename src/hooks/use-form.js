import { useState } from "react";

const useForm = () => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [emailIsTouched, setEmailIsTouched] = useState(false);
    const [passwordIsTouched, setPasswordIsTouched] = useState(false);

    const EMAIL_FORMAT =
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const PASSWORD_FORMAT = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    return {
        enteredEmail,
        enteredPassword,
        emailChangeHandler,
        passwordChangeHandler,
        emailIsTouched,
        passwordIsTouched,
        setEmailIsTouched,
        setPasswordIsTouched,
        EMAIL_FORMAT,
        PASSWORD_FORMAT,
    };
};

export default useForm;
