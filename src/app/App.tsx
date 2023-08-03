import { Link } from "react-router-dom";
import './styles/index.scss'
import classNames from "classnames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', theme)}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <AppRouter />
        </div>
    )
}

export default App;