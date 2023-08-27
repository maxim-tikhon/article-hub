"use strict";
(self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[423], { 1013: function (e, t, n) { n.r(t), n.d(t, { default: function () { return M; } }); var r = n(5893), a = n(4184), o = n.n(a), i = n(1072), l = n(7294), c = n(5485), u = n(3597), s = n(4905), f = n(1302), d = n(5998), v = n(2054), p = n(9655); var h = { articlesPage: "P0AGARUu", list: "HJ_V1Yuo" }; var y = n(7168), g = n(3618), b = n(4641); var w = function (e) { var t; return (null === (t = e.articlesPage) || void 0 === t ? void 0 : t.isLoading) || !1; }, m = function (e) { var t; return (null === (t = e.articlesPage) || void 0 === t ? void 0 : t.view) || c.GA.GRID; }, P = function (e) { var t; return (null === (t = e.articlesPage) || void 0 === t ? void 0 : t.page) || 1; }, x = function (e) { var t, n; return null !== (n = null === (t = e.articlesPage) || void 0 === t ? void 0 : t.order) && void 0 !== n ? n : "asc"; }, S = function (e) { var t, n; return null !== (n = null === (t = e.articlesPage) || void 0 === t ? void 0 : t.sort) && void 0 !== n ? n : c.$B.CREATED; }, k = function (e) { var t, n; return null !== (n = null === (t = e.articlesPage) || void 0 === t ? void 0 : t.search) && void 0 !== n ? n : ""; }, j = function (e) { var t, n; return null !== (n = null === (t = e.articlesPage) || void 0 === t ? void 0 : t.type) && void 0 !== n ? n : c.Iq.ALL; }, C = (0, y.hg)("articlesPage/fetchArticlesList", (function (e, t) { return n = void 0, r = void 0, o = function () { var e, n, r, a, o, i, l, u, s, f; return function (e, t) { var n, r, a, o, i = { label: 0, sent: function () { if (1 & a[0])
                throw a[1]; return a[1]; }, trys: [], ops: [] }; return o = { next: l(0), throw: l(1), return: l(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function l(l) { return function (c) { return function (l) { if (n)
            throw new TypeError("Generator is already executing."); for (; o && (o = 0, l[0] && (i = 0)), i;)
            try {
                if (n = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done)
                    return a;
                switch (r = 0, a && (l = [2 & l[0], a.value]), l[0]) {
                    case 0:
                    case 1:
                        a = l;
                        break;
                    case 4: return i.label++, { value: l[1], done: !1 };
                    case 5:
                        i.label++, r = l[1], l = [0];
                        continue;
                    case 7:
                        l = i.ops.pop(), i.trys.pop();
                        continue;
                    default:
                        if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                            i = 0;
                            continue;
                        }
                        if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                            i.label = l[1];
                            break;
                        }
                        if (6 === l[0] && i.label < a[1]) {
                            i.label = a[1], a = l;
                            break;
                        }
                        if (a && i.label < a[2]) {
                            i.label = a[2], i.ops.push(l);
                            break;
                        }
                        a[2] && i.ops.pop(), i.trys.pop();
                        continue;
                }
                l = t.call(e, i);
            }
            catch (e) {
                l = [6, e], r = 0;
            }
            finally {
                n = a = 0;
            } if (5 & l[0])
            throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, c]); }; } }(this, (function (d) { switch (d.label) {
            case 0: e = t.extra, n = t.rejectWithValue, r = t.getState, a = function (e) { var t; return (null === (t = e.articlesPage) || void 0 === t ? void 0 : t.limit) || 12; }(r()), o = S(r()), i = x(r()), l = k(r()), u = P(r()), s = j(r()), d.label = 1;
            case 1: return d.trys.push([1, 3, , 4]), v = { sort: o, order: i, search: l, type: s }, window.history.pushState(null, "", function (e) { var t = new URLSearchParams(window.location.search); return Object.entries(e).forEach((function (e) { var n = e[0], r = e[1]; void 0 !== r && t.set(n, r); })), "?".concat(t.toString()); }(v)), [4, e.api.get("/articles", { params: { _expand: "user", _limit: a, _page: u, _sort: o, _order: i, q: l, type: s === c.Iq.ALL ? void 0 : s } })];
            case 2:
                if (!(f = d.sent()).data)
                    throw new Error;
                return [2, f.data];
            case 3: return d.sent(), [2, n("error")];
            case 4: return [2];
        } var v; })); }, new ((a = void 0) || (a = Promise))((function (e, t) { function i(e) { try {
            c(o.next(e));
        }
        catch (e) {
            t(e);
        } } function l(e) { try {
            c(o.throw(e));
        }
        catch (e) {
            t(e);
        } } function c(t) { var n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a((function (e) { e(n); }))).then(i, l); } c((o = o.apply(n, r || [])).next()); })); var n, r, a, o; })), O = (0, y.HF)({ selectId: function (e) { return e.id; } }), T = O.getSelectors((function (e) { return e.articlesPage || O.getInitialState(); })), A = (0, y.oM)({ name: "articlesPageSlice", initialState: O.getInitialState({ isLoading: !1, error: void 0, ids: [], entities: {}, view: c.GA.GRID, page: 1, hasMore: !0, initiated: !1, sort: b.$B.CREATED, search: "", order: "asc", type: b.Iq.ALL }), reducers: { setView: function (e, t) { e.view = t.payload, localStorage.setItem(g.f, t.payload); }, setPage: function (e, t) { e.page = t.payload; }, setOrder: function (e, t) { e.order = t.payload; }, setSort: function (e, t) { e.sort = t.payload; }, setType: function (e, t) { e.type = t.payload; }, setSearch: function (e, t) { e.search = t.payload; }, initState: function (e) { var t = localStorage.getItem(g.f); e.view = t, e.limit = t === c.GA.LIST ? 4 : 12, e.initiated = !0; } }, extraReducers: function (e) { e.addCase(C.pending, (function (e, t) { e.error = void 0, e.isLoading = !0, t.meta.arg.replace && O.removeAll(e); })).addCase(C.fulfilled, (function (e, t) { e.isLoading = !1, e.hasMore = t.payload.length === e.limit, t.meta.arg.replace ? O.setAll(e, t.payload) : O.addMany(e, t.payload); })).addCase(C.rejected, (function (e, t) { e.isLoading = !1, e.error = t.payload; })); } }), L = A.reducer, I = A.actions, N = (0, y.hg)("articlesPage/fetchNextArticlesPage", (function (e, t) { return n = void 0, r = void 0, o = function () { var e, n, r, a, o; return function (e, t) { var n, r, a, o, i = { label: 0, sent: function () { if (1 & a[0])
                throw a[1]; return a[1]; }, trys: [], ops: [] }; return o = { next: l(0), throw: l(1), return: l(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function l(l) { return function (c) { return function (l) { if (n)
            throw new TypeError("Generator is already executing."); for (; o && (o = 0, l[0] && (i = 0)), i;)
            try {
                if (n = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done)
                    return a;
                switch (r = 0, a && (l = [2 & l[0], a.value]), l[0]) {
                    case 0:
                    case 1:
                        a = l;
                        break;
                    case 4: return i.label++, { value: l[1], done: !1 };
                    case 5:
                        i.label++, r = l[1], l = [0];
                        continue;
                    case 7:
                        l = i.ops.pop(), i.trys.pop();
                        continue;
                    default:
                        if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                            i = 0;
                            continue;
                        }
                        if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                            i.label = l[1];
                            break;
                        }
                        if (6 === l[0] && i.label < a[1]) {
                            i.label = a[1], a = l;
                            break;
                        }
                        if (a && i.label < a[2]) {
                            i.label = a[2], i.ops.push(l);
                            break;
                        }
                        a[2] && i.ops.pop(), i.trys.pop();
                        continue;
                }
                l = t.call(e, i);
            }
            catch (e) {
                l = [6, e], r = 0;
            }
            finally {
                n = a = 0;
            } if (5 & l[0])
            throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, c]); }; } }(this, (function (i) { return e = t.getState, n = t.dispatch, r = function (e) { var t; return null === (t = e.articlesPage) || void 0 === t ? void 0 : t.hasMore; }(e()), a = P(e()), o = w(e()), r && !o && (n(I.setPage(a + 1)), n(C({}))), [2]; })); }, new ((a = void 0) || (a = Promise))((function (e, t) { function i(e) { try {
            c(o.next(e));
        }
        catch (e) {
            t(e);
        } } function l(e) { try {
            c(o.throw(e));
        }
        catch (e) {
            t(e);
        } } function c(t) { var n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a((function (e) { e(n); }))).then(i, l); } c((o = o.apply(n, r || [])).next()); })); var n, r, a, o; })), E = n(5022), G = n(6925); var R = { sortWrapper: "pyOjonnp", search: "QkNSez8q", tabs: "JHbc4jKB" }; var _ = (0, l.memo)((function (e) { var t, n, a = e.className, u = (0, i.$G)().t, s = (0, f.T)(), v = (0, d.v9)(m), p = (0, d.v9)(S), h = (0, d.v9)(x), y = (0, d.v9)(k), g = (0, d.v9)(j), b = (0, l.useCallback)((function () { s(C({ replace: !0 })); }), [s]), w = (t = b, 500, n = (0, l.useRef)(), (0, l.useEffect)((function () { return function () { n.current && clearTimeout(n.current); }; }), []), (0, l.useCallback)((function () { for (var e = [], r = 0; r < arguments.length; r++)
            e[r] = arguments[r]; n.current && clearTimeout(n.current), n.current = setTimeout((function () { t.apply(void 0, e); }), 500); }), [t, 500])), P = (0, l.useCallback)((function (e) { s(I.setView(e)); }), [s]), O = (0, l.useCallback)((function (e) { s(I.setSort(e)), s(I.setPage(1)), b(); }), [s, b]), T = (0, l.useCallback)((function (e) { s(I.setOrder(e)), s(I.setPage(1)), b(); }), [s, b]), A = (0, l.useCallback)((function (e) { s(I.setSearch(e)), s(I.setPage(1)), w(); }), [s, w]), L = (0, l.useCallback)((function (e) { s(I.setType(e)), s(I.setPage(1)), b(); }), [s, b]); return (0, r.jsxs)("div", { className: o()(R.articlesPageFilters, a), children: [(0, r.jsxs)("div", { className: R.sortWrapper, children: [(0, r.jsx)(c.xT, { order: h, sort: p, onChangeOrder: T, onChangeSort: O }), (0, r.jsx)(c.Vv, { view: v, onViewClick: P })] }), (0, r.jsx)(E.Z, { className: R.search, children: (0, r.jsx)(G.I, { onChange: A, value: y, placeholder: u("Search") }) }), (0, r.jsx)(c.XL, { value: g, onChangeType: L, className: R.tabs })] }); })), V = (0, y.hg)("articlesPage/initArticlesPage", (function (e, t) { return n = void 0, r = void 0, o = function () { var n, r, a, o, i, l, c; return function (e, t) { var n, r, a, o, i = { label: 0, sent: function () { if (1 & a[0])
                throw a[1]; return a[1]; }, trys: [], ops: [] }; return o = { next: l(0), throw: l(1), return: l(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function l(l) { return function (c) { return function (l) { if (n)
            throw new TypeError("Generator is already executing."); for (; o && (o = 0, l[0] && (i = 0)), i;)
            try {
                if (n = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done)
                    return a;
                switch (r = 0, a && (l = [2 & l[0], a.value]), l[0]) {
                    case 0:
                    case 1:
                        a = l;
                        break;
                    case 4: return i.label++, { value: l[1], done: !1 };
                    case 5:
                        i.label++, r = l[1], l = [0];
                        continue;
                    case 7:
                        l = i.ops.pop(), i.trys.pop();
                        continue;
                    default:
                        if (!((a = (a = i.trys).length > 0 && a[a.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                            i = 0;
                            continue;
                        }
                        if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                            i.label = l[1];
                            break;
                        }
                        if (6 === l[0] && i.label < a[1]) {
                            i.label = a[1], a = l;
                            break;
                        }
                        if (a && i.label < a[2]) {
                            i.label = a[2], i.ops.push(l);
                            break;
                        }
                        a[2] && i.ops.pop(), i.trys.pop();
                        continue;
                }
                l = t.call(e, i);
            }
            catch (e) {
                l = [6, e], r = 0;
            }
            finally {
                n = a = 0;
            } if (5 & l[0])
            throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, c]); }; } }(this, (function (u) { return n = t.getState, r = t.dispatch, a = function (e) { var t; return null === (t = e.articlesPage) || void 0 === t ? void 0 : t.initiated; }(n()), a || (o = e.get("order"), i = e.get("sort"), l = e.get("search"), c = e.get("type"), o && r(I.setOrder(o)), i && r(I.setSort(i)), l && r(I.setSearch(l)), c && r(I.setType(c)), r(I.initState()), r(C({}))), [2]; })); }, new ((a = void 0) || (a = Promise))((function (e, t) { function i(e) { try {
            c(o.next(e));
        }
        catch (e) {
            t(e);
        } } function l(e) { try {
            c(o.throw(e));
        }
        catch (e) {
            t(e);
        } } function c(t) { var n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a((function (e) { e(n); }))).then(i, l); } c((o = o.apply(n, r || [])).next()); })); var n, r, a, o; })), D = { articlesPage: L }, q = function (e) { var t = e.className; (0, u.D)(D, !1), (0, i.$G)().t; var n = (0, f.T)(), a = (0, d.v9)(T.selectAll), y = (0, d.v9)(w), g = (0, d.v9)(m), b = (0, p.lr)()[0]; (0, s.Q)((function () { n(V(b)); })); var P = (0, l.useCallback)((function () { n(N()); }), [n]); return (0, r.jsxs)(v.T, { className: o()(h.articlePage, t), onScrollEnd: P, children: [(0, r.jsx)(_, {}), (0, r.jsx)(c.wD, { isLoading: y, view: g, articles: a, className: h.list })] }); }; var M = (0, l.memo)(q); }, 6925: function (e, t, n) { n.d(t, { I: function () { return c; } }); var r = n(5893), a = n(4184), o = n.n(a), i = n(7294); var l = function () { return l = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var a in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, l.apply(this, arguments); }, c = (0, i.memo)((function (e) { var t, n = e.className, a = e.value, i = e.onChange, c = e.type, u = void 0 === c ? "text" : c, s = e.readOnly, f = function (e, t) { var n = {}; for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]); if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
        } return n; }(e, ["className", "value", "onChange", "type", "readOnly"]); return (0, r.jsx)("div", { className: o()("yiPASP1v", n, (t = {}, t.fTN1PnWu = s, t)), children: (0, r.jsx)("input", l({ className: "LVdIPwcx", type: u, value: a, readOnly: s, onChange: function (e) { null == i || i(e.target.value); } }, f)) }); })); } }]);
