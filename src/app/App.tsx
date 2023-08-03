import { Link } from "react-router-dom";
import './styles/index.scss'
import classNames from "classnames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', theme)}>
            <Navbar />
            <button onClick={toggleTheme}>Toggle</button>
            <AppRouter />
        </div>
    )
}

export default App;