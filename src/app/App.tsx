import './styles/index.scss'
import classNames from "classnames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

const App = () => {
    const {theme} = useTheme();   

    return (
        <div className={classNames('app', theme)}>
            <Suspense fallback="">
                <Navbar />
                <div className='page-content'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App;