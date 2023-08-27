import { createSelector } from '@reduxjs/toolkit';
export var getScrollRecord = function (state) { return state.scroll.scrollRecord; };
export var getScrollPositionByPath = createSelector(getScrollRecord, function (state, path) { return path; }, function (scroll, path) { return scroll[path] || 0; });
