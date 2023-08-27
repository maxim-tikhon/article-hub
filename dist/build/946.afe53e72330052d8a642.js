"use strict";
(self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[946], { 9e3: function (e, t, n) { n.r(t), n.d(t, { default: function () { return Q; } }); var r = n(5893), a = n(4184), i = n.n(a), o = n(1072), s = n(7294), c = n(5485), l = n(9250), u = n(4809); var d = { commentList: "m8MO_cC4", comment: "zo5NFi5H" }; var f = n(71), m = n(1138), h = n(3048), v = n(491); var p = "ghhhlnG6", x = "dsH_3Oqu", b = "Ks7Kyp_K", y = "dw82WMzO"; var g = (0, s.memo)((function (e) { var t = e.className, n = e.comment; return e.isLoading ? (0, r.jsxs)("div", { className: i()(p, t, "V0iZ1Un3"), children: [(0, r.jsxs)("div", { className: x, children: [(0, r.jsx)(m.O, { width: 30, height: 30, border: "50%" }), (0, r.jsx)(m.O, { height: 16, width: 100, className: y })] }), (0, r.jsx)(m.O, { className: b, width: "100%", height: 50 })] }) : n ? (0, r.jsxs)("div", { className: i()(p, t), children: [(0, r.jsxs)(h.F, { to: "".concat(v.h3.profile).concat(n.user.id), className: x, children: [n.user.avatar ? (0, r.jsx)(f.q, { size: 30, src: n.user.avatar }) : null, (0, r.jsx)(u.xv, { className: y, title: n.user.username })] }), (0, r.jsx)(u.xv, { className: b, text: n.text })] }) : null; })), w = (0, s.memo)((function (e) { var t = e.className, n = e.comments, a = e.isLoading, s = (0, o.$G)().t; return a ? (0, r.jsxs)("div", { className: i()(d.CommentList, {}, [t]), children: [(0, r.jsx)(g, { isLoading: !0 }), (0, r.jsx)(g, { isLoading: !0 }), (0, r.jsx)(g, { isLoading: !0 })] }) : (0, r.jsx)("div", { className: i()(d.commentList, t), children: (null == n ? void 0 : n.length) ? n.map((function (e) { return (0, r.jsx)(g, { isLoading: a, className: d.comment, comment: e }, e.id); })) : (0, r.jsx)(u.xv, { text: s("No comments") }) }); })), j = n(3597), N = n(5998), L = n(1302), k = n(4905), C = (0, s.lazy)((function () { return n.e(917).then(n.bind(n, 7917)); })), S = n(2054); var I = "_UP7ytME", D = "Ei6tp5Fe"; var E = n(7168), P = (0, E.hg)("articleDetails/fetchCommentsByArticleId", (function (e, t) { return n = void 0, r = void 0, i = function () { var n, r, a; return function (e, t) { var n, r, a, i, o = { label: 0, sent: function () { if (1 & a[0])
                throw a[1]; return a[1]; }, trys: [], ops: [] }; return i = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function () { return this; }), i; function s(s) { return function (c) { return function (s) { if (n)
            throw new TypeError("Generator is already executing."); for (; i && (i = 0, s[0] && (o = 0)), o;)
            try {
                if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done)
                    return a;
                switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                    case 0:
                    case 1:
                        a = s;
                        break;
                    case 4: return o.label++, { value: s[1], done: !1 };
                    case 5:
                        o.label++, r = s[1], s = [0];
                        continue;
                    case 7:
                        s = o.ops.pop(), o.trys.pop();
                        continue;
                    default:
                        if (!((a = (a = o.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                            o = 0;
                            continue;
                        }
                        if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                            o.label = s[1];
                            break;
                        }
                        if (6 === s[0] && o.label < a[1]) {
                            o.label = a[1], a = s;
                            break;
                        }
                        if (a && o.label < a[2]) {
                            o.label = a[2], o.ops.push(s);
                            break;
                        }
                        a[2] && o.ops.pop(), o.trys.pop();
                        continue;
                }
                s = t.call(e, o);
            }
            catch (e) {
                s = [6, e], r = 0;
            }
            finally {
                n = a = 0;
            } if (5 & s[0])
            throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; }([s, c]); }; } }(this, (function (i) { switch (i.label) {
            case 0:
                if (n = t.extra, r = t.rejectWithValue, !e)
                    return [2, r("error")];
                i.label = 1;
            case 1: return i.trys.push([1, 3, , 4]), [4, n.api.get("/comments", { params: { articleId: e, _expand: "user" } })];
            case 2:
                if (!(a = i.sent()).data)
                    throw new Error;
                return [2, a.data];
            case 3: return i.sent(), [2, r("error")];
            case 4: return [2];
        } })); }, new ((a = void 0) || (a = Promise))((function (e, t) { function o(e) { try {
            c(i.next(e));
        }
        catch (e) {
            t(e);
        } } function s(e) { try {
            c(i.throw(e));
        }
        catch (e) {
            t(e);
        } } function c(t) { var n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a((function (e) { e(n); }))).then(o, s); } c((i = i.apply(n, r || [])).next()); })); var n, r, a, i; })), _ = (0, E.HF)({ selectId: function (e) { return e.id; } }), z = _.getSelectors((function (e) { var t; return (null === (t = e.articleDetailsPage) || void 0 === t ? void 0 : t.comments) || _.getInitialState(); })), O = (0, E.oM)({ name: "articleComments", initialState: _.getInitialState({ isLoading: !1, error: void 0, ids: [], entities: {} }), reducers: {}, extraReducers: function (e) { e.addCase(P.pending, (function (e) { e.error = void 0, e.isLoading = !0; })).addCase(P.fulfilled, (function (e, t) { e.isLoading = !1, _.setAll(e, t.payload); })).addCase(P.rejected, (function (e, t) { e.isLoading = !1, e.error = t.payload; })); } }).reducer, A = function (e) { var t, n; return null === (n = null === (t = e.articleDetailsPage) || void 0 === t ? void 0 : t.comments) || void 0 === n ? void 0 : n.isLoading; }, G = n(9575), T = n(123), F = (0, E.hg)("articleDetails/addCommentForArticle", (function (e, t) { return n = void 0, r = void 0, i = function () { var n, r, a, i, o, s, c; return function (e, t) { var n, r, a, i, o = { label: 0, sent: function () { if (1 & a[0])
                throw a[1]; return a[1]; }, trys: [], ops: [] }; return i = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function () { return this; }), i; function s(s) { return function (c) { return function (s) { if (n)
            throw new TypeError("Generator is already executing."); for (; i && (i = 0, s[0] && (o = 0)), o;)
            try {
                if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done)
                    return a;
                switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                    case 0:
                    case 1:
                        a = s;
                        break;
                    case 4: return o.label++, { value: s[1], done: !1 };
                    case 5:
                        o.label++, r = s[1], s = [0];
                        continue;
                    case 7:
                        s = o.ops.pop(), o.trys.pop();
                        continue;
                    default:
                        if (!((a = (a = o.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                            o = 0;
                            continue;
                        }
                        if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                            o.label = s[1];
                            break;
                        }
                        if (6 === s[0] && o.label < a[1]) {
                            o.label = a[1], a = s;
                            break;
                        }
                        if (a && o.label < a[2]) {
                            o.label = a[2], o.ops.push(s);
                            break;
                        }
                        a[2] && o.ops.pop(), o.trys.pop();
                        continue;
                }
                s = t.call(e, o);
            }
            catch (e) {
                s = [6, e], r = 0;
            }
            finally {
                n = a = 0;
            } if (5 & s[0])
            throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; }([s, c]); }; } }(this, (function (l) { switch (l.label) {
            case 0:
                if (n = t.extra, r = t.dispatch, a = t.rejectWithValue, i = t.getState, o = (0, G.m5)(i()), s = (0, T.wq)(i()), !o || !e || !s)
                    return [2, a("no data")];
                l.label = 1;
            case 1: return l.trys.push([1, 3, , 4]), [4, n.api.post("/comments", { articleId: s.id, userId: o.id, text: e })];
            case 2:
                if (!(c = l.sent()).data)
                    throw new Error;
                return r(P(s.id)), [2, c.data];
            case 3: return l.sent(), [2, a("error")];
            case 4: return [2];
        } })); }, new ((a = void 0) || (a = Promise))((function (e, t) { function o(e) { try {
            c(i.next(e));
        }
        catch (e) {
            t(e);
        } } function s(e) { try {
            c(i.throw(e));
        }
        catch (e) {
            t(e);
        } } function c(t) { var n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a((function (e) { e(n); }))).then(o, s); } c((i = i.apply(n, r || [])).next()); })); var n, r, a, i; })), H = (0, E.hg)("articleDetails/fetchArticleRecommendations", (function (e, t) { return n = void 0, r = void 0, i = function () { var e, n, r; return function (e, t) { var n, r, a, i, o = { label: 0, sent: function () { if (1 & a[0])
                throw a[1]; return a[1]; }, trys: [], ops: [] }; return i = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function () { return this; }), i; function s(s) { return function (c) { return function (s) { if (n)
            throw new TypeError("Generator is already executing."); for (; i && (i = 0, s[0] && (o = 0)), o;)
            try {
                if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done)
                    return a;
                switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                    case 0:
                    case 1:
                        a = s;
                        break;
                    case 4: return o.label++, { value: s[1], done: !1 };
                    case 5:
                        o.label++, r = s[1], s = [0];
                        continue;
                    case 7:
                        s = o.ops.pop(), o.trys.pop();
                        continue;
                    default:
                        if (!((a = (a = o.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                            o = 0;
                            continue;
                        }
                        if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                            o.label = s[1];
                            break;
                        }
                        if (6 === s[0] && o.label < a[1]) {
                            o.label = a[1], a = s;
                            break;
                        }
                        if (a && o.label < a[2]) {
                            o.label = a[2], o.ops.push(s);
                            break;
                        }
                        a[2] && o.ops.pop(), o.trys.pop();
                        continue;
                }
                s = t.call(e, o);
            }
            catch (e) {
                s = [6, e], r = 0;
            }
            finally {
                n = a = 0;
            } if (5 & s[0])
            throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; }([s, c]); }; } }(this, (function (a) { switch (a.label) {
            case 0: e = t.extra, n = t.rejectWithValue, a.label = 1;
            case 1: return a.trys.push([1, 3, , 4]), [4, e.api.get("/articles", { params: { _expand: "user", _limit: 4 } })];
            case 2:
                if (!(r = a.sent()).data)
                    throw new Error;
                return [2, r.data];
            case 3: return a.sent(), [2, n("error")];
            case 4: return [2];
        } })); }, new ((a = void 0) || (a = Promise))((function (e, t) { function o(e) { try {
            c(i.next(e));
        }
        catch (e) {
            t(e);
        } } function s(e) { try {
            c(i.throw(e));
        }
        catch (e) {
            t(e);
        } } function c(t) { var n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a((function (e) { e(n); }))).then(o, s); } c((i = i.apply(n, r || [])).next()); })); var n, r, a, i; })), U = (0, E.HF)({ selectId: function (e) { return e.id; } }), q = U.getSelectors((function (e) { var t; return (null === (t = e.articleDetailsPage) || void 0 === t ? void 0 : t.recommendations) || U.getInitialState(); })), M = (0, E.oM)({ name: "articleRecommendations", initialState: U.getInitialState({ isLoading: !1, error: void 0, ids: [], entities: {} }), reducers: {}, extraReducers: function (e) { e.addCase(H.pending, (function (e) { e.error = void 0, e.isLoading = !0; })).addCase(H.fulfilled, (function (e, t) { e.isLoading = !1, U.setAll(e, t.payload); })).addCase(H.rejected, (function (e, t) { e.isLoading = !1, e.error = t.payload; })); } }).reducer, R = function (e) { var t, n; return null === (n = null === (t = e.articleDetailsPage) || void 0 === t ? void 0 : t.recommendations) || void 0 === n ? void 0 : n.isLoading; }, V = (0, n(5857).UY)({ recommendations: M, comments: O }), W = n(9161), K = (0, n(573).P1)(c.wq, G.m5, (function (e, t) { return !(!e || !t) && e.user.id === t.id; })); var $ = (0, s.memo)((function (e) { var t = e.className, n = (0, o.$G)().t, a = (0, l.s0)(), u = (0, N.v9)(K), d = (0, N.v9)(c.wq), f = (0, s.useCallback)((function () { a(v.h3.articles); }), [a]), m = (0, s.useCallback)((function () { a("".concat(v.h3.article_details).concat(null == d ? void 0 : d.id, "/edit")); }), [null == d ? void 0 : d.id, a]); return (0, r.jsxs)("div", { className: i()("borzsIrg", t), children: [(0, r.jsx)(W.zx, { theme: W.bn.OUTLINE, onClick: f, children: n("Back to the list") }), u && (0, r.jsx)(W.zx, { className: "XdnP3e6a", theme: W.bn.OUTLINE, onClick: m, children: n("Edit") })] }); })), B = { articleDetailsPage: V }, Y = function (e) { (0, j.D)(B); var t = e.className, n = (0, o.$G)("article-details").t, a = (0, l.UO)().id, d = (0, N.v9)(z.selectAll), f = (0, N.v9)(A), m = (0, N.v9)(q.selectAll), h = (0, N.v9)(R), v = (0, L.T)(); (0, k.Q)((function () { v(P(a)), v(H()); })); var p = (0, s.useCallback)((function (e) { v(F(e)); }), [v]); return a ? (0, r.jsxs)(S.T, { className: i()(I, t), children: [(0, r.jsx)($, {}), (0, r.jsx)(c.D0, { id: a }), (0, r.jsx)(u.xv, { size: u.yH.L, className: D, title: n("Recommended") }), (0, r.jsx)(c.wD, { articles: m, isLoading: h, className: "j7ice3kY", target: "_blank" }), (0, r.jsx)(u.xv, { size: u.yH.L, className: D, title: n("Comments") }), (0, r.jsx)(C, { onSendComment: p }), (0, r.jsx)(w, { comments: d, isLoading: f })] }) : (0, r.jsx)("div", { className: i()(I, t), children: n("Article not found") }); }; var Q = (0, s.memo)(Y); } }]);
