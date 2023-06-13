import CompleteNavbar from "./CompleteNavbar";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <CompleteNavbar />
      {children}
    </div>
  );
};

export default Layout;
