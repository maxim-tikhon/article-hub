import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';
describe('Button', function () {
    test('Test render', function () {
        render(_jsx(Button, { children: "TEST" }));
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Test clear theme', function () {
        render(_jsx(Button, { theme: ButtonTheme.CLEAR, children: "TEST" }));
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
