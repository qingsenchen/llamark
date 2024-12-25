var k = (o, t, e) => {
  if (!t.has(o))
    throw TypeError("Cannot " + e);
};
var n = (o, t, e) => (k(o, t, "read from private field"), e ? e.call(o) : t.get(o)), l = (o, t, e) => {
  if (t.has(o))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(o) : t.set(o, e);
}, h = (o, t, e, s) => (k(o, t, "write to private field"), s ? s.call(o, e) : t.set(o, e), e);
var T = (o, t, e) => (k(o, t, "access private method"), e);
import { TextSelection as B, Plugin as F, PluginKey as H } from "@milkdown/prose/state";
import M from "lodash.debounce";
import { computePosition as O, flip as S, offset as b } from "@floating-ui/dom";
import { posToDOMRect as R } from "@milkdown/prose";
import { $ctx as j, $prose as q } from "@milkdown/utils";
var r, d, c, a, u, y, C;
class A {
  constructor(t) {
    /// @internal
    l(this, y);
    /// @internal
    l(this, r, void 0);
    /// @internal
    l(this, d, void 0);
    l(this, c, void 0);
    /// @internal
    l(this, a, void 0);
    l(this, u, void 0);
    h(this, c, !1), this.onShow = () => {
    }, this.onHide = () => {
    }, h(this, u, (e, s) => {
      var P;
      const { state: i, composing: p } = e, { selection: f, doc: w } = i, { ranges: g } = f, $ = Math.min(...g.map((m) => m.$from.pos)), x = Math.max(...g.map((m) => m.$to.pos)), E = s && s.doc.eq(w) && s.selection.eq(f);
      if (n(this, c) || ((P = e.dom.parentElement) == null || P.appendChild(this.element), h(this, c, !0)), p || E)
        return;
      if (!n(this, d).call(this, e, s)) {
        this.hide();
        return;
      }
      O({
        getBoundingClientRect: () => R(e, $, x)
      }, this.element, {
        placement: "top",
        middleware: [S(), b(n(this, a))]
      }).then(({ x: m, y: _ }) => {
        Object.assign(this.element.style, {
          left: `${m}px`,
          top: `${_}px`
        });
      }), this.show();
    }), this.update = (e, s) => {
      M(n(this, u), n(this, r))(e, s);
    }, this.destroy = () => {
    }, this.show = (e) => {
      this.element.dataset.show = "true", e && O(e, this.element, {
        placement: "top",
        middleware: [S(), b(n(this, a))]
      }).then(({ x: s, y: i }) => {
        Object.assign(this.element.style, {
          left: `${s}px`,
          top: `${i}px`
        });
      }), this.onShow();
    }, this.hide = () => {
      this.element.dataset.show !== "false" && (this.element.dataset.show = "false", this.onHide());
    }, this.element = t.content, h(this, r, t.debounce ?? 200), h(this, d, t.shouldShow ?? T(this, y, C)), h(this, a, t.offset), this.element.dataset.show = "false";
  }
}
r = new WeakMap(), d = new WeakMap(), c = new WeakMap(), a = new WeakMap(), u = new WeakMap(), y = new WeakSet(), C = function(t) {
  const { doc: e, selection: s } = t.state, { empty: i, from: p, to: f } = s, w = !e.textBetween(p, f).length && t.state.selection instanceof B, g = this.element.contains(document.activeElement), $ = !t.hasFocus() && !g, x = !t.editable;
  return !($ || i || w || x);
};
function G(o) {
  const t = j({}, `${o}_TOOLTIP_SPEC`), e = q((i) => {
    const p = i.get(t.key);
    return new F({
      key: new H(`${o}_TOOLTIP`),
      ...p
    });
  }), s = [t, e];
  return s.key = t.key, s.pluginKey = e.key, t.meta = {
    package: "@milkdown/plugin-tooltip",
    displayName: `Ctx<tooltipSpec>|${o}`
  }, e.meta = {
    package: "@milkdown/plugin-tooltip",
    displayName: `Prose<tooltip>|${o}`
  }, s;
}
export {
  A as TooltipProvider,
  G as tooltipFactory
};
//# sourceMappingURL=index.es.js.map
