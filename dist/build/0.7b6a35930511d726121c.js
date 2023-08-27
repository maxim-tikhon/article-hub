"use strict";
(self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[0], { 8e3: function (e, n, r) { r.r(n), r.d(n, { default: function () { return N; } }); var t = r(5893), a = r(4184), o = r.n(a), i = r(1072), u = r(9161), l = r(6925), c = r(7294), s = r(5998), f = r(4809), d = r(3597), p = r(1302), v = r(7168), h = r(9575), y = r(3618), b = (0, v.hg)("login/loginByUsername", (function (e, n) { return r = void 0, t = void 0, o = function () { var r, t, a, o; return function (e, n) { var r, t, a, o, i = { label: 0, sent: function () { if (1 & a[0])
                throw a[1]; return a[1]; }, trys: [], ops: [] }; return o = { next: u(0), throw: u(1), return: u(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function u(u) { return function (l) { return function (u) { if (r)
            throw new TypeError("Generator is already executing."); for (; o && (o = 0, u[0] && (i = 0)), i;)
            try {
                if (r = 1, t && (a = 2 & u[0] ? t.return : u[0] ? t.throw || ((a = t.return) && a.call(t), 0) : t.next) && !(a = a.call(t, u[1])).done)
                    return a;
                switch (t = 0, a && (u = [2 & u[0], a.value]), u[0]) {
                    case 0:
                    case 1:
                        a = u;
                        break;
                    case 4: return i.label++, { value: u[1], done: !1 };
                    case 5:
                        i.label++, t = u[1], u = [0];
                        continue;
                    case 7:
                        u = i.ops.pop(), i.trys.pop();
                        continue;
                    default:
                        if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                            i = 0;
                            continue;
                        }
                        if (3 === u[0] && (!a || u[1] > a[0] && u[1] < a[3])) {
                            i.label = u[1];
                            break;
                        }
                        if (6 === u[0] && i.label < a[1]) {
                            i.label = a[1], a = u;
                            break;
                        }
                        if (a && i.label < a[2]) {
                            i.label = a[2], i.ops.push(u);
                            break;
                        }
                        a[2] && i.ops.pop(), i.trys.pop();
                        continue;
                }
                u = n.call(e, i);
            }
            catch (e) {
                u = [6, e], t = 0;
            }
            finally {
                r = a = 0;
            } if (5 & u[0])
            throw u[1]; return { value: u[0] ? u[1] : void 0, done: !0 }; }([u, l]); }; } }(this, (function (i) { switch (i.label) {
            case 0: r = n.extra, t = n.dispatch, a = n.rejectWithValue, i.label = 1;
            case 1: return i.trys.push([1, 3, , 4]), [4, r.api.post("/login", e)];
            case 2:
                if (!(o = i.sent()).data)
                    throw new Error;
                return localStorage.setItem(y.z, JSON.stringify(o.data)), t(h.hI.setAuthData(o.data)), [2, o.data];
            case 3: return i.sent(), [2, a("error")];
            case 4: return [2];
        } })); }, new ((a = void 0) || (a = Promise))((function (e, n) { function i(e) { try {
            l(o.next(e));
        }
        catch (e) {
            n(e);
        } } function u(e) { try {
            l(o.throw(e));
        }
        catch (e) {
            n(e);
        } } function l(n) { var r; n.done ? e(n.value) : (r = n.value, r instanceof a ? r : new a((function (e) { e(r); }))).then(i, u); } l((o = o.apply(r, t || [])).next()); })); var r, t, a, o; })), m = (0, v.oM)({ name: "login", initialState: { username: "", password: "", isLoading: !1 }, reducers: { setUsername: function (e, n) { e.username = n.payload; }, setPassword: function (e, n) { e.password = n.payload; } }, extraReducers: function (e) { e.addCase(b.pending, (function (e) { e.error = void 0, e.isLoading = !0; })).addCase(b.fulfilled, (function (e, n) { e.isLoading = !1; })).addCase(b.rejected, (function (e, n) { e.isLoading = !1, e.error = n.payload; })); } }), g = m.actions, w = m.reducer; var x = "OE4mCaO1"; var O = function (e) { var n; return (null === (n = null == e ? void 0 : e.loginForm) || void 0 === n ? void 0 : n.username) || ""; }, j = function (e) { var n; return null === (n = null == e ? void 0 : e.loginForm) || void 0 === n ? void 0 : n.error; }, k = function (e) { var n; return (null === (n = null == e ? void 0 : e.loginForm) || void 0 === n ? void 0 : n.isLoading) || !1; }, C = function (e) { var n; return (null === (n = null == e ? void 0 : e.loginForm) || void 0 === n ? void 0 : n.password) || ""; }, E = { loginForm: w }; var N = (0, c.memo)((function (e) { var n = e.className, r = e.onSuccess; (0, d.D)(E); var a = (0, i.$G)().t, v = (0, p.T)(), h = (0, s.v9)(O), y = (0, s.v9)(C), m = (0, s.v9)(k), w = (0, s.v9)(j), N = (0, c.useCallback)((function (e) { v(g.setUsername(e)); }), [v]), P = (0, c.useCallback)((function (e) { v(g.setPassword(e)); }), [v]), S = (0, c.useCallback)((function () { return e = void 0, n = void 0, a = function () { return function (e, n) { var r, t, a, o, i = { label: 0, sent: function () { if (1 & a[0])
                throw a[1]; return a[1]; }, trys: [], ops: [] }; return o = { next: u(0), throw: u(1), return: u(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function u(u) { return function (l) { return function (u) { if (r)
            throw new TypeError("Generator is already executing."); for (; o && (o = 0, u[0] && (i = 0)), i;)
            try {
                if (r = 1, t && (a = 2 & u[0] ? t.return : u[0] ? t.throw || ((a = t.return) && a.call(t), 0) : t.next) && !(a = a.call(t, u[1])).done)
                    return a;
                switch (t = 0, a && (u = [2 & u[0], a.value]), u[0]) {
                    case 0:
                    case 1:
                        a = u;
                        break;
                    case 4: return i.label++, { value: u[1], done: !1 };
                    case 5:
                        i.label++, t = u[1], u = [0];
                        continue;
                    case 7:
                        u = i.ops.pop(), i.trys.pop();
                        continue;
                    default:
                        if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                            i = 0;
                            continue;
                        }
                        if (3 === u[0] && (!a || u[1] > a[0] && u[1] < a[3])) {
                            i.label = u[1];
                            break;
                        }
                        if (6 === u[0] && i.label < a[1]) {
                            i.label = a[1], a = u;
                            break;
                        }
                        if (a && i.label < a[2]) {
                            i.label = a[2], i.ops.push(u);
                            break;
                        }
                        a[2] && i.ops.pop(), i.trys.pop();
                        continue;
                }
                u = n.call(e, i);
            }
            catch (e) {
                u = [6, e], t = 0;
            }
            finally {
                r = a = 0;
            } if (5 & u[0])
            throw u[1]; return { value: u[0] ? u[1] : void 0, done: !0 }; }([u, l]); }; } }(this, (function (e) { switch (e.label) {
            case 0: return [4, v(b({ username: h, password: y }))];
            case 1: return "fulfilled" === e.sent().meta.requestStatus && r(), [2];
        } })); }, new ((t = void 0) || (t = Promise))((function (r, o) { function i(e) { try {
            l(a.next(e));
        }
        catch (e) {
            o(e);
        } } function u(e) { try {
            l(a.throw(e));
        }
        catch (e) {
            o(e);
        } } function l(e) { var n; e.done ? r(e.value) : (n = e.value, n instanceof t ? n : new t((function (e) { e(n); }))).then(i, u); } l((a = a.apply(e, n || [])).next()); })); var e, n, t, a; }), [v, y, h, r]); return (0, t.jsxs)("div", { className: o()("rAkAfKLO", n), children: [(0, t.jsx)(f.xv, { title: a("Auth form") }), w && (0, t.jsx)(f.xv, { text: a("Invalid username or password"), theme: f.lg.ERROR }), (0, t.jsx)(l.I, { type: "text", className: x, placeholder: a("Enter username"), autoFocus: !0, onChange: N, value: h }), (0, t.jsx)(l.I, { type: "password", className: x, placeholder: a("Enter password"), onChange: P, value: y }), (0, t.jsx)(u.zx, { theme: u.bn.OUTLINE, className: "CPLVXODU", onClick: S, disabled: m, children: a("Login") })] }); })); }, 3597: function (e, n, r) { r.d(n, { D: function () { return o; } }); var t = r(7294), a = r(5998), o = function (e, n) { void 0 === n && (n = !0); var r = (0, a.I0)(), o = (0, a.oR)(); (0, t.useEffect)((function () { var t = o.reducerManager.getReducerMap(); return Object.entries(e).forEach((function (e) { var n = e[0], a = e[1]; t[n] || (o.reducerManager.add(n, a), r({ type: "@INIT ".concat(n, " reducer") })); })), function () { n && Object.entries(e).forEach((function (e) { var n = e[0]; e[1], o.reducerManager.remove(n), r({ type: "@DESTROY ".concat(n, " reducer") }); })); }; }), []); }; }, 6925: function (e, n, r) { r.d(n, { I: function () { return l; } }); var t = r(5893), a = r(4184), o = r.n(a), i = r(7294); var u = function () { return u = Object.assign || function (e) { for (var n, r = 1, t = arguments.length; r < t; r++)
            for (var a in n = arguments[r])
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); return e; }, u.apply(this, arguments); }, l = (0, i.memo)((function (e) { var n, r = e.className, a = e.value, i = e.onChange, l = e.type, c = void 0 === l ? "text" : l, s = e.readOnly, f = function (e, n) { var r = {}; for (var t in e)
            Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]); if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (t = Object.getOwnPropertySymbols(e); a < t.length; a++)
                n.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[a]) && (r[t[a]] = e[t[a]]);
        } return r; }(e, ["className", "value", "onChange", "type", "readOnly"]); return (0, t.jsx)("div", { className: o()("yiPASP1v", r, (n = {}, n.fTN1PnWu = s, n)), children: (0, t.jsx)("input", u({ className: "LVdIPwcx", type: c, value: a, readOnly: s, onChange: function (e) { null == i || i(e.target.value); } }, f)) }); })); } }]);
