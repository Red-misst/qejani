import Header from "../header";
import DesktopNav from "../desktopNav";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <DesktopNav />
      {children}
    </div>
  );
};

export default Layout;
