import "./styles/global.css";
import "./styles/layout.css";
import MainNav from "widgets/MainNav/MainNav";
import { YourLibrary } from "@widgets/YourLibrary";

const App: React.FC = () => {
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

export default App;
