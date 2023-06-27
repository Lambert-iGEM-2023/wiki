/* empty css                */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, e as renderHead, f as renderComponent, g as renderSlot, m as maybeRenderHead } from './chunk.e21881fe.js';
import 'html-escaper';
import { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
/* empty css                */
const NavButton = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    console.log(false);
    setOpen(!open);
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("button", {
      className: "rounded-full z-30 bg-orange-300 hover:bg-yellow-300 text-white font-bold py-6 px-6",
      onClick: handleClick
    }), /* @__PURE__ */ jsx(motion.div, {
      layoutId: "navmenu",
      className: `bg-yellow-200 right-0 top-0 absolute flex justify-center align-middle z-20 ${open ? "  w-full h-full" : "w-1 h-1 -m-2"}`,
      children: open && /* @__PURE__ */ jsx("p", {
        className: "m-10",
        children: "navigation buttons"
      })
    })]
  });
};
__astro_tag_component__(NavButton, "@astrojs/react");

function ProgressBar() {
  const {
    scrollY,
    scrollYProgress
  } = useScroll();
  return /* @__PURE__ */ jsx("div", {
    className: "bg-slate-100 fixed top-0 left-0 right-0 pt-8",
    style: {
      marginTop: -40
    },
    children: /* @__PURE__ */ jsx(motion.div, {
      className: "bottom-0 left-0 pb-1 mt-2 right-0 bg-yellow-400 origin-left",
      style: {
        scaleX: scrollYProgress
      }
    })
  });
}
__astro_tag_component__(ProgressBar, "@astrojs/react");

const Layout = ({
  children
}) => {
  const [openNavBar, setOpenNavBar] = useState(false);
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("body", {
      className: "m-8 mx-10",
      children: [/* @__PURE__ */ jsx(ProgressBar, {}), /* @__PURE__ */ jsxs("div", {
        className: "flex justify-between",
        children: [/* @__PURE__ */ jsx("span", {
          className: "font-serif",
          children: "Lambert_GA"
        }), /* @__PURE__ */ jsx(NavButton, {
          isOpen: openNavBar
        })]
      }), children]
    })
  });
};
__astro_tag_component__(Layout, "@astrojs/react");

const $$Astro$1 = createAstro("https://2023.igem.wiki/lambert-ga");
const $$HomeLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HomeLayout;
  const { title } = Astro2.props;
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
		<title>${title}</title>
	${renderHead($$result)}</head>
	${renderComponent($$result, "Layout", Layout, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/ryandu/Desktop/iGEM/2023/wiki/src/layouts/HomeLayoutComp", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`
		${renderSlot($$result2, $$slots["default"])}
	` })}
</html>`;
}, "/Users/ryandu/Desktop/iGEM/2023/wiki/src/layouts/HomeLayout.astro");

const $$Astro = createAstro("https://2023.igem.wiki/lambert-ga");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$HomeLayout, { "title": "CADlock" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<main class="max-w-3xl">
		<h1 class="font-serif text-5xl">CADlock</h1>
		<p class="font-sans text-2xl">
			an early diagnosis screening tool for Coronary Artery Disease
		</p>

		<p class="py-6 text-xl">Nisi reprehenderit elit deserunt elit officia qui consequat elit et cupidatat esse eiusmod excepteur ipsum fugiat ipsum commodo laborum aliquip proident esse incididunt reprehenderit magna excepteur veniam aute velit irure consequat quis officia sint occaecat deserunt esse sint laborum aliqua id sunt eu in duis ullamco adipisicing dolor reprehenderit reprehenderit veniam pariatur ad laboris velit excepteur duis consectetur sit reprehenderit ad ut est culpa pariatur sit cupidatat fugiat laboris esse nulla mollit ad excepteur et ipsum id nisi reprehenderit et amet esse sint reprehenderit cupidatat enim cillum esse anim cillum ex tempor cillum tempor exercitation pariatur incididunt nulla ipsum ea.</p>

		<p class="py-6 text-xl">Nisi reprehenderit elit deserunt elit officia qui consequat elit et cupidatat esse eiusmod excepteur ipsum fugiat ipsum commodo laborum aliquip proident esse incididunt reprehenderit magna excepteur veniam aute velit irure consequat quis officia sint occaecat deserunt esse sint laborum aliqua id sunt eu in duis ullamco adipisicing dolor reprehenderit reprehenderit veniam pariatur ad laboris velit excepteur duis consectetur sit reprehenderit ad ut est culpa pariatur sit cupidatat fugiat laboris esse nulla mollit ad excepteur et ipsum id nisi reprehenderit et amet esse sint reprehenderit cupidatat enim cillum esse anim cillum ex tempor cillum tempor exercitation pariatur incididunt nulla ipsum ea.</p>

		<p class="py-6 text-xl">Nisi reprehenderit elit deserunt elit officia qui consequat elit et cupidatat esse eiusmod excepteur ipsum fugiat ipsum commodo laborum aliquip proident esse incididunt reprehenderit magna excepteur veniam aute velit irure consequat quis officia sint occaecat deserunt esse sint laborum aliqua id sunt eu in duis ullamco adipisicing dolor reprehenderit reprehenderit veniam pariatur ad laboris velit excepteur duis consectetur sit reprehenderit ad ut est culpa pariatur sit cupidatat fugiat laboris esse nulla mollit ad excepteur et ipsum id nisi reprehenderit et amet esse sint reprehenderit cupidatat enim cillum esse anim cillum ex tempor cillum tempor exercitation pariatur incididunt nulla ipsum ea.</p>
		<p class="py-6 text-xl">Nisi reprehenderit elit deserunt elit officia qui consequat elit et cupidatat esse eiusmod excepteur ipsum fugiat ipsum commodo laborum aliquip proident esse incididunt reprehenderit magna excepteur veniam aute velit irure consequat quis officia sint occaecat deserunt esse sint laborum aliqua id sunt eu in duis ullamco adipisicing dolor reprehenderit reprehenderit veniam pariatur ad laboris velit excepteur duis consectetur sit reprehenderit ad ut est culpa pariatur sit cupidatat fugiat laboris esse nulla mollit ad excepteur et ipsum id nisi reprehenderit et amet esse sint reprehenderit cupidatat enim cillum esse anim cillum ex tempor cillum tempor exercitation pariatur incididunt nulla ipsum ea.</p>

	</main>
` })}`;
}, "/Users/ryandu/Desktop/iGEM/2023/wiki/src/pages/index.astro");

const $$file = "/Users/ryandu/Desktop/iGEM/2023/wiki/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { NavButton as N, ProgressBar as P, index as i };
