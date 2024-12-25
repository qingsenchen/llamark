var x = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var i = (s, t, e) => (x(s, t, "read from private field"), e ? e.call(s) : t.get(s)), a = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, h = (s, t, e, n) => (x(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var P = (s, t, e) => (x(s, t, "access private method"), e);
import { TextSelection as _, Plugin as B, PluginKey as F } from "@milkdown/prose/state";
import H from "lodash.debounce";
import { computePosition as T, flip as b, offset as A } from "@floating-ui/dom";
import { posToDOMRect as M } from "@milkdown/prose";
import { $ctx as O, $prose as R } from "@milkdown/utils";
var p, d, l, c, u, y, C;
class G {
  constructor(t) {
    /// @internal
    a(this, y);
    /// @internal
    a(this, p, void 0);
    /// @internal
    a(this, d, void 0);
    a(this, l, void 0);
    /// @internal
    a(this, c, void 0);
    a(this, u, void 0);
    h(this, l, !1), this.onShow = () => {
    }, this.onHide = () => {
    }, h(this, u, (e, n) => {
      var k;
      const { state: o, composing: m } = e, { selection: f, doc: S } = o, { ranges: g } = f, w = Math.min(...g.map((r) => r.$from.pos)), $ = Math.max(...g.map((r) => r.$to.pos)), E = n && n.doc.eq(S) && n.selection.eq(f);
      if (i(this, l) || ((k = e.dom.parentElement) == null || k.appendChild(this.element), h(this, l, !0)), m || E)
        return;
      if (!i(this, d).call(this, e, n)) {
        this.hide();
        return;
      }
      T({
        getBoundingClientRect: () => M(e, w, $)
      }, this.element, {
        placement: "top",
        middleware: [b(), A(i(this, c))]
      }).then(({ x: r, y: N }) => {
        Object.assign(this.element.style, {
          left: `${r}px`,
          top: `${N}px`
        });
      }), this.show();
    }), this.update = (e, n) => {
      H(i(this, u), i(this, p))(e, n);
    }, this.destroy = () => {
    }, this.show = (e) => {
      this.element.dataset.show = "true", e && T(e, this.element, {
        placement: "top",
        middleware: [b(), A(i(this, c))]
      }).then(({ x: n, y: o }) => {
        Object.assign(this.element.style, {
          left: `${n}px`,
          top: `${o}px`
        });
      }), this.onShow();
    }, this.hide = () => {
      this.element.dataset.show !== "false" && (this.element.dataset.show = "false", this.onHide());
    }, this.element = t.content, h(this, p, t.debounce ?? 200), h(this, d, t.shouldShow ?? P(this, y, C)), h(this, c, t.offset), this.element.dataset.show = "false";
  }
}
p = new WeakMap(), d = new WeakMap(), l = new WeakMap(), c = new WeakMap(), u = new WeakMap(), y = new WeakSet(), C = function(t) {
  const { doc: e, selection: n } = t.state, { empty: o, from: m, to: f } = n, S = !e.textBetween(m, f).length && t.state.selection instanceof _, g = this.element.contains(document.activeElement), w = !t.hasFocus() && !g, $ = !t.editable;
  return !(w || o || S || $);
};
function J(s) {
  const t = O({}, `${s}_ASSISTANT_SPEC`), e = R((o) => {
    const m = o.get(t.key);
    return new B({
      key: new F(`${s}_ASSISTANT`),
      ...m
    });
  }), n = [t, e];
  return n.key = t.key, n.pluginKey = e.key, t.meta = {
    package: "@milkdown/plugin-assistant",
    displayName: `Ctx<assistantSpec>|${s}`
  }, e.meta = {
    package: "@milkdown/plugin-assistant",
    displayName: `Prose<assistant>|${s}`
  }, n;
}
export {
  G as AssistantProvider,
  J as assistantFactory
};
//# sourceMappingURL=index.es.js.map
