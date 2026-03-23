import { NavBar } from "../widgets/NavBar";
import "./styles/global.scss";
import { AppRouter } from "./providers/ui/AppRouter";

const App = () => {
    return (
        <>
            <NavBar />
            <div className="contentpage">
                <AppRouter />
            </div>
        </>
    );
};

export default App;
