import { useSelector } from "react-redux";
import LoggedInNavbar from "./LoggedInNavbar";
import NotLoggedIn from "./NotLoggedIn";

const CompleteNavbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log(isAuthenticated);
  return <>{isAuthenticated ? <LoggedInNavbar /> : <NotLoggedIn />}</>;
};

export default CompleteNavbar;
