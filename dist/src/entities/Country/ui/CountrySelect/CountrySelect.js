import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/Popups';
import { Country } from '../../model/types/country';
var options = Object.entries(Country).map(function (val) { return ({ value: val[0], content: val[1] }); });
export var CountrySelect = memo(function (_a) {
    var className = _a.className, value = _a.value, onChange = _a.onChange, readonly = _a.readonly;
    var t = useTranslation().t;
    var onChangeHandler = useCallback(function (value) {
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [onChange]);
    return (_jsx(ListBox, { onChange: onChangeHandler, value: value, defaultValue: t('Select country'), label: t('Select country'), items: options, readonly: readonly, direction: "top right" }));
});
