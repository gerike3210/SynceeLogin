import classes from "./LoginForm.module.css";
import useForm from "../../hooks/use-form";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";
import { useState } from "react";

const LoginForm = () => {
    const [emailValidity, setEmailValidity] = useState(false);
    const [passwordValidity, setPasswordValidity] = useState(false);
    const dispatch = useDispatch();

    const {
        enteredEmail,
        enteredPassword,
        emailChangeHandler,
        passwordChangeHandler,
        emailIsTouched,
        setEmailIsTouched,
        setPasswordIsTouched,
        passwordIsTouched,
        EMAIL_FORMAT,
        PASSWORD_FORMAT,
    } = useForm();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (enteredEmail.match(EMAIL_FORMAT)) {
            setEmailValidity(true);
        }
        if (!enteredEmail.match(EMAIL_FORMAT)) {
            setEmailValidity(false);
        }
        if (enteredPassword.match(PASSWORD_FORMAT)) {
            setPasswordValidity(true);
        }
        if (
            enteredEmail.match(EMAIL_FORMAT) &&
            enteredPassword.match(PASSWORD_FORMAT)
        ) {
            dispatch(authActions.validLogIn(enteredEmail));
        }
        setEmailIsTouched(true);
        setPasswordIsTouched(true);
    };

    const emailHasError = !emailValidity && emailIsTouched;
    const passwordHasError = !passwordValidity && passwordIsTouched;

    const emailInputClasses = emailHasError ? "invalid" : "";
    const passwordInputClasses = passwordHasError ? "invalid" : "";

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={formSubmitHandler}>
                <div
                    className={`${classes["form-control"]} ${classes[emailInputClasses]}`}
                >
                    <label htmlFor="email">Email*</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="mail@website.com"
                        onChange={emailChangeHandler}
                    />
                    {emailHasError ? (
                        <p className={classes.error}>Incorrect Email</p>
                    ) : (
                        ""
                    )}
                </div>
                <div
                    className={`${classes["form-control"]} ${classes[passwordInputClasses]}`}
                >
                    <label htmlFor="password">Password*</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Min. 5 character"
                        onChange={passwordChangeHandler}
                    />
                    {passwordHasError ? (
                        <p className={classes.error}>Incorrect password</p>
                    ) : (
                        ""
                    )}
                </div>
                <div className={classes.remember}>
                    <div className={classes["remember-col"]}>
                        <input
                            className="checkbox"
                            type="checkbox"
                            id="remember"
                        />
                        <label>Remember me</label>
                    </div>
                    <a className={classes.forgotpw} href="#">
                        Forget password?
                    </a>
                </div>
                <div className={classes.button}>
                    <button>Login</button>
                </div>
            </form>
            <span className={classes.createaccount}>
                Not registered yet? <a href="#">Create an Account</a>
            </span>
        </div>
    );
};

export default LoginForm;
