import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    scrollRecord: {},
};
export var scrollSlice = createSlice({
    name: 'scroll',
    initialState: initialState,
    reducers: {
        setScrollPosition: function (state, _a) {
            var payload = _a.payload;
            state.scrollRecord[payload.path] = payload.position;
        },
    },
});
// Action creators are generated for each case reducer function
export var scrollActions = scrollSlice.actions;
export var scrollReducer = scrollSlice.reducer;
