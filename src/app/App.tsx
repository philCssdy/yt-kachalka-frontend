import { NavBar } from "../widgets/NavBar";
import "./styles/global.scss";
import { AppRouter } from "./providers/ui/AppRouter";
import { Footer } from "../widgets/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-1 contentpage">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
};

export default App;
