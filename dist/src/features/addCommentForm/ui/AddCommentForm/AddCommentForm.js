import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDynamicReducurLoad } from 'shared/lib/hooks/useDynamicReducerLoad';
import { HStack } from 'shared/ui/Stack';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import { getAddCommentFormText, getAddCommentFormError, } from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';
var reducers = {
    addCommentForm: addCommentFormReducer,
};
var AddCommentForm = memo(function (props) {
    useDynamicReducurLoad(reducers);
    var className = props.className, onSendComment = props.onSendComment;
    var t = useTranslation().t;
    var text = useSelector(getAddCommentFormText) || '';
    var error = useSelector(getAddCommentFormError);
    var dispatch = useAppDispatch();
    var onCommentTextChange = useCallback(function (value) {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);
    var onSendHandler = useCallback(function () {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);
    return (_jsxs(HStack, { justify: "between", max: true, className: classNames(cls.addCommentForm, className), children: [_jsx(Input, { className: cls.input, placeholder: t('Comment'), value: text, onChange: onCommentTextChange }), _jsx(Button, { theme: ButtonTheme.OUTLINE, onClick: onSendHandler, children: t('Send') })] }));
});
export default AddCommentForm;
