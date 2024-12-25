import { $markAttr as _, $markSchema as E, $command as p, $inputRule as f, $useKeymap as N, $node as Ye, $nodeAttr as I, $nodeSchema as C, $ctx as Ze, $remark as P, $prose as $ } from "@milkdown/utils";
import { remarkStringifyOptionsCtx as et, commandsCtx as u, editorViewCtx as Bt } from "@milkdown/core";
import { toggleMark as z, setBlockType as K, wrapIn as Y } from "@milkdown/prose/commands";
import { Fragment as Rt } from "@milkdown/prose/model";
import { expectDomTypeError as w } from "@milkdown/exception";
import { textblockTypeInputRule as tt, wrappingInputRule as Z, InputRule as rt } from "@milkdown/prose/inputrules";
import Ot from "@sindresorhus/slugify";
import { TextSelection as J, Selection as at, PluginKey as q, Plugin as W } from "@milkdown/prose/state";
import { markRule as Q, findSelectedNodeOfType as Tt } from "@milkdown/prose";
import { sinkListItem as Dt, liftListItem as nt, splitListItem as Kt } from "@milkdown/prose/schema-list";
import { ReplaceStep as _t, AddMarkStep as Et } from "@milkdown/prose/transform";
import { Decoration as Qe, DecorationSet as Xe } from "@milkdown/prose/view";
import { visit as ee } from "unist-util-visit";
import Pt from "remark-inline-links";
function ot(t, e) {
  var o;
  if (!(e.childCount >= 1 && ((o = e.lastChild) == null ? void 0 : o.type.name) === "hardbreak")) {
    t.next(e.content);
    return;
  }
  const a = [];
  e.content.forEach((s, l, i) => {
    i !== e.childCount - 1 && a.push(s);
  }), t.next(Rt.fromArray(a));
}
function n(t, e) {
  return Object.assign(t, {
    meta: {
      package: "@milkdown/preset-commonmark",
      ...e
    }
  }), t;
}
const te = _("emphasis");
n(te, {
  displayName: "Attr<emphasis>",
  group: "Emphasis"
});
const R = E("emphasis", (t) => ({
  attrs: {
    marker: {
      default: t.get(et).emphasis || "*"
    }
  },
  parseDOM: [
    { tag: "i" },
    { tag: "em" },
    { style: "font-style", getAttrs: (e) => e === "italic" }
  ],
  toDOM: (e) => ["em", t.get(te.key)(e)],
  parseMarkdown: {
    match: (e) => e.type === "emphasis",
    runner: (e, r, a) => {
      e.openMark(a, { marker: r.marker }), e.next(r.children), e.closeMark(a);
    }
  },
  toMarkdown: {
    match: (e) => e.type.name === "emphasis",
    runner: (e, r) => {
      e.withMark(r, "emphasis", void 0, {
        marker: r.attrs.marker
      });
    }
  }
}));
n(R.mark, {
  displayName: "MarkSchema<emphasis>",
  group: "Emphasis"
});
n(R.ctx, {
  displayName: "MarkSchemaCtx<emphasis>",
  group: "Emphasis"
});
const re = p("ToggleEmphasis", (t) => () => z(R.type(t)));
n(re, {
  displayName: "Command<toggleEmphasisCommand>",
  group: "Emphasis"
});
const st = f((t) => Q(/(?:^|[^*])\*([^*]+)\*$/, R.type(t), {
  getAttr: () => ({
    marker: "*"
  }),
  updateCaptured: ({ fullMatch: e, start: r }) => e.startsWith("*") ? {} : { fullMatch: e.slice(1), start: r + 1 }
}));
n(st, {
  displayName: "InputRule<emphasis>|Star",
  group: "Emphasis"
});
const lt = f((t) => Q(/(?:^|[^_])_([^_]+)_$/, R.type(t), {
  getAttr: () => ({
    marker: "_"
  }),
  updateCaptured: ({ fullMatch: e, start: r }) => e.startsWith("_") ? {} : { fullMatch: e.slice(1), start: r + 1 }
}));
n(lt, {
  displayName: "InputRule<emphasis>|Underscore",
  group: "Emphasis"
});
const ae = N("emphasisKeymap", {
  ToggleEmphasis: {
    shortcuts: "Mod-i",
    command: (t) => {
      const e = t.get(u);
      return () => e.call(re.key);
    }
  }
});
n(ae.ctx, {
  displayName: "KeymapCtx<emphasis>",
  group: "Emphasis"
});
n(ae.shortcuts, {
  displayName: "Keymap<emphasis>",
  group: "Emphasis"
});
const ne = _("strong");
n(ne, {
  displayName: "Attr<strong>",
  group: "Strong"
});
const F = E("strong", (t) => ({
  attrs: {
    marker: {
      default: t.get(et).strong || "*"
    }
  },
  parseDOM: [
    { tag: "b" },
    { tag: "strong" },
    { style: "font-style", getAttrs: (e) => e === "bold" }
  ],
  toDOM: (e) => ["strong", t.get(ne.key)(e)],
  parseMarkdown: {
    match: (e) => e.type === "strong",
    runner: (e, r, a) => {
      e.openMark(a, { marker: r.marker }), e.next(r.children), e.closeMark(a);
    }
  },
  toMarkdown: {
    match: (e) => e.type.name === "strong",
    runner: (e, r) => {
      e.withMark(r, "strong", void 0, {
        marker: r.attrs.marker
      });
    }
  }
}));
n(F.mark, {
  displayName: "MarkSchema<strong>",
  group: "Strong"
});
n(F.ctx, {
  displayName: "MarkSchemaCtx<strong>",
  group: "Strong"
});
const oe = p("ToggleStrong", (t) => () => z(F.type(t)));
n(oe, {
  displayName: "Command<toggleStrongCommand>",
  group: "Strong"
});
const it = f((t) => Q(/(?:\*\*|__)([^*_]+)(?:\*\*|__)$/, F.type(t), {
  getAttr: (e) => ({
    marker: e[0].startsWith("*") ? "*" : "_"
  })
}));
n(it, {
  displayName: "InputRule<strong>",
  group: "Strong"
});
const se = N("strongKeymap", {
  ToggleBold: {
    shortcuts: ["Mod-b"],
    command: (t) => {
      const e = t.get(u);
      return () => e.call(oe.key);
    }
  }
});
n(se.ctx, {
  displayName: "KeymapCtx<strong>",
  group: "Strong"
});
n(se.shortcuts, {
  displayName: "Keymap<strong>",
  group: "Strong"
});
const le = _("inlineCode");
n(le, {
  displayName: "Attr<inlineCode>",
  group: "InlineCode"
});
const x = E("inlineCode", (t) => ({
  priority: 100,
  code: !0,
  inclusive: !1,
  parseDOM: [{ tag: "code" }],
  toDOM: (e) => ["code", t.get(le.key)(e)],
  parseMarkdown: {
    match: (e) => e.type === "inlineCode",
    runner: (e, r, a) => {
      e.openMark(a), e.addText(r.value), e.closeMark(a);
    }
  },
  toMarkdown: {
    match: (e) => e.type.name === "inlineCode",
    runner: (e, r, a) => {
      e.withMark(r, "inlineCode", a.text || "");
    }
  }
}));
n(x.mark, {
  displayName: "MarkSchema<inlineCode>",
  group: "InlineCode"
});
n(x.ctx, {
  displayName: "MarkSchemaCtx<inlineCode>",
  group: "InlineCode"
});
const ie = p("ToggleInlineCode", (t) => () => (e, r) => {
  const { selection: a, tr: o } = e;
  if (a.empty)
    return !1;
  const { from: s, to: l } = a;
  return e.doc.rangeHasMark(s, l, x.type(t)) ? (r == null || r(o.removeMark(s, l, x.type(t))), !0) : (Object.keys(e.schema.marks).filter((m) => m !== x.type.name).map((m) => e.schema.marks[m]).forEach((m) => {
    o.removeMark(s, l, m);
  }), r == null || r(o.addMark(s, l, x.type(t).create())), !0);
});
n(ie, {
  displayName: "Command<toggleInlineCodeCommand>",
  group: "InlineCode"
});
const dt = f((t) => Q(/(?:`)([^`]+)(?:`)$/, x.type(t)));
n(dt, {
  displayName: "InputRule<inlineCodeInputRule>",
  group: "InlineCode"
});
const de = N("inlineCodeKeymap", {
  ToggleInlineCode: {
    shortcuts: "Mod-e",
    command: (t) => {
      const e = t.get(u);
      return () => e.call(ie.key);
    }
  }
});
n(de.ctx, {
  displayName: "KeymapCtx<inlineCode>",
  group: "InlineCode"
});
n(de.shortcuts, {
  displayName: "Keymap<inlineCode>",
  group: "InlineCode"
});
const me = _("link");
n(me, {
  displayName: "Attr<link>",
  group: "Link"
});
const v = E("link", (t) => ({
  attrs: {
    href: {},
    title: { default: null }
  },
  parseDOM: [
    {
      tag: "a[href]",
      getAttrs: (e) => {
        if (!(e instanceof HTMLElement))
          throw w(e);
        return { href: e.getAttribute("href"), title: e.getAttribute("title") };
      }
    }
  ],
  toDOM: (e) => ["a", { ...t.get(me.key)(e), ...e.attrs }],
  parseMarkdown: {
    match: (e) => e.type === "link",
    runner: (e, r, a) => {
      const o = r.url, s = r.title;
      e.openMark(a, { href: o, title: s }), e.next(r.children), e.closeMark(a);
    }
  },
  toMarkdown: {
    match: (e) => e.type.name === "link",
    runner: (e, r) => {
      e.withMark(r, "link", void 0, {
        title: r.attrs.title,
        url: r.attrs.href
      });
    }
  }
}));
n(v.mark, {
  displayName: "MarkSchema<link>",
  group: "Link"
});
const mt = p("ToggleLink", (t) => (e = {}) => z(v.type(t), e));
n(mt, {
  displayName: "Command<toggleLinkCommand>",
  group: "Link"
});
const ct = p("UpdateLink", (t) => (e = {}) => (r, a) => {
  if (!a)
    return !1;
  let o, s = -1;
  const { selection: l } = r, { from: i, to: d } = l;
  if (r.doc.nodesBetween(i, i === d ? d + 1 : d, (h, M) => {
    if (v.type(t).isInSet(h.marks))
      return o = h, s = M, !1;
  }), !o)
    return !1;
  const m = o.marks.find(({ type: h }) => h === v.type(t));
  if (!m)
    return !1;
  const c = s, y = s + o.nodeSize, { tr: g } = r, k = v.type(t).create({ ...m.attrs, ...e });
  return k ? (a(
    g.removeMark(c, y, m).addMark(c, y, k).setSelection(new J(g.selection.$anchor)).scrollIntoView()
  ), !0) : !1;
});
n(ct, {
  displayName: "Command<updateLinkCommand>",
  group: "Link"
});
const ce = _("highlight");
n(ce, {
  displayName: "Attr<highlight>",
  group: "Highlight"
});
const B = E("highlight", (t) => ({
  attrs: {
    color: { default: "yellow" }
  },
  parseDOM: [
    {
      tag: "span[data-highlight]",
      getAttrs: (e) => ({ color: e.getAttribute("data-color") || "yellow" })
    }
  ],
  //toDOM: mark => ['span', { ...ctx.get(highlightAttr.key)(mark), ...mark.attrs }],
  toDOM(e) {
    return [
      "span",
      {
        ...t.get(ce.key)(e),
        "data-highlight": "true",
        "data-color": e.attrs.color,
        style: `background-color: ${e.attrs.color};`
      },
      0
    ];
  },
  parseMarkdown: {
    match: (e) => e.type === "highlight",
    runner: (e, r, a) => {
      const o = r.color;
      e.openMark(a, { color: o }), e.next(r.children), e.closeMark(a);
    }
  },
  toMarkdown: {
    match: (e) => e.type.name === "highlight",
    runner: (e, r) => {
      e.withMark(r, "highlight", void 0, {
        color: r.attrs.color
      });
    }
  }
}));
n(B.mark, {
  displayName: "MarkSchema<highlight>",
  group: "Highlight"
});
const pt = p("ToggleHighlight", (t) => (e = {}) => z(B.type(t), e));
n(pt, {
  displayName: "Command<toggleHighlightCommand>",
  group: "Highlight"
});
const ut = p("UpdateHighlight", (t) => (e = {}) => (r, a) => {
  if (!a)
    return !1;
  let o, s = -1;
  const { selection: l } = r, { from: i, to: d } = l;
  if (r.doc.nodesBetween(i, i === d ? d + 1 : d, (h, M) => {
    if (B.type(t).isInSet(h.marks))
      return o = h, s = M, !1;
  }), !o)
    return !1;
  const m = o.marks.find(({ type: h }) => h === B.type(t));
  if (!m)
    return !1;
  const c = s, y = s + o.nodeSize, { tr: g } = r, k = B.type(t).create({ ...m.attrs, ...e });
  return k ? (a(
    g.removeMark(c, y, m).addMark(c, y, k).setSelection(new J(g.selection.$anchor)).scrollIntoView()
  ), !0) : !1;
});
n(ut, {
  displayName: "Command<updateHighlightCommand>",
  group: "Highlight"
});
const gt = Ye("doc", () => ({
  content: "block+",
  parseMarkdown: {
    match: ({ type: t }) => t === "root",
    runner: (t, e, r) => {
      t.injectRoot(e, r);
    }
  },
  toMarkdown: {
    match: (t) => t.type.name === "doc",
    runner: (t, e) => {
      t.openNode("root"), t.next(e.content);
    }
  }
}));
n(gt, {
  displayName: "NodeSchema<doc>",
  group: "Doc"
});
const pe = I("paragraph");
n(pe, {
  displayName: "Attr<paragraph>",
  group: "Paragraph"
});
const A = C("paragraph", (t) => ({
  content: "inline*",
  group: "block",
  parseDOM: [{ tag: "p" }],
  toDOM: (e) => ["p", t.get(pe.key)(e), 0],
  parseMarkdown: {
    match: (e) => e.type === "paragraph",
    runner: (e, r, a) => {
      e.openNode(a), r.children ? e.next(r.children) : e.addText(r.value || ""), e.closeNode();
    }
  },
  toMarkdown: {
    match: (e) => e.type.name === "paragraph",
    runner: (e, r) => {
      e.openNode("paragraph"), ot(e, r), e.closeNode();
    }
  }
}));
n(A.node, {
  displayName: "NodeSchema<paragraph>",
  group: "Paragraph"
});
n(A.ctx, {
  displayName: "NodeSchemaCtx<paragraph>",
  group: "Paragraph"
});
const ue = p("TurnIntoText", (t) => () => K(A.type(t)));
n(ue, {
  displayName: "Command<turnIntoTextCommand>",
  group: "Paragraph"
});
const ge = N("paragraphKeymap", {
  TurnIntoText: {
    shortcuts: "Mod-Alt-0",
    command: (t) => {
      const e = t.get(u);
      return () => e.call(ue.key);
    }
  }
});
n(ge.ctx, {
  displayName: "KeymapCtx<paragraph>",
  group: "Paragraph"
});
n(ge.shortcuts, {
  displayName: "Keymap<paragraph>",
  group: "Paragraph"
});
const $t = Array(6).fill(0).map((t, e) => e + 1);
function qt(t) {
  return Ot(t.textContent);
}
const X = Ze(qt, "headingIdGenerator");
n(X, {
  displayName: "Ctx<HeadingIdGenerator>",
  group: "Heading"
});
const he = I("heading");
n(he, {
  displayName: "Attr<heading>",
  group: "Heading"
});
const H = C("heading", (t) => {
  const e = t.get(X.key);
  return {
    content: "inline*",
    group: "block",
    defining: !0,
    attrs: {
      id: {
        default: ""
      },
      level: {
        default: 1
      }
    },
    parseDOM: $t.map((r) => ({
      tag: `h${r}`,
      getAttrs: (a) => {
        if (!(a instanceof HTMLElement))
          throw w(a);
        return { level: r, id: a.id };
      }
    })),
    toDOM: (r) => [
      `h${r.attrs.level}`,
      {
        ...t.get(he.key)(r),
        id: r.attrs.id || e(r)
      },
      0
    ],
    parseMarkdown: {
      match: ({ type: r }) => r === "heading",
      runner: (r, a, o) => {
        const s = a.depth;
        r.openNode(o, { level: s }), r.next(a.children), r.closeNode();
      }
    },
    toMarkdown: {
      match: (r) => r.type.name === "heading",
      runner: (r, a) => {
        r.openNode("heading", void 0, { depth: a.attrs.level }), ot(r, a), r.closeNode();
      }
    }
  };
});
n(H.node, {
  displayName: "NodeSchema<heading>",
  group: "Heading"
});
n(H.ctx, {
  displayName: "NodeSchemaCtx<heading>",
  group: "Heading"
});
const ht = f((t) => tt(/^(?<hashes>#+)\s$/, H.type(t), (e) => {
  var l, i;
  const r = ((i = (l = e.groups) == null ? void 0 : l.hashes) == null ? void 0 : i.length) || 0, a = t.get(Bt), { $from: o } = a.state.selection, s = o.node();
  if (s.type.name === "heading") {
    let d = Number(s.attrs.level) + Number(r);
    return d > 6 && (d = 6), { level: d };
  }
  return { level: r };
}));
n(ht, {
  displayName: "InputRule<wrapInHeadingInputRule>",
  group: "Heading"
});
const L = p("WrapInHeading", (t) => (e) => (e ?? (e = 1), e < 1 ? K(A.type(t)) : K(H.type(t), { level: e })));
n(L, {
  displayName: "Command<wrapInHeadingCommand>",
  group: "Heading"
});
const ye = p("DowngradeHeading", (t) => () => (e, r, a) => {
  const { $from: o } = e.selection, s = o.node();
  if (s.type !== H.type(t) || !e.selection.empty || o.parentOffset !== 0)
    return !1;
  const l = s.attrs.level - 1;
  return l ? (r == null || r(
    e.tr.setNodeMarkup(e.selection.$from.before(), void 0, {
      ...s.attrs,
      level: l
    })
  ), !0) : K(A.type(t))(e, r, a);
});
n(ye, {
  displayName: "Command<downgradeHeadingCommand>",
  group: "Heading"
});
const ke = N("headingKeymap", {
  TurnIntoH1: {
    shortcuts: "Mod-Alt-1",
    command: (t) => {
      const e = t.get(u);
      return () => e.call(L.key, 1);
    }
  },
  TurnIntoH2: {
    shortcuts: "Mod-Alt-2",
    command: (t) => {
      const e = t.get(u);
      return () => e.call(L.key, 2);
    }
  },
  TurnIntoH3: {
    shortcuts: "Mod-Alt-3",
    command: (t) => {
      const e = t.get(u);
      return () => e.call(L.key, 3);
    }
  },
  TurnIntoH4: {
    shortcuts: "Mod-Alt-4",
    command: (t) => {
      const e = t.get(u);
      return () => e.call(L.key, 4);
    }
  },
  TurnIntoH5: {
    shortcuts: "Mod-Alt-5",
    command: (t) => {
      const e = t.get(u);
      return () => e.call(L.key, 5);
    }
  },
  TurnIntoH6: {
    shortcuts: "Mod-Alt-6",
    command: (t) => {
      const e = t.get(u);
      return () => e.call(L.key, 6);
    }
  },
  DowngradeHeading: {
    shortcuts: ["Delete", "Backspace"],
    command: (t) => {
      const e = t.get(u);
      return () => e.call(ye.key);
    }
  }
});
n(ke.ctx, {
  displayName: "KeymapCtx<heading>",
  group: "Heading"
});
n(ke.shortcuts, {
  displayName: "Keymap<heading>",
  group: "Heading"
});
const fe = I("blockquote");
n(fe, {
  displayName: "Attr<blockquote>",
  group: "Blockquote"
});
const V = C("blockquote", (t) => ({
  content: "block+",
  group: "block",
  defining: !0,
  parseDOM: [{ tag: "blockquote" }],
  toDOM: (e) => ["blockquote", t.get(fe.key)(e), 0],
  parseMarkdown: {
    match: ({ type: e }) => e === "blockquote",
    runner: (e, r, a) => {
      e.openNode(a).next(r.children).closeNode();
    }
  },
  toMarkdown: {
    match: (e) => e.type.name === "blockquote",
    runner: (e, r) => {
      e.openNode("blockquote").next(r.content).closeNode();
    }
  }
}));
n(V.node, {
  displayName: "NodeSchema<blockquote>",
  group: "Blockquote"
});
n(V.ctx, {
  displayName: "NodeSchemaCtx<blockquote>",
  group: "Blockquote"
});
const yt = f((t) => Z(/^\s*>\s$/, V.type(t)));
n(yt, {
  displayName: "InputRule<wrapInBlockquoteInputRule>",
  group: "Blockquote"
});
const Ne = p("WrapInBlockquote", (t) => () => Y(V.type(t)));
n(Ne, {
  displayName: "Command<wrapInBlockquoteCommand>",
  group: "Blockquote"
});
const Ie = N("blockquoteKeymap", {
  WrapInBlockquote: {
    shortcuts: "Mod-Shift-b",
    command: (t) => {
      const e = t.get(u);
      return () => e.call(Ne.key);
    }
  }
});
n(Ie.ctx, {
  displayName: "KeymapCtx<blockquote>",
  group: "Blockquote"
});
n(Ie.shortcuts, {
  displayName: "Keymap<blockquote>",
  group: "Blockquote"
});
const Ce = I("codeBlock", () => ({
  pre: {},
  code: {}
}));
n(Ce, {
  displayName: "Attr<codeBlock>",
  group: "CodeBlock"
});
const U = C("code_block", (t) => ({
  content: "text*",
  group: "block",
  marks: "",
  defining: !0,
  code: !0,
  attrs: {
    language: {
      default: ""
    }
  },
  parseDOM: [
    {
      tag: "pre",
      preserveWhitespace: "full",
      getAttrs: (e) => {
        if (!(e instanceof HTMLElement))
          throw w(e);
        return { language: e.dataset.language };
      }
    }
  ],
  toDOM: (e) => {
    const r = t.get(Ce.key)(e);
    return [
      "pre",
      {
        ...r.pre,
        "data-language": e.attrs.language
      },
      ["code", r.code, 0]
    ];
  },
  parseMarkdown: {
    match: ({ type: e }) => e === "code",
    runner: (e, r, a) => {
      const o = r.lang, s = r.value;
      e.openNode(a, { language: o }), s && e.addText(s), e.closeNode();
    }
  },
  toMarkdown: {
    match: (e) => e.type.name === "code_block",
    runner: (e, r) => {
      var a;
      e.addNode("code", void 0, ((a = r.content.firstChild) == null ? void 0 : a.text) || "", {
        lang: r.attrs.language
      });
    }
  }
}));
n(U.node, {
  displayName: "NodeSchema<codeBlock>",
  group: "CodeBlock"
});
n(U.ctx, {
  displayName: "NodeSchemaCtx<codeBlock>",
  group: "CodeBlock"
});
const kt = f((t) => tt(/^```(?<language>[a-z]*)?[\s\n]$/, U.type(t), (e) => {
  var r;
  return {
    language: ((r = e.groups) == null ? void 0 : r.language) ?? ""
  };
}));
n(kt, {
  displayName: "InputRule<createCodeBlockInputRule>",
  group: "CodeBlock"
});
const Me = p("CreateCodeBlock", (t) => (e = "") => K(U.type(t), { language: e }));
n(Me, {
  displayName: "Command<createCodeBlockCommand>",
  group: "CodeBlock"
});
const Wt = p("UpdateCodeBlockLanguage", () => ({ pos: t, language: e } = { pos: -1, language: "" }) => (r, a) => t >= 0 ? (a == null || a(r.tr.setNodeAttribute(t, "language", e)), !0) : !1);
n(Wt, {
  displayName: "Command<updateCodeBlockLanguageCommand>",
  group: "CodeBlock"
});
const be = N("codeBlockKeymap", {
  CreateCodeBlock: {
    shortcuts: "Mod-Alt-c",
    command: (t) => {
      const e = t.get(u);
      return () => e.call(Me.key);
    }
  }
});
n(be.ctx, {
  displayName: "KeymapCtx<codeBlock>",
  group: "CodeBlock"
});
n(be.shortcuts, {
  displayName: "Keymap<codeBlock>",
  group: "CodeBlock"
});
const Le = I("image");
n(Le, {
  displayName: "Attr<image>",
  group: "Image"
});
const O = C("image", (t) => ({
  inline: !0,
  group: "inline",
  selectable: !0,
  draggable: !0,
  marks: "",
  atom: !0,
  defining: !0,
  isolating: !0,
  attrs: {
    src: { default: "" },
    alt: { default: "" },
    title: { default: "" }
  },
  parseDOM: [
    {
      tag: "img[src]",
      getAttrs: (e) => {
        if (!(e instanceof HTMLElement))
          throw w(e);
        return {
          src: e.getAttribute("src") || "",
          alt: e.getAttribute("alt") || "",
          title: e.getAttribute("title") || e.getAttribute("alt") || ""
        };
      }
    }
  ],
  toDOM: (e) => ["img", { ...t.get(Le.key)(e), ...e.attrs }],
  parseMarkdown: {
    match: ({ type: e }) => e === "image",
    runner: (e, r, a) => {
      const o = r.url, s = r.alt, l = r.title;
      e.addNode(a, {
        src: o,
        alt: s,
        title: l
      });
    }
  },
  toMarkdown: {
    match: (e) => e.type.name === "image",
    runner: (e, r) => {
      e.addNode("image", void 0, void 0, {
        title: r.attrs.title,
        url: r.attrs.src,
        alt: r.attrs.alt
      });
    }
  }
}));
n(O.node, {
  displayName: "NodeSchema<image>",
  group: "Image"
});
n(O.ctx, {
  displayName: "NodeSchemaCtx<image>",
  group: "Image"
});
const ft = p("InsertImage", (t) => (e = {}) => (r, a) => {
  if (!a)
    return !0;
  const { src: o = "", alt: s = "", title: l = "" } = e, i = O.type(t).create({ src: o, alt: s, title: l });
  return i && a(r.tr.replaceSelectionWith(i).scrollIntoView()), !0;
});
n(ft, {
  displayName: "Command<insertImageCommand>",
  group: "Image"
});
const Nt = p("UpdateImage", (t) => (e = {}) => (r, a) => {
  const o = Tt(r.selection, O.type(t));
  if (!o)
    return !1;
  const { node: s, pos: l } = o, i = { ...s.attrs }, { src: d, alt: m, title: c } = e;
  return d !== void 0 && (i.src = d), m !== void 0 && (i.alt = m), c !== void 0 && (i.title = c), a == null || a(r.tr.setNodeMarkup(l, void 0, i).scrollIntoView()), !0;
});
n(Nt, {
  displayName: "Command<updateImageCommand>",
  group: "Image"
});
const Ft = f((t) => new rt(
  /!\[(?<alt>.*?)]\((?<filename>.*?)\s*(?="|\))"?(?<title>[^"]+)?"?\)/,
  (e, r, a, o) => {
    const [s, l, i = "", d] = r;
    return s ? e.tr.replaceWith(a, o, O.type(t).create({ src: i, alt: l, title: d })) : null;
  }
));
n(Ft, {
  displayName: "InputRule<insertImageInputRule>",
  group: "Image"
});
const j = I("hardbreak", (t) => ({
  "data-type": "hardbreak",
  "data-is-inline": t.attrs.isInline
}));
n(j, {
  displayName: "Attr<hardbreak>",
  group: "Hardbreak"
});
const S = C("hardbreak", (t) => ({
  inline: !0,
  group: "inline",
  attrs: {
    isInline: {
      default: !1
    }
  },
  selectable: !1,
  parseDOM: [{ tag: "br" }, { tag: 'span[data-type="hardbreak"]', getAttrs: () => ({ isInline: !0 }) }],
  toDOM: (e) => e.attrs.isInline ? ["span", t.get(j.key)(e), " "] : ["br", t.get(j.key)(e)],
  parseMarkdown: {
    match: ({ type: e }) => e === "break",
    runner: (e, r, a) => {
      var o;
      e.addNode(a, { isInline: !!((o = r.data) != null && o.isInline) });
    }
  },
  leafText: () => `
`,
  toMarkdown: {
    match: (e) => e.type.name === "hardbreak",
    runner: (e, r) => {
      r.attrs.isInline ? e.addNode("text", void 0, `
`) : e.addNode("break");
    }
  }
}));
n(S.node, {
  displayName: "NodeSchema<hardbreak>",
  group: "Hardbreak"
});
n(S.ctx, {
  displayName: "NodeSchemaCtx<hardbreak>",
  group: "Hardbreak"
});
const xe = p("InsertHardbreak", (t) => () => (e, r) => {
  var s;
  const { selection: a, tr: o } = e;
  if (!(a instanceof J))
    return !1;
  if (a.empty) {
    const l = a.$from.node();
    if (l.childCount > 0 && ((s = l.lastChild) == null ? void 0 : s.type.name) === "hardbreak")
      return r == null || r(
        o.replaceRangeWith(a.to - 1, a.to, e.schema.node("paragraph")).setSelection(at.near(o.doc.resolve(a.to))).scrollIntoView()
      ), !0;
  }
  return r == null || r(o.setMeta("hardbreak", !0).replaceSelectionWith(S.type(t).create()).scrollIntoView()), !0;
});
n(xe, {
  displayName: "Command<insertHardbreakCommand>",
  group: "Hardbreak"
});
const Se = N("hardbreakKeymap", {
  InsertHardbreak: {
    shortcuts: "Shift-Enter",
    command: (t) => {
      const e = t.get(u);
      return () => e.call(xe.key);
    }
  }
});
n(Se.ctx, {
  displayName: "KeymapCtx<hardbreak>",
  group: "Hardbreak"
});
n(Se.shortcuts, {
  displayName: "Keymap<hardbreak>",
  group: "Hardbreak"
});
const we = I("hr");
n(we, {
  displayName: "Attr<hr>",
  group: "Hr"
});
const G = C("hr", (t) => ({
  group: "block",
  parseDOM: [{ tag: "hr" }],
  toDOM: (e) => ["hr", t.get(we.key)(e)],
  parseMarkdown: {
    match: ({ type: e }) => e === "thematicBreak",
    runner: (e, r, a) => {
      e.addNode(a);
    }
  },
  toMarkdown: {
    match: (e) => e.type.name === "hr",
    runner: (e) => {
      e.addNode("thematicBreak");
    }
  }
}));
n(G.node, {
  displayName: "NodeSchema<hr>",
  group: "Hr"
});
n(G.ctx, {
  displayName: "NodeSchemaCtx<hr>",
  group: "Hr"
});
const It = f((t) => new rt(
  /^(?:---|___\s|\*\*\*\s)$/,
  (e, r, a, o) => {
    const { tr: s } = e;
    return r[0] && s.replaceWith(a - 1, o, G.type(t).create()), s;
  }
));
n(It, {
  displayName: "InputRule<insertHrInputRule>",
  group: "Hr"
});
const Ct = p("InsertHr", (t) => () => (e, r) => {
  if (!r)
    return !0;
  const a = A.node.type(t).create(), { tr: o, selection: s } = e, { from: l } = s, i = G.type(t).create();
  if (!i)
    return !0;
  const d = o.replaceSelectionWith(i).insert(l, a), m = at.findFrom(d.doc.resolve(l), 1, !0);
  return m && r(d.setSelection(m).scrollIntoView()), !0;
});
n(Ct, {
  displayName: "Command<insertHrCommand>",
  group: "Hr"
});
const Ae = I("bulletList");
n(Ae, {
  displayName: "Attr<bulletList>",
  group: "BulletList"
});
const T = C("bullet_list", (t) => ({
  content: "listItem+",
  group: "block",
  attrs: {
    spread: {
      default: !1
    }
  },
  parseDOM: [
    {
      tag: "ul",
      getAttrs: (e) => {
        if (!(e instanceof HTMLElement))
          throw w(e);
        return {
          spread: e.dataset.spread
        };
      }
    }
  ],
  toDOM: (e) => [
    "ul",
    {
      ...t.get(Ae.key)(e),
      "data-spread": e.attrs.spread
    },
    0
  ],
  parseMarkdown: {
    match: ({ type: e, ordered: r }) => e === "list" && !r,
    runner: (e, r, a) => {
      const o = r.spread != null ? `${r.spread}` : "false";
      e.openNode(a, { spread: o }).next(r.children).closeNode();
    }
  },
  toMarkdown: {
    match: (e) => e.type.name === "bullet_list",
    runner: (e, r) => {
      e.openNode("list", void 0, { ordered: !1, spread: r.attrs.spread === "true" }).next(r.content).closeNode();
    }
  }
}));
n(T.node, {
  displayName: "NodeSchema<bulletList>",
  group: "BulletList"
});
n(T.ctx, {
  displayName: "NodeSchemaCtx<bulletList>",
  group: "BulletList"
});
const Mt = f((t) => Z(/^\s*([-+*])\s$/, T.type(t)));
n(Mt, {
  displayName: "InputRule<wrapInBulletListInputRule>",
  group: "BulletList"
});
const He = p("WrapInBulletList", (t) => () => Y(T.type(t)));
n(He, {
  displayName: "Command<wrapInBulletListCommand>",
  group: "BulletList"
});
const ve = N("bulletListKeymap", {
  WrapInBulletList: {
    shortcuts: "Mod-Alt-8",
    command: (t) => {
      const e = t.get(u);
      return () => e.call(He.key);
    }
  }
});
n(ve.ctx, {
  displayName: "KeymapCtx<bulletListKeymap>",
  group: "BulletList"
});
n(ve.shortcuts, {
  displayName: "Keymap<bulletListKeymap>",
  group: "BulletList"
});
const Be = I("orderedList");
n(Be, {
  displayName: "Attr<orderedList>",
  group: "OrderedList"
});
const D = C("ordered_list", (t) => ({
  content: "listItem+",
  group: "block",
  attrs: {
    order: {
      default: 1
    },
    spread: {
      default: !1
    }
  },
  parseDOM: [
    {
      tag: "ol",
      getAttrs: (e) => {
        if (!(e instanceof HTMLElement))
          throw w(e);
        return {
          spread: e.dataset.spread,
          order: e.hasAttribute("start") ? Number(e.getAttribute("start")) : 1
        };
      }
    }
  ],
  toDOM: (e) => [
    "ol",
    {
      ...t.get(Be.key)(e),
      ...e.attrs.order === 1 ? {} : e.attrs.order,
      "data-spread": e.attrs.spread
    },
    0
  ],
  parseMarkdown: {
    match: ({ type: e, ordered: r }) => e === "list" && !!r,
    runner: (e, r, a) => {
      const o = r.spread != null ? `${r.spread}` : "true";
      e.openNode(a, { spread: o }).next(r.children).closeNode();
    }
  },
  toMarkdown: {
    match: (e) => e.type.name === "ordered_list",
    runner: (e, r) => {
      e.openNode("list", void 0, { ordered: !0, start: 1, spread: r.attrs.spread === "true" }), e.next(r.content), e.closeNode();
    }
  }
}));
n(D.node, {
  displayName: "NodeSchema<orderedList>",
  group: "OrderedList"
});
n(D.ctx, {
  displayName: "NodeSchemaCtx<orderedList>",
  group: "OrderedList"
});
const bt = f((t) => Z(
  /^\s*(\d+)\.\s$/,
  D.type(t),
  (e) => ({ order: Number(e[1]) }),
  (e, r) => r.childCount + r.attrs.order === Number(e[1])
));
n(bt, {
  displayName: "InputRule<wrapInOrderedListInputRule>",
  group: "OrderedList"
});
const Re = p("WrapInOrderedList", (t) => () => Y(D.type(t)));
n(Re, {
  displayName: "Command<wrapInOrderedListCommand>",
  group: "OrderedList"
});
const Oe = N("orderedListKeymap", {
  WrapInOrderedList: {
    shortcuts: "Mod-Alt-7",
    command: (t) => {
      const e = t.get(u);
      return () => e.call(Re.key);
    }
  }
});
n(Oe.ctx, {
  displayName: "KeymapCtx<orderedList>",
  group: "OrderedList"
});
n(Oe.shortcuts, {
  displayName: "Keymap<orderedList>",
  group: "OrderedList"
});
const Te = I("listItem");
n(Te, {
  displayName: "Attr<listItem>",
  group: "ListItem"
});
const b = C("list_item", (t) => ({
  group: "listItem",
  content: "(paragraph|blockquote) block*",
  attrs: {
    label: {
      default: "•"
    },
    listType: {
      default: "bullet"
    },
    spread: {
      default: "true"
    }
  },
  defining: !0,
  parseDOM: [
    {
      tag: "li",
      getAttrs: (e) => {
        if (!(e instanceof HTMLElement))
          throw w(e);
        return {
          label: e.dataset.label,
          listType: e.dataset.listType,
          spread: e.dataset.spread
        };
      }
    }
  ],
  toDOM: (e) => [
    "li",
    {
      ...t.get(Te.key)(e),
      "data-label": e.attrs.label,
      "data-list-type": e.attrs.listType,
      "data-spread": e.attrs.spread
    },
    0
  ],
  parseMarkdown: {
    match: ({ type: e }) => e === "listItem",
    runner: (e, r, a) => {
      const o = r.label != null ? `${r.label}.` : "•", s = r.label != null ? "ordered" : "bullet", l = r.spread != null ? `${r.spread}` : "true";
      e.openNode(a, { label: o, listType: s, spread: l }), e.next(r.children), e.closeNode();
    }
  },
  toMarkdown: {
    match: (e) => e.type.name === "list_item",
    runner: (e, r) => {
      e.openNode("listItem", void 0, { spread: r.attrs.spread === "true" }), e.next(r.content), e.closeNode();
    }
  }
}));
n(b.node, {
  displayName: "NodeSchema<listItem>",
  group: "ListItem"
});
n(b.ctx, {
  displayName: "NodeSchemaCtx<listItem>",
  group: "ListItem"
});
const De = p("SinkListItem", (t) => () => Dt(b.type(t)));
n(De, {
  displayName: "Command<sinkListItemCommand>",
  group: "ListItem"
});
const Ke = p("LiftListItem", (t) => () => nt(b.type(t)));
n(Ke, {
  displayName: "Command<liftListItemCommand>",
  group: "ListItem"
});
const _e = p("SplitListItem", (t) => () => Kt(b.type(t)));
n(_e, {
  displayName: "Command<splitListItemCommand>",
  group: "ListItem"
});
function Vt(t) {
  return (e, r, a) => {
    const { selection: o } = e;
    if (!(o instanceof J))
      return !1;
    const { empty: s, $from: l } = o;
    if (!s || l.parentOffset !== 0)
      return !1;
    const i = l.node(-1);
    return i.type !== b.type(t) || i.firstChild !== l.node() || l.node(-2).childCount > 1 ? !1 : nt(b.type(t))(e, r, a);
  };
}
const Ee = p("LiftFirstListItem", (t) => () => Vt(t));
n(Ee, {
  displayName: "Command<liftFirstListItemCommand>",
  group: "ListItem"
});
const Pe = N("listItemKeymap", {
  NextListItem: {
    shortcuts: "Enter",
    command: (t) => {
      const e = t.get(u);
      return () => e.call(_e.key);
    }
  },
  SinkListItem: {
    shortcuts: ["Tab", "Mod-]"],
    command: (t) => {
      const e = t.get(u);
      return () => e.call(De.key);
    }
  },
  LiftListItem: {
    shortcuts: ["Shift-Tab", "Mod-["],
    command: (t) => {
      const e = t.get(u);
      return () => e.call(Ke.key);
    }
  },
  LiftFirstListItem: {
    shortcuts: ["Backspace", "Delete"],
    command: (t) => {
      const e = t.get(u);
      return () => e.call(Ee.key);
    }
  }
});
n(Pe.ctx, {
  displayName: "KeymapCtx<listItem>",
  group: "ListItem"
});
n(Pe.shortcuts, {
  displayName: "Keymap<listItem>",
  group: "ListItem"
});
const Lt = Ye("text", () => ({
  group: "inline",
  parseMarkdown: {
    match: ({ type: t }) => t === "text",
    runner: (t, e) => {
      t.addText(e.value);
    }
  },
  toMarkdown: {
    match: (t) => t.type.name === "text",
    runner: (t, e) => {
      t.addNode("text", void 0, e.text);
    }
  }
}));
n(Lt, {
  displayName: "NodeSchema<text>",
  group: "Text"
});
const $e = I("html");
n($e, {
  displayName: "Attr<html>",
  group: "Html"
});
const qe = C("html", (t) => ({
  atom: !0,
  group: "inline",
  inline: !0,
  attrs: {
    value: {
      default: ""
    }
  },
  toDOM: (e) => {
    const r = document.createElement("span"), a = {
      ...t.get($e.key)(e),
      "data-value": e.attrs.value,
      "data-type": "html"
    };
    return r.textContent = e.attrs.value, ["span", a, e.attrs.value];
  },
  parseDOM: [{
    tag: 'span[data-type="html"]',
    getAttrs: (e) => ({
      value: e.dataset.value ?? ""
    })
  }],
  parseMarkdown: {
    match: ({ type: e }) => e === "html",
    runner: (e, r, a) => {
      e.addNode(a, { value: r.value });
    }
  },
  toMarkdown: {
    match: (e) => e.type.name === "html",
    runner: (e, r) => {
      e.addNode("html", void 0, r.attrs.value);
    }
  }
}));
n(qe.node, {
  displayName: "NodeSchema<html>",
  group: "Html"
});
n(qe.ctx, {
  displayName: "NodeSchemaCtx<html>",
  group: "Html"
});
const Ut = [
  gt,
  pe,
  A,
  X,
  he,
  H,
  j,
  S,
  fe,
  V,
  Ce,
  U,
  we,
  G,
  Le,
  O,
  Ae,
  T,
  Be,
  D,
  Te,
  b,
  te,
  R,
  ne,
  F,
  le,
  x,
  me,
  v,
  ce,
  B,
  $e,
  qe,
  Lt
].flat(), Gt = [
  yt,
  Mt,
  bt,
  kt,
  It,
  ht
].flat(), jt = [
  st,
  lt,
  dt,
  it
], zt = [
  ue,
  Ne,
  L,
  ye,
  Me,
  xe,
  Ct,
  ft,
  Nt,
  Re,
  He,
  De,
  _e,
  Ke,
  Ee,
  re,
  ie,
  oe,
  mt,
  ct,
  pt,
  ut
], Jt = [
  Ie,
  be,
  Se,
  ke,
  Pe,
  Oe,
  ve,
  ge,
  ae,
  de,
  se
].flat(), We = P("remarkAddOrderInList", () => () => (t) => {
  ee(t, "list", (e) => {
    if (e.ordered) {
      const r = e.start ?? 1;
      e.children.forEach((a, o) => {
        a.label = o + r;
      });
    }
  });
});
n(We.plugin, {
  displayName: "Remark<remarkAddOrderInListPlugin>",
  group: "Remark"
});
n(We.options, {
  displayName: "RemarkConfig<remarkAddOrderInListPlugin>",
  group: "Remark"
});
const Fe = P("remarkLineBreak", () => () => (t) => {
  const e = /[\t ]*(?:\r?\n|\r)/g;
  ee(t, "text", (r, a, o) => {
    if (!r.value || typeof r.value != "string")
      return;
    const s = [];
    let l = 0;
    e.lastIndex = 0;
    let i = e.exec(r.value);
    for (; i; ) {
      const m = i.index;
      l !== m && s.push({ type: "text", value: r.value.slice(l, m) }), s.push({ type: "break", data: { isInline: !0 } }), l = m + i[0].length, i = e.exec(r.value);
    }
    if (s.length > 0 && o && typeof a == "number")
      return l < r.value.length && s.push({ type: "text", value: r.value.slice(l) }), o.children.splice(a, 1, ...s), a + s.length;
  });
});
n(Fe.plugin, {
  displayName: "Remark<remarkLineBreak>",
  group: "Remark"
});
n(Fe.options, {
  displayName: "RemarkConfig<remarkLineBreak>",
  group: "Remark"
});
const Ve = P("remarkInlineLink", () => Pt);
n(Ve.plugin, {
  displayName: "Remark<remarkInlineLinkPlugin>",
  group: "Remark"
});
n(Ve.options, {
  displayName: "RemarkConfig<remarkInlineLinkPlugin>",
  group: "Remark"
});
const Qt = (t) => !!t.children, Xt = (t) => t.type === "html";
function Yt(t, e) {
  return r(t, 0, null)[0];
  function r(a, o, s) {
    if (Qt(a)) {
      const l = [];
      for (let i = 0, d = a.children.length; i < d; i++) {
        const m = a.children[i];
        if (m) {
          const c = r(m, i, a);
          if (c)
            for (let y = 0, g = c.length; y < g; y++) {
              const k = c[y];
              k && l.push(k);
            }
        }
      }
      a.children = l;
    }
    return e(a, o, s);
  }
}
const Ue = P("remarkHTMLTransformer", () => () => (t) => {
  Yt(t, (e, r, a) => Xt(e) ? ((a == null ? void 0 : a.type) === "root" && (e.children = [{ ...e }], delete e.value, e.type = "paragraph"), [e]) : [e]);
});
n(Ue.plugin, {
  displayName: "Remark<remarkHtmlTransformer>",
  group: "Remark"
});
n(Ue.options, {
  displayName: "RemarkConfig<remarkHtmlTransformer>",
  group: "Remark"
});
const Ge = P("remarkMarker", () => () => (t, e) => {
  const r = (a) => e.value.charAt(a.position.start.offset);
  ee(t, (a) => ["strong", "emphasis"].includes(a.type), (a) => {
    a.marker = r(a);
  });
});
n(Ge.plugin, {
  displayName: "Remark<remarkMarker>",
  group: "Remark"
});
n(Ge.options, {
  displayName: "RemarkConfig<remarkMarker>",
  group: "Remark"
});
const xt = $(() => {
  let t = !1;
  const e = new q("MILKDOWN_INLINE_NODES_CURSOR"), r = new W({
    key: e,
    state: {
      init() {
        return !1;
      },
      apply(a) {
        if (!a.selection.empty)
          return !1;
        const o = a.selection.$from, s = o.nodeBefore, l = o.nodeAfter;
        return !!(s && l && s.isInline && !s.isText && l.isInline && !l.isText);
      }
    },
    props: {
      handleDOMEvents: {
        compositionend: (a, o) => t ? (t = !1, requestAnimationFrame(() => {
          if (r.getState(a.state)) {
            const l = a.state.selection.from;
            o.preventDefault(), a.dispatch(a.state.tr.insertText(o.data || "", l));
          }
        }), !0) : !1,
        compositionstart: (a) => (r.getState(a.state) && (t = !0), !1),
        beforeinput: (a, o) => {
          if (r.getState(a.state) && o instanceof InputEvent && o.data && !t) {
            const l = a.state.selection.from;
            return o.preventDefault(), a.dispatch(a.state.tr.insertText(o.data || "", l)), !0;
          }
          return !1;
        }
      },
      decorations(a) {
        if (r.getState(a)) {
          const l = a.selection.$from.pos, i = document.createElement("span"), d = Qe.widget(l, i, {
            side: -1
          }), m = document.createElement("span"), c = Qe.widget(l, m);
          return setTimeout(() => {
            i.contentEditable = "true", m.contentEditable = "true";
          }), Xe.create(a.doc, [d, c]);
        }
        return Xe.empty;
      }
    }
  });
  return r;
});
n(xt, {
  displayName: "Prose<inlineNodesCursorPlugin>",
  group: "Prose"
});
const St = $((t) => new W({
  key: new q("MILKDOWN_HARDBREAK_MARKS"),
  appendTransaction: (e, r, a) => {
    if (!e.length)
      return;
    const [o] = e;
    if (!o)
      return;
    const [s] = o.steps;
    if (o.getMeta("hardbreak")) {
      if (!(s instanceof _t))
        return;
      const { from: d } = s;
      return a.tr.setNodeMarkup(d, S.type(t), void 0, []);
    }
    if (s instanceof Et) {
      let d = a.tr;
      const { from: m, to: c } = s;
      return a.doc.nodesBetween(m, c, (y, g) => {
        y.type === S.type(t) && (d = d.setNodeMarkup(g, S.type(t), void 0, []));
      }), d;
    }
  }
}));
n(St, {
  displayName: "Prose<hardbreakClearMarkPlugin>",
  group: "Prose"
});
const je = Ze(["table", "code_block"], "hardbreakFilterNodes");
n(je, {
  displayName: "Ctx<hardbreakFilterNodes>",
  group: "Prose"
});
const wt = $((t) => {
  const e = t.get(je.key);
  return new W({
    key: new q("MILKDOWN_HARDBREAK_FILTER"),
    filterTransaction: (r, a) => {
      const o = r.getMeta("hardbreak"), [s] = r.steps;
      if (o && s) {
        const { from: l } = s, i = a.doc.resolve(l);
        let d = i.depth, m = !0;
        for (; d > 0; )
          e.includes(i.node(d).type.name) && (m = !1), d--;
        return m;
      }
      return !0;
    }
  });
});
n(wt, {
  displayName: "Prose<hardbreakFilterPlugin>",
  group: "Prose"
});
const At = $((t) => {
  const e = new q("MILKDOWN_HEADING_ID"), r = (a) => {
    if (a.composing)
      return;
    const o = t.get(X.key), s = a.state.tr.setMeta("addToHistory", !1);
    let l = !1;
    a.state.doc.descendants((i, d) => {
      if (i.type === H.type(t)) {
        if (i.textContent.trim().length === 0)
          return;
        const m = i.attrs, c = o(i);
        m.id !== c && (l = !0, s.setMeta(e, !0).setNodeMarkup(d, void 0, {
          ...m,
          id: c
        }));
      }
    }), l && a.dispatch(s);
  };
  return new W({
    key: e,
    view: (a) => (r(a), {
      update: (o, s) => {
        o.state.doc.eq(s.doc) || r(o);
      }
    })
  });
});
n(At, {
  displayName: "Prose<syncHeadingIdPlugin>",
  group: "Prose"
});
const Ht = $((t) => {
  const e = (r) => {
    if (r.composing || !r.editable)
      return;
    const a = D.type(t), o = T.type(t), s = b.type(t), l = r.state, i = (c, y) => {
      let g = !1;
      const k = `${y + 1}.`;
      return c.label !== k && (c.label = k, g = !0), g;
    };
    let d = l.tr, m = !1;
    l.doc.descendants((c, y, g, k) => {
      if (c.type === o) {
        const h = c.maybeChild(0);
        (h == null ? void 0 : h.type) === s && h.attrs.listType === "ordered" && (m = !0, d.setNodeMarkup(y, a, { spread: "true" }), c.descendants((M, ze, er, vt) => {
          if (M.type === s) {
            const Je = { ...M.attrs };
            i(Je, vt) && (d = d.setNodeMarkup(ze, void 0, Je));
          }
          return !1;
        }));
      } else if (c.type === s && (g == null ? void 0 : g.type) === a) {
        const h = { ...c.attrs };
        let M = !1;
        h.listType !== "ordered" && (h.listType = "ordered", M = !0), (g == null ? void 0 : g.maybeChild(0)) && (M = i(h, k)), M && (d = d.setNodeMarkup(y, void 0, h), m = !0);
      }
    }), m && r.dispatch(d.setMeta("addToHistory", !1));
  };
  return new W({
    key: new q("MILKDOWN_KEEP_LIST_ORDER"),
    view: (r) => (e(r), {
      update: (a) => {
        e(a);
      }
    })
  });
});
n(Ht, {
  displayName: "Prose<syncListOrderPlugin>",
  group: "Prose"
});
const Zt = [
  St,
  je,
  wt,
  xt,
  We,
  Ve,
  Fe,
  Ue,
  Ge,
  At,
  Ht
].flat(), yr = [Ut, Gt, jt, zt, Jt, Zt].flat();
export {
  fe as blockquoteAttr,
  Ie as blockquoteKeymap,
  V as blockquoteSchema,
  Ae as bulletListAttr,
  ve as bulletListKeymap,
  T as bulletListSchema,
  Ce as codeBlockAttr,
  be as codeBlockKeymap,
  U as codeBlockSchema,
  zt as commands,
  yr as commonmark,
  Me as createCodeBlockCommand,
  kt as createCodeBlockInputRule,
  gt as docSchema,
  ye as downgradeHeadingCommand,
  te as emphasisAttr,
  ae as emphasisKeymap,
  R as emphasisSchema,
  st as emphasisStarInputRule,
  lt as emphasisUnderscoreInputRule,
  j as hardbreakAttr,
  St as hardbreakClearMarkPlugin,
  je as hardbreakFilterNodes,
  wt as hardbreakFilterPlugin,
  Se as hardbreakKeymap,
  S as hardbreakSchema,
  he as headingAttr,
  X as headingIdGenerator,
  ke as headingKeymap,
  H as headingSchema,
  ce as highlightAttr,
  B as highlightSchema,
  we as hrAttr,
  G as hrSchema,
  $e as htmlAttr,
  qe as htmlSchema,
  Le as imageAttr,
  O as imageSchema,
  le as inlineCodeAttr,
  dt as inlineCodeInputRule,
  de as inlineCodeKeymap,
  x as inlineCodeSchema,
  xt as inlineNodesCursorPlugin,
  Gt as inputRules,
  xe as insertHardbreakCommand,
  Ct as insertHrCommand,
  It as insertHrInputRule,
  ft as insertImageCommand,
  Ft as insertImageInputRule,
  Jt as keymap,
  Ee as liftFirstListItemCommand,
  Ke as liftListItemCommand,
  me as linkAttr,
  v as linkSchema,
  Te as listItemAttr,
  Pe as listItemKeymap,
  b as listItemSchema,
  jt as markInputRules,
  Be as orderedListAttr,
  Oe as orderedListKeymap,
  D as orderedListSchema,
  pe as paragraphAttr,
  ge as paragraphKeymap,
  A as paragraphSchema,
  Zt as plugins,
  We as remarkAddOrderInListPlugin,
  Ue as remarkHtmlTransformer,
  Ve as remarkInlineLinkPlugin,
  Fe as remarkLineBreak,
  Ge as remarkMarker,
  Ut as schema,
  De as sinkListItemCommand,
  _e as splitListItemCommand,
  ne as strongAttr,
  it as strongInputRule,
  se as strongKeymap,
  F as strongSchema,
  At as syncHeadingIdPlugin,
  Ht as syncListOrderPlugin,
  Lt as textSchema,
  re as toggleEmphasisCommand,
  pt as toggleHighlightCommand,
  ie as toggleInlineCodeCommand,
  mt as toggleLinkCommand,
  oe as toggleStrongCommand,
  ue as turnIntoTextCommand,
  Wt as updateCodeBlockLanguageCommand,
  ut as updateHighlightCommand,
  Nt as updateImageCommand,
  ct as updateLinkCommand,
  Ne as wrapInBlockquoteCommand,
  yt as wrapInBlockquoteInputRule,
  He as wrapInBulletListCommand,
  Mt as wrapInBulletListInputRule,
  L as wrapInHeadingCommand,
  ht as wrapInHeadingInputRule,
  Re as wrapInOrderedListCommand,
  bt as wrapInOrderedListInputRule
};
//# sourceMappingURL=index.es.js.map
