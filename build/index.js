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
  ErrorBoundary: () => ErrorBoundary,
  Footer: () => Footer,
  Nav: () => Nav,
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/images/padel-hero.jpg
var padel_hero_default = "/build/_assets/padel-hero-P2PSR26K.jpg";

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/root.tsx
var import_react_cookie_consent = __toModule(require("react-cookie-consent"));
var import_react = __toModule(require("react"));

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ET2KDVCQ.css";

// app/styles/app.css
var app_default = "/build/_assets/app-IS23VVDS.css";

// app/images/pa-logo-dark.svg
var pa_logo_dark_default = "/build/_assets/pa-logo-dark-SY52HXPX.svg";

// app/images/pa-logo-light.svg
var pa_logo_light_default = "/build/_assets/pa-logo-light-KD2TYXIX.svg";

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
var Nav = (setDarkMode) => {
  const darkModeToggle = () => {
    setDarkMode.setDarkMode((prev) => !prev);
  };
  const darkMode = true;
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
    className: "bg-none border-gray-200 px-4 sm:px-12 py-6 w-full z-10 text-black   "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container flex flex-wrap justify-between items-center mx-auto"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/",
    className: "flex"
  }, /* @__PURE__ */ React.createElement("img", {
    src: pa_logo_dark_default,
    className: `block dark:hidden transition ease-in-out transform ${isShrunk ? "h-16" : "md:h-16"} h-16`
  }), /* @__PURE__ */ React.createElement("img", {
    src: pa_logo_light_default,
    className: `hidden dark:block  transition   ease-in-out transform ${isShrunk ? "h-16" : "md:h-16"} h-16`
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
    className: "flex flex-col  mt-12 md:mt-0   md:flex-row md:space-x-8   text-slate-900 dark:text-white"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/"
  }, "Home ")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/join-us"
  }, "Join Us ")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.facebook.com/padel.africa",
    className: ""
  }, /* @__PURE__ */ React.createElement("svg", {
    className: ` ${navbarOpen ? "hidden" : "w-7 h-7"} `,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
    clipRule: "evenodd"
  })), /* @__PURE__ */ React.createElement("span", {
    className: ` ${navbarOpen ? "h-screen text-4xl text-center align-middle justify-center" : "hidden"} `
  }, "Facebook"))), /* @__PURE__ */ React.createElement("li", null, " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.instagram.com/padel.africa/",
    className: ""
  }, /* @__PURE__ */ React.createElement("svg", {
    className: ` ${navbarOpen ? "hidden" : "w-7 h-7"} `,
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
    clipRule: "evenodd"
  })), /* @__PURE__ */ React.createElement("span", {
    className: ` ${navbarOpen ? "h-screen text-4xl text-center align-middle justify-center" : "hidden"} `
  }, "Instagram", " "))), /* @__PURE__ */ React.createElement("button", {
    id: "theme-toggle",
    onClick: darkModeToggle,
    type: "button",
    className: "text-slate-900 dark:text-white md:hover:bg-gray-100 md:dark:hover:bg-slate-900  rounded-lg text-sm "
  }, /* @__PURE__ */ React.createElement("svg", {
    id: "theme-toggle-dark-icon",
    className: ` ${navbarOpen ? "hidden" : "block dark:hidden w-7 h-7"} `,
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
  })), /* @__PURE__ */ React.createElement("svg", {
    id: "theme-toggle-light-icon",
    className: ` ${navbarOpen ? "hidden" : "hidden dark:block w-7 h-7"} `,
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
    fillRule: "evenodd",
    clipRule: "evenodd"
  })), /* @__PURE__ */ React.createElement("span", {
    className: ` ${navbarOpen ? "h-screen text-4xl text-center align-middle justify-center" : "hidden"} `
  }, "Toggle Dark Mode")))))));
};
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", {
    className: "p-4  sm:p-8  bg-white dark:bg-slate-900 dark:bg-opacity-75 bg-opacity-25 text-slate-900 dark:text-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sm:flex sm:items-center sm:justify-between"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm sm:text-center "
  }, "\xA9 2022", " ", /* @__PURE__ */ React.createElement("a", {
    href: "#",
    target: "_blank",
    className: "hover:underline"
  }, "Padel Africa\u2122"), ". All Rights Reserved."), /* @__PURE__ */ React.createElement("div", {
    className: "flex mt-4 space-x-6 sm:justify-center sm:mt-0"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: ""
  }, "Terms & Conditions"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: " "
  }, "Privacy Policy"), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: ""
  }, "Investors"))));
}
function App() {
  const [darkMode, setDarkMode] = (0, import_react.useState)(false);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: ` ${darkMode ? "" : "dark"} scroll-smooth`
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("script", null), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    style: {
      backgroundImage: ` ${darkMode ? " linear-gradient(to right, rgba(255, 255, 255,1)" : " linear-gradient(to right, rgba(15, 23, 42,1)"}     , rgba(255, 255, 255, 0.1)),url('${padel_hero_default}')`
    },
    className: "text-slate-900 dark:text-white  bg-cover bg-fixed   "
  }, /* @__PURE__ */ React.createElement(Nav, {
    setDarkMode
  }), /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(Footer, null), /* @__PURE__ */ React.createElement(import_react_cookie_consent.default, {
    location: "bottom",
    buttonText: "Accept",
    cookieName: "padel-africa-cookie",
    style: { background: "#2B373B" },
    buttonStyle: { color: "#4e503b", fontSize: "1rem" },
    expires: 150
  }, "This website uses cookies to enhance the user experience.", " "), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}
function ErrorBoundary() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("script", null), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "text-slate-900 flex h-screen w-full justify-center align-middle m-auto  "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-4xl m-auto text-center"
  }, /* @__PURE__ */ React.createElement("p", null, "\u{1F633} Oops - Page Not Found"), /* @__PURE__ */ React.createElement(import_remix2.Link, {
    className: "underline text-green-700",
    to: "/"
  }, "Go Home")), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null)));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/join-us.tsx
var join_us_exports = {};
__export(join_us_exports, {
  action: () => action,
  default: () => JoinUs
});
init_react();
var import_remix4 = __toModule(require_remix());

// app/Components/cta.tsx
init_react();
var import_remix3 = __toModule(require_remix());
function CTA(props) {
  return /* @__PURE__ */ React.createElement("section", {
    id: "partners",
    className: "[cta] p-20 md:mx-20 bg-slate-900  flex flex-col justify-center align-middle rounded-md shadow-2xl text-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "  m-auto  text-center  space-y-vw-6-min@xl md:w-3/4  "
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-4xl font-heading text-transparent bg-clip-text bg-gradient-to-br from-green-300  via-green-500 to-yellow-400 "
  }, props.heading), /* @__PURE__ */ React.createElement("p", {
    className: "base"
  }, props.body), /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: props.buttonTo,
    className: " inline-flex "
  }, /* @__PURE__ */ React.createElement("button", {
    className: "py-4 px-6 bg-gradient-to-br from-green-300  via-green-500 to-yellow-400 rounded-xl text-black font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl"
  }, props.buttonText))));
}

// app/Components/campaign-hero.tsx
init_react();
function Hero(props) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("main", {
    className: "[hero] container mx-auto bg-none md:h-screen md:pt-32 py-44 md:pb-12  md:-mt-16 px-8 sm:px-12 flex  flex-col md:flex-row align-middle md:justify-between  bg-cover  md:space-x-12	 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full md:w-3/5 my-auto space-y-vw-2-min@xl md:py-16  font-heading uppercase  "
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-2xl"
  }, "What happens when"), /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl md:text-6xl "
  }, "The", " ", /* @__PURE__ */ React.createElement("span", {
    className: " text-transparent bg-clip-text bg-gradient-to-br from-green-300  via-green-500 to-slate-900 dark:to-yellow-300"
  }, "world's fastest sport"), " ", "meets the", " ", /* @__PURE__ */ React.createElement("span", {
    className: "text-transparent bg-clip-text bg-gradient-to-br from-yellow-300  via-yellow-500 to-slate-900 dark:to-green-300"
  }, "world's fastest continent"), "?"), /* @__PURE__ */ React.createElement("a", {
    href: "https://www.eventbrite.com/e/when-the-fastest-growing-sport-meets-the-fastest-growing-continent-tickets-400567747917",
    className: "mt-6\n             inline-block text-lg py-4 px-6 bg-gradient-to-br from-green-300 to-slate-900 dark:to-yellow-300 text-white dark:text-slate-900 font-heading uppercase hover:bg-gradient-to-tl hover:scale-105 shadow-2xl "
  }, "Join us to find out"))));
}

// app/images/web-bg.jpg
var web_bg_default = "/build/_assets/web-bg-VFVP2J3E.jpg";

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/join-us.tsx
var action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let name = formData.get("name");
  let company = formData.get("company");
  let event = formData.get("event");
  const API_KEY = "lGf6kOnFOOC-YOikZD_YPw";
  const FORM_ID = "3022054";
  const API = "https://api.convertkit.com/v3/";
  let res = await fetch(`${API}/forms/${FORM_ID}/subscribe`, {
    method: "post",
    body: JSON.stringify({
      email,
      first_name: name,
      fields: { company, event },
      api_key: API_KEY
    }),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
  return res.json();
};
function JoinUs() {
  let actionData = (0, import_remix4.useActionData)();
  let state = (actionData == null ? void 0 : actionData.subscription) ? "success" : (actionData == null ? void 0 : actionData.error) ? "error" : "idle";
  const darkMode = false;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    style: {
      backgroundImage: ` url('${web_bg_default}')`
    },
    className: "text-slate-900 -mt-32 dark:text-white  md:bg-fixed md:bg-center bg-[center_right_-17rem]  bg-cover   "
  }, /* @__PURE__ */ React.createElement(Hero, {
    heading: "What happens when the fastest sport meets the fastest continent?\n            ",
    body: "Join Us to Find out\n            ",
    button1Text: "Learn More",
    button1To: "#about",
    button2Text: "Want to Partner?",
    button2To: "#about",
    imgSrc: ""
  })), /* @__PURE__ */ React.createElement("section", {
    className: "my-auto bg-white md:p-32 py-12 px-3 flex md:flex-row flex-col justify-between text-black "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:w-1/2 px-12 space-y-4"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl  font-heading  "
  }, "Join Padel Africa"), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-2 "
  }, /* @__PURE__ */ React.createElement("p", null, "So, what happens when the fastest growing sport meets the fastest growing continent? Incredible, exciting, life changing things. Of course. Especially If you are one of the canny people sharp enough to get involved early.", " "), /* @__PURE__ */ React.createElement("p", null, "This is an opportunity to be a part of a transformative journey. To be a part of the process of bringing a new sport and lifestyle activity to an entire continent."), /* @__PURE__ */ React.createElement("h2", {
    className: "font-heading text-2xl"
  }, "Some background information"), /* @__PURE__ */ React.createElement("p", null, "Padel has seen incredible growth in Europe over the last decade. The ease of play has enabled padel to scale and mature faster than any other sport. So much so that it is planned to be an exhibition sport at the Olympics 2024 and potentially an olympic sport in 2028."), /* @__PURE__ */ React.createElement("p", {
    className: "font-bold"
  }, "Padel Africa is a company that is prepared and committed to bringing the sport to Africa."), /* @__PURE__ */ React.createElement("p", null, "Backed by Nordic-African venture capital company", " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline font-bold",
    href: "https://bambwagroup.com"
  }, "Bambwa Group"), ", and led by their founder and CEO, Michael Mathiesen, Padel Africa was founded in 2021 in partnership with two of Scandinavia's largest padel businesses - Sweden's", " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline font-bold",
    href: "https://www.padeltotal.se/"
  }, "Padel Total"), " ", "and Denmark's", " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline font-bold",
    href: "https://sportyfriends.com/en/home"
  }, "Sportyfriends"), " ", "(Owners of the", " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline font-bold",
    href: "https://www.padeliq.io/da"
  }, "Padel iQ"), " ", "software)."), /* @__PURE__ */ React.createElement("p", null, "With partners on the ground in Ghana, Kenya, Rwanda, Liberia and several other African nations, Padel Africa is perfectly placed to lead the charge of pioneering padel across Africa."), /* @__PURE__ */ React.createElement("h2", {
    className: "font-heading text-2xl"
  }, "What do we want from you?"), /* @__PURE__ */ React.createElement("p", {
    className: "font-bold italic"
  }, "We are looking for investors eager to be a part of an exciting and groundbreaking investment."), /* @__PURE__ */ React.createElement("p", null, "We are just about to set off on a roadshow where we will present to audiences across online and across Denmark and Sweden (see dates and locations on this page).", /* @__PURE__ */ React.createElement("h3", {
    className: "font-bold mt-4 "
  }, "We would like you to join us to learn:"), " ", /* @__PURE__ */ React.createElement("ul", {
    className: " list-disc list-inside"
  }, /* @__PURE__ */ React.createElement("li", null, "Why are we committed to bringing padel to Africa."), /* @__PURE__ */ React.createElement("li", null, "Who are the team behind Padel Africa."), /* @__PURE__ */ React.createElement("li", null, "What makes us so capable of succeeding. "), /* @__PURE__ */ React.createElement("li", null, " How, and why you can join us."))))), /* @__PURE__ */ React.createElement("aside", {
    className: "bg-gray-50 md:w-2/5 h-fit   space-y-2  "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-8"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-heading pb-4"
  }, "Upcoming events"), /* @__PURE__ */ React.createElement("ul", {
    className: "space-y-2 text-xs "
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "23rd August"), " - Online - 16.00-17.00 CEST -", " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline font-bold text-green-800",
    href: "https://www.eventbrite.com/e/when-the-fastest-growing-sport-meets-the-fastest-growing-continent-tickets-400567747917"
  }, "Eventbrite Registration")), /* @__PURE__ */ React.createElement("h3", {
    className: "font-bold pt-4"
  }, "Local Events (Register in the form below)"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "24th August"), " - Stockholm - 16.30-17.30"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "25th August"), " - Gothenburg - 16-17"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "29th August"), " - Malm\xF6 - 16-17"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "30th August"), " - Copenhagen - 16-17"))), /* @__PURE__ */ React.createElement(import_remix4.Form, {
    className: "w-full   my-6 text-slate-900  dark:text-white md:my-auto space-y-vw-4-min@xl bg-white dark:bg-slate-900   bg-opacity-50 backdrop-blur-lg shadow-2xl	 p-6    h-fit ",
    method: "post",
    "aria-hidden": state === "success"
  }, /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("p", {
    className: "font-heading text-lg  uppercase"
  }, "Register for a local event"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "block  text-xs   "
  }, "Your Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "name",
    id: "name",
    className: "bg-gray-50 border border-gray-300 dark:text-slate-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0  dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "Joe Bloggs",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "block text-xs  "
  }, "Your email"), /* @__PURE__ */ React.createElement("input", {
    type: "email",
    name: "email",
    id: "email",
    className: "bg-gray-50 border border-gray-300 text-sm dark:text-slate-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500",
    placeholder: "name@mail.com",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "company",
    className: "block text-xs "
  }, "Your Company"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "company",
    name: "company",
    className: "bg-gray-50 border border-gray-300 text-sm dark:text-slate-900   block w-full p-2.5    dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "Acme Inc",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "company",
    className: "block text-xs "
  }, "Event"), /* @__PURE__ */ React.createElement("select", {
    id: "event",
    name: "event",
    className: "bg-gray-50 border border-gray-300 text-sm dark:text-slate-900   block w-full p-2.5    dark:focus:ring-blue-500 dark:focus:border-blue-500",
    required: true
  }, /* @__PURE__ */ React.createElement("option", {
    value: "stockholm"
  }, "24th Aug - Stockholm"), /* @__PURE__ */ React.createElement("option", {
    value: "gothenburg"
  }, "25th Aug - Gothenburg"), /* @__PURE__ */ React.createElement("option", {
    value: "malmo"
  }, "29th Aug - Malm\xF6"), /* @__PURE__ */ React.createElement("option", {
    value: "copenhagen"
  }, "30th Aug - Copenhagen"))), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: " py-4 px-6 bg-gradient-to-br from-green-300 to-slate-900 dark:to-yellow-300 text-white dark:text-slate-900 font-heading uppercase hover:bg-gradient-to-tl hover:scale-105 shadow-2xl "
  }, "Submit")), /* @__PURE__ */ React.createElement("p", null, (actionData == null ? void 0 : actionData.error) ? actionData.message : /* @__PURE__ */ React.createElement(React.Fragment, null, " \xA0 "))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full  my-10 text-slate-900  dark:text-white md:my-auto space-y-vw-4-min@xl bg-white dark:bg-slate-900 dark:bg-opacity-75  bg-opacity-50 backdrop-blur-lg shadow-2xl	 p-6    h-fit ",
    "aria-hidden": state !== "success"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-heading"
  }, "\u{1F680} You're Registered!"), /* @__PURE__ */ React.createElement("p", null, "Thanks for registering for this event, you will be sent an email with more information."), /* @__PURE__ */ React.createElement(import_remix4.Link, {
    className: "underline text-green-300",
    to: "."
  }, "Start Over")))), /* @__PURE__ */ React.createElement(CTA, {
    heading: "Are you interested in partnering with the Number 1 African Padel company?",
    body: "At this very early stage in our development we are interested in finding partners from all sectors to investigate partnership possibilities. If this sounds like you - get in touch.",
    buttonText: "Contact Us",
    buttonTo: "#contact"
  }));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  action: () => action2,
  default: () => Index,
  loader: () => loader,
  meta: () => meta2
});
init_react();
var import_remix6 = __toModule(require_remix());

// app/Components/hero.tsx
init_react();
var import_remix5 = __toModule(require_remix());

// app/images/partners/padeltotal-logo.png
var padeltotal_logo_default = "/build/_assets/padeltotal-logo-WIUYH4JC.png";

// app/images/partners/padel-iq.png
var padel_iq_default = "/build/_assets/padel-iq-BH4QGOBN.png";

// app/Components/hero.tsx
function Hero2(props) {
  let actionData = (0, import_remix5.useActionData)();
  let state = (actionData == null ? void 0 : actionData.subscription) ? "success" : (actionData == null ? void 0 : actionData.error) ? "error" : "idle";
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("main", {
    className: "[hero] container mx-auto bg-none  md:pt-32 md:pb-12 mb-12 md:-mt-16 px-8 sm:px-12 flex  flex-col md:flex-row align-middle md:justify-between  bg-cover  md:space-x-12	 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full md:w-2/5 md:my-auto space-y-vw-2-min@xl md:py-16  "
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl md:text-6xl font-heading uppercase "
  }, "Padel has taken Europe by storm.\xA0", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", {
    className: "block text-transparent bg-clip-text bg-gradient-to-br from-green-300  via-green-500 to-slate-900 dark:to-yellow-300"
  }, "Now it's time to bring it to Africa")), /* @__PURE__ */ React.createElement("p", {
    className: "text-base  "
  }, "\u{1F44B} Interested in a partnership?", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    href: "mailto:hello@padel.africa"
  }, " ", "Email us"), " ")), /* @__PURE__ */ React.createElement(import_remix5.Form, {
    className: "w-full md:w-2/5 my-10 text-slate-900  dark:text-white md:my-auto space-y-vw-4-min@xl bg-white dark:bg-slate-900 dark:bg-opacity-25  bg-opacity-50 backdrop-blur-lg shadow-2xl	 p-6    h-fit ",
    method: "post",
    "aria-hidden": state === "success"
  }, /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("p", {
    className: "font-heading text-lg  uppercase"
  }, "Join the Mailing List"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "block  text-xs   "
  }, "Your Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "name",
    id: "name",
    className: "bg-gray-50 border border-gray-300 dark:text-slate-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0  dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "Joe Bloggs",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "block text-xs  "
  }, "Your email"), /* @__PURE__ */ React.createElement("input", {
    type: "email",
    name: "email",
    id: "email",
    className: "bg-gray-50 border border-gray-300 text-sm dark:text-slate-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500",
    placeholder: "name@mail.com",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "company",
    className: "block text-xs "
  }, "Your Company"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "company",
    name: "company",
    className: "bg-gray-50 border border-gray-300 text-sm dark:text-slate-900   block w-full p-2.5    dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "Acme Inc",
    required: true
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: " py-4 px-6 bg-gradient-to-br from-green-300 to-slate-900 dark:to-yellow-300 text-white dark:text-slate-900 font-heading uppercase hover:bg-gradient-to-tl hover:scale-105 shadow-2xl "
  }, "Submit")), /* @__PURE__ */ React.createElement("p", null, (actionData == null ? void 0 : actionData.error) ? actionData.message : /* @__PURE__ */ React.createElement(React.Fragment, null, " \xA0 "))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full md:w-2/5 my-10 text-slate-900  dark:text-white md:my-auto space-y-vw-4-min@xl bg-white dark:bg-slate-900 dark:bg-opacity-25  bg-opacity-50 backdrop-blur-lg shadow-2xl	 p-6    h-fit ",
    "aria-hidden": state !== "success"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-heading"
  }, "\u{1F680} You're Subscribed!"), /* @__PURE__ */ React.createElement("p", null, "Thank you for signing up to our mailing list"), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    className: "underline text-green-300",
    to: "."
  }, "Start Over"))), /* @__PURE__ */ React.createElement("section", {
    className: " mx-auto w-2/3 rounded-lg md:py-12 py-12 bg-slate-900  mb-12 md:-mt-16 px-8 sm:px-12 flex  flex-col align-middle md:justify-between  md:space-y-6  	"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "m-auto uppercase text-center font-heading text-xl dark:text-white text-white opacity-70"
  }, "Our Strategic Partners"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row align-middle justify-center m-auto space-x-8 "
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://padeltotal.se"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-56 h-auto opacity-75 transition ease-in-ou  hover:opacity-100 hover:scale-105 cursor-pointer ",
    src: padeltotal_logo_default
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://padeliq.io/"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-56 h-auto opacity-75   transition ease-in-out hover:opacity-100 hover:scale-105 cursor-pointer ",
    src: padel_iq_default
  })))));
}

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

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/_index.tsx
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
var action2 = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let name = formData.get("name");
  let company = formData.get("company");
  const API_KEY = "lGf6kOnFOOC-YOikZD_YPw";
  const FORM_ID = "3022054";
  const API = "https://api.convertkit.com/v3/";
  let res = await fetch(`${API}/forms/${FORM_ID}/subscribe`, {
    method: "post",
    body: JSON.stringify({
      email,
      first_name: name,
      fields: { company },
      api_key: API_KEY
    }),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
  return res.json();
};
function Index() {
  const { newsPosts, aboutText } = (0, import_remix6.useLoaderData)();
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
  }));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => NewsPost,
  loader: () => loader2
});
init_react();
var import_remix7 = __toModule(require_remix());
async function loader2({ params }) {
  const initialData = await getClient().fetch(`*[_type == "news" && slug.current == $slug]{ _id, title, slug, "featureImage": feature.asset->url
  }`, { slug: params.slug });
  return { initialData };
}
function NewsPost() {
  let { initialData } = (0, import_remix7.useLoaderData)();
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    className: "w-full md:p-32 py-12 px-3 space-y-12  flex md:flex-row flex-col bg-white justify-between text-black "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:w-1/2 px-12 space-y-4"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl  font-heading  "
  }, "About Padel Africa"), /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id tellus tempus, condimentum libero vitae, tempor risus. Donec ac mattis lacus. Nam non lectus mauris. Fusce ut tortor quis ante blandit sagittis. Curabitur finibus tristique nulla. Praesent eget risus at mauris tristique auctor id laoreet ante. Mauris fermentum placerat malesuada. Nam malesuada venenatis leo, dictum sollicitudin erat. Pellentesque ut tincidunt augue. Proin vel nunc orci. Nulla nec enim eget enim ornare congue ac eget massa. Vivamus sit amet sapien vel nulla scelerisque feugiat. In vel dolor a felis ultricies laoreet in sit amet tellus. Integer maximus elit neque, eget varius ligula sodales non. Sed iaculis risus et lacus pretium euismod a dictum tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas eget quam ligula. Curabitur lacus elit, lobortis at nulla non, fermentum hendrerit mauris. Vivamus commodo eleifend lorem, consectetur sollicitudin orci convallis vitae. Nunc consectetur placerat mauris, id facilisis augue mattis id. Nulla tincidunt ullamcorper euismod. Praesent posuere efficitur est sed rutrum. Donec ornare libero at ex elementum sodales. Vestibulum in cursus ex. Duis libero dolor, dignissim quis placerat ac, sagittis id est. Curabitur sagittis velit mauris, id ultrices nisl tincidunt sit amet. Sed suscipit, sapien in bibendum malesuada, tellus neque fermentum enim, ut tempus tortor est sit amet ante. Ut eget arcu malesuada, lobortis nibh et, fringilla tortor.")), /* @__PURE__ */ React.createElement("img", {
    className: "bg-gray-50 md:w-2/5 h-64 "
  })), /* @__PURE__ */ React.createElement(CTA, {
    heading: "Are you interested in partnering with the Number 1 African Padel company?",
    body: "At this very early stage in our development we are interested in finding partners from all sectors to investigate partnership possibilities. If this sounds like you - get in touch.",
    buttonText: "Contact Us",
    buttonTo: "#contact"
  }));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action3,
  default: () => Index2,
  loader: () => loader3,
  meta: () => meta3
});
init_react();
var import_remix9 = __toModule(require_remix());

// app/Components/info.tsx
init_react();
var import_remix8 = __toModule(require_remix());
var import_react2 = __toModule(require("@portabletext/react"));
function Info(props) {
  var _a;
  const { aboutText } = (0, import_remix8.useLoaderData)();
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
    className: `[cta]  p-vw-32  space-y-10 md:space-x-14 flex flex-col md:flex-row ${props.flow == "left" ? "" : " md:flex-row-reverse space-x-reverse"} `
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:w-2/5  space-y-4  "
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-5xl font-heading"
  }, aboutText[0].title), /* @__PURE__ */ React.createElement("div", {
    className: "main-content space-y-2 text-md"
  }, ((_a = aboutText[0].overview) == null ? void 0 : _a.length) > 0 ? aboutText[0].overview.map((paragraphs) => /* @__PURE__ */ React.createElement(import_react2.PortableText, {
    key: paragraphs._id,
    value: [paragraphs],
    components: myPortableTextComponents
  })) : null)), /* @__PURE__ */ React.createElement("figure", {
    className: "md:w-1/2 bg-slate-300"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-full",
    src: aboutText[0].featureImage
  })));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/index.tsx
async function loader3() {
  const newsPosts = await getClient().fetch(`*[_type == "news"]{ _id, title, slug, "featureImage": feature.asset->url
   }`);
  const aboutText = await getClient().fetch(`*[_type == "sections" && slug.current == "about-padel-africa" ]{ _id, title, overview, "featureImage": feature.asset->url
   }`);
  const teamMembers = await getClient().fetch(`*[_type == "team" && (myTags[0].value=="management" ||myTags[1].value=="management"  ) ]{ _id, title, boardPosition, myTags, linkedinUrl, overview,role, "featureImage": feature.asset->url
   }`);
  const boardMembers = await getClient().fetch(`*[_type == "team" && (myTags[0].value=="board" || myTags[1].value=="board"  ) ]{ _id, title, boardPosition, myTags, linkedinUrl, overview,role, "featureImage": feature.asset->url
   }`);
  return { newsPosts, aboutText, teamMembers, boardMembers };
}
var meta3 = () => {
  return {
    title: "Padel Africa | The Number 1 African Padel Company",
    description: "Padel Africa home page",
    keywords: "padel, africa, sport"
  };
};
var action3 = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let name = formData.get("name");
  let company = formData.get("company");
  const API_KEY = "lGf6kOnFOOC-YOikZD_YPw";
  const FORM_ID = "3022054";
  const API = "https://api.convertkit.com/v3/";
  let res = await fetch(`${API}/forms/${FORM_ID}/subscribe`, {
    method: "post",
    body: JSON.stringify({
      email,
      first_name: name,
      fields: { company },
      api_key: API_KEY
    }),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
  return res.json();
};
function Index2() {
  const { newsPosts, aboutText, teamMembers, boardMembers } = (0, import_remix9.useLoaderData)();
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
  }), /* @__PURE__ */ React.createElement(Info, {
    flow: "left"
  }), /* @__PURE__ */ React.createElement(CTA, {
    heading: "Are you interested in partnering with the Number 1 African Padel company?",
    body: "At this very early stage in our development we are interested in finding partners from all sectors to investigate partnership possibilities. If this sounds like you - get in touch.",
    buttonText: "Contact Us",
    buttonTo: "#contact"
  }), /* @__PURE__ */ React.createElement("section", {
    id: "news",
    className: "[about] mt-20  p-vw-32 bg-white  dark:bg-slate-900 text-center space-y-vw-6-min@xl "
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-5xl font-heading text-slate-900 dark:text-white "
  }, "Management Team"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-4 gap-6 "
  }, (teamMembers == null ? void 0 : teamMembers.length) > 0 ? teamMembers == null ? void 0 : teamMembers.slice(0, 6).map((teamMember) => /* @__PURE__ */ React.createElement("div", {
    key: teamMember._id,
    className: "hover:shadow-2xl hover:scale-105 hover:font-bold cursor-pointer  p-4  space-y-vw-2-max@md"
  }, /* @__PURE__ */ React.createElement("img", {
    src: urlFor(teamMember.featureImage).width(500).url(),
    alt: teamMember.title
  }), /* @__PURE__ */ React.createElement("h3", {
    className: "font-bold"
  }, teamMember.title, " "), /* @__PURE__ */ React.createElement("p", {
    className: "font-light uppercase text-xs opacity-50 mb-4"
  }, teamMember.role, " "), /* @__PURE__ */ React.createElement("a", {
    className: "text-slate-900 dark:text-green-500 underline cursor-pointer",
    href: teamMember.linkedinUrl
  }, "Linkedin"))) : null)), /* @__PURE__ */ React.createElement("section", {
    id: "news",
    className: "[about]  p-vw-32 bg-gray-100  dark:bg-slate-800 text-center space-y-vw-6-min@xl "
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-5xl font-heading text-slate-900 dark:text-white "
  }, "Board of Directors"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-4 gap-6 "
  }, (boardMembers == null ? void 0 : boardMembers.length) > 0 ? boardMembers == null ? void 0 : boardMembers.slice(0, 6).map((boardMember) => /* @__PURE__ */ React.createElement("div", {
    key: boardMember._id,
    className: "hover:shadow-2xl hover:scale-105 hover:font-bold cursor-pointer  p-4  space-y-vw-2-max@md"
  }, /* @__PURE__ */ React.createElement("img", {
    src: urlFor(boardMember.featureImage).width(500).url(),
    alt: boardMember.title
  }), /* @__PURE__ */ React.createElement("h3", {
    className: "font-bold"
  }, boardMember.title, " "), /* @__PURE__ */ React.createElement("p", {
    className: "font-light uppercase text-xs opacity-50 mb-4"
  }, boardMember.boardPosition, " "), /* @__PURE__ */ React.createElement("a", {
    className: "text-slate-900 dark:text-green-500 underline cursor-pointer",
    href: boardMember.linkedinUrl
  }, "Linkedin"))) : null)), /* @__PURE__ */ React.createElement("section", {
    id: "contact",
    className: "[contact]  bg-slate-900   space-x-10   p-vw-32  space-y-10 md:space-x-10 flex flex-col  text-white "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "  m-auto  text-center m space-y-vw-6-min@xl md:w-1/2 "
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-4xl font-heading text-transparent bg-clip-text bg-gradient-to-br from-green-300  via-green-500 to-yellow-400 "
  }, "Contact Us"), /* @__PURE__ */ React.createElement("p", {
    className: "base"
  }, "If you are an invester, a potential partner or anyone interested in learning more about Padel Africa, you can reach us directly with the following details."), /* @__PURE__ */ React.createElement("div", {
    className: " space-x-vw-4-min@xl  md:inline-flex justify-between text-slate-900"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "mailto:hello@padel.africa",
    className: "py-vw-4-min@xl-max@2xl px-vw-4-min@xl-max@2xl bg-gradient-to-br from-green-300   to-yellow-400 rounded-xl font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl"
  }, "Email Us"), /* @__PURE__ */ React.createElement("a", {
    href: "tel:0046739787764",
    className: " py-vw-4-min@xl-max@2xl px-vw-4-min@xl-max@2xl bg-gradient-to-br from-white   to-gray-200 rounded-xl font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl"
  }, "Telephone")))));
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
  "routes/join-us": {
    id: "routes/join-us",
    parentId: "root",
    path: "join-us",
    index: void 0,
    caseSensitive: void 0,
    module: join_us_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: "_index",
    index: void 0,
    caseSensitive: void 0,
    module: index_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm9vdC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL2pvaW4tdXMudHN4IiwgIi4uL2FwcC9Db21wb25lbnRzL2N0YS50c3giLCAiLi4vYXBwL0NvbXBvbmVudHMvY2FtcGFpZ24taGVyby50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL19pbmRleC50c3giLCAiLi4vYXBwL0NvbXBvbmVudHMvaGVyby50c3giLCAiLi4vYXBwL2xpYi9zYW5pdHkvZ2V0Q2xpZW50LnRzIiwgIi4uL2FwcC9saWIvc2FuaXR5L2NvbmZpZy50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvJHNsdWcudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy9hYm91dC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvQ29tcG9uZW50cy9pbmZvLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvam9pbi11cy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvX2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy8kc2x1Zy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvYWJvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvam9pbi11c1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2pvaW4tdXNcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJqb2luLXVzXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvX2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvX2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiX2luZGV4XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfSxcbiAgXCJyb3V0ZXMvJHNsdWdcIjoge1xuICAgIGlkOiBcInJvdXRlcy8kc2x1Z1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIjpzbHVnXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvYWJvdXRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9hYm91dFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImFib3V0XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTRcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU1XG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGRvdGVudi5jb25maWcoKTtcblxuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKCc8IURPQ1RZUEUgaHRtbD4nICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGluayxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBBY3Rpb25GdW5jdGlvbixcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gJ3JlbWl4JztcbmltcG9ydCBoZXJvSW1nIGZyb20gJy4vaW1hZ2VzL3BhZGVsLWhlcm8uanBnJztcbmltcG9ydCBDb29raWVDb25zZW50IGZyb20gJ3JlYWN0LWNvb2tpZS1jb25zZW50JztcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdGFpbHdpbmQuY3NzJztcbmltcG9ydCBhcHBTdHlsZXMgZnJvbSAnLi9zdHlsZXMvYXBwLmNzcyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuL2ltYWdlcy9sb2dvLnN2Zyc7XG5pbXBvcnQgbG9nb0RhcmsgZnJvbSAnLi9pbWFnZXMvcGEtbG9nby1kYXJrLnN2Zyc7XG5pbXBvcnQgbG9nb0xpZ2h0IGZyb20gJy4vaW1hZ2VzL3BhLWxvZ28tbGlnaHQuc3ZnJztcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogJ1BhZGVsIEFmcmljYScgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfSxcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBhcHBTdHlsZXMgfSxcbiAgXTtcbn1cblxuZXhwb3J0IGNvbnN0IE5hdiA9IChzZXREYXJrTW9kZToge1xuICBzZXREYXJrTW9kZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xufSkgPT4ge1xuICBjb25zdCBkYXJrTW9kZVRvZ2dsZSA9ICgpID0+IHtcbiAgICAvL2NvbnNvbGUubG9nKHNldERhcmtNb2RlLnNldERhcmtNb2RlKTtcblxuICAgIHNldERhcmtNb2RlLnNldERhcmtNb2RlKChwcmV2KSA9PiAhcHJldik7XG4gICAgLy9zZXREYXJrTW9kZSgocHJldikgPT4gIXByZXYpO1xuICB9O1xuICBjb25zdCBkYXJrTW9kZSA9IHRydWU7XG5cbiAgY29uc3QgW2lzU2hydW5rLCBzZXRTaHJ1bmtdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHNldFNocnVuaygoaXNTaHJ1bmspID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFpc1NocnVuayAmJlxuICAgICAgICAgIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDIwIHx8XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMjApXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzU2hydW5rICYmXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPCA0ICYmXG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA8IDRcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzU2hydW5rO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW25hdmJhck9wZW4sIHNldE5hdmJhck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgLy9jb25zb2xlLmxvZyhuYXZiYXJPcGVuKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHNldE5hdmJhck9wZW4pO1xuICAgIHNldE5hdmJhck9wZW4oKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LypcbiAgICAgIDxuYXZcbiAgICAgICAgY2xhc3NOYW1lPXtgICAke1xuICAgICAgICAgIGlzU2hydW5rXG4gICAgICAgICAgICA/ICd0cmFuc2l0aW9uIGVhc2UtaW4tb3V0ICBtZDpiZy1vcGFjaXR5LTc1IGJhY2tkcm9wLWJsdXItbGcgei0xMCBweS0yIHRleHQteHMgICAgJ1xuICAgICAgICAgICAgOiAndHJhbnNpdGlvbiBlYXNlLWluLW91dCBtZDpiZy1vcGFjaXR5LTAgJ1xuICAgICAgICB9IGJnLXNsYXRlLTkwMCBib3JkZXItZ3JheS0yMDAgcHgtNCBzbTpweC0xMiBweS02IG1kOmZpeGVkIHctZnVsbCB6LTEwIHRleHQtYmxhY2sgYH1cbiAgICAgID4qL31cbiAgICAgIDxuYXYgY2xhc3NOYW1lPSdiZy1ub25lIGJvcmRlci1ncmF5LTIwMCBweC00IHNtOnB4LTEyIHB5LTYgdy1mdWxsIHotMTAgdGV4dC1ibGFjayAgICc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgZmxleCBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBteC1hdXRvJz5cbiAgICAgICAgICA8YSBocmVmPScvJyBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e2xvZ29EYXJrfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BibG9jayBkYXJrOmhpZGRlbiB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSAke1xuICAgICAgICAgICAgICAgIGlzU2hydW5rID8gJ2gtMTYnIDogJ21kOmgtMTYnXG4gICAgICAgICAgICAgIH0gaC0xNmB9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17bG9nb0xpZ2h0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoaWRkZW4gZGFyazpibG9jayAgdHJhbnNpdGlvbiAgIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSAke1xuICAgICAgICAgICAgICAgIGlzU2hydW5rID8gJ2gtMTYnIDogJ21kOmgtMTYnXG4gICAgICAgICAgICAgIH0gaC0xNmB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9XG4gICAgICAgICAgICBkYXRhLWNvbGxhcHNlLXRvZ2dsZT0nbW9iaWxlLW1lbnUnXG4gICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICBjbGFzc05hbWU9J2lubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBwLTIgbWwtMyB0ZXh0LXNtIHJvdW5kZWQtbGcgbWQ6aGlkZGVuIGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmF5LTIwMCBkYXJrOnRleHQtZ3JheS00MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmZvY3VzOnJpbmctZ3JheS02MDAnXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPSdtb2JpbGUtbWVudS0yJ1xuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD0nZmFsc2UnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5PcGVuIG1haW4gbWVudTwvc3Bhbj5cbiAgICAgICAgICAgIHtuYXZiYXJPcGVuID8gKFxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPScgdy02IGgtNidcbiAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXG4gICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDIwIDIwJ1xuICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBmaWxsUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICAgIGQ9J000LjI5MyA0LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgOC41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEwxMS40MTQgMTBsNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgMTEuNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw4LjU4NiAxMCA0LjI5MyA1LjcwN2ExIDEgMCAwMTAtMS40MTR6J1xuICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTYgaC02J1xuICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjAgMjAnXG4gICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgZD0nTTMgNWExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxMGExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxNWExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXonXG4gICAgICAgICAgICAgICAgICBjbGlwUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7XG4gICAgICAgICAgICAgIG5hdmJhck9wZW5cbiAgICAgICAgICAgICAgICA/ICdoLXNjcmVlbiB0ZXh0LTR4bCB0ZXh0LWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXInXG4gICAgICAgICAgICAgICAgOiAnaGlkZGVuJ1xuICAgICAgICAgICAgfSB3LWZ1bGwgbWQ6YmxvY2sgbWQ6dy1hdXRvYH1cbiAgICAgICAgICAgIGlkPSdtb2JpbGUtbWVudSdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sICBtdC0xMiBtZDptdC0wICAgbWQ6ZmxleC1yb3cgbWQ6c3BhY2UteC04ICAgdGV4dC1zbGF0ZS05MDAgZGFyazp0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvJz5Ib21lIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvam9pbi11cyc+Sm9pbiBVcyA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5mYWNlYm9vay5jb20vcGFkZWwuYWZyaWNhJyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke25hdmJhck9wZW4gPyAnaGlkZGVuJyA6ICd3LTcgaC03J30gYH1cbiAgICAgICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgICAgIGQ9J00yMiAxMmMwLTUuNTIzLTQuNDc3LTEwLTEwLTEwUzIgNi40NzcgMiAxMmMwIDQuOTkxIDMuNjU3IDkuMTI4IDguNDM4IDkuODc4di02Ljk4N2gtMi41NFYxMmgyLjU0VjkuNzk3YzAtMi41MDYgMS40OTItMy44OSAzLjc3Ny0zLjg5IDEuMDk0IDAgMi4yMzguMTk1IDIuMjM4LjE5NXYyLjQ2aC0xLjI2Yy0xLjI0MyAwLTEuNjMuNzcxLTEuNjMgMS41NjJWMTJoMi43NzNsLS40NDMgMi44OWgtMi4zM3Y2Ljk4OEMxOC4zNDMgMjEuMTI4IDIyIDE2Ljk5MSAyMiAxMnonXG4gICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke1xuICAgICAgICAgICAgICAgICAgICAgIG5hdmJhck9wZW5cbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2gtc2NyZWVuIHRleHQtNHhsIHRleHQtY2VudGVyIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2hpZGRlbidcbiAgICAgICAgICAgICAgICAgICAgfSBgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBGYWNlYm9va1xuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3BhZGVsLmFmcmljYS8nIGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7bmF2YmFyT3BlbiA/ICdoaWRkZW4nIDogJ3ctNyBoLTcnfSBgfVxuICAgICAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICAgICAgZD0nTTEyLjMxNSAyYzIuNDMgMCAyLjc4NC4wMTMgMy44MDguMDYgMS4wNjQuMDQ5IDEuNzkxLjIxOCAyLjQyNy40NjVhNC45MDIgNC45MDIgMCAwMTEuNzcyIDEuMTUzIDQuOTAyIDQuOTAyIDAgMDExLjE1MyAxLjc3MmMuMjQ3LjYzNi40MTYgMS4zNjMuNDY1IDIuNDI3LjA0OCAxLjA2Ny4wNiAxLjQwNy4wNiA0LjEyM3YuMDhjMCAyLjY0My0uMDEyIDIuOTg3LS4wNiA0LjA0My0uMDQ5IDEuMDY0LS4yMTggMS43OTEtLjQ2NSAyLjQyN2E0LjkwMiA0LjkwMiAwIDAxLTEuMTUzIDEuNzcyIDQuOTAyIDQuOTAyIDAgMDEtMS43NzIgMS4xNTNjLS42MzYuMjQ3LTEuMzYzLjQxNi0yLjQyNy40NjUtMS4wNjcuMDQ4LTEuNDA3LjA2LTQuMTIzLjA2aC0uMDhjLTIuNjQzIDAtMi45ODctLjAxMi00LjA0My0uMDYtMS4wNjQtLjA0OS0xLjc5MS0uMjE4LTIuNDI3LS40NjVhNC45MDIgNC45MDIgMCAwMS0xLjc3Mi0xLjE1MyA0LjkwMiA0LjkwMiAwIDAxLTEuMTUzLTEuNzcyYy0uMjQ3LS42MzYtLjQxNi0xLjM2My0uNDY1LTIuNDI3LS4wNDctMS4wMjQtLjA2LTEuMzc5LS4wNi0zLjgwOHYtLjYzYzAtMi40My4wMTMtMi43ODQuMDYtMy44MDguMDQ5LTEuMDY0LjIxOC0xLjc5MS40NjUtMi40MjdhNC45MDIgNC45MDIgMCAwMTEuMTUzLTEuNzcyQTQuOTAyIDQuOTAyIDAgMDE1LjQ1IDIuNTI1Yy42MzYtLjI0NyAxLjM2My0uNDE2IDIuNDI3LS40NjVDOC45MDEgMi4wMTMgOS4yNTYgMiAxMS42ODUgMmguNjN6bS0uMDgxIDEuODAyaC0uNDY4Yy0yLjQ1NiAwLTIuNzg0LjAxMS0zLjgwNy4wNTgtLjk3NS4wNDUtMS41MDQuMjA3LTEuODU3LjM0NC0uNDY3LjE4Mi0uOC4zOTgtMS4xNS43NDgtLjM1LjM1LS41NjYuNjgzLS43NDggMS4xNS0uMTM3LjM1My0uMy44ODItLjM0NCAxLjg1Ny0uMDQ3IDEuMDIzLS4wNTggMS4zNTEtLjA1OCAzLjgwN3YuNDY4YzAgMi40NTYuMDExIDIuNzg0LjA1OCAzLjgwNy4wNDUuOTc1LjIwNyAxLjUwNC4zNDQgMS44NTcuMTgyLjQ2Ni4zOTkuOC43NDggMS4xNS4zNS4zNS42ODMuNTY2IDEuMTUuNzQ4LjM1My4xMzcuODgyLjMgMS44NTcuMzQ0IDEuMDU0LjA0OCAxLjM3LjA1OCA0LjA0MS4wNThoLjA4YzIuNTk3IDAgMi45MTctLjAxIDMuOTYtLjA1OC45NzYtLjA0NSAxLjUwNS0uMjA3IDEuODU4LS4zNDQuNDY2LS4xODIuOC0uMzk4IDEuMTUtLjc0OC4zNS0uMzUuNTY2LS42ODMuNzQ4LTEuMTUuMTM3LS4zNTMuMy0uODgyLjM0NC0xLjg1Ny4wNDgtMS4wNTUuMDU4LTEuMzcuMDU4LTQuMDQxdi0uMDhjMC0yLjU5Ny0uMDEtMi45MTctLjA1OC0zLjk2LS4wNDUtLjk3Ni0uMjA3LTEuNTA1LS4zNDQtMS44NThhMy4wOTcgMy4wOTcgMCAwMC0uNzQ4LTEuMTUgMy4wOTggMy4wOTggMCAwMC0xLjE1LS43NDhjLS4zNTMtLjEzNy0uODgyLS4zLTEuODU3LS4zNDQtMS4wMjMtLjA0Ny0xLjM1MS0uMDU4LTMuODA3LS4wNTh6TTEyIDYuODY1YTUuMTM1IDUuMTM1IDAgMTEwIDEwLjI3IDUuMTM1IDUuMTM1IDAgMDEwLTEwLjI3em0wIDEuODAyYTMuMzMzIDMuMzMzIDAgMTAwIDYuNjY2IDMuMzMzIDMuMzMzIDAgMDAwLTYuNjY2em01LjMzOC0zLjIwNWExLjIgMS4yIDAgMTEwIDIuNCAxLjIgMS4yIDAgMDEwLTIuNHonXG4gICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke1xuICAgICAgICAgICAgICAgICAgICAgIG5hdmJhck9wZW5cbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2gtc2NyZWVuIHRleHQtNHhsIHRleHQtY2VudGVyIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2hpZGRlbidcbiAgICAgICAgICAgICAgICAgICAgfSBgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBJbnN0YWdyYW17JyAnfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGlkPSd0aGVtZS10b2dnbGUnXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZGFya01vZGVUb2dnbGV9XG4gICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1zbGF0ZS05MDAgZGFyazp0ZXh0LXdoaXRlIG1kOmhvdmVyOmJnLWdyYXktMTAwIG1kOmRhcms6aG92ZXI6Ymctc2xhdGUtOTAwICByb3VuZGVkLWxnIHRleHQtc20gJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgaWQ9J3RoZW1lLXRvZ2dsZS1kYXJrLWljb24nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtcbiAgICAgICAgICAgICAgICAgICAgbmF2YmFyT3BlbiA/ICdoaWRkZW4nIDogJ2Jsb2NrIGRhcms6aGlkZGVuIHctNyBoLTcnXG4gICAgICAgICAgICAgICAgICB9IGB9XG4gICAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjAgMjAnXG4gICAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTE3LjI5MyAxMy4yOTNBOCA4IDAgMDE2LjcwNyAyLjcwN2E4LjAwMSA4LjAwMSAwIDEwMTAuNTg2IDEwLjU4NnonPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICBpZD0ndGhlbWUtdG9nZ2xlLWxpZ2h0LWljb24nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtcbiAgICAgICAgICAgICAgICAgICAgbmF2YmFyT3BlbiA/ICdoaWRkZW4nIDogJ2hpZGRlbiBkYXJrOmJsb2NrIHctNyBoLTcnXG4gICAgICAgICAgICAgICAgICB9IGB9XG4gICAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjAgMjAnXG4gICAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD0nTTEwIDJhMSAxIDAgMDExIDF2MWExIDEgMCAxMS0yIDBWM2ExIDEgMCAwMTEtMXptNCA4YTQgNCAwIDExLTggMCA0IDQgMCAwMTggMHptLS40NjQgNC45NWwuNzA3LjcwN2ExIDEgMCAwMDEuNDE0LTEuNDE0bC0uNzA3LS43MDdhMSAxIDAgMDAtMS40MTQgMS40MTR6bTIuMTItMTAuNjA3YTEgMSAwIDAxMCAxLjQxNGwtLjcwNi43MDdhMSAxIDAgMTEtMS40MTQtMS40MTRsLjcwNy0uNzA3YTEgMSAwIDAxMS40MTQgMHpNMTcgMTFhMSAxIDAgMTAwLTJoLTFhMSAxIDAgMTAwIDJoMXptLTcgNGExIDEgMCAwMTEgMXYxYTEgMSAwIDExLTIgMHYtMWExIDEgMCAwMTEtMXpNNS4wNSA2LjQ2NEExIDEgMCAxMDYuNDY1IDUuMDVsLS43MDgtLjcwN2ExIDEgMCAwMC0xLjQxNCAxLjQxNGwuNzA3LjcwN3ptMS40MTQgOC40ODZsLS43MDcuNzA3YTEgMSAwIDAxLTEuNDE0LTEuNDE0bC43MDctLjcwN2ExIDEgMCAwMTEuNDE0IDEuNDE0ek00IDExYTEgMSAwIDEwMC0ySDNhMSAxIDAgMDAwIDJoMXonXG4gICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke1xuICAgICAgICAgICAgICAgICAgICBuYXZiYXJPcGVuXG4gICAgICAgICAgICAgICAgICAgICAgPyAnaC1zY3JlZW4gdGV4dC00eGwgdGV4dC1jZW50ZXIgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgIDogJ2hpZGRlbidcbiAgICAgICAgICAgICAgICAgIH0gYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBUb2dnbGUgRGFyayBNb2RlXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPSdwLTQgIHNtOnAtOCAgYmctd2hpdGUgZGFyazpiZy1zbGF0ZS05MDAgZGFyazpiZy1vcGFjaXR5LTc1IGJnLW9wYWNpdHktMjUgdGV4dC1zbGF0ZS05MDAgZGFyazp0ZXh0LXdoaXRlJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbTpmbGV4IHNtOml0ZW1zLWNlbnRlciBzbTpqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtc20gc206dGV4dC1jZW50ZXIgJz5cbiAgICAgICAgICBcdTAwQTkgMjAyMnsnICd9XG4gICAgICAgICAgPGEgaHJlZj0nIycgdGFyZ2V0PSdfYmxhbmsnIGNsYXNzTmFtZT0naG92ZXI6dW5kZXJsaW5lJz5cbiAgICAgICAgICAgIFBhZGVsIEFmcmljYVx1MjEyMlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICAuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbXQtNCBzcGFjZS14LTYgc206anVzdGlmeS1jZW50ZXIgc206bXQtMCc+XG4gICAgICAgICAgPGEgaHJlZj0nIycgY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgVGVybXMgJiBDb25kaXRpb25zXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGhyZWY9JyMnIGNsYXNzTmFtZT0nICc+XG4gICAgICAgICAgICBQcml2YWN5IFBvbGljeVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBocmVmPScjJyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICBJbnZlc3RvcnNcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2RhcmtNb2RlLCBzZXREYXJrTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPSdlbicgY2xhc3NOYW1lPXtgICR7ZGFya01vZGUgPyAnJyA6ICdkYXJrJ30gc2Nyb2xsLXNtb290aGB9PlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MScgLz5cbiAgICAgICAgPHNjcmlwdD48L3NjcmlwdD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYCAke1xuICAgICAgICAgICAgZGFya01vZGVcbiAgICAgICAgICAgICAgPyAnIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LDEpJ1xuICAgICAgICAgICAgICA6ICcgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDE1LCAyMywgNDIsMSknXG4gICAgICAgICAgfSAgICAgLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkpLHVybCgnJHtoZXJvSW1nfScpYCxcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUgIGJnLWNvdmVyIGJnLWZpeGVkICAgJ1xuICAgICAgPlxuICAgICAgICA8TmF2IHNldERhcmtNb2RlPXtzZXREYXJrTW9kZX0gLz5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDxDb29raWVDb25zZW50XG4gICAgICAgICAgbG9jYXRpb249J2JvdHRvbSdcbiAgICAgICAgICBidXR0b25UZXh0PSdBY2NlcHQnXG4gICAgICAgICAgY29va2llTmFtZT0ncGFkZWwtYWZyaWNhLWNvb2tpZSdcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnIzJCMzczQicgfX1cbiAgICAgICAgICBidXR0b25TdHlsZT17eyBjb2xvcjogJyM0ZTUwM2InLCBmb250U2l6ZTogJzFyZW0nIH19XG4gICAgICAgICAgZXhwaXJlcz17MTUwfVxuICAgICAgICA+XG4gICAgICAgICAgVGhpcyB3ZWJzaXRlIHVzZXMgY29va2llcyB0byBlbmhhbmNlIHRoZSB1c2VyIGV4cGVyaWVuY2UueycgJ31cbiAgICAgICAgPC9Db29raWVDb25zZW50PlxuXG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPSdlbic+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgICA8c2NyaXB0Pjwvc2NyaXB0PlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT0ndGV4dC1zbGF0ZS05MDAgZmxleCBoLXNjcmVlbiB3LWZ1bGwganVzdGlmeS1jZW50ZXIgYWxpZ24tbWlkZGxlIG0tYXV0byAgJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtNHhsIG0tYXV0byB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgPHA+XHVEODNEXHVERTMzIE9vcHMgLSBQYWdlIE5vdCBGb3VuZDwvcD5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9J3VuZGVybGluZSB0ZXh0LWdyZWVuLTcwMCcgdG89Jy8nPlxuICAgICAgICAgICAgR28gSG9tZVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBGb3JtLCB1c2VBY3Rpb25EYXRhLCBMaW5rIH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgQ1RBIGZyb20gJ34vQ29tcG9uZW50cy9jdGEnO1xuaW1wb3J0IEhlcm8gZnJvbSAnfi9Db21wb25lbnRzL2NhbXBhaWduLWhlcm8nO1xuaW1wb3J0IEJnSW1nIGZyb20gJ34vaW1hZ2VzL3dlYi1iZy5qcGcnO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgbGV0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBsZXQgZW1haWwgPSBmb3JtRGF0YS5nZXQoJ2VtYWlsJyk7XG4gIGxldCBuYW1lID0gZm9ybURhdGEuZ2V0KCduYW1lJyk7XG4gIGxldCBjb21wYW55ID0gZm9ybURhdGEuZ2V0KCdjb21wYW55Jyk7XG4gIGxldCBldmVudCA9IGZvcm1EYXRhLmdldCgnZXZlbnQnKTtcblxuICAvL3Byb2Nlc3MuZW52LkNPTlZFUlRLSVRfS0VZID0gJ2xHZjZrT25GT09DLVlPaWtaRF9ZUHcnO1xuXG4gIGNvbnN0IEFQSV9LRVkgPSAnbEdmNmtPbkZPT0MtWU9pa1pEX1lQdyc7XG4gIGNvbnN0IEZPUk1fSUQgPSAnMzAyMjA1NCc7XG4gIGNvbnN0IEFQSSA9ICdodHRwczovL2FwaS5jb252ZXJ0a2l0LmNvbS92My8nO1xuXG4gIGxldCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUEl9L2Zvcm1zLyR7Rk9STV9JRH0vc3Vic2NyaWJlYCwge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIGZpcnN0X25hbWU6IG5hbWUsXG4gICAgICBmaWVsZHM6IHsgY29tcGFueTogY29tcGFueSwgZXZlbnQ6IGV2ZW50IH0sXG4gICAgICBhcGlfa2V5OiBBUElfS0VZLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgfSxcbiAgfSk7XG5cbiAgLy9jb25zb2xlLmxvZyh7IGVtYWlsIH0sIHsgbmFtZSB9LCB7IGNvbXBhbnkgfSk7XG4gIHJldHVybiByZXMuanNvbigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSm9pblVzKCkge1xuICBsZXQgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKTtcbiAgbGV0IHN0YXRlOiAnaWRsZScgfCAnc3VjY2VzcycgfCAnZXJyb3InID0gYWN0aW9uRGF0YT8uc3Vic2NyaXB0aW9uXG4gICAgPyAnc3VjY2VzcydcbiAgICA6IGFjdGlvbkRhdGE/LmVycm9yXG4gICAgPyAnZXJyb3InXG4gICAgOiAnaWRsZSc7XG4gIGNvbnN0IGRhcmtNb2RlID0gZmFsc2U7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYCB1cmwoJyR7QmdJbWd9JylgLFxuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9J3RleHQtc2xhdGUtOTAwIC1tdC0zMiBkYXJrOnRleHQtd2hpdGUgIG1kOmJnLWZpeGVkIG1kOmJnLWNlbnRlciBiZy1bY2VudGVyX3JpZ2h0Xy0xN3JlbV0gIGJnLWNvdmVyICAgJ1xuICAgICAgPlxuICAgICAgICA8SGVyb1xuICAgICAgICAgIGhlYWRpbmc9J1doYXQgaGFwcGVucyB3aGVuIHRoZSBmYXN0ZXN0IHNwb3J0IG1lZXRzIHRoZSBmYXN0ZXN0IGNvbnRpbmVudD9cbiAgICAgICAgICAgICdcbiAgICAgICAgICBib2R5PSdKb2luIFVzIHRvIEZpbmQgb3V0XG4gICAgICAgICAgICAnXG4gICAgICAgICAgYnV0dG9uMVRleHQ9J0xlYXJuIE1vcmUnXG4gICAgICAgICAgYnV0dG9uMVRvPScjYWJvdXQnXG4gICAgICAgICAgYnV0dG9uMlRleHQ9J1dhbnQgdG8gUGFydG5lcj8nXG4gICAgICAgICAgYnV0dG9uMlRvPScjYWJvdXQnXG4gICAgICAgICAgaW1nU3JjPScnXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbXktYXV0byBiZy13aGl0ZSBtZDpwLTMyIHB5LTEyIHB4LTMgZmxleCBtZDpmbGV4LXJvdyBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1ibGFjayAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6dy0xLzIgcHgtMTIgc3BhY2UteS00Jz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTV4bCAgZm9udC1oZWFkaW5nICAnPkpvaW4gUGFkZWwgQWZyaWNhPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhY2UteS0yICc+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgU28sIHdoYXQgaGFwcGVucyB3aGVuIHRoZSBmYXN0ZXN0IGdyb3dpbmcgc3BvcnQgbWVldHMgdGhlIGZhc3Rlc3RcbiAgICAgICAgICAgICAgZ3Jvd2luZyBjb250aW5lbnQ/IEluY3JlZGlibGUsIGV4Y2l0aW5nLCBsaWZlIGNoYW5naW5nIHRoaW5ncy4gT2ZcbiAgICAgICAgICAgICAgY291cnNlLiBFc3BlY2lhbGx5IElmIHlvdSBhcmUgb25lIG9mIHRoZSBjYW5ueSBwZW9wbGUgc2hhcnAgZW5vdWdoXG4gICAgICAgICAgICAgIHRvIGdldCBpbnZvbHZlZCBlYXJseS57JyAnfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFRoaXMgaXMgYW4gb3Bwb3J0dW5pdHkgdG8gYmUgYSBwYXJ0IG9mIGEgdHJhbnNmb3JtYXRpdmUgam91cm5leS5cbiAgICAgICAgICAgICAgVG8gYmUgYSBwYXJ0IG9mIHRoZSBwcm9jZXNzIG9mIGJyaW5naW5nIGEgbmV3IHNwb3J0IGFuZCBsaWZlc3R5bGVcbiAgICAgICAgICAgICAgYWN0aXZpdHkgdG8gYW4gZW50aXJlIGNvbnRpbmVudC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2ZvbnQtaGVhZGluZyB0ZXh0LTJ4bCc+XG4gICAgICAgICAgICAgIFNvbWUgYmFja2dyb3VuZCBpbmZvcm1hdGlvblxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBQYWRlbCBoYXMgc2VlbiBpbmNyZWRpYmxlIGdyb3d0aCBpbiBFdXJvcGUgb3ZlciB0aGUgbGFzdCBkZWNhZGUuXG4gICAgICAgICAgICAgIFRoZSBlYXNlIG9mIHBsYXkgaGFzIGVuYWJsZWQgcGFkZWwgdG8gc2NhbGUgYW5kIG1hdHVyZSBmYXN0ZXIgdGhhblxuICAgICAgICAgICAgICBhbnkgb3RoZXIgc3BvcnQuIFNvIG11Y2ggc28gdGhhdCBpdCBpcyBwbGFubmVkIHRvIGJlIGFuIGV4aGliaXRpb25cbiAgICAgICAgICAgICAgc3BvcnQgYXQgdGhlIE9seW1waWNzIDIwMjQgYW5kIHBvdGVudGlhbGx5IGFuIG9seW1waWMgc3BvcnQgaW5cbiAgICAgICAgICAgICAgMjAyOC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1ib2xkJz5cbiAgICAgICAgICAgICAgUGFkZWwgQWZyaWNhIGlzIGEgY29tcGFueSB0aGF0IGlzIHByZXBhcmVkIGFuZCBjb21taXR0ZWQgdG9cbiAgICAgICAgICAgICAgYnJpbmdpbmcgdGhlIHNwb3J0IHRvIEFmcmljYS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBCYWNrZWQgYnkgTm9yZGljLUFmcmljYW4gdmVudHVyZSBjYXBpdGFsIGNvbXBhbnl7JyAnfVxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3VuZGVybGluZSBmb250LWJvbGQnIGhyZWY9J2h0dHBzOi8vYmFtYndhZ3JvdXAuY29tJz5cbiAgICAgICAgICAgICAgICBCYW1id2EgR3JvdXBcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAsIGFuZCBsZWQgYnkgdGhlaXIgZm91bmRlciBhbmQgQ0VPLCBNaWNoYWVsIE1hdGhpZXNlbiwgUGFkZWxcbiAgICAgICAgICAgICAgQWZyaWNhIHdhcyBmb3VuZGVkIGluIDIwMjEgaW4gcGFydG5lcnNoaXAgd2l0aCB0d28gb2ZcbiAgICAgICAgICAgICAgU2NhbmRpbmF2aWEncyBsYXJnZXN0IHBhZGVsIGJ1c2luZXNzZXMgLSBTd2VkZW4nc3snICd9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1bmRlcmxpbmUgZm9udC1ib2xkJ1xuICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3LnBhZGVsdG90YWwuc2UvJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUGFkZWwgVG90YWxcbiAgICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICAgIGFuZCBEZW5tYXJrJ3N7JyAnfVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndW5kZXJsaW5lIGZvbnQtYm9sZCdcbiAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3Nwb3J0eWZyaWVuZHMuY29tL2VuL2hvbWUnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTcG9ydHlmcmllbmRzXG4gICAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgICAoT3duZXJzIG9mIHRoZXsnICd9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1bmRlcmxpbmUgZm9udC1ib2xkJ1xuICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3LnBhZGVsaXEuaW8vZGEnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQYWRlbCBpUVxuICAgICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgICAgc29mdHdhcmUpLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFdpdGggcGFydG5lcnMgb24gdGhlIGdyb3VuZCBpbiBHaGFuYSwgS2VueWEsIFJ3YW5kYSwgTGliZXJpYSBhbmRcbiAgICAgICAgICAgICAgc2V2ZXJhbCBvdGhlciBBZnJpY2FuIG5hdGlvbnMsIFBhZGVsIEFmcmljYSBpcyBwZXJmZWN0bHkgcGxhY2VkIHRvXG4gICAgICAgICAgICAgIGxlYWQgdGhlIGNoYXJnZSBvZiBwaW9uZWVyaW5nIHBhZGVsIGFjcm9zcyBBZnJpY2EuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdmb250LWhlYWRpbmcgdGV4dC0yeGwnPldoYXQgZG8gd2Ugd2FudCBmcm9tIHlvdT88L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LWJvbGQgaXRhbGljJz5cbiAgICAgICAgICAgICAgV2UgYXJlIGxvb2tpbmcgZm9yIGludmVzdG9ycyBlYWdlciB0byBiZSBhIHBhcnQgb2YgYW4gZXhjaXRpbmcgYW5kXG4gICAgICAgICAgICAgIGdyb3VuZGJyZWFraW5nIGludmVzdG1lbnQuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgV2UgYXJlIGp1c3QgYWJvdXQgdG8gc2V0IG9mZiBvbiBhIHJvYWRzaG93IHdoZXJlIHdlIHdpbGwgcHJlc2VudFxuICAgICAgICAgICAgICB0byBhdWRpZW5jZXMgYWNyb3NzIG9ubGluZSBhbmQgYWNyb3NzIERlbm1hcmsgYW5kIFN3ZWRlbiAoc2VlXG4gICAgICAgICAgICAgIGRhdGVzIGFuZCBsb2NhdGlvbnMgb24gdGhpcyBwYWdlKS5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nZm9udC1ib2xkIG10LTQgJz5cbiAgICAgICAgICAgICAgICBXZSB3b3VsZCBsaWtlIHlvdSB0byBqb2luIHVzIHRvIGxlYXJuOlxuICAgICAgICAgICAgICA8L2gzPnsnICd9XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9JyBsaXN0LWRpc2MgbGlzdC1pbnNpZGUnPlxuICAgICAgICAgICAgICAgIDxsaT5XaHkgYXJlIHdlIGNvbW1pdHRlZCB0byBicmluZ2luZyBwYWRlbCB0byBBZnJpY2EuPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+V2hvIGFyZSB0aGUgdGVhbSBiZWhpbmQgUGFkZWwgQWZyaWNhLjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPldoYXQgbWFrZXMgdXMgc28gY2FwYWJsZSBvZiBzdWNjZWVkaW5nLiA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT4gSG93LCBhbmQgd2h5IHlvdSBjYW4gam9pbiB1cy48L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT0nYmctZ3JheS01MCBtZDp3LTIvNSBoLWZpdCAgIHNwYWNlLXktMiAgJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncC04Jz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtaGVhZGluZyBwYi00Jz5VcGNvbWluZyBldmVudHM8L2gyPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nc3BhY2UteS0yIHRleHQteHMgJz5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+MjNyZCBBdWd1c3Q8L3N0cm9uZz4gLSBPbmxpbmUgLSAxNi4wMC0xNy4wMCBDRVNUIC17JyAnfVxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3VuZGVybGluZSBmb250LWJvbGQgdGV4dC1ncmVlbi04MDAnXG4gICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3d3dy5ldmVudGJyaXRlLmNvbS9lL3doZW4tdGhlLWZhc3Rlc3QtZ3Jvd2luZy1zcG9ydC1tZWV0cy10aGUtZmFzdGVzdC1ncm93aW5nLWNvbnRpbmVudC10aWNrZXRzLTQwMDU2Nzc0NzkxNydcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBFdmVudGJyaXRlIFJlZ2lzdHJhdGlvblxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdmb250LWJvbGQgcHQtNCc+XG4gICAgICAgICAgICAgICAgTG9jYWwgRXZlbnRzIChSZWdpc3RlciBpbiB0aGUgZm9ybSBiZWxvdylcbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+MjR0aCBBdWd1c3Q8L3N0cm9uZz4gLSBTdG9ja2hvbG0gLSAxNi4zMC0xNy4zMFxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz4yNXRoIEF1Z3VzdDwvc3Ryb25nPiAtIEdvdGhlbmJ1cmcgLSAxNi0xN1xuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz4yOXRoIEF1Z3VzdDwvc3Ryb25nPiAtIE1hbG1cdTAwRjYgLSAxNi0xN1xuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz4zMHRoIEF1Z3VzdDwvc3Ryb25nPiAtIENvcGVuaGFnZW4gLSAxNi0xN1xuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgICBteS02IHRleHQtc2xhdGUtOTAwICBkYXJrOnRleHQtd2hpdGUgbWQ6bXktYXV0byBzcGFjZS15LXZ3LTQtbWluQHhsIGJnLXdoaXRlIGRhcms6Ymctc2xhdGUtOTAwICAgYmctb3BhY2l0eS01MCBiYWNrZHJvcC1ibHVyLWxnIHNoYWRvdy0yeGxcdCBwLTYgICAgaC1maXQgJ1xuICAgICAgICAgICAgbWV0aG9kPSdwb3N0J1xuICAgICAgICAgICAgYXJpYS1oaWRkZW49e3N0YXRlID09PSAnc3VjY2Vzcyd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtaGVhZGluZyB0ZXh0LWxnICB1cHBlcmNhc2UnPlxuICAgICAgICAgICAgICAgIFJlZ2lzdGVyIGZvciBhIGxvY2FsIGV2ZW50XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJyBjbGFzc05hbWU9J2Jsb2NrICB0ZXh0LXhzICAgJz5cbiAgICAgICAgICAgICAgICAgIFlvdXIgTmFtZVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcbiAgICAgICAgICAgICAgICAgIGlkPSduYW1lJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZGFyazp0ZXh0LXNsYXRlLTkwMCB0ZXh0LXNtIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNSAwICBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAnXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nSm9lIEJsb2dncydcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi02Jz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnIGNsYXNzTmFtZT0nYmxvY2sgdGV4dC14cyAgJz5cbiAgICAgICAgICAgICAgICAgIFlvdXIgZW1haWxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgIGlkPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtc20gZGFyazp0ZXh0LXNsYXRlLTkwMCAgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41IGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwJ1xuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J25hbWVAbWFpbC5jb20nXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNic+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2NvbXBhbnknIGNsYXNzTmFtZT0nYmxvY2sgdGV4dC14cyAnPlxuICAgICAgICAgICAgICAgICAgWW91ciBDb21wYW55XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICBpZD0nY29tcGFueSdcbiAgICAgICAgICAgICAgICAgIG5hbWU9J2NvbXBhbnknXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LXNtIGRhcms6dGV4dC1zbGF0ZS05MDAgICBibG9jayB3LWZ1bGwgcC0yLjUgICAgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwJ1xuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0FjbWUgSW5jJ1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdjb21wYW55JyBjbGFzc05hbWU9J2Jsb2NrIHRleHQteHMgJz5cbiAgICAgICAgICAgICAgICAgIEV2ZW50XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICBpZD0nZXZlbnQnXG4gICAgICAgICAgICAgICAgICBuYW1lPSdldmVudCdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtc20gZGFyazp0ZXh0LXNsYXRlLTkwMCAgIGJsb2NrIHctZnVsbCBwLTIuNSAgICBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAnXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J3N0b2NraG9sbSc+MjR0aCBBdWcgLSBTdG9ja2hvbG08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2dvdGhlbmJ1cmcnPjI1dGggQXVnIC0gR290aGVuYnVyZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nbWFsbW8nPjI5dGggQXVnIC0gTWFsbVx1MDBGNjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nY29wZW5oYWdlbic+MzB0aCBBdWcgLSBDb3BlbmhhZ2VuPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPScgcHktNCBweC02IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwIHRvLXNsYXRlLTkwMCBkYXJrOnRvLXllbGxvdy0zMDAgdGV4dC13aGl0ZSBkYXJrOnRleHQtc2xhdGUtOTAwIGZvbnQtaGVhZGluZyB1cHBlcmNhc2UgaG92ZXI6YmctZ3JhZGllbnQtdG8tdGwgaG92ZXI6c2NhbGUtMTA1IHNoYWRvdy0yeGwgJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgIDxwPnthY3Rpb25EYXRhPy5lcnJvciA/IGFjdGlvbkRhdGEubWVzc2FnZSA6IDw+ICZuYnNwOyA8Lz59PC9wPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCAgbXktMTAgdGV4dC1zbGF0ZS05MDAgIGRhcms6dGV4dC13aGl0ZSBtZDpteS1hdXRvIHNwYWNlLXktdnctNC1taW5AeGwgYmctd2hpdGUgZGFyazpiZy1zbGF0ZS05MDAgZGFyazpiZy1vcGFjaXR5LTc1ICBiZy1vcGFjaXR5LTUwIGJhY2tkcm9wLWJsdXItbGcgc2hhZG93LTJ4bFx0IHAtNiAgICBoLWZpdCAnXG4gICAgICAgICAgICAvL2NsYXNzTmFtZT17IGlmIChzdGF0ZSA9PT0gXCJzdWNlc3NcIikgIHsnaGlkZGVuJ30gZWxzZXsnYmxvY2snfSB9XG4gICAgICAgICAgICBhcmlhLWhpZGRlbj17c3RhdGUgIT09ICdzdWNjZXNzJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBmb250LWhlYWRpbmcnPlx1RDgzRFx1REU4MCBZb3UncmUgUmVnaXN0ZXJlZCE8L2gyPlxuXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVGhhbmtzIGZvciByZWdpc3RlcmluZyBmb3IgdGhpcyBldmVudCwgeW91IHdpbGwgYmUgc2VudCBhbiBlbWFpbFxuICAgICAgICAgICAgICB3aXRoIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J3VuZGVybGluZSB0ZXh0LWdyZWVuLTMwMCcgdG89Jy4nPlxuICAgICAgICAgICAgICBTdGFydCBPdmVyXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8Q1RBXG4gICAgICAgIGhlYWRpbmc9J0FyZSB5b3UgaW50ZXJlc3RlZCBpbiBwYXJ0bmVyaW5nIHdpdGggdGhlIE51bWJlciAxIEFmcmljYW4gUGFkZWwgY29tcGFueT8nXG4gICAgICAgIGJvZHk9J0F0IHRoaXMgdmVyeSBlYXJseSBzdGFnZSBpbiBvdXIgZGV2ZWxvcG1lbnQgd2UgYXJlIGludGVyZXN0ZWQgaW4gZmluZGluZyBwYXJ0bmVycyBmcm9tIGFsbCBzZWN0b3JzIHRvIGludmVzdGlnYXRlIHBhcnRuZXJzaGlwIHBvc3NpYmlsaXRpZXMuIElmIHRoaXMgc291bmRzIGxpa2UgeW91IC0gZ2V0IGluIHRvdWNoLidcbiAgICAgICAgYnV0dG9uVGV4dD0nQ29udGFjdCBVcydcbiAgICAgICAgYnV0dG9uVG89JyNjb250YWN0J1xuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuXG5pbnRlcmZhY2UgQ1RBQ29udGVudCB7XG4gIGhlYWRpbmc6IHN0cmluZztcbiAgYm9keTogc3RyaW5nO1xuICBidXR0b25UZXh0OiBzdHJpbmc7XG4gIGJ1dHRvblRvOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENUQShwcm9wczogQ1RBQ29udGVudCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBpZD0ncGFydG5lcnMnXG4gICAgICBjbGFzc05hbWU9J1tjdGFdIHAtMjAgbWQ6bXgtMjAgYmctc2xhdGUtOTAwICBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGFsaWduLW1pZGRsZSByb3VuZGVkLW1kIHNoYWRvdy0yeGwgdGV4dC13aGl0ZSdcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nICBtLWF1dG8gIHRleHQtY2VudGVyICBzcGFjZS15LXZ3LTYtbWluQHhsIG1kOnctMy80ICAnPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTR4bCBmb250LWhlYWRpbmcgdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgIHZpYS1ncmVlbi01MDAgdG8teWVsbG93LTQwMCAnPlxuICAgICAgICAgIHtwcm9wcy5oZWFkaW5nfVxuICAgICAgICA8L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2Jhc2UnPntwcm9wcy5ib2R5fTwvcD5cbiAgICAgICAgPExpbmsgdG89e3Byb3BzLmJ1dHRvblRvfSBjbGFzc05hbWU9JyBpbmxpbmUtZmxleCAnPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdweS00IHB4LTYgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgIHZpYS1ncmVlbi01MDAgdG8teWVsbG93LTQwMCByb3VuZGVkLXhsIHRleHQtYmxhY2sgZm9udC1ib2xkIGhvdmVyOmJnLWdyYWRpZW50LXRvLXRsIGhvdmVyOnNjYWxlLTEwNSBzaGFkb3ctMnhsJz5cbiAgICAgICAgICAgIHtwcm9wcy5idXR0b25UZXh0fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iLCAiaW1wb3J0IGhlcm9JbWcgZnJvbSAnLi4vaW1hZ2VzL3BhZGVsLWhlcm8uanBnJztcbmltcG9ydCBwYWRlbEltZyBmcm9tICcuLi9pbWFnZXMvcGFydG5lcnMvcGFkZWx0b3RhbC1sb2dvLnBuZyc7XG5pbXBvcnQgcGFkZWxJcSBmcm9tICcuLi9pbWFnZXMvcGFydG5lcnMvcGFkZWwtaXEucG5nJztcblxuaW50ZXJmYWNlIEhlcm9Db250ZW50IHtcbiAgaGVhZGluZzogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIGJ1dHRvbjFUZXh0OiBzdHJpbmc7XG4gIGJ1dHRvbjFUbzogc3RyaW5nO1xuICBidXR0b24yVGV4dDogc3RyaW5nO1xuICBidXR0b24yVG86IHN0cmluZztcbiAgaW1nU3JjOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm8ocHJvcHM6IEhlcm9Db250ZW50KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT0nW2hlcm9dIGNvbnRhaW5lciBteC1hdXRvIGJnLW5vbmUgbWQ6aC1zY3JlZW4gbWQ6cHQtMzIgcHktNDQgbWQ6cGItMTIgIG1kOi1tdC0xNiBweC04IHNtOnB4LTEyIGZsZXggIGZsZXgtY29sIG1kOmZsZXgtcm93IGFsaWduLW1pZGRsZSBtZDpqdXN0aWZ5LWJldHdlZW4gIGJnLWNvdmVyICBtZDpzcGFjZS14LTEyXHQgJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBtZDp3LTMvNSBteS1hdXRvIHNwYWNlLXktdnctMi1taW5AeGwgbWQ6cHktMTYgIGZvbnQtaGVhZGluZyB1cHBlcmNhc2UgICc+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LTJ4bCc+V2hhdCBoYXBwZW5zIHdoZW48L3A+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC00eGwgbWQ6dGV4dC02eGwgJz5cbiAgICAgICAgICAgIFRoZXsnICd9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9JyB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1iciBmcm9tLWdyZWVuLTMwMCAgdmlhLWdyZWVuLTUwMCB0by1zbGF0ZS05MDAgZGFyazp0by15ZWxsb3ctMzAwJz5cbiAgICAgICAgICAgICAgd29ybGQncyBmYXN0ZXN0IHNwb3J0XG4gICAgICAgICAgICA8L3NwYW4+eycgJ31cbiAgICAgICAgICAgIG1lZXRzIHRoZXsnICd9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IGJnLWdyYWRpZW50LXRvLWJyIGZyb20teWVsbG93LTMwMCAgdmlhLXllbGxvdy01MDAgdG8tc2xhdGUtOTAwIGRhcms6dG8tZ3JlZW4tMzAwJz5cbiAgICAgICAgICAgICAgd29ybGQncyBmYXN0ZXN0IGNvbnRpbmVudFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgP1xuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cuZXZlbnRicml0ZS5jb20vZS93aGVuLXRoZS1mYXN0ZXN0LWdyb3dpbmctc3BvcnQtbWVldHMtdGhlLWZhc3Rlc3QtZ3Jvd2luZy1jb250aW5lbnQtdGlja2V0cy00MDA1Njc3NDc5MTcnXG4gICAgICAgICAgICBjbGFzc05hbWU9J210LTZcbiAgICAgICAgICAgICBpbmxpbmUtYmxvY2sgdGV4dC1sZyBweS00IHB4LTYgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgdG8tc2xhdGUtOTAwIGRhcms6dG8teWVsbG93LTMwMCB0ZXh0LXdoaXRlIGRhcms6dGV4dC1zbGF0ZS05MDAgZm9udC1oZWFkaW5nIHVwcGVyY2FzZSBob3ZlcjpiZy1ncmFkaWVudC10by10bCBob3ZlcjpzY2FsZS0xMDUgc2hhZG93LTJ4bCAnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgSm9pbiB1cyB0byBmaW5kIG91dFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHtcbiAgRm9ybSxcbiAgTGluayxcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIHVzZUxvYWRlckRhdGEsXG4gIEFjdGlvbkZ1bmN0aW9uLFxufSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBNZXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgZ2V0RmlsbXMsIEZpbG0gfSBmcm9tICd+L2FwaS9maWxtcyc7XG5pbXBvcnQgQ1RBIGZyb20gJ34vQ29tcG9uZW50cy9jdGEnO1xuaW1wb3J0IEhlcm8gZnJvbSAnfi9Db21wb25lbnRzL2hlcm8nO1xuaW1wb3J0IEhlcm9BbHQgZnJvbSAnfi9Db21wb25lbnRzL2hlcm8tYWx0JztcbmltcG9ydCBIZXJvV2hpdGUgZnJvbSAnfi9Db21wb25lbnRzL2hlcm8td2hpdGUnO1xuXG5pbXBvcnQgSW5mbyBmcm9tICd+L0NvbXBvbmVudHMvaW5mbyc7XG5pbXBvcnQgaW5mb0ltZyBmcm9tICcuLi9pbWFnZXMvYWJvdXQtcGEuanBnJztcbmltcG9ydCB7IGdldENsaWVudCwgdXJsRm9yIH0gZnJvbSAnfi9saWIvc2FuaXR5L2dldENsaWVudCc7XG5pbXBvcnQge1xuICBQb3J0YWJsZVRleHQsXG4gIFBvcnRhYmxlVGV4dFR5cGVDb21wb25lbnQsXG4gIFBvcnRhYmxlVGV4dENvbXBvbmVudHNQcm92aWRlcixcbn0gZnJvbSAnQHBvcnRhYmxldGV4dC9yZWFjdCc7XG5cbi8vIGxvYWRlcigpIG11c3QgYmUgYXN5bmMhXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKCkge1xuICBjb25zdCBuZXdzUG9zdHMgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaChcbiAgICBgKltfdHlwZSA9PSBcIm5ld3NcIl17IF9pZCwgdGl0bGUsIHNsdWcsIFwiZmVhdHVyZUltYWdlXCI6IGZlYXR1cmUuYXNzZXQtPnVybFxuICAgfWBcbiAgKTtcbiAgY29uc3QgYWJvdXRUZXh0ID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJzZWN0aW9uc1wiICYmIHNsdWcuY3VycmVudCA9PSBcImFib3V0LXBhZGVsLWFmcmljYVwiIF17IF9pZCwgdGl0bGUsIG92ZXJ2aWV3LCBcImZlYXR1cmVJbWFnZVwiOiBmZWF0dXJlLmFzc2V0LT51cmxcbiAgIH1gXG4gICk7XG4gIHJldHVybiB7IG5ld3NQb3N0cywgYWJvdXRUZXh0IH07XG59XG5cbi8vIFNlcnZlciBTaWRlXG4vL2V4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4vL2NvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuLy9jb25zdCB0aXRsZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCd0aXRsZScpO1xuLy9yZXR1cm4gZ2V0RmlsbXModGl0bGUpO1xuLy99O1xuXG5leHBvcnQgY29uc3QgbWV0YSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1BhZGVsIEFmcmljYSB8IFRoZSBOdW1iZXIgMSBBZnJpY2FuIFBhZGVsIENvbXBhbnknLFxuICAgIGRlc2NyaXB0aW9uOiAnUGFkZWwgQWZyaWNhIGhvbWUgcGFnZScsXG4gICAga2V5d29yZHM6ICdwYWRlbCwgYWZyaWNhLCBzcG9ydCcsXG4gIH07XG59O1xuXG4vLyBDbGllbnQgU2lkZVxuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgbGV0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBsZXQgZW1haWwgPSBmb3JtRGF0YS5nZXQoJ2VtYWlsJyk7XG4gIGxldCBuYW1lID0gZm9ybURhdGEuZ2V0KCduYW1lJyk7XG4gIGxldCBjb21wYW55ID0gZm9ybURhdGEuZ2V0KCdjb21wYW55Jyk7XG4gIC8vcHJvY2Vzcy5lbnYuQ09OVkVSVEtJVF9LRVkgPSAnbEdmNmtPbkZPT0MtWU9pa1pEX1lQdyc7XG5cbiAgY29uc3QgQVBJX0tFWSA9ICdsR2Y2a09uRk9PQy1ZT2lrWkRfWVB3JztcbiAgY29uc3QgRk9STV9JRCA9ICczMDIyMDU0JztcbiAgY29uc3QgQVBJID0gJ2h0dHBzOi8vYXBpLmNvbnZlcnRraXQuY29tL3YzLyc7XG5cbiAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSX0vZm9ybXMvJHtGT1JNX0lEfS9zdWJzY3JpYmVgLCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgZmlyc3RfbmFtZTogbmFtZSxcbiAgICAgIGZpZWxkczogeyBjb21wYW55OiBjb21wYW55IH0sXG4gICAgICBhcGlfa2V5OiBBUElfS0VZLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgfSxcbiAgfSk7XG5cbiAgLy9jb25zb2xlLmxvZyh7IGVtYWlsIH0sIHsgbmFtZSB9LCB7IGNvbXBhbnkgfSk7XG4gIHJldHVybiByZXMuanNvbigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgbmV3c1Bvc3RzLCBhYm91dFRleHQgfSA9IHVzZUxvYWRlckRhdGEoKTtcblxuICBjb25zdCBteVBvcnRhYmxlVGV4dENvbXBvbmVudHMgPSB7XG4gICAgdHlwZXM6IHtcbiAgICAgIGltYWdlOiAodmFsdWU6IGFueSkgPT4gKFxuICAgICAgICA8aW1nIHNyYz17dmFsdWUuYXNzZXR9IGtleT17dmFsdWUuX2lkfSBjbGFzc05hbWU9e3ZhbHVlLmFzc2V0fT48L2ltZz5cbiAgICAgICksXG4gICAgfSxcbiAgfTtcbiAgLy9jb25zdCBmaWxtcyA9IHVzZUxvYWRlckRhdGE8RmlsbVtdPigpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVyb1xuICAgICAgICBoZWFkaW5nPSdQYWRlbCBoYXMgdGFrZW4gRXVyb3BlIGJ5IHN0b3JtLiBOb3cgaXRcdTIwMTlzIHRpbWUgdG8gYnJpbmcgaXQgdG8gQWZyaWNhLlxuICAgICAgICAnXG4gICAgICAgIGJvZHk9J1VzaW5nIG91ciBleHRlbnNpdmUga25vd2xlZGdlIG9mIEFmcmljYSBhbmQgYnVzaW5lc3MgZGV2ZWxvcG1lbnQsIHdlIGFpbSB0byBwcm92aWRlIFBhZGVsLCBhcyBhIHNwb3J0IGFuZCBhIGNvbW11bml0eSBlbmFibGVyLCB0byBHaGFuYSwgS2VueWEsIE5pZ2VyaWEgYW5kIG90aGVyIFN1YiBTYWhhcmFuIGNvdW50cmllcy5cbiAgICAgICAgJ1xuICAgICAgICBidXR0b24xVGV4dD0nTGVhcm4gTW9yZSdcbiAgICAgICAgYnV0dG9uMVRvPScjYWJvdXQnXG4gICAgICAgIGJ1dHRvbjJUZXh0PSdXYW50IHRvIFBhcnRuZXI/J1xuICAgICAgICBidXR0b24yVG89JyNhYm91dCdcbiAgICAgICAgaW1nU3JjPScnXG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBGb3JtLCBMaW5rLCB1c2VBY3Rpb25EYXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IGhlcm9JbWcgZnJvbSAnLi4vaW1hZ2VzL3BhZGVsLWhlcm8uanBnJztcbmltcG9ydCBwYWRlbEltZyBmcm9tICcuLi9pbWFnZXMvcGFydG5lcnMvcGFkZWx0b3RhbC1sb2dvLnBuZyc7XG5pbXBvcnQgcGFkZWxJcSBmcm9tICcuLi9pbWFnZXMvcGFydG5lcnMvcGFkZWwtaXEucG5nJztcblxuaW50ZXJmYWNlIEhlcm9Db250ZW50IHtcbiAgaGVhZGluZzogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIGJ1dHRvbjFUZXh0OiBzdHJpbmc7XG4gIGJ1dHRvbjFUbzogc3RyaW5nO1xuICBidXR0b24yVGV4dDogc3RyaW5nO1xuICBidXR0b24yVG86IHN0cmluZztcbiAgaW1nU3JjOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm8ocHJvcHM6IEhlcm9Db250ZW50KSB7XG4gIGxldCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpO1xuICBsZXQgc3RhdGU6ICdpZGxlJyB8ICdzdWNjZXNzJyB8ICdlcnJvcicgPSBhY3Rpb25EYXRhPy5zdWJzY3JpcHRpb25cbiAgICA/ICdzdWNjZXNzJ1xuICAgIDogYWN0aW9uRGF0YT8uZXJyb3JcbiAgICA/ICdlcnJvcidcbiAgICA6ICdpZGxlJztcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9J1toZXJvXSBjb250YWluZXIgbXgtYXV0byBiZy1ub25lICBtZDpwdC0zMiBtZDpwYi0xMiBtYi0xMiBtZDotbXQtMTYgcHgtOCBzbTpweC0xMiBmbGV4ICBmbGV4LWNvbCBtZDpmbGV4LXJvdyBhbGlnbi1taWRkbGUgbWQ6anVzdGlmeS1iZXR3ZWVuICBiZy1jb3ZlciAgbWQ6c3BhY2UteC0xMlx0ICc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgbWQ6dy0yLzUgbWQ6bXktYXV0byBzcGFjZS15LXZ3LTItbWluQHhsIG1kOnB5LTE2ICAnPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtNHhsIG1kOnRleHQtNnhsIGZvbnQtaGVhZGluZyB1cHBlcmNhc2UgJz5cbiAgICAgICAgICAgIFBhZGVsIGhhcyB0YWtlbiBFdXJvcGUgYnkgc3Rvcm0uJm5ic3A7PGJyPjwvYnI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Jsb2NrIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwICB2aWEtZ3JlZW4tNTAwIHRvLXNsYXRlLTkwMCBkYXJrOnRvLXllbGxvdy0zMDAnPlxuICAgICAgICAgICAgICBOb3cgaXQncyB0aW1lIHRvIGJyaW5nIGl0IHRvIEFmcmljYVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtYmFzZSAgJz5cbiAgICAgICAgICAgIFx1RDgzRFx1REM0QiBJbnRlcmVzdGVkIGluIGEgcGFydG5lcnNoaXA/XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J3VuZGVybGluZScgaHJlZj0nbWFpbHRvOmhlbGxvQHBhZGVsLmFmcmljYSc+XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIEVtYWlsIHVzXG4gICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgbWQ6dy0yLzUgbXktMTAgdGV4dC1zbGF0ZS05MDAgIGRhcms6dGV4dC13aGl0ZSBtZDpteS1hdXRvIHNwYWNlLXktdnctNC1taW5AeGwgYmctd2hpdGUgZGFyazpiZy1zbGF0ZS05MDAgZGFyazpiZy1vcGFjaXR5LTI1ICBiZy1vcGFjaXR5LTUwIGJhY2tkcm9wLWJsdXItbGcgc2hhZG93LTJ4bFx0IHAtNiAgICBoLWZpdCAnXG4gICAgICAgICAgbWV0aG9kPSdwb3N0J1xuICAgICAgICAgIGFyaWEtaGlkZGVuPXtzdGF0ZSA9PT0gJ3N1Y2Nlc3MnfVxuICAgICAgICA+XG4gICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LWhlYWRpbmcgdGV4dC1sZyAgdXBwZXJjYXNlJz5cbiAgICAgICAgICAgICAgSm9pbiB0aGUgTWFpbGluZyBMaXN0XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNic+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJyBjbGFzc05hbWU9J2Jsb2NrICB0ZXh0LXhzICAgJz5cbiAgICAgICAgICAgICAgICBZb3VyIE5hbWVcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICBuYW1lPSduYW1lJ1xuICAgICAgICAgICAgICAgIGlkPSduYW1lJ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGRhcms6dGV4dC1zbGF0ZS05MDAgdGV4dC1zbSBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgMCAgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwJ1xuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdKb2UgQmxvZ2dzJ1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi02Jz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJyBjbGFzc05hbWU9J2Jsb2NrIHRleHQteHMgICc+XG4gICAgICAgICAgICAgICAgWW91ciBlbWFpbFxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcbiAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICBpZD0nZW1haWwnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1zbSBkYXJrOnRleHQtc2xhdGUtOTAwICBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAnXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J25hbWVAbWFpbC5jb20nXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nY29tcGFueScgY2xhc3NOYW1lPSdibG9jayB0ZXh0LXhzICc+XG4gICAgICAgICAgICAgICAgWW91ciBDb21wYW55XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgaWQ9J2NvbXBhbnknXG4gICAgICAgICAgICAgICAgbmFtZT0nY29tcGFueSdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LXNtIGRhcms6dGV4dC1zbGF0ZS05MDAgICBibG9jayB3LWZ1bGwgcC0yLjUgICAgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwJ1xuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdBY21lIEluYydcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICBjbGFzc05hbWU9JyBweS00IHB4LTYgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgdG8tc2xhdGUtOTAwIGRhcms6dG8teWVsbG93LTMwMCB0ZXh0LXdoaXRlIGRhcms6dGV4dC1zbGF0ZS05MDAgZm9udC1oZWFkaW5nIHVwcGVyY2FzZSBob3ZlcjpiZy1ncmFkaWVudC10by10bCBob3ZlcjpzY2FsZS0xMDUgc2hhZG93LTJ4bCAnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICA8cD57YWN0aW9uRGF0YT8uZXJyb3IgPyBhY3Rpb25EYXRhLm1lc3NhZ2UgOiA8PiAmbmJzcDsgPC8+fTwvcD5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgbWQ6dy0yLzUgbXktMTAgdGV4dC1zbGF0ZS05MDAgIGRhcms6dGV4dC13aGl0ZSBtZDpteS1hdXRvIHNwYWNlLXktdnctNC1taW5AeGwgYmctd2hpdGUgZGFyazpiZy1zbGF0ZS05MDAgZGFyazpiZy1vcGFjaXR5LTI1ICBiZy1vcGFjaXR5LTUwIGJhY2tkcm9wLWJsdXItbGcgc2hhZG93LTJ4bFx0IHAtNiAgICBoLWZpdCAnXG4gICAgICAgICAgLy9jbGFzc05hbWU9eyBpZiAoc3RhdGUgPT09IFwic3VjZXNzXCIpICB7J2hpZGRlbid9IGVsc2V7J2Jsb2NrJ30gfVxuICAgICAgICAgIGFyaWEtaGlkZGVuPXtzdGF0ZSAhPT0gJ3N1Y2Nlc3MnfVxuICAgICAgICA+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1oZWFkaW5nJz5cdUQ4M0RcdURFODAgWW91J3JlIFN1YnNjcmliZWQhPC9oMj5cblxuICAgICAgICAgIDxwPlRoYW5rIHlvdSBmb3Igc2lnbmluZyB1cCB0byBvdXIgbWFpbGluZyBsaXN0PC9wPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0ndW5kZXJsaW5lIHRleHQtZ3JlZW4tMzAwJyB0bz0nLic+XG4gICAgICAgICAgICBTdGFydCBPdmVyXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPScgbXgtYXV0byB3LTIvMyByb3VuZGVkLWxnIG1kOnB5LTEyIHB5LTEyIGJnLXNsYXRlLTkwMCAgbWItMTIgbWQ6LW10LTE2IHB4LTggc206cHgtMTIgZmxleCAgZmxleC1jb2wgYWxpZ24tbWlkZGxlIG1kOmp1c3RpZnktYmV0d2VlbiAgbWQ6c3BhY2UteS02ICBcdCc+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J20tYXV0byB1cHBlcmNhc2UgdGV4dC1jZW50ZXIgZm9udC1oZWFkaW5nIHRleHQteGwgZGFyazp0ZXh0LXdoaXRlIHRleHQtd2hpdGUgb3BhY2l0eS03MCc+XG4gICAgICAgICAgT3VyIFN0cmF0ZWdpYyBQYXJ0bmVyc1xuICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXIgbS1hdXRvIHNwYWNlLXgtOCAnPlxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vcGFkZWx0b3RhbC5zZSc+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy01NiBoLWF1dG8gb3BhY2l0eS03NSB0cmFuc2l0aW9uIGVhc2UtaW4tb3UgIGhvdmVyOm9wYWNpdHktMTAwIGhvdmVyOnNjYWxlLTEwNSBjdXJzb3ItcG9pbnRlciAnXG4gICAgICAgICAgICAgIHNyYz17cGFkZWxJbWd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL3BhZGVsaXEuaW8vJz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTU2IGgtYXV0byBvcGFjaXR5LTc1ICAgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBob3ZlcjpvcGFjaXR5LTEwMCBob3ZlcjpzY2FsZS0xMDUgY3Vyc29yLXBvaW50ZXIgJ1xuICAgICAgICAgICAgICBzcmM9e3BhZGVsSXF9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IFBpY29TYW5pdHkgZnJvbSAncGljb3Nhbml0eSc7XG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xuXG4vLyBTdGFuZGFyZCBjbGllbnQgZm9yIGZldGNoaW5nIGRhdGFcbmV4cG9ydCBjb25zdCBzYW5pdHlDbGllbnQgPSBuZXcgUGljb1Nhbml0eShjb25maWcpO1xuXG5leHBvcnQgY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihzYW5pdHlDbGllbnQpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXJsRm9yKHNvdXJjZTogYW55KSB7XG4gIHJldHVybiBidWlsZGVyLmltYWdlKHNvdXJjZSk7XG59XG5cbi8vIEF1dGhlbnRpY2F0ZWQgY2xpZW50IGZvciBmZXRjaGluZyBkcmFmdCBkb2N1bWVudHNcbmV4cG9ydCBjb25zdCBwcmV2aWV3Q2xpZW50ID0gbmV3IFBpY29TYW5pdHkoe1xuICAuLi5jb25maWcsXG4gIHVzZUNkbjogZmFsc2UsXG4gIC8vdG9rZW46IHByb2Nlc3MuZW52LlNBTklUWV9BUElfVE9LRU4sXG59KTtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNob29zZSB0aGUgY29ycmVjdCBjbGllbnRcbmV4cG9ydCBjb25zdCBnZXRDbGllbnQgPSAodXNlUHJldmlldyA9IGZhbHNlKSA9PlxuICB1c2VQcmV2aWV3ID8gcHJldmlld0NsaWVudCA6IHNhbml0eUNsaWVudDtcbiIsICJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGlWZXJzaW9uOiAnMjAyMS0wMy0yNScsXG4gIC8vIEZpbmQgdGhlc2UgaW4geW91ciAuL3N0dWRpby9zYW5pdHkuanNvbiBmaWxlXG4gIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJyxcbiAgcHJvamVjdElkOiAncWk4aHIzcnYnLFxuICB1c2VDZG46IGZhbHNlLFxufTtcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgeyBnZXRDbGllbnQgfSBmcm9tICd+L2xpYi9zYW5pdHkvZ2V0Q2xpZW50JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcih7IHBhcmFtcyB9OiB7IHBhcmFtczogYW55IH0pIHtcbiAgLy8gUXVlcnkgZm9yIF9hbGxfIGRvY3VtZW50cyB3aXRoIHRoaXMgc2x1Z1xuICAvLyBUaGVyZSBjb3VsZCBiZSB0d286IERyYWZ0IGFuZCBQdWJsaXNoZWQhXG4gIGNvbnN0IGluaXRpYWxEYXRhID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJuZXdzXCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXXsgX2lkLCB0aXRsZSwgc2x1ZywgXCJmZWF0dXJlSW1hZ2VcIjogZmVhdHVyZS5hc3NldC0+dXJsXG4gIH1gLFxuICAgIHsgc2x1ZzogcGFyYW1zLnNsdWcgfVxuICApO1xuXG4gIHJldHVybiB7IGluaXRpYWxEYXRhIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NQb3N0KCkge1xuICBsZXQgeyBpbml0aWFsRGF0YSB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBwYWRkaW5nOiAyMCB9fT5cbiAgICAgIDxoMT57aW5pdGlhbERhdGFbMF0udGl0bGV9PC9oMT5cbiAgICAgIDxpbWcgc3JjPXtpbml0aWFsRGF0YVswXS5mZWF0dXJlSW1hZ2V9PjwvaW1nPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCBDVEEgZnJvbSAnfi9Db21wb25lbnRzL2N0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3ctZnVsbCBtZDpwLTMyIHB5LTEyIHB4LTMgc3BhY2UteS0xMiAgZmxleCBtZDpmbGV4LXJvdyBmbGV4LWNvbCBiZy13aGl0ZSBqdXN0aWZ5LWJldHdlZW4gdGV4dC1ibGFjayAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6dy0xLzIgcHgtMTIgc3BhY2UteS00Jz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTV4bCAgZm9udC1oZWFkaW5nICAnPkFib3V0IFBhZGVsIEFmcmljYTwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQcmFlc2VudCBpZFxuICAgICAgICAgICAgdGVsbHVzIHRlbXB1cywgY29uZGltZW50dW0gbGliZXJvIHZpdGFlLCB0ZW1wb3IgcmlzdXMuIERvbmVjIGFjXG4gICAgICAgICAgICBtYXR0aXMgbGFjdXMuIE5hbSBub24gbGVjdHVzIG1hdXJpcy4gRnVzY2UgdXQgdG9ydG9yIHF1aXMgYW50ZVxuICAgICAgICAgICAgYmxhbmRpdCBzYWdpdHRpcy4gQ3VyYWJpdHVyIGZpbmlidXMgdHJpc3RpcXVlIG51bGxhLiBQcmFlc2VudCBlZ2V0XG4gICAgICAgICAgICByaXN1cyBhdCBtYXVyaXMgdHJpc3RpcXVlIGF1Y3RvciBpZCBsYW9yZWV0IGFudGUuIE1hdXJpcyBmZXJtZW50dW1cbiAgICAgICAgICAgIHBsYWNlcmF0IG1hbGVzdWFkYS4gTmFtIG1hbGVzdWFkYSB2ZW5lbmF0aXMgbGVvLCBkaWN0dW0gc29sbGljaXR1ZGluXG4gICAgICAgICAgICBlcmF0LiBQZWxsZW50ZXNxdWUgdXQgdGluY2lkdW50IGF1Z3VlLiBQcm9pbiB2ZWwgbnVuYyBvcmNpLiBOdWxsYVxuICAgICAgICAgICAgbmVjIGVuaW0gZWdldCBlbmltIG9ybmFyZSBjb25ndWUgYWMgZWdldCBtYXNzYS4gVml2YW11cyBzaXQgYW1ldFxuICAgICAgICAgICAgc2FwaWVuIHZlbCBudWxsYSBzY2VsZXJpc3F1ZSBmZXVnaWF0LiBJbiB2ZWwgZG9sb3IgYSBmZWxpcyB1bHRyaWNpZXNcbiAgICAgICAgICAgIGxhb3JlZXQgaW4gc2l0IGFtZXQgdGVsbHVzLiBJbnRlZ2VyIG1heGltdXMgZWxpdCBuZXF1ZSwgZWdldCB2YXJpdXNcbiAgICAgICAgICAgIGxpZ3VsYSBzb2RhbGVzIG5vbi4gU2VkIGlhY3VsaXMgcmlzdXMgZXQgbGFjdXMgcHJldGl1bSBldWlzbW9kIGFcbiAgICAgICAgICAgIGRpY3R1bSB0b3J0b3IuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlclxuICAgICAgICAgICAgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuIE1hZWNlbmFzIGVnZXQgcXVhbSBsaWd1bGEuXG4gICAgICAgICAgICBDdXJhYml0dXIgbGFjdXMgZWxpdCwgbG9ib3J0aXMgYXQgbnVsbGEgbm9uLCBmZXJtZW50dW0gaGVuZHJlcml0XG4gICAgICAgICAgICBtYXVyaXMuIFZpdmFtdXMgY29tbW9kbyBlbGVpZmVuZCBsb3JlbSwgY29uc2VjdGV0dXIgc29sbGljaXR1ZGluXG4gICAgICAgICAgICBvcmNpIGNvbnZhbGxpcyB2aXRhZS4gTnVuYyBjb25zZWN0ZXR1ciBwbGFjZXJhdCBtYXVyaXMsIGlkIGZhY2lsaXNpc1xuICAgICAgICAgICAgYXVndWUgbWF0dGlzIGlkLiBOdWxsYSB0aW5jaWR1bnQgdWxsYW1jb3JwZXIgZXVpc21vZC4gUHJhZXNlbnRcbiAgICAgICAgICAgIHBvc3VlcmUgZWZmaWNpdHVyIGVzdCBzZWQgcnV0cnVtLiBEb25lYyBvcm5hcmUgbGliZXJvIGF0IGV4XG4gICAgICAgICAgICBlbGVtZW50dW0gc29kYWxlcy4gVmVzdGlidWx1bSBpbiBjdXJzdXMgZXguIER1aXMgbGliZXJvIGRvbG9yLFxuICAgICAgICAgICAgZGlnbmlzc2ltIHF1aXMgcGxhY2VyYXQgYWMsIHNhZ2l0dGlzIGlkIGVzdC4gQ3VyYWJpdHVyIHNhZ2l0dGlzXG4gICAgICAgICAgICB2ZWxpdCBtYXVyaXMsIGlkIHVsdHJpY2VzIG5pc2wgdGluY2lkdW50IHNpdCBhbWV0LiBTZWQgc3VzY2lwaXQsXG4gICAgICAgICAgICBzYXBpZW4gaW4gYmliZW5kdW0gbWFsZXN1YWRhLCB0ZWxsdXMgbmVxdWUgZmVybWVudHVtIGVuaW0sIHV0IHRlbXB1c1xuICAgICAgICAgICAgdG9ydG9yIGVzdCBzaXQgYW1ldCBhbnRlLiBVdCBlZ2V0IGFyY3UgbWFsZXN1YWRhLCBsb2JvcnRpcyBuaWJoIGV0LFxuICAgICAgICAgICAgZnJpbmdpbGxhIHRvcnRvci5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT0nYmctZ3JheS01MCBtZDp3LTIvNSBoLTY0ICc+PC9pbWc+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8Q1RBXG4gICAgICAgIGhlYWRpbmc9J0FyZSB5b3UgaW50ZXJlc3RlZCBpbiBwYXJ0bmVyaW5nIHdpdGggdGhlIE51bWJlciAxIEFmcmljYW4gUGFkZWwgY29tcGFueT8nXG4gICAgICAgIGJvZHk9J0F0IHRoaXMgdmVyeSBlYXJseSBzdGFnZSBpbiBvdXIgZGV2ZWxvcG1lbnQgd2UgYXJlIGludGVyZXN0ZWQgaW4gZmluZGluZyBwYXJ0bmVycyBmcm9tIGFsbCBzZWN0b3JzIHRvIGludmVzdGlnYXRlIHBhcnRuZXJzaGlwIHBvc3NpYmlsaXRpZXMuIElmIHRoaXMgc291bmRzIGxpa2UgeW91IC0gZ2V0IGluIHRvdWNoLidcbiAgICAgICAgYnV0dG9uVGV4dD0nQ29udGFjdCBVcydcbiAgICAgICAgYnV0dG9uVG89JyNjb250YWN0J1xuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBGb3JtLFxuICBMaW5rLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgdXNlTG9hZGVyRGF0YSxcbiAgQWN0aW9uRnVuY3Rpb24sXG59IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IE1ldGEgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBnZXRGaWxtcywgRmlsbSB9IGZyb20gJ34vYXBpL2ZpbG1zJztcbmltcG9ydCBDVEEgZnJvbSAnfi9Db21wb25lbnRzL2N0YSc7XG5pbXBvcnQgSGVybyBmcm9tICd+L0NvbXBvbmVudHMvaGVybyc7XG5pbXBvcnQgSW5mbyBmcm9tICd+L0NvbXBvbmVudHMvaW5mbyc7XG5pbXBvcnQgaW5mb0ltZyBmcm9tICcuLi9pbWFnZXMvYWJvdXQtcGEuanBnJztcbmltcG9ydCB7IGdldENsaWVudCwgdXJsRm9yIH0gZnJvbSAnfi9saWIvc2FuaXR5L2dldENsaWVudCc7XG5pbXBvcnQge1xuICBQb3J0YWJsZVRleHQsXG4gIFBvcnRhYmxlVGV4dFR5cGVDb21wb25lbnQsXG4gIFBvcnRhYmxlVGV4dENvbXBvbmVudHNQcm92aWRlcixcbn0gZnJvbSAnQHBvcnRhYmxldGV4dC9yZWFjdCc7XG5cbi8vIGxvYWRlcigpIG11c3QgYmUgYXN5bmMhXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKCkge1xuICBjb25zdCBuZXdzUG9zdHMgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaChcbiAgICBgKltfdHlwZSA9PSBcIm5ld3NcIl17IF9pZCwgdGl0bGUsIHNsdWcsIFwiZmVhdHVyZUltYWdlXCI6IGZlYXR1cmUuYXNzZXQtPnVybFxuICAgfWBcbiAgKTtcbiAgY29uc3QgYWJvdXRUZXh0ID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJzZWN0aW9uc1wiICYmIHNsdWcuY3VycmVudCA9PSBcImFib3V0LXBhZGVsLWFmcmljYVwiIF17IF9pZCwgdGl0bGUsIG92ZXJ2aWV3LCBcImZlYXR1cmVJbWFnZVwiOiBmZWF0dXJlLmFzc2V0LT51cmxcbiAgIH1gXG4gICk7XG5cbiAgY29uc3QgdGVhbU1lbWJlcnMgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaChcbiAgICBgKltfdHlwZSA9PSBcInRlYW1cIiAmJiAobXlUYWdzWzBdLnZhbHVlPT1cIm1hbmFnZW1lbnRcIiB8fG15VGFnc1sxXS52YWx1ZT09XCJtYW5hZ2VtZW50XCIgICkgXXsgX2lkLCB0aXRsZSwgYm9hcmRQb3NpdGlvbiwgbXlUYWdzLCBsaW5rZWRpblVybCwgb3ZlcnZpZXcscm9sZSwgXCJmZWF0dXJlSW1hZ2VcIjogZmVhdHVyZS5hc3NldC0+dXJsXG4gICB9YFxuICApO1xuXG4gIGNvbnN0IGJvYXJkTWVtYmVycyA9IGF3YWl0IGdldENsaWVudCgpLmZldGNoKFxuICAgIGAqW190eXBlID09IFwidGVhbVwiICYmIChteVRhZ3NbMF0udmFsdWU9PVwiYm9hcmRcIiB8fCBteVRhZ3NbMV0udmFsdWU9PVwiYm9hcmRcIiAgKSBdeyBfaWQsIHRpdGxlLCBib2FyZFBvc2l0aW9uLCBteVRhZ3MsIGxpbmtlZGluVXJsLCBvdmVydmlldyxyb2xlLCBcImZlYXR1cmVJbWFnZVwiOiBmZWF0dXJlLmFzc2V0LT51cmxcbiAgIH1gXG4gICk7XG4gIHJldHVybiB7IG5ld3NQb3N0cywgYWJvdXRUZXh0LCB0ZWFtTWVtYmVycywgYm9hcmRNZW1iZXJzIH07XG59XG5cbi8vIFNlcnZlciBTaWRlXG4vL2V4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4vL2NvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuLy9jb25zdCB0aXRsZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCd0aXRsZScpO1xuLy9yZXR1cm4gZ2V0RmlsbXModGl0bGUpO1xuLy99O1xuXG5leHBvcnQgY29uc3QgbWV0YSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1BhZGVsIEFmcmljYSB8IFRoZSBOdW1iZXIgMSBBZnJpY2FuIFBhZGVsIENvbXBhbnknLFxuICAgIGRlc2NyaXB0aW9uOiAnUGFkZWwgQWZyaWNhIGhvbWUgcGFnZScsXG4gICAga2V5d29yZHM6ICdwYWRlbCwgYWZyaWNhLCBzcG9ydCcsXG4gIH07XG59O1xuXG4vLyBDbGllbnQgU2lkZVxuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgbGV0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBsZXQgZW1haWwgPSBmb3JtRGF0YS5nZXQoJ2VtYWlsJyk7XG4gIGxldCBuYW1lID0gZm9ybURhdGEuZ2V0KCduYW1lJyk7XG4gIGxldCBjb21wYW55ID0gZm9ybURhdGEuZ2V0KCdjb21wYW55Jyk7XG4gIC8vcHJvY2Vzcy5lbnYuQ09OVkVSVEtJVF9LRVkgPSAnbEdmNmtPbkZPT0MtWU9pa1pEX1lQdyc7XG5cbiAgY29uc3QgQVBJX0tFWSA9ICdsR2Y2a09uRk9PQy1ZT2lrWkRfWVB3JztcbiAgY29uc3QgRk9STV9JRCA9ICczMDIyMDU0JztcbiAgY29uc3QgQVBJID0gJ2h0dHBzOi8vYXBpLmNvbnZlcnRraXQuY29tL3YzLyc7XG5cbiAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSX0vZm9ybXMvJHtGT1JNX0lEfS9zdWJzY3JpYmVgLCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgZmlyc3RfbmFtZTogbmFtZSxcbiAgICAgIGZpZWxkczogeyBjb21wYW55OiBjb21wYW55IH0sXG4gICAgICBhcGlfa2V5OiBBUElfS0VZLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgfSxcbiAgfSk7XG5cbiAgLy9jb25zb2xlLmxvZyh7IGVtYWlsIH0sIHsgbmFtZSB9LCB7IGNvbXBhbnkgfSk7XG4gIHJldHVybiByZXMuanNvbigpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IG5ld3NQb3N0cywgYWJvdXRUZXh0LCB0ZWFtTWVtYmVycywgYm9hcmRNZW1iZXJzIH0gPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgY29uc3QgbXlQb3J0YWJsZVRleHRDb21wb25lbnRzID0ge1xuICAgIHR5cGVzOiB7XG4gICAgICBpbWFnZTogKHZhbHVlOiBhbnkpID0+IChcbiAgICAgICAgPGltZyBzcmM9e3ZhbHVlLmFzc2V0fSBrZXk9e3ZhbHVlLl9pZH0gY2xhc3NOYW1lPXt2YWx1ZS5hc3NldH0+PC9pbWc+XG4gICAgICApLFxuICAgIH0sXG4gIH07XG4gIC8vY29uc3QgZmlsbXMgPSB1c2VMb2FkZXJEYXRhPEZpbG1bXT4oKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlcm9cbiAgICAgICAgaGVhZGluZz0nUGFkZWwgaGFzIHRha2VuIEV1cm9wZSBieSBzdG9ybS4gTm93IGl0XHUyMDE5cyB0aW1lIHRvIGJyaW5nIGl0IHRvIEFmcmljYS5cbiAgICAgICAgJ1xuICAgICAgICBib2R5PSdVc2luZyBvdXIgZXh0ZW5zaXZlIGtub3dsZWRnZSBvZiBBZnJpY2EgYW5kIGJ1c2luZXNzIGRldmVsb3BtZW50LCB3ZSBhaW0gdG8gcHJvdmlkZSBQYWRlbCwgYXMgYSBzcG9ydCBhbmQgYSBjb21tdW5pdHkgZW5hYmxlciwgdG8gR2hhbmEsIEtlbnlhLCBOaWdlcmlhIGFuZCBvdGhlciBTdWIgU2FoYXJhbiBjb3VudHJpZXMuXG4gICAgICAgICdcbiAgICAgICAgYnV0dG9uMVRleHQ9J0xlYXJuIE1vcmUnXG4gICAgICAgIGJ1dHRvbjFUbz0nI2Fib3V0J1xuICAgICAgICBidXR0b24yVGV4dD0nV2FudCB0byBQYXJ0bmVyPydcbiAgICAgICAgYnV0dG9uMlRvPScjYWJvdXQnXG4gICAgICAgIGltZ1NyYz0nJ1xuICAgICAgLz5cblxuICAgICAgPEluZm8gZmxvdz0nbGVmdCcgLz5cbiAgICAgIDxDVEFcbiAgICAgICAgaGVhZGluZz0nQXJlIHlvdSBpbnRlcmVzdGVkIGluIHBhcnRuZXJpbmcgd2l0aCB0aGUgTnVtYmVyIDEgQWZyaWNhbiBQYWRlbCBjb21wYW55PydcbiAgICAgICAgYm9keT0nQXQgdGhpcyB2ZXJ5IGVhcmx5IHN0YWdlIGluIG91ciBkZXZlbG9wbWVudCB3ZSBhcmUgaW50ZXJlc3RlZCBpbiBmaW5kaW5nIHBhcnRuZXJzIGZyb20gYWxsIHNlY3RvcnMgdG8gaW52ZXN0aWdhdGUgcGFydG5lcnNoaXAgcG9zc2liaWxpdGllcy4gSWYgdGhpcyBzb3VuZHMgbGlrZSB5b3UgLSBnZXQgaW4gdG91Y2guJ1xuICAgICAgICBidXR0b25UZXh0PSdDb250YWN0IFVzJ1xuICAgICAgICBidXR0b25Ubz0nI2NvbnRhY3QnXG4gICAgICAvPlxuXG4gICAgICB7LypcblxuXG4gPHNlY3Rpb24gY2xhc3NOYW1lPSdbY3RhXSAgcC12dy0zMiAgc3BhY2UteC0xMCBmbGV4ICc+XG4gICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPSd3LTEvNCc+XG4gICAgICAgICAgPGltZyBzcmM9e2luZm9JbWd9IC8+XG4gICAgICAgIDwvZmlndXJlPlxuICAgICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9J3ctMy80IHNwYWNlLXktNCAgJz5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTR4bCBmb250LWhlYWRpbmcgdGV4dC1zbGF0ZS05MDAgIGRhcms6dGV4dC13aGl0ZSc+XG4gICAgICAgICAgICBcdTIwMUMgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXG4gICAgICAgICAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlx1MjAxRFxuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgPC9ibG9ja3F1b3RlPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICA8c2VjdGlvblxuICAgICAgICBpZD0nbmV3cydcbiAgICAgICAgY2xhc3NOYW1lPSdbYWJvdXRdICBwLXZ3LTMyIGJnLXdoaXRlICBkYXJrOmJnLXNsYXRlLTkwMCB0ZXh0LWNlbnRlciBzcGFjZS15LXZ3LTYtbWluQHhsICdcbiAgICAgID5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC00eGwgZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwIGRhcms6dGV4dC13aGl0ZSAnPlxuICAgICAgICAgIE5ld3NcbiAgICAgICAgPC9oMj5cblxuICAgICAgICAvL1NFQVJDSCBGSUxURVJcbiAgICAgICAgPEZvcm0gY2xhc3NOYW1lPSdweS01Jz5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgbmFtZT0ndGl0bGUnXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdlbnRlciBzb21ldGhpbmcnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYm9yZGVyLTIgcm91bmRlZCBweS0yIHB4LTInXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tODAwIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWQgbXgtMidcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTZWFyY2h7JyAnfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICovfVxuXG4gICAgICB7LypcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTYgJz5cbiAgICAgICAgICB7ZmlsbXMuc2xpY2UoMCwgNCkubWFwKChmaWxtKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG92ZXI6c2hhZG93LTJ4bCBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6Zm9udC1ib2xkIGN1cnNvci1wb2ludGVyICBwLTQgIHNwYWNlLXktdnctNC1tYXhAbWQnPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhc3BlY3Qtc3F1YXJlIHJvdW5kZWQtbWQgICdcbiAgICAgICAgICAgICAgICBzcmM9e2ZpbG0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PXtmaWxtLnRpdGxlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2PntmaWxtLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9eycgJ31cbiAgICAgICAgPC9kaXY+XG5cblxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTYgJz5cbiAgICAgICAgICB7bmV3c1Bvc3RzPy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IG5ld3NQb3N0cy5zbGljZSgwLCA2KS5tYXAoKG5ld3M6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17bmV3cy5faWR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2hvdmVyOnNoYWRvdy0yeGwgaG92ZXI6c2NhbGUtMTA1IGhvdmVyOmZvbnQtYm9sZCBjdXJzb3ItcG9pbnRlciAgcC00ICBzcGFjZS15LXZ3LTQtbWF4QG1kJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IobmV3cy5mZWF0dXJlSW1hZ2UpLndpZHRoKDUwMCkudXJsKCl9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17bmV3cy50aXRsZX1cbiAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1zbGF0ZS05MDAgZGFyazp0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgICAgICAgICB0bz17bmV3cy5zbHVnLmN1cnJlbnR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtuZXdzLnRpdGxlfXsnICd9XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG5cblxuXG5cbiAgICAgICAgICAqL31cblxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgaWQ9J25ld3MnXG4gICAgICAgIGNsYXNzTmFtZT0nW2Fib3V0XSBtdC0yMCAgcC12dy0zMiBiZy13aGl0ZSAgZGFyazpiZy1zbGF0ZS05MDAgdGV4dC1jZW50ZXIgc3BhY2UteS12dy02LW1pbkB4bCAnXG4gICAgICA+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtNXhsIGZvbnQtaGVhZGluZyB0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUgJz5cbiAgICAgICAgICBNYW5hZ2VtZW50IFRlYW1cbiAgICAgICAgPC9oMj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNiAnPlxuICAgICAgICAgIHt0ZWFtTWVtYmVycz8ubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyB0ZWFtTWVtYmVycz8uc2xpY2UoMCwgNikubWFwKCh0ZWFtTWVtYmVyOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e3RlYW1NZW1iZXIuX2lkfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdob3ZlcjpzaGFkb3ctMnhsIGhvdmVyOnNjYWxlLTEwNSBob3Zlcjpmb250LWJvbGQgY3Vyc29yLXBvaW50ZXIgIHAtNCAgc3BhY2UteS12dy0yLW1heEBtZCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKHRlYW1NZW1iZXIuZmVhdHVyZUltYWdlKS53aWR0aCg1MDApLnVybCgpfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3RlYW1NZW1iZXIudGl0bGV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57dGVhbU1lbWJlci50aXRsZX0gPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1saWdodCB1cHBlcmNhc2UgdGV4dC14cyBvcGFjaXR5LTUwIG1iLTQnPlxuICAgICAgICAgICAgICAgICAgICB7dGVhbU1lbWJlci5yb2xlfXsnICd9XG4gICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1zbGF0ZS05MDAgZGFyazp0ZXh0LWdyZWVuLTUwMCB1bmRlcmxpbmUgY3Vyc29yLXBvaW50ZXInXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e3RlYW1NZW1iZXIubGlua2VkaW5Vcmx9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIExpbmtlZGluXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvblxuICAgICAgICBpZD0nbmV3cydcbiAgICAgICAgY2xhc3NOYW1lPSdbYWJvdXRdICBwLXZ3LTMyIGJnLWdyYXktMTAwICBkYXJrOmJnLXNsYXRlLTgwMCB0ZXh0LWNlbnRlciBzcGFjZS15LXZ3LTYtbWluQHhsICdcbiAgICAgID5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC01eGwgZm9udC1oZWFkaW5nIHRleHQtc2xhdGUtOTAwIGRhcms6dGV4dC13aGl0ZSAnPlxuICAgICAgICAgIEJvYXJkIG9mIERpcmVjdG9yc1xuICAgICAgICA8L2gyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdhcC02ICc+XG4gICAgICAgICAge2JvYXJkTWVtYmVycz8ubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBib2FyZE1lbWJlcnM/LnNsaWNlKDAsIDYpLm1hcCgoYm9hcmRNZW1iZXI6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17Ym9hcmRNZW1iZXIuX2lkfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdob3ZlcjpzaGFkb3ctMnhsIGhvdmVyOnNjYWxlLTEwNSBob3Zlcjpmb250LWJvbGQgY3Vyc29yLXBvaW50ZXIgIHAtNCAgc3BhY2UteS12dy0yLW1heEBtZCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKGJvYXJkTWVtYmVyLmZlYXR1cmVJbWFnZSkud2lkdGgoNTAwKS51cmwoKX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtib2FyZE1lbWJlci50aXRsZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdmb250LWJvbGQnPntib2FyZE1lbWJlci50aXRsZX0gPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1saWdodCB1cHBlcmNhc2UgdGV4dC14cyBvcGFjaXR5LTUwIG1iLTQnPlxuICAgICAgICAgICAgICAgICAgICB7Ym9hcmRNZW1iZXIuYm9hcmRQb3NpdGlvbn17JyAnfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtZ3JlZW4tNTAwIHVuZGVybGluZSBjdXJzb3ItcG9pbnRlcidcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17Ym9hcmRNZW1iZXIubGlua2VkaW5Vcmx9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIExpbmtlZGluXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvblxuICAgICAgICBpZD0nY29udGFjdCdcbiAgICAgICAgY2xhc3NOYW1lPSdbY29udGFjdF0gIGJnLXNsYXRlLTkwMCAgIHNwYWNlLXgtMTAgICBwLXZ3LTMyICBzcGFjZS15LTEwIG1kOnNwYWNlLXgtMTAgZmxleCBmbGV4LWNvbCAgdGV4dC13aGl0ZSAnXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPScgIG0tYXV0byAgdGV4dC1jZW50ZXIgbSBzcGFjZS15LXZ3LTYtbWluQHhsIG1kOnctMS8yICc+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC00eGwgZm9udC1oZWFkaW5nIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwICB2aWEtZ3JlZW4tNTAwIHRvLXllbGxvdy00MDAgJz5cbiAgICAgICAgICAgIENvbnRhY3QgVXNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYmFzZSc+XG4gICAgICAgICAgICBJZiB5b3UgYXJlIGFuIGludmVzdGVyLCBhIHBvdGVudGlhbCBwYXJ0bmVyIG9yIGFueW9uZSBpbnRlcmVzdGVkIGluXG4gICAgICAgICAgICBsZWFybmluZyBtb3JlIGFib3V0IFBhZGVsIEFmcmljYSwgeW91IGNhbiByZWFjaCB1cyBkaXJlY3RseSB3aXRoIHRoZVxuICAgICAgICAgICAgZm9sbG93aW5nIGRldGFpbHMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgc3BhY2UteC12dy00LW1pbkB4bCAgbWQ6aW5saW5lLWZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQtc2xhdGUtOTAwJz5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9J21haWx0bzpoZWxsb0BwYWRlbC5hZnJpY2EnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHktdnctNC1taW5AeGwtbWF4QDJ4bCBweC12dy00LW1pbkB4bC1tYXhAMnhsIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwICAgdG8teWVsbG93LTQwMCByb3VuZGVkLXhsIGZvbnQtYm9sZCBob3ZlcjpiZy1ncmFkaWVudC10by10bCBob3ZlcjpzY2FsZS0xMDUgc2hhZG93LTJ4bCdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRW1haWwgVXNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9J3RlbDowMDQ2NzM5Nzg3NzY0J1xuICAgICAgICAgICAgICBjbGFzc05hbWU9JyBweS12dy00LW1pbkB4bC1tYXhAMnhsIHB4LXZ3LTQtbWluQHhsLW1heEAyeGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS13aGl0ZSAgIHRvLWdyYXktMjAwIHJvdW5kZWQteGwgZm9udC1ib2xkIGhvdmVyOmJnLWdyYWRpZW50LXRvLXRsIGhvdmVyOnNjYWxlLTEwNSBzaGFkb3ctMnhsJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBUZWxlcGhvbmVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IGluZm9JbWcgZnJvbSAnLi4vaW1hZ2VzL2Fib3V0LXBhLmpwZyc7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgeyBQb3J0YWJsZVRleHQgfSBmcm9tICdAcG9ydGFibGV0ZXh0L3JlYWN0JztcblxuaW50ZXJmYWNlIEluZm9Db250ZW50IHtcbiAgZmxvdzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmZvKHByb3BzOiBJbmZvQ29udGVudCkge1xuICBjb25zdCB7IGFib3V0VGV4dCB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIGNvbnN0IG15UG9ydGFibGVUZXh0Q29tcG9uZW50cyA9IHtcbiAgICB0eXBlczoge1xuICAgICAgaW1hZ2U6ICh2YWx1ZTogYW55KSA9PiAoXG4gICAgICAgIDxpbWcgc3JjPXt2YWx1ZS5hc3NldH0ga2V5PXt2YWx1ZS5faWR9IGNsYXNzTmFtZT17dmFsdWUuYXNzZXR9PjwvaW1nPlxuICAgICAgKSxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIGlkPSdhYm91dCdcbiAgICAgIGNsYXNzTmFtZT17YFtjdGFdICBwLXZ3LTMyICBzcGFjZS15LTEwIG1kOnNwYWNlLXgtMTQgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyAke1xuICAgICAgICBwcm9wcy5mbG93ID09ICdsZWZ0JyA/ICcnIDogJyBtZDpmbGV4LXJvdy1yZXZlcnNlIHNwYWNlLXgtcmV2ZXJzZSdcbiAgICAgIH0gYH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6dy0yLzUgIHNwYWNlLXktNCAgJz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC01eGwgZm9udC1oZWFkaW5nJz57YWJvdXRUZXh0WzBdLnRpdGxlfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluLWNvbnRlbnQgc3BhY2UteS0yIHRleHQtbWQnPlxuICAgICAgICAgIHthYm91dFRleHRbMF0ub3ZlcnZpZXc/Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gYWJvdXRUZXh0WzBdLm92ZXJ2aWV3Lm1hcCgocGFyYWdyYXBoczogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgPFBvcnRhYmxlVGV4dFxuICAgICAgICAgICAgICAgICAga2V5PXtwYXJhZ3JhcGhzLl9pZH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtbcGFyYWdyYXBoc119XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXtteVBvcnRhYmxlVGV4dENvbXBvbmVudHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPSdtZDp3LTEvMiBiZy1zbGF0ZS0zMDAnPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT0ndy1mdWxsJyBzcmM9e2Fib3V0VGV4dFswXS5mZWF0dXJlSW1hZ2V9IC8+XG4gICAgICA8L2ZpZ3VyZT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFVBQVU7QUFBQSxNQUN2QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1B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
