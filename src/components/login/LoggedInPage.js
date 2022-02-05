import { useSelector } from "react-redux";

const LoggedInPage = () => {
    const loggedInEmail = useSelector((state) => state.loggedInEmail);
    return (
        <>
            <h2>{loggedInEmail}</h2>
        </>
    );
};

export default LoggedInPage;
