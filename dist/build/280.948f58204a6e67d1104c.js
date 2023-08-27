"use strict";
(self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[280], { 5280: function (e, n, a) { a.r(n), a.d(n, { default: function () { return K; } }); var r, t = a(5893), o = a(4184), l = a.n(o); !function (e) { e.INCORRECT_USER_DATA = "INCORRECT_USER_DATA", e.INCORRECT_AGE = "INCORRECT_AGE", e.INCORRECT_COUNTRY = "INCORRECT_COUNTRY", e.NO_DATA = "NO_DATA", e.SERVER_ERROR = "SERVER_ERROR"; }(r || (r = {})); var i, u = a(7168), c = (0, u.hg)("profile/fetchProfileData", (function (e, n) { return a = void 0, r = void 0, o = function () { var a, r, t; return function (e, n) { var a, r, t, o, l = { label: 0, sent: function () { if (1 & t[0])
                throw t[1]; return t[1]; }, trys: [], ops: [] }; return o = { next: i(0), throw: i(1), return: i(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function i(i) { return function (u) { return function (i) { if (a)
            throw new TypeError("Generator is already executing."); for (; o && (o = 0, i[0] && (l = 0)), l;)
            try {
                if (a = 1, r && (t = 2 & i[0] ? r.return : i[0] ? r.throw || ((t = r.return) && t.call(r), 0) : r.next) && !(t = t.call(r, i[1])).done)
                    return t;
                switch (r = 0, t && (i = [2 & i[0], t.value]), i[0]) {
                    case 0:
                    case 1:
                        t = i;
                        break;
                    case 4: return l.label++, { value: i[1], done: !1 };
                    case 5:
                        l.label++, r = i[1], i = [0];
                        continue;
                    case 7:
                        i = l.ops.pop(), l.trys.pop();
                        continue;
                    default:
                        if (!((t = (t = l.trys).length > 0 && t[t.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                            l = 0;
                            continue;
                        }
                        if (3 === i[0] && (!t || i[1] > t[0] && i[1] < t[3])) {
                            l.label = i[1];
                            break;
                        }
                        if (6 === i[0] && l.label < t[1]) {
                            l.label = t[1], t = i;
                            break;
                        }
                        if (t && l.label < t[2]) {
                            l.label = t[2], l.ops.push(i);
                            break;
                        }
                        t[2] && l.ops.pop(), l.trys.pop();
                        continue;
                }
                i = n.call(e, l);
            }
            catch (e) {
                i = [6, e], r = 0;
            }
            finally {
                a = t = 0;
            } if (5 & i[0])
            throw i[1]; return { value: i[0] ? i[1] : void 0, done: !0 }; }([i, u]); }; } }(this, (function (o) { switch (o.label) {
            case 0: a = n.extra, n.dispatch, r = n.rejectWithValue, o.label = 1;
            case 1: return o.trys.push([1, 3, , 4]), [4, a.api.get("/profile/".concat(e))];
            case 2:
                if (!(t = o.sent()).data)
                    throw new Error;
                return [2, t.data];
            case 3: return o.sent(), [2, r("error")];
            case 4: return [2];
        } })); }, new ((t = void 0) || (t = Promise))((function (e, n) { function l(e) { try {
            u(o.next(e));
        }
        catch (e) {
            n(e);
        } } function i(e) { try {
            u(o.throw(e));
        }
        catch (e) {
            n(e);
        } } function u(n) { var a; n.done ? e(n.value) : (a = n.value, a instanceof t ? a : new t((function (e) { e(a); }))).then(l, i); } u((o = o.apply(a, r || [])).next()); })); var a, r, t, o; })), s = function (e) { var n; return null === (n = e.profile) || void 0 === n ? void 0 : n.form; }, d = (0, u.hg)("profile/updateProfileData", (function (e, n) { return a = void 0, t = void 0, l = function () { var e, a, t, o, l, i; return function (e, n) { var a, r, t, o, l = { label: 0, sent: function () { if (1 & t[0])
                throw t[1]; return t[1]; }, trys: [], ops: [] }; return o = { next: i(0), throw: i(1), return: i(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function i(i) { return function (u) { return function (i) { if (a)
            throw new TypeError("Generator is already executing."); for (; o && (o = 0, i[0] && (l = 0)), l;)
            try {
                if (a = 1, r && (t = 2 & i[0] ? r.return : i[0] ? r.throw || ((t = r.return) && t.call(r), 0) : r.next) && !(t = t.call(r, i[1])).done)
                    return t;
                switch (r = 0, t && (i = [2 & i[0], t.value]), i[0]) {
                    case 0:
                    case 1:
                        t = i;
                        break;
                    case 4: return l.label++, { value: i[1], done: !1 };
                    case 5:
                        l.label++, r = i[1], i = [0];
                        continue;
                    case 7:
                        i = l.ops.pop(), l.trys.pop();
                        continue;
                    default:
                        if (!((t = (t = l.trys).length > 0 && t[t.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                            l = 0;
                            continue;
                        }
                        if (3 === i[0] && (!t || i[1] > t[0] && i[1] < t[3])) {
                            l.label = i[1];
                            break;
                        }
                        if (6 === i[0] && l.label < t[1]) {
                            l.label = t[1], t = i;
                            break;
                        }
                        if (t && l.label < t[2]) {
                            l.label = t[2], l.ops.push(i);
                            break;
                        }
                        t[2] && l.ops.pop(), l.trys.pop();
                        continue;
                }
                i = n.call(e, l);
            }
            catch (e) {
                i = [6, e], r = 0;
            }
            finally {
                a = t = 0;
            } if (5 & i[0])
            throw i[1]; return { value: i[0] ? i[1] : void 0, done: !0 }; }([i, u]); }; } }(this, (function (u) { switch (u.label) {
            case 0:
                if (e = n.extra, a = n.rejectWithValue, t = n.getState, o = s(t()), (l = function (e) { if (!e)
                    return [r.NO_DATA]; var n = e.first, a = e.lastname, t = e.age, o = e.country, l = []; return n && a || l.push(r.INCORRECT_USER_DATA), t && Number.isInteger(t) || l.push(r.INCORRECT_AGE), o || l.push(r.INCORRECT_COUNTRY), l; }(o)).length)
                    return [2, a(l)];
                u.label = 1;
            case 1: return u.trys.push([1, 3, , 4]), [4, e.api.put("/profile".concat(null == o ? void 0 : o.id), o)];
            case 2:
                if (!(i = u.sent()).data)
                    throw new Error;
                return [2, i.data];
            case 3: return u.sent(), [2, a([r.SERVER_ERROR])];
            case 4: return [2];
        } })); }, new ((o = void 0) || (o = Promise))((function (e, n) { function r(e) { try {
            u(l.next(e));
        }
        catch (e) {
            n(e);
        } } function i(e) { try {
            u(l.throw(e));
        }
        catch (e) {
            n(e);
        } } function u(n) { var a; n.done ? e(n.value) : (a = n.value, a instanceof o ? a : new o((function (e) { e(a); }))).then(r, i); } u((l = l.apply(a, t || [])).next()); })); var a, t, o, l; })), f = function () { return f = Object.assign || function (e) { for (var n, a = 1, r = arguments.length; a < r; a++)
            for (var t in n = arguments[a])
                Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]); return e; }, f.apply(this, arguments); }, v = (0, u.oM)({ name: "profile", initialState: { readonly: !0, isLoading: !1, error: void 0, data: void 0 }, reducers: { setReadonly: function (e, n) { e.readonly = n.payload; }, cancelEdit: function (e) { e.readonly = !0, e.form = e.data, e.validateErrors = void 0; }, updateProfile: function (e, n) { e.form = f(f({}, e.form), n.payload); } }, extraReducers: function (e) { e.addCase(c.pending, (function (e) { e.error = void 0, e.isLoading = !0; })).addCase(c.fulfilled, (function (e, n) { e.isLoading = !1, e.data = n.payload, e.form = n.payload; })).addCase(c.rejected, (function (e, n) { e.isLoading = !1, e.error = n.payload; })).addCase(d.pending, (function (e) { e.validateErrors = void 0, e.isLoading = !0; })).addCase(d.fulfilled, (function (e, n) { e.isLoading = !1, e.data = n.payload, e.form = n.payload, e.readonly = !0, e.error = void 0; })).addCase(d.rejected, (function (e, n) { e.isLoading = !1, e.validateErrors = n.payload; })); } }), p = v.actions, h = v.reducer, y = a(1072), C = a(4809), m = a(6925), g = a(4002), b = a(71); !function (e) { e.RUB = "RUB", e.EUR = "EUR", e.USD = "USD"; }(i || (i = {})); var R, N = a(7808), O = a(7294), x = Object.entries(i).map((function (e) { return { value: e[0], content: e[1] }; })), E = (0, O.memo)((function (e) { var n = e.className, a = e.value, r = e.onChange, o = e.readonly, i = (0, y.$G)().t, u = (0, O.useCallback)((function (e) { null == r || r(e); }), [r]); return (0, t.jsx)(N.P, { className: l()(n), label: i("Select currency"), options: x, value: a, onChange: u, readonly: o }); })); !function (e) { e.Russia = "Russia", e.Belarus = "Belarus", e.Ukraine = "Ukraine", e.Kazahstan = "Kazahstan", e.Armenia = "Armenia", e.Poland = "Poland"; }(R || (R = {})); var j = Object.entries(R).map((function (e) { return { value: e[0], content: e[1] }; })), T = (0, O.memo)((function (e) { var n = e.className, a = e.value, r = e.onChange, o = e.readonly, i = (0, y.$G)().t, u = (0, O.useCallback)((function (e) { null == r || r(e); }), [r]); return (0, t.jsx)(N.P, { className: l()(n), label: i("Select country"), options: j, value: a, onChange: u, readonly: o }); })); var w = { profileCard: "cH3_ZM3Y", input: "ZTyX8_n9", avatarWrapper: "bEFNSahN", loading: "t07ZxFGs", error: "i5YK3SSb", editing: "DjTe7269" }; var k = function (e) { var n, a = e.className, r = e.data, o = e.isLoading, i = e.error, u = e.readOnly, c = e.onChangeFirstname, s = e.onChangeLastname, d = e.onChangeAge, f = e.onChangeCity, v = e.onChangeAvatar, p = e.onChangeUsername, h = e.onChangeCountry, R = e.onChangeCurrency, N = (0, y.$G)("profile").t; return o ? (0, t.jsx)("div", { className: l()(w.profileCard, w.loading, a), children: (0, t.jsx)(g.a, {}) }) : i ? (0, t.jsx)("div", { className: l()(w.profileCard, w.error, a), children: (0, t.jsx)(C.xv, { theme: C.lg.ERROR, title: N("Upload error"), text: N("Try to reload page"), align: C.PH.CENTER }) }) : (0, t.jsx)("div", { className: l()(w.profileCard, a, (n = {}, n[w.editing] = !u, n)), children: (0, t.jsxs)("div", { className: w.data, children: [(null == r ? void 0 : r.avatar) && (0, t.jsx)("div", { className: w.avatarWrapper, children: (0, t.jsx)(b.q, { src: null == r ? void 0 : r.avatar }) }), (0, t.jsx)(m.I, { value: null == r ? void 0 : r.first, placeholder: N("First name"), className: w.input, onChange: c, readOnly: u }), (0, t.jsx)(m.I, { value: null == r ? void 0 : r.lastname, placeholder: N("Last name"), className: w.input, onChange: s, readOnly: u }), (0, t.jsx)(m.I, { value: null == r ? void 0 : r.age, placeholder: N("Age"), className: w.input, onChange: d, readOnly: u }), (0, t.jsx)(m.I, { value: null == r ? void 0 : r.city, placeholder: N("City"), className: w.input, onChange: f, readOnly: u }), (0, t.jsx)(m.I, { value: null == r ? void 0 : r.username, placeholder: N("Username"), className: w.input, onChange: p, readOnly: u }), (0, t.jsx)(m.I, { value: null == r ? void 0 : r.avatar, placeholder: N("Enter avatar link"), className: w.input, onChange: v, readOnly: u }), (0, t.jsx)(E, { className: w.input, value: null == r ? void 0 : r.currency, onChange: R, readonly: u }), (0, t.jsx)(T, { className: w.input, value: null == r ? void 0 : r.country, onChange: h, readonly: u })] }) }); }, P = function (e) { var n; return null === (n = e.profile) || void 0 === n ? void 0 : n.data; }, I = function (e) { var n; return null === (n = e.profile) || void 0 === n ? void 0 : n.readonly; }, A = function (e) { var n; return null === (n = e.profile) || void 0 === n ? void 0 : n.error; }, _ = function (e) { var n; return null === (n = e.profile) || void 0 === n ? void 0 : n.isLoading; }, S = a(5998), U = a(1302), D = a(3597), L = function (e) { var n; return null === (n = e.profile) || void 0 === n ? void 0 : n.validateErrors; }, G = a(9250), W = a(4905), B = a(2054), M = a(9161), F = a(9575); var V = { profilePageHeader: "FDWWAgRG", editBtn: "vP5lJqeW", btnsWrapper: "RSsPrFbn" }; var Y = function (e) { var n = e.className, a = (0, y.$G)("profile").t, r = (0, S.v9)(F.m5), o = (0, S.v9)(P), i = (null == r ? void 0 : r.id) === (null == o ? void 0 : o.id), u = (0, S.v9)(I), c = (0, U.T)(), s = (0, O.useCallback)((function () { c(p.setReadonly(!1)); }), [c]), f = (0, O.useCallback)((function () { c(p.cancelEdit()); }), [c]), v = (0, O.useCallback)((function () { c(d()); }), [c]); return (0, t.jsxs)("div", { className: l()(V.profilePageHeader, n), children: [(0, t.jsx)(C.xv, { title: a("Profile") }), i && (0, t.jsx)("div", { className: V.btnsWrapper, children: u ? (0, t.jsx)(M.zx, { className: V.editBtn, theme: M.bn.OUTLINE, onClick: s, children: a("Edit") }) : (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(M.zx, { className: V.editBtn, theme: M.bn.OUTLINE_RED, onClick: f, children: a("Cancel") }), (0, t.jsx)(M.zx, { className: V.saveBtn, theme: M.bn.OUTLINE, onClick: v, children: a("Save") })] }) })] }); }, z = { profile: h }; var K = function (e) { var n, a = e.className; (0, D.D)(z); var o = (0, y.$G)("profile").t, i = (0, G.UO)().id, u = (0, S.v9)(s), d = (0, S.v9)(_), f = (0, S.v9)(A), v = (0, S.v9)(I), h = (0, S.v9)(L), m = ((n = {})[r.SERVER_ERROR] = o("Server error"), n[r.INCORRECT_COUNTRY] = o("Incorrect region"), n[r.NO_DATA] = o("Data is not provided"), n[r.INCORRECT_USER_DATA] = o("Name and last name are required"), n[r.INCORRECT_AGE] = o("Incorrect age"), n), g = (0, U.T)(); (0, W.Q)((function () { i && g(c(i)); })); var b = (0, O.useCallback)((function (e) { g(p.updateProfile({ first: e || "" })); }), [g]), R = (0, O.useCallback)((function (e) { g(p.updateProfile({ lastname: e || "" })); }), [g]), N = (0, O.useCallback)((function (e) { g(p.updateProfile({ city: e || "" })); }), [g]), x = (0, O.useCallback)((function (e) { g(p.updateProfile({ age: Number(e || 0) })); }), [g]), E = (0, O.useCallback)((function (e) { g(p.updateProfile({ username: e || "" })); }), [g]), j = (0, O.useCallback)((function (e) { g(p.updateProfile({ avatar: e || "" })); }), [g]), T = (0, O.useCallback)((function (e) { g(p.updateProfile({ currency: e })); }), [g]), w = (0, O.useCallback)((function (e) { g(p.updateProfile({ country: e })); }), [g]); return (0, t.jsxs)(B.T, { className: l()(a), children: [(0, t.jsx)(Y, {}), (null == h ? void 0 : h.length) && h.map((function (e) { return (0, t.jsx)(C.xv, { theme: C.lg.ERROR, text: m[e] }, e); })), (0, t.jsx)(k, { data: u, isLoading: d, error: f, readOnly: v, onChangeFirstname: b, onChangeLastname: R, onChangeAge: x, onChangeCity: N, onChangeUsername: E, onChangeAvatar: j, onChangeCurrency: T, onChangeCountry: w })] }); }; }, 3597: function (e, n, a) { a.d(n, { D: function () { return o; } }); var r = a(7294), t = a(5998), o = function (e, n) { void 0 === n && (n = !0); var a = (0, t.I0)(), o = (0, t.oR)(); (0, r.useEffect)((function () { var r = o.reducerManager.getReducerMap(); return Object.entries(e).forEach((function (e) { var n = e[0], t = e[1]; r[n] || (o.reducerManager.add(n, t), a({ type: "@INIT ".concat(n, " reducer") })); })), function () { n && Object.entries(e).forEach((function (e) { var n = e[0]; e[1], o.reducerManager.remove(n), a({ type: "@DESTROY ".concat(n, " reducer") }); })); }; }), []); }; }, 71: function (e, n, a) { a.d(n, { q: function () { return i; } }); var r = a(5893), t = a(7294), o = a(4184), l = a.n(o); var i = function (e) { var n = e.className, a = e.src, o = e.size, i = e.alt, u = (0, t.useMemo)((function () { return { width: o || 100, height: o || 100 }; }), [o]); return (0, r.jsx)("img", { src: a, alt: i, style: u, className: l()("GCM50viD", n) }); }; }, 6925: function (e, n, a) { a.d(n, { I: function () { return u; } }); var r = a(5893), t = a(4184), o = a.n(t), l = a(7294); var i = function () { return i = Object.assign || function (e) { for (var n, a = 1, r = arguments.length; a < r; a++)
            for (var t in n = arguments[a])
                Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]); return e; }, i.apply(this, arguments); }, u = (0, l.memo)((function (e) { var n, a = e.className, t = e.value, l = e.onChange, u = e.type, c = void 0 === u ? "text" : u, s = e.readOnly, d = function (e, n) { var a = {}; for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (a[r] = e[r]); if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var t = 0;
            for (r = Object.getOwnPropertySymbols(e); t < r.length; t++)
                n.indexOf(r[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[t]) && (a[r[t]] = e[r[t]]);
        } return a; }(e, ["className", "value", "onChange", "type", "readOnly"]); return (0, r.jsx)("div", { className: o()("yiPASP1v", a, (n = {}, n.fTN1PnWu = s, n)), children: (0, r.jsx)("input", i({ className: "LVdIPwcx", type: c, value: t, readOnly: s, onChange: function (e) { null == l || l(e.target.value); } }, d)) }); })); }, 7808: function (e, n, a) { a.d(n, { P: function () { return i; } }); var r = a(5893), t = a(4184), o = a.n(t), l = a(7294); var i = function (e) { var n = e.className, a = e.label, t = e.options, i = e.onChange, u = e.value, c = e.readonly, s = (0, l.useMemo)((function () { return null == t ? void 0 : t.map((function (e) { return (0, r.jsx)("option", { className: "JkXz98qY", value: e.value, children: e.content }, e.value); })); }), [t]); return (0, r.jsxs)("div", { className: o()("rENkTUZK", n), children: [a && (0, r.jsx)("span", { className: "G1uuf7Bp", children: a }), (0, r.jsx)("select", { disabled: c, className: "VOKOuKGo", value: u, onChange: function (e) { i && i(e.target.value); }, children: s })] }); }; } }]);
