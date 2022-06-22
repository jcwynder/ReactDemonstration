import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">Page 1</Link>
        <br />
        <Link to="page2">Page 2</Link>
        <br />
        <Link to="page3">Page 3</Link>
        <br />
        <Link to="page4">Page 4</Link>
        <br />
        <Link to="page5">Page 5</Link>
        <br />
        <Link to="page6">Page 6</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
