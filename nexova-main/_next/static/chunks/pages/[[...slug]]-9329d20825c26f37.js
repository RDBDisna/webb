(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[120], {
		9016: function(n, o, e) {
			"use strict";
			e.r(o), e.d(o, {
				__N_SSG: function() {
					return T
				},
				default: function() {
					return G
				}
			});
			var i, t, l, a, r = e(4730),
				d = e(2241),
				s = e(1383),
				u = e(4119),
				c = e.n(u),
				m = e(4440),
				p = (c()(i || (i = (0, s.Z)(["\n  fragment Footer on FooterRecord {\n    links {\n      ...LinkAnchor\n    }\n  }\n\n  ", "\n"])), m.CX), e(7379)),
				g = e(1019),
				f = e(7542),
				h = e(6589),
				v = e(9032),
				x = e(473),
				_ = e(6588),
				w = e(5893),
				b = (0, p.ZP)(g.OB).withConfig({
					displayName: "Footer__Wrapper",
					componentId: "sc-1d8yx9a-0"
				})(["", " padding-bottom:", ";", "{padding-bottom:", ";}", "{padding-bottom:", ";}", "{padding-bottom:", ";}"], {
					position: "relative",
					zIndex: "0",
					"@media (min-width: 768px)": {
						fontSize: "var(--font-sm-size)",
						lineHeight: "var(--font-sm-line)",
						letterSpacing: "var(--font-sm-letter)"
					}
				}, (0, _.W)(44), (0, x.up)("md"), (0, _.W)(15, "md"), (0, x.up)("lg"), (0, _.W)(15, "lg"), (0, x.up)("max"), (0, _.W)(60, "max")),
				C = (0, p.ZP)(g.PU).withConfig({
					displayName: "Footer__Container",
					componentId: "sc-1d8yx9a-1"
				})(["", ""], {
					"@media (min-width: 768px)": {
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between"
					}
				}),
				y = p.ZP.nav.withConfig({
					displayName: "Footer__Nav",
					componentId: "sc-1d8yx9a-2"
				})(["", "{", " margin-bottom:", "}"], (0, x.zN)("md"), {
					gridColumn: "span 3 / span 3",
					gridColumnStart: "3"
				}, (0, _.W)(75)),
				F = p.ZP.div.withConfig({
					displayName: "Footer__Copyright",
					componentId: "sc-1d8yx9a-3"
				})(["", "{", "}"], (0, x.zN)("md"), {
					gridColumn: "span 2 / span 2",
					gridColumnStart: "3"
				}),
				S = (0, p.ZP)(h.zd).withConfig({
					displayName: "Footer__Links",
					componentId: "sc-1d8yx9a-4"
				})(["", " ", "{column-gap:", ";}", "{column-gap:", ";}", "{column-gap:", ";}"], {
					display: "grid",
					gridAutoFlow: "row",
					gridAutoColumns: "auto",
					gridAutoRows: "auto",
					"@media (min-width: 768px)": {
						gridAutoFlow: "column"
					}
				}, (0, x.up)("md"), (0, _.W)(16, "md"), (0, x.up)("lg"), (0, _.W)(19, "lg"), (0, x.up)("max"), (0, _.W)(26, "max")),
				k = (0, p.iv)(t || (t = (0, s.Z)(["\n  ", "\n"])), {
					paddingBottom: "0.2rem",
					marginTop: "0.2rem"
				}),
				N = function(n) {
					return n.footer
				},
				j = function() {
					var n = (0, v.a)(N),
						o = (new Date).getFullYear();
					return (0, w.jsx)(b, {
						anchor: "footer",
						children: (0, w.jsxs)(C, {
							children: [(0, w.jsx)(y, {
								children: (0, w.jsx)(S, {
									containerAs: "li",
									childStyles: k,
									delay: .1,
									rootAs: "ul",
									stagger: .1,
									children: null === n || void 0 === n ? void 0 : n.links.map((function(n) {
										var o = n.href,
											e = n.text;
										return (0, w.jsx)(f.L, {
											href: o,
											children: e
										}, o)
									}))
								})
							}), (0, w.jsxs)(F, {
								children: ["Copyright (C) ", o, "NEXOVA"]
							})]
						})
					})
				},
				P = e(2962),
				Z = e(7294),
				W = function(n) {
					var o, e = n.seo,
						i = n.seoDefault,
						t = (0, Z.useMemo)((function() {
							return e || (null === i || void 0 === i ? void 0 : i.seoFallback)
						}), [e, null === i || void 0 === i ? void 0 : i.seoFallback]);
					return (0, w.jsx)(P.PB, {
						description: null === t || void 0 === t ? void 0 : t.description,
						title: null === t || void 0 === t ? void 0 : t.title,
						titleTemplate: (null === i || void 0 === i ? void 0 : i.titleSuffix) && "%s ".concat(i.titleSuffix),
						openGraph: {
							images: [{
								url: (null === t || void 0 === t || null === (o = t.image) || void 0 === o ? void 0 : o.src) || "/social-embed.png",
								width: 1200,
								height: 630
							}]
						}
					})
				},
				A = c()(l || (l = (0, s.Z)(["\n  fragment Seo on SeoField {\n    description\n    image {\n      ...Asset\n    }\n    title\n  }\n\n  ", "\n"])), m.fe),
				I = (c()(a || (a = (0, s.Z)(["\n  fragment GlobalSeo on GlobalSeoField {\n    seoFallback: fallbackSeo {\n      ...Seo\n    }\n    titleSuffix\n  }\n\n  ", "\n"])), A), e(1820)),
				z = p.ZP.main.withConfig({
					displayName: "DefaultPage__Wrapper",
					componentId: "sc-2cxh1x-0"
				})(["", ";"], {
					display: "flex",
					flexDirection: "column",
					flex: "1 1 0%",
					marginTop: "var(--main-mt)",
					overflow: "hidden"
				}),
				D = function(n) {
					var o = n.children;
					return (0, w.jsx)(z, {
						children: o
					})
				},
				E = ["page", "seo"],
				T = !0,
				G = function(n) {
					var o, e = n.page,
						i = n.seo,
						t = (0, r.Z)(n, E);
					return (0, I.o$)(t), (0, w.jsxs)(w.Fragment, {
						children: [(0, w.jsx)(W, {
							seo: null === e || void 0 === e ? void 0 : e.seo,
							seoDefault: i
						}), (0, w.jsx)(D, {
							children: !(null === e || void 0 === e || null === (o = e.blocks) || void 0 === o || !o.length) && (0, w.jsx)(d.no, {
								blocks: e.blocks
							})
						}), (0, w.jsx)(j, {})]
					})
				}
		},
		8150: function(n, o, e) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/[[...slug]]", function() {
				return e(9016)
			}])
		}
	},
	function(n) {
		n.O(0, [774, 888, 179], (function() {
			return o = 8150, n(n.s = o);
			var o
		}));
		var o = n.O();
		_N_E = o
	}
]);