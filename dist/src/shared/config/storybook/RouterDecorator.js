import { jsx as _jsx } from "react/jsx-runtime";
import { MemoryRouter, Route, Routes } from 'react-router-dom';
export var RouterDecorator = function (Story) { return (_jsx(MemoryRouter, { initialEntries: ["/path/1"], children: _jsx(Routes, { children: _jsx(Route, { path: "/path/:id", element: _jsx(Story, {}) }) }) })); };
