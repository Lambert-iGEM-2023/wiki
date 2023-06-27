import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, e as renderHead, f as renderComponent, g as renderSlot } from './chunk.e21881fe.js';
import 'html-escaper';
import { useState } from 'react';
import { P as ProgressBar, N as NavButton } from './chunk.720168e9.js';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
/* empty css                *//* empty css                */import 'framer-motion';
/* empty css                */
const styling = `
prose max-w-3xl
prose-h1:font-serif prose-h1:text-4xl
prose-h2:font-sans prose-h2:text-2xl
prose-h3:font-sans prose-h3:text-lg prose-h3:font-semibold prose-h3:text-yellow-800
prose-p:font-sans prose-p:text-gray-900 
prose-a:font-sans prose-a:text-gray-900 prose-a:underline prose-a:font-normal prose-a:text-yellow-800
prose-quoteless
prose-strong
prose-em
prose-ol
prose-ul
prose-li:text-gray-800
prose-table
prose-th
prose-tr
prose-td
prose-img

`;
const Layout = ({
  children,
  header,
  title
}) => {
  useState(false);
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("body", {
      className: "w-screen",
      children: [header, /* @__PURE__ */ jsx("div", {
        className: "bg-cover absolute w-screen left-0 top-0 p-0 m-0 z-10 h-1/3 ",
        style: {
          background: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 36.46%, #FFFFFF 100%), url(${header})`,
          backgroundSize: "cover"
        }
      }), /* @__PURE__ */ jsx(ProgressBar, {}), /* @__PURE__ */ jsxs("div", {
        className: "flex justify-between m-5",
        children: [/* @__PURE__ */ jsx("span", {
          className: "font-serif",
          children: "Lambert_GA"
        }), /* @__PURE__ */ jsx(NavButton, {})]
      }), /* @__PURE__ */ jsx("div", {
        className: "flex justify-center w-full",
        children: /* @__PURE__ */ jsxs("div", {
          className: "",
          children: [/* @__PURE__ */ jsx("p", {
            className: "font-serif text-6xl z-30 absolute top-1/3 -translate-y-1/2 lg:-translate-x-20",
            children: title
          }), /* @__PURE__ */ jsx("div", {
            className: "absolute top-1/3 translate-y-20 h-32 lg:-translate-x-20 lg:border-l-2 border-gray-900 z-50"
          }), /* @__PURE__ */ jsx("div", {
            className: styling + "mt-[33vh] break-words",
            children
          })]
        })
      })]
    })
  });
};
__astro_tag_component__(Layout, "@astrojs/react");

const $$Astro = createAstro("https://2023.igem.wiki/lambert-ga");
const $$PageLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,400;0,600;1,400;1,700&display=swap" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
		<title>${frontmatter.title}</title>
	${renderHead($$result)}</head>
	${renderComponent($$result, "Layout", Layout, { "client:load": true, ...frontmatter, "client:component-hydration": "load", "client:component-path": "/Users/ryandu/Desktop/iGEM/2023/wiki/src/layouts/PageLayoutComp", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`
		${renderSlot($$result2, $$slots["default"])}
	` })}
</html>`;
}, "/Users/ryandu/Desktop/iGEM/2023/wiki/src/layouts/PageLayout.astro");

export { $$PageLayout as default };
