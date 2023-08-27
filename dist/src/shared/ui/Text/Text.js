var _a;
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { memo } from 'react';
import cls from './Text.module.scss';
export var TextTheme;
(function (TextTheme) {
    TextTheme["PRIMARY"] = "primary";
    TextTheme["INVERTED"] = "inverted";
    TextTheme["ERROR"] = "error";
})(TextTheme || (TextTheme = {}));
export var TextAlign;
(function (TextAlign) {
    TextAlign["RIGHT"] = "right";
    TextAlign["LEFT"] = "left";
    TextAlign["CENTER"] = "center";
})(TextAlign || (TextAlign = {}));
export var TextSize;
(function (TextSize) {
    TextSize["S"] = "size_s";
    TextSize["M"] = "size_m";
    TextSize["L"] = "size_l";
})(TextSize || (TextSize = {}));
var mapSizeToHeaderTag = (_a = {},
    _a[TextSize.S] = 'h3',
    _a[TextSize.M] = 'h2',
    _a[TextSize.L] = 'h1',
    _a);
export var Text = memo(function (props) {
    var className = props.className, text = props.text, title = props.title, _a = props.theme, theme = _a === void 0 ? TextTheme.PRIMARY : _a, _b = props.align, align = _b === void 0 ? TextAlign.LEFT : _b, _c = props.size, size = _c === void 0 ? TextSize.M : _c, _d = props["data-testid"], dataTestId = _d === void 0 ? 'Text' : _d;
    var HeaderTag = mapSizeToHeaderTag[size];
    return (_jsxs("div", { className: classNames(cls.textWrapper, className, cls[theme], cls[align], cls[size]), children: [title && _jsx(HeaderTag, { className: cls.title, "data-testid": "".concat(dataTestId, ".Header"), children: title }), text && _jsx("p", { className: cls.text, "data-testid": "".concat(dataTestId, ".Paragraph"), children: text })] }));
});
