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
var tailwind_default = "/build/_assets/tailwind-6ZWTSDIG.css";

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
    className: " md:text-transparent md:bg-clip-text md:bg-gradient-to-br from-green-300  via-green-500 to-slate-900 dark:to-yellow-300"
  }, "world's fastest sport"), " ", "meets the", " ", /* @__PURE__ */ React.createElement("span", {
    className: "md:text-transparent md:bg-clip-text md:bg-gradient-to-br from-yellow-300  via-yellow-500 to-slate-900 dark:to-green-300"
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
    className: "md:w-1/2 px-8 space-y-4"
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
    className: "space-y-3 text-xs "
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Kickoff Zoom Online "), " - 23rd August - 16.00-17.00 CEST -", /* @__PURE__ */ React.createElement("a", {
    className: "underline font-bold text-green-800",
    href: "https://www.eventbrite.com/e/when-the-fastest-growing-sport-meets-the-fastest-growing-continent-tickets-400567747917"
  }, "Eventbrite Registration")), /* @__PURE__ */ React.createElement("hr", {
    className: ""
  }), /* @__PURE__ */ React.createElement("h3", {
    className: "font-bold  text-md"
  }, "Local events planned between 23rd Aug and 9th Sep"), /* @__PURE__ */ React.createElement("p", {
    className: "italic"
  }, "Register your interest in the form below"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Stockholm "), " - date and time TBC"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Gothenburg "), " - date and time TBC"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Malm\xF6"), " - date and time TBC"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Helsingborg"), " - date and time TBC"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "J\xF6nk\xF6ping"), " - date and time TBC"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Copenhagen"), " - date and time TBC"))), /* @__PURE__ */ React.createElement(import_remix4.Form, {
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
  }, "Location"), /* @__PURE__ */ React.createElement("select", {
    id: "event",
    name: "event",
    className: "bg-gray-50 border border-gray-300 text-sm dark:text-slate-900   block w-full p-2.5    dark:focus:ring-blue-500 dark:focus:border-blue-500",
    required: true
  }, /* @__PURE__ */ React.createElement("option", {
    value: "stockholm"
  }, "Stockholm"), /* @__PURE__ */ React.createElement("option", {
    value: "gothenburg"
  }, "Gothenburg"), /* @__PURE__ */ React.createElement("option", {
    value: "malmo"
  }, "Malm\xF6"), /* @__PURE__ */ React.createElement("option", {
    value: "helsingborg"
  }, "Helsingborg"), /* @__PURE__ */ React.createElement("option", {
    value: "jonkoping"
  }, "J\xF6nk\xF6ping"), /* @__PURE__ */ React.createElement("option", {
    value: "copenhagen"
  }, "Copenhagen"))), /* @__PURE__ */ React.createElement("button", {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm9vdC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL2pvaW4tdXMudHN4IiwgIi4uL2FwcC9Db21wb25lbnRzL2N0YS50c3giLCAiLi4vYXBwL0NvbXBvbmVudHMvY2FtcGFpZ24taGVyby50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL19pbmRleC50c3giLCAiLi4vYXBwL0NvbXBvbmVudHMvaGVyby50c3giLCAiLi4vYXBwL2xpYi9zYW5pdHkvZ2V0Q2xpZW50LnRzIiwgIi4uL2FwcC9saWIvc2FuaXR5L2NvbmZpZy50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvJHNsdWcudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy9hYm91dC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvQ29tcG9uZW50cy9pbmZvLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvam9pbi11cy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvX2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy8kc2x1Zy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvYWJvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvam9pbi11c1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2pvaW4tdXNcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJqb2luLXVzXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvX2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvX2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiX2luZGV4XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfSxcbiAgXCJyb3V0ZXMvJHNsdWdcIjoge1xuICAgIGlkOiBcInJvdXRlcy8kc2x1Z1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIjpzbHVnXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvYWJvdXRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9hYm91dFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImFib3V0XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTRcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU1XG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGRvdGVudi5jb25maWcoKTtcblxuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKCc8IURPQ1RZUEUgaHRtbD4nICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGluayxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBBY3Rpb25GdW5jdGlvbixcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gJ3JlbWl4JztcbmltcG9ydCBoZXJvSW1nIGZyb20gJy4vaW1hZ2VzL3BhZGVsLWhlcm8uanBnJztcbmltcG9ydCBDb29raWVDb25zZW50IGZyb20gJ3JlYWN0LWNvb2tpZS1jb25zZW50JztcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdGFpbHdpbmQuY3NzJztcbmltcG9ydCBhcHBTdHlsZXMgZnJvbSAnLi9zdHlsZXMvYXBwLmNzcyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuL2ltYWdlcy9sb2dvLnN2Zyc7XG5pbXBvcnQgbG9nb0RhcmsgZnJvbSAnLi9pbWFnZXMvcGEtbG9nby1kYXJrLnN2Zyc7XG5pbXBvcnQgbG9nb0xpZ2h0IGZyb20gJy4vaW1hZ2VzL3BhLWxvZ28tbGlnaHQuc3ZnJztcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogJ1BhZGVsIEFmcmljYScgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfSxcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBhcHBTdHlsZXMgfSxcbiAgXTtcbn1cblxuZXhwb3J0IGNvbnN0IE5hdiA9IChzZXREYXJrTW9kZToge1xuICBzZXREYXJrTW9kZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xufSkgPT4ge1xuICBjb25zdCBkYXJrTW9kZVRvZ2dsZSA9ICgpID0+IHtcbiAgICAvL2NvbnNvbGUubG9nKHNldERhcmtNb2RlLnNldERhcmtNb2RlKTtcblxuICAgIHNldERhcmtNb2RlLnNldERhcmtNb2RlKChwcmV2KSA9PiAhcHJldik7XG4gICAgLy9zZXREYXJrTW9kZSgocHJldikgPT4gIXByZXYpO1xuICB9O1xuICBjb25zdCBkYXJrTW9kZSA9IHRydWU7XG5cbiAgY29uc3QgW2lzU2hydW5rLCBzZXRTaHJ1bmtdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHNldFNocnVuaygoaXNTaHJ1bmspID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFpc1NocnVuayAmJlxuICAgICAgICAgIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDIwIHx8XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMjApXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzU2hydW5rICYmXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPCA0ICYmXG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA8IDRcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzU2hydW5rO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW25hdmJhck9wZW4sIHNldE5hdmJhck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgLy9jb25zb2xlLmxvZyhuYXZiYXJPcGVuKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHNldE5hdmJhck9wZW4pO1xuICAgIHNldE5hdmJhck9wZW4oKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LypcbiAgICAgIDxuYXZcbiAgICAgICAgY2xhc3NOYW1lPXtgICAke1xuICAgICAgICAgIGlzU2hydW5rXG4gICAgICAgICAgICA/ICd0cmFuc2l0aW9uIGVhc2UtaW4tb3V0ICBtZDpiZy1vcGFjaXR5LTc1IGJhY2tkcm9wLWJsdXItbGcgei0xMCBweS0yIHRleHQteHMgICAgJ1xuICAgICAgICAgICAgOiAndHJhbnNpdGlvbiBlYXNlLWluLW91dCBtZDpiZy1vcGFjaXR5LTAgJ1xuICAgICAgICB9IGJnLXNsYXRlLTkwMCBib3JkZXItZ3JheS0yMDAgcHgtNCBzbTpweC0xMiBweS02IG1kOmZpeGVkIHctZnVsbCB6LTEwIHRleHQtYmxhY2sgYH1cbiAgICAgID4qL31cbiAgICAgIDxuYXYgY2xhc3NOYW1lPSdiZy1ub25lIGJvcmRlci1ncmF5LTIwMCBweC00IHNtOnB4LTEyIHB5LTYgdy1mdWxsIHotMTAgdGV4dC1ibGFjayAgICc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgZmxleCBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBteC1hdXRvJz5cbiAgICAgICAgICA8YSBocmVmPScvJyBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e2xvZ29EYXJrfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BibG9jayBkYXJrOmhpZGRlbiB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSAke1xuICAgICAgICAgICAgICAgIGlzU2hydW5rID8gJ2gtMTYnIDogJ21kOmgtMTYnXG4gICAgICAgICAgICAgIH0gaC0xNmB9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17bG9nb0xpZ2h0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoaWRkZW4gZGFyazpibG9jayAgdHJhbnNpdGlvbiAgIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSAke1xuICAgICAgICAgICAgICAgIGlzU2hydW5rID8gJ2gtMTYnIDogJ21kOmgtMTYnXG4gICAgICAgICAgICAgIH0gaC0xNmB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9XG4gICAgICAgICAgICBkYXRhLWNvbGxhcHNlLXRvZ2dsZT0nbW9iaWxlLW1lbnUnXG4gICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICBjbGFzc05hbWU9J2lubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBwLTIgbWwtMyB0ZXh0LXNtIHJvdW5kZWQtbGcgbWQ6aGlkZGVuIGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmF5LTIwMCBkYXJrOnRleHQtZ3JheS00MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmZvY3VzOnJpbmctZ3JheS02MDAnXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPSdtb2JpbGUtbWVudS0yJ1xuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD0nZmFsc2UnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5PcGVuIG1haW4gbWVudTwvc3Bhbj5cbiAgICAgICAgICAgIHtuYXZiYXJPcGVuID8gKFxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPScgdy02IGgtNidcbiAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXG4gICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDIwIDIwJ1xuICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBmaWxsUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICAgIGQ9J000LjI5MyA0LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgOC41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEwxMS40MTQgMTBsNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgMTEuNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw4LjU4NiAxMCA0LjI5MyA1LjcwN2ExIDEgMCAwMTAtMS40MTR6J1xuICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTYgaC02J1xuICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjAgMjAnXG4gICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgZD0nTTMgNWExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxMGExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxNWExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXonXG4gICAgICAgICAgICAgICAgICBjbGlwUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7XG4gICAgICAgICAgICAgIG5hdmJhck9wZW5cbiAgICAgICAgICAgICAgICA/ICdoLXNjcmVlbiB0ZXh0LTR4bCB0ZXh0LWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXInXG4gICAgICAgICAgICAgICAgOiAnaGlkZGVuJ1xuICAgICAgICAgICAgfSB3LWZ1bGwgbWQ6YmxvY2sgbWQ6dy1hdXRvYH1cbiAgICAgICAgICAgIGlkPSdtb2JpbGUtbWVudSdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sICBtdC0xMiBtZDptdC0wICAgbWQ6ZmxleC1yb3cgbWQ6c3BhY2UteC04ICAgdGV4dC1zbGF0ZS05MDAgZGFyazp0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvJz5Ib21lIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvam9pbi11cyc+Sm9pbiBVcyA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5mYWNlYm9vay5jb20vcGFkZWwuYWZyaWNhJyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke25hdmJhck9wZW4gPyAnaGlkZGVuJyA6ICd3LTcgaC03J30gYH1cbiAgICAgICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgICAgIGQ9J00yMiAxMmMwLTUuNTIzLTQuNDc3LTEwLTEwLTEwUzIgNi40NzcgMiAxMmMwIDQuOTkxIDMuNjU3IDkuMTI4IDguNDM4IDkuODc4di02Ljk4N2gtMi41NFYxMmgyLjU0VjkuNzk3YzAtMi41MDYgMS40OTItMy44OSAzLjc3Ny0zLjg5IDEuMDk0IDAgMi4yMzguMTk1IDIuMjM4LjE5NXYyLjQ2aC0xLjI2Yy0xLjI0MyAwLTEuNjMuNzcxLTEuNjMgMS41NjJWMTJoMi43NzNsLS40NDMgMi44OWgtMi4zM3Y2Ljk4OEMxOC4zNDMgMjEuMTI4IDIyIDE2Ljk5MSAyMiAxMnonXG4gICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke1xuICAgICAgICAgICAgICAgICAgICAgIG5hdmJhck9wZW5cbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2gtc2NyZWVuIHRleHQtNHhsIHRleHQtY2VudGVyIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2hpZGRlbidcbiAgICAgICAgICAgICAgICAgICAgfSBgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBGYWNlYm9va1xuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3BhZGVsLmFmcmljYS8nIGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7bmF2YmFyT3BlbiA/ICdoaWRkZW4nIDogJ3ctNyBoLTcnfSBgfVxuICAgICAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICAgICAgZD0nTTEyLjMxNSAyYzIuNDMgMCAyLjc4NC4wMTMgMy44MDguMDYgMS4wNjQuMDQ5IDEuNzkxLjIxOCAyLjQyNy40NjVhNC45MDIgNC45MDIgMCAwMTEuNzcyIDEuMTUzIDQuOTAyIDQuOTAyIDAgMDExLjE1MyAxLjc3MmMuMjQ3LjYzNi40MTYgMS4zNjMuNDY1IDIuNDI3LjA0OCAxLjA2Ny4wNiAxLjQwNy4wNiA0LjEyM3YuMDhjMCAyLjY0My0uMDEyIDIuOTg3LS4wNiA0LjA0My0uMDQ5IDEuMDY0LS4yMTggMS43OTEtLjQ2NSAyLjQyN2E0LjkwMiA0LjkwMiAwIDAxLTEuMTUzIDEuNzcyIDQuOTAyIDQuOTAyIDAgMDEtMS43NzIgMS4xNTNjLS42MzYuMjQ3LTEuMzYzLjQxNi0yLjQyNy40NjUtMS4wNjcuMDQ4LTEuNDA3LjA2LTQuMTIzLjA2aC0uMDhjLTIuNjQzIDAtMi45ODctLjAxMi00LjA0My0uMDYtMS4wNjQtLjA0OS0xLjc5MS0uMjE4LTIuNDI3LS40NjVhNC45MDIgNC45MDIgMCAwMS0xLjc3Mi0xLjE1MyA0LjkwMiA0LjkwMiAwIDAxLTEuMTUzLTEuNzcyYy0uMjQ3LS42MzYtLjQxNi0xLjM2My0uNDY1LTIuNDI3LS4wNDctMS4wMjQtLjA2LTEuMzc5LS4wNi0zLjgwOHYtLjYzYzAtMi40My4wMTMtMi43ODQuMDYtMy44MDguMDQ5LTEuMDY0LjIxOC0xLjc5MS40NjUtMi40MjdhNC45MDIgNC45MDIgMCAwMTEuMTUzLTEuNzcyQTQuOTAyIDQuOTAyIDAgMDE1LjQ1IDIuNTI1Yy42MzYtLjI0NyAxLjM2My0uNDE2IDIuNDI3LS40NjVDOC45MDEgMi4wMTMgOS4yNTYgMiAxMS42ODUgMmguNjN6bS0uMDgxIDEuODAyaC0uNDY4Yy0yLjQ1NiAwLTIuNzg0LjAxMS0zLjgwNy4wNTgtLjk3NS4wNDUtMS41MDQuMjA3LTEuODU3LjM0NC0uNDY3LjE4Mi0uOC4zOTgtMS4xNS43NDgtLjM1LjM1LS41NjYuNjgzLS43NDggMS4xNS0uMTM3LjM1My0uMy44ODItLjM0NCAxLjg1Ny0uMDQ3IDEuMDIzLS4wNTggMS4zNTEtLjA1OCAzLjgwN3YuNDY4YzAgMi40NTYuMDExIDIuNzg0LjA1OCAzLjgwNy4wNDUuOTc1LjIwNyAxLjUwNC4zNDQgMS44NTcuMTgyLjQ2Ni4zOTkuOC43NDggMS4xNS4zNS4zNS42ODMuNTY2IDEuMTUuNzQ4LjM1My4xMzcuODgyLjMgMS44NTcuMzQ0IDEuMDU0LjA0OCAxLjM3LjA1OCA0LjA0MS4wNThoLjA4YzIuNTk3IDAgMi45MTctLjAxIDMuOTYtLjA1OC45NzYtLjA0NSAxLjUwNS0uMjA3IDEuODU4LS4zNDQuNDY2LS4xODIuOC0uMzk4IDEuMTUtLjc0OC4zNS0uMzUuNTY2LS42ODMuNzQ4LTEuMTUuMTM3LS4zNTMuMy0uODgyLjM0NC0xLjg1Ny4wNDgtMS4wNTUuMDU4LTEuMzcuMDU4LTQuMDQxdi0uMDhjMC0yLjU5Ny0uMDEtMi45MTctLjA1OC0zLjk2LS4wNDUtLjk3Ni0uMjA3LTEuNTA1LS4zNDQtMS44NThhMy4wOTcgMy4wOTcgMCAwMC0uNzQ4LTEuMTUgMy4wOTggMy4wOTggMCAwMC0xLjE1LS43NDhjLS4zNTMtLjEzNy0uODgyLS4zLTEuODU3LS4zNDQtMS4wMjMtLjA0Ny0xLjM1MS0uMDU4LTMuODA3LS4wNTh6TTEyIDYuODY1YTUuMTM1IDUuMTM1IDAgMTEwIDEwLjI3IDUuMTM1IDUuMTM1IDAgMDEwLTEwLjI3em0wIDEuODAyYTMuMzMzIDMuMzMzIDAgMTAwIDYuNjY2IDMuMzMzIDMuMzMzIDAgMDAwLTYuNjY2em01LjMzOC0zLjIwNWExLjIgMS4yIDAgMTEwIDIuNCAxLjIgMS4yIDAgMDEwLTIuNHonXG4gICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke1xuICAgICAgICAgICAgICAgICAgICAgIG5hdmJhck9wZW5cbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2gtc2NyZWVuIHRleHQtNHhsIHRleHQtY2VudGVyIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2hpZGRlbidcbiAgICAgICAgICAgICAgICAgICAgfSBgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBJbnN0YWdyYW17JyAnfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGlkPSd0aGVtZS10b2dnbGUnXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZGFya01vZGVUb2dnbGV9XG4gICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1zbGF0ZS05MDAgZGFyazp0ZXh0LXdoaXRlIG1kOmhvdmVyOmJnLWdyYXktMTAwIG1kOmRhcms6aG92ZXI6Ymctc2xhdGUtOTAwICByb3VuZGVkLWxnIHRleHQtc20gJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgaWQ9J3RoZW1lLXRvZ2dsZS1kYXJrLWljb24nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtcbiAgICAgICAgICAgICAgICAgICAgbmF2YmFyT3BlbiA/ICdoaWRkZW4nIDogJ2Jsb2NrIGRhcms6aGlkZGVuIHctNyBoLTcnXG4gICAgICAgICAgICAgICAgICB9IGB9XG4gICAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjAgMjAnXG4gICAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTE3LjI5MyAxMy4yOTNBOCA4IDAgMDE2LjcwNyAyLjcwN2E4LjAwMSA4LjAwMSAwIDEwMTAuNTg2IDEwLjU4NnonPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICBpZD0ndGhlbWUtdG9nZ2xlLWxpZ2h0LWljb24nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtcbiAgICAgICAgICAgICAgICAgICAgbmF2YmFyT3BlbiA/ICdoaWRkZW4nIDogJ2hpZGRlbiBkYXJrOmJsb2NrIHctNyBoLTcnXG4gICAgICAgICAgICAgICAgICB9IGB9XG4gICAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjAgMjAnXG4gICAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD0nTTEwIDJhMSAxIDAgMDExIDF2MWExIDEgMCAxMS0yIDBWM2ExIDEgMCAwMTEtMXptNCA4YTQgNCAwIDExLTggMCA0IDQgMCAwMTggMHptLS40NjQgNC45NWwuNzA3LjcwN2ExIDEgMCAwMDEuNDE0LTEuNDE0bC0uNzA3LS43MDdhMSAxIDAgMDAtMS40MTQgMS40MTR6bTIuMTItMTAuNjA3YTEgMSAwIDAxMCAxLjQxNGwtLjcwNi43MDdhMSAxIDAgMTEtMS40MTQtMS40MTRsLjcwNy0uNzA3YTEgMSAwIDAxMS40MTQgMHpNMTcgMTFhMSAxIDAgMTAwLTJoLTFhMSAxIDAgMTAwIDJoMXptLTcgNGExIDEgMCAwMTEgMXYxYTEgMSAwIDExLTIgMHYtMWExIDEgMCAwMTEtMXpNNS4wNSA2LjQ2NEExIDEgMCAxMDYuNDY1IDUuMDVsLS43MDgtLjcwN2ExIDEgMCAwMC0xLjQxNCAxLjQxNGwuNzA3LjcwN3ptMS40MTQgOC40ODZsLS43MDcuNzA3YTEgMSAwIDAxLTEuNDE0LTEuNDE0bC43MDctLjcwN2ExIDEgMCAwMTEuNDE0IDEuNDE0ek00IDExYTEgMSAwIDEwMC0ySDNhMSAxIDAgMDAwIDJoMXonXG4gICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke1xuICAgICAgICAgICAgICAgICAgICBuYXZiYXJPcGVuXG4gICAgICAgICAgICAgICAgICAgICAgPyAnaC1zY3JlZW4gdGV4dC00eGwgdGV4dC1jZW50ZXIgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgIDogJ2hpZGRlbidcbiAgICAgICAgICAgICAgICAgIH0gYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBUb2dnbGUgRGFyayBNb2RlXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPSdwLTQgIHNtOnAtOCAgYmctd2hpdGUgZGFyazpiZy1zbGF0ZS05MDAgZGFyazpiZy1vcGFjaXR5LTc1IGJnLW9wYWNpdHktMjUgdGV4dC1zbGF0ZS05MDAgZGFyazp0ZXh0LXdoaXRlJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbTpmbGV4IHNtOml0ZW1zLWNlbnRlciBzbTpqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtc20gc206dGV4dC1jZW50ZXIgJz5cbiAgICAgICAgICBcdTAwQTkgMjAyMnsnICd9XG4gICAgICAgICAgPGEgaHJlZj0nIycgdGFyZ2V0PSdfYmxhbmsnIGNsYXNzTmFtZT0naG92ZXI6dW5kZXJsaW5lJz5cbiAgICAgICAgICAgIFBhZGVsIEFmcmljYVx1MjEyMlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICAuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbXQtNCBzcGFjZS14LTYgc206anVzdGlmeS1jZW50ZXIgc206bXQtMCc+XG4gICAgICAgICAgPGEgaHJlZj0nIycgY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgVGVybXMgJiBDb25kaXRpb25zXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGhyZWY9JyMnIGNsYXNzTmFtZT0nICc+XG4gICAgICAgICAgICBQcml2YWN5IFBvbGljeVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBocmVmPScjJyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICBJbnZlc3RvcnNcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2RhcmtNb2RlLCBzZXREYXJrTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPSdlbicgY2xhc3NOYW1lPXtgICR7ZGFya01vZGUgPyAnJyA6ICdkYXJrJ30gc2Nyb2xsLXNtb290aGB9PlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MScgLz5cbiAgICAgICAgPHNjcmlwdD48L3NjcmlwdD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYCAke1xuICAgICAgICAgICAgZGFya01vZGVcbiAgICAgICAgICAgICAgPyAnIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LDEpJ1xuICAgICAgICAgICAgICA6ICcgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDE1LCAyMywgNDIsMSknXG4gICAgICAgICAgfSAgICAgLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkpLHVybCgnJHtoZXJvSW1nfScpYCxcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUgIGJnLWNvdmVyIGJnLWZpeGVkICAgJ1xuICAgICAgPlxuICAgICAgICA8TmF2IHNldERhcmtNb2RlPXtzZXREYXJrTW9kZX0gLz5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDxDb29raWVDb25zZW50XG4gICAgICAgICAgbG9jYXRpb249J2JvdHRvbSdcbiAgICAgICAgICBidXR0b25UZXh0PSdBY2NlcHQnXG4gICAgICAgICAgY29va2llTmFtZT0ncGFkZWwtYWZyaWNhLWNvb2tpZSdcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnIzJCMzczQicgfX1cbiAgICAgICAgICBidXR0b25TdHlsZT17eyBjb2xvcjogJyM0ZTUwM2InLCBmb250U2l6ZTogJzFyZW0nIH19XG4gICAgICAgICAgZXhwaXJlcz17MTUwfVxuICAgICAgICA+XG4gICAgICAgICAgVGhpcyB3ZWJzaXRlIHVzZXMgY29va2llcyB0byBlbmhhbmNlIHRoZSB1c2VyIGV4cGVyaWVuY2UueycgJ31cbiAgICAgICAgPC9Db29raWVDb25zZW50PlxuXG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPSdlbic+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgICA8c2NyaXB0Pjwvc2NyaXB0PlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT0ndGV4dC1zbGF0ZS05MDAgZmxleCBoLXNjcmVlbiB3LWZ1bGwganVzdGlmeS1jZW50ZXIgYWxpZ24tbWlkZGxlIG0tYXV0byAgJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtNHhsIG0tYXV0byB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgPHA+XHVEODNEXHVERTMzIE9vcHMgLSBQYWdlIE5vdCBGb3VuZDwvcD5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9J3VuZGVybGluZSB0ZXh0LWdyZWVuLTcwMCcgdG89Jy8nPlxuICAgICAgICAgICAgR28gSG9tZVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBGb3JtLCB1c2VBY3Rpb25EYXRhLCBMaW5rIH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgQ1RBIGZyb20gJ34vQ29tcG9uZW50cy9jdGEnO1xuaW1wb3J0IEhlcm8gZnJvbSAnfi9Db21wb25lbnRzL2NhbXBhaWduLWhlcm8nO1xuaW1wb3J0IEJnSW1nIGZyb20gJ34vaW1hZ2VzL3dlYi1iZy5qcGcnO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgbGV0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBsZXQgZW1haWwgPSBmb3JtRGF0YS5nZXQoJ2VtYWlsJyk7XG4gIGxldCBuYW1lID0gZm9ybURhdGEuZ2V0KCduYW1lJyk7XG4gIGxldCBjb21wYW55ID0gZm9ybURhdGEuZ2V0KCdjb21wYW55Jyk7XG4gIGxldCBldmVudCA9IGZvcm1EYXRhLmdldCgnZXZlbnQnKTtcblxuICAvL3Byb2Nlc3MuZW52LkNPTlZFUlRLSVRfS0VZID0gJ2xHZjZrT25GT09DLVlPaWtaRF9ZUHcnO1xuXG4gIGNvbnN0IEFQSV9LRVkgPSAnbEdmNmtPbkZPT0MtWU9pa1pEX1lQdyc7XG4gIGNvbnN0IEZPUk1fSUQgPSAnMzAyMjA1NCc7XG4gIGNvbnN0IEFQSSA9ICdodHRwczovL2FwaS5jb252ZXJ0a2l0LmNvbS92My8nO1xuXG4gIGxldCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUEl9L2Zvcm1zLyR7Rk9STV9JRH0vc3Vic2NyaWJlYCwge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIGZpcnN0X25hbWU6IG5hbWUsXG4gICAgICBmaWVsZHM6IHsgY29tcGFueTogY29tcGFueSwgZXZlbnQ6IGV2ZW50IH0sXG4gICAgICBhcGlfa2V5OiBBUElfS0VZLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgfSxcbiAgfSk7XG5cbiAgLy9jb25zb2xlLmxvZyh7IGVtYWlsIH0sIHsgbmFtZSB9LCB7IGNvbXBhbnkgfSk7XG4gIHJldHVybiByZXMuanNvbigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSm9pblVzKCkge1xuICBsZXQgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKTtcbiAgbGV0IHN0YXRlOiAnaWRsZScgfCAnc3VjY2VzcycgfCAnZXJyb3InID0gYWN0aW9uRGF0YT8uc3Vic2NyaXB0aW9uXG4gICAgPyAnc3VjY2VzcydcbiAgICA6IGFjdGlvbkRhdGE/LmVycm9yXG4gICAgPyAnZXJyb3InXG4gICAgOiAnaWRsZSc7XG4gIGNvbnN0IGRhcmtNb2RlID0gZmFsc2U7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYCB1cmwoJyR7QmdJbWd9JylgLFxuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9J3RleHQtc2xhdGUtOTAwIC1tdC0zMiBkYXJrOnRleHQtd2hpdGUgIG1kOmJnLWZpeGVkIG1kOmJnLWNlbnRlciBiZy1bY2VudGVyX3JpZ2h0Xy0xN3JlbV0gIGJnLWNvdmVyICAgJ1xuICAgICAgPlxuICAgICAgICA8SGVyb1xuICAgICAgICAgIGhlYWRpbmc9J1doYXQgaGFwcGVucyB3aGVuIHRoZSBmYXN0ZXN0IHNwb3J0IG1lZXRzIHRoZSBmYXN0ZXN0IGNvbnRpbmVudD9cbiAgICAgICAgICAgICdcbiAgICAgICAgICBib2R5PSdKb2luIFVzIHRvIEZpbmQgb3V0XG4gICAgICAgICAgICAnXG4gICAgICAgICAgYnV0dG9uMVRleHQ9J0xlYXJuIE1vcmUnXG4gICAgICAgICAgYnV0dG9uMVRvPScjYWJvdXQnXG4gICAgICAgICAgYnV0dG9uMlRleHQ9J1dhbnQgdG8gUGFydG5lcj8nXG4gICAgICAgICAgYnV0dG9uMlRvPScjYWJvdXQnXG4gICAgICAgICAgaW1nU3JjPScnXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbXktYXV0byBiZy13aGl0ZSBtZDpwLTMyIHB5LTEyIHB4LTMgZmxleCBtZDpmbGV4LXJvdyBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1ibGFjayAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6dy0xLzIgcHgtOCBzcGFjZS15LTQnPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtNXhsICBmb250LWhlYWRpbmcgICc+Sm9pbiBQYWRlbCBBZnJpY2E8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFjZS15LTIgJz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBTbywgd2hhdCBoYXBwZW5zIHdoZW4gdGhlIGZhc3Rlc3QgZ3Jvd2luZyBzcG9ydCBtZWV0cyB0aGUgZmFzdGVzdFxuICAgICAgICAgICAgICBncm93aW5nIGNvbnRpbmVudD8gSW5jcmVkaWJsZSwgZXhjaXRpbmcsIGxpZmUgY2hhbmdpbmcgdGhpbmdzLiBPZlxuICAgICAgICAgICAgICBjb3Vyc2UuIEVzcGVjaWFsbHkgSWYgeW91IGFyZSBvbmUgb2YgdGhlIGNhbm55IHBlb3BsZSBzaGFycCBlbm91Z2hcbiAgICAgICAgICAgICAgdG8gZ2V0IGludm9sdmVkIGVhcmx5LnsnICd9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVGhpcyBpcyBhbiBvcHBvcnR1bml0eSB0byBiZSBhIHBhcnQgb2YgYSB0cmFuc2Zvcm1hdGl2ZSBqb3VybmV5LlxuICAgICAgICAgICAgICBUbyBiZSBhIHBhcnQgb2YgdGhlIHByb2Nlc3Mgb2YgYnJpbmdpbmcgYSBuZXcgc3BvcnQgYW5kIGxpZmVzdHlsZVxuICAgICAgICAgICAgICBhY3Rpdml0eSB0byBhbiBlbnRpcmUgY29udGluZW50LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZm9udC1oZWFkaW5nIHRleHQtMnhsJz5cbiAgICAgICAgICAgICAgU29tZSBiYWNrZ3JvdW5kIGluZm9ybWF0aW9uXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFBhZGVsIGhhcyBzZWVuIGluY3JlZGlibGUgZ3Jvd3RoIGluIEV1cm9wZSBvdmVyIHRoZSBsYXN0IGRlY2FkZS5cbiAgICAgICAgICAgICAgVGhlIGVhc2Ugb2YgcGxheSBoYXMgZW5hYmxlZCBwYWRlbCB0byBzY2FsZSBhbmQgbWF0dXJlIGZhc3RlciB0aGFuXG4gICAgICAgICAgICAgIGFueSBvdGhlciBzcG9ydC4gU28gbXVjaCBzbyB0aGF0IGl0IGlzIHBsYW5uZWQgdG8gYmUgYW4gZXhoaWJpdGlvblxuICAgICAgICAgICAgICBzcG9ydCBhdCB0aGUgT2x5bXBpY3MgMjAyNCBhbmQgcG90ZW50aWFsbHkgYW4gb2x5bXBpYyBzcG9ydCBpblxuICAgICAgICAgICAgICAyMDI4LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LWJvbGQnPlxuICAgICAgICAgICAgICBQYWRlbCBBZnJpY2EgaXMgYSBjb21wYW55IHRoYXQgaXMgcHJlcGFyZWQgYW5kIGNvbW1pdHRlZCB0b1xuICAgICAgICAgICAgICBicmluZ2luZyB0aGUgc3BvcnQgdG8gQWZyaWNhLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEJhY2tlZCBieSBOb3JkaWMtQWZyaWNhbiB2ZW50dXJlIGNhcGl0YWwgY29tcGFueXsnICd9XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ndW5kZXJsaW5lIGZvbnQtYm9sZCcgaHJlZj0naHR0cHM6Ly9iYW1id2Fncm91cC5jb20nPlxuICAgICAgICAgICAgICAgIEJhbWJ3YSBHcm91cFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICwgYW5kIGxlZCBieSB0aGVpciBmb3VuZGVyIGFuZCBDRU8sIE1pY2hhZWwgTWF0aGllc2VuLCBQYWRlbFxuICAgICAgICAgICAgICBBZnJpY2Egd2FzIGZvdW5kZWQgaW4gMjAyMSBpbiBwYXJ0bmVyc2hpcCB3aXRoIHR3byBvZlxuICAgICAgICAgICAgICBTY2FuZGluYXZpYSdzIGxhcmdlc3QgcGFkZWwgYnVzaW5lc3NlcyAtIFN3ZWRlbidzeycgJ31cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3VuZGVybGluZSBmb250LWJvbGQnXG4gICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cucGFkZWx0b3RhbC5zZS8nXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQYWRlbCBUb3RhbFxuICAgICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgICAgYW5kIERlbm1hcmsnc3snICd9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1bmRlcmxpbmUgZm9udC1ib2xkJ1xuICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vc3BvcnR5ZnJpZW5kcy5jb20vZW4vaG9tZSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNwb3J0eWZyaWVuZHNcbiAgICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICAgIChPd25lcnMgb2YgdGhleycgJ31cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3VuZGVybGluZSBmb250LWJvbGQnXG4gICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cucGFkZWxpcS5pby9kYSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFBhZGVsIGlRXG4gICAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgICBzb2Z0d2FyZSkuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgV2l0aCBwYXJ0bmVycyBvbiB0aGUgZ3JvdW5kIGluIEdoYW5hLCBLZW55YSwgUndhbmRhLCBMaWJlcmlhIGFuZFxuICAgICAgICAgICAgICBzZXZlcmFsIG90aGVyIEFmcmljYW4gbmF0aW9ucywgUGFkZWwgQWZyaWNhIGlzIHBlcmZlY3RseSBwbGFjZWQgdG9cbiAgICAgICAgICAgICAgbGVhZCB0aGUgY2hhcmdlIG9mIHBpb25lZXJpbmcgcGFkZWwgYWNyb3NzIEFmcmljYS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2ZvbnQtaGVhZGluZyB0ZXh0LTJ4bCc+V2hhdCBkbyB3ZSB3YW50IGZyb20geW91PzwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtYm9sZCBpdGFsaWMnPlxuICAgICAgICAgICAgICBXZSBhcmUgbG9va2luZyBmb3IgaW52ZXN0b3JzIGVhZ2VyIHRvIGJlIGEgcGFydCBvZiBhbiBleGNpdGluZyBhbmRcbiAgICAgICAgICAgICAgZ3JvdW5kYnJlYWtpbmcgaW52ZXN0bWVudC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBXZSBhcmUganVzdCBhYm91dCB0byBzZXQgb2ZmIG9uIGEgcm9hZHNob3cgd2hlcmUgd2Ugd2lsbCBwcmVzZW50XG4gICAgICAgICAgICAgIHRvIGF1ZGllbmNlcyBhY3Jvc3Mgb25saW5lIGFuZCBhY3Jvc3MgRGVubWFyayBhbmQgU3dlZGVuIChzZWVcbiAgICAgICAgICAgICAgZGF0ZXMgYW5kIGxvY2F0aW9ucyBvbiB0aGlzIHBhZ2UpLlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdmb250LWJvbGQgbXQtNCAnPlxuICAgICAgICAgICAgICAgIFdlIHdvdWxkIGxpa2UgeW91IHRvIGpvaW4gdXMgdG8gbGVhcm46XG4gICAgICAgICAgICAgIDwvaDM+eycgJ31cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nIGxpc3QtZGlzYyBsaXN0LWluc2lkZSc+XG4gICAgICAgICAgICAgICAgPGxpPldoeSBhcmUgd2UgY29tbWl0dGVkIHRvIGJyaW5naW5nIHBhZGVsIHRvIEFmcmljYS48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5XaG8gYXJlIHRoZSB0ZWFtIGJlaGluZCBQYWRlbCBBZnJpY2EuPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+V2hhdCBtYWtlcyB1cyBzbyBjYXBhYmxlIG9mIHN1Y2NlZWRpbmcuIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPiBIb3csIGFuZCB3aHkgeW91IGNhbiBqb2luIHVzLjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIG1kOnctMi81IGgtZml0ICAgc3BhY2UteS0yICAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTgnPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1oZWFkaW5nIHBiLTQnPlVwY29taW5nIGV2ZW50czwvaDI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdzcGFjZS15LTMgdGV4dC14cyAnPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5LaWNrb2ZmIFpvb20gT25saW5lIDwvc3Ryb25nPiAtIDIzcmQgQXVndXN0IC1cbiAgICAgICAgICAgICAgICAxNi4wMC0xNy4wMCBDRVNUIC1cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1bmRlcmxpbmUgZm9udC1ib2xkIHRleHQtZ3JlZW4tODAwJ1xuICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cuZXZlbnRicml0ZS5jb20vZS93aGVuLXRoZS1mYXN0ZXN0LWdyb3dpbmctc3BvcnQtbWVldHMtdGhlLWZhc3Rlc3QtZ3Jvd2luZy1jb250aW5lbnQtdGlja2V0cy00MDA1Njc3NDc5MTcnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRXZlbnRicml0ZSBSZWdpc3RyYXRpb25cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxociBjbGFzc05hbWU9Jyc+PC9ocj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nZm9udC1ib2xkICB0ZXh0LW1kJz5cbiAgICAgICAgICAgICAgICBMb2NhbCBldmVudHMgcGxhbm5lZCBiZXR3ZWVuIDIzcmQgQXVnIGFuZCA5dGggU2VwXG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0naXRhbGljJz5SZWdpc3RlciB5b3VyIGludGVyZXN0IGluIHRoZSBmb3JtIGJlbG93PC9wPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5TdG9ja2hvbG0gPC9zdHJvbmc+IC0gZGF0ZSBhbmQgdGltZSBUQkNcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+R290aGVuYnVyZyA8L3N0cm9uZz4gLSBkYXRlIGFuZCB0aW1lIFRCQ1xuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5NYWxtXHUwMEY2PC9zdHJvbmc+IC0gZGF0ZSBhbmQgdGltZSBUQkNcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+SGVsc2luZ2Jvcmc8L3N0cm9uZz4gLSBkYXRlIGFuZCB0aW1lIFRCQ1xuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5KXHUwMEY2bmtcdTAwRjZwaW5nPC9zdHJvbmc+IC0gZGF0ZSBhbmQgdGltZSBUQkNcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+Q29wZW5oYWdlbjwvc3Ryb25nPiAtIGRhdGUgYW5kIHRpbWUgVEJDXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCAgIG15LTYgdGV4dC1zbGF0ZS05MDAgIGRhcms6dGV4dC13aGl0ZSBtZDpteS1hdXRvIHNwYWNlLXktdnctNC1taW5AeGwgYmctd2hpdGUgZGFyazpiZy1zbGF0ZS05MDAgICBiZy1vcGFjaXR5LTUwIGJhY2tkcm9wLWJsdXItbGcgc2hhZG93LTJ4bFx0IHAtNiAgICBoLWZpdCAnXG4gICAgICAgICAgICBtZXRob2Q9J3Bvc3QnXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj17c3RhdGUgPT09ICdzdWNjZXNzJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1oZWFkaW5nIHRleHQtbGcgIHVwcGVyY2FzZSc+XG4gICAgICAgICAgICAgICAgUmVnaXN0ZXIgZm9yIGEgbG9jYWwgZXZlbnRcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNic+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnIGNsYXNzTmFtZT0nYmxvY2sgIHRleHQteHMgICAnPlxuICAgICAgICAgICAgICAgICAgWW91ciBOYW1lXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICBuYW1lPSduYW1lJ1xuICAgICAgICAgICAgICAgICAgaWQ9J25hbWUnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBkYXJrOnRleHQtc2xhdGUtOTAwIHRleHQtc20gZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41IDAgIGRhcms6Zm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMCdcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdKb2UgQmxvZ2dzJ1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCcgY2xhc3NOYW1lPSdibG9jayB0ZXh0LXhzICAnPlxuICAgICAgICAgICAgICAgICAgWW91ciBlbWFpbFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgaWQ9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1zbSBkYXJrOnRleHQtc2xhdGUtOTAwICBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAnXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nbmFtZUBtYWlsLmNvbSdcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi02Jz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nY29tcGFueScgY2xhc3NOYW1lPSdibG9jayB0ZXh0LXhzICc+XG4gICAgICAgICAgICAgICAgICBZb3VyIENvbXBhbnlcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgIGlkPSdjb21wYW55J1xuICAgICAgICAgICAgICAgICAgbmFtZT0nY29tcGFueSdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtc20gZGFyazp0ZXh0LXNsYXRlLTkwMCAgIGJsb2NrIHctZnVsbCBwLTIuNSAgICBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAnXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQWNtZSBJbmMnXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNic+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2NvbXBhbnknIGNsYXNzTmFtZT0nYmxvY2sgdGV4dC14cyAnPlxuICAgICAgICAgICAgICAgICAgTG9jYXRpb25cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgIGlkPSdldmVudCdcbiAgICAgICAgICAgICAgICAgIG5hbWU9J2V2ZW50J1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1zbSBkYXJrOnRleHQtc2xhdGUtOTAwICAgYmxvY2sgdy1mdWxsIHAtMi41ICAgIGRhcms6Zm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMCdcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nc3RvY2tob2xtJz5TdG9ja2hvbG08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2dvdGhlbmJ1cmcnPkdvdGhlbmJ1cmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J21hbG1vJz5NYWxtXHUwMEY2PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdoZWxzaW5nYm9yZyc+SGVsc2luZ2Jvcmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2pvbmtvcGluZyc+Slx1MDBGNm5rXHUwMEY2cGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nY29wZW5oYWdlbic+Q29wZW5oYWdlbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nIHB5LTQgcHgtNiBiZy1ncmFkaWVudC10by1iciBmcm9tLWdyZWVuLTMwMCB0by1zbGF0ZS05MDAgZGFyazp0by15ZWxsb3ctMzAwIHRleHQtd2hpdGUgZGFyazp0ZXh0LXNsYXRlLTkwMCBmb250LWhlYWRpbmcgdXBwZXJjYXNlIGhvdmVyOmJnLWdyYWRpZW50LXRvLXRsIGhvdmVyOnNjYWxlLTEwNSBzaGFkb3ctMnhsICdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICA8cD57YWN0aW9uRGF0YT8uZXJyb3IgPyBhY3Rpb25EYXRhLm1lc3NhZ2UgOiA8PiAmbmJzcDsgPC8+fTwvcD5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgIG15LTEwIHRleHQtc2xhdGUtOTAwICBkYXJrOnRleHQtd2hpdGUgbWQ6bXktYXV0byBzcGFjZS15LXZ3LTQtbWluQHhsIGJnLXdoaXRlIGRhcms6Ymctc2xhdGUtOTAwIGRhcms6Ymctb3BhY2l0eS03NSAgYmctb3BhY2l0eS01MCBiYWNrZHJvcC1ibHVyLWxnIHNoYWRvdy0yeGxcdCBwLTYgICAgaC1maXQgJ1xuICAgICAgICAgICAgLy9jbGFzc05hbWU9eyBpZiAoc3RhdGUgPT09IFwic3VjZXNzXCIpICB7J2hpZGRlbid9IGVsc2V7J2Jsb2NrJ30gfVxuICAgICAgICAgICAgYXJpYS1oaWRkZW49e3N0YXRlICE9PSAnc3VjY2Vzcyd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1oZWFkaW5nJz5cdUQ4M0RcdURFODAgWW91J3JlIFJlZ2lzdGVyZWQhPC9oMj5cblxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFRoYW5rcyBmb3IgcmVnaXN0ZXJpbmcgZm9yIHRoaXMgZXZlbnQsIHlvdSB3aWxsIGJlIHNlbnQgYW4gZW1haWxcbiAgICAgICAgICAgICAgd2l0aCBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSd1bmRlcmxpbmUgdGV4dC1ncmVlbi0zMDAnIHRvPScuJz5cbiAgICAgICAgICAgICAgU3RhcnQgT3ZlclxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FzaWRlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPENUQVxuICAgICAgICBoZWFkaW5nPSdBcmUgeW91IGludGVyZXN0ZWQgaW4gcGFydG5lcmluZyB3aXRoIHRoZSBOdW1iZXIgMSBBZnJpY2FuIFBhZGVsIGNvbXBhbnk/J1xuICAgICAgICBib2R5PSdBdCB0aGlzIHZlcnkgZWFybHkgc3RhZ2UgaW4gb3VyIGRldmVsb3BtZW50IHdlIGFyZSBpbnRlcmVzdGVkIGluIGZpbmRpbmcgcGFydG5lcnMgZnJvbSBhbGwgc2VjdG9ycyB0byBpbnZlc3RpZ2F0ZSBwYXJ0bmVyc2hpcCBwb3NzaWJpbGl0aWVzLiBJZiB0aGlzIHNvdW5kcyBsaWtlIHlvdSAtIGdldCBpbiB0b3VjaC4nXG4gICAgICAgIGJ1dHRvblRleHQ9J0NvbnRhY3QgVXMnXG4gICAgICAgIGJ1dHRvblRvPScjY29udGFjdCdcbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4JztcblxuaW50ZXJmYWNlIENUQUNvbnRlbnQge1xuICBoZWFkaW5nOiBzdHJpbmc7XG4gIGJvZHk6IHN0cmluZztcbiAgYnV0dG9uVGV4dDogc3RyaW5nO1xuICBidXR0b25Ubzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDVEEocHJvcHM6IENUQUNvbnRlbnQpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgaWQ9J3BhcnRuZXJzJ1xuICAgICAgY2xhc3NOYW1lPSdbY3RhXSBwLTIwIG1kOm14LTIwIGJnLXNsYXRlLTkwMCAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1taWRkbGUgcm91bmRlZC1tZCBzaGFkb3ctMnhsIHRleHQtd2hpdGUnXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9JyAgbS1hdXRvICB0ZXh0LWNlbnRlciAgc3BhY2UteS12dy02LW1pbkB4bCBtZDp3LTMvNCAgJz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC00eGwgZm9udC1oZWFkaW5nIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwICB2aWEtZ3JlZW4tNTAwIHRvLXllbGxvdy00MDAgJz5cbiAgICAgICAgICB7cHJvcHMuaGVhZGluZ31cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdiYXNlJz57cHJvcHMuYm9keX08L3A+XG4gICAgICAgIDxMaW5rIHRvPXtwcm9wcy5idXR0b25Ub30gY2xhc3NOYW1lPScgaW5saW5lLWZsZXggJz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncHktNCBweC02IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwICB2aWEtZ3JlZW4tNTAwIHRvLXllbGxvdy00MDAgcm91bmRlZC14bCB0ZXh0LWJsYWNrIGZvbnQtYm9sZCBob3ZlcjpiZy1ncmFkaWVudC10by10bCBob3ZlcjpzY2FsZS0xMDUgc2hhZG93LTJ4bCc+XG4gICAgICAgICAgICB7cHJvcHMuYnV0dG9uVGV4dH1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIiwgImltcG9ydCBoZXJvSW1nIGZyb20gJy4uL2ltYWdlcy9wYWRlbC1oZXJvLmpwZyc7XG5pbXBvcnQgcGFkZWxJbWcgZnJvbSAnLi4vaW1hZ2VzL3BhcnRuZXJzL3BhZGVsdG90YWwtbG9nby5wbmcnO1xuaW1wb3J0IHBhZGVsSXEgZnJvbSAnLi4vaW1hZ2VzL3BhcnRuZXJzL3BhZGVsLWlxLnBuZyc7XG5cbmludGVyZmFjZSBIZXJvQ29udGVudCB7XG4gIGhlYWRpbmc6IHN0cmluZztcbiAgYm9keTogc3RyaW5nO1xuICBidXR0b24xVGV4dDogc3RyaW5nO1xuICBidXR0b24xVG86IHN0cmluZztcbiAgYnV0dG9uMlRleHQ6IHN0cmluZztcbiAgYnV0dG9uMlRvOiBzdHJpbmc7XG4gIGltZ1NyYzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvKHByb3BzOiBIZXJvQ29udGVudCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9J1toZXJvXSBjb250YWluZXIgbXgtYXV0byBiZy1ub25lIG1kOmgtc2NyZWVuIG1kOnB0LTMyIHB5LTQ0IG1kOnBiLTEyICBtZDotbXQtMTYgcHgtOCBzbTpweC0xMiBmbGV4ICBmbGV4LWNvbCBtZDpmbGV4LXJvdyBhbGlnbi1taWRkbGUgbWQ6anVzdGlmeS1iZXR3ZWVuICBiZy1jb3ZlciAgbWQ6c3BhY2UteC0xMlx0ICc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgbWQ6dy0zLzUgbXktYXV0byBzcGFjZS15LXZ3LTItbWluQHhsIG1kOnB5LTE2ICBmb250LWhlYWRpbmcgdXBwZXJjYXNlICAnPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC0yeGwnPldoYXQgaGFwcGVucyB3aGVuPC9wPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtNHhsIG1kOnRleHQtNnhsICc+XG4gICAgICAgICAgICBUaGV7JyAnfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPScgbWQ6dGV4dC10cmFuc3BhcmVudCBtZDpiZy1jbGlwLXRleHQgbWQ6YmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgIHZpYS1ncmVlbi01MDAgdG8tc2xhdGUtOTAwIGRhcms6dG8teWVsbG93LTMwMCc+XG4gICAgICAgICAgICAgIHdvcmxkJ3MgZmFzdGVzdCBzcG9ydFxuICAgICAgICAgICAgPC9zcGFuPnsnICd9XG4gICAgICAgICAgICBtZWV0cyB0aGV7JyAnfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtZDp0ZXh0LXRyYW5zcGFyZW50IG1kOmJnLWNsaXAtdGV4dCBtZDpiZy1ncmFkaWVudC10by1iciBmcm9tLXllbGxvdy0zMDAgIHZpYS15ZWxsb3ctNTAwIHRvLXNsYXRlLTkwMCBkYXJrOnRvLWdyZWVuLTMwMCc+XG4gICAgICAgICAgICAgIHdvcmxkJ3MgZmFzdGVzdCBjb250aW5lbnRcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgID9cbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3LmV2ZW50YnJpdGUuY29tL2Uvd2hlbi10aGUtZmFzdGVzdC1ncm93aW5nLXNwb3J0LW1lZXRzLXRoZS1mYXN0ZXN0LWdyb3dpbmctY29udGluZW50LXRpY2tldHMtNDAwNTY3NzQ3OTE3J1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdtdC02XG4gICAgICAgICAgICAgaW5saW5lLWJsb2NrIHRleHQtbGcgcHktNCBweC02IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwIHRvLXNsYXRlLTkwMCBkYXJrOnRvLXllbGxvdy0zMDAgdGV4dC13aGl0ZSBkYXJrOnRleHQtc2xhdGUtOTAwIGZvbnQtaGVhZGluZyB1cHBlcmNhc2UgaG92ZXI6YmctZ3JhZGllbnQtdG8tdGwgaG92ZXI6c2NhbGUtMTA1IHNoYWRvdy0yeGwgJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIEpvaW4gdXMgdG8gZmluZCBvdXRcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7XG4gIEZvcm0sXG4gIExpbmssXG4gIExvYWRlckZ1bmN0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxuICBBY3Rpb25GdW5jdGlvbixcbn0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgTWV0YSB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IGdldEZpbG1zLCBGaWxtIH0gZnJvbSAnfi9hcGkvZmlsbXMnO1xuaW1wb3J0IENUQSBmcm9tICd+L0NvbXBvbmVudHMvY3RhJztcbmltcG9ydCBIZXJvIGZyb20gJ34vQ29tcG9uZW50cy9oZXJvJztcbmltcG9ydCBIZXJvQWx0IGZyb20gJ34vQ29tcG9uZW50cy9oZXJvLWFsdCc7XG5pbXBvcnQgSGVyb1doaXRlIGZyb20gJ34vQ29tcG9uZW50cy9oZXJvLXdoaXRlJztcblxuaW1wb3J0IEluZm8gZnJvbSAnfi9Db21wb25lbnRzL2luZm8nO1xuaW1wb3J0IGluZm9JbWcgZnJvbSAnLi4vaW1hZ2VzL2Fib3V0LXBhLmpwZyc7XG5pbXBvcnQgeyBnZXRDbGllbnQsIHVybEZvciB9IGZyb20gJ34vbGliL3Nhbml0eS9nZXRDbGllbnQnO1xuaW1wb3J0IHtcbiAgUG9ydGFibGVUZXh0LFxuICBQb3J0YWJsZVRleHRUeXBlQ29tcG9uZW50LFxuICBQb3J0YWJsZVRleHRDb21wb25lbnRzUHJvdmlkZXIsXG59IGZyb20gJ0Bwb3J0YWJsZXRleHQvcmVhY3QnO1xuXG4vLyBsb2FkZXIoKSBtdXN0IGJlIGFzeW5jIVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcigpIHtcbiAgY29uc3QgbmV3c1Bvc3RzID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJuZXdzXCJdeyBfaWQsIHRpdGxlLCBzbHVnLCBcImZlYXR1cmVJbWFnZVwiOiBmZWF0dXJlLmFzc2V0LT51cmxcbiAgIH1gXG4gICk7XG4gIGNvbnN0IGFib3V0VGV4dCA9IGF3YWl0IGdldENsaWVudCgpLmZldGNoKFxuICAgIGAqW190eXBlID09IFwic2VjdGlvbnNcIiAmJiBzbHVnLmN1cnJlbnQgPT0gXCJhYm91dC1wYWRlbC1hZnJpY2FcIiBdeyBfaWQsIHRpdGxlLCBvdmVydmlldywgXCJmZWF0dXJlSW1hZ2VcIjogZmVhdHVyZS5hc3NldC0+dXJsXG4gICB9YFxuICApO1xuICByZXR1cm4geyBuZXdzUG9zdHMsIGFib3V0VGV4dCB9O1xufVxuXG4vLyBTZXJ2ZXIgU2lkZVxuLy9leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuLy9jb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbi8vY29uc3QgdGl0bGUgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgndGl0bGUnKTtcbi8vcmV0dXJuIGdldEZpbG1zKHRpdGxlKTtcbi8vfTtcblxuZXhwb3J0IGNvbnN0IG1ldGEgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdQYWRlbCBBZnJpY2EgfCBUaGUgTnVtYmVyIDEgQWZyaWNhbiBQYWRlbCBDb21wYW55JyxcbiAgICBkZXNjcmlwdGlvbjogJ1BhZGVsIEFmcmljYSBob21lIHBhZ2UnLFxuICAgIGtleXdvcmRzOiAncGFkZWwsIGFmcmljYSwgc3BvcnQnLFxuICB9O1xufTtcblxuLy8gQ2xpZW50IFNpZGVcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGxldCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgbGV0IGVtYWlsID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpO1xuICBsZXQgbmFtZSA9IGZvcm1EYXRhLmdldCgnbmFtZScpO1xuICBsZXQgY29tcGFueSA9IGZvcm1EYXRhLmdldCgnY29tcGFueScpO1xuICAvL3Byb2Nlc3MuZW52LkNPTlZFUlRLSVRfS0VZID0gJ2xHZjZrT25GT09DLVlPaWtaRF9ZUHcnO1xuXG4gIGNvbnN0IEFQSV9LRVkgPSAnbEdmNmtPbkZPT0MtWU9pa1pEX1lQdyc7XG4gIGNvbnN0IEZPUk1fSUQgPSAnMzAyMjA1NCc7XG4gIGNvbnN0IEFQSSA9ICdodHRwczovL2FwaS5jb252ZXJ0a2l0LmNvbS92My8nO1xuXG4gIGxldCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUEl9L2Zvcm1zLyR7Rk9STV9JRH0vc3Vic2NyaWJlYCwge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIGZpcnN0X25hbWU6IG5hbWUsXG4gICAgICBmaWVsZHM6IHsgY29tcGFueTogY29tcGFueSB9LFxuICAgICAgYXBpX2tleTogQVBJX0tFWSxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vY29uc29sZS5sb2coeyBlbWFpbCB9LCB7IG5hbWUgfSwgeyBjb21wYW55IH0pO1xuICByZXR1cm4gcmVzLmpzb24oKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IG5ld3NQb3N0cywgYWJvdXRUZXh0IH0gPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgY29uc3QgbXlQb3J0YWJsZVRleHRDb21wb25lbnRzID0ge1xuICAgIHR5cGVzOiB7XG4gICAgICBpbWFnZTogKHZhbHVlOiBhbnkpID0+IChcbiAgICAgICAgPGltZyBzcmM9e3ZhbHVlLmFzc2V0fSBrZXk9e3ZhbHVlLl9pZH0gY2xhc3NOYW1lPXt2YWx1ZS5hc3NldH0+PC9pbWc+XG4gICAgICApLFxuICAgIH0sXG4gIH07XG4gIC8vY29uc3QgZmlsbXMgPSB1c2VMb2FkZXJEYXRhPEZpbG1bXT4oKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlcm9cbiAgICAgICAgaGVhZGluZz0nUGFkZWwgaGFzIHRha2VuIEV1cm9wZSBieSBzdG9ybS4gTm93IGl0XHUyMDE5cyB0aW1lIHRvIGJyaW5nIGl0IHRvIEFmcmljYS5cbiAgICAgICAgJ1xuICAgICAgICBib2R5PSdVc2luZyBvdXIgZXh0ZW5zaXZlIGtub3dsZWRnZSBvZiBBZnJpY2EgYW5kIGJ1c2luZXNzIGRldmVsb3BtZW50LCB3ZSBhaW0gdG8gcHJvdmlkZSBQYWRlbCwgYXMgYSBzcG9ydCBhbmQgYSBjb21tdW5pdHkgZW5hYmxlciwgdG8gR2hhbmEsIEtlbnlhLCBOaWdlcmlhIGFuZCBvdGhlciBTdWIgU2FoYXJhbiBjb3VudHJpZXMuXG4gICAgICAgICdcbiAgICAgICAgYnV0dG9uMVRleHQ9J0xlYXJuIE1vcmUnXG4gICAgICAgIGJ1dHRvbjFUbz0nI2Fib3V0J1xuICAgICAgICBidXR0b24yVGV4dD0nV2FudCB0byBQYXJ0bmVyPydcbiAgICAgICAgYnV0dG9uMlRvPScjYWJvdXQnXG4gICAgICAgIGltZ1NyYz0nJ1xuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgRm9ybSwgTGluaywgdXNlQWN0aW9uRGF0YSB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCBoZXJvSW1nIGZyb20gJy4uL2ltYWdlcy9wYWRlbC1oZXJvLmpwZyc7XG5pbXBvcnQgcGFkZWxJbWcgZnJvbSAnLi4vaW1hZ2VzL3BhcnRuZXJzL3BhZGVsdG90YWwtbG9nby5wbmcnO1xuaW1wb3J0IHBhZGVsSXEgZnJvbSAnLi4vaW1hZ2VzL3BhcnRuZXJzL3BhZGVsLWlxLnBuZyc7XG5cbmludGVyZmFjZSBIZXJvQ29udGVudCB7XG4gIGhlYWRpbmc6IHN0cmluZztcbiAgYm9keTogc3RyaW5nO1xuICBidXR0b24xVGV4dDogc3RyaW5nO1xuICBidXR0b24xVG86IHN0cmluZztcbiAgYnV0dG9uMlRleHQ6IHN0cmluZztcbiAgYnV0dG9uMlRvOiBzdHJpbmc7XG4gIGltZ1NyYzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvKHByb3BzOiBIZXJvQ29udGVudCkge1xuICBsZXQgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKTtcbiAgbGV0IHN0YXRlOiAnaWRsZScgfCAnc3VjY2VzcycgfCAnZXJyb3InID0gYWN0aW9uRGF0YT8uc3Vic2NyaXB0aW9uXG4gICAgPyAnc3VjY2VzcydcbiAgICA6IGFjdGlvbkRhdGE/LmVycm9yXG4gICAgPyAnZXJyb3InXG4gICAgOiAnaWRsZSc7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPSdbaGVyb10gY29udGFpbmVyIG14LWF1dG8gYmctbm9uZSAgbWQ6cHQtMzIgbWQ6cGItMTIgbWItMTIgbWQ6LW10LTE2IHB4LTggc206cHgtMTIgZmxleCAgZmxleC1jb2wgbWQ6ZmxleC1yb3cgYWxpZ24tbWlkZGxlIG1kOmp1c3RpZnktYmV0d2VlbiAgYmctY292ZXIgIG1kOnNwYWNlLXgtMTJcdCAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIG1kOnctMi81IG1kOm15LWF1dG8gc3BhY2UteS12dy0yLW1pbkB4bCBtZDpweS0xNiAgJz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTR4bCBtZDp0ZXh0LTZ4bCBmb250LWhlYWRpbmcgdXBwZXJjYXNlICc+XG4gICAgICAgICAgICBQYWRlbCBoYXMgdGFrZW4gRXVyb3BlIGJ5IHN0b3JtLiZuYnNwOzxicj48L2JyPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdibG9jayB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1iciBmcm9tLWdyZWVuLTMwMCAgdmlhLWdyZWVuLTUwMCB0by1zbGF0ZS05MDAgZGFyazp0by15ZWxsb3ctMzAwJz5cbiAgICAgICAgICAgICAgTm93IGl0J3MgdGltZSB0byBicmluZyBpdCB0byBBZnJpY2FcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWJhc2UgICc+XG4gICAgICAgICAgICBcdUQ4M0RcdURDNEIgSW50ZXJlc3RlZCBpbiBhIHBhcnRuZXJzaGlwP1xuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSd1bmRlcmxpbmUnIGhyZWY9J21haWx0bzpoZWxsb0BwYWRlbC5hZnJpY2EnPlxuICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICBFbWFpbCB1c1xuICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIG1kOnctMi81IG15LTEwIHRleHQtc2xhdGUtOTAwICBkYXJrOnRleHQtd2hpdGUgbWQ6bXktYXV0byBzcGFjZS15LXZ3LTQtbWluQHhsIGJnLXdoaXRlIGRhcms6Ymctc2xhdGUtOTAwIGRhcms6Ymctb3BhY2l0eS0yNSAgYmctb3BhY2l0eS01MCBiYWNrZHJvcC1ibHVyLWxnIHNoYWRvdy0yeGxcdCBwLTYgICAgaC1maXQgJ1xuICAgICAgICAgIG1ldGhvZD0ncG9zdCdcbiAgICAgICAgICBhcmlhLWhpZGRlbj17c3RhdGUgPT09ICdzdWNjZXNzJ31cbiAgICAgICAgPlxuICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1oZWFkaW5nIHRleHQtbGcgIHVwcGVyY2FzZSc+XG4gICAgICAgICAgICAgIEpvaW4gdGhlIE1haWxpbmcgTGlzdFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbmFtZScgY2xhc3NOYW1lPSdibG9jayAgdGV4dC14cyAgICc+XG4gICAgICAgICAgICAgICAgWW91ciBOYW1lXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcbiAgICAgICAgICAgICAgICBpZD0nbmFtZSdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBkYXJrOnRleHQtc2xhdGUtOTAwIHRleHQtc20gZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41IDAgIGRhcms6Zm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMCdcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nSm9lIEJsb2dncydcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNic+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCcgY2xhc3NOYW1lPSdibG9jayB0ZXh0LXhzICAnPlxuICAgICAgICAgICAgICAgIFlvdXIgZW1haWxcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgaWQ9J2VtYWlsJ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtc20gZGFyazp0ZXh0LXNsYXRlLTkwMCAgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41IGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwJ1xuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSduYW1lQG1haWwuY29tJ1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi02Jz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2NvbXBhbnknIGNsYXNzTmFtZT0nYmxvY2sgdGV4dC14cyAnPlxuICAgICAgICAgICAgICAgIFlvdXIgQ29tcGFueVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgIGlkPSdjb21wYW55J1xuICAgICAgICAgICAgICAgIG5hbWU9J2NvbXBhbnknXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1zbSBkYXJrOnRleHQtc2xhdGUtOTAwICAgYmxvY2sgdy1mdWxsIHAtMi41ICAgIGRhcms6Zm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMCdcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQWNtZSBJbmMnXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPScgcHktNCBweC02IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwIHRvLXNsYXRlLTkwMCBkYXJrOnRvLXllbGxvdy0zMDAgdGV4dC13aGl0ZSBkYXJrOnRleHQtc2xhdGUtOTAwIGZvbnQtaGVhZGluZyB1cHBlcmNhc2UgaG92ZXI6YmctZ3JhZGllbnQtdG8tdGwgaG92ZXI6c2NhbGUtMTA1IHNoYWRvdy0yeGwgJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgPHA+e2FjdGlvbkRhdGE/LmVycm9yID8gYWN0aW9uRGF0YS5tZXNzYWdlIDogPD4gJm5ic3A7IDwvPn08L3A+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIG1kOnctMi81IG15LTEwIHRleHQtc2xhdGUtOTAwICBkYXJrOnRleHQtd2hpdGUgbWQ6bXktYXV0byBzcGFjZS15LXZ3LTQtbWluQHhsIGJnLXdoaXRlIGRhcms6Ymctc2xhdGUtOTAwIGRhcms6Ymctb3BhY2l0eS0yNSAgYmctb3BhY2l0eS01MCBiYWNrZHJvcC1ibHVyLWxnIHNoYWRvdy0yeGxcdCBwLTYgICAgaC1maXQgJ1xuICAgICAgICAgIC8vY2xhc3NOYW1lPXsgaWYgKHN0YXRlID09PSBcInN1Y2Vzc1wiKSAgeydoaWRkZW4nfSBlbHNleydibG9jayd9IH1cbiAgICAgICAgICBhcmlhLWhpZGRlbj17c3RhdGUgIT09ICdzdWNjZXNzJ31cbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtaGVhZGluZyc+XHVEODNEXHVERTgwIFlvdSdyZSBTdWJzY3JpYmVkITwvaDI+XG5cbiAgICAgICAgICA8cD5UaGFuayB5b3UgZm9yIHNpZ25pbmcgdXAgdG8gb3VyIG1haWxpbmcgbGlzdDwvcD5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9J3VuZGVybGluZSB0ZXh0LWdyZWVuLTMwMCcgdG89Jy4nPlxuICAgICAgICAgICAgU3RhcnQgT3ZlclxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nIG14LWF1dG8gdy0yLzMgcm91bmRlZC1sZyBtZDpweS0xMiBweS0xMiBiZy1zbGF0ZS05MDAgIG1iLTEyIG1kOi1tdC0xNiBweC04IHNtOnB4LTEyIGZsZXggIGZsZXgtY29sIGFsaWduLW1pZGRsZSBtZDpqdXN0aWZ5LWJldHdlZW4gIG1kOnNwYWNlLXktNiAgXHQnPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSdtLWF1dG8gdXBwZXJjYXNlIHRleHQtY2VudGVyIGZvbnQtaGVhZGluZyB0ZXh0LXhsIGRhcms6dGV4dC13aGl0ZSB0ZXh0LXdoaXRlIG9wYWNpdHktNzAnPlxuICAgICAgICAgIE91ciBTdHJhdGVnaWMgUGFydG5lcnNcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyIG0tYXV0byBzcGFjZS14LTggJz5cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL3BhZGVsdG90YWwuc2UnPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNTYgaC1hdXRvIG9wYWNpdHktNzUgdHJhbnNpdGlvbiBlYXNlLWluLW91ICBob3ZlcjpvcGFjaXR5LTEwMCBob3ZlcjpzY2FsZS0xMDUgY3Vyc29yLXBvaW50ZXIgJ1xuICAgICAgICAgICAgICBzcmM9e3BhZGVsSW1nfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9wYWRlbGlxLmlvLyc+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy01NiBoLWF1dG8gb3BhY2l0eS03NSAgIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgaG92ZXI6b3BhY2l0eS0xMDAgaG92ZXI6c2NhbGUtMTA1IGN1cnNvci1wb2ludGVyICdcbiAgICAgICAgICAgICAgc3JjPXtwYWRlbElxfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCBQaWNvU2FuaXR5IGZyb20gJ3BpY29zYW5pdHknO1xuXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJztcblxuLy8gU3RhbmRhcmQgY2xpZW50IGZvciBmZXRjaGluZyBkYXRhXG5leHBvcnQgY29uc3Qgc2FuaXR5Q2xpZW50ID0gbmV3IFBpY29TYW5pdHkoY29uZmlnKTtcblxuZXhwb3J0IGNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoc2FuaXR5Q2xpZW50KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVybEZvcihzb3VyY2U6IGFueSkge1xuICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpO1xufVxuXG4vLyBBdXRoZW50aWNhdGVkIGNsaWVudCBmb3IgZmV0Y2hpbmcgZHJhZnQgZG9jdW1lbnRzXG5leHBvcnQgY29uc3QgcHJldmlld0NsaWVudCA9IG5ldyBQaWNvU2FuaXR5KHtcbiAgLi4uY29uZmlnLFxuICB1c2VDZG46IGZhbHNlLFxuICAvL3Rva2VuOiBwcm9jZXNzLmVudi5TQU5JVFlfQVBJX1RPS0VOLFxufSk7XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjaG9vc2UgdGhlIGNvcnJlY3QgY2xpZW50XG5leHBvcnQgY29uc3QgZ2V0Q2xpZW50ID0gKHVzZVByZXZpZXcgPSBmYWxzZSkgPT5cbiAgdXNlUHJldmlldyA/IHByZXZpZXdDbGllbnQgOiBzYW5pdHlDbGllbnQ7XG4iLCAiZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpVmVyc2lvbjogJzIwMjEtMDMtMjUnLFxuICAvLyBGaW5kIHRoZXNlIGluIHlvdXIgLi9zdHVkaW8vc2FuaXR5Lmpzb24gZmlsZVxuICBkYXRhc2V0OiAncHJvZHVjdGlvbicsXG4gIHByb2plY3RJZDogJ3FpOGhyM3J2JyxcbiAgdXNlQ2RuOiBmYWxzZSxcbn07XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4JztcblxuaW1wb3J0IHsgZ2V0Q2xpZW50IH0gZnJvbSAnfi9saWIvc2FuaXR5L2dldENsaWVudCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoeyBwYXJhbXMgfTogeyBwYXJhbXM6IGFueSB9KSB7XG4gIC8vIFF1ZXJ5IGZvciBfYWxsXyBkb2N1bWVudHMgd2l0aCB0aGlzIHNsdWdcbiAgLy8gVGhlcmUgY291bGQgYmUgdHdvOiBEcmFmdCBhbmQgUHVibGlzaGVkIVxuICBjb25zdCBpbml0aWFsRGF0YSA9IGF3YWl0IGdldENsaWVudCgpLmZldGNoKFxuICAgIGAqW190eXBlID09IFwibmV3c1wiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z117IF9pZCwgdGl0bGUsIHNsdWcsIFwiZmVhdHVyZUltYWdlXCI6IGZlYXR1cmUuYXNzZXQtPnVybFxuICB9YCxcbiAgICB7IHNsdWc6IHBhcmFtcy5zbHVnIH1cbiAgKTtcblxuICByZXR1cm4geyBpbml0aWFsRGF0YSB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzUG9zdCgpIHtcbiAgbGV0IHsgaW5pdGlhbERhdGEgfSA9IHVzZUxvYWRlckRhdGEoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgcGFkZGluZzogMjAgfX0+XG4gICAgICA8aDE+e2luaXRpYWxEYXRhWzBdLnRpdGxlfTwvaDE+XG4gICAgICA8aW1nIHNyYz17aW5pdGlhbERhdGFbMF0uZmVhdHVyZUltYWdlfT48L2ltZz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgQ1RBIGZyb20gJ34vQ29tcG9uZW50cy9jdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd3LWZ1bGwgbWQ6cC0zMiBweS0xMiBweC0zIHNwYWNlLXktMTIgIGZsZXggbWQ6ZmxleC1yb3cgZmxleC1jb2wgYmctd2hpdGUganVzdGlmeS1iZXR3ZWVuIHRleHQtYmxhY2sgJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21kOnctMS8yIHB4LTEyIHNwYWNlLXktNCc+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC01eGwgIGZvbnQtaGVhZGluZyAgJz5BYm91dCBQYWRlbCBBZnJpY2E8L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUHJhZXNlbnQgaWRcbiAgICAgICAgICAgIHRlbGx1cyB0ZW1wdXMsIGNvbmRpbWVudHVtIGxpYmVybyB2aXRhZSwgdGVtcG9yIHJpc3VzLiBEb25lYyBhY1xuICAgICAgICAgICAgbWF0dGlzIGxhY3VzLiBOYW0gbm9uIGxlY3R1cyBtYXVyaXMuIEZ1c2NlIHV0IHRvcnRvciBxdWlzIGFudGVcbiAgICAgICAgICAgIGJsYW5kaXQgc2FnaXR0aXMuIEN1cmFiaXR1ciBmaW5pYnVzIHRyaXN0aXF1ZSBudWxsYS4gUHJhZXNlbnQgZWdldFxuICAgICAgICAgICAgcmlzdXMgYXQgbWF1cmlzIHRyaXN0aXF1ZSBhdWN0b3IgaWQgbGFvcmVldCBhbnRlLiBNYXVyaXMgZmVybWVudHVtXG4gICAgICAgICAgICBwbGFjZXJhdCBtYWxlc3VhZGEuIE5hbSBtYWxlc3VhZGEgdmVuZW5hdGlzIGxlbywgZGljdHVtIHNvbGxpY2l0dWRpblxuICAgICAgICAgICAgZXJhdC4gUGVsbGVudGVzcXVlIHV0IHRpbmNpZHVudCBhdWd1ZS4gUHJvaW4gdmVsIG51bmMgb3JjaS4gTnVsbGFcbiAgICAgICAgICAgIG5lYyBlbmltIGVnZXQgZW5pbSBvcm5hcmUgY29uZ3VlIGFjIGVnZXQgbWFzc2EuIFZpdmFtdXMgc2l0IGFtZXRcbiAgICAgICAgICAgIHNhcGllbiB2ZWwgbnVsbGEgc2NlbGVyaXNxdWUgZmV1Z2lhdC4gSW4gdmVsIGRvbG9yIGEgZmVsaXMgdWx0cmljaWVzXG4gICAgICAgICAgICBsYW9yZWV0IGluIHNpdCBhbWV0IHRlbGx1cy4gSW50ZWdlciBtYXhpbXVzIGVsaXQgbmVxdWUsIGVnZXQgdmFyaXVzXG4gICAgICAgICAgICBsaWd1bGEgc29kYWxlcyBub24uIFNlZCBpYWN1bGlzIHJpc3VzIGV0IGxhY3VzIHByZXRpdW0gZXVpc21vZCBhXG4gICAgICAgICAgICBkaWN0dW0gdG9ydG9yLiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXJcbiAgICAgICAgICAgIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLiBNYWVjZW5hcyBlZ2V0IHF1YW0gbGlndWxhLlxuICAgICAgICAgICAgQ3VyYWJpdHVyIGxhY3VzIGVsaXQsIGxvYm9ydGlzIGF0IG51bGxhIG5vbiwgZmVybWVudHVtIGhlbmRyZXJpdFxuICAgICAgICAgICAgbWF1cmlzLiBWaXZhbXVzIGNvbW1vZG8gZWxlaWZlbmQgbG9yZW0sIGNvbnNlY3RldHVyIHNvbGxpY2l0dWRpblxuICAgICAgICAgICAgb3JjaSBjb252YWxsaXMgdml0YWUuIE51bmMgY29uc2VjdGV0dXIgcGxhY2VyYXQgbWF1cmlzLCBpZCBmYWNpbGlzaXNcbiAgICAgICAgICAgIGF1Z3VlIG1hdHRpcyBpZC4gTnVsbGEgdGluY2lkdW50IHVsbGFtY29ycGVyIGV1aXNtb2QuIFByYWVzZW50XG4gICAgICAgICAgICBwb3N1ZXJlIGVmZmljaXR1ciBlc3Qgc2VkIHJ1dHJ1bS4gRG9uZWMgb3JuYXJlIGxpYmVybyBhdCBleFxuICAgICAgICAgICAgZWxlbWVudHVtIHNvZGFsZXMuIFZlc3RpYnVsdW0gaW4gY3Vyc3VzIGV4LiBEdWlzIGxpYmVybyBkb2xvcixcbiAgICAgICAgICAgIGRpZ25pc3NpbSBxdWlzIHBsYWNlcmF0IGFjLCBzYWdpdHRpcyBpZCBlc3QuIEN1cmFiaXR1ciBzYWdpdHRpc1xuICAgICAgICAgICAgdmVsaXQgbWF1cmlzLCBpZCB1bHRyaWNlcyBuaXNsIHRpbmNpZHVudCBzaXQgYW1ldC4gU2VkIHN1c2NpcGl0LFxuICAgICAgICAgICAgc2FwaWVuIGluIGJpYmVuZHVtIG1hbGVzdWFkYSwgdGVsbHVzIG5lcXVlIGZlcm1lbnR1bSBlbmltLCB1dCB0ZW1wdXNcbiAgICAgICAgICAgIHRvcnRvciBlc3Qgc2l0IGFtZXQgYW50ZS4gVXQgZWdldCBhcmN1IG1hbGVzdWFkYSwgbG9ib3J0aXMgbmliaCBldCxcbiAgICAgICAgICAgIGZyaW5naWxsYSB0b3J0b3IuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9J2JnLWdyYXktNTAgbWQ6dy0yLzUgaC02NCAnPjwvaW1nPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPENUQVxuICAgICAgICBoZWFkaW5nPSdBcmUgeW91IGludGVyZXN0ZWQgaW4gcGFydG5lcmluZyB3aXRoIHRoZSBOdW1iZXIgMSBBZnJpY2FuIFBhZGVsIGNvbXBhbnk/J1xuICAgICAgICBib2R5PSdBdCB0aGlzIHZlcnkgZWFybHkgc3RhZ2UgaW4gb3VyIGRldmVsb3BtZW50IHdlIGFyZSBpbnRlcmVzdGVkIGluIGZpbmRpbmcgcGFydG5lcnMgZnJvbSBhbGwgc2VjdG9ycyB0byBpbnZlc3RpZ2F0ZSBwYXJ0bmVyc2hpcCBwb3NzaWJpbGl0aWVzLiBJZiB0aGlzIHNvdW5kcyBsaWtlIHlvdSAtIGdldCBpbiB0b3VjaC4nXG4gICAgICAgIGJ1dHRvblRleHQ9J0NvbnRhY3QgVXMnXG4gICAgICAgIGJ1dHRvblRvPScjY29udGFjdCdcbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHtcbiAgRm9ybSxcbiAgTGluayxcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIHVzZUxvYWRlckRhdGEsXG4gIEFjdGlvbkZ1bmN0aW9uLFxufSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBNZXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgZ2V0RmlsbXMsIEZpbG0gfSBmcm9tICd+L2FwaS9maWxtcyc7XG5pbXBvcnQgQ1RBIGZyb20gJ34vQ29tcG9uZW50cy9jdGEnO1xuaW1wb3J0IEhlcm8gZnJvbSAnfi9Db21wb25lbnRzL2hlcm8nO1xuaW1wb3J0IEluZm8gZnJvbSAnfi9Db21wb25lbnRzL2luZm8nO1xuaW1wb3J0IGluZm9JbWcgZnJvbSAnLi4vaW1hZ2VzL2Fib3V0LXBhLmpwZyc7XG5pbXBvcnQgeyBnZXRDbGllbnQsIHVybEZvciB9IGZyb20gJ34vbGliL3Nhbml0eS9nZXRDbGllbnQnO1xuaW1wb3J0IHtcbiAgUG9ydGFibGVUZXh0LFxuICBQb3J0YWJsZVRleHRUeXBlQ29tcG9uZW50LFxuICBQb3J0YWJsZVRleHRDb21wb25lbnRzUHJvdmlkZXIsXG59IGZyb20gJ0Bwb3J0YWJsZXRleHQvcmVhY3QnO1xuXG4vLyBsb2FkZXIoKSBtdXN0IGJlIGFzeW5jIVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcigpIHtcbiAgY29uc3QgbmV3c1Bvc3RzID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJuZXdzXCJdeyBfaWQsIHRpdGxlLCBzbHVnLCBcImZlYXR1cmVJbWFnZVwiOiBmZWF0dXJlLmFzc2V0LT51cmxcbiAgIH1gXG4gICk7XG4gIGNvbnN0IGFib3V0VGV4dCA9IGF3YWl0IGdldENsaWVudCgpLmZldGNoKFxuICAgIGAqW190eXBlID09IFwic2VjdGlvbnNcIiAmJiBzbHVnLmN1cnJlbnQgPT0gXCJhYm91dC1wYWRlbC1hZnJpY2FcIiBdeyBfaWQsIHRpdGxlLCBvdmVydmlldywgXCJmZWF0dXJlSW1hZ2VcIjogZmVhdHVyZS5hc3NldC0+dXJsXG4gICB9YFxuICApO1xuXG4gIGNvbnN0IHRlYW1NZW1iZXJzID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJ0ZWFtXCIgJiYgKG15VGFnc1swXS52YWx1ZT09XCJtYW5hZ2VtZW50XCIgfHxteVRhZ3NbMV0udmFsdWU9PVwibWFuYWdlbWVudFwiICApIF17IF9pZCwgdGl0bGUsIGJvYXJkUG9zaXRpb24sIG15VGFncywgbGlua2VkaW5VcmwsIG92ZXJ2aWV3LHJvbGUsIFwiZmVhdHVyZUltYWdlXCI6IGZlYXR1cmUuYXNzZXQtPnVybFxuICAgfWBcbiAgKTtcblxuICBjb25zdCBib2FyZE1lbWJlcnMgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaChcbiAgICBgKltfdHlwZSA9PSBcInRlYW1cIiAmJiAobXlUYWdzWzBdLnZhbHVlPT1cImJvYXJkXCIgfHwgbXlUYWdzWzFdLnZhbHVlPT1cImJvYXJkXCIgICkgXXsgX2lkLCB0aXRsZSwgYm9hcmRQb3NpdGlvbiwgbXlUYWdzLCBsaW5rZWRpblVybCwgb3ZlcnZpZXcscm9sZSwgXCJmZWF0dXJlSW1hZ2VcIjogZmVhdHVyZS5hc3NldC0+dXJsXG4gICB9YFxuICApO1xuICByZXR1cm4geyBuZXdzUG9zdHMsIGFib3V0VGV4dCwgdGVhbU1lbWJlcnMsIGJvYXJkTWVtYmVycyB9O1xufVxuXG4vLyBTZXJ2ZXIgU2lkZVxuLy9leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuLy9jb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbi8vY29uc3QgdGl0bGUgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgndGl0bGUnKTtcbi8vcmV0dXJuIGdldEZpbG1zKHRpdGxlKTtcbi8vfTtcblxuZXhwb3J0IGNvbnN0IG1ldGEgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdQYWRlbCBBZnJpY2EgfCBUaGUgTnVtYmVyIDEgQWZyaWNhbiBQYWRlbCBDb21wYW55JyxcbiAgICBkZXNjcmlwdGlvbjogJ1BhZGVsIEFmcmljYSBob21lIHBhZ2UnLFxuICAgIGtleXdvcmRzOiAncGFkZWwsIGFmcmljYSwgc3BvcnQnLFxuICB9O1xufTtcblxuLy8gQ2xpZW50IFNpZGVcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGxldCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgbGV0IGVtYWlsID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpO1xuICBsZXQgbmFtZSA9IGZvcm1EYXRhLmdldCgnbmFtZScpO1xuICBsZXQgY29tcGFueSA9IGZvcm1EYXRhLmdldCgnY29tcGFueScpO1xuICAvL3Byb2Nlc3MuZW52LkNPTlZFUlRLSVRfS0VZID0gJ2xHZjZrT25GT09DLVlPaWtaRF9ZUHcnO1xuXG4gIGNvbnN0IEFQSV9LRVkgPSAnbEdmNmtPbkZPT0MtWU9pa1pEX1lQdyc7XG4gIGNvbnN0IEZPUk1fSUQgPSAnMzAyMjA1NCc7XG4gIGNvbnN0IEFQSSA9ICdodHRwczovL2FwaS5jb252ZXJ0a2l0LmNvbS92My8nO1xuXG4gIGxldCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUEl9L2Zvcm1zLyR7Rk9STV9JRH0vc3Vic2NyaWJlYCwge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIGZpcnN0X25hbWU6IG5hbWUsXG4gICAgICBmaWVsZHM6IHsgY29tcGFueTogY29tcGFueSB9LFxuICAgICAgYXBpX2tleTogQVBJX0tFWSxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vY29uc29sZS5sb2coeyBlbWFpbCB9LCB7IG5hbWUgfSwgeyBjb21wYW55IH0pO1xuICByZXR1cm4gcmVzLmpzb24oKTtcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBuZXdzUG9zdHMsIGFib3V0VGV4dCwgdGVhbU1lbWJlcnMsIGJvYXJkTWVtYmVycyB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIGNvbnN0IG15UG9ydGFibGVUZXh0Q29tcG9uZW50cyA9IHtcbiAgICB0eXBlczoge1xuICAgICAgaW1hZ2U6ICh2YWx1ZTogYW55KSA9PiAoXG4gICAgICAgIDxpbWcgc3JjPXt2YWx1ZS5hc3NldH0ga2V5PXt2YWx1ZS5faWR9IGNsYXNzTmFtZT17dmFsdWUuYXNzZXR9PjwvaW1nPlxuICAgICAgKSxcbiAgICB9LFxuICB9O1xuICAvL2NvbnN0IGZpbG1zID0gdXNlTG9hZGVyRGF0YTxGaWxtW10+KCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZXJvXG4gICAgICAgIGhlYWRpbmc9J1BhZGVsIGhhcyB0YWtlbiBFdXJvcGUgYnkgc3Rvcm0uIE5vdyBpdFx1MjAxOXMgdGltZSB0byBicmluZyBpdCB0byBBZnJpY2EuXG4gICAgICAgICdcbiAgICAgICAgYm9keT0nVXNpbmcgb3VyIGV4dGVuc2l2ZSBrbm93bGVkZ2Ugb2YgQWZyaWNhIGFuZCBidXNpbmVzcyBkZXZlbG9wbWVudCwgd2UgYWltIHRvIHByb3ZpZGUgUGFkZWwsIGFzIGEgc3BvcnQgYW5kIGEgY29tbXVuaXR5IGVuYWJsZXIsIHRvIEdoYW5hLCBLZW55YSwgTmlnZXJpYSBhbmQgb3RoZXIgU3ViIFNhaGFyYW4gY291bnRyaWVzLlxuICAgICAgICAnXG4gICAgICAgIGJ1dHRvbjFUZXh0PSdMZWFybiBNb3JlJ1xuICAgICAgICBidXR0b24xVG89JyNhYm91dCdcbiAgICAgICAgYnV0dG9uMlRleHQ9J1dhbnQgdG8gUGFydG5lcj8nXG4gICAgICAgIGJ1dHRvbjJUbz0nI2Fib3V0J1xuICAgICAgICBpbWdTcmM9JydcbiAgICAgIC8+XG5cbiAgICAgIDxJbmZvIGZsb3c9J2xlZnQnIC8+XG4gICAgICA8Q1RBXG4gICAgICAgIGhlYWRpbmc9J0FyZSB5b3UgaW50ZXJlc3RlZCBpbiBwYXJ0bmVyaW5nIHdpdGggdGhlIE51bWJlciAxIEFmcmljYW4gUGFkZWwgY29tcGFueT8nXG4gICAgICAgIGJvZHk9J0F0IHRoaXMgdmVyeSBlYXJseSBzdGFnZSBpbiBvdXIgZGV2ZWxvcG1lbnQgd2UgYXJlIGludGVyZXN0ZWQgaW4gZmluZGluZyBwYXJ0bmVycyBmcm9tIGFsbCBzZWN0b3JzIHRvIGludmVzdGlnYXRlIHBhcnRuZXJzaGlwIHBvc3NpYmlsaXRpZXMuIElmIHRoaXMgc291bmRzIGxpa2UgeW91IC0gZ2V0IGluIHRvdWNoLidcbiAgICAgICAgYnV0dG9uVGV4dD0nQ29udGFjdCBVcydcbiAgICAgICAgYnV0dG9uVG89JyNjb250YWN0J1xuICAgICAgLz5cblxuICAgICAgey8qXG5cblxuIDxzZWN0aW9uIGNsYXNzTmFtZT0nW2N0YV0gIHAtdnctMzIgIHNwYWNlLXgtMTAgZmxleCAnPlxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT0ndy0xLzQnPlxuICAgICAgICAgIDxpbWcgc3JjPXtpbmZvSW1nfSAvPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPGJsb2NrcXVvdGUgY2xhc3NOYW1lPSd3LTMvNCBzcGFjZS15LTQgICc+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC00eGwgZm9udC1oZWFkaW5nIHRleHQtc2xhdGUtOTAwICBkYXJrOnRleHQtd2hpdGUnPlxuICAgICAgICAgICAgXHUyMDFDIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cdTIwMURcbiAgICAgICAgICA8L2gyPlxuXG4gICAgICAgIDwvYmxvY2txdW90ZT5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgPHNlY3Rpb25cbiAgICAgICAgaWQ9J25ld3MnXG4gICAgICAgIGNsYXNzTmFtZT0nW2Fib3V0XSAgcC12dy0zMiBiZy13aGl0ZSAgZGFyazpiZy1zbGF0ZS05MDAgdGV4dC1jZW50ZXIgc3BhY2UteS12dy02LW1pbkB4bCAnXG4gICAgICA+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUgJz5cbiAgICAgICAgICBOZXdzXG4gICAgICAgIDwvaDI+XG5cbiAgICAgICAgLy9TRUFSQ0ggRklMVEVSXG4gICAgICAgIDxGb3JtIGNsYXNzTmFtZT0ncHktNSc+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgIG5hbWU9J3RpdGxlJ1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nZW50ZXIgc29tZXRoaW5nJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlci0yIHJvdW5kZWQgcHktMiBweC0yJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTgwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkIG14LTInXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2VhcmNoeycgJ31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9Gb3JtPlxuICAqL31cblxuICAgICAgey8qXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdhcC02ICc+XG4gICAgICAgICAge2ZpbG1zLnNsaWNlKDAsIDQpLm1hcCgoZmlsbSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hvdmVyOnNoYWRvdy0yeGwgaG92ZXI6c2NhbGUtMTA1IGhvdmVyOmZvbnQtYm9sZCBjdXJzb3ItcG9pbnRlciAgcC00ICBzcGFjZS15LXZ3LTQtbWF4QG1kJz5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYXNwZWN0LXNxdWFyZSByb3VuZGVkLW1kICAnXG4gICAgICAgICAgICAgICAgc3JjPXtmaWxtLmltYWdlfVxuICAgICAgICAgICAgICAgIGFsdD17ZmlsbS50aXRsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdj57ZmlsbS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfXsnICd9XG4gICAgICAgIDwvZGl2PlxuXG5cblxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdhcC02ICc+XG4gICAgICAgICAge25ld3NQb3N0cz8ubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBuZXdzUG9zdHMuc2xpY2UoMCwgNikubWFwKChuZXdzOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e25ld3MuX2lkfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdob3ZlcjpzaGFkb3ctMnhsIGhvdmVyOnNjYWxlLTEwNSBob3Zlcjpmb250LWJvbGQgY3Vyc29yLXBvaW50ZXIgIHAtNCAgc3BhY2UteS12dy00LW1heEBtZCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKG5ld3MuZmVhdHVyZUltYWdlKS53aWR0aCg1MDApLnVybCgpfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e25ld3MudGl0bGV9XG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtc2xhdGUtOTAwIGRhcms6dGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgdG89e25ld3Muc2x1Zy5jdXJyZW50fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bmV3cy50aXRsZX17JyAnfVxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuXG5cblxuXG4gICAgICAgICAgKi99XG5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIGlkPSduZXdzJ1xuICAgICAgICBjbGFzc05hbWU9J1thYm91dF0gbXQtMjAgIHAtdnctMzIgYmctd2hpdGUgIGRhcms6Ymctc2xhdGUtOTAwIHRleHQtY2VudGVyIHNwYWNlLXktdnctNi1taW5AeGwgJ1xuICAgICAgPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTV4bCBmb250LWhlYWRpbmcgdGV4dC1zbGF0ZS05MDAgZGFyazp0ZXh0LXdoaXRlICc+XG4gICAgICAgICAgTWFuYWdlbWVudCBUZWFtXG4gICAgICAgIDwvaDI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTYgJz5cbiAgICAgICAgICB7dGVhbU1lbWJlcnM/Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gdGVhbU1lbWJlcnM/LnNsaWNlKDAsIDYpLm1hcCgodGVhbU1lbWJlcjogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXt0ZWFtTWVtYmVyLl9pZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naG92ZXI6c2hhZG93LTJ4bCBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6Zm9udC1ib2xkIGN1cnNvci1wb2ludGVyICBwLTQgIHNwYWNlLXktdnctMi1tYXhAbWQnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcih0ZWFtTWVtYmVyLmZlYXR1cmVJbWFnZSkud2lkdGgoNTAwKS51cmwoKX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXt0ZWFtTWVtYmVyLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e3RlYW1NZW1iZXIudGl0bGV9IDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtbGlnaHQgdXBwZXJjYXNlIHRleHQteHMgb3BhY2l0eS01MCBtYi00Jz5cbiAgICAgICAgICAgICAgICAgICAge3RlYW1NZW1iZXIucm9sZX17JyAnfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtc2xhdGUtOTAwIGRhcms6dGV4dC1ncmVlbi01MDAgdW5kZXJsaW5lIGN1cnNvci1wb2ludGVyJ1xuICAgICAgICAgICAgICAgICAgICBocmVmPXt0ZWFtTWVtYmVyLmxpbmtlZGluVXJsfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBMaW5rZWRpblxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgaWQ9J25ld3MnXG4gICAgICAgIGNsYXNzTmFtZT0nW2Fib3V0XSAgcC12dy0zMiBiZy1ncmF5LTEwMCAgZGFyazpiZy1zbGF0ZS04MDAgdGV4dC1jZW50ZXIgc3BhY2UteS12dy02LW1pbkB4bCAnXG4gICAgICA+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtNXhsIGZvbnQtaGVhZGluZyB0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUgJz5cbiAgICAgICAgICBCb2FyZCBvZiBEaXJlY3RvcnNcbiAgICAgICAgPC9oMj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNiAnPlxuICAgICAgICAgIHtib2FyZE1lbWJlcnM/Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gYm9hcmRNZW1iZXJzPy5zbGljZSgwLCA2KS5tYXAoKGJvYXJkTWVtYmVyOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2JvYXJkTWVtYmVyLl9pZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naG92ZXI6c2hhZG93LTJ4bCBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6Zm9udC1ib2xkIGN1cnNvci1wb2ludGVyICBwLTQgIHNwYWNlLXktdnctMi1tYXhAbWQnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihib2FyZE1lbWJlci5mZWF0dXJlSW1hZ2UpLndpZHRoKDUwMCkudXJsKCl9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17Ym9hcmRNZW1iZXIudGl0bGV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57Ym9hcmRNZW1iZXIudGl0bGV9IDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtbGlnaHQgdXBwZXJjYXNlIHRleHQteHMgb3BhY2l0eS01MCBtYi00Jz5cbiAgICAgICAgICAgICAgICAgICAge2JvYXJkTWVtYmVyLmJvYXJkUG9zaXRpb259eycgJ31cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1zbGF0ZS05MDAgZGFyazp0ZXh0LWdyZWVuLTUwMCB1bmRlcmxpbmUgY3Vyc29yLXBvaW50ZXInXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2JvYXJkTWVtYmVyLmxpbmtlZGluVXJsfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBMaW5rZWRpblxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgaWQ9J2NvbnRhY3QnXG4gICAgICAgIGNsYXNzTmFtZT0nW2NvbnRhY3RdICBiZy1zbGF0ZS05MDAgICBzcGFjZS14LTEwICAgcC12dy0zMiAgc3BhY2UteS0xMCBtZDpzcGFjZS14LTEwIGZsZXggZmxleC1jb2wgIHRleHQtd2hpdGUgJ1xuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nICBtLWF1dG8gIHRleHQtY2VudGVyIG0gc3BhY2UteS12dy02LW1pbkB4bCBtZDp3LTEvMiAnPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtaGVhZGluZyB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1iciBmcm9tLWdyZWVuLTMwMCAgdmlhLWdyZWVuLTUwMCB0by15ZWxsb3ctNDAwICc+XG4gICAgICAgICAgICBDb250YWN0IFVzXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2Jhc2UnPlxuICAgICAgICAgICAgSWYgeW91IGFyZSBhbiBpbnZlc3RlciwgYSBwb3RlbnRpYWwgcGFydG5lciBvciBhbnlvbmUgaW50ZXJlc3RlZCBpblxuICAgICAgICAgICAgbGVhcm5pbmcgbW9yZSBhYm91dCBQYWRlbCBBZnJpY2EsIHlvdSBjYW4gcmVhY2ggdXMgZGlyZWN0bHkgd2l0aCB0aGVcbiAgICAgICAgICAgIGZvbGxvd2luZyBkZXRhaWxzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHNwYWNlLXgtdnctNC1taW5AeGwgIG1kOmlubGluZS1mbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNsYXRlLTkwMCc+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPSdtYWlsdG86aGVsbG9AcGFkZWwuYWZyaWNhJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J3B5LXZ3LTQtbWluQHhsLW1heEAyeGwgcHgtdnctNC1taW5AeGwtbWF4QDJ4bCBiZy1ncmFkaWVudC10by1iciBmcm9tLWdyZWVuLTMwMCAgIHRvLXllbGxvdy00MDAgcm91bmRlZC14bCBmb250LWJvbGQgaG92ZXI6YmctZ3JhZGllbnQtdG8tdGwgaG92ZXI6c2NhbGUtMTA1IHNoYWRvdy0yeGwnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEVtYWlsIFVzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPSd0ZWw6MDA0NjczOTc4Nzc2NCdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPScgcHktdnctNC1taW5AeGwtbWF4QDJ4bCBweC12dy00LW1pbkB4bC1tYXhAMnhsIGJnLWdyYWRpZW50LXRvLWJyIGZyb20td2hpdGUgICB0by1ncmF5LTIwMCByb3VuZGVkLXhsIGZvbnQtYm9sZCBob3ZlcjpiZy1ncmFkaWVudC10by10bCBob3ZlcjpzY2FsZS0xMDUgc2hhZG93LTJ4bCdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVGVsZXBob25lXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCBpbmZvSW1nIGZyb20gJy4uL2ltYWdlcy9hYm91dC1wYS5qcGcnO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4JztcblxuaW1wb3J0IHsgUG9ydGFibGVUZXh0IH0gZnJvbSAnQHBvcnRhYmxldGV4dC9yZWFjdCc7XG5cbmludGVyZmFjZSBJbmZvQ29udGVudCB7XG4gIGZsb3c6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5mbyhwcm9wczogSW5mb0NvbnRlbnQpIHtcbiAgY29uc3QgeyBhYm91dFRleHQgfSA9IHVzZUxvYWRlckRhdGEoKTtcblxuICBjb25zdCBteVBvcnRhYmxlVGV4dENvbXBvbmVudHMgPSB7XG4gICAgdHlwZXM6IHtcbiAgICAgIGltYWdlOiAodmFsdWU6IGFueSkgPT4gKFxuICAgICAgICA8aW1nIHNyYz17dmFsdWUuYXNzZXR9IGtleT17dmFsdWUuX2lkfSBjbGFzc05hbWU9e3ZhbHVlLmFzc2V0fT48L2ltZz5cbiAgICAgICksXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBpZD0nYWJvdXQnXG4gICAgICBjbGFzc05hbWU9e2BbY3RhXSAgcC12dy0zMiAgc3BhY2UteS0xMCBtZDpzcGFjZS14LTE0IGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgJHtcbiAgICAgICAgcHJvcHMuZmxvdyA9PSAnbGVmdCcgPyAnJyA6ICcgbWQ6ZmxleC1yb3ctcmV2ZXJzZSBzcGFjZS14LXJldmVyc2UnXG4gICAgICB9IGB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J21kOnctMi81ICBzcGFjZS15LTQgICc+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtNXhsIGZvbnQtaGVhZGluZyc+e2Fib3V0VGV4dFswXS50aXRsZX08L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1jb250ZW50IHNwYWNlLXktMiB0ZXh0LW1kJz5cbiAgICAgICAgICB7YWJvdXRUZXh0WzBdLm92ZXJ2aWV3Py5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IGFib3V0VGV4dFswXS5vdmVydmlldy5tYXAoKHBhcmFncmFwaHM6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgIDxQb3J0YWJsZVRleHRcbiAgICAgICAgICAgICAgICAgIGtleT17cGFyYWdyYXBocy5faWR9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17W3BhcmFncmFwaHNdfVxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17bXlQb3J0YWJsZVRleHRDb21wb25lbnRzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZmlndXJlIGNsYXNzTmFtZT0nbWQ6dy0xLzIgYmctc2xhdGUtMzAwJz5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9J3ctZnVsbCcgc3JjPXthYm91dFRleHRbMF0uZmVhdHVyZUltYWdlfSAvPlxuICAgICAgPC9maWd1cmU+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFR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
