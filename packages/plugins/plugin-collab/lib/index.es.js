var b = (o, t, s) => {
  if (!t.has(o))
    throw TypeError("Cannot " + s);
};
var e = (o, t, s) => (b(o, t, "read from private field"), s ? s.call(o) : t.get(o)), c = (o, t, s) => {
  if (t.has(o))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(o) : t.set(o, s);
}, a = (o, t, s, n) => (b(o, t, "write to private field"), n ? n.call(o, s) : t.set(o, s), s);
var d = (o, t, s) => (b(o, t, "access private method"), s);
import { createSlice as j, createTimer as E } from "@milkdown/ctx";
import { schemaCtx as O, parserCtx as L, getDoc as R, prosePluginsCtx as S, editorViewCtx as Y, EditorViewReady as z } from "@milkdown/core";
import { ctxNotBind as m, missingYjsDoc as v } from "@milkdown/exception";
import { keydownHandler as B } from "@milkdown/prose/keymap";
import { PluginKey as V, Plugin as X } from "@milkdown/prose/state";
import { ySyncPlugin as _, yUndoPlugin as H, undo as I, redo as k, yCursorPlugin as W, yDocToProsemirror as q, prosemirrorToYDoc as G, ySyncPluginKey as J, yCursorPluginKey as Q, yUndoPluginKey as Z } from "y-prosemirror";
import { encodeStateAsUpdate as $, applyUpdate as tt } from "yjs";
const M = new V("MILKDOWN_COLLAB_KEYMAP"), et = [M, J, Q, Z];
var h, r, p, i, u, f, U, w, A, g, D;
class N {
  constructor() {
    /// @internal
    c(this, f);
    /// @internal
    c(this, w);
    /// @internal
    c(this, g);
    /// @internal
    c(this, h, {});
    /// @internal
    c(this, r, null);
    /// @internal
    c(this, p, null);
    /// @internal
    c(this, i, null);
    /// @internal
    c(this, u, !1);
  }
  /// Bind the context to the service.
  bindCtx(t) {
    return a(this, i, t), this;
  }
  /// Bind the document to the service.
  bindDoc(t) {
    return a(this, r, t), this;
  }
  /// Set the options of the service.
  setOptions(t) {
    return a(this, h, t), this;
  }
  /// Merge some options to the service.
  /// The options will be merged to the existing options.
  /// THe options should be partial of the `CollabServiceOptions`.
  mergeOptions(t) {
    return Object.assign(e(this, h), t), this;
  }
  /// Set the awareness of the service.
  setAwareness(t) {
    return a(this, p, t), this;
  }
  /// Apply the template to the document.
  applyTemplate(t, s) {
    if (!e(this, i))
      throw m();
    if (!e(this, r))
      throw v();
    const n = s || ((y) => y.textContent.length === 0), l = d(this, f, U).call(this, t), C = e(this, i).get(O), P = q(C, e(this, r));
    if (l && n(P, l)) {
      const y = e(this, r).getXmlFragment("prosemirror");
      y.delete(0, y.length);
      const x = G(l), F = $(x);
      tt(e(this, r), F), x.destroy();
    }
    return this;
  }
  /// Connect the service.
  connect() {
    if (!e(this, i))
      throw m();
    if (e(this, u))
      return;
    const t = e(this, i).get(S), s = d(this, w, A).call(this), n = t.concat(s);
    return d(this, g, D).call(this, n), a(this, u, !0), this;
  }
  /// Disconnect the service.
  disconnect() {
    if (!e(this, i))
      throw m();
    if (!e(this, u))
      return this;
    const s = e(this, i).get(S).filter(
      (n) => !n.spec.key || !et.includes(n.spec.key)
    );
    return d(this, g, D).call(this, s), a(this, u, !1), this;
  }
}
h = new WeakMap(), r = new WeakMap(), p = new WeakMap(), i = new WeakMap(), u = new WeakMap(), f = new WeakSet(), U = function(t) {
  if (!e(this, i))
    throw m();
  const s = e(this, i).get(O), n = e(this, i).get(L);
  return R(t, n, s);
}, w = new WeakSet(), A = function() {
  if (!e(this, r))
    throw v();
  const { ySyncOpts: t, yUndoOpts: s } = e(this, h), n = e(this, r).getXmlFragment("prosemirror"), l = [
    _(n, t),
    H(s),
    new X({
      key: M,
      props: {
        handleKeyDown: B({
          "Mod-z": I,
          "Mod-y": k,
          "Mod-Shift-z": k
        })
      }
    })
  ];
  if (e(this, p)) {
    const { yCursorOpts: C, yCursorStateField: P } = e(this, h);
    l.push(W(e(this, p), C, P));
  }
  return l;
}, g = new WeakSet(), D = function(t) {
  if (!e(this, i))
    throw m();
  e(this, i).set(S, t);
  const s = e(this, i).get(Y), n = s.state.reconfigure({ plugins: t });
  s.updateState(n);
};
const T = j(new N(), "collabServiceCtx"), K = E("CollabReady"), st = (o) => {
  const t = new N();
  return o.inject(T, t).record(K), async () => (await o.wait(z), t.bindCtx(o), o.done(K), () => {
    o.remove(T).clearTimer(K);
  });
};
st.meta = {
  package: "@milkdown/plugin-collab",
  displayName: "Collab"
};
export {
  M as CollabKeymapPluginKey,
  K as CollabReady,
  N as CollabService,
  st as collab,
  T as collabServiceCtx
};
//# sourceMappingURL=index.es.js.map
