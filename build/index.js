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

// app/images/padel-hero.jpg
var padel_hero_default = "/build/_assets/padel-hero-6EAO5I32.jpg";

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/root.tsx
var import_react = __toModule(require("react"));

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-5OS5R747.css";

// app/styles/app.css
var app_default = "/build/_assets/app-2NIVSPFH.css";

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
    console.log(setDarkMode.setDarkMode);
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
    console.log(navbarOpen);
    console.log(setNavbarOpen);
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
  }, /* @__PURE__ */ React.createElement("li", null, " ", /* @__PURE__ */ React.createElement("a", {
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
    className: "text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-900  rounded-lg text-sm "
  }, /* @__PURE__ */ React.createElement("svg", {
    id: "theme-toggle-dark-icon",
    className: ` block dark:hidden w-7 h-7`,
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
  })), /* @__PURE__ */ React.createElement("svg", {
    id: "theme-toggle-light-icon",
    className: `hidden dark:block w-7 h-7`,
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }))))))));
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
  }), /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(Footer, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
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
function Hero(props) {
  return /* @__PURE__ */ React.createElement("section", {
    className: "[hero] bg-none  md:py-12   px-6 md:px-24 mb-12 flex  flex-col md:flex-row align-middle justify-between  bg-cover  md:space-x-12	 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full md:w-2/5 my-auto space-y-vw-2-min@xl md:py-16  "
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl md:text-6xl font-heading uppercase "
  }, "Padel has taken Europe by storm.\xA0", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", {
    className: "block text-transparent bg-clip-text bg-gradient-to-br from-green-300  via-green-500 to-slate-900 dark:to-yellow-300"
  }, "Now it's time to bring it to Africa")), /* @__PURE__ */ React.createElement("p", {
    className: "text-base  "
  }, "\u{1F44B} Interested in a partnership?", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    href: ""
  }, " ", "Email us"), " ")), /* @__PURE__ */ React.createElement("form", {
    className: "w-full md:w-2/5 my-10 text-slate-900  dark:text-white md:my-auto space-y-vw-4-min@xl bg-white dark:bg-slate-900 dark:bg-opacity-25  bg-opacity-50 backdrop-blur-lg shadow-2xl	 p-6    h-fit "
  }, /* @__PURE__ */ React.createElement("p", {
    className: "font-heading text-lg  uppercase"
  }, "Join the Mailing List"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "block  text-xs   "
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
    className: "block text-xs  "
  }, "Your email"), /* @__PURE__ */ React.createElement("input", {
    type: "email",
    id: "email",
    className: "bg-gray-50 border border-gray-300 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500",
    placeholder: "name@mail.com",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "block text-xs "
  }, "Your Company"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "company",
    className: "bg-gray-50 border border-gray-300 text-sm   block w-full p-2.5   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "Acme Inc",
    required: true
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: " py-4 px-6 bg-gradient-to-br from-green-300 to-slate-900 dark:to-yellow-300 text-white dark:text-slate-900 font-heading uppercase hover:bg-gradient-to-tl hover:scale-105 shadow-2xl "
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Hero, {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm9vdC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL29sZF9pbmRleC50c3giLCAiLi4vYXBwL0NvbXBvbmVudHMvY3RhLnRzeCIsICIuLi9hcHAvQ29tcG9uZW50cy9oZXJvLnRzeCIsICIuLi9hcHAvQ29tcG9uZW50cy9pbmZvLnRzeCIsICIuLi9hcHAvbGliL3Nhbml0eS9nZXRDbGllbnQudHMiLCAiLi4vYXBwL2xpYi9zYW5pdHkvY29uZmlnLnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy8kc2x1Zy50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL2Fib3V0LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvaW5kZXgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy9vbGRfaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy9hYm91dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9vbGRfaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9vbGRfaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJvbGRfaW5kZXhcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy8kc2x1Z1wiOiB7XG4gICAgaWQ6IFwicm91dGVzLyRzbHVnXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiOnNsdWdcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9hYm91dFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2Fib3V0XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYWJvdXRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTRcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgZG90ZW52LmNvbmZpZygpO1xuXG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoJzwhRE9DVFlQRSBodG1sPicgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaW5rLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tICdyZW1peCc7XG5pbXBvcnQgaGVyb0ltZyBmcm9tICcuL2ltYWdlcy9wYWRlbC1oZXJvLmpwZyc7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RhaWx3aW5kLmNzcyc7XG5pbXBvcnQgYXBwU3R5bGVzIGZyb20gJy4vc3R5bGVzL2FwcC5jc3MnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi9pbWFnZXMvbG9nby5zdmcnO1xuaW1wb3J0IGxvZ29EYXJrIGZyb20gJy4vaW1hZ2VzL3BhLWxvZ28tZGFyay5zdmcnO1xuaW1wb3J0IGxvZ29MaWdodCBmcm9tICcuL2ltYWdlcy9wYS1sb2dvLWxpZ2h0LnN2Zyc7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4JztcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6ICdQYWRlbCBBZnJpY2EnIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH0sXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogYXBwU3R5bGVzIH0sXG4gIF07XG59XG5cbmV4cG9ydCBjb25zdCBOYXYgPSAoc2V0RGFya01vZGU6IHtcbiAgc2V0RGFya01vZGU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+Pjtcbn0pID0+IHtcbiAgY29uc3QgZGFya01vZGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coc2V0RGFya01vZGUuc2V0RGFya01vZGUpO1xuXG4gICAgc2V0RGFya01vZGUuc2V0RGFya01vZGUoKHByZXYpID0+ICFwcmV2KTtcbiAgICAvL3NldERhcmtNb2RlKChwcmV2KSA9PiAhcHJldik7XG4gIH07XG4gIGNvbnN0IGRhcmtNb2RlID0gdHJ1ZTtcblxuICBjb25zdCBbaXNTaHJ1bmssIHNldFNocnVua10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xuICAgICAgc2V0U2hydW5rKChpc1NocnVuaykgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIWlzU2hydW5rICYmXG4gICAgICAgICAgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4gMjAgfHxcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiAyMClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNTaHJ1bmsgJiZcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA8IDQgJiZcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIDwgNFxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXNTaHJ1bms7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlcik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBbbmF2YmFyT3Blbiwgc2V0TmF2YmFyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhuYXZiYXJPcGVuKTtcblxuICAgIGNvbnNvbGUubG9nKHNldE5hdmJhck9wZW4pO1xuICAgIHNldE5hdmJhck9wZW4oKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LypcbiAgICAgIDxuYXZcbiAgICAgICAgY2xhc3NOYW1lPXtgICAke1xuICAgICAgICAgIGlzU2hydW5rXG4gICAgICAgICAgICA/ICd0cmFuc2l0aW9uIGVhc2UtaW4tb3V0ICBtZDpiZy1vcGFjaXR5LTc1IGJhY2tkcm9wLWJsdXItbGcgei0xMCBweS0yIHRleHQteHMgICAgJ1xuICAgICAgICAgICAgOiAndHJhbnNpdGlvbiBlYXNlLWluLW91dCBtZDpiZy1vcGFjaXR5LTAgJ1xuICAgICAgICB9IGJnLXNsYXRlLTkwMCBib3JkZXItZ3JheS0yMDAgcHgtNCBzbTpweC0xMiBweS02IG1kOmZpeGVkIHctZnVsbCB6LTEwIHRleHQtYmxhY2sgYH1cbiAgICAgID4qL31cbiAgICAgIDxuYXYgY2xhc3NOYW1lPSdiZy1ub25lIGJvcmRlci1ncmF5LTIwMCBweC00IHNtOnB4LTEyIHB5LTYgdy1mdWxsIHotMTAgdGV4dC1ibGFjayAgICc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgZmxleCBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBteC1hdXRvJz5cbiAgICAgICAgICA8YSBocmVmPScvJyBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e2xvZ29EYXJrfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BibG9jayBkYXJrOmhpZGRlbiB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSAke1xuICAgICAgICAgICAgICAgIGlzU2hydW5rID8gJ2gtMTYnIDogJ21kOmgtMTYnXG4gICAgICAgICAgICAgIH0gaC0xNmB9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17bG9nb0xpZ2h0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoaWRkZW4gZGFyazpibG9jayAgdHJhbnNpdGlvbiAgIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSAke1xuICAgICAgICAgICAgICAgIGlzU2hydW5rID8gJ2gtMTYnIDogJ21kOmgtMTYnXG4gICAgICAgICAgICAgIH0gaC0xNmB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9XG4gICAgICAgICAgICBkYXRhLWNvbGxhcHNlLXRvZ2dsZT0nbW9iaWxlLW1lbnUnXG4gICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICBjbGFzc05hbWU9J2lubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBwLTIgbWwtMyB0ZXh0LXNtIHJvdW5kZWQtbGcgbWQ6aGlkZGVuIGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmF5LTIwMCBkYXJrOnRleHQtZ3JheS00MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmZvY3VzOnJpbmctZ3JheS02MDAnXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPSdtb2JpbGUtbWVudS0yJ1xuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD0nZmFsc2UnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5PcGVuIG1haW4gbWVudTwvc3Bhbj5cbiAgICAgICAgICAgIHtuYXZiYXJPcGVuID8gKFxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPScgdy02IGgtNidcbiAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXG4gICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDIwIDIwJ1xuICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBmaWxsUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICAgIGQ9J000LjI5MyA0LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgOC41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEwxMS40MTQgMTBsNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgMTEuNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw4LjU4NiAxMCA0LjI5MyA1LjcwN2ExIDEgMCAwMTAtMS40MTR6J1xuICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTYgaC02J1xuICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjAgMjAnXG4gICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgZD0nTTMgNWExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxMGExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxNWExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXonXG4gICAgICAgICAgICAgICAgICBjbGlwUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7XG4gICAgICAgICAgICAgIG5hdmJhck9wZW5cbiAgICAgICAgICAgICAgICA/ICdoLXNjcmVlbiB0ZXh0LTR4bCB0ZXh0LWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXInXG4gICAgICAgICAgICAgICAgOiAnaGlkZGVuJ1xuICAgICAgICAgICAgfSB3LWZ1bGwgbWQ6YmxvY2sgbWQ6dy1hdXRvYH1cbiAgICAgICAgICAgIGlkPSdtb2JpbGUtbWVudSdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sICBtdC0xMiBtZDptdC0wICAgbWQ6ZmxleC1yb3cgbWQ6c3BhY2UteC04ICAgdGV4dC1zbGF0ZS05MDAgZGFyazp0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BhZGVsLmFmcmljYScgY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtuYXZiYXJPcGVuID8gJ2hpZGRlbicgOiAndy03IGgtNyd9IGB9XG4gICAgICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICAgICAgICBkPSdNMjIgMTJjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMFMyIDYuNDc3IDIgMTJjMCA0Ljk5MSAzLjY1NyA5LjEyOCA4LjQzOCA5Ljg3OHYtNi45ODdoLTIuNTRWMTJoMi41NFY5Ljc5N2MwLTIuNTA2IDEuNDkyLTMuODkgMy43NzctMy44OSAxLjA5NCAwIDIuMjM4LjE5NSAyLjIzOC4xOTV2Mi40NmgtMS4yNmMtMS4yNDMgMC0xLjYzLjc3MS0xLjYzIDEuNTYyVjEyaDIuNzczbC0uNDQzIDIuODloLTIuMzN2Ni45ODhDMTguMzQzIDIxLjEyOCAyMiAxNi45OTEgMjIgMTJ6J1xuICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtcbiAgICAgICAgICAgICAgICAgICAgICBuYXZiYXJPcGVuXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdoLXNjcmVlbiB0ZXh0LTR4bCB0ZXh0LWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdoaWRkZW4nXG4gICAgICAgICAgICAgICAgICAgIH0gYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRmFjZWJvb2tcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wYWRlbC5hZnJpY2EvJyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke25hdmJhck9wZW4gPyAnaGlkZGVuJyA6ICd3LTcgaC03J30gYH1cbiAgICAgICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgICAgIGQ9J00xMi4zMTUgMmMyLjQzIDAgMi43ODQuMDEzIDMuODA4LjA2IDEuMDY0LjA0OSAxLjc5MS4yMTggMi40MjcuNDY1YTQuOTAyIDQuOTAyIDAgMDExLjc3MiAxLjE1MyA0LjkwMiA0LjkwMiAwIDAxMS4xNTMgMS43NzJjLjI0Ny42MzYuNDE2IDEuMzYzLjQ2NSAyLjQyNy4wNDggMS4wNjcuMDYgMS40MDcuMDYgNC4xMjN2LjA4YzAgMi42NDMtLjAxMiAyLjk4Ny0uMDYgNC4wNDMtLjA0OSAxLjA2NC0uMjE4IDEuNzkxLS40NjUgMi40MjdhNC45MDIgNC45MDIgMCAwMS0xLjE1MyAxLjc3MiA0LjkwMiA0LjkwMiAwIDAxLTEuNzcyIDEuMTUzYy0uNjM2LjI0Ny0xLjM2My40MTYtMi40MjcuNDY1LTEuMDY3LjA0OC0xLjQwNy4wNi00LjEyMy4wNmgtLjA4Yy0yLjY0MyAwLTIuOTg3LS4wMTItNC4wNDMtLjA2LTEuMDY0LS4wNDktMS43OTEtLjIxOC0yLjQyNy0uNDY1YTQuOTAyIDQuOTAyIDAgMDEtMS43NzItMS4xNTMgNC45MDIgNC45MDIgMCAwMS0xLjE1My0xLjc3MmMtLjI0Ny0uNjM2LS40MTYtMS4zNjMtLjQ2NS0yLjQyNy0uMDQ3LTEuMDI0LS4wNi0xLjM3OS0uMDYtMy44MDh2LS42M2MwLTIuNDMuMDEzLTIuNzg0LjA2LTMuODA4LjA0OS0xLjA2NC4yMTgtMS43OTEuNDY1LTIuNDI3YTQuOTAyIDQuOTAyIDAgMDExLjE1My0xLjc3MkE0LjkwMiA0LjkwMiAwIDAxNS40NSAyLjUyNWMuNjM2LS4yNDcgMS4zNjMtLjQxNiAyLjQyNy0uNDY1QzguOTAxIDIuMDEzIDkuMjU2IDIgMTEuNjg1IDJoLjYzem0tLjA4MSAxLjgwMmgtLjQ2OGMtMi40NTYgMC0yLjc4NC4wMTEtMy44MDcuMDU4LS45NzUuMDQ1LTEuNTA0LjIwNy0xLjg1Ny4zNDQtLjQ2Ny4xODItLjguMzk4LTEuMTUuNzQ4LS4zNS4zNS0uNTY2LjY4My0uNzQ4IDEuMTUtLjEzNy4zNTMtLjMuODgyLS4zNDQgMS44NTctLjA0NyAxLjAyMy0uMDU4IDEuMzUxLS4wNTggMy44MDd2LjQ2OGMwIDIuNDU2LjAxMSAyLjc4NC4wNTggMy44MDcuMDQ1Ljk3NS4yMDcgMS41MDQuMzQ0IDEuODU3LjE4Mi40NjYuMzk5LjguNzQ4IDEuMTUuMzUuMzUuNjgzLjU2NiAxLjE1Ljc0OC4zNTMuMTM3Ljg4Mi4zIDEuODU3LjM0NCAxLjA1NC4wNDggMS4zNy4wNTggNC4wNDEuMDU4aC4wOGMyLjU5NyAwIDIuOTE3LS4wMSAzLjk2LS4wNTguOTc2LS4wNDUgMS41MDUtLjIwNyAxLjg1OC0uMzQ0LjQ2Ni0uMTgyLjgtLjM5OCAxLjE1LS43NDguMzUtLjM1LjU2Ni0uNjgzLjc0OC0xLjE1LjEzNy0uMzUzLjMtLjg4Mi4zNDQtMS44NTcuMDQ4LTEuMDU1LjA1OC0xLjM3LjA1OC00LjA0MXYtLjA4YzAtMi41OTctLjAxLTIuOTE3LS4wNTgtMy45Ni0uMDQ1LS45NzYtLjIwNy0xLjUwNS0uMzQ0LTEuODU4YTMuMDk3IDMuMDk3IDAgMDAtLjc0OC0xLjE1IDMuMDk4IDMuMDk4IDAgMDAtMS4xNS0uNzQ4Yy0uMzUzLS4xMzctLjg4Mi0uMy0xLjg1Ny0uMzQ0LTEuMDIzLS4wNDctMS4zNTEtLjA1OC0zLjgwNy0uMDU4ek0xMiA2Ljg2NWE1LjEzNSA1LjEzNSAwIDExMCAxMC4yNyA1LjEzNSA1LjEzNSAwIDAxMC0xMC4yN3ptMCAxLjgwMmEzLjMzMyAzLjMzMyAwIDEwMCA2LjY2NiAzLjMzMyAzLjMzMyAwIDAwMC02LjY2NnptNS4zMzgtMy4yMDVhMS4yIDEuMiAwIDExMCAyLjQgMS4yIDEuMiAwIDAxMC0yLjR6J1xuICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtcbiAgICAgICAgICAgICAgICAgICAgICBuYXZiYXJPcGVuXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdoLXNjcmVlbiB0ZXh0LTR4bCB0ZXh0LWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdoaWRkZW4nXG4gICAgICAgICAgICAgICAgICAgIH0gYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgSW5zdGFncmFteycgJ31cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBpZD0ndGhlbWUtdG9nZ2xlJ1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2RhcmtNb2RlVG9nZ2xlfVxuICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtc2xhdGUtOTAwIGRhcms6dGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmhvdmVyOmJnLXNsYXRlLTkwMCAgcm91bmRlZC1sZyB0ZXh0LXNtICdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIGlkPSd0aGVtZS10b2dnbGUtZGFyay1pY29uJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgIGJsb2NrIGRhcms6aGlkZGVuIHctNyBoLTdgfVxuICAgICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xuICAgICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDIwIDIwJ1xuICAgICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xNy4yOTMgMTMuMjkzQTggOCAwIDAxNi43MDcgMi43MDdhOC4wMDEgOC4wMDEgMCAxMDEwLjU4NiAxMC41ODZ6Jz48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgaWQ9J3RoZW1lLXRvZ2dsZS1saWdodC1pY29uJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaGlkZGVuIGRhcms6YmxvY2sgdy03IGgtN2B9XG4gICAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjAgMjAnXG4gICAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD0nTTEwIDJhMSAxIDAgMDExIDF2MWExIDEgMCAxMS0yIDBWM2ExIDEgMCAwMTEtMXptNCA4YTQgNCAwIDExLTggMCA0IDQgMCAwMTggMHptLS40NjQgNC45NWwuNzA3LjcwN2ExIDEgMCAwMDEuNDE0LTEuNDE0bC0uNzA3LS43MDdhMSAxIDAgMDAtMS40MTQgMS40MTR6bTIuMTItMTAuNjA3YTEgMSAwIDAxMCAxLjQxNGwtLjcwNi43MDdhMSAxIDAgMTEtMS40MTQtMS40MTRsLjcwNy0uNzA3YTEgMSAwIDAxMS40MTQgMHpNMTcgMTFhMSAxIDAgMTAwLTJoLTFhMSAxIDAgMTAwIDJoMXptLTcgNGExIDEgMCAwMTEgMXYxYTEgMSAwIDExLTIgMHYtMWExIDEgMCAwMTEtMXpNNS4wNSA2LjQ2NEExIDEgMCAxMDYuNDY1IDUuMDVsLS43MDgtLjcwN2ExIDEgMCAwMC0xLjQxNCAxLjQxNGwuNzA3LjcwN3ptMS40MTQgOC40ODZsLS43MDcuNzA3YTEgMSAwIDAxLTEuNDE0LTEuNDE0bC43MDctLjcwN2ExIDEgMCAwMTEuNDE0IDEuNDE0ek00IDExYTEgMSAwIDEwMC0ySDNhMSAxIDAgMDAwIDJoMXonXG4gICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9J3AtNCAgc206cC04ICBiZy13aGl0ZSBkYXJrOmJnLXNsYXRlLTkwMCBkYXJrOmJnLW9wYWNpdHktNzUgYmctb3BhY2l0eS0yNSB0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NtOmZsZXggc206aXRlbXMtY2VudGVyIHNtOmp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1zbSBzbTp0ZXh0LWNlbnRlciAnPlxuICAgICAgICAgIFx1MDBBOSAyMDIyeycgJ31cbiAgICAgICAgICA8YSBocmVmPScjJyB0YXJnZXQ9J19ibGFuaycgY2xhc3NOYW1lPSdob3Zlcjp1bmRlcmxpbmUnPlxuICAgICAgICAgICAgUGFkZWwgQWZyaWNhXHUyMTIyXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBtdC00IHNwYWNlLXgtNiBzbTpqdXN0aWZ5LWNlbnRlciBzbTptdC0wJz5cbiAgICAgICAgICA8YSBocmVmPScjJyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICBUZXJtcyAmIENvbmRpdGlvbnNcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgaHJlZj0nIycgY2xhc3NOYW1lPScgJz5cbiAgICAgICAgICAgIFByaXZhY3kgUG9saWN5XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGhyZWY9JyMnIGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgIEludmVzdG9yc1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbZGFya01vZGUsIHNldERhcmtNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9J2VuJyBjbGFzc05hbWU9e2AgJHtkYXJrTW9kZSA/ICcnIDogJ2RhcmsnfSBzY3JvbGwtc21vb3RoYH0+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgICA8c2NyaXB0Pjwvc2NyaXB0PlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgICR7XG4gICAgICAgICAgICBkYXJrTW9kZVxuICAgICAgICAgICAgICA/ICcgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsMSknXG4gICAgICAgICAgICAgIDogJyBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMTUsIDIzLCA0MiwxKSdcbiAgICAgICAgICB9ICAgICAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSksdXJsKCcke2hlcm9JbWd9JylgLFxuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9J3RleHQtc2xhdGUtOTAwIGRhcms6dGV4dC13aGl0ZSAgYmctY292ZXIgYmctZml4ZWQgICAnXG4gICAgICA+XG4gICAgICAgIDxOYXYgc2V0RGFya01vZGU9e3NldERhcmtNb2RlfSAvPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgRm9ybSwgTGluaywgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBNZXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgZ2V0RmlsbXMsIEZpbG0gfSBmcm9tICd+L2FwaS9maWxtcyc7XG5pbXBvcnQgQ1RBIGZyb20gJ34vQ29tcG9uZW50cy9jdGEnO1xuaW1wb3J0IEhlcm8gZnJvbSAnfi9Db21wb25lbnRzL2hlcm8nO1xuaW1wb3J0IEluZm8gZnJvbSAnfi9Db21wb25lbnRzL2luZm8nO1xuaW1wb3J0IGluZm9JbWcgZnJvbSAnLi4vaW1hZ2VzL2Fib3V0LXBhLmpwZyc7XG5pbXBvcnQgeyBnZXRDbGllbnQsIHVybEZvciB9IGZyb20gJ34vbGliL3Nhbml0eS9nZXRDbGllbnQnO1xuaW1wb3J0IHtcbiAgUG9ydGFibGVUZXh0LFxuICBQb3J0YWJsZVRleHRUeXBlQ29tcG9uZW50LFxuICBQb3J0YWJsZVRleHRDb21wb25lbnRzUHJvdmlkZXIsXG59IGZyb20gJ0Bwb3J0YWJsZXRleHQvcmVhY3QnO1xuXG4vLyBsb2FkZXIoKSBtdXN0IGJlIGFzeW5jIVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcigpIHtcbiAgY29uc3QgbmV3c1Bvc3RzID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJuZXdzXCJdeyBfaWQsIHRpdGxlLCBzbHVnLCBcImZlYXR1cmVJbWFnZVwiOiBmZWF0dXJlLmFzc2V0LT51cmxcbiAgIH1gXG4gICk7XG4gIGNvbnN0IGFib3V0VGV4dCA9IGF3YWl0IGdldENsaWVudCgpLmZldGNoKFxuICAgIGAqW190eXBlID09IFwic2VjdGlvbnNcIiAmJiBzbHVnLmN1cnJlbnQgPT0gXCJhYm91dC1wYWRlbC1hZnJpY2FcIiBdeyBfaWQsIHRpdGxlLCBvdmVydmlldywgXCJmZWF0dXJlSW1hZ2VcIjogZmVhdHVyZS5hc3NldC0+dXJsXG4gICB9YFxuICApO1xuICByZXR1cm4geyBuZXdzUG9zdHMsIGFib3V0VGV4dCB9O1xufVxuXG4vLyBTZXJ2ZXIgU2lkZVxuLy9leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuLy9jb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbi8vY29uc3QgdGl0bGUgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgndGl0bGUnKTtcbi8vcmV0dXJuIGdldEZpbG1zKHRpdGxlKTtcbi8vfTtcblxuZXhwb3J0IGNvbnN0IG1ldGEgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdQYWRlbCBBZnJpY2EgfCBUaGUgTnVtYmVyIDEgQWZyaWNhbiBQYWRlbCBDb21wYW55JyxcbiAgICBkZXNjcmlwdGlvbjogJ1BhZGVsIEFmcmljYSBob21lIHBhZ2UnLFxuICAgIGtleXdvcmRzOiAncGFkZWwsIGFmcmljYSwgc3BvcnQnLFxuICB9O1xufTtcblxuLy8gQ2xpZW50IFNpZGVcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT2xkSW5kZXgoKSB7XG4gIGNvbnN0IHsgbmV3c1Bvc3RzLCBhYm91dFRleHQgfSA9IHVzZUxvYWRlckRhdGEoKTtcblxuICBjb25zdCBteVBvcnRhYmxlVGV4dENvbXBvbmVudHMgPSB7XG4gICAgdHlwZXM6IHtcbiAgICAgIGltYWdlOiAodmFsdWU6IGFueSkgPT4gKFxuICAgICAgICA8aW1nIHNyYz17dmFsdWUuYXNzZXR9IGtleT17dmFsdWUuX2lkfSBjbGFzc05hbWU9e3ZhbHVlLmFzc2V0fT48L2ltZz5cbiAgICAgICksXG4gICAgfSxcbiAgfTtcbiAgLy9jb25zdCBmaWxtcyA9IHVzZUxvYWRlckRhdGE8RmlsbVtdPigpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVyb1xuICAgICAgICBoZWFkaW5nPSdQYWRlbCBoYXMgdGFrZW4gRXVyb3BlIGJ5IHN0b3JtLiBOb3cgaXRcdTIwMTlzIHRpbWUgdG8gYnJpbmcgaXQgdG8gQWZyaWNhLlxuICAgICAgICAnXG4gICAgICAgIGJvZHk9J1VzaW5nIG91ciBleHRlbnNpdmUga25vd2xlZGdlIG9mIEFmcmljYSBhbmQgYnVzaW5lc3MgZGV2ZWxvcG1lbnQsIHdlIGFpbSB0byBwcm92aWRlIFBhZGVsLCBhcyBhIHNwb3J0IGFuZCBhIGNvbW11bml0eSBlbmFibGVyLCB0byBHaGFuYSwgS2VueWEsIE5pZ2VyaWEgYW5kIG90aGVyIFN1YiBTYWhhcmFuIGNvdW50cmllcy5cbiAgICAgICAgJ1xuICAgICAgICBidXR0b24xVGV4dD0nTGVhcm4gTW9yZSdcbiAgICAgICAgYnV0dG9uMVRvPScjYWJvdXQnXG4gICAgICAgIGJ1dHRvbjJUZXh0PSdXYW50IHRvIFBhcnRuZXI/J1xuICAgICAgICBidXR0b24yVG89JyNhYm91dCdcbiAgICAgICAgaW1nU3JjPScnXG4gICAgICAvPlxuXG4gICAgICA8SW5mbyBmbG93PSdsZWZ0JyAvPlxuICAgICAgPENUQVxuICAgICAgICBoZWFkaW5nPSdBcmUgeW91IGludGVyZXN0ZWQgaW4gcGFydG5lcmluZyB3aXRoIHRoZSBOdW1iZXIgMSBBZnJpY2FuIFBhZGVsIGNvbXBhbnk/J1xuICAgICAgICBib2R5PSdJbnRlZ2VyIGEgZXJvcyB2ZW5lbmF0aXMsIGludGVyZHVtIGxvcmVtIGV1LCBsb2JvcnRpcyBsaWd1bGEuIEN1cmFiaXR1ciB2ZWwgaXBzdW0gbm9uIHRlbGx1cyBjb252YWxsaXMgZWxlbWVudHVtLiBWaXZhbXVzIHB1bHZpbmFyIHJpc3VzIG5lYyBzYXBpZW4gY29tbW9kbyBiaWJlbmR1bSdcbiAgICAgICAgYnV0dG9uVGV4dD0nQ2xpY2sgaGVyZSdcbiAgICAgICAgYnV0dG9uVG89JyNhYm91dCdcbiAgICAgIC8+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nW2N0YV0gIHAtdnctMzIgcGItMCAgc3BhY2UteC0xMCBmbGV4ICc+XG4gICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPSd3LTEvNCc+XG4gICAgICAgICAgPGltZyBzcmM9e2luZm9JbWd9IC8+XG4gICAgICAgIDwvZmlndXJlPlxuICAgICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9J3ctMy80IHNwYWNlLXktNCAgJz5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTN4bCBmb250LWJvbGQnPlxuICAgICAgICAgICAgXHUyMDFDIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cdTIwMURcbiAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgey8qIFRoZSAyIFBvcnRhYmxlVGV4dCBpbnN0YW5jZXMgYmVsb3cgd2lsbCByZWNlaXZlIHRoZSBzYW1lIGN1c3RvbSBjb21wb25lbnRzICovfVxuICAgICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIGlkPSduZXdzJ1xuICAgICAgICBjbGFzc05hbWU9J1thYm91dF0gIHAtdnctMzIgYmctd2hpdGUgdGV4dC1jZW50ZXIgc3BhY2UteS12dy02LW1pbkB4bCAnXG4gICAgICA+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtYm9sZCc+TmV3czwvaDI+XG5cbiAgICAgICAgey8qXG4gICAgICAgIC8vU0VBUkNIIEZJTFRFUlxuICAgICAgICA8Rm9ybSBjbGFzc05hbWU9J3B5LTUnPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICBuYW1lPSd0aXRsZSdcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2VudGVyIHNvbWV0aGluZydcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdib3JkZXItMiByb3VuZGVkIHB5LTIgcHgtMidcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi04MDAgdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZCBteC0yJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIFNlYXJjaHsnICd9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgKi99XG5cbiAgICAgICAgey8qXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdhcC02ICc+XG4gICAgICAgICAge2ZpbG1zLnNsaWNlKDAsIDQpLm1hcCgoZmlsbSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hvdmVyOnNoYWRvdy0yeGwgaG92ZXI6c2NhbGUtMTA1IGhvdmVyOmZvbnQtYm9sZCBjdXJzb3ItcG9pbnRlciAgcC00ICBzcGFjZS15LXZ3LTQtbWF4QG1kJz5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYXNwZWN0LXNxdWFyZSByb3VuZGVkLW1kICAnXG4gICAgICAgICAgICAgICAgc3JjPXtmaWxtLmltYWdlfVxuICAgICAgICAgICAgICAgIGFsdD17ZmlsbS50aXRsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdj57ZmlsbS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfXsnICd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICovfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdhcC02ICc+XG4gICAgICAgICAge25ld3NQb3N0cz8ubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBuZXdzUG9zdHMuc2xpY2UoMCwgNikubWFwKChuZXdzOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e25ld3MuX2lkfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdob3ZlcjpzaGFkb3ctMnhsIGhvdmVyOnNjYWxlLTEwNSBob3Zlcjpmb250LWJvbGQgY3Vyc29yLXBvaW50ZXIgIHAtNCAgc3BhY2UteS12dy00LW1heEBtZCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKG5ld3MuZmVhdHVyZUltYWdlKS53aWR0aCg1MDApLnVybCgpfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e25ld3MudGl0bGV9XG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8TGluayB0bz17bmV3cy5zbHVnLmN1cnJlbnR9PntuZXdzLnRpdGxlfSA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvblxuICAgICAgICBpZD0nY29udGFjdCdcbiAgICAgICAgY2xhc3NOYW1lPSdbY29udGFjdF0gIGJnLXNsYXRlLTkwMCAgIHNwYWNlLXgtMTAgICBwLXZ3LTMyICBzcGFjZS15LTEwIG1kOnNwYWNlLXgtMTAgZmxleCBmbGV4LWNvbCAgdGV4dC13aGl0ZSAnXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPScgIG0tYXV0byAgdGV4dC1jZW50ZXIgbSBzcGFjZS15LXZ3LTYtbWluQHhsIG1kOnctMS8yICc+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC00eGwgZm9udC1ib2xkIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwICB2aWEtZ3JlZW4tNTAwIHRvLXllbGxvdy00MDAgJz5cbiAgICAgICAgICAgIENvbnRhY3QgVXNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYmFzZSc+XG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG9cbiAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgc3BhY2UteC12dy00LW1pbkB4bCAgbWQ6aW5saW5lLWZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQtc2xhdGUtOTAwJz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdweS12dy00LW1pbkB4bC1tYXhAMnhsIHB4LXZ3LTQtbWluQHhsLW1heEAyeGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgICB0by15ZWxsb3ctNDAwIHJvdW5kZWQteGwgZm9udC1ib2xkIGhvdmVyOmJnLWdyYWRpZW50LXRvLXRsIGhvdmVyOnNjYWxlLTEwNSBzaGFkb3ctMnhsJz5cbiAgICAgICAgICAgICAgRW1haWwgVXNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9JyBweS12dy00LW1pbkB4bC1tYXhAMnhsIHB4LXZ3LTQtbWluQHhsLW1heEAyeGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS13aGl0ZSAgIHRvLWdyYXktMjAwIHJvdW5kZWQteGwgZm9udC1ib2xkIGhvdmVyOmJnLWdyYWRpZW50LXRvLXRsIGhvdmVyOnNjYWxlLTEwNSBzaGFkb3ctMnhsJz5cbiAgICAgICAgICAgICAgSm9pbiBNYWlsaW5nIExpc3RcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuXG5pbnRlcmZhY2UgQ1RBQ29udGVudCB7XG4gIGhlYWRpbmc6IHN0cmluZztcbiAgYm9keTogc3RyaW5nO1xuICBidXR0b25UZXh0OiBzdHJpbmc7XG4gIGJ1dHRvblRvOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENUQShwcm9wczogQ1RBQ29udGVudCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBpZD0ncGFydG5lcnMnXG4gICAgICBjbGFzc05hbWU9J1tjdGFdIHAtMjAgbWQ6bXgtMjAgYmctc2xhdGUtOTAwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgYWxpZ24tbWlkZGxlIHJvdW5kZWQtbWQgc2hhZG93LTJ4bCB0ZXh0LXdoaXRlJ1xuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPScgIG0tYXV0byAgdGV4dC1jZW50ZXIgIHNwYWNlLXktdnctNi1taW5AeGwgbWQ6dy0zLzQgJz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC02eGwgZm9udC1oZWFkaW5nIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwICB2aWEtZ3JlZW4tNTAwIHRvLXllbGxvdy00MDAgJz5cbiAgICAgICAgICB7cHJvcHMuaGVhZGluZ31cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdiYXNlJz57cHJvcHMuYm9keX08L3A+XG4gICAgICAgIDxMaW5rIHRvPXtwcm9wcy5idXR0b25Ub30gY2xhc3NOYW1lPScgaW5saW5lLWZsZXggJz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncHktNCBweC02IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwICB2aWEtZ3JlZW4tNTAwIHRvLXllbGxvdy00MDAgcm91bmRlZC14bCB0ZXh0LWJsYWNrIGZvbnQtYm9sZCBob3ZlcjpiZy1ncmFkaWVudC10by10bCBob3ZlcjpzY2FsZS0xMDUgc2hhZG93LTJ4bCc+XG4gICAgICAgICAgICB7cHJvcHMuYnV0dG9uVGV4dH1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgaGVyb0ltZyBmcm9tICcuLi9pbWFnZXMvcGFkZWwtaGVyby5qcGcnO1xuXG5pbnRlcmZhY2UgSGVyb0NvbnRlbnQge1xuICBoZWFkaW5nOiBzdHJpbmc7XG4gIGJvZHk6IHN0cmluZztcbiAgYnV0dG9uMVRleHQ6IHN0cmluZztcbiAgYnV0dG9uMVRvOiBzdHJpbmc7XG4gIGJ1dHRvbjJUZXh0OiBzdHJpbmc7XG4gIGJ1dHRvbjJUbzogc3RyaW5nO1xuICBpbWdTcmM6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVybyhwcm9wczogSGVyb0NvbnRlbnQpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J1toZXJvXSBiZy1ub25lICBtZDpweS0xMiAgIHB4LTYgbWQ6cHgtMjQgbWItMTIgZmxleCAgZmxleC1jb2wgbWQ6ZmxleC1yb3cgYWxpZ24tbWlkZGxlIGp1c3RpZnktYmV0d2VlbiAgYmctY292ZXIgIG1kOnNwYWNlLXgtMTJcdCAnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBtZDp3LTIvNSBteS1hdXRvIHNwYWNlLXktdnctMi1taW5AeGwgbWQ6cHktMTYgICc+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtNHhsIG1kOnRleHQtNnhsIGZvbnQtaGVhZGluZyB1cHBlcmNhc2UgJz5cbiAgICAgICAgICBQYWRlbCBoYXMgdGFrZW4gRXVyb3BlIGJ5IHN0b3JtLiZuYnNwOzxicj48L2JyPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYmxvY2sgdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgIHZpYS1ncmVlbi01MDAgdG8tc2xhdGUtOTAwIGRhcms6dG8teWVsbG93LTMwMCc+XG4gICAgICAgICAgICBOb3cgaXQncyB0aW1lIHRvIGJyaW5nIGl0IHRvIEFmcmljYVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtYmFzZSAgJz5cbiAgICAgICAgICBcdUQ4M0RcdURDNEIgSW50ZXJlc3RlZCBpbiBhIHBhcnRuZXJzaGlwP1xuICAgICAgICAgIDxhIGNsYXNzTmFtZT0ndW5kZXJsaW5lJyBocmVmPScnPlxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIEVtYWlsIHVzXG4gICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9J3ctZnVsbCBtZDp3LTIvNSBteS0xMCB0ZXh0LXNsYXRlLTkwMCAgZGFyazp0ZXh0LXdoaXRlIG1kOm15LWF1dG8gc3BhY2UteS12dy00LW1pbkB4bCBiZy13aGl0ZSBkYXJrOmJnLXNsYXRlLTkwMCBkYXJrOmJnLW9wYWNpdHktMjUgIGJnLW9wYWNpdHktNTAgYmFja2Ryb3AtYmx1ci1sZyBzaGFkb3ctMnhsXHQgcC02ICAgIGgtZml0ICc+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1oZWFkaW5nIHRleHQtbGcgIHVwcGVyY2FzZSc+Sm9pbiB0aGUgTWFpbGluZyBMaXN0PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNic+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJyBjbGFzc05hbWU9J2Jsb2NrICB0ZXh0LXhzICAgJz5cbiAgICAgICAgICAgIFlvdXIgTmFtZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgaWQ9J25hbWUnXG4gICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LXNtIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNSAwICBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAnXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nSm9lIEJsb2dncydcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi02Jz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnIGNsYXNzTmFtZT0nYmxvY2sgdGV4dC14cyAgJz5cbiAgICAgICAgICAgIFlvdXIgZW1haWxcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0nZW1haWwnXG4gICAgICAgICAgICBpZD0nZW1haWwnXG4gICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LXNtICBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAnXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nbmFtZUBtYWlsLmNvbSdcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi02Jz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnIGNsYXNzTmFtZT0nYmxvY2sgdGV4dC14cyAnPlxuICAgICAgICAgICAgWW91ciBDb21wYW55XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICBpZD0nY29tcGFueSdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtc20gICBibG9jayB3LWZ1bGwgcC0yLjUgICBkYXJrOnRleHQtd2hpdGUgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwJ1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0FjbWUgSW5jJ1xuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgIGNsYXNzTmFtZT0nIHB5LTQgcHgtNiBiZy1ncmFkaWVudC10by1iciBmcm9tLWdyZWVuLTMwMCB0by1zbGF0ZS05MDAgZGFyazp0by15ZWxsb3ctMzAwIHRleHQtd2hpdGUgZGFyazp0ZXh0LXNsYXRlLTkwMCBmb250LWhlYWRpbmcgdXBwZXJjYXNlIGhvdmVyOmJnLWdyYWRpZW50LXRvLXRsIGhvdmVyOnNjYWxlLTEwNSBzaGFkb3ctMnhsICdcbiAgICAgICAgPlxuICAgICAgICAgIFN1Ym1pdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iLCAiaW1wb3J0IGluZm9JbWcgZnJvbSAnLi4vaW1hZ2VzL2Fib3V0LXBhLmpwZyc7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgeyBQb3J0YWJsZVRleHQgfSBmcm9tICdAcG9ydGFibGV0ZXh0L3JlYWN0JztcblxuaW50ZXJmYWNlIEluZm9Db250ZW50IHtcbiAgZmxvdzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmZvKHByb3BzOiBJbmZvQ29udGVudCkge1xuICBjb25zdCB7IGFib3V0VGV4dCB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIGNvbnN0IG15UG9ydGFibGVUZXh0Q29tcG9uZW50cyA9IHtcbiAgICB0eXBlczoge1xuICAgICAgaW1hZ2U6ICh2YWx1ZTogYW55KSA9PiAoXG4gICAgICAgIDxpbWcgc3JjPXt2YWx1ZS5hc3NldH0ga2V5PXt2YWx1ZS5faWR9IGNsYXNzTmFtZT17dmFsdWUuYXNzZXR9PjwvaW1nPlxuICAgICAgKSxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIGlkPSdhYm91dCdcbiAgICAgIGNsYXNzTmFtZT17YFtjdGFdICBwLXZ3LTMyICBzcGFjZS15LTEwIG1kOnNwYWNlLXgtMTAgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyAke1xuICAgICAgICBwcm9wcy5mbG93ID09ICdsZWZ0JyA/ICcnIDogJyBtZDpmbGV4LXJvdy1yZXZlcnNlIHNwYWNlLXgtcmV2ZXJzZSdcbiAgICAgIH0gYH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6dy0xLzIgc3BhY2UteS00ICAnPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTR4bCBmb250LWJvbGQnPnthYm91dFRleHRbMF0udGl0bGV9PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4tY29udGVudCBzcGFjZS15LTInPlxuICAgICAgICAgIHthYm91dFRleHRbMF0ub3ZlcnZpZXc/Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gYWJvdXRUZXh0WzBdLm92ZXJ2aWV3Lm1hcCgocGFyYWdyYXBoczogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgPFBvcnRhYmxlVGV4dFxuICAgICAgICAgICAgICAgICAga2V5PXtwYXJhZ3JhcGhzLl9pZH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtbcGFyYWdyYXBoc119XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXtteVBvcnRhYmxlVGV4dENvbXBvbmVudHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPSdtZDp3LTEvMiBiZy1zbGF0ZS0zMDAnPlxuICAgICAgICA8aW1nIHNyYz17YWJvdXRUZXh0WzBdLmZlYXR1cmVJbWFnZX0gLz5cbiAgICAgIDwvZmlndXJlPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgUGljb1Nhbml0eSBmcm9tICdwaWNvc2FuaXR5JztcblxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XG5cbi8vIFN0YW5kYXJkIGNsaWVudCBmb3IgZmV0Y2hpbmcgZGF0YVxuZXhwb3J0IGNvbnN0IHNhbml0eUNsaWVudCA9IG5ldyBQaWNvU2FuaXR5KGNvbmZpZyk7XG5cbmV4cG9ydCBjb25zdCBidWlsZGVyID0gaW1hZ2VVcmxCdWlsZGVyKHNhbml0eUNsaWVudCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxGb3Ioc291cmNlOiBhbnkpIHtcbiAgcmV0dXJuIGJ1aWxkZXIuaW1hZ2Uoc291cmNlKTtcbn1cblxuLy8gQXV0aGVudGljYXRlZCBjbGllbnQgZm9yIGZldGNoaW5nIGRyYWZ0IGRvY3VtZW50c1xuZXhwb3J0IGNvbnN0IHByZXZpZXdDbGllbnQgPSBuZXcgUGljb1Nhbml0eSh7XG4gIC4uLmNvbmZpZyxcbiAgdXNlQ2RuOiBmYWxzZSxcbiAgLy90b2tlbjogcHJvY2Vzcy5lbnYuU0FOSVRZX0FQSV9UT0tFTixcbn0pO1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gY2hvb3NlIHRoZSBjb3JyZWN0IGNsaWVudFxuZXhwb3J0IGNvbnN0IGdldENsaWVudCA9ICh1c2VQcmV2aWV3ID0gZmFsc2UpID0+XG4gIHVzZVByZXZpZXcgPyBwcmV2aWV3Q2xpZW50IDogc2FuaXR5Q2xpZW50O1xuIiwgImV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGFwaVZlcnNpb246ICcyMDIxLTAzLTI1JyxcbiAgLy8gRmluZCB0aGVzZSBpbiB5b3VyIC4vc3R1ZGlvL3Nhbml0eS5qc29uIGZpbGVcbiAgZGF0YXNldDogJ3Byb2R1Y3Rpb24nLFxuICBwcm9qZWN0SWQ6ICdxaThocjNydicsXG4gIHVzZUNkbjogZmFsc2UsXG59O1xuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCc7XG5cbmltcG9ydCB7IGdldENsaWVudCB9IGZyb20gJ34vbGliL3Nhbml0eS9nZXRDbGllbnQnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKHsgcGFyYW1zIH06IHsgcGFyYW1zOiBhbnkgfSkge1xuICAvLyBRdWVyeSBmb3IgX2FsbF8gZG9jdW1lbnRzIHdpdGggdGhpcyBzbHVnXG4gIC8vIFRoZXJlIGNvdWxkIGJlIHR3bzogRHJhZnQgYW5kIFB1Ymxpc2hlZCFcbiAgY29uc3QgaW5pdGlhbERhdGEgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaChcbiAgICBgKltfdHlwZSA9PSBcIm5ld3NcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddeyBfaWQsIHRpdGxlLCBzbHVnLCBcImZlYXR1cmVJbWFnZVwiOiBmZWF0dXJlLmFzc2V0LT51cmxcbiAgfWAsXG4gICAgeyBzbHVnOiBwYXJhbXMuc2x1ZyB9XG4gICk7XG5cbiAgcmV0dXJuIHsgaW5pdGlhbERhdGEgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3c1Bvc3QoKSB7XG4gIGxldCB7IGluaXRpYWxEYXRhIH0gPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIHBhZGRpbmc6IDIwIH19PlxuICAgICAgPGgxPntpbml0aWFsRGF0YVswXS50aXRsZX08L2gxPlxuICAgICAgPGltZyBzcmM9e2luaXRpYWxEYXRhWzBdLmZlYXR1cmVJbWFnZX0+PC9pbWc+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiAnc3lzdGVtLXVpLCBzYW5zLXNlcmlmJywgbGluZUhlaWdodDogJzEuNCcgfX0+XG4gICAgICA8aDE+V2VsY29tZSB0byBSZW1peDwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9J3AtNic+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9yZW1peC5ydW4vdHV0b3JpYWxzL2Jsb2cnXG4gICAgICAgICAgICByZWw9J25vcmVmZXJyZXInXG4gICAgICAgICAgPjwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgRm9ybSwgTGluaywgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBNZXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgZ2V0RmlsbXMsIEZpbG0gfSBmcm9tICd+L2FwaS9maWxtcyc7XG5pbXBvcnQgQ1RBIGZyb20gJ34vQ29tcG9uZW50cy9jdGEnO1xuaW1wb3J0IEhlcm8gZnJvbSAnfi9Db21wb25lbnRzL2hlcm8nO1xuaW1wb3J0IEhlcm9BbHQgZnJvbSAnfi9Db21wb25lbnRzL2hlcm8tYWx0JztcbmltcG9ydCBIZXJvV2hpdGUgZnJvbSAnfi9Db21wb25lbnRzL2hlcm8td2hpdGUnO1xuXG5pbXBvcnQgSW5mbyBmcm9tICd+L0NvbXBvbmVudHMvaW5mbyc7XG5pbXBvcnQgaW5mb0ltZyBmcm9tICcuLi9pbWFnZXMvYWJvdXQtcGEuanBnJztcbmltcG9ydCB7IGdldENsaWVudCwgdXJsRm9yIH0gZnJvbSAnfi9saWIvc2FuaXR5L2dldENsaWVudCc7XG5pbXBvcnQge1xuICBQb3J0YWJsZVRleHQsXG4gIFBvcnRhYmxlVGV4dFR5cGVDb21wb25lbnQsXG4gIFBvcnRhYmxlVGV4dENvbXBvbmVudHNQcm92aWRlcixcbn0gZnJvbSAnQHBvcnRhYmxldGV4dC9yZWFjdCc7XG5cbi8vIGxvYWRlcigpIG11c3QgYmUgYXN5bmMhXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKCkge1xuICBjb25zdCBuZXdzUG9zdHMgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaChcbiAgICBgKltfdHlwZSA9PSBcIm5ld3NcIl17IF9pZCwgdGl0bGUsIHNsdWcsIFwiZmVhdHVyZUltYWdlXCI6IGZlYXR1cmUuYXNzZXQtPnVybFxuICAgfWBcbiAgKTtcbiAgY29uc3QgYWJvdXRUZXh0ID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJzZWN0aW9uc1wiICYmIHNsdWcuY3VycmVudCA9PSBcImFib3V0LXBhZGVsLWFmcmljYVwiIF17IF9pZCwgdGl0bGUsIG92ZXJ2aWV3LCBcImZlYXR1cmVJbWFnZVwiOiBmZWF0dXJlLmFzc2V0LT51cmxcbiAgIH1gXG4gICk7XG4gIHJldHVybiB7IG5ld3NQb3N0cywgYWJvdXRUZXh0IH07XG59XG5cbi8vIFNlcnZlciBTaWRlXG4vL2V4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4vL2NvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuLy9jb25zdCB0aXRsZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCd0aXRsZScpO1xuLy9yZXR1cm4gZ2V0RmlsbXModGl0bGUpO1xuLy99O1xuXG5leHBvcnQgY29uc3QgbWV0YSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1BhZGVsIEFmcmljYSB8IFRoZSBOdW1iZXIgMSBBZnJpY2FuIFBhZGVsIENvbXBhbnknLFxuICAgIGRlc2NyaXB0aW9uOiAnUGFkZWwgQWZyaWNhIGhvbWUgcGFnZScsXG4gICAga2V5d29yZHM6ICdwYWRlbCwgYWZyaWNhLCBzcG9ydCcsXG4gIH07XG59O1xuXG4vLyBDbGllbnQgU2lkZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBuZXdzUG9zdHMsIGFib3V0VGV4dCB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIGNvbnN0IG15UG9ydGFibGVUZXh0Q29tcG9uZW50cyA9IHtcbiAgICB0eXBlczoge1xuICAgICAgaW1hZ2U6ICh2YWx1ZTogYW55KSA9PiAoXG4gICAgICAgIDxpbWcgc3JjPXt2YWx1ZS5hc3NldH0ga2V5PXt2YWx1ZS5faWR9IGNsYXNzTmFtZT17dmFsdWUuYXNzZXR9PjwvaW1nPlxuICAgICAgKSxcbiAgICB9LFxuICB9O1xuICAvL2NvbnN0IGZpbG1zID0gdXNlTG9hZGVyRGF0YTxGaWxtW10+KCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZXJvXG4gICAgICAgIGhlYWRpbmc9J1BhZGVsIGhhcyB0YWtlbiBFdXJvcGUgYnkgc3Rvcm0uIE5vdyBpdFx1MjAxOXMgdGltZSB0byBicmluZyBpdCB0byBBZnJpY2EuXG4gICAgICAgICdcbiAgICAgICAgYm9keT0nVXNpbmcgb3VyIGV4dGVuc2l2ZSBrbm93bGVkZ2Ugb2YgQWZyaWNhIGFuZCBidXNpbmVzcyBkZXZlbG9wbWVudCwgd2UgYWltIHRvIHByb3ZpZGUgUGFkZWwsIGFzIGEgc3BvcnQgYW5kIGEgY29tbXVuaXR5IGVuYWJsZXIsIHRvIEdoYW5hLCBLZW55YSwgTmlnZXJpYSBhbmQgb3RoZXIgU3ViIFNhaGFyYW4gY291bnRyaWVzLlxuICAgICAgICAnXG4gICAgICAgIGJ1dHRvbjFUZXh0PSdMZWFybiBNb3JlJ1xuICAgICAgICBidXR0b24xVG89JyNhYm91dCdcbiAgICAgICAgYnV0dG9uMlRleHQ9J1dhbnQgdG8gUGFydG5lcj8nXG4gICAgICAgIGJ1dHRvbjJUbz0nI2Fib3V0J1xuICAgICAgICBpbWdTcmM9JydcbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFVBQVU7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bEM7QUFBQTtBQUdGLFNBQU8sRUFBRSxXQUFXO0FBQUE7QUFVZixJQUFNLFFBQU8sTUFBTTtBQUN4QixTQUFPO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUE7QUFBQTtBQU1DLGlCQUFpQjtBQUM5QixRQUFNLEVBQUUsV0FBVyxjQUFjO0FBRWpDLFFBQU0sMkJBQTJCO0FBQUEsSUFDL0IsT0FBTztBQUFBLE1BQ0wsT0FBTyxDQUFDLFVBQ04sb0NBQUMsT0FBRDtBQUFBLFFBQUssS0FBSyxNQUFNO0FBQUEsUUFBTyxLQUFLLE1BQU07QUFBQSxRQUFLLFdBQVcsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUs5RCxTQUNFLDBEQUNFLG9DQUFDLE1BQUQ7QUFBQSxJQUNFLFNBQVE7QUFBQSxJQUVSLE1BQUs7QUFBQSxJQUVMLGFBQVk7QUFBQSxJQUNaLFdBQVU7QUFBQSxJQUNWLGFBQVk7QUFBQSxJQUNaLFdBQVU7QUFBQSxJQUNWLFFBQU87QUFBQTtBQUFBOzs7QVg5RGYsb0JBQWtDO0FBQzNCLElBQU0sUUFBUSxFQUFFLFFBQVE7QUFDeEIsSUFBTSxTQUFTO0FBQUEsRUFDcEIsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVixvQkFBb0I7QUFBQSxJQUNsQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLGdCQUFnQjtBQUFBLElBQ2QsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVixnQkFBZ0I7QUFBQSxJQUNkLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsZ0JBQWdCO0FBQUEsSUFDZCxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
