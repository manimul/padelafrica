var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
var import_dotenv = __toModule(require("dotenv"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  import_dotenv.default.config();
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/root.tsx
var root_exports = {};
__export(root_exports, {
  Footer: () => Footer,
  Nav: () => Nav,
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());
var import_react = __toModule(require("react"));

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-BRJZ5TIO.css";

// app/styles/app.css
var app_default = "/build/_assets/app-255CK37I.css";

// app/images/logo-light.svg
var logo_light_default = "/build/_assets/logo-light-W72WDGBG.svg";

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/root.tsx
var meta = () => {
  return { title: "Padel Africa" };
};
function links() {
  return [
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: app_default }
  ];
}
var Nav = () => {
  const [isShrunk, setShrunk] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const handler = () => {
      setShrunk((isShrunk2) => {
        if (!isShrunk2 && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
          return true;
        }
        if (isShrunk2 && document.body.scrollTop < 4 && document.documentElement.scrollTop < 4) {
          return false;
        }
        return isShrunk2;
      });
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  const [navbarOpen, setNavbarOpen] = (0, import_react.useState)(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: `  ${isShrunk ? "transition ease-in-out  md:bg-opacity-75 backdrop-blur-lg z-10 py-2 text-xs   " : "transition ease-in-out md:bg-opacity-0 "} bg-slate-900 border-gray-200 px-4 sm:px-12 py-6 md:fixed w-full z-10 text-black `
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container flex flex-wrap justify-between items-center mx-auto"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/",
    className: "flex"
  }, /* @__PURE__ */ React.createElement("img", {
    src: logo_light_default,
    className: `transition ease-in-out transform ${isShrunk ? "h-12" : "md:h-20"} h-10`
  })), /* @__PURE__ */ React.createElement("button", {
    onClick: handleToggle,
    "data-collapse-toggle": "mobile-menu",
    type: "button",
    className: "inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    "aria-controls": "mobile-menu-2",
    "aria-expanded": "false"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), navbarOpen ? /* @__PURE__ */ React.createElement("svg", {
    className: " w-6 h-6",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    clipRule: "evenodd"
  })) : /* @__PURE__ */ React.createElement("svg", {
    className: "w-6 h-6",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: ` ${navbarOpen ? "h-screen text-4xl text-center align-middle justify-center" : "hidden"} w-full md:block md:w-auto`,
    id: "mobile-menu"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "flex flex-col  mt-12 md:mt-0   md:flex-row md:space-x-8   text-white"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "#about",
    className: "block py-2 pr-4 pl-3    md:border-0  md:p-0  "
  }, "About")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "#partners",
    className: "block py-2 pr-4 pl-3    md:p-0  "
  }, "Partners")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "#contact",
    className: "block py-2 pr-4 pl-3    md:p-0  "
  }, "Investors")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "#contact",
    className: "block py-2 pr-4 pl-3   md:p-0  "
  }, "Contact")))))));
};
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", {
    className: "p-4  sm:p-8 bg-slate-900"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:flex md:justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-6 md:mb-0"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    target: "_blank",
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: logo_light_default,
    className: "mr-4 h-20",
    alt: "FlowBite Logo"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", {
    className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
  }, "Resources"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", {
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://flowbite.com",
    target: "_blank",
    className: "text-gray-600 hover:underline dark:text-gray-400"
  }, "Investors")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    target: "_blank",
    rel: "nofollow",
    className: "text-gray-600 hover:underline dark:text-gray-400"
  }, "Partners")))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", {
    className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
  }, "Follow us"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", {
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    target: "_blank",
    className: "text-gray-600 hover:underline dark:text-gray-400"
  }, "Facebook")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    target: "_blank",
    className: "text-gray-600 hover:underline dark:text-gray-400"
  }, "Newsletter")))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", {
    className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
  }, "Legal"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", {
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    target: "_blank",
    className: "text-gray-600 hover:underline dark:text-gray-400"
  }, "Privacy Policy")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    target: "_blank",
    className: "text-gray-600 hover:underline dark:text-gray-400"
  }, "Terms & Conditions")))))), /* @__PURE__ */ React.createElement("hr", {
    className: "my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "sm:flex sm:items-center sm:justify-between"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm text-gray-500 sm:text-center dark:text-gray-400"
  }, "\xA9 2022", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://flowbite.com",
    target: "_blank",
    className: "hover:underline"
  }, "Padel Africa\u2122"), ". All Rights Reserved."), /* @__PURE__ */ React.createElement("div", {
    className: "flex mt-4 space-x-6 sm:justify-center sm:mt-0"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "text-gray-500 hover:text-gray-900 dark:hover:text-white"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
    clipRule: "evenodd"
  }))), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "text-gray-500 hover:text-gray-900 dark:hover:text-white"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
    clipRule: "evenodd"
  }))), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "text-gray-500 hover:text-gray-900 dark:hover:text-white"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
  }))))));
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "scroll-smooth"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "text-slate-900"
  }, /* @__PURE__ */ React.createElement(Nav, null), /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(Footer, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/old_index.tsx
var old_index_exports = {};
__export(old_index_exports, {
  default: () => OldIndex,
  loader: () => loader,
  meta: () => meta2
});
init_react();
var import_remix5 = __toModule(require_remix());

// app/Components/cta.tsx
init_react();
var import_remix3 = __toModule(require_remix());
function CTA(props) {
  return /* @__PURE__ */ React.createElement("section", {
    id: "partners",
    className: "[cta] p-20 md:mx-20 bg-slate-900 flex flex-col justify-center align-middle rounded-md shadow-2xl text-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "  m-auto  text-center  space-y-vw-6-min@xl md:w-3/4 "
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-6xl font-heading text-transparent bg-clip-text bg-gradient-to-br from-green-300  via-green-500 to-yellow-400 "
  }, props.heading), /* @__PURE__ */ React.createElement("p", {
    className: "base"
  }, props.body), /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: props.buttonTo,
    className: " inline-flex "
  }, /* @__PURE__ */ React.createElement("button", {
    className: "py-4 px-6 bg-gradient-to-br from-green-300  via-green-500 to-yellow-400 rounded-xl text-black font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl"
  }, props.buttonText))));
}

// app/Components/hero.tsx
init_react();

// app/images/padel-hero.jpg
var padel_hero_default = "/build/_assets/padel-hero-6EAO5I32.jpg";

// app/Components/hero.tsx
function Hero(props) {
  return /* @__PURE__ */ React.createElement("section", {
    className: "[hero] min-h-screen py-6   px-6 md:px-24 flex  flex-col md:flex-row align-middle justify-between  bg-cover     md:space-x-12	 ",
    style: {
      backgroundImage: `linear-gradient(to right, rgb(15, 23, 42), rgba(255, 255, 255, 0.23)),url('${padel_hero_default}')`
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full md:w-2/5 my-auto space-y-vw-2-min@xl py-8 uppercase "
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-6xl font-heading text-white  "
  }, "Padel has taken Europe by storm.\xA0", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", {
    className: "text-transparent bg-clip-text bg-gradient-to-br from-green-300  via-green-500 to-yellow-400"
  }, "Now it's time to bring it to Africa")), /* @__PURE__ */ React.createElement("p", {
    className: "text-base font-light text-slate-300"
  }, "\u{1F44B} Interested in a partnership?", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    href: ""
  }, " ", "Email us"), " ")), /* @__PURE__ */ React.createElement("form", {
    className: "w-full md:w-2/5  my-auto space-y-vw-4-min@xl bg-white  bg-opacity-50 backdrop-blur-lg shadow-2xl	 p-6    h-fit "
  }, /* @__PURE__ */ React.createElement("p", {
    className: "font-heading text-lg  uppercase"
  }, "Join the Mailing List"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "block  text-xs  "
  }, "Your Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "name",
    className: "bg-gray-50 border border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0  dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "Joe Bloggs",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "block text-xs "
  }, "Your email"), /* @__PURE__ */ React.createElement("input", {
    type: "email",
    id: "email",
    className: "bg-gray-50 border border-gray-300 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500",
    placeholder: "name@flowbite.com",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "block text-xs"
  }, "Your Company"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "company",
    className: "bg-gray-50 border border-gray-300 text-sm   block w-full p-2.5   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "Acme Inc",
    required: true
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: " py-4 px-6 bg-gradient-to-br from-green-300 to-yellow-400 font-heading uppercase hover:bg-gradient-to-tl hover:scale-105 shadow-2xl "
  }, "Submit")));
}

// app/Components/info.tsx
init_react();
var import_remix4 = __toModule(require_remix());
var import_react2 = __toModule(require("@portabletext/react"));
function Info(props) {
  var _a;
  const { aboutText } = (0, import_remix4.useLoaderData)();
  const myPortableTextComponents = {
    types: {
      image: (value) => /* @__PURE__ */ React.createElement("img", {
        src: value.asset,
        key: value._id,
        className: value.asset
      })
    }
  };
  return /* @__PURE__ */ React.createElement("section", {
    id: "about",
    className: `[cta]  p-vw-32  space-y-10 md:space-x-10 flex flex-col md:flex-row ${props.flow == "left" ? "" : " md:flex-row-reverse space-x-reverse"} `
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:w-1/2 space-y-4  "
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-4xl font-bold"
  }, aboutText[0].title), /* @__PURE__ */ React.createElement("div", {
    className: "main-content space-y-2"
  }, ((_a = aboutText[0].overview) == null ? void 0 : _a.length) > 0 ? aboutText[0].overview.map((paragraphs) => /* @__PURE__ */ React.createElement(import_react2.PortableText, {
    key: paragraphs._id,
    value: [paragraphs],
    components: myPortableTextComponents
  })) : null)), /* @__PURE__ */ React.createElement("figure", {
    className: "md:w-1/2 bg-slate-300"
  }, /* @__PURE__ */ React.createElement("img", {
    src: aboutText[0].featureImage
  })));
}

// app/images/about-pa.jpg
var about_pa_default = "/build/_assets/about-pa-V2X3EPXD.jpg";

// app/lib/sanity/getClient.ts
init_react();
var import_picosanity = __toModule(require("picosanity"));

// app/lib/sanity/config.ts
init_react();
var config = {
  apiVersion: "2021-03-25",
  dataset: "production",
  projectId: "qi8hr3rv",
  useCdn: false
};

// app/lib/sanity/getClient.ts
var import_image_url = __toModule(require("@sanity/image-url"));
var sanityClient = new import_picosanity.default(config);
var builder = (0, import_image_url.default)(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
var previewClient = new import_picosanity.default(__spreadProps(__spreadValues({}, config), {
  useCdn: false
}));
var getClient = (usePreview = false) => usePreview ? previewClient : sanityClient;

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/old_index.tsx
async function loader() {
  const newsPosts = await getClient().fetch(`*[_type == "news"]{ _id, title, slug, "featureImage": feature.asset->url
   }`);
  const aboutText = await getClient().fetch(`*[_type == "sections" && slug.current == "about-padel-africa" ]{ _id, title, overview, "featureImage": feature.asset->url
   }`);
  return { newsPosts, aboutText };
}
var meta2 = () => {
  return {
    title: "Padel Africa | The Number 1 African Padel Company",
    description: "Padel Africa home page",
    keywords: "padel, africa, sport"
  };
};
function OldIndex() {
  const { newsPosts, aboutText } = (0, import_remix5.useLoaderData)();
  const myPortableTextComponents = {
    types: {
      image: (value) => /* @__PURE__ */ React.createElement("img", {
        src: value.asset,
        key: value._id,
        className: value.asset
      })
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Hero, {
    heading: "Padel has taken Europe by storm. Now it\u2019s time to bring it to Africa.\n        ",
    body: "Using our extensive knowledge of Africa and business development, we aim to provide Padel, as a sport and a community enabler, to Ghana, Kenya, Nigeria and other Sub Saharan countries.\n        ",
    button1Text: "Learn More",
    button1To: "#about",
    button2Text: "Want to Partner?",
    button2To: "#about",
    imgSrc: ""
  }), /* @__PURE__ */ React.createElement(Info, {
    flow: "left"
  }), /* @__PURE__ */ React.createElement(CTA, {
    heading: "Are you interested in partnering with the Number 1 African Padel company?",
    body: "Integer a eros venenatis, interdum lorem eu, lobortis ligula. Curabitur vel ipsum non tellus convallis elementum. Vivamus pulvinar risus nec sapien commodo bibendum",
    buttonText: "Click here",
    buttonTo: "#about"
  }), /* @__PURE__ */ React.createElement("section", {
    className: "[cta]  p-vw-32 pb-0  space-x-10 flex "
  }, /* @__PURE__ */ React.createElement("figure", {
    className: "w-1/4"
  }, /* @__PURE__ */ React.createElement("img", {
    src: about_pa_default
  })), /* @__PURE__ */ React.createElement("blockquote", {
    className: "w-3/4 space-y-4  "
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl font-bold"
  }, "\u201C Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\u201D"))), /* @__PURE__ */ React.createElement("section", {
    id: "news",
    className: "[about]  p-vw-32 bg-white text-center space-y-vw-6-min@xl "
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-4xl font-bold"
  }, "News"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-4 gap-6 "
  }, (newsPosts == null ? void 0 : newsPosts.length) > 0 ? newsPosts.slice(0, 6).map((news) => /* @__PURE__ */ React.createElement("div", {
    key: news._id,
    className: "hover:shadow-2xl hover:scale-105 hover:font-bold cursor-pointer  p-4  space-y-vw-4-max@md"
  }, /* @__PURE__ */ React.createElement("img", {
    src: urlFor(news.featureImage).width(500).url(),
    alt: news.title
  }), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: news.slug.current
  }, news.title, " "))) : null)), /* @__PURE__ */ React.createElement("section", {
    id: "contact",
    className: "[contact]  bg-slate-900   space-x-10   p-vw-32  space-y-10 md:space-x-10 flex flex-col  text-white "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "  m-auto  text-center m space-y-vw-6-min@xl md:w-1/2 "
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-300  via-green-500 to-yellow-400 "
  }, "Contact Us"), /* @__PURE__ */ React.createElement("p", {
    className: "base"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), /* @__PURE__ */ React.createElement("div", {
    className: " space-x-vw-4-min@xl  md:inline-flex justify-between text-slate-900"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "py-vw-4-min@xl-max@2xl px-vw-4-min@xl-max@2xl bg-gradient-to-br from-green-300   to-yellow-400 rounded-xl font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl"
  }, "Email Us"), /* @__PURE__ */ React.createElement("button", {
    className: " py-vw-4-min@xl-max@2xl px-vw-4-min@xl-max@2xl bg-gradient-to-br from-white   to-gray-200 rounded-xl font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl"
  }, "Join Mailing List")))));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => NewsPost,
  loader: () => loader2
});
init_react();
var import_remix6 = __toModule(require_remix());
async function loader2({ params }) {
  const initialData = await getClient().fetch(`*[_type == "news" && slug.current == $slug]{ _id, title, slug, "featureImage": feature.asset->url
  }`, { slug: params.slug });
  return { initialData };
}
function NewsPost() {
  let { initialData } = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    style: { textAlign: "center", padding: 20 }
  }, /* @__PURE__ */ React.createElement("h1", null, initialData[0].title), /* @__PURE__ */ React.createElement("img", {
    src: initialData[0].featureImage
  }));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
init_react();
function About() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Remix"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", {
    className: "p-6"
  }, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/blog",
    rel: "noreferrer"
  }))));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader3,
  meta: () => meta3
});
init_react();
var import_remix7 = __toModule(require_remix());

// app/Components/hero-alt.tsx
init_react();
function Hero2(props) {
  return /* @__PURE__ */ React.createElement("section", {
    className: "[hero] min-h-screen    flex  flex-col md:flex-row align-middle justify-between  bg-cover     ",
    style: {
      backgroundImage: `linear-gradient(to right, rgb(15, 23, 42), rgba(255, 255, 255, 0.23)),url('${padel_hero_default}')`
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 h-screen bg-slate-900  bg-opacity-75 backdrop-blur-2xl flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full  my-auto  uppercase   p-24 "
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-6xl font-heading text-white  "
  }, "Padel has taken Europe by storm.\xA0", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", {
    className: "text-transparent bg-clip-text bg-gradient-to-br from-green-300  via-green-500 to-yellow-400"
  }, "Now it's time to bring it to Africa")), /* @__PURE__ */ React.createElement("p", {
    className: "text-base font-light text-white"
  }, "\u{1F44B} Interested in a partnership?", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    href: ""
  }, " ", "Email us"), " "))), /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 p-32"
  }, /* @__PURE__ */ React.createElement("form", {
    className: "w-full  my-auto space-y-vw-4-min@xl bg-white  bg-opacity-50 backdrop-blur-lg shadow-2xl	 p-6    h-fit "
  }, /* @__PURE__ */ React.createElement("p", {
    className: "font-heading text-lg  uppercase"
  }, "Join the Mailing List"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "block  text-xs  "
  }, "Your Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "name",
    className: "bg-gray-50 border border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0  dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "Joe Bloggs",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "block text-xs "
  }, "Your email"), /* @__PURE__ */ React.createElement("input", {
    type: "email",
    id: "email",
    className: "bg-gray-50 border border-gray-300 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500",
    placeholder: "name@flowbite.com",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "block text-xs"
  }, "Your Company"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "company",
    className: "bg-gray-50 border border-gray-300 text-sm   block w-full p-2.5   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "Acme Inc",
    required: true
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: " py-4 px-6 bg-gradient-to-br from-green-300 to-yellow-400 font-heading uppercase hover:bg-gradient-to-tl hover:scale-105 shadow-2xl "
  }, "Submit"))));
}

// app/Components/hero-white.tsx
init_react();
function HeroWhite(props) {
  return /* @__PURE__ */ React.createElement("section", {
    className: "[hero] min-h-screen    flex  flex-col md:flex-row align-middle justify-between  bg-cover     ",
    style: {
      backgroundImage: `linear-gradient(to right, rgba(24, 23, 42, 0.5), rgba(255, 255, 255, 0.23)),url('${padel_hero_default}')`
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 h-screen bg-white bg-opacity-10 backdrop-blur-2xl flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full  my-auto  uppercase   p-24 "
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-6xl font-heading text-white  "
  }, "Padel has taken Europe by storm.\xA0", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", {
    className: "text-transparent bg-clip-text bg-gradient-to-br from-green-300  via-green-500 to-yellow-400"
  }, "Now it's time to bring it to Africa")), /* @__PURE__ */ React.createElement("p", {
    className: "text-base font-light text-white"
  }, "\u{1F44B} Interested in a partnership?", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    href: ""
  }, " ", "Email us"), " "))), /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 p-32"
  }, /* @__PURE__ */ React.createElement("form", {
    className: "w-full  my-auto space-y-vw-4-min@xl bg-white  bg-opacity-50 backdrop-blur-lg shadow-2xl	 p-6    h-fit "
  }, /* @__PURE__ */ React.createElement("p", {
    className: "font-heading text-lg  uppercase"
  }, "Join the Mailing List"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "block  text-xs  "
  }, "Your Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "name",
    className: "bg-gray-50 border border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0  dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "Joe Bloggs",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "block text-xs "
  }, "Your email"), /* @__PURE__ */ React.createElement("input", {
    type: "email",
    id: "email",
    className: "bg-gray-50 border border-gray-300 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500",
    placeholder: "name@flowbite.com",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "block text-xs"
  }, "Your Company"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "company",
    className: "bg-gray-50 border border-gray-300 text-sm   block w-full p-2.5   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "Acme Inc",
    required: true
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: " py-4 px-6 bg-gradient-to-br from-green-300 to-yellow-400 font-heading uppercase hover:bg-gradient-to-tl hover:scale-105 shadow-2xl "
  }, "Submit"))));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/index.tsx
async function loader3() {
  const newsPosts = await getClient().fetch(`*[_type == "news"]{ _id, title, slug, "featureImage": feature.asset->url
   }`);
  const aboutText = await getClient().fetch(`*[_type == "sections" && slug.current == "about-padel-africa" ]{ _id, title, overview, "featureImage": feature.asset->url
   }`);
  return { newsPosts, aboutText };
}
var meta3 = () => {
  return {
    title: "Padel Africa | The Number 1 African Padel Company",
    description: "Padel Africa home page",
    keywords: "padel, africa, sport"
  };
};
function Index() {
  const { newsPosts, aboutText } = (0, import_remix7.useLoaderData)();
  const myPortableTextComponents = {
    types: {
      image: (value) => /* @__PURE__ */ React.createElement("img", {
        src: value.asset,
        key: value._id,
        className: value.asset
      })
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Hero2, {
    heading: "Padel has taken Europe by storm. Now it\u2019s time to bring it to Africa.\n        ",
    body: "Using our extensive knowledge of Africa and business development, we aim to provide Padel, as a sport and a community enabler, to Ghana, Kenya, Nigeria and other Sub Saharan countries.\n        ",
    button1Text: "Learn More",
    button1To: "#about",
    button2Text: "Want to Partner?",
    button2To: "#about",
    imgSrc: ""
  }), /* @__PURE__ */ React.createElement(HeroWhite, {
    heading: "Padel has taken Europe by storm. Now it\u2019s time to bring it to Africa.\n        ",
    body: "Using our extensive knowledge of Africa and business development, we aim to provide Padel, as a sport and a community enabler, to Ghana, Kenya, Nigeria and other Sub Saharan countries.\n        ",
    button1Text: "Learn More",
    button1To: "#about",
    button2Text: "Want to Partner?",
    button2To: "#about",
    imgSrc: ""
  }), /* @__PURE__ */ React.createElement(Hero, {
    heading: "Padel has taken Europe by storm. Now it\u2019s time to bring it to Africa.\n        ",
    body: "Using our extensive knowledge of Africa and business development, we aim to provide Padel, as a sport and a community enabler, to Ghana, Kenya, Nigeria and other Sub Saharan countries.\n        ",
    button1Text: "Learn More",
    button1To: "#about",
    button2Text: "Want to Partner?",
    button2To: "#about",
    imgSrc: ""
  }));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/old_index": {
    id: "routes/old_index",
    parentId: "root",
    path: "old_index",
    index: void 0,
    caseSensitive: void 0,
    module: old_index_exports
  },
  "routes/$slug": {
    id: "routes/$slug",
    parentId: "root",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm9vdC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL29sZF9pbmRleC50c3giLCAiLi4vYXBwL0NvbXBvbmVudHMvY3RhLnRzeCIsICIuLi9hcHAvQ29tcG9uZW50cy9oZXJvLnRzeCIsICIuLi9hcHAvQ29tcG9uZW50cy9pbmZvLnRzeCIsICIuLi9hcHAvbGliL3Nhbml0eS9nZXRDbGllbnQudHMiLCAiLi4vYXBwL2xpYi9zYW5pdHkvY29uZmlnLnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy8kc2x1Zy50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL2Fib3V0LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uL2FwcC9Db21wb25lbnRzL2hlcm8tYWx0LnRzeCIsICIuLi9hcHAvQ29tcG9uZW50cy9oZXJvLXdoaXRlLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvb2xkX2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy8kc2x1Zy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvYWJvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvb2xkX2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvb2xkX2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwib2xkX2luZGV4XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvJHNsdWdcIjoge1xuICAgIGlkOiBcInJvdXRlcy8kc2x1Z1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIjpzbHVnXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfSxcbiAgXCJyb3V0ZXMvYWJvdXRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9hYm91dFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImFib3V0XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU0XG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGRvdGVudi5jb25maWcoKTtcblxuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKCc8IURPQ1RZUEUgaHRtbD4nICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGluayxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdGFpbHdpbmQuY3NzJztcbmltcG9ydCBhcHBTdHlsZXMgZnJvbSAnLi9zdHlsZXMvYXBwLmNzcyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuL2ltYWdlcy9sb2dvLnN2Zyc7XG5pbXBvcnQgbG9nb0RhcmsgZnJvbSAnLi9pbWFnZXMvbG9nby1kYXJrLnN2Zyc7XG5pbXBvcnQgbG9nb0xpZ2h0IGZyb20gJy4vaW1hZ2VzL2xvZ28tbGlnaHQuc3ZnJztcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogJ1BhZGVsIEFmcmljYScgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfSxcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBhcHBTdHlsZXMgfSxcbiAgXTtcbn1cblxuZXhwb3J0IGNvbnN0IE5hdiA9ICgpID0+IHtcbiAgY29uc3QgW2lzU2hydW5rLCBzZXRTaHJ1bmtdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHNldFNocnVuaygoaXNTaHJ1bmspID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFpc1NocnVuayAmJlxuICAgICAgICAgIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDIwIHx8XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMjApXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzU2hydW5rICYmXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPCA0ICYmXG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA8IDRcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzU2hydW5rO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW25hdmJhck9wZW4sIHNldE5hdmJhck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgc2V0TmF2YmFyT3BlbigocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxuYXZcbiAgICAgICAgY2xhc3NOYW1lPXtgICAke1xuICAgICAgICAgIGlzU2hydW5rXG4gICAgICAgICAgICA/ICd0cmFuc2l0aW9uIGVhc2UtaW4tb3V0ICBtZDpiZy1vcGFjaXR5LTc1IGJhY2tkcm9wLWJsdXItbGcgei0xMCBweS0yIHRleHQteHMgICAnXG4gICAgICAgICAgICA6ICd0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IG1kOmJnLW9wYWNpdHktMCAnXG4gICAgICAgIH0gYmctc2xhdGUtOTAwIGJvcmRlci1ncmF5LTIwMCBweC00IHNtOnB4LTEyIHB5LTYgbWQ6Zml4ZWQgdy1mdWxsIHotMTAgdGV4dC1ibGFjayBgfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGZsZXggZmxleC13cmFwIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbXgtYXV0byc+XG4gICAgICAgICAgPGEgaHJlZj0nLycgY2xhc3NOYW1lPSdmbGV4Jz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtsb2dvTGlnaHR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgdHJhbnNmb3JtICR7XG4gICAgICAgICAgICAgICAgaXNTaHJ1bmsgPyAnaC0xMicgOiAnbWQ6aC0yMCdcbiAgICAgICAgICAgICAgfSBoLTEwYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX1cbiAgICAgICAgICAgIGRhdGEtY29sbGFwc2UtdG9nZ2xlPSdtb2JpbGUtbWVudSdcbiAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHAtMiBtbC0zIHRleHQtc20gcm91bmRlZC1sZyBtZDpoaWRkZW4gaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyYXktMjAwIGRhcms6dGV4dC1ncmF5LTQwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6Zm9jdXM6cmluZy1ncmF5LTYwMCdcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9J21vYmlsZS1tZW51LTInXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPSdmYWxzZSdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPk9wZW4gbWFpbiBtZW51PC9zcGFuPlxuICAgICAgICAgICAge25hdmJhck9wZW4gPyAoXG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9JyB3LTYgaC02J1xuICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjAgMjAnXG4gICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgZD0nTTQuMjkzIDQuMjkzYTEgMSAwIDAxMS40MTQgMEwxMCA4LjU4Nmw0LjI5My00LjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0TDExLjQxNCAxMGw0LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNCAxLjQxNEwxMCAxMS40MTRsLTQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0LTEuNDE0TDguNTg2IDEwIDQuMjkzIDUuNzA3YTEgMSAwIDAxMC0xLjQxNHonXG4gICAgICAgICAgICAgICAgICBjbGlwUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNiBoLTYnXG4gICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xuICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyMCAyMCdcbiAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICBkPSdNMyA1YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xek0zIDEwYTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xek0zIDE1YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xeidcbiAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtcbiAgICAgICAgICAgICAgbmF2YmFyT3BlblxuICAgICAgICAgICAgICAgID8gJ2gtc2NyZWVuIHRleHQtNHhsIHRleHQtY2VudGVyIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlcidcbiAgICAgICAgICAgICAgICA6ICdoaWRkZW4nXG4gICAgICAgICAgICB9IHctZnVsbCBtZDpibG9jayBtZDp3LWF1dG9gfVxuICAgICAgICAgICAgaWQ9J21vYmlsZS1tZW51J1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgIG10LTEyIG1kOm10LTAgICBtZDpmbGV4LXJvdyBtZDpzcGFjZS14LTggICB0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICB0bz0nI2Fib3V0J1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdibG9jayBweS0yIHByLTQgcGwtMyAgICBtZDpib3JkZXItMCAgbWQ6cC0wICAnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgdG89JyNwYXJ0bmVycydcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmxvY2sgcHktMiBwci00IHBsLTMgICAgbWQ6cC0wICAnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUGFydG5lcnNcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgdG89JyNjb250YWN0J1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdibG9jayBweS0yIHByLTQgcGwtMyAgICBtZDpwLTAgICdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBJbnZlc3RvcnNcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGluayB0bz0nI2NvbnRhY3QnIGNsYXNzTmFtZT0nYmxvY2sgcHktMiBwci00IHBsLTMgICBtZDpwLTAgICc+XG4gICAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9J3AtNCAgc206cC04IGJnLXNsYXRlLTkwMCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6ZmxleCBtZDpqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNiBtZDptYi0wJz5cbiAgICAgICAgICA8YSBocmVmPScjJyB0YXJnZXQ9J19ibGFuaycgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8aW1nIHNyYz17bG9nb0xpZ2h0fSBjbGFzc05hbWU9J21yLTQgaC0yMCcgYWx0PSdGbG93Qml0ZSBMb2dvJyAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0yIGdhcC04IHNtOmdhcC02IHNtOmdyaWQtY29scy0zJz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nbWItNiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCB1cHBlcmNhc2UgZGFyazp0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgICAgUmVzb3VyY2VzXG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtYi00Jz5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9mbG93Yml0ZS5jb20nXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTYwMCBob3Zlcjp1bmRlcmxpbmUgZGFyazp0ZXh0LWdyYXktNDAwJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEludmVzdG9yc1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgICAgICByZWw9J25vZm9sbG93J1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNjAwIGhvdmVyOnVuZGVybGluZSBkYXJrOnRleHQtZ3JheS00MDAnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUGFydG5lcnNcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdtYi02IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIHVwcGVyY2FzZSBkYXJrOnRleHQtd2hpdGUnPlxuICAgICAgICAgICAgICBGb2xsb3cgdXNcbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J21iLTQnPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtZ3JheS02MDAgaG92ZXI6dW5kZXJsaW5lIGRhcms6dGV4dC1ncmF5LTQwMCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBGYWNlYm9va1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtZ3JheS02MDAgaG92ZXI6dW5kZXJsaW5lIGRhcms6dGV4dC1ncmF5LTQwMCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBOZXdzbGV0dGVyXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nbWItNiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCB1cHBlcmNhc2UgZGFyazp0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgICAgTGVnYWxcbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J21iLTQnPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtZ3JheS02MDAgaG92ZXI6dW5kZXJsaW5lIGRhcms6dGV4dC1ncmF5LTQwMCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBQcml2YWN5IFBvbGljeVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtZ3JheS02MDAgaG92ZXI6dW5kZXJsaW5lIGRhcms6dGV4dC1ncmF5LTQwMCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBUZXJtcyAmYW1wOyBDb25kaXRpb25zXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxociBjbGFzc05hbWU9J215LTYgYm9yZGVyLWdyYXktMjAwIHNtOm14LWF1dG8gZGFyazpib3JkZXItZ3JheS03MDAgbGc6bXktOCcgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbTpmbGV4IHNtOml0ZW1zLWNlbnRlciBzbTpqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtc20gdGV4dC1ncmF5LTUwMCBzbTp0ZXh0LWNlbnRlciBkYXJrOnRleHQtZ3JheS00MDAnPlxuICAgICAgICAgIFx1MDBBOSAyMDIyeycgJ31cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9mbG93Yml0ZS5jb20nXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naG92ZXI6dW5kZXJsaW5lJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIFBhZGVsIEFmcmljYVx1MjEyMlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICAuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbXQtNCBzcGFjZS14LTYgc206anVzdGlmeS1jZW50ZXIgc206bXQtMCc+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9JyMnXG4gICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTkwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNSBoLTUnXG4gICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICBkPSdNMjIgMTJjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMFMyIDYuNDc3IDIgMTJjMCA0Ljk5MSAzLjY1NyA5LjEyOCA4LjQzOCA5Ljg3OHYtNi45ODdoLTIuNTRWMTJoMi41NFY5Ljc5N2MwLTIuNTA2IDEuNDkyLTMuODkgMy43NzctMy44OSAxLjA5NCAwIDIuMjM4LjE5NSAyLjIzOC4xOTV2Mi40NmgtMS4yNmMtMS4yNDMgMC0xLjYzLjc3MS0xLjYzIDEuNTYyVjEyaDIuNzczbC0uNDQzIDIuODloLTIuMzN2Ni45ODhDMTguMzQzIDIxLjEyOCAyMiAxNi45OTEgMjIgMTJ6J1xuICAgICAgICAgICAgICAgIGNsaXBSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS05MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTUgaC01J1xuICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXG4gICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgZD0nTTEyLjMxNSAyYzIuNDMgMCAyLjc4NC4wMTMgMy44MDguMDYgMS4wNjQuMDQ5IDEuNzkxLjIxOCAyLjQyNy40NjVhNC45MDIgNC45MDIgMCAwMTEuNzcyIDEuMTUzIDQuOTAyIDQuOTAyIDAgMDExLjE1MyAxLjc3MmMuMjQ3LjYzNi40MTYgMS4zNjMuNDY1IDIuNDI3LjA0OCAxLjA2Ny4wNiAxLjQwNy4wNiA0LjEyM3YuMDhjMCAyLjY0My0uMDEyIDIuOTg3LS4wNiA0LjA0My0uMDQ5IDEuMDY0LS4yMTggMS43OTEtLjQ2NSAyLjQyN2E0LjkwMiA0LjkwMiAwIDAxLTEuMTUzIDEuNzcyIDQuOTAyIDQuOTAyIDAgMDEtMS43NzIgMS4xNTNjLS42MzYuMjQ3LTEuMzYzLjQxNi0yLjQyNy40NjUtMS4wNjcuMDQ4LTEuNDA3LjA2LTQuMTIzLjA2aC0uMDhjLTIuNjQzIDAtMi45ODctLjAxMi00LjA0My0uMDYtMS4wNjQtLjA0OS0xLjc5MS0uMjE4LTIuNDI3LS40NjVhNC45MDIgNC45MDIgMCAwMS0xLjc3Mi0xLjE1MyA0LjkwMiA0LjkwMiAwIDAxLTEuMTUzLTEuNzcyYy0uMjQ3LS42MzYtLjQxNi0xLjM2My0uNDY1LTIuNDI3LS4wNDctMS4wMjQtLjA2LTEuMzc5LS4wNi0zLjgwOHYtLjYzYzAtMi40My4wMTMtMi43ODQuMDYtMy44MDguMDQ5LTEuMDY0LjIxOC0xLjc5MS40NjUtMi40MjdhNC45MDIgNC45MDIgMCAwMTEuMTUzLTEuNzcyQTQuOTAyIDQuOTAyIDAgMDE1LjQ1IDIuNTI1Yy42MzYtLjI0NyAxLjM2My0uNDE2IDIuNDI3LS40NjVDOC45MDEgMi4wMTMgOS4yNTYgMiAxMS42ODUgMmguNjN6bS0uMDgxIDEuODAyaC0uNDY4Yy0yLjQ1NiAwLTIuNzg0LjAxMS0zLjgwNy4wNTgtLjk3NS4wNDUtMS41MDQuMjA3LTEuODU3LjM0NC0uNDY3LjE4Mi0uOC4zOTgtMS4xNS43NDgtLjM1LjM1LS41NjYuNjgzLS43NDggMS4xNS0uMTM3LjM1My0uMy44ODItLjM0NCAxLjg1Ny0uMDQ3IDEuMDIzLS4wNTggMS4zNTEtLjA1OCAzLjgwN3YuNDY4YzAgMi40NTYuMDExIDIuNzg0LjA1OCAzLjgwNy4wNDUuOTc1LjIwNyAxLjUwNC4zNDQgMS44NTcuMTgyLjQ2Ni4zOTkuOC43NDggMS4xNS4zNS4zNS42ODMuNTY2IDEuMTUuNzQ4LjM1My4xMzcuODgyLjMgMS44NTcuMzQ0IDEuMDU0LjA0OCAxLjM3LjA1OCA0LjA0MS4wNThoLjA4YzIuNTk3IDAgMi45MTctLjAxIDMuOTYtLjA1OC45NzYtLjA0NSAxLjUwNS0uMjA3IDEuODU4LS4zNDQuNDY2LS4xODIuOC0uMzk4IDEuMTUtLjc0OC4zNS0uMzUuNTY2LS42ODMuNzQ4LTEuMTUuMTM3LS4zNTMuMy0uODgyLjM0NC0xLjg1Ny4wNDgtMS4wNTUuMDU4LTEuMzcuMDU4LTQuMDQxdi0uMDhjMC0yLjU5Ny0uMDEtMi45MTctLjA1OC0zLjk2LS4wNDUtLjk3Ni0uMjA3LTEuNTA1LS4zNDQtMS44NThhMy4wOTcgMy4wOTcgMCAwMC0uNzQ4LTEuMTUgMy4wOTggMy4wOTggMCAwMC0xLjE1LS43NDhjLS4zNTMtLjEzNy0uODgyLS4zLTEuODU3LS4zNDQtMS4wMjMtLjA0Ny0xLjM1MS0uMDU4LTMuODA3LS4wNTh6TTEyIDYuODY1YTUuMTM1IDUuMTM1IDAgMTEwIDEwLjI3IDUuMTM1IDUuMTM1IDAgMDEwLTEwLjI3em0wIDEuODAyYTMuMzMzIDMuMzMzIDAgMTAwIDYuNjY2IDMuMzMzIDMuMzMzIDAgMDAwLTYuNjY2em01LjMzOC0zLjIwNWExLjIgMS4yIDAgMTEwIDIuNCAxLjIgMS4yIDAgMDEwLTIuNHonXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9JyMnXG4gICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTkwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNSBoLTUnXG4gICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGggZD0nTTguMjkgMjAuMjUxYzcuNTQ3IDAgMTEuNjc1LTYuMjUzIDExLjY3NS0xMS42NzUgMC0uMTc4IDAtLjM1NS0uMDEyLS41M0E4LjM0OCA4LjM0OCAwIDAwMjIgNS45MmE4LjE5IDguMTkgMCAwMS0yLjM1Ny42NDYgNC4xMTggNC4xMTggMCAwMDEuODA0LTIuMjcgOC4yMjQgOC4yMjQgMCAwMS0yLjYwNS45OTYgNC4xMDcgNC4xMDcgMCAwMC02Ljk5MyAzLjc0MyAxMS42NSAxMS42NSAwIDAxLTguNDU3LTQuMjg3IDQuMTA2IDQuMTA2IDAgMDAxLjI3IDUuNDc3QTQuMDcyIDQuMDcyIDAgMDEyLjggOS43MTN2LjA1MmE0LjEwNSA0LjEwNSAwIDAwMy4yOTIgNC4wMjIgNC4wOTUgNC4wOTUgMCAwMS0xLjg1My4wNyA0LjEwOCA0LjEwOCAwIDAwMy44MzQgMi44NUE4LjIzMyA4LjIzMyAwIDAxMiAxOC40MDdhMTEuNjE2IDExLjYxNiAwIDAwNi4yOSAxLjg0JyAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz0nZW4nIGNsYXNzTmFtZT0nc2Nyb2xsLXNtb290aCc+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT0ndGV4dC1zbGF0ZS05MDAnPlxuICAgICAgICA8TmF2IC8+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBGb3JtLCBMaW5rLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IE1ldGEgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBnZXRGaWxtcywgRmlsbSB9IGZyb20gJ34vYXBpL2ZpbG1zJztcbmltcG9ydCBDVEEgZnJvbSAnfi9Db21wb25lbnRzL2N0YSc7XG5pbXBvcnQgSGVybyBmcm9tICd+L0NvbXBvbmVudHMvaGVybyc7XG5pbXBvcnQgSW5mbyBmcm9tICd+L0NvbXBvbmVudHMvaW5mbyc7XG5pbXBvcnQgaW5mb0ltZyBmcm9tICcuLi9pbWFnZXMvYWJvdXQtcGEuanBnJztcbmltcG9ydCB7IGdldENsaWVudCwgdXJsRm9yIH0gZnJvbSAnfi9saWIvc2FuaXR5L2dldENsaWVudCc7XG5pbXBvcnQge1xuICBQb3J0YWJsZVRleHQsXG4gIFBvcnRhYmxlVGV4dFR5cGVDb21wb25lbnQsXG4gIFBvcnRhYmxlVGV4dENvbXBvbmVudHNQcm92aWRlcixcbn0gZnJvbSAnQHBvcnRhYmxldGV4dC9yZWFjdCc7XG5cbi8vIGxvYWRlcigpIG11c3QgYmUgYXN5bmMhXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKCkge1xuICBjb25zdCBuZXdzUG9zdHMgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaChcbiAgICBgKltfdHlwZSA9PSBcIm5ld3NcIl17IF9pZCwgdGl0bGUsIHNsdWcsIFwiZmVhdHVyZUltYWdlXCI6IGZlYXR1cmUuYXNzZXQtPnVybFxuICAgfWBcbiAgKTtcbiAgY29uc3QgYWJvdXRUZXh0ID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJzZWN0aW9uc1wiICYmIHNsdWcuY3VycmVudCA9PSBcImFib3V0LXBhZGVsLWFmcmljYVwiIF17IF9pZCwgdGl0bGUsIG92ZXJ2aWV3LCBcImZlYXR1cmVJbWFnZVwiOiBmZWF0dXJlLmFzc2V0LT51cmxcbiAgIH1gXG4gICk7XG4gIHJldHVybiB7IG5ld3NQb3N0cywgYWJvdXRUZXh0IH07XG59XG5cbi8vIFNlcnZlciBTaWRlXG4vL2V4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4vL2NvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuLy9jb25zdCB0aXRsZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCd0aXRsZScpO1xuLy9yZXR1cm4gZ2V0RmlsbXModGl0bGUpO1xuLy99O1xuXG5leHBvcnQgY29uc3QgbWV0YSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1BhZGVsIEFmcmljYSB8IFRoZSBOdW1iZXIgMSBBZnJpY2FuIFBhZGVsIENvbXBhbnknLFxuICAgIGRlc2NyaXB0aW9uOiAnUGFkZWwgQWZyaWNhIGhvbWUgcGFnZScsXG4gICAga2V5d29yZHM6ICdwYWRlbCwgYWZyaWNhLCBzcG9ydCcsXG4gIH07XG59O1xuXG4vLyBDbGllbnQgU2lkZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPbGRJbmRleCgpIHtcbiAgY29uc3QgeyBuZXdzUG9zdHMsIGFib3V0VGV4dCB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIGNvbnN0IG15UG9ydGFibGVUZXh0Q29tcG9uZW50cyA9IHtcbiAgICB0eXBlczoge1xuICAgICAgaW1hZ2U6ICh2YWx1ZTogYW55KSA9PiAoXG4gICAgICAgIDxpbWcgc3JjPXt2YWx1ZS5hc3NldH0ga2V5PXt2YWx1ZS5faWR9IGNsYXNzTmFtZT17dmFsdWUuYXNzZXR9PjwvaW1nPlxuICAgICAgKSxcbiAgICB9LFxuICB9O1xuICAvL2NvbnN0IGZpbG1zID0gdXNlTG9hZGVyRGF0YTxGaWxtW10+KCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZXJvXG4gICAgICAgIGhlYWRpbmc9J1BhZGVsIGhhcyB0YWtlbiBFdXJvcGUgYnkgc3Rvcm0uIE5vdyBpdFx1MjAxOXMgdGltZSB0byBicmluZyBpdCB0byBBZnJpY2EuXG4gICAgICAgICdcbiAgICAgICAgYm9keT0nVXNpbmcgb3VyIGV4dGVuc2l2ZSBrbm93bGVkZ2Ugb2YgQWZyaWNhIGFuZCBidXNpbmVzcyBkZXZlbG9wbWVudCwgd2UgYWltIHRvIHByb3ZpZGUgUGFkZWwsIGFzIGEgc3BvcnQgYW5kIGEgY29tbXVuaXR5IGVuYWJsZXIsIHRvIEdoYW5hLCBLZW55YSwgTmlnZXJpYSBhbmQgb3RoZXIgU3ViIFNhaGFyYW4gY291bnRyaWVzLlxuICAgICAgICAnXG4gICAgICAgIGJ1dHRvbjFUZXh0PSdMZWFybiBNb3JlJ1xuICAgICAgICBidXR0b24xVG89JyNhYm91dCdcbiAgICAgICAgYnV0dG9uMlRleHQ9J1dhbnQgdG8gUGFydG5lcj8nXG4gICAgICAgIGJ1dHRvbjJUbz0nI2Fib3V0J1xuICAgICAgICBpbWdTcmM9JydcbiAgICAgIC8+XG5cbiAgICAgIDxJbmZvIGZsb3c9J2xlZnQnIC8+XG4gICAgICA8Q1RBXG4gICAgICAgIGhlYWRpbmc9J0FyZSB5b3UgaW50ZXJlc3RlZCBpbiBwYXJ0bmVyaW5nIHdpdGggdGhlIE51bWJlciAxIEFmcmljYW4gUGFkZWwgY29tcGFueT8nXG4gICAgICAgIGJvZHk9J0ludGVnZXIgYSBlcm9zIHZlbmVuYXRpcywgaW50ZXJkdW0gbG9yZW0gZXUsIGxvYm9ydGlzIGxpZ3VsYS4gQ3VyYWJpdHVyIHZlbCBpcHN1bSBub24gdGVsbHVzIGNvbnZhbGxpcyBlbGVtZW50dW0uIFZpdmFtdXMgcHVsdmluYXIgcmlzdXMgbmVjIHNhcGllbiBjb21tb2RvIGJpYmVuZHVtJ1xuICAgICAgICBidXR0b25UZXh0PSdDbGljayBoZXJlJ1xuICAgICAgICBidXR0b25Ubz0nI2Fib3V0J1xuICAgICAgLz5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdbY3RhXSAgcC12dy0zMiBwYi0wICBzcGFjZS14LTEwIGZsZXggJz5cbiAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9J3ctMS80Jz5cbiAgICAgICAgICA8aW1nIHNyYz17aW5mb0ltZ30gLz5cbiAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDxibG9ja3F1b3RlIGNsYXNzTmFtZT0ndy0zLzQgc3BhY2UteS00ICAnPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtM3hsIGZvbnQtYm9sZCc+XG4gICAgICAgICAgICBcdTIwMUMgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXG4gICAgICAgICAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlx1MjAxRFxuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICB7LyogVGhlIDIgUG9ydGFibGVUZXh0IGluc3RhbmNlcyBiZWxvdyB3aWxsIHJlY2VpdmUgdGhlIHNhbWUgY3VzdG9tIGNvbXBvbmVudHMgKi99XG4gICAgICAgIDwvYmxvY2txdW90ZT5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgaWQ9J25ld3MnXG4gICAgICAgIGNsYXNzTmFtZT0nW2Fib3V0XSAgcC12dy0zMiBiZy13aGl0ZSB0ZXh0LWNlbnRlciBzcGFjZS15LXZ3LTYtbWluQHhsICdcbiAgICAgID5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC00eGwgZm9udC1ib2xkJz5OZXdzPC9oMj5cblxuICAgICAgICB7LypcbiAgICAgICAgLy9TRUFSQ0ggRklMVEVSXG4gICAgICAgIDxGb3JtIGNsYXNzTmFtZT0ncHktNSc+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgIG5hbWU9J3RpdGxlJ1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nZW50ZXIgc29tZXRoaW5nJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlci0yIHJvdW5kZWQgcHktMiBweC0yJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTgwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkIG14LTInXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2VhcmNoeycgJ31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9Gb3JtPlxuICAqL31cblxuICAgICAgICB7LypcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTYgJz5cbiAgICAgICAgICB7ZmlsbXMuc2xpY2UoMCwgNCkubWFwKChmaWxtKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG92ZXI6c2hhZG93LTJ4bCBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6Zm9udC1ib2xkIGN1cnNvci1wb2ludGVyICBwLTQgIHNwYWNlLXktdnctNC1tYXhAbWQnPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhc3BlY3Qtc3F1YXJlIHJvdW5kZWQtbWQgICdcbiAgICAgICAgICAgICAgICBzcmM9e2ZpbG0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PXtmaWxtLnRpdGxlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2PntmaWxtLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9eycgJ31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKi99XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTYgJz5cbiAgICAgICAgICB7bmV3c1Bvc3RzPy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IG5ld3NQb3N0cy5zbGljZSgwLCA2KS5tYXAoKG5ld3M6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17bmV3cy5faWR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2hvdmVyOnNoYWRvdy0yeGwgaG92ZXI6c2NhbGUtMTA1IGhvdmVyOmZvbnQtYm9sZCBjdXJzb3ItcG9pbnRlciAgcC00ICBzcGFjZS15LXZ3LTQtbWF4QG1kJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IobmV3cy5mZWF0dXJlSW1hZ2UpLndpZHRoKDUwMCkudXJsKCl9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17bmV3cy50aXRsZX1cbiAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtuZXdzLnNsdWcuY3VycmVudH0+e25ld3MudGl0bGV9IDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIGlkPSdjb250YWN0J1xuICAgICAgICBjbGFzc05hbWU9J1tjb250YWN0XSAgYmctc2xhdGUtOTAwICAgc3BhY2UteC0xMCAgIHAtdnctMzIgIHNwYWNlLXktMTAgbWQ6c3BhY2UteC0xMCBmbGV4IGZsZXgtY29sICB0ZXh0LXdoaXRlICdcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyAgbS1hdXRvICB0ZXh0LWNlbnRlciBtIHNwYWNlLXktdnctNi1taW5AeGwgbWQ6dy0xLzIgJz5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgIHZpYS1ncmVlbi01MDAgdG8teWVsbG93LTQwMCAnPlxuICAgICAgICAgICAgQ29udGFjdCBVc1xuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdiYXNlJz5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBzcGFjZS14LXZ3LTQtbWluQHhsICBtZDppbmxpbmUtZmxleCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbGF0ZS05MDAnPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3B5LXZ3LTQtbWluQHhsLW1heEAyeGwgcHgtdnctNC1taW5AeGwtbWF4QDJ4bCBiZy1ncmFkaWVudC10by1iciBmcm9tLWdyZWVuLTMwMCAgIHRvLXllbGxvdy00MDAgcm91bmRlZC14bCBmb250LWJvbGQgaG92ZXI6YmctZ3JhZGllbnQtdG8tdGwgaG92ZXI6c2NhbGUtMTA1IHNoYWRvdy0yeGwnPlxuICAgICAgICAgICAgICBFbWFpbCBVc1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nIHB5LXZ3LTQtbWluQHhsLW1heEAyeGwgcHgtdnctNC1taW5AeGwtbWF4QDJ4bCBiZy1ncmFkaWVudC10by1iciBmcm9tLXdoaXRlICAgdG8tZ3JheS0yMDAgcm91bmRlZC14bCBmb250LWJvbGQgaG92ZXI6YmctZ3JhZGllbnQtdG8tdGwgaG92ZXI6c2NhbGUtMTA1IHNoYWRvdy0yeGwnPlxuICAgICAgICAgICAgICBKb2luIE1haWxpbmcgTGlzdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XG5cbmludGVyZmFjZSBDVEFDb250ZW50IHtcbiAgaGVhZGluZzogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIGJ1dHRvblRleHQ6IHN0cmluZztcbiAgYnV0dG9uVG86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ1RBKHByb3BzOiBDVEFDb250ZW50KSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIGlkPSdwYXJ0bmVycydcbiAgICAgIGNsYXNzTmFtZT0nW2N0YV0gcC0yMCBtZDpteC0yMCBiZy1zbGF0ZS05MDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1taWRkbGUgcm91bmRlZC1tZCBzaGFkb3ctMnhsIHRleHQtd2hpdGUnXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9JyAgbS1hdXRvICB0ZXh0LWNlbnRlciAgc3BhY2UteS12dy02LW1pbkB4bCBtZDp3LTMvNCAnPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTZ4bCBmb250LWhlYWRpbmcgdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgIHZpYS1ncmVlbi01MDAgdG8teWVsbG93LTQwMCAnPlxuICAgICAgICAgIHtwcm9wcy5oZWFkaW5nfVxuICAgICAgICA8L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2Jhc2UnPntwcm9wcy5ib2R5fTwvcD5cbiAgICAgICAgPExpbmsgdG89e3Byb3BzLmJ1dHRvblRvfSBjbGFzc05hbWU9JyBpbmxpbmUtZmxleCAnPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdweS00IHB4LTYgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgIHZpYS1ncmVlbi01MDAgdG8teWVsbG93LTQwMCByb3VuZGVkLXhsIHRleHQtYmxhY2sgZm9udC1ib2xkIGhvdmVyOmJnLWdyYWRpZW50LXRvLXRsIGhvdmVyOnNjYWxlLTEwNSBzaGFkb3ctMnhsJz5cbiAgICAgICAgICAgIHtwcm9wcy5idXR0b25UZXh0fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCBoZXJvSW1nIGZyb20gJy4uL2ltYWdlcy9wYWRlbC1oZXJvLmpwZyc7XG5cbmludGVyZmFjZSBIZXJvQ29udGVudCB7XG4gIGhlYWRpbmc6IHN0cmluZztcbiAgYm9keTogc3RyaW5nO1xuICBidXR0b24xVGV4dDogc3RyaW5nO1xuICBidXR0b24xVG86IHN0cmluZztcbiAgYnV0dG9uMlRleHQ6IHN0cmluZztcbiAgYnV0dG9uMlRvOiBzdHJpbmc7XG4gIGltZ1NyYzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvKHByb3BzOiBIZXJvQ29udGVudCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBjbGFzc05hbWU9J1toZXJvXSBtaW4taC1zY3JlZW4gcHktNiAgIHB4LTYgbWQ6cHgtMjQgZmxleCAgZmxleC1jb2wgbWQ6ZmxleC1yb3cgYWxpZ24tbWlkZGxlIGp1c3RpZnktYmV0d2VlbiAgYmctY292ZXIgICAgIG1kOnNwYWNlLXgtMTJcdCAnXG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigxNSwgMjMsIDQyKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIzKSksdXJsKCcke2hlcm9JbWd9JylgLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIG1kOnctMi81IG15LWF1dG8gc3BhY2UteS12dy0yLW1pbkB4bCBweS04IHVwcGVyY2FzZSAnPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTZ4bCBmb250LWhlYWRpbmcgdGV4dC13aGl0ZSAgJz5cbiAgICAgICAgICBQYWRlbCBoYXMgdGFrZW4gRXVyb3BlIGJ5IHN0b3JtLiZuYnNwOzxicj48L2JyPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgIHZpYS1ncmVlbi01MDAgdG8teWVsbG93LTQwMCc+XG4gICAgICAgICAgICBOb3cgaXQncyB0aW1lIHRvIGJyaW5nIGl0IHRvIEFmcmljYVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtYmFzZSBmb250LWxpZ2h0IHRleHQtc2xhdGUtMzAwJz5cbiAgICAgICAgICBcdUQ4M0RcdURDNEIgSW50ZXJlc3RlZCBpbiBhIHBhcnRuZXJzaGlwP1xuICAgICAgICAgIDxhIGNsYXNzTmFtZT0ndW5kZXJsaW5lJyBocmVmPScnPlxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIEVtYWlsIHVzXG4gICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9J3ctZnVsbCBtZDp3LTIvNSAgbXktYXV0byBzcGFjZS15LXZ3LTQtbWluQHhsIGJnLXdoaXRlICBiZy1vcGFjaXR5LTUwIGJhY2tkcm9wLWJsdXItbGcgc2hhZG93LTJ4bFx0IHAtNiAgICBoLWZpdCAnPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtaGVhZGluZyB0ZXh0LWxnICB1cHBlcmNhc2UnPkpvaW4gdGhlIE1haWxpbmcgTGlzdDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCcgY2xhc3NOYW1lPSdibG9jayAgdGV4dC14cyAgJz5cbiAgICAgICAgICAgIFlvdXIgTmFtZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgaWQ9J25hbWUnXG4gICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LXNtIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNSAwICBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAnXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nSm9lIEJsb2dncydcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi02Jz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnIGNsYXNzTmFtZT0nYmxvY2sgdGV4dC14cyAnPlxuICAgICAgICAgICAgWW91ciBlbWFpbFxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPSdlbWFpbCdcbiAgICAgICAgICAgIGlkPSdlbWFpbCdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtc20gIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNSBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwICBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMCdcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSduYW1lQGZsb3diaXRlLmNvbSdcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi02Jz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnIGNsYXNzTmFtZT0nYmxvY2sgdGV4dC14cyc+XG4gICAgICAgICAgICBZb3VyIENvbXBhbnlcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIGlkPSdjb21wYW55J1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1zbSAgIGJsb2NrIHctZnVsbCBwLTIuNSAgIGRhcms6dGV4dC13aGl0ZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAnXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nQWNtZSBJbmMnXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgY2xhc3NOYW1lPScgcHktNCBweC02IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwIHRvLXllbGxvdy00MDAgZm9udC1oZWFkaW5nIHVwcGVyY2FzZSBob3ZlcjpiZy1ncmFkaWVudC10by10bCBob3ZlcjpzY2FsZS0xMDUgc2hhZG93LTJ4bCAnXG4gICAgICAgID5cbiAgICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIiwgImltcG9ydCBpbmZvSW1nIGZyb20gJy4uL2ltYWdlcy9hYm91dC1wYS5qcGcnO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4JztcblxuaW1wb3J0IHsgUG9ydGFibGVUZXh0IH0gZnJvbSAnQHBvcnRhYmxldGV4dC9yZWFjdCc7XG5cbmludGVyZmFjZSBJbmZvQ29udGVudCB7XG4gIGZsb3c6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5mbyhwcm9wczogSW5mb0NvbnRlbnQpIHtcbiAgY29uc3QgeyBhYm91dFRleHQgfSA9IHVzZUxvYWRlckRhdGEoKTtcblxuICBjb25zdCBteVBvcnRhYmxlVGV4dENvbXBvbmVudHMgPSB7XG4gICAgdHlwZXM6IHtcbiAgICAgIGltYWdlOiAodmFsdWU6IGFueSkgPT4gKFxuICAgICAgICA8aW1nIHNyYz17dmFsdWUuYXNzZXR9IGtleT17dmFsdWUuX2lkfSBjbGFzc05hbWU9e3ZhbHVlLmFzc2V0fT48L2ltZz5cbiAgICAgICksXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBpZD0nYWJvdXQnXG4gICAgICBjbGFzc05hbWU9e2BbY3RhXSAgcC12dy0zMiAgc3BhY2UteS0xMCBtZDpzcGFjZS14LTEwIGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgJHtcbiAgICAgICAgcHJvcHMuZmxvdyA9PSAnbGVmdCcgPyAnJyA6ICcgbWQ6ZmxleC1yb3ctcmV2ZXJzZSBzcGFjZS14LXJldmVyc2UnXG4gICAgICB9IGB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J21kOnctMS8yIHNwYWNlLXktNCAgJz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC00eGwgZm9udC1ib2xkJz57YWJvdXRUZXh0WzBdLnRpdGxlfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluLWNvbnRlbnQgc3BhY2UteS0yJz5cbiAgICAgICAgICB7YWJvdXRUZXh0WzBdLm92ZXJ2aWV3Py5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IGFib3V0VGV4dFswXS5vdmVydmlldy5tYXAoKHBhcmFncmFwaHM6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgIDxQb3J0YWJsZVRleHRcbiAgICAgICAgICAgICAgICAgIGtleT17cGFyYWdyYXBocy5faWR9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17W3BhcmFncmFwaHNdfVxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17bXlQb3J0YWJsZVRleHRDb21wb25lbnRzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZmlndXJlIGNsYXNzTmFtZT0nbWQ6dy0xLzIgYmctc2xhdGUtMzAwJz5cbiAgICAgICAgPGltZyBzcmM9e2Fib3V0VGV4dFswXS5mZWF0dXJlSW1hZ2V9IC8+XG4gICAgICA8L2ZpZ3VyZT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iLCAiaW1wb3J0IFBpY29TYW5pdHkgZnJvbSAncGljb3Nhbml0eSc7XG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xuXG4vLyBTdGFuZGFyZCBjbGllbnQgZm9yIGZldGNoaW5nIGRhdGFcbmV4cG9ydCBjb25zdCBzYW5pdHlDbGllbnQgPSBuZXcgUGljb1Nhbml0eShjb25maWcpO1xuXG5leHBvcnQgY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihzYW5pdHlDbGllbnQpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXJsRm9yKHNvdXJjZTogYW55KSB7XG4gIHJldHVybiBidWlsZGVyLmltYWdlKHNvdXJjZSk7XG59XG5cbi8vIEF1dGhlbnRpY2F0ZWQgY2xpZW50IGZvciBmZXRjaGluZyBkcmFmdCBkb2N1bWVudHNcbmV4cG9ydCBjb25zdCBwcmV2aWV3Q2xpZW50ID0gbmV3IFBpY29TYW5pdHkoe1xuICAuLi5jb25maWcsXG4gIHVzZUNkbjogZmFsc2UsXG4gIC8vdG9rZW46IHByb2Nlc3MuZW52LlNBTklUWV9BUElfVE9LRU4sXG59KTtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNob29zZSB0aGUgY29ycmVjdCBjbGllbnRcbmV4cG9ydCBjb25zdCBnZXRDbGllbnQgPSAodXNlUHJldmlldyA9IGZhbHNlKSA9PlxuICB1c2VQcmV2aWV3ID8gcHJldmlld0NsaWVudCA6IHNhbml0eUNsaWVudDtcbiIsICJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGlWZXJzaW9uOiAnMjAyMS0wMy0yNScsXG4gIC8vIEZpbmQgdGhlc2UgaW4geW91ciAuL3N0dWRpby9zYW5pdHkuanNvbiBmaWxlXG4gIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJyxcbiAgcHJvamVjdElkOiAncWk4aHIzcnYnLFxuICB1c2VDZG46IGZhbHNlLFxufTtcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgeyBnZXRDbGllbnQgfSBmcm9tICd+L2xpYi9zYW5pdHkvZ2V0Q2xpZW50JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcih7IHBhcmFtcyB9OiB7IHBhcmFtczogYW55IH0pIHtcbiAgLy8gUXVlcnkgZm9yIF9hbGxfIGRvY3VtZW50cyB3aXRoIHRoaXMgc2x1Z1xuICAvLyBUaGVyZSBjb3VsZCBiZSB0d286IERyYWZ0IGFuZCBQdWJsaXNoZWQhXG4gIGNvbnN0IGluaXRpYWxEYXRhID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJuZXdzXCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXXsgX2lkLCB0aXRsZSwgc2x1ZywgXCJmZWF0dXJlSW1hZ2VcIjogZmVhdHVyZS5hc3NldC0+dXJsXG4gIH1gLFxuICAgIHsgc2x1ZzogcGFyYW1zLnNsdWcgfVxuICApO1xuXG4gIHJldHVybiB7IGluaXRpYWxEYXRhIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NQb3N0KCkge1xuICBsZXQgeyBpbml0aWFsRGF0YSB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBwYWRkaW5nOiAyMCB9fT5cbiAgICAgIDxoMT57aW5pdGlhbERhdGFbMF0udGl0bGV9PC9oMT5cbiAgICAgIDxpbWcgc3JjPXtpbml0aWFsRGF0YVswXS5mZWF0dXJlSW1hZ2V9PjwvaW1nPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogJ3N5c3RlbS11aSwgc2Fucy1zZXJpZicsIGxpbmVIZWlnaHQ6ICcxLjQnIH19PlxuICAgICAgPGgxPldlbGNvbWUgdG8gUmVtaXg8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPSdwLTYnPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vcmVtaXgucnVuL3R1dG9yaWFscy9ibG9nJ1xuICAgICAgICAgICAgcmVsPSdub3JlZmVycmVyJ1xuICAgICAgICAgID48L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IEZvcm0sIExpbmssIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgTWV0YSB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IGdldEZpbG1zLCBGaWxtIH0gZnJvbSAnfi9hcGkvZmlsbXMnO1xuaW1wb3J0IENUQSBmcm9tICd+L0NvbXBvbmVudHMvY3RhJztcbmltcG9ydCBIZXJvIGZyb20gJ34vQ29tcG9uZW50cy9oZXJvJztcbmltcG9ydCBIZXJvQWx0IGZyb20gJ34vQ29tcG9uZW50cy9oZXJvLWFsdCc7XG5pbXBvcnQgSGVyb1doaXRlIGZyb20gJ34vQ29tcG9uZW50cy9oZXJvLXdoaXRlJztcblxuaW1wb3J0IEluZm8gZnJvbSAnfi9Db21wb25lbnRzL2luZm8nO1xuaW1wb3J0IGluZm9JbWcgZnJvbSAnLi4vaW1hZ2VzL2Fib3V0LXBhLmpwZyc7XG5pbXBvcnQgeyBnZXRDbGllbnQsIHVybEZvciB9IGZyb20gJ34vbGliL3Nhbml0eS9nZXRDbGllbnQnO1xuaW1wb3J0IHtcbiAgUG9ydGFibGVUZXh0LFxuICBQb3J0YWJsZVRleHRUeXBlQ29tcG9uZW50LFxuICBQb3J0YWJsZVRleHRDb21wb25lbnRzUHJvdmlkZXIsXG59IGZyb20gJ0Bwb3J0YWJsZXRleHQvcmVhY3QnO1xuXG4vLyBsb2FkZXIoKSBtdXN0IGJlIGFzeW5jIVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcigpIHtcbiAgY29uc3QgbmV3c1Bvc3RzID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJuZXdzXCJdeyBfaWQsIHRpdGxlLCBzbHVnLCBcImZlYXR1cmVJbWFnZVwiOiBmZWF0dXJlLmFzc2V0LT51cmxcbiAgIH1gXG4gICk7XG4gIGNvbnN0IGFib3V0VGV4dCA9IGF3YWl0IGdldENsaWVudCgpLmZldGNoKFxuICAgIGAqW190eXBlID09IFwic2VjdGlvbnNcIiAmJiBzbHVnLmN1cnJlbnQgPT0gXCJhYm91dC1wYWRlbC1hZnJpY2FcIiBdeyBfaWQsIHRpdGxlLCBvdmVydmlldywgXCJmZWF0dXJlSW1hZ2VcIjogZmVhdHVyZS5hc3NldC0+dXJsXG4gICB9YFxuICApO1xuICByZXR1cm4geyBuZXdzUG9zdHMsIGFib3V0VGV4dCB9O1xufVxuXG4vLyBTZXJ2ZXIgU2lkZVxuLy9leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuLy9jb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbi8vY29uc3QgdGl0bGUgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgndGl0bGUnKTtcbi8vcmV0dXJuIGdldEZpbG1zKHRpdGxlKTtcbi8vfTtcblxuZXhwb3J0IGNvbnN0IG1ldGEgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdQYWRlbCBBZnJpY2EgfCBUaGUgTnVtYmVyIDEgQWZyaWNhbiBQYWRlbCBDb21wYW55JyxcbiAgICBkZXNjcmlwdGlvbjogJ1BhZGVsIEFmcmljYSBob21lIHBhZ2UnLFxuICAgIGtleXdvcmRzOiAncGFkZWwsIGFmcmljYSwgc3BvcnQnLFxuICB9O1xufTtcblxuLy8gQ2xpZW50IFNpZGVcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgbmV3c1Bvc3RzLCBhYm91dFRleHQgfSA9IHVzZUxvYWRlckRhdGEoKTtcblxuICBjb25zdCBteVBvcnRhYmxlVGV4dENvbXBvbmVudHMgPSB7XG4gICAgdHlwZXM6IHtcbiAgICAgIGltYWdlOiAodmFsdWU6IGFueSkgPT4gKFxuICAgICAgICA8aW1nIHNyYz17dmFsdWUuYXNzZXR9IGtleT17dmFsdWUuX2lkfSBjbGFzc05hbWU9e3ZhbHVlLmFzc2V0fT48L2ltZz5cbiAgICAgICksXG4gICAgfSxcbiAgfTtcbiAgLy9jb25zdCBmaWxtcyA9IHVzZUxvYWRlckRhdGE8RmlsbVtdPigpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVyb0FsdFxuICAgICAgICBoZWFkaW5nPSdQYWRlbCBoYXMgdGFrZW4gRXVyb3BlIGJ5IHN0b3JtLiBOb3cgaXRcdTIwMTlzIHRpbWUgdG8gYnJpbmcgaXQgdG8gQWZyaWNhLlxuICAgICAgICAnXG4gICAgICAgIGJvZHk9J1VzaW5nIG91ciBleHRlbnNpdmUga25vd2xlZGdlIG9mIEFmcmljYSBhbmQgYnVzaW5lc3MgZGV2ZWxvcG1lbnQsIHdlIGFpbSB0byBwcm92aWRlIFBhZGVsLCBhcyBhIHNwb3J0IGFuZCBhIGNvbW11bml0eSBlbmFibGVyLCB0byBHaGFuYSwgS2VueWEsIE5pZ2VyaWEgYW5kIG90aGVyIFN1YiBTYWhhcmFuIGNvdW50cmllcy5cbiAgICAgICAgJ1xuICAgICAgICBidXR0b24xVGV4dD0nTGVhcm4gTW9yZSdcbiAgICAgICAgYnV0dG9uMVRvPScjYWJvdXQnXG4gICAgICAgIGJ1dHRvbjJUZXh0PSdXYW50IHRvIFBhcnRuZXI/J1xuICAgICAgICBidXR0b24yVG89JyNhYm91dCdcbiAgICAgICAgaW1nU3JjPScnXG4gICAgICAvPlxuICAgICAgPEhlcm9XaGl0ZVxuICAgICAgICBoZWFkaW5nPSdQYWRlbCBoYXMgdGFrZW4gRXVyb3BlIGJ5IHN0b3JtLiBOb3cgaXRcdTIwMTlzIHRpbWUgdG8gYnJpbmcgaXQgdG8gQWZyaWNhLlxuICAgICAgICAnXG4gICAgICAgIGJvZHk9J1VzaW5nIG91ciBleHRlbnNpdmUga25vd2xlZGdlIG9mIEFmcmljYSBhbmQgYnVzaW5lc3MgZGV2ZWxvcG1lbnQsIHdlIGFpbSB0byBwcm92aWRlIFBhZGVsLCBhcyBhIHNwb3J0IGFuZCBhIGNvbW11bml0eSBlbmFibGVyLCB0byBHaGFuYSwgS2VueWEsIE5pZ2VyaWEgYW5kIG90aGVyIFN1YiBTYWhhcmFuIGNvdW50cmllcy5cbiAgICAgICAgJ1xuICAgICAgICBidXR0b24xVGV4dD0nTGVhcm4gTW9yZSdcbiAgICAgICAgYnV0dG9uMVRvPScjYWJvdXQnXG4gICAgICAgIGJ1dHRvbjJUZXh0PSdXYW50IHRvIFBhcnRuZXI/J1xuICAgICAgICBidXR0b24yVG89JyNhYm91dCdcbiAgICAgICAgaW1nU3JjPScnXG4gICAgICAvPlxuICAgICAgPEhlcm9cbiAgICAgICAgaGVhZGluZz0nUGFkZWwgaGFzIHRha2VuIEV1cm9wZSBieSBzdG9ybS4gTm93IGl0XHUyMDE5cyB0aW1lIHRvIGJyaW5nIGl0IHRvIEFmcmljYS5cbiAgICAgICAgJ1xuICAgICAgICBib2R5PSdVc2luZyBvdXIgZXh0ZW5zaXZlIGtub3dsZWRnZSBvZiBBZnJpY2EgYW5kIGJ1c2luZXNzIGRldmVsb3BtZW50LCB3ZSBhaW0gdG8gcHJvdmlkZSBQYWRlbCwgYXMgYSBzcG9ydCBhbmQgYSBjb21tdW5pdHkgZW5hYmxlciwgdG8gR2hhbmEsIEtlbnlhLCBOaWdlcmlhIGFuZCBvdGhlciBTdWIgU2FoYXJhbiBjb3VudHJpZXMuXG4gICAgICAgICdcbiAgICAgICAgYnV0dG9uMVRleHQ9J0xlYXJuIE1vcmUnXG4gICAgICAgIGJ1dHRvbjFUbz0nI2Fib3V0J1xuICAgICAgICBidXR0b24yVGV4dD0nV2FudCB0byBQYXJ0bmVyPydcbiAgICAgICAgYnV0dG9uMlRvPScjYWJvdXQnXG4gICAgICAgIGltZ1NyYz0nJ1xuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IGhlcm9JbWcgZnJvbSAnLi4vaW1hZ2VzL3BhZGVsLWhlcm8uanBnJztcblxuaW50ZXJmYWNlIEhlcm9Db250ZW50IHtcbiAgaGVhZGluZzogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIGJ1dHRvbjFUZXh0OiBzdHJpbmc7XG4gIGJ1dHRvbjFUbzogc3RyaW5nO1xuICBidXR0b24yVGV4dDogc3RyaW5nO1xuICBidXR0b24yVG86IHN0cmluZztcbiAgaW1nU3JjOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm8ocHJvcHM6IEhlcm9Db250ZW50KSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIGNsYXNzTmFtZT0nW2hlcm9dIG1pbi1oLXNjcmVlbiAgICBmbGV4ICBmbGV4LWNvbCBtZDpmbGV4LXJvdyBhbGlnbi1taWRkbGUganVzdGlmeS1iZXR3ZWVuICBiZy1jb3ZlciAgICAgJ1xuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMTUsIDIzLCA0MiksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMykpLHVybCgnJHtoZXJvSW1nfScpYCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMS8yIGgtc2NyZWVuIGJnLXNsYXRlLTkwMCAgYmctb3BhY2l0eS03NSBiYWNrZHJvcC1ibHVyLTJ4bCBmbGV4Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCAgbXktYXV0byAgdXBwZXJjYXNlICAgcC0yNCAnPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtNnhsIGZvbnQtaGVhZGluZyB0ZXh0LXdoaXRlICAnPlxuICAgICAgICAgICAgUGFkZWwgaGFzIHRha2VuIEV1cm9wZSBieSBzdG9ybS4mbmJzcDs8YnI+PC9icj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgIHZpYS1ncmVlbi01MDAgdG8teWVsbG93LTQwMCc+XG4gICAgICAgICAgICAgIE5vdyBpdCdzIHRpbWUgdG8gYnJpbmcgaXQgdG8gQWZyaWNhXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9oMT5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1iYXNlIGZvbnQtbGlnaHQgdGV4dC13aGl0ZSc+XG4gICAgICAgICAgICBcdUQ4M0RcdURDNEIgSW50ZXJlc3RlZCBpbiBhIHBhcnRuZXJzaGlwP1xuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSd1bmRlcmxpbmUnIGhyZWY9Jyc+XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIEVtYWlsIHVzXG4gICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xLzIgcC0zMic+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT0ndy1mdWxsICBteS1hdXRvIHNwYWNlLXktdnctNC1taW5AeGwgYmctd2hpdGUgIGJnLW9wYWNpdHktNTAgYmFja2Ryb3AtYmx1ci1sZyBzaGFkb3ctMnhsXHQgcC02ICAgIGgtZml0ICc+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LWhlYWRpbmcgdGV4dC1sZyAgdXBwZXJjYXNlJz5cbiAgICAgICAgICAgIEpvaW4gdGhlIE1haWxpbmcgTGlzdFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNic+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnIGNsYXNzTmFtZT0nYmxvY2sgIHRleHQteHMgICc+XG4gICAgICAgICAgICAgIFlvdXIgTmFtZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICBpZD0nbmFtZSdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1zbSBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgMCAgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwJ1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nSm9lIEJsb2dncydcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJyBjbGFzc05hbWU9J2Jsb2NrIHRleHQteHMgJz5cbiAgICAgICAgICAgICAgWW91ciBlbWFpbFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcbiAgICAgICAgICAgICAgaWQ9J2VtYWlsJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LXNtICBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAnXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSduYW1lQGZsb3diaXRlLmNvbSdcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJyBjbGFzc05hbWU9J2Jsb2NrIHRleHQteHMnPlxuICAgICAgICAgICAgICBZb3VyIENvbXBhbnlcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgaWQ9J2NvbXBhbnknXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtc20gICBibG9jayB3LWZ1bGwgcC0yLjUgICBkYXJrOnRleHQtd2hpdGUgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwJ1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQWNtZSBJbmMnXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgY2xhc3NOYW1lPScgcHktNCBweC02IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwIHRvLXllbGxvdy00MDAgZm9udC1oZWFkaW5nIHVwcGVyY2FzZSBob3ZlcjpiZy1ncmFkaWVudC10by10bCBob3ZlcjpzY2FsZS0xMDUgc2hhZG93LTJ4bCAnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IGhlcm9JbWcgZnJvbSAnLi4vaW1hZ2VzL3BhZGVsLWhlcm8uanBnJztcblxuaW50ZXJmYWNlIEhlcm9Db250ZW50IHtcbiAgaGVhZGluZzogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIGJ1dHRvbjFUZXh0OiBzdHJpbmc7XG4gIGJ1dHRvbjFUbzogc3RyaW5nO1xuICBidXR0b24yVGV4dDogc3RyaW5nO1xuICBidXR0b24yVG86IHN0cmluZztcbiAgaW1nU3JjOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm9XaGl0ZShwcm9wczogSGVyb0NvbnRlbnQpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgY2xhc3NOYW1lPSdbaGVyb10gbWluLWgtc2NyZWVuICAgIGZsZXggIGZsZXgtY29sIG1kOmZsZXgtcm93IGFsaWduLW1pZGRsZSBqdXN0aWZ5LWJldHdlZW4gIGJnLWNvdmVyICAgICAnXG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjQsIDIzLCA0MiwgMC41KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIzKSksdXJsKCcke2hlcm9JbWd9JylgLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xLzIgaC1zY3JlZW4gYmctd2hpdGUgYmctb3BhY2l0eS0xMCBiYWNrZHJvcC1ibHVyLTJ4bCBmbGV4Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCAgbXktYXV0byAgdXBwZXJjYXNlICAgcC0yNCAnPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtNnhsIGZvbnQtaGVhZGluZyB0ZXh0LXdoaXRlICAnPlxuICAgICAgICAgICAgUGFkZWwgaGFzIHRha2VuIEV1cm9wZSBieSBzdG9ybS4mbmJzcDs8YnI+PC9icj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgIHZpYS1ncmVlbi01MDAgdG8teWVsbG93LTQwMCc+XG4gICAgICAgICAgICAgIE5vdyBpdCdzIHRpbWUgdG8gYnJpbmcgaXQgdG8gQWZyaWNhXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9oMT5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1iYXNlIGZvbnQtbGlnaHQgdGV4dC13aGl0ZSc+XG4gICAgICAgICAgICBcdUQ4M0RcdURDNEIgSW50ZXJlc3RlZCBpbiBhIHBhcnRuZXJzaGlwP1xuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSd1bmRlcmxpbmUnIGhyZWY9Jyc+XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIEVtYWlsIHVzXG4gICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xLzIgcC0zMic+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT0ndy1mdWxsICBteS1hdXRvIHNwYWNlLXktdnctNC1taW5AeGwgYmctd2hpdGUgIGJnLW9wYWNpdHktNTAgYmFja2Ryb3AtYmx1ci1sZyBzaGFkb3ctMnhsXHQgcC02ICAgIGgtZml0ICc+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LWhlYWRpbmcgdGV4dC1sZyAgdXBwZXJjYXNlJz5cbiAgICAgICAgICAgIEpvaW4gdGhlIE1haWxpbmcgTGlzdFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNic+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnIGNsYXNzTmFtZT0nYmxvY2sgIHRleHQteHMgICc+XG4gICAgICAgICAgICAgIFlvdXIgTmFtZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICBpZD0nbmFtZSdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1zbSBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgMCAgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwJ1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nSm9lIEJsb2dncydcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJyBjbGFzc05hbWU9J2Jsb2NrIHRleHQteHMgJz5cbiAgICAgICAgICAgICAgWW91ciBlbWFpbFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcbiAgICAgICAgICAgICAgaWQ9J2VtYWlsJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LXNtICBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAnXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSduYW1lQGZsb3diaXRlLmNvbSdcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJyBjbGFzc05hbWU9J2Jsb2NrIHRleHQteHMnPlxuICAgICAgICAgICAgICBZb3VyIENvbXBhbnlcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgaWQ9J2NvbXBhbnknXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtc20gICBibG9jayB3LWZ1bGwgcC0yLjUgICBkYXJrOnRleHQtd2hpdGUgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwJ1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQWNtZSBJbmMnXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgY2xhc3NOYW1lPScgcHktNCBweC02IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwIHRvLXllbGxvdy00MDAgZm9udC1oZWFkaW5nIHVwcGVyY2FzZSBob3ZlcjpiZy1ncmFkaWVudC10by10bCBob3ZlcjpzY2FsZS0xMDUgc2hhZG93LTJ4bCAnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FB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
