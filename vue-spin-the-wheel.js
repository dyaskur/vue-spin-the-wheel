import { ref as K, computed as C, onMounted as Tt, onUpdated as At, watch as St, defineComponent as Ct, openBlock as F, createElementBlock as N, createElementVNode as ye, normalizeStyle as pe, unref as m, renderSlot as $e, toDisplayString as Ot } from "vue";
function It(e, t) {
  const r = [];
  for (; e !== ""; ) {
    let a = e.substr(0, t);
    if (e.charAt(t) !== "" && e.charAt(t) !== " ") {
      const i = a.lastIndexOf(" ");
      i !== -1 && (a = a.substr(0, i));
    }
    e = e.replace(a, "").trim(), r.push(a);
  }
  return r;
}
const Pt = {
  radius: 250,
  // Radius of a circle
  textRadius: 190,
  // The distance between the prize location and the center of the circle
  textLength: 6,
  // Prize text 1 line of characters, maximum 2 lines
  textDirection: "horizontal",
  // Prize Text Direction
  lineHeight: 20,
  // Text line height
  borderWidth: 0,
  // Outer border of circle
  borderColor: "transparent",
  // The color of the outer border
  btnText: "Spin",
  // The text of the start button
  btnWidth: 140,
  // Button width
  fontSize: 34
  // Prize text font size
};
function wt(e) {
  const t = K(), r = C(() => Object.assign(Pt, e.canvas));
  function a() {
    const n = t.value;
    if (n.getContext) {
      const { radius: s, textRadius: o, borderWidth: c, borderColor: u, fontSize: v } = r.value, l = Math.PI / (e.prizes.length / 2), f = n.getContext("2d");
      f.clearRect(0, 0, s * 2, s * 2), f.strokeStyle = u, f.lineWidth = c * 2, f.font = `${v}px Arial`, e.prizes.forEach((y, _) => {
        const g = _ * l - Math.PI / 2;
        f.fillStyle = y.bgColor, f.beginPath(), f.arc(s, s, s - c, g, g + l, !1), f.stroke(), f.arc(s, s, 0, g + l, g, !0), f.fill(), f.save(), f.fillStyle = y.color, f.translate(s + Math.cos(g + l / 2) * o, s + Math.sin(g + l / 2) * o), i(f, g, l, y.name), f.restore();
      });
    }
  }
  function i(n, s, o, c) {
    const { lineHeight: u, textLength: v, textDirection: l } = r.value, f = It(c, v);
    f !== null && (l === "vertical" ? n.rotate(s + o / 2 + Math.PI) : n.rotate(s + o / 2 + Math.PI / 2), f.forEach((y, _) => {
      let g = -n.measureText(y).width / 2, T = (_ + 1) * u;
      l === "vertical" && (g = 0, T = (_ + 1) * u - f.length * u / 2), n.fillText(y, g, T);
    }));
  }
  return Tt(() => {
    e.type === "canvas" && a();
  }), At(() => {
    e.type === "canvas" && a();
  }), {
    wheelEl: t,
    canvasConfig: r,
    drawCanvas: a
  };
}
var B = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ve(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Et() {
  this.__data__ = [], this.size = 0;
}
var Mt = Et;
function xt(e, t) {
  return e === t || e !== e && t !== t;
}
var fe = xt, Dt = fe;
function Rt(e, t) {
  for (var r = e.length; r--; )
    if (Dt(e[r][0], t))
      return r;
  return -1;
}
var k = Rt, Lt = k, jt = Array.prototype, Gt = jt.splice;
function zt(e) {
  var t = this.__data__, r = Lt(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : Gt.call(t, r, 1), --this.size, !0;
}
var Ft = zt, Nt = k;
function Bt(e) {
  var t = this.__data__, r = Nt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Ht = Bt, Kt = k;
function Ut(e) {
  return Kt(this.__data__, e) > -1;
}
var qt = Ut, Wt = k;
function kt(e, t) {
  var r = this.__data__, a = Wt(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
var Xt = kt, Yt = Mt, Zt = Ft, Jt = Ht, Qt = qt, Vt = Xt;
function P(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
P.prototype.clear = Yt;
P.prototype.delete = Zt;
P.prototype.get = Jt;
P.prototype.has = Qt;
P.prototype.set = Vt;
var X = P, er = X;
function tr() {
  this.__data__ = new er(), this.size = 0;
}
var rr = tr;
function ar(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var nr = ar;
function ir(e) {
  return this.__data__.get(e);
}
var sr = ir;
function or(e) {
  return this.__data__.has(e);
}
var fr = or, ur = typeof B == "object" && B && B.Object === Object && B, et = ur, cr = et, lr = typeof self == "object" && self && self.Object === Object && self, vr = cr || lr || Function("return this")(), S = vr, dr = S, hr = dr.Symbol, Y = hr, be = Y, tt = Object.prototype, gr = tt.hasOwnProperty, _r = tt.toString, R = be ? be.toStringTag : void 0;
function yr(e) {
  var t = gr.call(e, R), r = e[R];
  try {
    e[R] = void 0;
    var a = !0;
  } catch {
  }
  var i = _r.call(e);
  return a && (t ? e[R] = r : delete e[R]), i;
}
var pr = yr, $r = Object.prototype, br = $r.toString;
function mr(e) {
  return br.call(e);
}
var Tr = mr, me = Y, Ar = pr, Sr = Tr, Cr = "[object Null]", Or = "[object Undefined]", Te = me ? me.toStringTag : void 0;
function Ir(e) {
  return e == null ? e === void 0 ? Or : Cr : Te && Te in Object(e) ? Ar(e) : Sr(e);
}
var L = Ir;
function Pr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var j = Pr, wr = L, Er = j, Mr = "[object AsyncFunction]", xr = "[object Function]", Dr = "[object GeneratorFunction]", Rr = "[object Proxy]";
function Lr(e) {
  if (!Er(e))
    return !1;
  var t = wr(e);
  return t == xr || t == Dr || t == Mr || t == Rr;
}
var rt = Lr, jr = S, Gr = jr["__core-js_shared__"], zr = Gr, ee = zr, Ae = function() {
  var e = /[^.]+$/.exec(ee && ee.keys && ee.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Fr(e) {
  return !!Ae && Ae in e;
}
var Nr = Fr, Br = Function.prototype, Hr = Br.toString;
function Kr(e) {
  if (e != null) {
    try {
      return Hr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var at = Kr, Ur = rt, qr = Nr, Wr = j, kr = at, Xr = /[\\^$.*+?()[\]{}|]/g, Yr = /^\[object .+?Constructor\]$/, Zr = Function.prototype, Jr = Object.prototype, Qr = Zr.toString, Vr = Jr.hasOwnProperty, ea = RegExp(
  "^" + Qr.call(Vr).replace(Xr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ta(e) {
  if (!Wr(e) || qr(e))
    return !1;
  var t = Ur(e) ? ea : Yr;
  return t.test(kr(e));
}
var ra = ta;
function aa(e, t) {
  return e == null ? void 0 : e[t];
}
var na = aa, ia = ra, sa = na;
function oa(e, t) {
  var r = sa(e, t);
  return ia(r) ? r : void 0;
}
var w = oa, fa = w, ua = S, ca = fa(ua, "Map"), ue = ca, la = w, va = la(Object, "create"), Z = va, Se = Z;
function da() {
  this.__data__ = Se ? Se(null) : {}, this.size = 0;
}
var ha = da;
function ga(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var _a = ga, ya = Z, pa = "__lodash_hash_undefined__", $a = Object.prototype, ba = $a.hasOwnProperty;
function ma(e) {
  var t = this.__data__;
  if (ya) {
    var r = t[e];
    return r === pa ? void 0 : r;
  }
  return ba.call(t, e) ? t[e] : void 0;
}
var Ta = ma, Aa = Z, Sa = Object.prototype, Ca = Sa.hasOwnProperty;
function Oa(e) {
  var t = this.__data__;
  return Aa ? t[e] !== void 0 : Ca.call(t, e);
}
var Ia = Oa, Pa = Z, wa = "__lodash_hash_undefined__";
function Ea(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Pa && t === void 0 ? wa : t, this;
}
var Ma = Ea, xa = ha, Da = _a, Ra = Ta, La = Ia, ja = Ma;
function E(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
E.prototype.clear = xa;
E.prototype.delete = Da;
E.prototype.get = Ra;
E.prototype.has = La;
E.prototype.set = ja;
var Ga = E, Ce = Ga, za = X, Fa = ue;
function Na() {
  this.size = 0, this.__data__ = {
    hash: new Ce(),
    map: new (Fa || za)(),
    string: new Ce()
  };
}
var Ba = Na;
function Ha(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Ka = Ha, Ua = Ka;
function qa(e, t) {
  var r = e.__data__;
  return Ua(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var J = qa, Wa = J;
function ka(e) {
  var t = Wa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Xa = ka, Ya = J;
function Za(e) {
  return Ya(this, e).get(e);
}
var Ja = Za, Qa = J;
function Va(e) {
  return Qa(this, e).has(e);
}
var en = Va, tn = J;
function rn(e, t) {
  var r = tn(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
var an = rn, nn = Ba, sn = Xa, on = Ja, fn = en, un = an;
function M(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
M.prototype.clear = nn;
M.prototype.delete = sn;
M.prototype.get = on;
M.prototype.has = fn;
M.prototype.set = un;
var ce = M, cn = X, ln = ue, vn = ce, dn = 200;
function hn(e, t) {
  var r = this.__data__;
  if (r instanceof cn) {
    var a = r.__data__;
    if (!ln || a.length < dn - 1)
      return a.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new vn(a);
  }
  return r.set(e, t), this.size = r.size, this;
}
var gn = hn, _n = X, yn = rr, pn = nr, $n = sr, bn = fr, mn = gn;
function x(e) {
  var t = this.__data__ = new _n(e);
  this.size = t.size;
}
x.prototype.clear = yn;
x.prototype.delete = pn;
x.prototype.get = $n;
x.prototype.has = bn;
x.prototype.set = mn;
var nt = x, Tn = "__lodash_hash_undefined__";
function An(e) {
  return this.__data__.set(e, Tn), this;
}
var Sn = An;
function Cn(e) {
  return this.__data__.has(e);
}
var On = Cn, In = ce, Pn = Sn, wn = On;
function U(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new In(); ++t < r; )
    this.add(e[t]);
}
U.prototype.add = U.prototype.push = Pn;
U.prototype.has = wn;
var En = U;
function Mn(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var xn = Mn;
function Dn(e, t) {
  return e.has(t);
}
var Rn = Dn, Ln = En, jn = xn, Gn = Rn, zn = 1, Fn = 2;
function Nn(e, t, r, a, i, n) {
  var s = r & zn, o = e.length, c = t.length;
  if (o != c && !(s && c > o))
    return !1;
  var u = n.get(e), v = n.get(t);
  if (u && v)
    return u == t && v == e;
  var l = -1, f = !0, y = r & Fn ? new Ln() : void 0;
  for (n.set(e, t), n.set(t, e); ++l < o; ) {
    var _ = e[l], g = t[l];
    if (a)
      var T = s ? a(g, _, l, t, e, n) : a(_, g, l, e, t, n);
    if (T !== void 0) {
      if (T)
        continue;
      f = !1;
      break;
    }
    if (y) {
      if (!jn(t, function(A, d) {
        if (!Gn(y, d) && (_ === A || i(_, A, r, a, n)))
          return y.push(d);
      })) {
        f = !1;
        break;
      }
    } else if (!(_ === g || i(_, g, r, a, n))) {
      f = !1;
      break;
    }
  }
  return n.delete(e), n.delete(t), f;
}
var it = Nn, Bn = S, Hn = Bn.Uint8Array, Kn = Hn;
function Un(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(a, i) {
    r[++t] = [i, a];
  }), r;
}
var qn = Un;
function Wn(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(a) {
    r[++t] = a;
  }), r;
}
var kn = Wn, Oe = Y, Ie = Kn, Xn = fe, Yn = it, Zn = qn, Jn = kn, Qn = 1, Vn = 2, ei = "[object Boolean]", ti = "[object Date]", ri = "[object Error]", ai = "[object Map]", ni = "[object Number]", ii = "[object RegExp]", si = "[object Set]", oi = "[object String]", fi = "[object Symbol]", ui = "[object ArrayBuffer]", ci = "[object DataView]", Pe = Oe ? Oe.prototype : void 0, te = Pe ? Pe.valueOf : void 0;
function li(e, t, r, a, i, n, s) {
  switch (r) {
    case ci:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case ui:
      return !(e.byteLength != t.byteLength || !n(new Ie(e), new Ie(t)));
    case ei:
    case ti:
    case ni:
      return Xn(+e, +t);
    case ri:
      return e.name == t.name && e.message == t.message;
    case ii:
    case oi:
      return e == t + "";
    case ai:
      var o = Zn;
    case si:
      var c = a & Qn;
      if (o || (o = Jn), e.size != t.size && !c)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      a |= Vn, s.set(e, t);
      var v = Yn(o(e), o(t), a, i, n, s);
      return s.delete(e), v;
    case fi:
      if (te)
        return te.call(e) == te.call(t);
  }
  return !1;
}
var vi = li;
function di(e, t) {
  for (var r = -1, a = t.length, i = e.length; ++r < a; )
    e[i + r] = t[r];
  return e;
}
var hi = di, gi = Array.isArray, O = gi, _i = hi, yi = O;
function pi(e, t, r) {
  var a = t(e);
  return yi(e) ? a : _i(a, r(e));
}
var $i = pi;
function bi(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, i = 0, n = []; ++r < a; ) {
    var s = e[r];
    t(s, r, e) && (n[i++] = s);
  }
  return n;
}
var mi = bi;
function Ti() {
  return [];
}
var Ai = Ti, Si = mi, Ci = Ai, Oi = Object.prototype, Ii = Oi.propertyIsEnumerable, we = Object.getOwnPropertySymbols, Pi = we ? function(e) {
  return e == null ? [] : (e = Object(e), Si(we(e), function(t) {
    return Ii.call(e, t);
  }));
} : Ci, wi = Pi;
function Ei(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var Mi = Ei;
function xi(e) {
  return e != null && typeof e == "object";
}
var G = xi, Di = L, Ri = G, Li = "[object Arguments]";
function ji(e) {
  return Ri(e) && Di(e) == Li;
}
var Gi = ji, Ee = Gi, zi = G, st = Object.prototype, Fi = st.hasOwnProperty, Ni = st.propertyIsEnumerable, Bi = Ee(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ee : function(e) {
  return zi(e) && Fi.call(e, "callee") && !Ni.call(e, "callee");
}, ot = Bi, q = { exports: {} };
function Hi() {
  return !1;
}
var Ki = Hi;
q.exports;
(function(e, t) {
  var r = S, a = Ki, i = t && !t.nodeType && t, n = i && !0 && e && !e.nodeType && e, s = n && n.exports === i, o = s ? r.Buffer : void 0, c = o ? o.isBuffer : void 0, u = c || a;
  e.exports = u;
})(q, q.exports);
var ft = q.exports, Ui = 9007199254740991, qi = /^(?:0|[1-9]\d*)$/;
function Wi(e, t) {
  var r = typeof e;
  return t = t ?? Ui, !!t && (r == "number" || r != "symbol" && qi.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var le = Wi, ki = 9007199254740991;
function Xi(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ki;
}
var ve = Xi, Yi = L, Zi = ve, Ji = G, Qi = "[object Arguments]", Vi = "[object Array]", es = "[object Boolean]", ts = "[object Date]", rs = "[object Error]", as = "[object Function]", ns = "[object Map]", is = "[object Number]", ss = "[object Object]", os = "[object RegExp]", fs = "[object Set]", us = "[object String]", cs = "[object WeakMap]", ls = "[object ArrayBuffer]", vs = "[object DataView]", ds = "[object Float32Array]", hs = "[object Float64Array]", gs = "[object Int8Array]", _s = "[object Int16Array]", ys = "[object Int32Array]", ps = "[object Uint8Array]", $s = "[object Uint8ClampedArray]", bs = "[object Uint16Array]", ms = "[object Uint32Array]", h = {};
h[ds] = h[hs] = h[gs] = h[_s] = h[ys] = h[ps] = h[$s] = h[bs] = h[ms] = !0;
h[Qi] = h[Vi] = h[ls] = h[es] = h[vs] = h[ts] = h[rs] = h[as] = h[ns] = h[is] = h[ss] = h[os] = h[fs] = h[us] = h[cs] = !1;
function Ts(e) {
  return Ji(e) && Zi(e.length) && !!h[Yi(e)];
}
var As = Ts;
function Ss(e) {
  return function(t) {
    return e(t);
  };
}
var Cs = Ss, W = { exports: {} };
W.exports;
(function(e, t) {
  var r = et, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, n = i && i.exports === a, s = n && r.process, o = function() {
    try {
      var c = i && i.require && i.require("util").types;
      return c || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(W, W.exports);
var Os = W.exports, Is = As, Ps = Cs, Me = Os, xe = Me && Me.isTypedArray, ws = xe ? Ps(xe) : Is, ut = ws, Es = Mi, Ms = ot, xs = O, Ds = ft, Rs = le, Ls = ut, js = Object.prototype, Gs = js.hasOwnProperty;
function zs(e, t) {
  var r = xs(e), a = !r && Ms(e), i = !r && !a && Ds(e), n = !r && !a && !i && Ls(e), s = r || a || i || n, o = s ? Es(e.length, String) : [], c = o.length;
  for (var u in e)
    (t || Gs.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Rs(u, c))) && o.push(u);
  return o;
}
var Fs = zs, Ns = Object.prototype;
function Bs(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ns;
  return e === r;
}
var Hs = Bs;
function Ks(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Us = Ks, qs = Us, Ws = qs(Object.keys, Object), ks = Ws, Xs = Hs, Ys = ks, Zs = Object.prototype, Js = Zs.hasOwnProperty;
function Qs(e) {
  if (!Xs(e))
    return Ys(e);
  var t = [];
  for (var r in Object(e))
    Js.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Vs = Qs, eo = rt, to = ve;
function ro(e) {
  return e != null && to(e.length) && !eo(e);
}
var ct = ro, ao = Fs, no = Vs, io = ct;
function so(e) {
  return io(e) ? ao(e) : no(e);
}
var lt = so, oo = $i, fo = wi, uo = lt;
function co(e) {
  return oo(e, uo, fo);
}
var lo = co, De = lo, vo = 1, ho = Object.prototype, go = ho.hasOwnProperty;
function _o(e, t, r, a, i, n) {
  var s = r & vo, o = De(e), c = o.length, u = De(t), v = u.length;
  if (c != v && !s)
    return !1;
  for (var l = c; l--; ) {
    var f = o[l];
    if (!(s ? f in t : go.call(t, f)))
      return !1;
  }
  var y = n.get(e), _ = n.get(t);
  if (y && _)
    return y == t && _ == e;
  var g = !0;
  n.set(e, t), n.set(t, e);
  for (var T = s; ++l < c; ) {
    f = o[l];
    var A = e[f], d = t[f];
    if (a)
      var p = s ? a(d, A, f, t, e, n) : a(A, d, f, e, t, n);
    if (!(p === void 0 ? A === d || i(A, d, r, a, n) : p)) {
      g = !1;
      break;
    }
    T || (T = f == "constructor");
  }
  if (g && !T) {
    var b = e.constructor, $ = t.constructor;
    b != $ && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof $ == "function" && $ instanceof $) && (g = !1);
  }
  return n.delete(e), n.delete(t), g;
}
var yo = _o, po = w, $o = S, bo = po($o, "DataView"), mo = bo, To = w, Ao = S, So = To(Ao, "Promise"), Co = So, Oo = w, Io = S, Po = Oo(Io, "Set"), wo = Po, Eo = w, Mo = S, xo = Eo(Mo, "WeakMap"), Do = xo, ae = mo, ne = ue, ie = Co, se = wo, oe = Do, vt = L, D = at, Re = "[object Map]", Ro = "[object Object]", Le = "[object Promise]", je = "[object Set]", Ge = "[object WeakMap]", ze = "[object DataView]", Lo = D(ae), jo = D(ne), Go = D(ie), zo = D(se), Fo = D(oe), I = vt;
(ae && I(new ae(new ArrayBuffer(1))) != ze || ne && I(new ne()) != Re || ie && I(ie.resolve()) != Le || se && I(new se()) != je || oe && I(new oe()) != Ge) && (I = function(e) {
  var t = vt(e), r = t == Ro ? e.constructor : void 0, a = r ? D(r) : "";
  if (a)
    switch (a) {
      case Lo:
        return ze;
      case jo:
        return Re;
      case Go:
        return Le;
      case zo:
        return je;
      case Fo:
        return Ge;
    }
  return t;
});
var No = I, re = nt, Bo = it, Ho = vi, Ko = yo, Fe = No, Ne = O, Be = ft, Uo = ut, qo = 1, He = "[object Arguments]", Ke = "[object Array]", H = "[object Object]", Wo = Object.prototype, Ue = Wo.hasOwnProperty;
function ko(e, t, r, a, i, n) {
  var s = Ne(e), o = Ne(t), c = s ? Ke : Fe(e), u = o ? Ke : Fe(t);
  c = c == He ? H : c, u = u == He ? H : u;
  var v = c == H, l = u == H, f = c == u;
  if (f && Be(e)) {
    if (!Be(t))
      return !1;
    s = !0, v = !1;
  }
  if (f && !v)
    return n || (n = new re()), s || Uo(e) ? Bo(e, t, r, a, i, n) : Ho(e, t, c, r, a, i, n);
  if (!(r & qo)) {
    var y = v && Ue.call(e, "__wrapped__"), _ = l && Ue.call(t, "__wrapped__");
    if (y || _) {
      var g = y ? e.value() : e, T = _ ? t.value() : t;
      return n || (n = new re()), i(g, T, r, a, n);
    }
  }
  return f ? (n || (n = new re()), Ko(e, t, r, a, i, n)) : !1;
}
var Xo = ko, Yo = Xo, qe = G;
function dt(e, t, r, a, i) {
  return e === t ? !0 : e == null || t == null || !qe(e) && !qe(t) ? e !== e && t !== t : Yo(e, t, r, a, dt, i);
}
var ht = dt, Zo = nt, Jo = ht, Qo = 1, Vo = 2;
function ef(e, t, r, a) {
  var i = r.length, n = i, s = !a;
  if (e == null)
    return !n;
  for (e = Object(e); i--; ) {
    var o = r[i];
    if (s && o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
      return !1;
  }
  for (; ++i < n; ) {
    o = r[i];
    var c = o[0], u = e[c], v = o[1];
    if (s && o[2]) {
      if (u === void 0 && !(c in e))
        return !1;
    } else {
      var l = new Zo();
      if (a)
        var f = a(u, v, c, e, t, l);
      if (!(f === void 0 ? Jo(v, u, Qo | Vo, a, l) : f))
        return !1;
    }
  }
  return !0;
}
var tf = ef, rf = j;
function af(e) {
  return e === e && !rf(e);
}
var gt = af, nf = gt, sf = lt;
function of(e) {
  for (var t = sf(e), r = t.length; r--; ) {
    var a = t[r], i = e[a];
    t[r] = [a, i, nf(i)];
  }
  return t;
}
var ff = of;
function uf(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var _t = uf, cf = tf, lf = ff, vf = _t;
function df(e) {
  var t = lf(e);
  return t.length == 1 && t[0][2] ? vf(t[0][0], t[0][1]) : function(r) {
    return r === e || cf(r, e, t);
  };
}
var hf = df, gf = L, _f = G, yf = "[object Symbol]";
function pf(e) {
  return typeof e == "symbol" || _f(e) && gf(e) == yf;
}
var Q = pf, $f = O, bf = Q, mf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Tf = /^\w*$/;
function Af(e, t) {
  if ($f(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || bf(e) ? !0 : Tf.test(e) || !mf.test(e) || t != null && e in Object(t);
}
var de = Af, yt = ce, Sf = "Expected a function";
function he(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Sf);
  var r = function() {
    var a = arguments, i = t ? t.apply(this, a) : a[0], n = r.cache;
    if (n.has(i))
      return n.get(i);
    var s = e.apply(this, a);
    return r.cache = n.set(i, s) || n, s;
  };
  return r.cache = new (he.Cache || yt)(), r;
}
he.Cache = yt;
var Cf = he, Of = Cf, If = 500;
function Pf(e) {
  var t = Of(e, function(a) {
    return r.size === If && r.clear(), a;
  }), r = t.cache;
  return t;
}
var wf = Pf, Ef = wf, Mf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, xf = /\\(\\)?/g, Df = Ef(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Mf, function(r, a, i, n) {
    t.push(i ? n.replace(xf, "$1") : a || r);
  }), t;
}), Rf = Df;
function Lf(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, i = Array(a); ++r < a; )
    i[r] = t(e[r], r, e);
  return i;
}
var jf = Lf, We = Y, Gf = jf, zf = O, Ff = Q, Nf = 1 / 0, ke = We ? We.prototype : void 0, Xe = ke ? ke.toString : void 0;
function pt(e) {
  if (typeof e == "string")
    return e;
  if (zf(e))
    return Gf(e, pt) + "";
  if (Ff(e))
    return Xe ? Xe.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Nf ? "-0" : t;
}
var Bf = pt, Hf = Bf;
function Kf(e) {
  return e == null ? "" : Hf(e);
}
var Uf = Kf, qf = O, Wf = de, kf = Rf, Xf = Uf;
function Yf(e, t) {
  return qf(e) ? e : Wf(e, t) ? [e] : kf(Xf(e));
}
var $t = Yf, Zf = Q, Jf = 1 / 0;
function Qf(e) {
  if (typeof e == "string" || Zf(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Jf ? "-0" : t;
}
var V = Qf, Vf = $t, eu = V;
function tu(e, t) {
  t = Vf(t, e);
  for (var r = 0, a = t.length; e != null && r < a; )
    e = e[eu(t[r++])];
  return r && r == a ? e : void 0;
}
var bt = tu, ru = bt;
function au(e, t, r) {
  var a = e == null ? void 0 : ru(e, t);
  return a === void 0 ? r : a;
}
var nu = au;
function iu(e, t) {
  return e != null && t in Object(e);
}
var su = iu, ou = $t, fu = ot, uu = O, cu = le, lu = ve, vu = V;
function du(e, t, r) {
  t = ou(t, e);
  for (var a = -1, i = t.length, n = !1; ++a < i; ) {
    var s = vu(t[a]);
    if (!(n = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return n || ++a != i ? n : (i = e == null ? 0 : e.length, !!i && lu(i) && cu(s, i) && (uu(e) || fu(e)));
}
var hu = du, gu = su, _u = hu;
function yu(e, t) {
  return e != null && _u(e, t, gu);
}
var pu = yu, $u = ht, bu = nu, mu = pu, Tu = de, Au = gt, Su = _t, Cu = V, Ou = 1, Iu = 2;
function Pu(e, t) {
  return Tu(e) && Au(t) ? Su(Cu(e), t) : function(r) {
    var a = bu(r, e);
    return a === void 0 && a === t ? mu(r, e) : $u(t, a, Ou | Iu);
  };
}
var wu = Pu;
function Eu(e) {
  return e;
}
var Mu = Eu;
function xu(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var Du = xu, Ru = bt;
function Lu(e) {
  return function(t) {
    return Ru(t, e);
  };
}
var ju = Lu, Gu = Du, zu = ju, Fu = de, Nu = V;
function Bu(e) {
  return Fu(e) ? Gu(Nu(e)) : zu(e);
}
var Hu = Bu, Ku = hf, Uu = wu, qu = Mu, Wu = O, ku = Hu;
function Xu(e) {
  return typeof e == "function" ? e : e == null ? qu : typeof e == "object" ? Wu(e) ? Uu(e[0], e[1]) : Ku(e) : ku(e);
}
var Yu = Xu;
function Zu(e, t) {
  for (var r, a = -1, i = e.length; ++a < i; ) {
    var n = t(e[a]);
    n !== void 0 && (r = r === void 0 ? n : r + n);
  }
  return r;
}
var Ju = Zu, Qu = Yu, Vu = Ju;
function ec(e, t) {
  return e && e.length ? Vu(e, Qu(t)) : 0;
}
var tc = ec;
const rc = /* @__PURE__ */ Ve(tc);
var ac = Math.floor, nc = Math.random;
function ic(e, t) {
  return e + ac(nc() * (t - e + 1));
}
var sc = ic, oc = fe, fc = ct, uc = le, cc = j;
function lc(e, t, r) {
  if (!cc(r))
    return !1;
  var a = typeof t;
  return (a == "number" ? fc(r) && uc(t, r.length) : a == "string" && t in r) ? oc(r[t], e) : !1;
}
var vc = lc, dc = /\s/;
function hc(e) {
  for (var t = e.length; t-- && dc.test(e.charAt(t)); )
    ;
  return t;
}
var gc = hc, _c = gc, yc = /^\s+/;
function pc(e) {
  return e && e.slice(0, _c(e) + 1).replace(yc, "");
}
var $c = pc, bc = $c, Ye = j, mc = Q, Ze = NaN, Tc = /^[-+]0x[0-9a-f]+$/i, Ac = /^0b[01]+$/i, Sc = /^0o[0-7]+$/i, Cc = parseInt;
function Oc(e) {
  if (typeof e == "number")
    return e;
  if (mc(e))
    return Ze;
  if (Ye(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ye(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = bc(e);
  var r = Ac.test(e);
  return r || Sc.test(e) ? Cc(e.slice(2), r ? 2 : 8) : Tc.test(e) ? Ze : +e;
}
var Ic = Oc, Pc = Ic, Je = 1 / 0, wc = 17976931348623157e292;
function Ec(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Pc(e), e === Je || e === -Je) {
    var t = e < 0 ? -1 : 1;
    return t * wc;
  }
  return e === e ? e : 0;
}
var Mc = Ec, xc = sc, Dc = vc, Qe = Mc, Rc = parseFloat, Lc = Math.min, jc = Math.random;
function Gc(e, t, r) {
  if (r && typeof r != "boolean" && Dc(e, t, r) && (t = r = void 0), r === void 0 && (typeof t == "boolean" ? (r = t, t = void 0) : typeof e == "boolean" && (r = e, e = void 0)), e === void 0 && t === void 0 ? (e = 0, t = 1) : (e = Qe(e), t === void 0 ? (t = e, e = 0) : t = Qe(t)), e > t) {
    var a = e;
    e = t, t = a;
  }
  if (r || e % 1 || t % 1) {
    var i = jc();
    return Lc(e + i * (t - e + Rc("1e-" + ((i + "").length - 1))), t);
  }
  return xc(e, t);
}
var zc = Gc;
const Fc = /* @__PURE__ */ Ve(zc);
function Nc(e, t) {
  const r = K(!1), a = K(0), i = K(), n = C(() => e.useWeight ? 100 : rc(e.prizes, (d) => d.probability || 0)), s = C(() => {
    if (e.useWeight) return 0;
    const d = [...e.prizes].sort(($, z) => {
      const ge = String($.probability).split(".")[1], _e = String(z.probability).split(".")[1], mt = ge ? ge.length : 0;
      return (_e ? _e.length : 0) - mt;
    }), p = String(d[0].probability).split(".")[1], b = p ? p.length : 0;
    return [1, 10, 100, 1e3, 1e4][b > 4 ? 4 : b];
  }), o = C(() => {
    const d = [];
    return e.prizes.forEach((p) => {
      const b = e.useWeight ? p.weight || 0 : (p.probability || 0) * s.value, $ = new Array(b).fill(p.id);
      d.push(...$);
    }), d;
  }), c = C(() => r.value ? e.duration / 1e3 : 0), u = C(() => ({
    "-webkit-transform": `rotateZ(${a.value}deg)`,
    transform: `rotateZ(${a.value}deg)`,
    "-webkit-transition-duration": `${c.value}s`,
    "transition-duration": `${c.value}s`,
    "-webkit-transition-timing-function:": e.timingFun,
    "transition-timing-function": e.timingFun
  })), v = C(() => {
    let d = e.angleBase * 360;
    return e.angleBase < 0 && (d -= 360), d;
  }), l = C(() => !e.disabled && !r.value && n.value === 100);
  St(() => e.prizeId, (d) => {
    if (!r.value) return;
    let p = A(d);
    e.angleBase < 0 && (p -= 360);
    const b = a.value;
    let $ = e.angleBase * 360 + p;
    const z = 360 * Math.floor(($ - b) / 360);
    e.angleBase >= 0 ? $ += Math.abs(z) : $ += -360 - z, a.value = $;
  }), f();
  function f() {
    if (n.value !== 100)
      throw new Error("Prizes Is Error: Sum of probabilities is not 100!");
    return !0;
  }
  function y() {
    if (l.value) {
      if (e.verify) {
        t("rotateStart", _);
        return;
      }
      t("rotateStart"), _();
    }
  }
  function _() {
    r.value = !0;
    const d = e.prizeId || T();
    a.value = v.value + A(d);
  }
  function g() {
    r.value = !1, a.value %= 360, t("rotateEnd", i.value);
  }
  function T() {
    const d = o.value.length;
    return o.value[Fc(0, d - 1)];
  }
  function A(d) {
    const p = 360 / e.prizes.length, b = e.prizes.findIndex(($) => $.id === d);
    return i.value = e.prizes[b], 360 - (p * b + p / 2);
  }
  return {
    rotateStyle: u,
    handleClick: y,
    onRotateEnd: g
  };
}
const Bc = { class: "fw-container" }, Hc = ["width", "height"], Kc = { class: "fw-btn" }, Uc = /* @__PURE__ */ Ct({
  __name: "index",
  props: {
    type: { default: "canvas" },
    useWeight: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    verify: { type: Boolean, default: !1 },
    canvas: { default: () => ({}) },
    duration: { default: 6e3 },
    timingFun: { default: "cubic-bezier(0.36, 0.95, 0.64, 1)" },
    angleBase: { default: 10 },
    prizeId: { default: 0 },
    prizes: { default: () => [] }
  },
  emits: ["rotateStart", "rotateEnd"],
  setup(e, { expose: t, emit: r }) {
    const a = e, { wheelEl: i, canvasConfig: n } = wt(a), { handleClick: s, rotateStyle: o, onRotateEnd: c } = Nc(a, r);
    return t({
      startRotate: () => {
        s();
      }
    }), (u, v) => (F(), N("div", Bc, [
      ye("div", {
        class: "fw-wheel",
        style: pe(m(o)),
        onTransitionend: v[0] || (v[0] = //@ts-ignore
        (...l) => m(c) && m(c)(...l)),
        "on:webkitTransitionend": v[1] || (v[1] = //@ts-ignore
        (...l) => m(c) && m(c)(...l))
      }, [
        e.type === "canvas" ? (F(), N("canvas", {
          key: 0,
          ref_key: "wheelEl",
          ref: i,
          width: m(n).radius * 2,
          height: m(n).radius * 2
        }, null, 8, Hc)) : $e(u.$slots, "wheel", { key: 1 }, void 0, !0)
      ], 36),
      ye("div", Kc, [
        e.type === "canvas" ? (F(), N("div", {
          key: 0,
          class: "fw-btn__btn",
          style: pe({ width: m(n).btnWidth + "px", height: m(n).btnWidth + "px" }),
          onClick: v[2] || (v[2] = //@ts-ignore
          (...l) => m(s) && m(s)(...l))
        }, Ot(m(n).btnText), 5)) : (F(), N("div", {
          key: 1,
          class: "fw-btn__image",
          onClick: v[3] || (v[3] = //@ts-ignore
          (...l) => m(s) && m(s)(...l))
        }, [
          $e(u.$slots, "button", {}, void 0, !0)
        ]))
      ])
    ]));
  }
}), qc = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [a, i] of t)
    r[a] = i;
  return r;
}, Wc = /* @__PURE__ */ qc(Uc, [["__scopeId", "data-v-ee35722b"]]), Yc = {
  install: (e) => {
    e.component("SpinTheWheel", Wc);
  }
};
export {
  Wc as SpinTheWheel,
  Yc as default
};
