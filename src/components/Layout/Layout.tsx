import "./Layout.css"
import MainNav from "./components/MainNav/MainNav";
import YourLibrary from "./components/YourLibrary/YourLibrary";

const Layout = () => {
  return (
    <div className="container">
      <aside className="aside">
        <MainNav />
        <YourLibrary />
      </aside>

      <main className="content"></main>
    </div>
  );
};

export default Layout;
