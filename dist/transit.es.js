function t(t2, { duration: e = 1e3, key: n, value: r }) {
  const { target: a, attr: o } = function(t3, e2) {
    const n2 = { target: null, attr: null };
    return typeof t3 == "string" ? (n2.target = document.querySelector(t3), n2.attr = "innerText") : (n2.target = t3, n2.attr = e2), n2;
  }(t2, n), u = Number(a[o]), i = r, l = i - u, c = l / e;
  let m;
  requestAnimationFrame(function t3(n2) {
    m == null && (m = n2);
    const r2 = n2 - m, s = Math.floor(u + r2 * c);
    a[o] = l > 0 ? Math.min(s, i) : Math.max(s, i);
    r2 < e && requestAnimationFrame(t3);
  });
}
export { t as default };
