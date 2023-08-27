import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import classNames from 'classnames';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect } from 'entities/Currency';
import { CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './ProfileCard.module.scss';
export var ProfileCard = function (props) {
    var _a;
    var className = props.className, data = props.data, isLoading = props.isLoading, error = props.error, readOnly = props.readOnly, onChangeFirstname = props.onChangeFirstname, onChangeLastname = props.onChangeLastname, onChangeAge = props.onChangeAge, onChangeCity = props.onChangeCity, onChangeAvatar = props.onChangeAvatar, onChangeUsername = props.onChangeUsername, onChangeCountry = props.onChangeCountry, onChangeCurrency = props.onChangeCurrency;
    var t = useTranslation('profile').t;
    if (isLoading) {
        return (_jsx(HStack, { justify: "center", max: true, className: classNames(cls.profileCard, cls.loading, className), children: _jsx(Loader, {}) }));
    }
    if (error) {
        return (_jsx(HStack, { justify: "center", max: true, className: classNames(cls.profileCard, cls.error, className), children: _jsx(Text, { theme: TextTheme.ERROR, title: t('Upload error'), text: t('Try to reload page'), align: TextAlign.CENTER }) }));
    }
    return (_jsxs(VStack, { gap: "8", max: true, className: classNames(cls.profileCard, className, (_a = {}, _a[cls.editing] = !readOnly, _a)), children: [(data === null || data === void 0 ? void 0 : data.avatar) && (_jsx(HStack, { justify: "center", max: true, className: cls.avatarWrapper, children: _jsx(Avatar, { src: data === null || data === void 0 ? void 0 : data.avatar }) })), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.first, placeholder: t('First name'), className: cls.input, onChange: onChangeFirstname, readOnly: readOnly, "data-testid": "ProfileCard.firstname" }), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.lastname, placeholder: t('Last name'), className: cls.input, onChange: onChangeLastname, readOnly: readOnly, "data-testid": "ProfileCard.lastname" }), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.age, placeholder: t('Age'), className: cls.input, onChange: onChangeAge, readOnly: readOnly }), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.city, placeholder: t('City'), className: cls.input, onChange: onChangeCity, readOnly: readOnly }), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.username, placeholder: t('Username'), className: cls.input, onChange: onChangeUsername, readOnly: readOnly }), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.avatar, placeholder: t('Enter avatar link'), className: cls.input, onChange: onChangeAvatar, readOnly: readOnly }), _jsx(CurrencySelect, { className: cls.input, value: data === null || data === void 0 ? void 0 : data.currency, onChange: onChangeCurrency, readonly: readOnly }), _jsx(CountrySelect, { className: cls.input, value: data === null || data === void 0 ? void 0 : data.country, onChange: onChangeCountry, readonly: readOnly })] }));
};
