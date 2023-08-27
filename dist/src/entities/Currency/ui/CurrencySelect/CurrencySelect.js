import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';
var options = Object.entries(Currency).map(function (val) { return ({ value: val[0], content: val[1] }); });
export var CurrencySelect = memo(function (_a) {
    var className = _a.className, value = _a.value, onChange = _a.onChange, readonly = _a.readonly;
    var t = useTranslation().t;
    var onChangeHandler = useCallback(function (value) {
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (_jsx(ListBox, { className: className, value: value, defaultValue: t('Select currency'), label: t('Select currency'), items: options, onChange: onChangeHandler, readonly: readonly, direction: "top right" }));
});
