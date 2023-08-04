import './styles/index.scss'
import classNames from "classnames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', theme)}>
            <Navbar />
            <div className='page-content'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    )
}

export default App;