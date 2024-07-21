import { ref as R, computed as z, onMounted as _, onUpdated as p, watch as $, defineComponent as L, openBlock as k, createElementBlock as C, createElementVNode as P, normalizeStyle as T, unref as f, renderSlot as D, toDisplayString as F } from "vue";
function O(t, d) {
  const c = [];
  for (; t !== ""; ) {
    let i = t.substr(0, d);
    if (t.charAt(d) !== "" && t.charAt(d) !== " ") {
      const e = i.lastIndexOf(" ");
      e !== -1 && (i = i.substr(0, e));
    }
    t = t.replace(i, "").trim(), c.push(i);
  }
  return c;
}
const q = {
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
function Z(t) {
  const d = R(), c = z(() => Object.assign(q, t.canvas || {}));
  let i, e;
  function g() {
    if (i = d.value, i.getContext) {
      const { radius: o, textRadius: r, borderWidth: n, borderColor: l, fontSize: v } = c.value;
      if (!o || !r || !n || !l || !v)
        throw new Error("radius, textRadius, borderWidth, borderColor, and fontSize are required");
      const h = Math.PI / (t.prizes.length / 2);
      e = i.getContext("2d"), e.clearRect(0, 0, o * 2, o * 2), e.strokeStyle = l, e.lineWidth = n * 2, e.font = `${v}px Arial`, t.prizes.forEach((s, m) => {
        y(s, m, h, o, r, n);
      });
    }
  }
  function y(o, r, n, l, v, h = 0) {
    const s = r * n - Math.PI / 2;
    e.fillStyle = o.bgColor, e.beginPath(), e.arc(l, l, l - h, s, s + n, !1), e.stroke(), e.arc(l, l, 0, s + n, s, !0), e.fill(), e.save(), e.fillStyle = o.color, e.translate(l + Math.cos(s + n / 2) * v, l + Math.sin(s + n / 2) * v), S(s, n, o.name), e.restore();
  }
  function S(o, r, n) {
    const { lineHeight: l, textLength: v, textDirection: h } = c.value;
    if (!l || !v || !h)
      throw new Error("lineHeight, textLength, and textDirection are required");
    const s = O(n, v);
    s && (h === "vertical" ? e.rotate(o + r / 2 + Math.PI) : e.rotate(o + r / 2 + Math.PI / 2), s.forEach((m, I) => w(m, I, h, l, s.length)));
  }
  function w(o, r, n, l, v = 0) {
    let h = -e.measureText(o).width / 2, s = (r + 1) * l;
    n === "vertical" && (h = 0, s = (r + 1) * l - v * l / 2), e.fillText(o, h, s);
  }
  return _(() => {
    t.type === "canvas" && g();
  }), p(() => {
    t.type === "canvas" && g();
  }), {
    wheelEl: d,
    canvasConfig: c,
    drawCanvas: g
  };
}
function j(t, d) {
  const c = R(!1), i = R(0), e = R(), g = z(() => t.useWeight ? 100 : t.prizes.reduce((a, u) => a + (u.probability || 0), 0)), y = z(() => {
    if (t.useWeight) return 0;
    const a = [...t.prizes].sort((b, E) => {
      const B = String(b.probability).split(".")[1], W = String(E.probability).split(".")[1], A = B ? B.length : 0;
      return (W ? W.length : 0) - A;
    }), u = String(a[0].probability).split(".")[1], x = u ? u.length : 0;
    return [1, 10, 100, 1e3, 1e4][x > 4 ? 4 : x];
  }), S = z(() => {
    const a = [];
    return t.prizes.forEach((u) => {
      const x = t.useWeight ? u.weight || 0 : (u.probability || 0) * y.value, b = new Array(x).fill(u.id);
      a.push(...b);
    }), a;
  }), w = z(() => c.value ? t.duration / 1e3 : 0), o = z(() => ({
    "-webkit-transform": `rotateZ(${i.value}deg)`,
    transform: `rotateZ(${i.value}deg)`,
    "-webkit-transition-duration": `${w.value}s`,
    "transition-duration": `${w.value}s`,
    "-webkit-transition-timing-function:": t.timingFun,
    "transition-timing-function": t.timingFun
  })), r = z(() => {
    let a = t.angleBase * 360;
    return t.angleBase < 0 && (a -= 360), a;
  }), n = z(() => !t.disabled && !c.value && g.value === 100);
  $(() => t.prizeId, (a) => {
    if (!c.value) return;
    let u = M(a);
    t.angleBase < 0 && (u -= 360);
    const x = i.value;
    let b = t.angleBase * 360 + u;
    const E = 360 * Math.floor((b - x) / 360);
    t.angleBase >= 0 ? b += Math.abs(E) : b += -360 - E, i.value = b;
  }), l();
  function l() {
    if (g.value !== 100)
      throw new Error("Prizes Is Error: Sum of probabilities is not 100!");
    return !0;
  }
  function v() {
    if (n.value) {
      if (t.verify) {
        d("rotateStart", h);
        return;
      }
      d("rotateStart"), h();
    }
  }
  function h() {
    c.value = !0;
    const a = t.prizeId || I();
    i.value = r.value + M(a);
  }
  function s() {
    c.value = !1, i.value %= 360, d("rotateEnd", e.value);
  }
  function m(a, u) {
    return a = Math.ceil(a), u = Math.floor(u), Math.floor(Math.random() * (u - a + 1)) + a;
  }
  function I() {
    const a = S.value.length;
    return S.value[m(0, a - 1)];
  }
  function M(a) {
    const u = 360 / t.prizes.length, x = t.prizes.findIndex((b) => b.id === a);
    return e.value = t.prizes[x], 360 - (u * x + u / 2);
  }
  return {
    rotateStyle: o,
    handleClick: v,
    onRotateEnd: s
  };
}
const H = { class: "fw-container" }, N = ["width", "height"], U = { class: "fw-btn" }, V = /* @__PURE__ */ L({
  __name: "index",
  props: {
    type: { default: "canvas" },
    useWeight: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    verify: { type: Boolean, default: !1 },
    canvas: null,
    duration: { default: 6e3 },
    timingFun: { default: "cubic-bezier(0.36, 0.95, 0.64, 1)" },
    angleBase: { default: 10 },
    prizeId: { default: 0 },
    prizes: { default: () => [] }
  },
  emits: ["rotateStart", "rotateEnd"],
  setup(t, { expose: d, emit: c }) {
    const i = t, { wheelEl: e, canvasConfig: g } = Z(i), { handleClick: y, rotateStyle: S, onRotateEnd: w } = j(i, c);
    return d({
      startRotate: () => {
        y();
      }
    }), (o, r) => (k(), C("div", H, [
      P("div", {
        class: "fw-wheel",
        style: T(f(S)),
        onTransitionend: r[0] || (r[0] = //@ts-ignore
        (...n) => f(w) && f(w)(...n)),
        "on:webkitTransitionend": r[1] || (r[1] = //@ts-ignore
        (...n) => f(w) && f(w)(...n))
      }, [
        t.type === "canvas" ? (k(), C("canvas", {
          key: 0,
          ref_key: "wheelEl",
          ref: e,
          width: (f(g).radius || 1) * 2,
          height: (f(g).radius || 1) * 2
        }, null, 8, N)) : D(o.$slots, "wheel", { key: 1 }, void 0, !0)
      ], 36),
      P("div", U, [
        t.type === "canvas" ? (k(), C("div", {
          key: 0,
          class: "fw-btn__btn",
          style: T({ width: f(g).btnWidth + "px", height: f(g).btnWidth + "px" }),
          onClick: r[2] || (r[2] = //@ts-ignore
          (...n) => f(y) && f(y)(...n))
        }, F(f(g).btnText), 5)) : (k(), C("div", {
          key: 1,
          class: "fw-btn__image",
          onClick: r[3] || (r[3] = //@ts-ignore
          (...n) => f(y) && f(y)(...n))
        }, [
          D(o.$slots, "button", {}, void 0, !0)
        ]))
      ])
    ]));
  }
}), X = (t, d) => {
  const c = t.__vccOpts || t;
  for (const [i, e] of d)
    c[i] = e;
  return c;
}, J = /* @__PURE__ */ X(V, [["__scopeId", "data-v-f344fcc3"]]);
export {
  J as SpinTheWheel
};
