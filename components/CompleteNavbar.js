import { useSelector } from "react-redux";
import LoggedInNavbar from "./LoggedInNavbar";
import NotLoggedIn from "./NotLoggedIn";

const CompleteNavbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return <>{isAuthenticated ? <LoggedInNavbar /> : <NotLoggedIn />}</>;
};

export default CompleteNavbar;
