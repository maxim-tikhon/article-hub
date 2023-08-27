import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
export var LoginModal = function (props) {
    var className = props.className, isOpen = props.isOpen, onClose = props.onClose;
    return (_jsx(Modal, { lazy: true, className: classNames(className), isOpen: isOpen, onClose: onClose, children: _jsx(Suspense, { fallback: _jsx(Loader, {}), children: _jsx(LoginFormAsync, { onSuccess: onClose }) }) }));
};
