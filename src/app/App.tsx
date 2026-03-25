import { NavBar } from "../widgets/NavBar";
import "./styles/global.scss";
import { AppRouter } from "./providers/ui/AppRouter";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="contentpage">
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
