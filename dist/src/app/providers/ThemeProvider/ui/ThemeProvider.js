import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo, useState, } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';
var defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT;
var ThemeProvider = function (props) {
    var initialTheme = props.initialTheme, children = props.children;
    var _a = useState(initialTheme || defaultTheme), theme = _a[0], setTheme = _a[1];
    var defaultProps = useMemo(function () { return ({
        theme: theme,
        setTheme: setTheme,
    }); }, [theme]);
    return (_jsx(ThemeContext.Provider, { value: defaultProps, children: children }));
};
export default ThemeProvider;
