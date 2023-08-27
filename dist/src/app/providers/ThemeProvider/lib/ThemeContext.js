import { createContext } from 'react';
export var Theme;
(function (Theme) {
    Theme["LIGHT"] = "app-light-theme";
    Theme["DARK"] = "app-dark-theme";
    Theme["ORANGE"] = "app-orange-theme";
})(Theme || (Theme = {}));
export var ThemeContext = createContext({});
export var LOCAL_STORAGE_THEME_KEY = 'theme';
