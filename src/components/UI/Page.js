import { useDispatch, useSelector } from "react-redux";
import LoggedInPage from "../login/LoggedInPage";
import LoginForm from "../login/LoginForm";
import synceeLogo from "../../img/syncee-logo-300px.png";

import classes from "./Page.module.css";
import GoogleLogin from "react-google-login";
import { authActions } from "../../store/auth";

const Page = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.isValid);
    const loggedInEmail = useSelector((state) => state.loggedInEmail);
    const userObj = useSelector((state) => state.userObj);

    const responseGoogleHandler = (response) => {
        dispatch(
            authActions.changeUserObj(JSON.stringify(response.profileObj))
        );
        dispatch(authActions.validLogIn(""));
    };

    const content = (
        <div className={classes.container}>
            <div className={classes["col-login"]}>
                <header>
                    <img src={synceeLogo} />
                    <div className={classes["login-header"]}>
                        <h1>Login</h1>
                        <p>See your growth and get consulting support!</p>
                    </div>
                    <GoogleLogin
                        clientId="639374844035-55a1b7rnmcrl617lci6l0u9g24tqgkdj.apps.googleusercontent.com"
                        buttonText="Sign in with Google"
                        onSuccess={responseGoogleHandler}
                        onFailure={responseGoogleHandler}
                        cookiePolicy={"single_host_origin"}
                        className={classes.googlecontainer}
                        render={(renderProps) => (
                            <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className={classes.googlelogin}
                            >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                                <span className={classes["googlelogin-text"]}>
                                    Sign in with Google
                                </span>
                            </button>
                        )}
                    />
                </header>
                <main>{isLoggedIn ? <LoggedInPage /> : <LoginForm />}</main>
                <footer>
                    <p className={classes["footer-text"]}>
                        2022 Syncee. All rights reserved.
                    </p>
                </footer>
            </div>
            <div className={classes["col-wallpaper"]}></div>
        </div>
    );

    return <>{isLoggedIn ? `${loggedInEmail} ${userObj}` : content}</>;
};

export default Page;
