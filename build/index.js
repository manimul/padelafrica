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

// empty-module:~/utils/gtags.client
var require_gtags = __commonJS({
  "empty-module:~/utils/gtags.client"(exports, module2) {
    init_react();
    module2.exports = {};
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
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix3 = __toModule(require_remix());
var import_react_cookie_consent = __toModule(require("react-cookie-consent"));
var import_react = __toModule(require("react"));

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-EQSYXUZF.css";

// app/styles/app.css
var app_default = "/build/_assets/app-IS23VVDS.css";

// app/images/pa-logo-dark.svg
var pa_logo_dark_default = "/build/_assets/pa-logo-dark-SY52HXPX.svg";

// app/images/pa-logo-light.svg
var pa_logo_light_default = "/build/_assets/pa-logo-light-KD2TYXIX.svg";

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/root.tsx
var import_remix4 = __toModule(require_remix());
var gtag = __toModule(require_gtags());

// app/Components/info-bar.tsx
init_react();
var import_remix2 = __toModule(require_remix());
function InfoBar() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-auto flex-row bg-gradient-to-r from-green-500 to-yellow-500 text-slate-900 p-3 text-center"
  }, "\u{1F44B} Hey! We are doing some presentation roadshows around Sweden and Denmark. Why don't you\xA0", /* @__PURE__ */ React.createElement(import_remix2.Link, {
    className: "underline bold",
    to: "/join-us"
  }, "join us."));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/root.tsx
var loader = async () => {
  return (0, import_remix4.json)({ gaTrackingId: process.env.GA_TRACKING_ID });
};
var meta = () => {
  return { title: "Padel Africa", description: "" };
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
  const doNothing = () => {
  };
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "bg-slate-900 border-gray-200 px-4 sm:px-12 py-6 w-full z-10 text-black   "
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
    className: "flex flex-col  mt-12 md:mt-0   md:flex-row md:space-x-8 space-y-4 opacity-90  md:space-y-0 font-heading uppercase tracking-widest   text-slate-900 dark:text-white"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "hover:underline  hover:underline-offset-4 hover:font-black  hover:opacity-100 transition-all ease-in-out  ",
    onClick: navbarOpen ? handleToggle : doNothing
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/"
  }, "Home ")), /* @__PURE__ */ React.createElement("li", {
    className: "hover:underline  hover:underline-offset-4 hover:font-black  hover:opacity-100 transition-all ease-in-out  ",
    onClick: navbarOpen ? handleToggle : doNothing
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/about"
  }, "About ")), /* @__PURE__ */ React.createElement("li", {
    className: "hover:underline  hover:underline-offset-4 hover:font-black  hover:opacity-100 transition-all ease-in-out  ",
    onClick: navbarOpen ? handleToggle : doNothing
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/join-us"
  }, "Join Us ")), /* @__PURE__ */ React.createElement("li", {
    className: "hover:underline  hover:underline-offset-4 hover:font-black  hover:opacity-100 transition-all ease-in-out  ",
    onClick: navbarOpen ? handleToggle : doNothing
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/news"
  }, "News ")), /* @__PURE__ */ React.createElement("li", {
    className: "hover:underline  hover:underline-offset-4 hover:font-black  hover:opacity-100 transition-all ease-in-out  ",
    onClick: navbarOpen ? handleToggle : doNothing
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/contact"
  }, "Contact ")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.facebook.com/padelafrica",
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
    href: "https://www.linkedin.com/company/padelafrica/",
    className: ""
  }, /* @__PURE__ */ React.createElement("svg", {
    className: ` ${navbarOpen ? "hidden" : "w-7 h-7"} `,
    fill: "currentColor",
    viewBox: "0 0 17 17",
    height: "100%",
    width: "100%",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
    clipRule: "evenodd"
  })), /* @__PURE__ */ React.createElement("span", {
    className: ` ${navbarOpen ? "h-screen text-4xl text-center align-middle justify-center" : "hidden"} `
  }, "Linkedin", " "))), /* @__PURE__ */ React.createElement("li", null, " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.instagram.com/padel_africa/",
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
    hidden: true,
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
    className: "   bg-slate-900   text-slate-900 dark:text-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sm:flex sm:items-center sm:justify-between px-4 sm:px-12 py-6  mx-auto font-heading uppercase text-md tracking-widest "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm sm:text-center  "
  }, "\xA9 2022", " ", /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "https://www.padel.africa",
    target: "_blank",
    className: "hover:underline"
  }, "Padel Africa\u2122"), ". All Rights Reserved"), /* @__PURE__ */ React.createElement("span", {
    className: " sm:text-center font-heading uppercase text-md "
  }, "Padel Africa AB Org: 559341-5770"), /* @__PURE__ */ React.createElement("div", {
    className: "flex mt-4 space-x-6 sm:justify-center sm:mt-0 font-heading uppercase text-md"
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/",
    className: ""
  }, "Home"), /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/about",
    className: ""
  }, "About", " "), " ", /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/join-us",
    className: ""
  }, "Join Us"), /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/news",
    className: ""
  }, "News"), /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/contact",
    className: ""
  }, "Contact"))));
}
function App() {
  const [darkMode, setDarkMode] = (0, import_react.useState)(false);
  const location = (0, import_remix3.useLocation)();
  const { gaTrackingId } = (0, import_remix3.useLoaderData)();
  (0, import_react.useEffect)(() => {
    if (gaTrackingId == null ? void 0 : gaTrackingId.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }
  }, [location, gaTrackingId]);
  const matches = (0, import_remix3.useMatches)();
  console.log(matches);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: ` ${darkMode ? "" : "dark"} scroll-smooth`
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("script", null), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("script", {
    async: true,
    src: `https://www.googletagmanager.com/gtag/js?id=G-MV5HYEZ67F`
  }), /* @__PURE__ */ React.createElement("script", {
    async: true,
    id: "gtag-init",
    dangerouslySetInnerHTML: {
      __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-MV5HYEZ67F', {
                  page_path: window.location.pathname,
                });
              `
    }
  }), matches[1].pathname != "/join-us" && /* @__PURE__ */ React.createElement(InfoBar, null), /* @__PURE__ */ React.createElement(Nav, {
    setDarkMode
  }), /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(Footer, null), /* @__PURE__ */ React.createElement(import_react_cookie_consent.default, {
    location: "bottom",
    buttonText: "Accept",
    cookieName: "padel-africa-cookie",
    style: { background: "#2B373B" },
    buttonStyle: { color: "#4e503b", fontSize: "1rem" },
    expires: 150
  }, "This website uses cookies to enhance the user experience.", " "), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/more-than-sport.tsx
var more_than_sport_exports = {};
__export(more_than_sport_exports, {
  default: () => moreThanSport
});
init_react();
var import_remix5 = __toModule(require_remix());
function moreThanSport() {
  return /* @__PURE__ */ React.createElement("section", {
    className: "w-full  md:px-32 py-24 px-3 space-y-12   bg-slate-900 justify-between  "
  }, /* @__PURE__ */ React.createElement(import_remix5.Outlet, null));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/more-than-sport/result.tsx
var result_exports = {};
__export(result_exports, {
  action: () => action,
  default: () => Result
});
init_react();

// app/Components/vote-results.tsx
init_react();
var import_react2 = __toModule(require("@remix-run/react"));
function VoteGameResults(props) {
  let actionData = (0, import_react2.useActionData)();
  let state = (actionData == null ? void 0 : actionData.subscription) ? "success" : (actionData == null ? void 0 : actionData.error) ? "error" : "idle";
  const darkMode = false;
  const params = (0, import_react2.useParams)();
  const id = params.resultId;
  return /* @__PURE__ */ React.createElement("div", {
    className: "text-center space-y-8"
  }, /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("div", {
    className: " space-y-8",
    "aria-hidden": state === "success"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl uppercase font-heading"
  }, "\u{1F973} Super!"), /* @__PURE__ */ React.createElement("p", {
    className: "text-5xl uppercase font-heading"
  }, "You think padel is", " ", /* @__PURE__ */ React.createElement("span", {
    className: "text-yellow-500 italic"
  }, "more than sport."), /* @__PURE__ */ React.createElement("br", null), " You Think Padel is", " ", /* @__PURE__ */ React.createElement("span", {
    className: "text-yellow-500 italic"
  }, id)), /* @__PURE__ */ React.createElement("p", {
    className: "text-5xl uppercase font-heading"
  }, "\u{1F64C} Great choice! "))), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement(import_react2.Form, {
    className: "   text-slate-900 m-auto w-1/2  ",
    method: "post",
    "aria-hidden": state === "success"
  }, /* @__PURE__ */ React.createElement("fieldset", {
    className: "flex "
  }, /* @__PURE__ */ React.createElement("div", {
    className: " flex-grow"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "email",
    name: "email",
    id: "email",
    className: "bg-gray-50 border border-gray-300 text-sm dark:text-slate-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500",
    placeholder: "name@mail.com",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: " hidden"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "vote",
    id: "vote",
    className: "bg-gray-50 border border-gray-300 text-sm dark:text-slate-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500",
    placeholder: id,
    value: id,
    required: true
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "  px-6 bg-gradient-to-br from-green-300 to-slate-900 dark:to-yellow-300 text-white dark:text-slate-900 font-heading uppercase hover:bg-gradient-to-tl hover:scale-105 shadow-2xl "
  }, "Submit")), /* @__PURE__ */ React.createElement("p", null, (actionData == null ? void 0 : actionData.error) ? actionData.message : /* @__PURE__ */ React.createElement(React.Fragment, null, " \xA0 "))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full  my-10 text-slate-900  dark:text-white md:my-auto space-y-vw-4-min@xl p-6    h-fit ",
    "aria-hidden": state !== "success"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-5xl uppercase font-heading"
  }, "\u{1F680} You're now entered into the competition!"), /* @__PURE__ */ React.createElement("p", {
    className: "text-4xl uppercase font-heading"
  }, "Keep following us to stay in the loop!")), /* @__PURE__ */ React.createElement(import_react2.Link, {
    className: "underline",
    to: "/more-than-sport/game"
  }, "Restart")));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/more-than-sport/result.tsx
var action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let vote = formData.get("vote");
  const API_KEY = "lGf6kOnFOOC-YOikZD_YPw";
  const FORM_ID = "3022054";
  const API = "https://api.convertkit.com/v3/";
  let res = await fetch(`${API}/forms/${FORM_ID}/subscribe`, {
    method: "post",
    body: JSON.stringify({
      email,
      fields: { vote },
      api_key: API_KEY
    }),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
  return res.json();
};
function Result() {
  return /* @__PURE__ */ React.createElement(VoteGameResults, {
    name: "",
    emoji: ""
  });
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/more-than-sport/result/$resultId.tsx
var resultId_exports = {};
__export(resultId_exports, {
  default: () => ResultId
});
init_react();
var import_react3 = __toModule(require("@remix-run/react"));
function ResultId() {
  const params = (0, import_react3.useParams)();
  const id = params.resultId;
  return id;
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/more-than-sport/index.tsx
var more_than_sport_exports2 = {};
__export(more_than_sport_exports2, {
  default: () => moreThanSportIndex
});
init_react();
var import_remix6 = __toModule(require_remix());
function moreThanSportIndex() {
  return /* @__PURE__ */ React.createElement("section", {
    className: "w-full md:p-32 py-12 px-3 space-y-12   bg-slate-900 justify-between  "
  }, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "game"
  }, "Get Started"));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/more-than-sport/game.tsx
var game_exports = {};
__export(game_exports, {
  default: () => Game
});
init_react();

// app/Components/vote.tsx
init_react();

// app/Components/vote-play.tsx
init_react();

// app/Components/vote-play-button.tsx
init_react();
var import_remix7 = __toModule(require_remix());
function VotePlayButton(props) {
  const resultLink = "/more-than-sport/result/" + props.name + props.emoji;
  return /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: resultLink,
    className: "group  bg-slate-800 p-4 rounded-xl py-8  text-center shadow-xl transform hover:scale-105 hover:bg-slate-900 hover:shadow-2xl hover:text-yellow-400  hover:-translate-y-2 duration-200 ease-in-out "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-2xl block transform group-hover:scale-150 group-hover:rotate-6 duration-200 ease-in-out"
  }, props.emoji), /* @__PURE__ */ React.createElement("span", {
    className: "md:text-2xl "
  }, props.name));
}

// app/Components/vote-play.tsx
function VoteGamePlay() {
  const buttonArray = [
    { id: 1, name: "Love", emoji: "\u2764\uFE0F" },
    { id: 2, name: "\uFE0FPassion", emoji: "\u2728" },
    { id: 3, name: "\uFE0FFriendship", emoji: "\u{1F450}" },
    { id: 4, name: "\uFE0FPride", emoji: "\u{1F3F3}\uFE0F\u200D\u{1F308}" },
    { id: 5, name: "\uFE0FFun", emoji: "\u{1F921}" },
    { id: 6, name: "Community", emoji: "\u{1F91D}" },
    { id: 7, name: "\uFE0FFierce", emoji: "\u{1F485}" },
    { id: 8, name: "\uFE0FRelaxing", emoji: "\u{1F60C}" },
    { id: 9, name: "Family", emoji: "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}" },
    { id: 10, name: "\uFE0FCool", emoji: "\u{1F60E}" },
    { id: 11, name: "\uFE0FIncredible", emoji: "\u{1F525}" },
    { id: 12, name: "\uFE0F\uFE0FExciting", emoji: "\u{1F680}" },
    { id: 13, name: "\uFE0F\uFE0FInvestment", emoji: "\u{1F4B8}" },
    { id: 14, name: "Crazy", emoji: "\u{1F92F}" },
    { id: 15, name: "Social", emoji: "\u{1F37B}" }
  ];
  return /* @__PURE__ */ React.createElement("div", {
    className: "space-y-12"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl font-heading text-center uppercase"
  }, "Padel is", " ", /* @__PURE__ */ React.createElement("span", {
    className: "text-yellow-500 italic"
  }, "more than sport."), " ", /* @__PURE__ */ React.createElement("br", null), "Padel is..."), /* @__PURE__ */ React.createElement("div", {
    className: "grid md:grid-cols-5 grid-cols-3 gap-5"
  }, buttonArray.map((value, key) => {
    return /* @__PURE__ */ React.createElement(VotePlayButton, {
      key,
      name: value.name,
      emoji: value.emoji
    });
  })));
}

// app/Components/vote.tsx
function VoteGame() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(VoteGamePlay, null));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/more-than-sport/game.tsx
function Game() {
  return /* @__PURE__ */ React.createElement(VoteGame, null);
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/sitemap[.]xml.tsx
var sitemap_xml_exports = {};
__export(sitemap_xml_exports, {
  loader: () => loader2
});
init_react();
var loader2 = () => {
  const content = `
          <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
      <loc>https://www.padel.africa/</loc>
      </url>
      <url>
      <loc>https://www.padel.africa/about</loc>
      </url>
      <url>
      <loc>https://www.padel.africa/join-us</loc>
      </url>
      <url>
      <loc>https://www.padel.africa/news</loc>
      </url>
      <url>
      <loc>https://www.padel.africa/contact</loc>
      </url>
      <url>
      <loc>https://www.padel.africa/news/presenting-padel-africa-to-the-nigerian-embassy</loc>
      </url>
      <url>
      <loc>https://www.padel.africa/news/meet-us-at-padel-expo-2022</loc>
      </url>
      <url>
      <loc>https://www.padel.africa/news/invest-in-padel-africa</loc>
      </url>
      <url>
      <loc>https://www.padel.africa/news/when-the-fastest-growing-sport-meets-the-fastest-growing-continent</loc>
      </url>
      <url>
      <loc>https://www.padel.africa/news/well-known-ice-hockey-and-padel-profiles-invest-in-padel-africa</loc>
      </url>
      <url>
      <loc>https://www.padel.africa/news/padel-expo-2022-wrap-up</loc>
      </url>
      
      </urlset>
      `;
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8"
    }
  });
};

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/robots[.]txt.tsx
var robots_txt_exports = {};
__export(robots_txt_exports, {
  loader: () => loader3
});
init_react();
var loader3 = () => {
  const robotText = `
        User-agent: Googlebot
        Disallow: /nogooglebot/
    
        User-agent: *
        Allow: /
    
        Sitemap: https://www.padel.africa/sitemap.xml
        `;
  return new Response(robotText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    }
  });
};

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/news/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => NewsPost,
  loader: () => loader4,
  meta: () => meta2
});
init_react();
var import_remix9 = __toModule(require_remix());
var import_date_fns = __toModule(require("date-fns"));

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

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/news/$slug.tsx
var import_react5 = __toModule(require("@portabletext/react"));

// app/images/meta-image.png
var meta_image_default = "/build/_assets/meta-image-AIXEWJ63.png";

// app/Components/hero-main.tsx
init_react();

// app/Components/button.tsx
init_react();
var import_remix8 = __toModule(require_remix());
function Button(props) {
  return /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: props.to,
    className: " inline-flex w-fit items-center  text-base font-heading text-center py-2 px-6 bg-gradient-to-br from-green-300  via-green-500 to-yellow-400  text-black font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl"
  }, props.title, /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    className: "ml-2 -mr-1 w-4 h-4",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  })));
}

// app/Components/hero-main.tsx
function HeroMain(props) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("main", {
    style: {
      backgroundImage: `linear-gradient(to right, rgba(15, 23, 42,1),rgba(255, 255, 255, 0.1)), url('${props.imgSrc}')`
    },
    className: `bg-[url(${props.imgSrc})] [hero]    mx-auto  pt-16  pb-12    px-8 sm:px-12 flex  flex-col md:flex-row align-middle md:justify-between  bg-cover  md:space-x-12	`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto md:max-w-5xl text-center  md:my-auto space-y-vw-2-min@xl md:py-16 md:px-12  "
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl md:text-6xl font-heading uppercase text-white "
  }, " ", props.heading), /* @__PURE__ */ React.createElement("p", {
    className: "text-xs text-white  uppercase opacity-75 tracking-tight "
  }, props.subtitle), props.button1Text ? /* @__PURE__ */ React.createElement(Button, {
    title: props.button1Text,
    to: props.button1To
  }) : "")));
}

// app/Components/cta-mail.tsx
init_react();
var import_react4 = __toModule(require("@remix-run/react"));
function CTAMail(props) {
  let actionData = (0, import_react4.useActionData)();
  let state = (actionData == null ? void 0 : actionData.subscription) ? "success" : (actionData == null ? void 0 : actionData.error) ? "error" : "idle";
  const darkMode = false;
  const params = (0, import_react4.useParams)();
  const id = params.resultId;
  return /* @__PURE__ */ React.createElement("section", {
    id: "partners",
    className: "[cta] my-16 p-20 md:mx-20 bg-slate-900  flex flex-col justify-center align-middle rounded-md shadow-2xl text-white"
  }, /* @__PURE__ */ React.createElement("aside", {
    className: "  m-auto  text-center  space-y-vw-6-min@xl md:w-3/4  "
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-4xl font-heading text-transparent bg-clip-text bg-gradient-to-br from-green-300  via-green-500 to-yellow-400 "
  }, props.heading), /* @__PURE__ */ React.createElement("p", {
    className: "base"
  }, props.body), /* @__PURE__ */ React.createElement(import_react4.Form, {
    method: "post",
    className: "sm:gap-4 sm:flex max-w-xl mx-auto mt-8",
    "aria-hidden": state === "success"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sm:flex-1"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "sr-only"
  }, "Email"), /* @__PURE__ */ React.createElement("input", {
    type: "email",
    name: "email",
    id: "email",
    placeholder: "Email address",
    className: "w-full p-3 bg-white border-gray-200 transition dark:bg-slate-800 dark:border-slate-700 dark:text-white  shadow-sm focus:ring focus:outline-none focus:ring-green-400 focus:border-white",
    required: true
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "flex items-center justify-center w-full mt-4 sm:w-auto   sm:mt-0 text-base font-heading text-center py-2 px-6 bg-gradient-to-br from-green-300  via-green-500 to-yellow-400  text-black font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm font-medium"
  }, " Sign Up "), /* @__PURE__ */ React.createElement("svg", {
    className: "w-5 h-5 ml-3",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 8l4 4m0 0l-4 4m4-4H3"
  }))), /* @__PURE__ */ React.createElement("p", null, (actionData == null ? void 0 : actionData.error) ? actionData.message : /* @__PURE__ */ React.createElement(React.Fragment, null, " \xA0 "))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full  my-10 text-slate-900  dark:text-white md:my-auto space-y-vw-4-min@xl p-6    h-fit ",
    "aria-hidden": state !== "success"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-2xl uppercase font-heading"
  }, "You're now subscribed"))));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/news/$slug.tsx
var components = {
  marks: {
    em: ({ children }) => /* @__PURE__ */ React.createElement("em", {
      className: "text-gray-600 font-semibold"
    }, children),
    link: ({ value, children }) => {
      const target = ((value == null ? void 0 : value.href) || "").startsWith("http") ? "_blank" : void 0;
      return /* @__PURE__ */ React.createElement("a", {
        href: value == null ? void 0 : value.href,
        target,
        className: "underline font-bold hover:text-green-500 transition-colors ease-in-out"
      }, children);
    }
  }
};
async function loader4({ params }) {
  const initialData = await getClient().fetch(`*[_type == "news" && slug.current == $slug]{ _id, title, slug, "featureImage": feature.asset->url, overview, publishedDate, extract, meta
  }`, { slug: params.slug });
  return { initialData };
}
var meta2 = ({ data = (0, import_remix9.useLoaderData)() }) => {
  if (!data) {
    return {
      title: "Padel Africa News - Padel, More Than Sport",
      description: "Learn about how Padel Africa is bringing padel, as a sport, a lifestyle, and a community builder, to Africa, starting with centers in Ghana and Rwanda. Padel is more than sport - it is impact. ",
      "og:image": `https://www.padel.africa${meta_image_default}`
    };
  }
  let { news } = data.initialData[0];
  return {
    title: `Padel Africa News - ${data.initialData[0].title}`,
    description: data.initialData[0].meta,
    "og:image": data.initialData[0].featureImage
  };
};
function NewsPost() {
  var _a;
  let { initialData } = (0, import_remix9.useLoaderData)();
  let news = initialData[0];
  let postDate2 = (0, import_date_fns.formatDistance)((0, import_date_fns.subDays)(new Date(news.publishedDate), 3), new Date(), { addSuffix: true });
  let postDate = "First published on " + (0, import_date_fns.format)(new Date(news.publishedDate), "dd MMMM yyyy");
  console.log(postDate);
  console.log(postDate2);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(HeroMain, {
    heading: news.title,
    subtitle: postDate,
    button1Text: "Read the Article",
    button1To: "#news",
    imgSrc: news.featureImage
  }), /* @__PURE__ */ React.createElement("section", {
    id: "news",
    className: "p-6 md:px-32 max-w-4xl mx-auto  md:py-24  space-y-6   bg-white justify-between text-black "
  }, ((_a = news.overview) == null ? void 0 : _a.length) > 0 ? news.overview.map((paragraphs) => /* @__PURE__ */ React.createElement(import_react5.PortableText, {
    key: paragraphs._id,
    value: [paragraphs],
    components
  })) : null), /* @__PURE__ */ React.createElement("section", null, " ", /* @__PURE__ */ React.createElement(CTAMail, {
    heading: "Sign up to the Padel Africa newsletter",
    body: "Subscribe and ensure to be among the first to find out about all our updates and special offers.",
    buttonText: "Contact Us",
    buttonTo: "#contact"
  })));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/news/index.tsx
var news_exports = {};
__export(news_exports, {
  default: () => News,
  loader: () => loader5,
  meta: () => meta3
});
init_react();
var import_remix10 = __toModule(require_remix());
var import_react6 = __toModule(require("@portabletext/react"));

// app/images/padel-hero.jpg
var padel_hero_default = "/build/_assets/padel-hero-P2PSR26K.jpg";

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/news/index.tsx
async function loader5() {
  const newsPosts = await getClient().fetch(`*[_type == "news"] | order(_createdAt desc) { _id, title, slug, "featureImage": feature.asset->url, extract
       }`);
  return { newsPosts };
}
var meta3 = () => {
  const { newsPosts } = (0, import_remix10.useLoaderData)();
  return {
    title: "Padel Africa News - Padel, More Than Sport",
    description: "Learn about how Padel Africa is bringing padel, as a sport, a lifestyle, and a community builder, to Africa, starting with centers in Ghana and Rwanda. Padel is more than sport - it is impact. ",
    keywords: "padel, africa, sport, ghana, rwanda, kenya, uganda, community, impact",
    "og:image": `https://www.padel.africa${meta_image_default}`
  };
};
function News() {
  const { newsPosts } = (0, import_remix10.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(HeroMain, {
    heading: "Padel Africa News",
    subtitle: "Get the latest news and updates. ",
    button1Text: "See All News",
    button1To: "#news",
    imgSrc: padel_hero_default
  }), /* @__PURE__ */ React.createElement("section", {
    id: "news",
    className: "py-12 max-w-screen-lg  mx-auto  px-4 md:px-0 bg-white  text-black "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-3 "
  }, (newsPosts == null ? void 0 : newsPosts.length) > 0 ? newsPosts.slice(0, 6).map((news) => {
    var _a;
    return /* @__PURE__ */ React.createElement("div", {
      key: news._id,
      className: "flex flex-col group max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-slate-900 dark:border-slate-700 hover:-translate-y-1  transition ease-in-out"
    }, /* @__PURE__ */ React.createElement(import_remix10.Link, {
      to: news.slug.current
    }, /* @__PURE__ */ React.createElement("div", {
      className: "overflow-hidden "
    }, /* @__PURE__ */ React.createElement("img", {
      className: "rounded-t-lg h-48 w-full object-cover group-hover:scale-110 transition ease-in-out  ",
      src: urlFor(news.featureImage).width(500).url(),
      alt: ""
    }))), /* @__PURE__ */ React.createElement("div", {
      className: "p-5 flex flex-col h-full "
    }, /* @__PURE__ */ React.createElement(import_remix10.Link, {
      to: news.slug.current
    }, /* @__PURE__ */ React.createElement("h5", {
      className: " text-2xl font-heading tracking-tight text-gray-900 dark:text-white "
    }, news.title)), /* @__PURE__ */ React.createElement("p", {
      className: "mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow"
    }, ((_a = news.extract) == null ? void 0 : _a.length) > 0 ? news.extract.map((paragraphs) => /* @__PURE__ */ React.createElement(import_react6.PortableText, {
      key: paragraphs._id,
      value: [paragraphs]
    })) : null), /* @__PURE__ */ React.createElement(Button, {
      to: news.slug.current,
      title: "Read More"
    })));
  }) : null)), /* @__PURE__ */ React.createElement(CTAMail, {
    heading: "Sign up to the Padel Africa newsletter",
    body: "Subscribe and ensure to be among the first to find out about our updates and special offers.",
    buttonText: "Contact Us",
    buttonTo: "#contact"
  }));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  action: () => action2,
  default: () => Contact,
  meta: () => meta4
});
init_react();
var import_remix11 = __toModule(require_remix());
var action2 = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let name = formData.get("name");
  let message = formData.get("message");
  const API_KEY = "lGf6kOnFOOC-YOikZD_YPw";
  const FORM_ID = "3022054";
  const API = "https://api.convertkit.com/v3/";
  let res = await fetch(`${API}/forms/${FORM_ID}/subscribe`, {
    method: "post",
    body: JSON.stringify({
      email,
      first_name: name,
      fields: { message },
      api_key: API_KEY
    }),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
  return res.json();
};
var meta4 = () => {
  return {
    title: "Contact Padel Africa - Padel, More Than Sport",
    description: "Contact Padel Africa and get in touch to discuss how you would like to be involved in bringing padel, as a sport, a lifestyle, and a community builder, to Africa.   ",
    keywords: "padel, africa, sport, contact, ghana, rwanda, kenya, uganda, community",
    "og:image": `https://www.padel.africa${meta_image_default}`
  };
};
function Contact() {
  let actionData = (0, import_remix11.useActionData)();
  let state = (actionData == null ? void 0 : actionData.subscription) ? "success" : (actionData == null ? void 0 : actionData.error) ? "error" : "idle";
  const darkMode = false;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    className: "my-auto bg-white md:px-32 md:py-24 py-12 px-3 flex md:flex-row flex-col justify-between text-black "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:w-1/2 px-8 space-y-4"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl  font-heading font-black tracking-widest uppercase  "
  }, "Contact Padel Africa"), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-2 "
  }, /* @__PURE__ */ React.createElement("p", null, "Please get in touch if you have any questions or would like to discuss partnership or investment oppurtunities."), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-start mt-8 text-slate-800"
  }, /* @__PURE__ */ React.createElement("svg", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    className: "w-8 h-8 text-slate-800"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
  }), /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "ml-4 text-md tracking-wide font-semibold w-64"
  }, "Padel Africa AB, Klostergatan 2, 222 22 Lund, Sweden ", /* @__PURE__ */ React.createElement("br", null), " ", "Org.nr: 559341-5770")), /* @__PURE__ */ React.createElement("a", {
    href: "tel:0046739787764",
    className: "underline flex items-center mt-4 text-slate-800"
  }, /* @__PURE__ */ React.createElement("svg", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    className: "w-8 h-8 text-slate-800"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "ml-4 text-md tracking-wide font-semibold  underline hover:text-green-500 transition-colors ease-in-out "
  }, "+46 73 978 77 64")), /* @__PURE__ */ React.createElement("a", {
    href: "mailto:hello@padel.africa",
    className: "flex items-center mt-2 text-slate-800 "
  }, /* @__PURE__ */ React.createElement("svg", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    className: "w-8 h-8 text-slate-800"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "ml-4 text-md tracking-wide font-semibold underline hover:text-green-500 transition-colors ease-in-out"
  }, "hello@padel.africa"))))), /* @__PURE__ */ React.createElement("aside", {
    id: "events",
    className: "bg-gray-50 md:w-2/5 h-fit   space-y-2   "
  }, /* @__PURE__ */ React.createElement(import_remix11.Form, {
    className: "w-full   my-6 text-slate-900  dark:text-white md:my-auto space-y-vw-4-min@xl bg-white dark:bg-slate-900   bg-opacity-50 backdrop-blur-lg shadow-2xl	 p-12    h-fit ",
    method: "post",
    "aria-hidden": state === "success"
  }, /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("p", {
    className: "font-heading text-lg  uppercase mb-4"
  }, "Send a message"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "block  text-xs   "
  }, "Your Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "name",
    id: "name",
    className: "bg-gray-50 border border-gray-300 dark:text-slate-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:placeholder-gray-400",
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
    htmlFor: "message",
    className: "block text-xs "
  }, "Your message"), /* @__PURE__ */ React.createElement("textarea", {
    rows: 5,
    name: "message",
    id: "message",
    className: "bg-gray-50 border border-gray-300 text-sm dark:text-slate-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500",
    placeholder: "Enter your message here",
    required: true
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: " py-4 px-6 bg-gradient-to-br from-green-300 to-slate-900 dark:to-yellow-300 text-white dark:text-slate-900 font-heading uppercase hover:bg-gradient-to-tl hover:scale-105 shadow-2xl "
  }, "Submit")), /* @__PURE__ */ React.createElement("p", null, (actionData == null ? void 0 : actionData.error) ? actionData.message : /* @__PURE__ */ React.createElement(React.Fragment, null, " \xA0 "))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full  my-10 text-slate-900  dark:text-white md:my-auto space-y-vw-4-min@xl bg-white dark:bg-slate-900 dark:bg-opacity-75  bg-opacity-50 backdrop-blur-lg shadow-2xl	 p-6    h-fit ",
    "aria-hidden": state !== "success"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-heading"
  }, "\u{1F680} Thank you for the message."), /* @__PURE__ */ React.createElement("p", null, "We will review it and get back to you as soon as possible."), /* @__PURE__ */ React.createElement(import_remix11.Link, {
    className: "underline text-green-300",
    to: "."
  }, "Start Over")))), /* @__PURE__ */ React.createElement(CTAMail, {
    heading: "Sign up to the Padel Africa newsletter",
    body: "Subscribe and ensure to be among the first to find out about all our updates and special offers.",
    buttonText: "Contact Us",
    buttonTo: "#contact"
  }));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/join-us.tsx
var join_us_exports = {};
__export(join_us_exports, {
  action: () => action3,
  default: () => JoinUs,
  meta: () => meta5
});
init_react();
var import_remix12 = __toModule(require_remix());

// app/Components/cta.tsx
init_react();
function CTA(props) {
  return /* @__PURE__ */ React.createElement("section", {
    id: "partners",
    className: "[cta] my-16 p-20 md:mx-20 bg-slate-900  flex flex-col justify-center align-middle rounded-md shadow-2xl text-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "  m-auto  text-center  space-y-vw-6-min@xl md:w-3/4  "
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-4xl font-heading text-transparent bg-clip-text bg-gradient-to-br from-green-300  via-green-500 to-yellow-400 "
  }, props.heading), /* @__PURE__ */ React.createElement("p", {
    className: "base"
  }, props.body), /* @__PURE__ */ React.createElement(Button, {
    title: props.buttonText,
    to: props.buttonTo
  })));
}

// app/Components/campaign-hero.tsx
init_react();
function Hero(props) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("main", {
    className: "[hero] container mx-auto bg-none md:h-screen md:pt-32 py-44 md:pb-12  md:-mt-16 px-8 sm:px-12 flex  flex-col md:flex-row align-middle md:justify-between  bg-cover  md:space-x-12	 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full md:w-3/5 my-auto space-y-vw-2-min@xl md:py-16    "
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-2xl font-heading uppercase"
  }, "What happens when"), /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl md:text-6xl pb-4 font-heading uppercase "
  }, "The", " ", /* @__PURE__ */ React.createElement("span", {
    className: " md:text-transparent md:bg-clip-text md:bg-gradient-to-br from-green-300  via-green-500 to-slate-900 dark:to-yellow-300"
  }, "world's fastest growing sport"), " ", "meets the", " ", /* @__PURE__ */ React.createElement("span", {
    className: "md:text-transparent md:bg-clip-text md:bg-gradient-to-br from-yellow-300  via-yellow-500 to-slate-900 dark:to-green-300"
  }, "world's fastest growing continent"), "?"), /* @__PURE__ */ React.createElement("a", {
    href: "#events",
    className: "my-6 \n             inline-block text-lg py-4 px-6 bg-gradient-to-br from-green-300 to-slate-900 dark:to-yellow-300 text-white dark:text-slate-900 font-heading uppercase hover:bg-gradient-to-tl hover:scale-105 shadow-2xl "
  }, "Join us to find out"))));
}

// app/images/web-bg.jpg
var web_bg_default = "/build/_assets/web-bg-X3CUZVDA.jpg";

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/join-us.tsx
var action3 = async ({ request }) => {
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
var meta5 = () => {
  return {
    title: "Join Padel Africa - Padel, More Than Sport",
    description: "Learn about how you can join Padel Africa in bringing padel, as a sport, a lifestyle, and a community builder, to Africa, starting with centers in Ghana and Rwanda. Join Padel Africa in proving that padel is more than sport - it is impact. ",
    keywords: "padel, africa, investment, sport, ghana, rwanda, kenya, uganda, community",
    "og:image": `https://www.padel.africa${meta_image_default}`
  };
};
function JoinUs() {
  let actionData = (0, import_remix12.useActionData)();
  let state = (actionData == null ? void 0 : actionData.subscription) ? "success" : (actionData == null ? void 0 : actionData.error) ? "error" : "idle";
  const darkMode = false;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    style: {
      backgroundImage: ` url('${web_bg_default}')`
    },
    className: "text-slate-900 -mt-32 dark:text-white  md:bg-fixed md:bg-center bg-[center_right_-17rem]  md:bg-cover   "
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
    className: "text-2xl  font-heading font-black tracking-widest uppercase  "
  }, "Join Padel Africa"), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-2 "
  }, /* @__PURE__ */ React.createElement("p", null, "So, what happens when the fastest growing sport meets the fastest growing continent? Incredible, exciting, life changing things of course. Especially if you are one of the canny people sharp enough to get involved early.", " "), /* @__PURE__ */ React.createElement("p", null, "This is an opportunity to be a part of a transformative journey. To be a part of the process of bringing a new sport and lifestyle activity to an entire continent."), /* @__PURE__ */ React.createElement("h2", {
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
  }, "We are looking for investors eager to be a part of an exciting and groundbreaking investment."), /* @__PURE__ */ React.createElement("p", null, "We are just about to set off on a roadshow where we will present to audiences across Denmark and Sweden (see dates and locations on this page)."), /* @__PURE__ */ React.createElement("h3", {
    className: "font-bold mt-4 "
  }, "We would like you to join us to learn:"), " ", /* @__PURE__ */ React.createElement("ul", {
    className: " list-disc list-inside"
  }, /* @__PURE__ */ React.createElement("li", null, "Why are we committed to bringing padel to Africa."), /* @__PURE__ */ React.createElement("li", null, "Who is on our team."), /* @__PURE__ */ React.createElement("li", null, "What makes us so capable of succeeding. "), /* @__PURE__ */ React.createElement("li", null, "How you can join us.")))), /* @__PURE__ */ React.createElement("aside", {
    id: "events",
    className: "bg-gray-50 md:w-2/5 h-fit   space-y-2   "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-8"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-heading pb-4"
  }, "Events"), /* @__PURE__ */ React.createElement("ul", {
    className: "space-y-3 text-xs "
  }, /* @__PURE__ */ React.createElement("p", {
    className: "italic"
  }, "Register your interest in the form below and we will keep you updated"), /* @__PURE__ */ React.createElement("li", {
    className: "line-through opacity-50"
  }, /* @__PURE__ */ React.createElement("strong", null, "Online webinar "), " - 23rd August -", /* @__PURE__ */ React.createElement("a", {
    className: "underline bold",
    href: "https://www.eventbrite.com/x/when-the-fastest-growing-sport-meets-the-fastest-growing-continent-tickets-400567747917"
  }, "Register on Eventbrite")), /* @__PURE__ */ React.createElement("li", {
    className: "line-through opacity-50"
  }, /* @__PURE__ */ React.createElement("strong", null, "Stockholm Padel Expo 2022 "), " - 16th - 18th September -", " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline bold",
    href: "mailto:hakan@bambwa.com"
  }, "Email for details")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Gothenburg "), " - date and time TBC"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Malm\xF6"), " - date and time TBC"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Helsingborg"), " - date and time TBC"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "J\xF6nk\xF6ping"), " - date and time TBC"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Copenhagen"), " - date and time TBC"))), /* @__PURE__ */ React.createElement(import_remix12.Form, {
    className: "w-full   my-6 text-slate-900  dark:text-white md:my-auto space-y-vw-4-min@xl bg-white dark:bg-slate-900   bg-opacity-50 backdrop-blur-lg shadow-2xl	 p-12    h-fit ",
    method: "post",
    "aria-hidden": state === "success"
  }, /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("p", {
    className: "font-heading text-lg  uppercase mb-4"
  }, "Interested in hearing more?"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "block  text-xs   "
  }, "Your Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "name",
    id: "name",
    className: "bg-gray-50 border border-gray-300 dark:text-slate-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:placeholder-gray-400",
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
  }, "Where would you like to meet us?"), /* @__PURE__ */ React.createElement("select", {
    id: "event",
    name: "event",
    className: "bg-gray-50 border border-gray-300 text-sm dark:text-slate-900   block w-full p-2.5    dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
  }, "Copenhagen"), /* @__PURE__ */ React.createElement("option", {
    value: "copenhagen"
  }, "Online"), /* @__PURE__ */ React.createElement("option", {
    value: "copenhagen"
  }, "Don't want to meet"))), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: " py-4 px-6 bg-gradient-to-br from-green-300 to-slate-900 dark:to-yellow-300 text-white dark:text-slate-900 font-heading uppercase hover:bg-gradient-to-tl hover:scale-105 shadow-2xl "
  }, "Submit")), /* @__PURE__ */ React.createElement("p", null, (actionData == null ? void 0 : actionData.error) ? actionData.message : /* @__PURE__ */ React.createElement(React.Fragment, null, " \xA0 "))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full  my-10 text-slate-900  dark:text-white md:my-auto space-y-vw-4-min@xl bg-white dark:bg-slate-900 dark:bg-opacity-75  bg-opacity-50 backdrop-blur-lg shadow-2xl	 p-6    h-fit ",
    "aria-hidden": state !== "success"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-heading"
  }, "\u{1F680} You're on the list!"), /* @__PURE__ */ React.createElement("p", null, "Thanks for expressing interest, you will be sent an email with more information."), /* @__PURE__ */ React.createElement(import_remix12.Link, {
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
  action: () => action4,
  default: () => Index,
  loader: () => loader6,
  meta: () => meta6
});
init_react();
var import_remix14 = __toModule(require_remix());

// app/Components/hero.tsx
init_react();
var import_remix13 = __toModule(require_remix());

// app/images/partners/padeltotal-logo.png
var padeltotal_logo_default = "/build/_assets/padeltotal-logo-WIUYH4JC.png";

// app/images/partners/padel-iq.png
var padel_iq_default = "/build/_assets/padel-iq-BH4QGOBN.png";

// app/Components/hero.tsx
function Hero2(props) {
  let actionData = (0, import_remix13.useActionData)();
  let state = (actionData == null ? void 0 : actionData.subscription) ? "success" : (actionData == null ? void 0 : actionData.error) ? "error" : "idle";
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("main", {
    className: "[hero] container mx-auto bg-none pt-16 md:pt-32 md:pb-12 mb-12 md:-mt-16 px-8 sm:px-12 flex  flex-col md:flex-row align-middle md:justify-between  bg-cover  md:space-x-12	 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full md:w-2/5 md:my-auto space-y-vw-2-min@xl md:py-16  "
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl md:text-6xl font-heading uppercase "
  }, "Padel has taken Europe by storm.", /* @__PURE__ */ React.createElement("span", {
    className: "inline md:block md:text-transparent md:bg-clip-text md:bg-gradient-to-br from-green-300  via-green-500 to-slate-900 dark:to-yellow-300"
  }, "Now it's time to bring it to Africa")), /* @__PURE__ */ React.createElement("p", {
    className: "text-base  "
  }, "\u{1F44B} Interested in a partnership?", /* @__PURE__ */ React.createElement("a", {
    className: "underline",
    href: "mailto:hello@padel.africa"
  }, " ", "Email us"), " ")), /* @__PURE__ */ React.createElement(import_remix13.Form, {
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
  }, "\u{1F680} You're Subscribed!"), /* @__PURE__ */ React.createElement("p", null, "Thank you for signing up to our mailing list"), /* @__PURE__ */ React.createElement(import_remix13.Link, {
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

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/_index.tsx
async function loader6() {
  const newsPosts = await getClient().fetch(`*[_type == "news"]{ _id, title, slug, "featureImage": feature.asset->url
   }`);
  const aboutText = await getClient().fetch(`*[_type == "sections" && slug.current == "about-padel-africa" ]{ _id, title, overview, "featureImage": feature.asset->url
   }`);
  return { newsPosts, aboutText };
}
var meta6 = () => {
  return {
    title: "Padel Africa | The Number 1 African Padel Company",
    description: "Padel Africa home page",
    keywords: "padel, africa, sport"
  };
};
var action4 = async ({ request }) => {
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
  const { newsPosts, aboutText } = (0, import_remix14.useLoaderData)();
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

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  meta: () => meta7
});
init_react();

// app/images/padel_africa_roadshow.png
var padel_africa_roadshow_default = "/build/_assets/padel_africa_roadshow-6CDZTWX3.png";

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/about.tsx
var import_remix15 = __toModule(require_remix());
var meta7 = () => {
  return {
    title: "About Padel Africa - Padel, More Than Sport",
    description: "Padel Africa is bringing padel, as a sport, a lifestyle, and a community builder, to Africa, starting with centers in Ghana and Rwanda. We believe that Africa is the next growth centre of the world and that it provides immense opportunities for the few who take the leap and expand to Africa.  ",
    keywords: "padel, africa, sport, ghana, rwanda, kenya, uganda, community",
    "og:image": `https://www.padel.africa${meta_image_default}`
  };
};
function About() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    className: "w-full md:px-32 md:py-24 py-12 px-3 space-y-12  flex md:flex-row flex-col bg-white justify-between text-black "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:w-3/5 md:px-12 px-4 space-y-4"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl  font-heading font-black tracking-widest uppercase  "
  }, "About Padel Africa"), /* @__PURE__ */ React.createElement("h2", {
    className: "font-heading text-2xl"
  }, "Who we are"), /* @__PURE__ */ React.createElement("p", null, "We believe that Africa is the next growth centre of the world and that it provides immense opportunities for the few who take the leap and expand to Africa. On the other hand, we are also very aware that in order to succeed in Africa, it requires in-depth understanding of the product you would like to offer, and a thorough understanding of the market."), /* @__PURE__ */ React.createElement("p", null, "We are confident that our team has the required prerequisites to succeed. We are a conglomerate of padel enthusiasts and business profiles. Combined we have started over 100 companies, sold 2000 courts, worked 20 years with Padel and 30 years of business experience from Sub Saharan Africa."), /* @__PURE__ */ React.createElement("h2", {
    className: "font-heading text-2xl"
  }, "Why we do this"), /* @__PURE__ */ React.createElement("p", null, "Our purpose in everything we do, is to try and improve quality of life."), /* @__PURE__ */ React.createElement("p", null, "We believe many different offerings can provide the platform to improve quality of life, and that it merely comes down to focus, creativity and execution as to how much it will be."), /* @__PURE__ */ React.createElement("p", null, "Many people overlook the African continent when they are looking for new markets to expand to. This is a shame, as the impact one can do here, supersedes almost anywhere else in the world. Furthermore, the continent is often reduced to an unfair generalisation. The continent is as diverse as any other."), /* @__PURE__ */ React.createElement("p", null, "There are though some common denominators among the Africans we have met: They have a high focus on family and friends, they love to have fun and appreciate if some movement is involved. Besides this, the continent is growing rapidly, both in terms of population and purchasing power."), /* @__PURE__ */ React.createElement("p", null, "For those reasons we feel padel and Sub Saharan Africa is a perfect match and we will work tirelessly to bring Africa along on this global trend."), /* @__PURE__ */ React.createElement("h2", {
    className: "font-heading text-2xl"
  }, "What are we going to do?"), /* @__PURE__ */ React.createElement("p", null, "We are going to bring padel to Sub Saharan Africa."), /* @__PURE__ */ React.createElement("p", null, "We are going to act as a court distributor and build our own complexes."), /* @__PURE__ */ React.createElement("p", null, "The main targets for the courts we sell are hotels, resorts, compounds and similar. We will provide them with everything they need, so they can offer this unique and fun experience to their guests and visitors."), /* @__PURE__ */ React.createElement("p", null, "The complexes we are going to build will have a large focus on serving as a community hub. We want people to come, stay and enjoy themselves and the company. Padel has the ability to break down social barriers and will provide a platform for people to meet each other and form friendships and network."), /* @__PURE__ */ React.createElement("p", null, "We will offer both the courts and the complexes as a turnkey solution, to ensure scalability and deployment speed."), /* @__PURE__ */ React.createElement("h2", {
    className: "font-heading text-2xl"
  }, "How are we going to do it?"), /* @__PURE__ */ React.createElement("p", null, "We have a focus on involvement, participation and collaboration. This is why we are working hard to internalise the partners we currently work with, and the future partners of the venture."), /* @__PURE__ */ React.createElement("p", null, "For this reason we are crowdfunding part of the venture. We want to bring on like minded people who share our passion for padel, Africa or a combination, on this journey."), /* @__PURE__ */ React.createElement("p", null, "We are currently selling courts in Africa. This will pave the way for the introduction of the sport, create some demand, and also create some cash flow to fund the complexes."), /* @__PURE__ */ React.createElement("p", null, "Within the next quarter we will start constructing our first complexes.")), /* @__PURE__ */ React.createElement(import_remix15.Link, {
    className: "md:w-2/5 h-full ",
    to: "/join-us"
  }, /* @__PURE__ */ React.createElement("img", {
    src: padel_africa_roadshow_default,
    className: "bg-gray-50 "
  }))), /* @__PURE__ */ React.createElement(CTA, {
    heading: "Are you interested in partnering with the Number 1 African Padel company?",
    body: "At this very early stage in our development we are interested in finding partners from all sectors to investigate partnership possibilities. If this sounds like you - get in touch.",
    buttonText: "Contact Us",
    buttonTo: "#contact"
  }));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action5,
  default: () => Index2,
  loader: () => loader7,
  meta: () => meta8
});
init_react();
var import_remix17 = __toModule(require_remix());

// app/Components/info.tsx
init_react();
var import_remix16 = __toModule(require_remix());
function Info(props) {
  const { aboutText } = (0, import_remix16.useLoaderData)();
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
    className: `[cta] bg-white text-slate-900   p-vw-32  space-y-10 md:space-x-14 flex flex-col md:flex-row ${props.flow == "left" ? "" : " md:flex-row-reverse space-x-reverse"} `
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:w-2/5  space-y-4  "
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl  font-heading font-black tracking-widest uppercase "
  }, aboutText[0].title), /* @__PURE__ */ React.createElement("div", {
    className: "main-content space-y-2 text-md"
  }, /* @__PURE__ */ React.createElement("p", null, "We believe that Africa is the next growth centre of the world and that it provides immense opportunities for the few who take the leap and expand to Africa. On the other hand, we are also very aware that in order to succeed in Africa, it requires in-depth understanding of the product you would like to offer, and a thorough understanding of the market."), /* @__PURE__ */ React.createElement("p", null, "We are confident that our team has the required prerequisites to succeed. We are a conglomerate of padel enthusiasts and business profiles. Combined we have started over 100 companies, sold 2000 courts, worked 20 years with Padel and 30 years of business experience from Sub Saharan Africa."), /* @__PURE__ */ React.createElement(import_remix16.Link, {
    className: "block mt-6 underline text-green-500 ",
    to: "/about"
  }, "Learn More About Us", " "))), /* @__PURE__ */ React.createElement("figure", {
    className: "md:w-1/2 bg-slate-300"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-full",
    src: aboutText[0].featureImage
  })));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/index.tsx
async function loader7() {
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
var meta8 = () => {
  return {
    title: "Padel Africa - Padel, More Than Sport",
    description: "Padel Africa is bringing padel, as a sport, a lifestyle, and a community builder, to Africa, starting with centers in Ghana and Rwanda. Padel is more than sport - it is impact. ",
    keywords: "padel, africa, sport, ghana, rwanda, kenya, uganda, community",
    "og:image": `https://www.padel.africa${meta_image_default}`
  };
};
var action5 = async ({ request }) => {
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
  const { newsPosts, aboutText, teamMembers, boardMembers } = (0, import_remix17.useLoaderData)();
  const darkMode = false;
  const myPortableTextComponents = {
    types: {
      image: (value) => /* @__PURE__ */ React.createElement("img", {
        src: value.asset,
        key: value._id,
        className: value.asset
      })
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      backgroundImage: ` ${darkMode ? " linear-gradient(to right, rgba(255, 255, 255,1)" : " linear-gradient(to right, rgba(15, 23, 42,1)"}     , rgba(255, 255, 255, 0.1)),url('${padel_hero_default}')`
    },
    className: "text-slate-900 dark:text-white  bg-cover bg-fixed -mt-28  pt-16 md:pt-0  "
  }, /* @__PURE__ */ React.createElement(Hero2, {
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
    className: "text-2xl  font-heading font-black tracking-widest uppercase  text-slate-900 dark:text-white "
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
    className: "text-2xl  font-heading  tracking-widest uppercase  text-slate-900 dark:text-white "
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
    className: "text-2xl  font-heading  tracking-widest uppercase  text-transparent bg-clip-text bg-gradient-to-br from-green-300  via-green-500 to-yellow-400 "
  }, "Contact Us"), /* @__PURE__ */ React.createElement("p", {
    className: "base"
  }, "If you are an invester, a potential partner or anyone interested in learning more about Padel Africa, you can reach us directly with the following details."), /* @__PURE__ */ React.createElement("div", {
    className: " space-x-vw-4-min@xl  md:inline-flex justify-between text-slate-900"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "mailto:hello@padel.africa",
    className: "py-vw-4-min@xl-max@2xl px-vw-4-min@xl-max@2xl bg-gradient-to-br from-green-300   to-yellow-400 font-heading uppercase tracking-widest  hover:bg-gradient-to-tl hover:scale-105 shadow-2xl"
  }, "Email Us"), /* @__PURE__ */ React.createElement("a", {
    href: "tel:0046739787764",
    className: " py-vw-4-min@xl-max@2xl px-vw-4-min@xl-max@2xl bg-gradient-to-br from-white   to-gray-200 font-heading uppercase tracking-widest  hover:bg-gradient-to-tl hover:scale-105 shadow-2xl"
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
  "routes/more-than-sport": {
    id: "routes/more-than-sport",
    parentId: "root",
    path: "more-than-sport",
    index: void 0,
    caseSensitive: void 0,
    module: more_than_sport_exports
  },
  "routes/more-than-sport/result": {
    id: "routes/more-than-sport/result",
    parentId: "routes/more-than-sport",
    path: "result",
    index: void 0,
    caseSensitive: void 0,
    module: result_exports
  },
  "routes/more-than-sport/result/$resultId": {
    id: "routes/more-than-sport/result/$resultId",
    parentId: "routes/more-than-sport/result",
    path: ":resultId",
    index: void 0,
    caseSensitive: void 0,
    module: resultId_exports
  },
  "routes/more-than-sport/index": {
    id: "routes/more-than-sport/index",
    parentId: "routes/more-than-sport",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: more_than_sport_exports2
  },
  "routes/more-than-sport/game": {
    id: "routes/more-than-sport/game",
    parentId: "routes/more-than-sport",
    path: "game",
    index: void 0,
    caseSensitive: void 0,
    module: game_exports
  },
  "routes/sitemap[.]xml": {
    id: "routes/sitemap[.]xml",
    parentId: "root",
    path: "sitemap.xml",
    index: void 0,
    caseSensitive: void 0,
    module: sitemap_xml_exports
  },
  "routes/robots[.]txt": {
    id: "routes/robots[.]txt",
    parentId: "root",
    path: "robots.txt",
    index: void 0,
    caseSensitive: void 0,
    module: robots_txt_exports
  },
  "routes/news/$slug": {
    id: "routes/news/$slug",
    parentId: "root",
    path: "news/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/news/index": {
    id: "routes/news/index",
    parentId: "root",
    path: "news",
    index: true,
    caseSensitive: void 0,
    module: news_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgImVtcHR5LW1vZHVsZTp+L3V0aWxzL2d0YWdzLmNsaWVudCIsICI8c3RkaW4+IiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3Jvb3QudHN4IiwgIi4uL2FwcC9Db21wb25lbnRzL2luZm8tYmFyLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvbW9yZS10aGFuLXNwb3J0LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvbW9yZS10aGFuLXNwb3J0L3Jlc3VsdC50c3giLCAiLi4vYXBwL0NvbXBvbmVudHMvdm90ZS1yZXN1bHRzLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvbW9yZS10aGFuLXNwb3J0L3Jlc3VsdC8kcmVzdWx0SWQudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy9tb3JlLXRoYW4tc3BvcnQvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy9tb3JlLXRoYW4tc3BvcnQvZ2FtZS50c3giLCAiLi4vYXBwL0NvbXBvbmVudHMvdm90ZS50c3giLCAiLi4vYXBwL0NvbXBvbmVudHMvdm90ZS1wbGF5LnRzeCIsICIuLi9hcHAvQ29tcG9uZW50cy92b3RlLXBsYXktYnV0dG9uLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvc2l0ZW1hcFsuXXhtbC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL3JvYm90c1suXXR4dC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL25ld3MvJHNsdWcudHN4IiwgIi4uL2FwcC9saWIvc2FuaXR5L2dldENsaWVudC50cyIsICIuLi9hcHAvbGliL3Nhbml0eS9jb25maWcudHMiLCAiLi4vYXBwL0NvbXBvbmVudHMvaGVyby1tYWluLnRzeCIsICIuLi9hcHAvQ29tcG9uZW50cy9idXR0b24udHN4IiwgIi4uL2FwcC9Db21wb25lbnRzL2N0YS1tYWlsLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvbmV3cy9pbmRleC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL2NvbnRhY3QudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy9qb2luLXVzLnRzeCIsICIuLi9hcHAvQ29tcG9uZW50cy9jdGEudHN4IiwgIi4uL2FwcC9Db21wb25lbnRzL2NhbXBhaWduLWhlcm8udHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy9faW5kZXgudHN4IiwgIi4uL2FwcC9Db21wb25lbnRzL2hlcm8udHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy9hYm91dC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvQ29tcG9uZW50cy9pbmZvLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvbW9yZS10aGFuLXNwb3J0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy9tb3JlLXRoYW4tc3BvcnQvcmVzdWx0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy9tb3JlLXRoYW4tc3BvcnQvcmVzdWx0LyRyZXN1bHRJZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvbW9yZS10aGFuLXNwb3J0L2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy9tb3JlLXRoYW4tc3BvcnQvZ2FtZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvc2l0ZW1hcFsuXXhtbC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvcm9ib3RzWy5ddHh0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy9uZXdzLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy9uZXdzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvY29udGFjdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL2pvaW4tdXMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCIvVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy9faW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEzIGZyb20gXCIvVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy9hYm91dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTQgZnJvbSBcIi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvbW9yZS10aGFuLXNwb3J0XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvbW9yZS10aGFuLXNwb3J0XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwibW9yZS10aGFuLXNwb3J0XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvbW9yZS10aGFuLXNwb3J0L3Jlc3VsdFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL21vcmUtdGhhbi1zcG9ydC9yZXN1bHRcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvbW9yZS10aGFuLXNwb3J0XCIsXG4gICAgcGF0aDogXCJyZXN1bHRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9tb3JlLXRoYW4tc3BvcnQvcmVzdWx0LyRyZXN1bHRJZFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL21vcmUtdGhhbi1zcG9ydC9yZXN1bHQvJHJlc3VsdElkXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL21vcmUtdGhhbi1zcG9ydC9yZXN1bHRcIixcbiAgICBwYXRoOiBcIjpyZXN1bHRJZFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUzXG4gIH0sXG4gIFwicm91dGVzL21vcmUtdGhhbi1zcG9ydC9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL21vcmUtdGhhbi1zcG9ydC9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9tb3JlLXRoYW4tc3BvcnRcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU0XG4gIH0sXG4gIFwicm91dGVzL21vcmUtdGhhbi1zcG9ydC9nYW1lXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvbW9yZS10aGFuLXNwb3J0L2dhbWVcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvbW9yZS10aGFuLXNwb3J0XCIsXG4gICAgcGF0aDogXCJnYW1lXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTVcbiAgfSxcbiAgXCJyb3V0ZXMvc2l0ZW1hcFsuXXhtbFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3NpdGVtYXBbLl14bWxcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJzaXRlbWFwLnhtbFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU2XG4gIH0sXG4gIFwicm91dGVzL3JvYm90c1suXXR4dFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3JvYm90c1suXXR4dFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInJvYm90cy50eHRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlN1xuICB9LFxuICBcInJvdXRlcy9uZXdzLyRzbHVnXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvbmV3cy8kc2x1Z1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIm5ld3MvOnNsdWdcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlOFxuICB9LFxuICBcInJvdXRlcy9uZXdzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvbmV3cy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIm5ld3NcIixcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTlcbiAgfSxcbiAgXCJyb3V0ZXMvY29udGFjdFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2NvbnRhY3RcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJjb250YWN0XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTEwXG4gIH0sXG4gIFwicm91dGVzL2pvaW4tdXNcIjoge1xuICAgIGlkOiBcInJvdXRlcy9qb2luLXVzXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiam9pbi11c1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxMVxuICB9LFxuICBcInJvdXRlcy9faW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9faW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJfaW5kZXhcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTJcbiAgfSxcbiAgXCJyb3V0ZXMvYWJvdXRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9hYm91dFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImFib3V0XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTEzXG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTRcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgZG90ZW52LmNvbmZpZygpO1xuXG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoJzwhRE9DVFlQRSBodG1sPicgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaW5rLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIEFjdGlvbkZ1bmN0aW9uLFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlTG9hZGVyRGF0YSxcbiAgdXNlTG9jYXRpb24sXG4gIHVzZU1hdGNoZXMsXG59IGZyb20gJ3JlbWl4JztcblxuaW1wb3J0IGhlcm9JbWcgZnJvbSAnLi9pbWFnZXMvcGFkZWwtaGVyby5qcGcnO1xuaW1wb3J0IENvb2tpZUNvbnNlbnQgZnJvbSAncmVhY3QtY29va2llLWNvbnNlbnQnO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy90YWlsd2luZC5jc3MnO1xuaW1wb3J0IGFwcFN0eWxlcyBmcm9tICcuL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCBsb2dvIGZyb20gJy4vaW1hZ2VzL2xvZ28uc3ZnJztcbmltcG9ydCBsb2dvRGFyayBmcm9tICcuL2ltYWdlcy9wYS1sb2dvLWRhcmsuc3ZnJztcbmltcG9ydCBsb2dvTGlnaHQgZnJvbSAnLi9pbWFnZXMvcGEtbG9nby1saWdodC5zdmcnO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IE1ldGFJbWcgZnJvbSAnfi9pbWFnZXMvbWV0YS1pbWFnZS5wbmcnO1xuXG5pbXBvcnQgeyBqc29uIH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgKiBhcyBndGFnIGZyb20gJ34vdXRpbHMvZ3RhZ3MuY2xpZW50JztcbmltcG9ydCBJbmZvQmFyIGZyb20gJy4vQ29tcG9uZW50cy9pbmZvLWJhcic7XG50eXBlIExvYWRlckRhdGEgPSB7XG4gIGdhVHJhY2tpbmdJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xufTtcblxuLy8gTG9hZCB0aGUgR0EgdHJhY2tpbmcgaWQgZnJvbSB0aGUgLmVudlxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiBqc29uPExvYWRlckRhdGE+KHsgZ2FUcmFja2luZ0lkOiBwcm9jZXNzLmVudi5HQV9UUkFDS0lOR19JRCB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiAnUGFkZWwgQWZyaWNhJywgZGVzY3JpcHRpb246ICcnIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH0sXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogYXBwU3R5bGVzIH0sXG4gIF07XG59XG5cbmV4cG9ydCBjb25zdCBOYXYgPSAoc2V0RGFya01vZGU6IHtcbiAgc2V0RGFya01vZGU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+Pjtcbn0pID0+IHtcbiAgY29uc3QgZGFya01vZGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgLy9jb25zb2xlLmxvZyhzZXREYXJrTW9kZS5zZXREYXJrTW9kZSk7XG5cbiAgICBzZXREYXJrTW9kZS5zZXREYXJrTW9kZSgocHJldikgPT4gIXByZXYpO1xuICAgIC8vc2V0RGFya01vZGUoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcbiAgY29uc3QgZGFya01vZGUgPSB0cnVlO1xuXG4gIGNvbnN0IFtpc1NocnVuaywgc2V0U2hydW5rXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBzZXRTaHJ1bmsoKGlzU2hydW5rKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhaXNTaHJ1bmsgJiZcbiAgICAgICAgICAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPiAyMCB8fFxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDIwKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc1NocnVuayAmJlxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIDwgNCAmJlxuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPCA0XG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc1NocnVuaztcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlcik7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFtuYXZiYXJPcGVuLCBzZXROYXZiYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZG9Ob3RoaW5nID0gKCkgPT4ge307XG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICAvL2NvbnNvbGUubG9nKG5hdmJhck9wZW4pO1xuXG4gICAgLy8gY29uc29sZS5sb2coc2V0TmF2YmFyT3Blbik7XG4gICAgc2V0TmF2YmFyT3BlbigocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKlxuICAgICAgPG5hdlxuICAgICAgICBjbGFzc05hbWU9e2AgICR7XG4gICAgICAgICAgaXNTaHJ1bmtcbiAgICAgICAgICAgID8gJ3RyYW5zaXRpb24gZWFzZS1pbi1vdXQgIG1kOmJnLW9wYWNpdHktNzUgYmFja2Ryb3AtYmx1ci1sZyB6LTEwIHB5LTIgdGV4dC14cyAgICAnXG4gICAgICAgICAgICA6ICd0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IG1kOmJnLW9wYWNpdHktMCAnXG4gICAgICAgIH0gYmctc2xhdGUtOTAwIGJvcmRlci1ncmF5LTIwMCBweC00IHNtOnB4LTEyIHB5LTYgbWQ6Zml4ZWQgdy1mdWxsIHotMTAgdGV4dC1ibGFjayBgfVxuICAgICAgPiovfVxuXG4gICAgICA8bmF2IGNsYXNzTmFtZT0nYmctc2xhdGUtOTAwIGJvcmRlci1ncmF5LTIwMCBweC00IHNtOnB4LTEyIHB5LTYgdy1mdWxsIHotMTAgdGV4dC1ibGFjayAgICc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgZmxleCBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBteC1hdXRvJz5cbiAgICAgICAgICA8YSBocmVmPScvJyBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e2xvZ29EYXJrfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BibG9jayBkYXJrOmhpZGRlbiB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSAke1xuICAgICAgICAgICAgICAgIGlzU2hydW5rID8gJ2gtMTYnIDogJ21kOmgtMTYnXG4gICAgICAgICAgICAgIH0gaC0xNmB9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17bG9nb0xpZ2h0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoaWRkZW4gZGFyazpibG9jayAgdHJhbnNpdGlvbiAgIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSAke1xuICAgICAgICAgICAgICAgIGlzU2hydW5rID8gJ2gtMTYnIDogJ21kOmgtMTYnXG4gICAgICAgICAgICAgIH0gaC0xNmB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9XG4gICAgICAgICAgICBkYXRhLWNvbGxhcHNlLXRvZ2dsZT0nbW9iaWxlLW1lbnUnXG4gICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICBjbGFzc05hbWU9J2lubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBwLTIgbWwtMyB0ZXh0LXNtIHJvdW5kZWQtbGcgbWQ6aGlkZGVuIGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmF5LTIwMCBkYXJrOnRleHQtZ3JheS00MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmZvY3VzOnJpbmctZ3JheS02MDAnXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPSdtb2JpbGUtbWVudS0yJ1xuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD0nZmFsc2UnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5PcGVuIG1haW4gbWVudTwvc3Bhbj5cbiAgICAgICAgICAgIHtuYXZiYXJPcGVuID8gKFxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPScgdy02IGgtNidcbiAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXG4gICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDIwIDIwJ1xuICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBmaWxsUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICAgIGQ9J000LjI5MyA0LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgOC41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEwxMS40MTQgMTBsNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgMTEuNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw4LjU4NiAxMCA0LjI5MyA1LjcwN2ExIDEgMCAwMTAtMS40MTR6J1xuICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTYgaC02J1xuICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjAgMjAnXG4gICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgZD0nTTMgNWExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxMGExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxNWExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXonXG4gICAgICAgICAgICAgICAgICBjbGlwUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7XG4gICAgICAgICAgICAgIG5hdmJhck9wZW5cbiAgICAgICAgICAgICAgICA/ICdoLXNjcmVlbiB0ZXh0LTR4bCB0ZXh0LWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXInXG4gICAgICAgICAgICAgICAgOiAnaGlkZGVuJ1xuICAgICAgICAgICAgfSB3LWZ1bGwgbWQ6YmxvY2sgbWQ6dy1hdXRvYH1cbiAgICAgICAgICAgIGlkPSdtb2JpbGUtbWVudSdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sICBtdC0xMiBtZDptdC0wICAgbWQ6ZmxleC1yb3cgbWQ6c3BhY2UteC04IHNwYWNlLXktNCBvcGFjaXR5LTkwICBtZDpzcGFjZS15LTAgZm9udC1oZWFkaW5nIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgICB0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUnPlxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2hvdmVyOnVuZGVybGluZSAgaG92ZXI6dW5kZXJsaW5lLW9mZnNldC00IGhvdmVyOmZvbnQtYmxhY2sgIGhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tYWxsIGVhc2UtaW4tb3V0ICAnXG4gICAgICAgICAgICAgICAgb25DbGljaz17bmF2YmFyT3BlbiA/IGhhbmRsZVRvZ2dsZSA6IGRvTm90aGluZ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvJz5Ib21lIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdob3Zlcjp1bmRlcmxpbmUgIGhvdmVyOnVuZGVybGluZS1vZmZzZXQtNCBob3Zlcjpmb250LWJsYWNrICBob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLWFsbCBlYXNlLWluLW91dCAgJ1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e25hdmJhck9wZW4gPyBoYW5kbGVUb2dnbGUgOiBkb05vdGhpbmd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TGluayB0bz0nL2Fib3V0Jz5BYm91dCA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naG92ZXI6dW5kZXJsaW5lICBob3Zlcjp1bmRlcmxpbmUtb2Zmc2V0LTQgaG92ZXI6Zm9udC1ibGFjayAgaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1hbGwgZWFzZS1pbi1vdXQgICdcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtuYXZiYXJPcGVuID8gaGFuZGxlVG9nZ2xlIDogZG9Ob3RoaW5nfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89Jy9qb2luLXVzJz5Kb2luIFVzIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdob3Zlcjp1bmRlcmxpbmUgIGhvdmVyOnVuZGVybGluZS1vZmZzZXQtNCBob3Zlcjpmb250LWJsYWNrICBob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLWFsbCBlYXNlLWluLW91dCAgJ1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e25hdmJhck9wZW4gPyBoYW5kbGVUb2dnbGUgOiBkb05vdGhpbmd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TGluayB0bz0nL25ld3MnPk5ld3MgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2hvdmVyOnVuZGVybGluZSAgaG92ZXI6dW5kZXJsaW5lLW9mZnNldC00IGhvdmVyOmZvbnQtYmxhY2sgIGhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tYWxsIGVhc2UtaW4tb3V0ICAnXG4gICAgICAgICAgICAgICAgb25DbGljaz17bmF2YmFyT3BlbiA/IGhhbmRsZVRvZ2dsZSA6IGRvTm90aGluZ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvY29udGFjdCc+Q29udGFjdCA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5mYWNlYm9vay5jb20vcGFkZWxhZnJpY2EnIGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7bmF2YmFyT3BlbiA/ICdoaWRkZW4nIDogJ3ctNyBoLTcnfSBgfVxuICAgICAgICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICAgICAgZD0nTTIyIDEyYzAtNS41MjMtNC40NzctMTAtMTAtMTBTMiA2LjQ3NyAyIDEyYzAgNC45OTEgMy42NTcgOS4xMjggOC40MzggOS44Nzh2LTYuOTg3aC0yLjU0VjEyaDIuNTRWOS43OTdjMC0yLjUwNiAxLjQ5Mi0zLjg5IDMuNzc3LTMuODkgMS4wOTQgMCAyLjIzOC4xOTUgMi4yMzguMTk1djIuNDZoLTEuMjZjLTEuMjQzIDAtMS42My43NzEtMS42MyAxLjU2MlYxMmgyLjc3M2wtLjQ0MyAyLjg5aC0yLjMzdjYuOTg4QzE4LjM0MyAyMS4xMjggMjIgMTYuOTkxIDIyIDEyeidcbiAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7XG4gICAgICAgICAgICAgICAgICAgICAgbmF2YmFyT3BlblxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnaC1zY3JlZW4gdGV4dC00eGwgdGV4dC1jZW50ZXIgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnaGlkZGVuJ1xuICAgICAgICAgICAgICAgICAgICB9IGB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEZhY2Vib29rXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvcGFkZWxhZnJpY2EvJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPScnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtuYXZiYXJPcGVuID8gJ2hpZGRlbicgOiAndy03IGgtNyd9IGB9XG4gICAgICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDE3IDE3J1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzEwMCUnXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPScxMDAlJ1xuICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICAgICAgICBkPSdNMCAxLjE0NkMwIC41MTMuNTI2IDAgMS4xNzUgMGgxMy42NUMxNS40NzQgMCAxNiAuNTEzIDE2IDEuMTQ2djEzLjcwOGMwIC42MzMtLjUyNiAxLjE0Ni0xLjE3NSAxLjE0NkgxLjE3NUMuNTI2IDE2IDAgMTUuNDg3IDAgMTQuODU0VjEuMTQ2em00Ljk0MyAxMi4yNDhWNi4xNjlIMi41NDJ2Ny4yMjVoMi40MDF6bS0xLjItOC4yMTJjLjgzNyAwIDEuMzU4LS41NTQgMS4zNTgtMS4yNDgtLjAxNS0uNzA5LS41Mi0xLjI0OC0xLjM0Mi0xLjI0OC0uODIyIDAtMS4zNTkuNTQtMS4zNTkgMS4yNDggMCAuNjk0LjUyMSAxLjI0OCAxLjMyNyAxLjI0OGguMDE2em00LjkwOCA4LjIxMlY5LjM1OWMwLS4yMTYuMDE2LS40MzIuMDgtLjU4Ni4xNzMtLjQzMS41NjgtLjg3OCAxLjIzMi0uODc4Ljg2OSAwIDEuMjE2LjY2MiAxLjIxNiAxLjYzNHYzLjg2NWgyLjQwMVY5LjI1YzAtMi4yMi0xLjE4NC0zLjI1Mi0yLjc2NC0zLjI1Mi0xLjI3NCAwLTEuODQ1LjctMi4xNjUgMS4xOTN2LjAyNWgtLjAxNmE1LjU0IDUuNTQgMCAwIDEgLjAxNi0uMDI1VjYuMTY5aC0yLjRjLjAzLjY3OCAwIDcuMjI1IDAgNy4yMjVoMi40eidcbiAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7XG4gICAgICAgICAgICAgICAgICAgICAgbmF2YmFyT3BlblxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnaC1zY3JlZW4gdGV4dC00eGwgdGV4dC1jZW50ZXIgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnaGlkZGVuJ1xuICAgICAgICAgICAgICAgICAgICB9IGB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIExpbmtlZGlueycgJ31cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcGFkZWxfYWZyaWNhLycgY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtuYXZiYXJPcGVuID8gJ2hpZGRlbicgOiAndy03IGgtNyd9IGB9XG4gICAgICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICAgICAgICBkPSdNMTIuMzE1IDJjMi40MyAwIDIuNzg0LjAxMyAzLjgwOC4wNiAxLjA2NC4wNDkgMS43OTEuMjE4IDIuNDI3LjQ2NWE0LjkwMiA0LjkwMiAwIDAxMS43NzIgMS4xNTMgNC45MDIgNC45MDIgMCAwMTEuMTUzIDEuNzcyYy4yNDcuNjM2LjQxNiAxLjM2My40NjUgMi40MjcuMDQ4IDEuMDY3LjA2IDEuNDA3LjA2IDQuMTIzdi4wOGMwIDIuNjQzLS4wMTIgMi45ODctLjA2IDQuMDQzLS4wNDkgMS4wNjQtLjIxOCAxLjc5MS0uNDY1IDIuNDI3YTQuOTAyIDQuOTAyIDAgMDEtMS4xNTMgMS43NzIgNC45MDIgNC45MDIgMCAwMS0xLjc3MiAxLjE1M2MtLjYzNi4yNDctMS4zNjMuNDE2LTIuNDI3LjQ2NS0xLjA2Ny4wNDgtMS40MDcuMDYtNC4xMjMuMDZoLS4wOGMtMi42NDMgMC0yLjk4Ny0uMDEyLTQuMDQzLS4wNi0xLjA2NC0uMDQ5LTEuNzkxLS4yMTgtMi40MjctLjQ2NWE0LjkwMiA0LjkwMiAwIDAxLTEuNzcyLTEuMTUzIDQuOTAyIDQuOTAyIDAgMDEtMS4xNTMtMS43NzJjLS4yNDctLjYzNi0uNDE2LTEuMzYzLS40NjUtMi40MjctLjA0Ny0xLjAyNC0uMDYtMS4zNzktLjA2LTMuODA4di0uNjNjMC0yLjQzLjAxMy0yLjc4NC4wNi0zLjgwOC4wNDktMS4wNjQuMjE4LTEuNzkxLjQ2NS0yLjQyN2E0LjkwMiA0LjkwMiAwIDAxMS4xNTMtMS43NzJBNC45MDIgNC45MDIgMCAwMTUuNDUgMi41MjVjLjYzNi0uMjQ3IDEuMzYzLS40MTYgMi40MjctLjQ2NUM4LjkwMSAyLjAxMyA5LjI1NiAyIDExLjY4NSAyaC42M3ptLS4wODEgMS44MDJoLS40NjhjLTIuNDU2IDAtMi43ODQuMDExLTMuODA3LjA1OC0uOTc1LjA0NS0xLjUwNC4yMDctMS44NTcuMzQ0LS40NjcuMTgyLS44LjM5OC0xLjE1Ljc0OC0uMzUuMzUtLjU2Ni42ODMtLjc0OCAxLjE1LS4xMzcuMzUzLS4zLjg4Mi0uMzQ0IDEuODU3LS4wNDcgMS4wMjMtLjA1OCAxLjM1MS0uMDU4IDMuODA3di40NjhjMCAyLjQ1Ni4wMTEgMi43ODQuMDU4IDMuODA3LjA0NS45NzUuMjA3IDEuNTA0LjM0NCAxLjg1Ny4xODIuNDY2LjM5OS44Ljc0OCAxLjE1LjM1LjM1LjY4My41NjYgMS4xNS43NDguMzUzLjEzNy44ODIuMyAxLjg1Ny4zNDQgMS4wNTQuMDQ4IDEuMzcuMDU4IDQuMDQxLjA1OGguMDhjMi41OTcgMCAyLjkxNy0uMDEgMy45Ni0uMDU4Ljk3Ni0uMDQ1IDEuNTA1LS4yMDcgMS44NTgtLjM0NC40NjYtLjE4Mi44LS4zOTggMS4xNS0uNzQ4LjM1LS4zNS41NjYtLjY4My43NDgtMS4xNS4xMzctLjM1My4zLS44ODIuMzQ0LTEuODU3LjA0OC0xLjA1NS4wNTgtMS4zNy4wNTgtNC4wNDF2LS4wOGMwLTIuNTk3LS4wMS0yLjkxNy0uMDU4LTMuOTYtLjA0NS0uOTc2LS4yMDctMS41MDUtLjM0NC0xLjg1OGEzLjA5NyAzLjA5NyAwIDAwLS43NDgtMS4xNSAzLjA5OCAzLjA5OCAwIDAwLTEuMTUtLjc0OGMtLjM1My0uMTM3LS44ODItLjMtMS44NTctLjM0NC0xLjAyMy0uMDQ3LTEuMzUxLS4wNTgtMy44MDctLjA1OHpNMTIgNi44NjVhNS4xMzUgNS4xMzUgMCAxMTAgMTAuMjcgNS4xMzUgNS4xMzUgMCAwMTAtMTAuMjd6bTAgMS44MDJhMy4zMzMgMy4zMzMgMCAxMDAgNi42NjYgMy4zMzMgMy4zMzMgMCAwMDAtNi42NjZ6bTUuMzM4LTMuMjA1YTEuMiAxLjIgMCAxMTAgMi40IDEuMiAxLjIgMCAwMTAtMi40eidcbiAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7XG4gICAgICAgICAgICAgICAgICAgICAgbmF2YmFyT3BlblxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnaC1zY3JlZW4gdGV4dC00eGwgdGV4dC1jZW50ZXIgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnaGlkZGVuJ1xuICAgICAgICAgICAgICAgICAgICB9IGB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEluc3RhZ3JhbXsnICd9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgaGlkZGVuXG4gICAgICAgICAgICAgICAgaWQ9J3RoZW1lLXRvZ2dsZSdcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtkYXJrTW9kZVRvZ2dsZX1cbiAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUgbWQ6aG92ZXI6YmctZ3JheS0xMDAgbWQ6ZGFyazpob3ZlcjpiZy1zbGF0ZS05MDAgIHJvdW5kZWQtbGcgdGV4dC1zbSAnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICBpZD0ndGhlbWUtdG9nZ2xlLWRhcmstaWNvbidcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke1xuICAgICAgICAgICAgICAgICAgICBuYXZiYXJPcGVuID8gJ2hpZGRlbicgOiAnYmxvY2sgZGFyazpoaWRkZW4gdy03IGgtNydcbiAgICAgICAgICAgICAgICAgIH0gYH1cbiAgICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyMCAyMCdcbiAgICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTcuMjkzIDEzLjI5M0E4IDggMCAwMTYuNzA3IDIuNzA3YTguMDAxIDguMDAxIDAgMTAxMC41ODYgMTAuNTg2eic+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIGlkPSd0aGVtZS10b2dnbGUtbGlnaHQtaWNvbidcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke1xuICAgICAgICAgICAgICAgICAgICBuYXZiYXJPcGVuID8gJ2hpZGRlbicgOiAnaGlkZGVuIGRhcms6YmxvY2sgdy03IGgtNydcbiAgICAgICAgICAgICAgICAgIH0gYH1cbiAgICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyMCAyMCdcbiAgICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPSdNMTAgMmExIDEgMCAwMTEgMXYxYTEgMSAwIDExLTIgMFYzYTEgMSAwIDAxMS0xem00IDhhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwem0tLjQ2NCA0Ljk1bC43MDcuNzA3YTEgMSAwIDAwMS40MTQtMS40MTRsLS43MDctLjcwN2ExIDEgMCAwMC0xLjQxNCAxLjQxNHptMi4xMi0xMC42MDdhMSAxIDAgMDEwIDEuNDE0bC0uNzA2LjcwN2ExIDEgMCAxMS0xLjQxNC0xLjQxNGwuNzA3LS43MDdhMSAxIDAgMDExLjQxNCAwek0xNyAxMWExIDEgMCAxMDAtMmgtMWExIDEgMCAxMDAgMmgxem0tNyA0YTEgMSAwIDAxMSAxdjFhMSAxIDAgMTEtMiAwdi0xYTEgMSAwIDAxMS0xek01LjA1IDYuNDY0QTEgMSAwIDEwNi40NjUgNS4wNWwtLjcwOC0uNzA3YTEgMSAwIDAwLTEuNDE0IDEuNDE0bC43MDcuNzA3em0xLjQxNCA4LjQ4NmwtLjcwNy43MDdhMSAxIDAgMDEtMS40MTQtMS40MTRsLjcwNy0uNzA3YTEgMSAwIDAxMS40MTQgMS40MTR6TTQgMTFhMSAxIDAgMTAwLTJIM2ExIDEgMCAwMDAgMmgxeidcbiAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7XG4gICAgICAgICAgICAgICAgICAgIG5hdmJhck9wZW5cbiAgICAgICAgICAgICAgICAgICAgICA/ICdoLXNjcmVlbiB0ZXh0LTR4bCB0ZXh0LWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgOiAnaGlkZGVuJ1xuICAgICAgICAgICAgICAgICAgfSBgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFRvZ2dsZSBEYXJrIE1vZGVcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9JyAgIGJnLXNsYXRlLTkwMCAgIHRleHQtc2xhdGUtOTAwIGRhcms6dGV4dC13aGl0ZSc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc206ZmxleCBzbTppdGVtcy1jZW50ZXIgc206anVzdGlmeS1iZXR3ZWVuIHB4LTQgc206cHgtMTIgcHktNiAgbXgtYXV0byBmb250LWhlYWRpbmcgdXBwZXJjYXNlIHRleHQtbWQgdHJhY2tpbmctd2lkZXN0ICc+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1zbSBzbTp0ZXh0LWNlbnRlciAgJz5cbiAgICAgICAgICBcdTAwQTkgMjAyMnsnICd9XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIHRvPSdodHRwczovL3d3dy5wYWRlbC5hZnJpY2EnXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naG92ZXI6dW5kZXJsaW5lJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIFBhZGVsIEFmcmljYVx1MjEyMlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAuIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9JyBzbTp0ZXh0LWNlbnRlciBmb250LWhlYWRpbmcgdXBwZXJjYXNlIHRleHQtbWQgJz5cbiAgICAgICAgICBQYWRlbCBBZnJpY2EgQUIgT3JnOiA1NTkzNDEtNTc3MFxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG10LTQgc3BhY2UteC02IHNtOmp1c3RpZnktY2VudGVyIHNtOm10LTAgZm9udC1oZWFkaW5nIHVwcGVyY2FzZSB0ZXh0LW1kJz5cbiAgICAgICAgICA8TGluayB0bz0nLycgY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgSG9tZVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayB0bz0nL2Fib3V0JyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICBBYm91dHsnICd9XG4gICAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgICAgPExpbmsgdG89Jy9qb2luLXVzJyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICBKb2luIFVzXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIHRvPScvbmV3cycgY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgTmV3c1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayB0bz0nL2NvbnRhY3QnIGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2RhcmtNb2RlLCBzZXREYXJrTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3QgeyBnYVRyYWNraW5nSWQgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChnYVRyYWNraW5nSWQ/Lmxlbmd0aCkge1xuICAgICAgZ3RhZy5wYWdldmlldyhsb2NhdGlvbi5wYXRobmFtZSwgZ2FUcmFja2luZ0lkKTtcbiAgICB9XG4gIH0sIFtsb2NhdGlvbiwgZ2FUcmFja2luZ0lkXSk7XG4gIGNvbnN0IG1hdGNoZXMgPSB1c2VNYXRjaGVzKCk7XG4gIGNvbnNvbGUubG9nKG1hdGNoZXMpO1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9J2VuJyBjbGFzc05hbWU9e2AgJHtkYXJrTW9kZSA/ICcnIDogJ2RhcmsnfSBzY3JvbGwtc21vb3RoYH0+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xJyAvPlxuXG4gICAgICAgIDxzY3JpcHQ+PC9zY3JpcHQ+XG4gICAgICAgIHsvKlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgaWQ9J0Nvb2tpZWJvdCdcbiAgICAgICAgICBzcmM9J2h0dHBzOi8vY29uc2VudC5jb29raWVib3QuY29tL3VjLmpzJ1xuICAgICAgICAgIGRhdGEtY2JpZD0nNjRlZmE0ZWYtOGRhNS00YzY0LTllNjMtMzkyYmFjMThkM2MxJ1xuICAgICAgICAgIGRhdGEtYmxvY2tpbmdtb2RlPSdhdXRvJ1xuICAgICAgICAgIHR5cGU9J3RleHQvamF2YXNjcmlwdCdcbiAgPjwvc2NyaXB0PiAqL31cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGFzeW5jXG4gICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1HLU1WNUhZRVo2N0ZgfVxuICAgICAgICAvPlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmNcbiAgICAgICAgICBpZD0nZ3RhZy1pbml0J1xuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG4gICAgICAgICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcblxuICAgICAgICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICdHLU1WNUhZRVo2N0YnLCB7XG4gICAgICAgICAgICAgICAgICBwYWdlX3BhdGg6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgYCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICB7bWF0Y2hlc1sxXS5wYXRobmFtZSAhPSAnL2pvaW4tdXMnICYmIDxJbmZvQmFyIC8+fVxuXG4gICAgICAgIDxOYXYgc2V0RGFya01vZGU9e3NldERhcmtNb2RlfSAvPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPENvb2tpZUNvbnNlbnRcbiAgICAgICAgICBsb2NhdGlvbj0nYm90dG9tJ1xuICAgICAgICAgIGJ1dHRvblRleHQ9J0FjY2VwdCdcbiAgICAgICAgICBjb29raWVOYW1lPSdwYWRlbC1hZnJpY2EtY29va2llJ1xuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjMkIzNzNCJyB9fVxuICAgICAgICAgIGJ1dHRvblN0eWxlPXt7IGNvbG9yOiAnIzRlNTAzYicsIGZvbnRTaXplOiAnMXJlbScgfX1cbiAgICAgICAgICBleHBpcmVzPXsxNTB9XG4gICAgICAgID5cbiAgICAgICAgICBUaGlzIHdlYnNpdGUgdXNlcyBjb29raWVzIHRvIGVuaGFuY2UgdGhlIHVzZXIgZXhwZXJpZW5jZS57JyAnfVxuICAgICAgICA8L0Nvb2tpZUNvbnNlbnQ+XG5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5mb0JhcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0naC1hdXRvIGZsZXgtcm93IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmVlbi01MDAgdG8teWVsbG93LTUwMCB0ZXh0LXNsYXRlLTkwMCBwLTMgdGV4dC1jZW50ZXInPlxuICAgICAgXHVEODNEXHVEQzRCIEhleSEgV2UgYXJlIGRvaW5nIHNvbWUgcHJlc2VudGF0aW9uIHJvYWRzaG93cyBhcm91bmQgU3dlZGVuIGFuZFxuICAgICAgRGVubWFyay4gV2h5IGRvbid0IHlvdSZuYnNwO1xuICAgICAgPExpbmsgY2xhc3NOYW1lPSd1bmRlcmxpbmUgYm9sZCcgdG89Jy9qb2luLXVzJz5cbiAgICAgICAgam9pbiB1cy5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgVm90ZUdhbWUgZnJvbSAnfi9Db21wb25lbnRzL3ZvdGUnO1xuaW1wb3J0IHsgTGluaywgT3V0bGV0IH0gZnJvbSAncmVtaXgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb3JlVGhhblNwb3J0KCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndy1mdWxsICBtZDpweC0zMiBweS0yNCBweC0zIHNwYWNlLXktMTIgICBiZy1zbGF0ZS05MDAganVzdGlmeS1iZXR3ZWVuICAnPlxuICAgICAgPE91dGxldCAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgVm90ZUdhbWVSZXN1bHRzIGZyb20gJ34vQ29tcG9uZW50cy92b3RlLXJlc3VsdHMnO1xuaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIHVzZUFjdGlvbkRhdGEgfSBmcm9tICdyZW1peCc7XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBsZXQgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGxldCBlbWFpbCA9IGZvcm1EYXRhLmdldCgnZW1haWwnKTtcbiAgbGV0IHZvdGUgPSBmb3JtRGF0YS5nZXQoJ3ZvdGUnKTtcblxuICAvL3Byb2Nlc3MuZW52LkNPTlZFUlRLSVRfS0VZID0gJ2xHZjZrT25GT09DLVlPaWtaRF9ZUHcnO1xuXG4gIGNvbnN0IEFQSV9LRVkgPSAnbEdmNmtPbkZPT0MtWU9pa1pEX1lQdyc7XG4gIGNvbnN0IEZPUk1fSUQgPSAnMzAyMjA1NCc7XG4gIGNvbnN0IEFQSSA9ICdodHRwczovL2FwaS5jb252ZXJ0a2l0LmNvbS92My8nO1xuXG4gIGxldCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUEl9L2Zvcm1zLyR7Rk9STV9JRH0vc3Vic2NyaWJlYCwge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIGZpZWxkczogeyB2b3RlOiB2b3RlIH0sXG4gICAgICBhcGlfa2V5OiBBUElfS0VZLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgfSxcbiAgfSk7XG5cbiAgLy9jb25zb2xlLmxvZyh7IGVtYWlsIH0sIHsgbmFtZSB9LCB7IGNvbXBhbnkgfSk7XG4gIHJldHVybiByZXMuanNvbigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdWx0KCkge1xuICByZXR1cm4gPFZvdGVHYW1lUmVzdWx0cyBuYW1lPScnIGVtb2ppPScnIC8+O1xufVxuIiwgImludGVyZmFjZSByZXN1bHRzQ29udGVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgZW1vamk6IHN0cmluZztcbn1cblxuaW1wb3J0IHsgTGluaywgdXNlUGFyYW1zLCBGb3JtLCB1c2VBY3Rpb25EYXRhIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gJ3JlbWl4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVm90ZUdhbWVSZXN1bHRzKHByb3BzOiByZXN1bHRzQ29udGVudCkge1xuICBsZXQgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKTtcbiAgbGV0IHN0YXRlOiAnaWRsZScgfCAnc3VjY2VzcycgfCAnZXJyb3InID0gYWN0aW9uRGF0YT8uc3Vic2NyaXB0aW9uXG4gICAgPyAnc3VjY2VzcydcbiAgICA6IGFjdGlvbkRhdGE/LmVycm9yXG4gICAgPyAnZXJyb3InXG4gICAgOiAnaWRsZSc7XG5cbiAgY29uc3QgZGFya01vZGUgPSBmYWxzZTtcblxuICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcbiAgY29uc3QgaWQgPSBwYXJhbXMucmVzdWx0SWQ7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIHNwYWNlLXktOCc+XG4gICAgICA8YXNpZGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPScgc3BhY2UteS04JyBhcmlhLWhpZGRlbj17c3RhdGUgPT09ICdzdWNjZXNzJ30+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC01eGwgdXBwZXJjYXNlIGZvbnQtaGVhZGluZyc+XHVEODNFXHVERDczIFN1cGVyITwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LTV4bCB1cHBlcmNhc2UgZm9udC1oZWFkaW5nJz5cbiAgICAgICAgICAgIFlvdSB0aGluayBwYWRlbCBpc3snICd9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQteWVsbG93LTUwMCBpdGFsaWMnPm1vcmUgdGhhbiBzcG9ydC48L3NwYW4+XG4gICAgICAgICAgICA8YnI+PC9icj4gWW91IFRoaW5rIFBhZGVsIGlzeycgJ31cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC15ZWxsb3ctNTAwIGl0YWxpYyc+e2lkfTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LTV4bCB1cHBlcmNhc2UgZm9udC1oZWFkaW5nJz5cdUQ4M0RcdURFNEMgR3JlYXQgY2hvaWNlISA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hc2lkZT5cbiAgICAgIDxhc2lkZT5cbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBjbGFzc05hbWU9JyAgIHRleHQtc2xhdGUtOTAwIG0tYXV0byB3LTEvMiAgJ1xuICAgICAgICAgIG1ldGhvZD0ncG9zdCdcbiAgICAgICAgICBhcmlhLWhpZGRlbj17c3RhdGUgPT09ICdzdWNjZXNzJ31cbiAgICAgICAgPlxuICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9J2ZsZXggJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgZmxleC1ncm93Jz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgaWQ9J2VtYWlsJ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtc20gZGFyazp0ZXh0LXNsYXRlLTkwMCAgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41IGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwJ1xuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSduYW1lQG1haWwuY29tJ1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgaGlkZGVuJz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICBuYW1lPSd2b3RlJ1xuICAgICAgICAgICAgICAgIGlkPSd2b3RlJ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtc20gZGFyazp0ZXh0LXNsYXRlLTkwMCAgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41IGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwJ1xuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpZH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17aWR9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPScgIHB4LTYgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgdG8tc2xhdGUtOTAwIGRhcms6dG8teWVsbG93LTMwMCB0ZXh0LXdoaXRlIGRhcms6dGV4dC1zbGF0ZS05MDAgZm9udC1oZWFkaW5nIHVwcGVyY2FzZSBob3ZlcjpiZy1ncmFkaWVudC10by10bCBob3ZlcjpzY2FsZS0xMDUgc2hhZG93LTJ4bCAnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICA8cD57YWN0aW9uRGF0YT8uZXJyb3IgPyBhY3Rpb25EYXRhLm1lc3NhZ2UgOiA8PiAmbmJzcDsgPC8+fTwvcD5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgIG15LTEwIHRleHQtc2xhdGUtOTAwICBkYXJrOnRleHQtd2hpdGUgbWQ6bXktYXV0byBzcGFjZS15LXZ3LTQtbWluQHhsIHAtNiAgICBoLWZpdCAnXG4gICAgICAgICAgLy9jbGFzc05hbWU9eyBpZiAoc3RhdGUgPT09IFwic3VjZXNzXCIpICB7J2hpZGRlbid9IGVsc2V7J2Jsb2NrJ30gfVxuICAgICAgICAgIGFyaWEtaGlkZGVuPXtzdGF0ZSAhPT0gJ3N1Y2Nlc3MnfVxuICAgICAgICA+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC01eGwgdXBwZXJjYXNlIGZvbnQtaGVhZGluZyc+XG4gICAgICAgICAgICBcdUQ4M0RcdURFODAgWW91J3JlIG5vdyBlbnRlcmVkIGludG8gdGhlIGNvbXBldGl0aW9uIVxuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtNHhsIHVwcGVyY2FzZSBmb250LWhlYWRpbmcnPlxuICAgICAgICAgICAgS2VlcCBmb2xsb3dpbmcgdXMgdG8gc3RheSBpbiB0aGUgbG9vcCFcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT0ndW5kZXJsaW5lJyB0bz0nL21vcmUtdGhhbi1zcG9ydC9nYW1lJz5cbiAgICAgICAgICBSZXN0YXJ0XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvYXNpZGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdElkKCkge1xuICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcbiAgY29uc3QgaWQgPSBwYXJhbXMucmVzdWx0SWQ7XG4gIHJldHVybiBpZDtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb3JlVGhhblNwb3J0SW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd3LWZ1bGwgbWQ6cC0zMiBweS0xMiBweC0zIHNwYWNlLXktMTIgICBiZy1zbGF0ZS05MDAganVzdGlmeS1iZXR3ZWVuICAnPlxuICAgICAgPExpbmsgdG89J2dhbWUnPkdldCBTdGFydGVkPC9MaW5rPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgVm90ZUdhbWUgZnJvbSAnfi9Db21wb25lbnRzL3ZvdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lKCkge1xuICByZXR1cm4gPFZvdGVHYW1lIC8+O1xufVxuIiwgImltcG9ydCBWb3RlR2FtZVBsYXkgZnJvbSAnLi92b3RlLXBsYXknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWb3RlR2FtZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFZvdGVHYW1lUGxheT48L1ZvdGVHYW1lUGxheT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IFZvdGVQbGF5QnV0dG9uIGZyb20gJy4vdm90ZS1wbGF5LWJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZvdGVHYW1lUGxheSgpIHtcbiAgY29uc3QgYnV0dG9uQXJyYXk6IHsgaWQ6IG51bWJlcjsgbmFtZTogc3RyaW5nOyBlbW9qaTogc3RyaW5nIH1bXSA9IFtcbiAgICB7IGlkOiAxLCBuYW1lOiAnTG92ZScsIGVtb2ppOiAnXHUyNzY0XHVGRTBGJyB9LFxuICAgIHsgaWQ6IDIsIG5hbWU6ICdcdUZFMEZQYXNzaW9uJywgZW1vamk6ICdcdTI3MjgnIH0sXG4gICAgeyBpZDogMywgbmFtZTogJ1x1RkUwRkZyaWVuZHNoaXAnLCBlbW9qaTogJ1x1RDgzRFx1REM1MCcgfSxcbiAgICB7IGlkOiA0LCBuYW1lOiAnXHVGRTBGUHJpZGUnLCBlbW9qaTogJ1x1RDgzQ1x1REZGM1x1RkUwRlx1MjAwRFx1RDgzQ1x1REYwOCcgfSxcbiAgICB7IGlkOiA1LCBuYW1lOiAnXHVGRTBGRnVuJywgZW1vamk6ICdcdUQ4M0VcdUREMjEnIH0sXG4gICAgeyBpZDogNiwgbmFtZTogJ0NvbW11bml0eScsIGVtb2ppOiAnXHVEODNFXHVERDFEJyB9LFxuICAgIHsgaWQ6IDcsIG5hbWU6ICdcdUZFMEZGaWVyY2UnLCBlbW9qaTogJ1x1RDgzRFx1REM4NScgfSxcbiAgICB7IGlkOiA4LCBuYW1lOiAnXHVGRTBGUmVsYXhpbmcnLCBlbW9qaTogJ1x1RDgzRFx1REUwQycgfSxcbiAgICB7IGlkOiA5LCBuYW1lOiAnRmFtaWx5JywgZW1vamk6ICdcdUQ4M0RcdURDNjhcdTIwMERcdUQ4M0RcdURDNjlcdTIwMERcdUQ4M0RcdURDNjZcdTIwMERcdUQ4M0RcdURDNjYnIH0sXG4gICAgeyBpZDogMTAsIG5hbWU6ICdcdUZFMEZDb29sJywgZW1vamk6ICdcdUQ4M0RcdURFMEUnIH0sXG4gICAgeyBpZDogMTEsIG5hbWU6ICdcdUZFMEZJbmNyZWRpYmxlJywgZW1vamk6ICdcdUQ4M0RcdUREMjUnIH0sXG4gICAgeyBpZDogMTIsIG5hbWU6ICdcdUZFMEZcdUZFMEZFeGNpdGluZycsIGVtb2ppOiAnXHVEODNEXHVERTgwJyB9LFxuICAgIHsgaWQ6IDEzLCBuYW1lOiAnXHVGRTBGXHVGRTBGSW52ZXN0bWVudCcsIGVtb2ppOiAnXHVEODNEXHVEQ0I4JyB9LFxuICAgIHsgaWQ6IDE0LCBuYW1lOiAnQ3JhenknLCBlbW9qaTogJ1x1RDgzRVx1REQyRicgfSxcbiAgICB7IGlkOiAxNSwgbmFtZTogJ1NvY2lhbCcsIGVtb2ppOiAnXHVEODNDXHVERjdCJyB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3NwYWNlLXktMTInPlxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC01eGwgZm9udC1oZWFkaW5nIHRleHQtY2VudGVyIHVwcGVyY2FzZSc+XG4gICAgICAgIFBhZGVsIGlzeycgJ31cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXllbGxvdy01MDAgaXRhbGljJz5tb3JlIHRoYW4gc3BvcnQuPC9zcGFuPnsnICd9XG4gICAgICAgIDxicj48L2JyPlBhZGVsIGlzLi4uXG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgbWQ6Z3JpZC1jb2xzLTUgZ3JpZC1jb2xzLTMgZ2FwLTUnPlxuICAgICAgICB7YnV0dG9uQXJyYXkubWFwKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxWb3RlUGxheUJ1dHRvblxuICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgbmFtZT17dmFsdWUubmFtZX1cbiAgICAgICAgICAgICAgZW1vamk9e3ZhbHVlLmVtb2ppfVxuICAgICAgICAgICAgPjwvVm90ZVBsYXlCdXR0b24+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuXG5pbnRlcmZhY2UgQnV0dG9uQ29udGVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgZW1vamk6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVm90ZVBsYXlCdXR0b24ocHJvcHM6IEJ1dHRvbkNvbnRlbnQpIHtcbiAgY29uc3QgcmVzdWx0TGluayA9ICcvbW9yZS10aGFuLXNwb3J0L3Jlc3VsdC8nICsgcHJvcHMubmFtZSArIHByb3BzLmVtb2ppO1xuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICB0bz17cmVzdWx0TGlua31cbiAgICAgIGNsYXNzTmFtZT0nZ3JvdXAgIGJnLXNsYXRlLTgwMCBwLTQgcm91bmRlZC14bCBweS04ICB0ZXh0LWNlbnRlciBzaGFkb3cteGwgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSBob3ZlcjpiZy1zbGF0ZS05MDAgaG92ZXI6c2hhZG93LTJ4bCBob3Zlcjp0ZXh0LXllbGxvdy00MDAgIGhvdmVyOi10cmFuc2xhdGUteS0yIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCAnXG4gICAgPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LTJ4bCBibG9jayB0cmFuc2Zvcm0gZ3JvdXAtaG92ZXI6c2NhbGUtMTUwIGdyb3VwLWhvdmVyOnJvdGF0ZS02IGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCc+XG4gICAgICAgIHtwcm9wcy5lbW9qaX1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWQ6dGV4dC0yeGwgJz57cHJvcHMubmFtZX08L3NwYW4+XG4gICAgPC9MaW5rPlxuICApO1xufVxuIiwgImV4cG9ydCBjb25zdCBsb2FkZXIgPSAoKSA9PiB7XG4gIC8vIGhhbmRsZSBcIkdFVFwiIHJlcXVlc3RcbiAgLy8gc2VwYXJhdGluZyB4bWwgY29udGVudCBmcm9tIFJlc3BvbnNlIHRvIGtlZXAgY2xlYW4gY29kZS5cbiAgY29uc3QgY29udGVudCA9IGBcbiAgICAgICAgICA8dXJsc2V0IHhtbG5zPVwiaHR0cDovL3d3dy5zaXRlbWFwcy5vcmcvc2NoZW1hcy9zaXRlbWFwLzAuOVwiPlxuICAgICAgPHVybD5cbiAgICAgIDxsb2M+aHR0cHM6Ly93d3cucGFkZWwuYWZyaWNhLzwvbG9jPlxuICAgICAgPC91cmw+XG4gICAgICA8dXJsPlxuICAgICAgPGxvYz5odHRwczovL3d3dy5wYWRlbC5hZnJpY2EvYWJvdXQ8L2xvYz5cbiAgICAgIDwvdXJsPlxuICAgICAgPHVybD5cbiAgICAgIDxsb2M+aHR0cHM6Ly93d3cucGFkZWwuYWZyaWNhL2pvaW4tdXM8L2xvYz5cbiAgICAgIDwvdXJsPlxuICAgICAgPHVybD5cbiAgICAgIDxsb2M+aHR0cHM6Ly93d3cucGFkZWwuYWZyaWNhL25ld3M8L2xvYz5cbiAgICAgIDwvdXJsPlxuICAgICAgPHVybD5cbiAgICAgIDxsb2M+aHR0cHM6Ly93d3cucGFkZWwuYWZyaWNhL2NvbnRhY3Q8L2xvYz5cbiAgICAgIDwvdXJsPlxuICAgICAgPHVybD5cbiAgICAgIDxsb2M+aHR0cHM6Ly93d3cucGFkZWwuYWZyaWNhL25ld3MvcHJlc2VudGluZy1wYWRlbC1hZnJpY2EtdG8tdGhlLW5pZ2VyaWFuLWVtYmFzc3k8L2xvYz5cbiAgICAgIDwvdXJsPlxuICAgICAgPHVybD5cbiAgICAgIDxsb2M+aHR0cHM6Ly93d3cucGFkZWwuYWZyaWNhL25ld3MvbWVldC11cy1hdC1wYWRlbC1leHBvLTIwMjI8L2xvYz5cbiAgICAgIDwvdXJsPlxuICAgICAgPHVybD5cbiAgICAgIDxsb2M+aHR0cHM6Ly93d3cucGFkZWwuYWZyaWNhL25ld3MvaW52ZXN0LWluLXBhZGVsLWFmcmljYTwvbG9jPlxuICAgICAgPC91cmw+XG4gICAgICA8dXJsPlxuICAgICAgPGxvYz5odHRwczovL3d3dy5wYWRlbC5hZnJpY2EvbmV3cy93aGVuLXRoZS1mYXN0ZXN0LWdyb3dpbmctc3BvcnQtbWVldHMtdGhlLWZhc3Rlc3QtZ3Jvd2luZy1jb250aW5lbnQ8L2xvYz5cbiAgICAgIDwvdXJsPlxuICAgICAgPHVybD5cbiAgICAgIDxsb2M+aHR0cHM6Ly93d3cucGFkZWwuYWZyaWNhL25ld3Mvd2VsbC1rbm93bi1pY2UtaG9ja2V5LWFuZC1wYWRlbC1wcm9maWxlcy1pbnZlc3QtaW4tcGFkZWwtYWZyaWNhPC9sb2M+XG4gICAgICA8L3VybD5cbiAgICAgIDx1cmw+XG4gICAgICA8bG9jPmh0dHBzOi8vd3d3LnBhZGVsLmFmcmljYS9uZXdzL3BhZGVsLWV4cG8tMjAyMi13cmFwLXVwPC9sb2M+XG4gICAgICA8L3VybD5cbiAgICAgIFxuICAgICAgPC91cmxzZXQ+XG4gICAgICBgO1xuICAvLyBSZXR1cm4gdGhlIHJlc3BvbnNlIHdpdGggdGhlIGNvbnRlbnQsIGEgc3RhdHVzIDIwMCBtZXNzYWdlLCBhbmQgdGhlIGFwcHJvcHJpYXRlIGhlYWRlcnMgZm9yIGFuIFhNTCBwYWdlXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoY29udGVudCwge1xuICAgIHN0YXR1czogMjAwLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veG1sJyxcbiAgICAgICd4bWwtdmVyc2lvbic6ICcxLjAnLFxuICAgICAgZW5jb2Rpbmc6ICdVVEYtOCcsXG4gICAgfSxcbiAgfSk7XG59O1xuIiwgImV4cG9ydCBjb25zdCBsb2FkZXIgPSAoKSA9PiB7XG4gIC8vIGhhbmRsZSBcIkdFVFwiIHJlcXVlc3RcbiAgLy8gc2V0IHVwIG91ciB0ZXh0IGNvbnRlbnQgdGhhdCB3aWxsIGJlIHJldHVybmVkIGluIHRoZSByZXNwb25zZVxuICBjb25zdCByb2JvdFRleHQgPSBgXG4gICAgICAgIFVzZXItYWdlbnQ6IEdvb2dsZWJvdFxuICAgICAgICBEaXNhbGxvdzogL25vZ29vZ2xlYm90L1xuICAgIFxuICAgICAgICBVc2VyLWFnZW50OiAqXG4gICAgICAgIEFsbG93OiAvXG4gICAgXG4gICAgICAgIFNpdGVtYXA6IGh0dHBzOi8vd3d3LnBhZGVsLmFmcmljYS9zaXRlbWFwLnhtbFxuICAgICAgICBgO1xuICAvLyByZXR1cm4gdGhlIHRleHQgY29udGVudCwgYSBzdGF0dXMgMjAwIHN1Y2Nlc3MgcmVzcG9uc2UsIGFuZCBzZXQgdGhlIGNvbnRlbnQgdHlwZSB0byB0ZXh0L3BsYWluXG4gIHJldHVybiBuZXcgUmVzcG9uc2Uocm9ib3RUZXh0LCB7XG4gICAgc3RhdHVzOiAyMDAsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJyxcbiAgICB9LFxuICB9KTtcbn07XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgTWV0YUZ1bmN0aW9uLCBMaW5rLCBMaW5rcyB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IGZvcm1hdCwgZm9ybWF0RGlzdGFuY2UsIHN1YkRheXMgfSBmcm9tICdkYXRlLWZucyc7XG5cbmltcG9ydCB7IGdldENsaWVudCB9IGZyb20gJ34vbGliL3Nhbml0eS9nZXRDbGllbnQnO1xuaW1wb3J0IHsgUG9ydGFibGVUZXh0IH0gZnJvbSAnQHBvcnRhYmxldGV4dC9yZWFjdCc7XG5pbXBvcnQgeyBQb3J0YWJsZVRleHRDb21wb25lbnRzIH0gZnJvbSAnQHBvcnRhYmxldGV4dC9yZWFjdCc7XG5pbXBvcnQgTWV0YUltZyBmcm9tICd+L2ltYWdlcy9tZXRhLWltYWdlLnBuZyc7XG5cbmltcG9ydCBIZXJvTWFpbiBmcm9tICd+L0NvbXBvbmVudHMvaGVyby1tYWluJztcbmltcG9ydCBDVEFNYWlsIGZyb20gJ34vQ29tcG9uZW50cy9jdGEtbWFpbCc7XG5cbmNvbnN0IGNvbXBvbmVudHM6IFBvcnRhYmxlVGV4dENvbXBvbmVudHMgPSB7XG4gIG1hcmtzOiB7XG4gICAgLy8gRXguIDE6IGN1c3RvbSByZW5kZXJlciBmb3IgdGhlIGVtIC8gaXRhbGljcyBkZWNvcmF0b3JcbiAgICBlbTogKHsgY2hpbGRyZW4gfSkgPT4gKFxuICAgICAgPGVtIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTYwMCBmb250LXNlbWlib2xkJz57Y2hpbGRyZW59PC9lbT5cbiAgICApLFxuXG4gICAgLy8gRXguIDI6IHJlbmRlcmluZyBhIGN1c3RvbSBgbGlua2AgYW5ub3RhdGlvblxuICAgIGxpbms6ICh7IHZhbHVlLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSAodmFsdWU/LmhyZWYgfHwgJycpLnN0YXJ0c1dpdGgoJ2h0dHAnKVxuICAgICAgICA/ICdfYmxhbmsnXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXt2YWx1ZT8uaHJlZn1cbiAgICAgICAgICB0YXJnZXQ9e3RhcmdldH1cbiAgICAgICAgICBjbGFzc05hbWU9J3VuZGVybGluZSBmb250LWJvbGQgaG92ZXI6dGV4dC1ncmVlbi01MDAgdHJhbnNpdGlvbi1jb2xvcnMgZWFzZS1pbi1vdXQnXG4gICAgICAgICAgLy9yZWw9e3RhcmdldCA9PT0gJ19ibGFuaycgJiYgJ25vaW5kZXggbm9mb2xsb3cnfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2E+XG4gICAgICApO1xuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKHsgcGFyYW1zIH06IHsgcGFyYW1zOiBhbnkgfSkge1xuICAvLyBRdWVyeSBmb3IgX2FsbF8gZG9jdW1lbnRzIHdpdGggdGhpcyBzbHVnXG4gIC8vIFRoZXJlIGNvdWxkIGJlIHR3bzogRHJhZnQgYW5kIFB1Ymxpc2hlZCFcbiAgY29uc3QgaW5pdGlhbERhdGEgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaChcbiAgICBgKltfdHlwZSA9PSBcIm5ld3NcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddeyBfaWQsIHRpdGxlLCBzbHVnLCBcImZlYXR1cmVJbWFnZVwiOiBmZWF0dXJlLmFzc2V0LT51cmwsIG92ZXJ2aWV3LCBwdWJsaXNoZWREYXRlLCBleHRyYWN0LCBtZXRhXG4gIH1gLFxuICAgIHsgc2x1ZzogcGFyYW1zLnNsdWcgfVxuICApO1xuXG4gIHJldHVybiB7IGluaXRpYWxEYXRhIH07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoeyBkYXRhID0gdXNlTG9hZGVyRGF0YSgpIH0pID0+IHtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnUGFkZWwgQWZyaWNhIE5ld3MgLSBQYWRlbCwgTW9yZSBUaGFuIFNwb3J0JyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnTGVhcm4gYWJvdXQgaG93IFBhZGVsIEFmcmljYSBpcyBicmluZ2luZyBwYWRlbCwgYXMgYSBzcG9ydCwgYSBsaWZlc3R5bGUsIGFuZCBhIGNvbW11bml0eSBidWlsZGVyLCB0byBBZnJpY2EsIHN0YXJ0aW5nIHdpdGggY2VudGVycyBpbiBHaGFuYSBhbmQgUndhbmRhLiBQYWRlbCBpcyBtb3JlIHRoYW4gc3BvcnQgLSBpdCBpcyBpbXBhY3QuICcsXG4gICAgICAnb2c6aW1hZ2UnOiBgaHR0cHM6Ly93d3cucGFkZWwuYWZyaWNhJHtNZXRhSW1nfWAsXG4gICAgfTtcbiAgfVxuXG4gIGxldCB7IG5ld3MgfSA9IGRhdGEuaW5pdGlhbERhdGFbMF07XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogYFBhZGVsIEFmcmljYSBOZXdzIC0gJHtkYXRhLmluaXRpYWxEYXRhWzBdLnRpdGxlfWAsXG4gICAgZGVzY3JpcHRpb246IGRhdGEuaW5pdGlhbERhdGFbMF0ubWV0YSxcbiAgICAnb2c6aW1hZ2UnOiBkYXRhLmluaXRpYWxEYXRhWzBdLmZlYXR1cmVJbWFnZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NQb3N0KCkge1xuICBsZXQgeyBpbml0aWFsRGF0YSB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuICBsZXQgbmV3cyA9IGluaXRpYWxEYXRhWzBdO1xuICBsZXQgcG9zdERhdGUyID0gZm9ybWF0RGlzdGFuY2UoXG4gICAgc3ViRGF5cyhuZXcgRGF0ZShuZXdzLnB1Ymxpc2hlZERhdGUpLCAzKSxcbiAgICBuZXcgRGF0ZSgpLFxuICAgIHsgYWRkU3VmZml4OiB0cnVlIH1cbiAgKTtcblxuICBsZXQgcG9zdERhdGUgPVxuICAgICdGaXJzdCBwdWJsaXNoZWQgb24gJyArXG4gICAgZm9ybWF0KG5ldyBEYXRlKG5ld3MucHVibGlzaGVkRGF0ZSksICdkZCBNTU1NIHl5eXknKTtcbiAgY29uc29sZS5sb2cocG9zdERhdGUpO1xuICBjb25zb2xlLmxvZyhwb3N0RGF0ZTIpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZXJvTWFpblxuICAgICAgICBoZWFkaW5nPXtuZXdzLnRpdGxlfVxuICAgICAgICBzdWJ0aXRsZT17cG9zdERhdGV9XG4gICAgICAgIGJ1dHRvbjFUZXh0PSdSZWFkIHRoZSBBcnRpY2xlJ1xuICAgICAgICBidXR0b24xVG89JyNuZXdzJ1xuICAgICAgICBpbWdTcmM9e25ld3MuZmVhdHVyZUltYWdlfVxuICAgICAgPjwvSGVyb01haW4+XG4gICAgICA8c2VjdGlvblxuICAgICAgICBpZD0nbmV3cydcbiAgICAgICAgY2xhc3NOYW1lPSdwLTYgbWQ6cHgtMzIgbWF4LXctNHhsIG14LWF1dG8gIG1kOnB5LTI0ICBzcGFjZS15LTYgICBiZy13aGl0ZSBqdXN0aWZ5LWJldHdlZW4gdGV4dC1ibGFjayAnXG4gICAgICA+XG4gICAgICAgIHtuZXdzLm92ZXJ2aWV3Py5sZW5ndGggPiAwXG4gICAgICAgICAgPyBuZXdzLm92ZXJ2aWV3Lm1hcCgocGFyYWdyYXBoczogYW55KSA9PiAoXG4gICAgICAgICAgICAgIDxQb3J0YWJsZVRleHRcbiAgICAgICAgICAgICAgICBrZXk9e3BhcmFncmFwaHMuX2lkfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtbcGFyYWdyYXBoc119XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cz17Y29tcG9uZW50c31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIHsnICd9XG4gICAgICAgIDxDVEFNYWlsXG4gICAgICAgICAgaGVhZGluZz0nU2lnbiB1cCB0byB0aGUgUGFkZWwgQWZyaWNhIG5ld3NsZXR0ZXInXG4gICAgICAgICAgYm9keT0nU3Vic2NyaWJlIGFuZCBlbnN1cmUgdG8gYmUgYW1vbmcgdGhlIGZpcnN0IHRvIGZpbmQgb3V0IGFib3V0IGFsbCBvdXIgdXBkYXRlcyBhbmQgc3BlY2lhbCBvZmZlcnMuJ1xuICAgICAgICAgIGJ1dHRvblRleHQ9J0NvbnRhY3QgVXMnXG4gICAgICAgICAgYnV0dG9uVG89JyNjb250YWN0J1xuICAgICAgICAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCBQaWNvU2FuaXR5IGZyb20gJ3BpY29zYW5pdHknO1xuXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJztcblxuLy8gU3RhbmRhcmQgY2xpZW50IGZvciBmZXRjaGluZyBkYXRhXG5leHBvcnQgY29uc3Qgc2FuaXR5Q2xpZW50ID0gbmV3IFBpY29TYW5pdHkoY29uZmlnKTtcblxuZXhwb3J0IGNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoc2FuaXR5Q2xpZW50KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVybEZvcihzb3VyY2U6IGFueSkge1xuICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpO1xufVxuXG4vLyBBdXRoZW50aWNhdGVkIGNsaWVudCBmb3IgZmV0Y2hpbmcgZHJhZnQgZG9jdW1lbnRzXG5leHBvcnQgY29uc3QgcHJldmlld0NsaWVudCA9IG5ldyBQaWNvU2FuaXR5KHtcbiAgLi4uY29uZmlnLFxuICB1c2VDZG46IGZhbHNlLFxuICAvL3Rva2VuOiBwcm9jZXNzLmVudi5TQU5JVFlfQVBJX1RPS0VOLFxufSk7XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjaG9vc2UgdGhlIGNvcnJlY3QgY2xpZW50XG5leHBvcnQgY29uc3QgZ2V0Q2xpZW50ID0gKHVzZVByZXZpZXcgPSBmYWxzZSkgPT5cbiAgdXNlUHJldmlldyA/IHByZXZpZXdDbGllbnQgOiBzYW5pdHlDbGllbnQ7XG4iLCAiZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpVmVyc2lvbjogJzIwMjEtMDMtMjUnLFxuICAvLyBGaW5kIHRoZXNlIGluIHlvdXIgLi9zdHVkaW8vc2FuaXR5Lmpzb24gZmlsZVxuICBkYXRhc2V0OiAncHJvZHVjdGlvbicsXG4gIHByb2plY3RJZDogJ3FpOGhyM3J2JyxcbiAgdXNlQ2RuOiBmYWxzZSxcbn07XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIEZvcm0sIExpbmssIHVzZUFjdGlvbkRhdGEgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgaGVyb0ltZyBmcm9tICcuLi9pbWFnZXMvcGFkZWwtaGVyby5qcGcnO1xuaW1wb3J0IHBhZGVsSW1nIGZyb20gJy4uL2ltYWdlcy9wYXJ0bmVycy9wYWRlbHRvdGFsLWxvZ28ucG5nJztcbmltcG9ydCBwYWRlbElxIGZyb20gJy4uL2ltYWdlcy9wYXJ0bmVycy9wYWRlbC1pcS5wbmcnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5cbmludGVyZmFjZSBIZXJvQ29udGVudCB7XG4gIGhlYWRpbmc6IHN0cmluZztcbiAgc3VidGl0bGU6IHN0cmluZztcbiAgYnV0dG9uMVRleHQ6IHN0cmluZztcbiAgYnV0dG9uMVRvOiBzdHJpbmc7XG4gIGltZ1NyYzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvTWFpbihwcm9wczogSGVyb0NvbnRlbnQpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW5cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMTUsIDIzLCA0MiwxKSxyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkpLCB1cmwoJyR7cHJvcHMuaW1nU3JjfScpYCxcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtgYmctW3VybCgke3Byb3BzLmltZ1NyY30pXSBbaGVyb10gICAgbXgtYXV0byAgcHQtMTYgIHBiLTEyICAgIHB4LTggc206cHgtMTIgZmxleCAgZmxleC1jb2wgbWQ6ZmxleC1yb3cgYWxpZ24tbWlkZGxlIG1kOmp1c3RpZnktYmV0d2VlbiAgYmctY292ZXIgIG1kOnNwYWNlLXgtMTJcdGB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvIG1kOm1heC13LTV4bCB0ZXh0LWNlbnRlciAgbWQ6bXktYXV0byBzcGFjZS15LXZ3LTItbWluQHhsIG1kOnB5LTE2IG1kOnB4LTEyICAnPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtNHhsIG1kOnRleHQtNnhsIGZvbnQtaGVhZGluZyB1cHBlcmNhc2UgdGV4dC13aGl0ZSAnPlxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIHtwcm9wcy5oZWFkaW5nfVxuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteHMgdGV4dC13aGl0ZSAgdXBwZXJjYXNlIG9wYWNpdHktNzUgdHJhY2tpbmctdGlnaHQgJz5cbiAgICAgICAgICAgIHtwcm9wcy5zdWJ0aXRsZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAge3Byb3BzLmJ1dHRvbjFUZXh0ID8gKFxuICAgICAgICAgICAgPEJ1dHRvbiB0aXRsZT17cHJvcHMuYnV0dG9uMVRleHR9IHRvPXtwcm9wcy5idXR0b24xVG99IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICcnXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4JztcblxuaW50ZXJmYWNlIEJ1dHRvbkNvbnRlbnQge1xuICB0aXRsZTogc3RyaW5nO1xuICB0bzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24ocHJvcHM6IEJ1dHRvbkNvbnRlbnQpIHtcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgdG89e3Byb3BzLnRvfVxuICAgICAgY2xhc3NOYW1lPScgaW5saW5lLWZsZXggdy1maXQgaXRlbXMtY2VudGVyICB0ZXh0LWJhc2UgZm9udC1oZWFkaW5nIHRleHQtY2VudGVyIHB5LTIgcHgtNiBiZy1ncmFkaWVudC10by1iciBmcm9tLWdyZWVuLTMwMCAgdmlhLWdyZWVuLTUwMCB0by15ZWxsb3ctNDAwICB0ZXh0LWJsYWNrIGZvbnQtYm9sZCBob3ZlcjpiZy1ncmFkaWVudC10by10bCBob3ZlcjpzY2FsZS0xMDUgc2hhZG93LTJ4bCdcbiAgICA+XG4gICAgICB7cHJvcHMudGl0bGV9XG4gICAgICA8c3ZnXG4gICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICBjbGFzc05hbWU9J21sLTIgLW1yLTEgdy00IGgtNCdcbiAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xuICAgICAgICB2aWV3Qm94PScwIDAgMjAgMjAnXG4gICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgID5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICBkPSdNMTAuMjkzIDMuMjkzYTEgMSAwIDAxMS40MTQgMGw2IDZhMSAxIDAgMDEwIDEuNDE0bC02IDZhMSAxIDAgMDEtMS40MTQtMS40MTRMMTQuNTg2IDExSDNhMSAxIDAgMTEwLTJoMTEuNTg2bC00LjI5My00LjI5M2ExIDEgMCAwMTAtMS40MTR6J1xuICAgICAgICAgIGNsaXBSdWxlPSdldmVub2RkJ1xuICAgICAgICAvPlxuICAgICAgPC9zdmc+XG4gICAgPC9MaW5rPlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmssIEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5cbmludGVyZmFjZSBDVEFDb250ZW50IHtcbiAgaGVhZGluZzogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIGJ1dHRvblRleHQ6IHN0cmluZztcbiAgYnV0dG9uVG86IHN0cmluZztcbn1cbmltcG9ydCB7IHVzZVBhcmFtcywgRm9ybSwgdXNlQWN0aW9uRGF0YSB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgbGV0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBsZXQgZW1haWwgPSBmb3JtRGF0YS5nZXQoJ2VtYWlsJyk7XG5cbiAgLy9wcm9jZXNzLmVudi5DT05WRVJUS0lUX0tFWSA9ICdsR2Y2a09uRk9PQy1ZT2lrWkRfWVB3JztcblxuICBjb25zdCBBUElfS0VZID0gJ2xHZjZrT25GT09DLVlPaWtaRF9ZUHcnO1xuICBjb25zdCBGT1JNX0lEID0gJzMwMjIwNTQnO1xuICBjb25zdCBBUEkgPSAnaHR0cHM6Ly9hcGkuY29udmVydGtpdC5jb20vdjMvJztcblxuICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJfS9mb3Jtcy8ke0ZPUk1fSUR9L3N1YnNjcmliZWAsIHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBlbWFpbDogZW1haWwsXG4gICAgICBhcGlfa2V5OiBBUElfS0VZLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgfSxcbiAgfSk7XG5cbiAgLy9jb25zb2xlLmxvZyh7IGVtYWlsIH0sIHsgbmFtZSB9LCB7IGNvbXBhbnkgfSk7XG4gIHJldHVybiByZXMuanNvbigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ1RBTWFpbChwcm9wczogQ1RBQ29udGVudCkge1xuICBsZXQgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKTtcbiAgbGV0IHN0YXRlOiAnaWRsZScgfCAnc3VjY2VzcycgfCAnZXJyb3InID0gYWN0aW9uRGF0YT8uc3Vic2NyaXB0aW9uXG4gICAgPyAnc3VjY2VzcydcbiAgICA6IGFjdGlvbkRhdGE/LmVycm9yXG4gICAgPyAnZXJyb3InXG4gICAgOiAnaWRsZSc7XG5cbiAgY29uc3QgZGFya01vZGUgPSBmYWxzZTtcblxuICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcbiAgY29uc3QgaWQgPSBwYXJhbXMucmVzdWx0SWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgaWQ9J3BhcnRuZXJzJ1xuICAgICAgY2xhc3NOYW1lPSdbY3RhXSBteS0xNiBwLTIwIG1kOm14LTIwIGJnLXNsYXRlLTkwMCAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1taWRkbGUgcm91bmRlZC1tZCBzaGFkb3ctMnhsIHRleHQtd2hpdGUnXG4gICAgPlxuICAgICAgPGFzaWRlIGNsYXNzTmFtZT0nICBtLWF1dG8gIHRleHQtY2VudGVyICBzcGFjZS15LXZ3LTYtbWluQHhsIG1kOnctMy80ICAnPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTR4bCBmb250LWhlYWRpbmcgdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgIHZpYS1ncmVlbi01MDAgdG8teWVsbG93LTQwMCAnPlxuICAgICAgICAgIHtwcm9wcy5oZWFkaW5nfVxuICAgICAgICA8L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2Jhc2UnPntwcm9wcy5ib2R5fTwvcD5cblxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIG1ldGhvZD0ncG9zdCdcbiAgICAgICAgICBjbGFzc05hbWU9J3NtOmdhcC00IHNtOmZsZXggbWF4LXcteGwgbXgtYXV0byBtdC04J1xuICAgICAgICAgIGFyaWEtaGlkZGVuPXtzdGF0ZSA9PT0gJ3N1Y2Nlc3MnfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtOmZsZXgtMSc+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnIGNsYXNzTmFtZT0nc3Itb25seSc+XG4gICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xuICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgaWQ9J2VtYWlsJ1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwgYWRkcmVzcydcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgcC0zIGJnLXdoaXRlIGJvcmRlci1ncmF5LTIwMCB0cmFuc2l0aW9uIGRhcms6Ymctc2xhdGUtODAwIGRhcms6Ym9yZGVyLXNsYXRlLTcwMCBkYXJrOnRleHQtd2hpdGUgIHNoYWRvdy1zbSBmb2N1czpyaW5nIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWdyZWVuLTQwMCBmb2N1czpib3JkZXItd2hpdGUnXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIG10LTQgc206dy1hdXRvICAgc206bXQtMCB0ZXh0LWJhc2UgZm9udC1oZWFkaW5nIHRleHQtY2VudGVyIHB5LTIgcHgtNiBiZy1ncmFkaWVudC10by1iciBmcm9tLWdyZWVuLTMwMCAgdmlhLWdyZWVuLTUwMCB0by15ZWxsb3ctNDAwICB0ZXh0LWJsYWNrIGZvbnQtYm9sZCBob3ZlcjpiZy1ncmFkaWVudC10by10bCBob3ZlcjpzY2FsZS0xMDUgc2hhZG93LTJ4bCdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtc20gZm9udC1tZWRpdW0nPiBTaWduIFVwIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTUgaC01IG1sLTMnXG4gICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgICAgZmlsbD0nbm9uZSdcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgZD0nTTE3IDhsNCA0bTAgMGwtNCA0bTQtNEgzJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHA+e2FjdGlvbkRhdGE/LmVycm9yID8gYWN0aW9uRGF0YS5tZXNzYWdlIDogPD4gJm5ic3A7IDwvPn08L3A+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsICBteS0xMCB0ZXh0LXNsYXRlLTkwMCAgZGFyazp0ZXh0LXdoaXRlIG1kOm15LWF1dG8gc3BhY2UteS12dy00LW1pbkB4bCBwLTYgICAgaC1maXQgJ1xuICAgICAgICAgIC8vY2xhc3NOYW1lPXsgaWYgKHN0YXRlID09PSBcInN1Y2Vzc1wiKSAgeydoaWRkZW4nfSBlbHNleydibG9jayd9IH1cbiAgICAgICAgICBhcmlhLWhpZGRlbj17c3RhdGUgIT09ICdzdWNjZXNzJ31cbiAgICAgICAgPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC0yeGwgdXBwZXJjYXNlIGZvbnQtaGVhZGluZyc+XG4gICAgICAgICAgICBZb3UncmUgbm93IHN1YnNjcmliZWRcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hc2lkZT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iLCAiaW1wb3J0IENUQU1haWwgZnJvbSAnfi9Db21wb25lbnRzL2N0YS1tYWlsJztcbmltcG9ydCBFdmVudEltZyBmcm9tICd+L2ltYWdlcy9ldmVudF9hZC5wbmcnO1xuaW1wb3J0IHsgTGluaywgTWV0YSwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCBIZXJvIGZyb20gJ34vQ29tcG9uZW50cy9oZXJvLWFsdCc7XG5pbXBvcnQgSGVyb01haW4gZnJvbSAnfi9Db21wb25lbnRzL2hlcm8tbWFpbic7XG5pbXBvcnQgeyBnZXRDbGllbnQsIHVybEZvciB9IGZyb20gJ34vbGliL3Nhbml0eS9nZXRDbGllbnQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICd+L0NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCB7IFBvcnRhYmxlVGV4dCB9IGZyb20gJ0Bwb3J0YWJsZXRleHQvcmVhY3QnO1xuaW1wb3J0IGhlcm9JbWcgZnJvbSAnfi9pbWFnZXMvcGFkZWwtaGVyby5qcGcnO1xuaW1wb3J0IE1ldGFJbWcgZnJvbSAnfi9pbWFnZXMvbWV0YS1pbWFnZS5wbmcnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKCkge1xuICBjb25zdCBuZXdzUG9zdHMgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaChcbiAgICBgKltfdHlwZSA9PSBcIm5ld3NcIl0gfCBvcmRlcihfY3JlYXRlZEF0IGRlc2MpIHsgX2lkLCB0aXRsZSwgc2x1ZywgXCJmZWF0dXJlSW1hZ2VcIjogZmVhdHVyZS5hc3NldC0+dXJsLCBleHRyYWN0XG4gICAgICAgfWBcbiAgKTtcbiAgcmV0dXJuIHsgbmV3c1Bvc3RzIH07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhID0gKCkgPT4ge1xuICBjb25zdCB7IG5ld3NQb3N0cyB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdQYWRlbCBBZnJpY2EgTmV3cyAtIFBhZGVsLCBNb3JlIFRoYW4gU3BvcnQnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xlYXJuIGFib3V0IGhvdyBQYWRlbCBBZnJpY2EgaXMgYnJpbmdpbmcgcGFkZWwsIGFzIGEgc3BvcnQsIGEgbGlmZXN0eWxlLCBhbmQgYSBjb21tdW5pdHkgYnVpbGRlciwgdG8gQWZyaWNhLCBzdGFydGluZyB3aXRoIGNlbnRlcnMgaW4gR2hhbmEgYW5kIFJ3YW5kYS4gUGFkZWwgaXMgbW9yZSB0aGFuIHNwb3J0IC0gaXQgaXMgaW1wYWN0LiAnLFxuICAgIGtleXdvcmRzOlxuICAgICAgJ3BhZGVsLCBhZnJpY2EsIHNwb3J0LCBnaGFuYSwgcndhbmRhLCBrZW55YSwgdWdhbmRhLCBjb21tdW5pdHksIGltcGFjdCcsXG4gICAgJ29nOmltYWdlJzogYGh0dHBzOi8vd3d3LnBhZGVsLmFmcmljYSR7TWV0YUltZ31gLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3cygpIHtcbiAgY29uc3QgeyBuZXdzUG9zdHMgfSA9IHVzZUxvYWRlckRhdGEoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVyb01haW5cbiAgICAgICAgaGVhZGluZz0nUGFkZWwgQWZyaWNhIE5ld3MnXG4gICAgICAgIHN1YnRpdGxlPSdHZXQgdGhlIGxhdGVzdCBuZXdzIGFuZCB1cGRhdGVzLiAnXG4gICAgICAgIGJ1dHRvbjFUZXh0PSdTZWUgQWxsIE5ld3MnXG4gICAgICAgIGJ1dHRvbjFUbz0nI25ld3MnXG4gICAgICAgIGltZ1NyYz17aGVyb0ltZ31cbiAgICAgIC8+XG5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIGlkPSduZXdzJ1xuICAgICAgICBjbGFzc05hbWU9J3B5LTEyIG1heC13LXNjcmVlbi1sZyAgbXgtYXV0byAgcHgtNCBtZDpweC0wIGJnLXdoaXRlICB0ZXh0LWJsYWNrICdcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTMgJz5cbiAgICAgICAgICB7bmV3c1Bvc3RzPy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IG5ld3NQb3N0cy5zbGljZSgwLCA2KS5tYXAoKG5ld3M6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17bmV3cy5faWR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ3JvdXAgbWF4LXctc20gYmctd2hpdGUgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHNoYWRvdy1tZCBkYXJrOmJnLXNsYXRlLTkwMCBkYXJrOmJvcmRlci1zbGF0ZS03MDAgaG92ZXI6LXRyYW5zbGF0ZS15LTEgIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89e25ld3Muc2x1Zy5jdXJyZW50fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J292ZXJmbG93LWhpZGRlbiAnPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncm91bmRlZC10LWxnIGgtNDggdy1mdWxsIG9iamVjdC1jb3ZlciBncm91cC1ob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbiBlYXNlLWluLW91dCAgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IobmV3cy5mZWF0dXJlSW1hZ2UpLndpZHRoKDUwMCkudXJsKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9JydcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTUgZmxleCBmbGV4LWNvbCBoLWZ1bGwgJz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e25ld3Muc2x1Zy5jdXJyZW50fT5cbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPScgdGV4dC0yeGwgZm9udC1oZWFkaW5nIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlICc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bmV3cy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWItMyBmb250LW5vcm1hbCB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMCBmbGV4LWdyb3cnPlxuICAgICAgICAgICAgICAgICAgICAgIHtuZXdzLmV4dHJhY3Q/Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbmV3cy5leHRyYWN0Lm1hcCgocGFyYWdyYXBoczogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcnRhYmxlVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwYXJhZ3JhcGhzLl9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtbcGFyYWdyYXBoc119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbXBvbmVudHM9e215UG9ydGFibGVUZXh0Q29tcG9uZW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdG89e25ld3Muc2x1Zy5jdXJyZW50fSB0aXRsZT0nUmVhZCBNb3JlJyAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8Q1RBTWFpbFxuICAgICAgICBoZWFkaW5nPSdTaWduIHVwIHRvIHRoZSBQYWRlbCBBZnJpY2EgbmV3c2xldHRlcidcbiAgICAgICAgYm9keT0nU3Vic2NyaWJlIGFuZCBlbnN1cmUgdG8gYmUgYW1vbmcgdGhlIGZpcnN0IHRvIGZpbmQgb3V0IGFib3V0IG91ciB1cGRhdGVzIGFuZCBzcGVjaWFsIG9mZmVycy4nXG4gICAgICAgIGJ1dHRvblRleHQ9J0NvbnRhY3QgVXMnXG4gICAgICAgIGJ1dHRvblRvPScjY29udGFjdCdcbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIEZvcm0sIHVzZUFjdGlvbkRhdGEsIExpbmssIE1ldGEgfSBmcm9tICdyZW1peCc7XG5cbmltcG9ydCBDVEEgZnJvbSAnfi9Db21wb25lbnRzL2N0YSc7XG5pbXBvcnQgSGVybyBmcm9tICd+L0NvbXBvbmVudHMvY2FtcGFpZ24taGVybyc7XG5pbXBvcnQgQmdJbWcgZnJvbSAnfi9pbWFnZXMvd2ViLWJnLmpwZyc7XG5pbXBvcnQgRmFjdHMgZnJvbSAnfi9Db21wb25lbnRzL2ZhY3RzJztcbmltcG9ydCBDVEFNYWlsIGZyb20gJ34vQ29tcG9uZW50cy9jdGEtbWFpbCc7XG5pbXBvcnQgTWV0YUltZyBmcm9tICd+L2ltYWdlcy9tZXRhLWltYWdlLnBuZyc7XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBsZXQgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGxldCBlbWFpbCA9IGZvcm1EYXRhLmdldCgnZW1haWwnKTtcbiAgbGV0IG5hbWUgPSBmb3JtRGF0YS5nZXQoJ25hbWUnKTtcbiAgbGV0IG1lc3NhZ2UgPSBmb3JtRGF0YS5nZXQoJ21lc3NhZ2UnKTtcblxuICAvL3Byb2Nlc3MuZW52LkNPTlZFUlRLSVRfS0VZID0gJ2xHZjZrT25GT09DLVlPaWtaRF9ZUHcnO1xuXG4gIGNvbnN0IEFQSV9LRVkgPSAnbEdmNmtPbkZPT0MtWU9pa1pEX1lQdyc7XG4gIGNvbnN0IEZPUk1fSUQgPSAnMzAyMjA1NCc7XG4gIGNvbnN0IEFQSSA9ICdodHRwczovL2FwaS5jb252ZXJ0a2l0LmNvbS92My8nO1xuXG4gIGxldCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUEl9L2Zvcm1zLyR7Rk9STV9JRH0vc3Vic2NyaWJlYCwge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIGZpcnN0X25hbWU6IG5hbWUsXG4gICAgICBmaWVsZHM6IHsgbWVzc2FnZTogbWVzc2FnZSB9LFxuICAgICAgYXBpX2tleTogQVBJX0tFWSxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vY29uc29sZS5sb2coeyBlbWFpbCB9LCB7IG5hbWUgfSwgeyBjb21wYW55IH0pO1xuICByZXR1cm4gcmVzLmpzb24oKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnQ29udGFjdCBQYWRlbCBBZnJpY2EgLSBQYWRlbCwgTW9yZSBUaGFuIFNwb3J0JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdDb250YWN0IFBhZGVsIEFmcmljYSBhbmQgZ2V0IGluIHRvdWNoIHRvIGRpc2N1c3MgaG93IHlvdSB3b3VsZCBsaWtlIHRvIGJlIGludm9sdmVkIGluIGJyaW5naW5nIHBhZGVsLCBhcyBhIHNwb3J0LCBhIGxpZmVzdHlsZSwgYW5kIGEgY29tbXVuaXR5IGJ1aWxkZXIsIHRvIEFmcmljYS4gICAnLFxuICAgIGtleXdvcmRzOlxuICAgICAgJ3BhZGVsLCBhZnJpY2EsIHNwb3J0LCBjb250YWN0LCBnaGFuYSwgcndhbmRhLCBrZW55YSwgdWdhbmRhLCBjb21tdW5pdHknLFxuICAgICdvZzppbWFnZSc6IGBodHRwczovL3d3dy5wYWRlbC5hZnJpY2Eke01ldGFJbWd9YCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gIGxldCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpO1xuICBsZXQgc3RhdGU6ICdpZGxlJyB8ICdzdWNjZXNzJyB8ICdlcnJvcicgPSBhY3Rpb25EYXRhPy5zdWJzY3JpcHRpb25cbiAgICA/ICdzdWNjZXNzJ1xuICAgIDogYWN0aW9uRGF0YT8uZXJyb3JcbiAgICA/ICdlcnJvcidcbiAgICA6ICdpZGxlJztcbiAgY29uc3QgZGFya01vZGUgPSBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J215LWF1dG8gYmctd2hpdGUgbWQ6cHgtMzIgbWQ6cHktMjQgcHktMTIgcHgtMyBmbGV4IG1kOmZsZXgtcm93IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiB0ZXh0LWJsYWNrICc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZDp3LTEvMiBweC04IHNwYWNlLXktNCc+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0yeGwgIGZvbnQtaGVhZGluZyBmb250LWJsYWNrIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2UgICc+XG4gICAgICAgICAgICBDb250YWN0IFBhZGVsIEFmcmljYVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYWNlLXktMiAnPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFBsZWFzZSBnZXQgaW4gdG91Y2ggaWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucyBvciB3b3VsZCBsaWtlIHRvXG4gICAgICAgICAgICAgIGRpc2N1c3MgcGFydG5lcnNoaXAgb3IgaW52ZXN0bWVudCBvcHB1cnR1bml0aWVzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtc3RhcnQgbXQtOCB0ZXh0LXNsYXRlLTgwMCc+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgZmlsbD0nbm9uZSdcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD0nMS41J1xuICAgICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTggaC04IHRleHQtc2xhdGUtODAwJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPScxLjUnXG4gICAgICAgICAgICAgICAgICAgIGQ9J00xNy42NTcgMTYuNjU3TDEzLjQxNCAyMC45YTEuOTk4IDEuOTk4IDAgMDEtMi44MjcgMGwtNC4yNDQtNC4yNDNhOCA4IDAgMTExMS4zMTQgMHonXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9JzEuNSdcbiAgICAgICAgICAgICAgICAgICAgZD0nTTE1IDExYTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHonXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtbC00IHRleHQtbWQgdHJhY2tpbmctd2lkZSBmb250LXNlbWlib2xkIHctNjQnPlxuICAgICAgICAgICAgICAgICAgUGFkZWwgQWZyaWNhIEFCLCBLbG9zdGVyZ2F0YW4gMiwgMjIyIDIyIEx1bmQsIFN3ZWRlbiA8YnI+PC9icj57JyAnfVxuICAgICAgICAgICAgICAgICAgT3JnLm5yOiA1NTkzNDEtNTc3MFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPSd0ZWw6MDA0NjczOTc4Nzc2NCdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3VuZGVybGluZSBmbGV4IGl0ZW1zLWNlbnRlciBtdC00IHRleHQtc2xhdGUtODAwJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgZmlsbD0nbm9uZSdcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD0nMS41J1xuICAgICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTggaC04IHRleHQtc2xhdGUtODAwJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPScxLjUnXG4gICAgICAgICAgICAgICAgICAgIGQ9J00zIDVhMiAyIDAgMDEyLTJoMy4yOGExIDEgMCAwMS45NDguNjg0bDEuNDk4IDQuNDkzYTEgMSAwIDAxLS41MDIgMS4yMWwtMi4yNTcgMS4xM2ExMS4wNDIgMTEuMDQyIDAgMDA1LjUxNiA1LjUxNmwxLjEzLTIuMjU3YTEgMSAwIDAxMS4yMS0uNTAybDQuNDkzIDEuNDk4YTEgMSAwIDAxLjY4NC45NDlWMTlhMiAyIDAgMDEtMiAyaC0xQzkuNzE2IDIxIDMgMTQuMjg0IDMgNlY1eidcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21sLTQgdGV4dC1tZCB0cmFja2luZy13aWRlIGZvbnQtc2VtaWJvbGQgIHVuZGVybGluZSBob3Zlcjp0ZXh0LWdyZWVuLTUwMCB0cmFuc2l0aW9uLWNvbG9ycyBlYXNlLWluLW91dCAnPlxuICAgICAgICAgICAgICAgICAgKzQ2IDczIDk3OCA3NyA2NFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj0nbWFpbHRvOmhlbGxvQHBhZGVsLmFmcmljYSdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIG10LTIgdGV4dC1zbGF0ZS04MDAgJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgZmlsbD0nbm9uZSdcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD0nMS41J1xuICAgICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTggaC04IHRleHQtc2xhdGUtODAwJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPScxLjUnXG4gICAgICAgICAgICAgICAgICAgIGQ9J00zIDhsNy44OSA1LjI2YTIgMiAwIDAwMi4yMiAwTDIxIDhNNSAxOWgxNGEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnYxMGEyIDIgMCAwMDIgMnonXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtbC00IHRleHQtbWQgdHJhY2tpbmctd2lkZSBmb250LXNlbWlib2xkIHVuZGVybGluZSBob3Zlcjp0ZXh0LWdyZWVuLTUwMCB0cmFuc2l0aW9uLWNvbG9ycyBlYXNlLWluLW91dCc+XG4gICAgICAgICAgICAgICAgICBoZWxsb0BwYWRlbC5hZnJpY2FcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YXNpZGUgaWQ9J2V2ZW50cycgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIG1kOnctMi81IGgtZml0ICAgc3BhY2UteS0yICAgJz5cbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgICBteS02IHRleHQtc2xhdGUtOTAwICBkYXJrOnRleHQtd2hpdGUgbWQ6bXktYXV0byBzcGFjZS15LXZ3LTQtbWluQHhsIGJnLXdoaXRlIGRhcms6Ymctc2xhdGUtOTAwICAgYmctb3BhY2l0eS01MCBiYWNrZHJvcC1ibHVyLWxnIHNoYWRvdy0yeGxcdCBwLTEyICAgIGgtZml0ICdcbiAgICAgICAgICAgIG1ldGhvZD0ncG9zdCdcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPXtzdGF0ZSA9PT0gJ3N1Y2Nlc3MnfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LWhlYWRpbmcgdGV4dC1sZyAgdXBwZXJjYXNlIG1iLTQnPlxuICAgICAgICAgICAgICAgIFNlbmQgYSBtZXNzYWdlXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJyBjbGFzc05hbWU9J2Jsb2NrICB0ZXh0LXhzICAgJz5cbiAgICAgICAgICAgICAgICAgIFlvdXIgTmFtZVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcbiAgICAgICAgICAgICAgICAgIGlkPSduYW1lJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZGFyazp0ZXh0LXNsYXRlLTkwMCB0ZXh0LXNtIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNSAwICBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCdcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdKb2UgQmxvZ2dzJ1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCcgY2xhc3NOYW1lPSdibG9jayB0ZXh0LXhzICAnPlxuICAgICAgICAgICAgICAgICAgWW91ciBlbWFpbFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgaWQ9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1zbSBkYXJrOnRleHQtc2xhdGUtOTAwICBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAnXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nbmFtZUBtYWlsLmNvbSdcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdtZXNzYWdlJyBjbGFzc05hbWU9J2Jsb2NrIHRleHQteHMgJz5cbiAgICAgICAgICAgICAgICAgIFlvdXIgbWVzc2FnZVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICByb3dzPXs1fVxuICAgICAgICAgICAgICAgICAgbmFtZT0nbWVzc2FnZSdcbiAgICAgICAgICAgICAgICAgIGlkPSdtZXNzYWdlJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1zbSBkYXJrOnRleHQtc2xhdGUtOTAwICBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAnXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBtZXNzYWdlIGhlcmUnXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPScgcHktNCBweC02IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwIHRvLXNsYXRlLTkwMCBkYXJrOnRvLXllbGxvdy0zMDAgdGV4dC13aGl0ZSBkYXJrOnRleHQtc2xhdGUtOTAwIGZvbnQtaGVhZGluZyB1cHBlcmNhc2UgaG92ZXI6YmctZ3JhZGllbnQtdG8tdGwgaG92ZXI6c2NhbGUtMTA1IHNoYWRvdy0yeGwgJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgIDxwPnthY3Rpb25EYXRhPy5lcnJvciA/IGFjdGlvbkRhdGEubWVzc2FnZSA6IDw+ICZuYnNwOyA8Lz59PC9wPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCAgbXktMTAgdGV4dC1zbGF0ZS05MDAgIGRhcms6dGV4dC13aGl0ZSBtZDpteS1hdXRvIHNwYWNlLXktdnctNC1taW5AeGwgYmctd2hpdGUgZGFyazpiZy1zbGF0ZS05MDAgZGFyazpiZy1vcGFjaXR5LTc1ICBiZy1vcGFjaXR5LTUwIGJhY2tkcm9wLWJsdXItbGcgc2hhZG93LTJ4bFx0IHAtNiAgICBoLWZpdCAnXG4gICAgICAgICAgICAvL2NsYXNzTmFtZT17IGlmIChzdGF0ZSA9PT0gXCJzdWNlc3NcIikgIHsnaGlkZGVuJ30gZWxzZXsnYmxvY2snfSB9XG4gICAgICAgICAgICBhcmlhLWhpZGRlbj17c3RhdGUgIT09ICdzdWNjZXNzJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBmb250LWhlYWRpbmcnPlxuICAgICAgICAgICAgICBcdUQ4M0RcdURFODAgVGhhbmsgeW91IGZvciB0aGUgbWVzc2FnZS5cbiAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgIDxwPldlIHdpbGwgcmV2aWV3IGl0IGFuZCBnZXQgYmFjayB0byB5b3UgYXMgc29vbiBhcyBwb3NzaWJsZS48L3A+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J3VuZGVybGluZSB0ZXh0LWdyZWVuLTMwMCcgdG89Jy4nPlxuICAgICAgICAgICAgICBTdGFydCBPdmVyXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxDVEFNYWlsXG4gICAgICAgIGhlYWRpbmc9J1NpZ24gdXAgdG8gdGhlIFBhZGVsIEFmcmljYSBuZXdzbGV0dGVyJ1xuICAgICAgICBib2R5PSdTdWJzY3JpYmUgYW5kIGVuc3VyZSB0byBiZSBhbW9uZyB0aGUgZmlyc3QgdG8gZmluZCBvdXQgYWJvdXQgYWxsIG91ciB1cGRhdGVzIGFuZCBzcGVjaWFsIG9mZmVycy4nXG4gICAgICAgIGJ1dHRvblRleHQ9J0NvbnRhY3QgVXMnXG4gICAgICAgIGJ1dHRvblRvPScjY29udGFjdCdcbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIEZvcm0sIHVzZUFjdGlvbkRhdGEsIExpbmssIE1ldGEgfSBmcm9tICdyZW1peCc7XG5cbmltcG9ydCBDVEEgZnJvbSAnfi9Db21wb25lbnRzL2N0YSc7XG5pbXBvcnQgSGVybyBmcm9tICd+L0NvbXBvbmVudHMvY2FtcGFpZ24taGVybyc7XG5pbXBvcnQgQmdJbWcgZnJvbSAnfi9pbWFnZXMvd2ViLWJnLmpwZyc7XG5pbXBvcnQgRmFjdHMgZnJvbSAnfi9Db21wb25lbnRzL2ZhY3RzJztcbmltcG9ydCBNZXRhSW1nIGZyb20gJ34vaW1hZ2VzL21ldGEtaW1hZ2UucG5nJztcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGxldCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgbGV0IGVtYWlsID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpO1xuICBsZXQgbmFtZSA9IGZvcm1EYXRhLmdldCgnbmFtZScpO1xuICBsZXQgY29tcGFueSA9IGZvcm1EYXRhLmdldCgnY29tcGFueScpO1xuICBsZXQgZXZlbnQgPSBmb3JtRGF0YS5nZXQoJ2V2ZW50Jyk7XG5cbiAgLy9wcm9jZXNzLmVudi5DT05WRVJUS0lUX0tFWSA9ICdsR2Y2a09uRk9PQy1ZT2lrWkRfWVB3JztcblxuICBjb25zdCBBUElfS0VZID0gJ2xHZjZrT25GT09DLVlPaWtaRF9ZUHcnO1xuICBjb25zdCBGT1JNX0lEID0gJzMwMjIwNTQnO1xuICBjb25zdCBBUEkgPSAnaHR0cHM6Ly9hcGkuY29udmVydGtpdC5jb20vdjMvJztcblxuICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJfS9mb3Jtcy8ke0ZPUk1fSUR9L3N1YnNjcmliZWAsIHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBlbWFpbDogZW1haWwsXG4gICAgICBmaXJzdF9uYW1lOiBuYW1lLFxuICAgICAgZmllbGRzOiB7IGNvbXBhbnk6IGNvbXBhbnksIGV2ZW50OiBldmVudCB9LFxuICAgICAgYXBpX2tleTogQVBJX0tFWSxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vY29uc29sZS5sb2coeyBlbWFpbCB9LCB7IG5hbWUgfSwgeyBjb21wYW55IH0pO1xuICByZXR1cm4gcmVzLmpzb24oKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnSm9pbiBQYWRlbCBBZnJpY2EgLSBQYWRlbCwgTW9yZSBUaGFuIFNwb3J0JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdMZWFybiBhYm91dCBob3cgeW91IGNhbiBqb2luIFBhZGVsIEFmcmljYSBpbiBicmluZ2luZyBwYWRlbCwgYXMgYSBzcG9ydCwgYSBsaWZlc3R5bGUsIGFuZCBhIGNvbW11bml0eSBidWlsZGVyLCB0byBBZnJpY2EsIHN0YXJ0aW5nIHdpdGggY2VudGVycyBpbiBHaGFuYSBhbmQgUndhbmRhLiBKb2luIFBhZGVsIEFmcmljYSBpbiBwcm92aW5nIHRoYXQgcGFkZWwgaXMgbW9yZSB0aGFuIHNwb3J0IC0gaXQgaXMgaW1wYWN0LiAnLFxuICAgIGtleXdvcmRzOlxuICAgICAgJ3BhZGVsLCBhZnJpY2EsIGludmVzdG1lbnQsIHNwb3J0LCBnaGFuYSwgcndhbmRhLCBrZW55YSwgdWdhbmRhLCBjb21tdW5pdHknLFxuICAgICdvZzppbWFnZSc6IGBodHRwczovL3d3dy5wYWRlbC5hZnJpY2Eke01ldGFJbWd9YCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEpvaW5VcygpIHtcbiAgbGV0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKCk7XG4gIGxldCBzdGF0ZTogJ2lkbGUnIHwgJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyA9IGFjdGlvbkRhdGE/LnN1YnNjcmlwdGlvblxuICAgID8gJ3N1Y2Nlc3MnXG4gICAgOiBhY3Rpb25EYXRhPy5lcnJvclxuICAgID8gJ2Vycm9yJ1xuICAgIDogJ2lkbGUnO1xuICBjb25zdCBkYXJrTW9kZSA9IGZhbHNlO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGAgdXJsKCcke0JnSW1nfScpYCxcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXNsYXRlLTkwMCAtbXQtMzIgZGFyazp0ZXh0LXdoaXRlICBtZDpiZy1maXhlZCBtZDpiZy1jZW50ZXIgYmctW2NlbnRlcl9yaWdodF8tMTdyZW1dICBtZDpiZy1jb3ZlciAgICdcbiAgICAgID5cbiAgICAgICAgPEhlcm9cbiAgICAgICAgICBoZWFkaW5nPSdXaGF0IGhhcHBlbnMgd2hlbiB0aGUgZmFzdGVzdCBzcG9ydCBtZWV0cyB0aGUgZmFzdGVzdCBjb250aW5lbnQ/XG4gICAgICAgICAgICAnXG4gICAgICAgICAgYm9keT0nSm9pbiBVcyB0byBGaW5kIG91dFxuICAgICAgICAgICAgJ1xuICAgICAgICAgIGJ1dHRvbjFUZXh0PSdMZWFybiBNb3JlJ1xuICAgICAgICAgIGJ1dHRvbjFUbz0nI2Fib3V0J1xuICAgICAgICAgIGJ1dHRvbjJUZXh0PSdXYW50IHRvIFBhcnRuZXI/J1xuICAgICAgICAgIGJ1dHRvbjJUbz0nI2Fib3V0J1xuICAgICAgICAgIGltZ1NyYz0nJ1xuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J215LWF1dG8gYmctd2hpdGUgbWQ6cC0zMiBweS0xMiBweC0zIGZsZXggbWQ6ZmxleC1yb3cgZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHRleHQtYmxhY2sgJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21kOnctMS8yIHB4LTggc3BhY2UteS00Jz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCAgZm9udC1oZWFkaW5nIGZvbnQtYmxhY2sgdHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZSAgJz5cbiAgICAgICAgICAgIEpvaW4gUGFkZWwgQWZyaWNhXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhY2UteS0yICc+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgU28sIHdoYXQgaGFwcGVucyB3aGVuIHRoZSBmYXN0ZXN0IGdyb3dpbmcgc3BvcnQgbWVldHMgdGhlIGZhc3Rlc3RcbiAgICAgICAgICAgICAgZ3Jvd2luZyBjb250aW5lbnQ/IEluY3JlZGlibGUsIGV4Y2l0aW5nLCBsaWZlIGNoYW5naW5nIHRoaW5ncyBvZlxuICAgICAgICAgICAgICBjb3Vyc2UuIEVzcGVjaWFsbHkgaWYgeW91IGFyZSBvbmUgb2YgdGhlIGNhbm55IHBlb3BsZSBzaGFycCBlbm91Z2hcbiAgICAgICAgICAgICAgdG8gZ2V0IGludm9sdmVkIGVhcmx5LnsnICd9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVGhpcyBpcyBhbiBvcHBvcnR1bml0eSB0byBiZSBhIHBhcnQgb2YgYSB0cmFuc2Zvcm1hdGl2ZSBqb3VybmV5LlxuICAgICAgICAgICAgICBUbyBiZSBhIHBhcnQgb2YgdGhlIHByb2Nlc3Mgb2YgYnJpbmdpbmcgYSBuZXcgc3BvcnQgYW5kIGxpZmVzdHlsZVxuICAgICAgICAgICAgICBhY3Rpdml0eSB0byBhbiBlbnRpcmUgY29udGluZW50LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZm9udC1oZWFkaW5nIHRleHQtMnhsJz5cbiAgICAgICAgICAgICAgU29tZSBiYWNrZ3JvdW5kIGluZm9ybWF0aW9uXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFBhZGVsIGhhcyBzZWVuIGluY3JlZGlibGUgZ3Jvd3RoIGluIEV1cm9wZSBvdmVyIHRoZSBsYXN0IGRlY2FkZS5cbiAgICAgICAgICAgICAgVGhlIGVhc2Ugb2YgcGxheSBoYXMgZW5hYmxlZCBwYWRlbCB0byBzY2FsZSBhbmQgbWF0dXJlIGZhc3RlciB0aGFuXG4gICAgICAgICAgICAgIGFueSBvdGhlciBzcG9ydC4gU28gbXVjaCBzbyB0aGF0IGl0IGlzIHBsYW5uZWQgdG8gYmUgYW4gZXhoaWJpdGlvblxuICAgICAgICAgICAgICBzcG9ydCBhdCB0aGUgT2x5bXBpY3MgMjAyNCBhbmQgcG90ZW50aWFsbHkgYW4gb2x5bXBpYyBzcG9ydCBpblxuICAgICAgICAgICAgICAyMDI4LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LWJvbGQnPlxuICAgICAgICAgICAgICBQYWRlbCBBZnJpY2EgaXMgYSBjb21wYW55IHRoYXQgaXMgcHJlcGFyZWQgYW5kIGNvbW1pdHRlZCB0b1xuICAgICAgICAgICAgICBicmluZ2luZyB0aGUgc3BvcnQgdG8gQWZyaWNhLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEJhY2tlZCBieSBOb3JkaWMtQWZyaWNhbiB2ZW50dXJlIGNhcGl0YWwgY29tcGFueXsnICd9XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ndW5kZXJsaW5lIGZvbnQtYm9sZCcgaHJlZj0naHR0cHM6Ly9iYW1id2Fncm91cC5jb20nPlxuICAgICAgICAgICAgICAgIEJhbWJ3YSBHcm91cFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICwgYW5kIGxlZCBieSB0aGVpciBmb3VuZGVyIGFuZCBDRU8sIE1pY2hhZWwgTWF0aGllc2VuLCBQYWRlbFxuICAgICAgICAgICAgICBBZnJpY2Egd2FzIGZvdW5kZWQgaW4gMjAyMSBpbiBwYXJ0bmVyc2hpcCB3aXRoIHR3byBvZlxuICAgICAgICAgICAgICBTY2FuZGluYXZpYSdzIGxhcmdlc3QgcGFkZWwgYnVzaW5lc3NlcyAtIFN3ZWRlbidzeycgJ31cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3VuZGVybGluZSBmb250LWJvbGQnXG4gICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cucGFkZWx0b3RhbC5zZS8nXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQYWRlbCBUb3RhbFxuICAgICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgICAgYW5kIERlbm1hcmsnc3snICd9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1bmRlcmxpbmUgZm9udC1ib2xkJ1xuICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vc3BvcnR5ZnJpZW5kcy5jb20vZW4vaG9tZSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNwb3J0eWZyaWVuZHNcbiAgICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICAgIChPd25lcnMgb2YgdGhleycgJ31cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3VuZGVybGluZSBmb250LWJvbGQnXG4gICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cucGFkZWxpcS5pby9kYSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFBhZGVsIGlRXG4gICAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgICBzb2Z0d2FyZSkuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgV2l0aCBwYXJ0bmVycyBvbiB0aGUgZ3JvdW5kIGluIEdoYW5hLCBLZW55YSwgUndhbmRhLCBMaWJlcmlhIGFuZFxuICAgICAgICAgICAgICBzZXZlcmFsIG90aGVyIEFmcmljYW4gbmF0aW9ucywgUGFkZWwgQWZyaWNhIGlzIHBlcmZlY3RseSBwbGFjZWQgdG9cbiAgICAgICAgICAgICAgbGVhZCB0aGUgY2hhcmdlIG9mIHBpb25lZXJpbmcgcGFkZWwgYWNyb3NzIEFmcmljYS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2ZvbnQtaGVhZGluZyB0ZXh0LTJ4bCc+V2hhdCBkbyB3ZSB3YW50IGZyb20geW91PzwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtYm9sZCBpdGFsaWMnPlxuICAgICAgICAgICAgICBXZSBhcmUgbG9va2luZyBmb3IgaW52ZXN0b3JzIGVhZ2VyIHRvIGJlIGEgcGFydCBvZiBhbiBleGNpdGluZyBhbmRcbiAgICAgICAgICAgICAgZ3JvdW5kYnJlYWtpbmcgaW52ZXN0bWVudC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBXZSBhcmUganVzdCBhYm91dCB0byBzZXQgb2ZmIG9uIGEgcm9hZHNob3cgd2hlcmUgd2Ugd2lsbCBwcmVzZW50XG4gICAgICAgICAgICAgIHRvIGF1ZGllbmNlcyBhY3Jvc3MgRGVubWFyayBhbmQgU3dlZGVuIChzZWUgZGF0ZXMgYW5kIGxvY2F0aW9ucyBvblxuICAgICAgICAgICAgICB0aGlzIHBhZ2UpLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nZm9udC1ib2xkIG10LTQgJz5cbiAgICAgICAgICAgICAgV2Ugd291bGQgbGlrZSB5b3UgdG8gam9pbiB1cyB0byBsZWFybjpcbiAgICAgICAgICAgIDwvaDM+eycgJ31cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9JyBsaXN0LWRpc2MgbGlzdC1pbnNpZGUnPlxuICAgICAgICAgICAgICA8bGk+V2h5IGFyZSB3ZSBjb21taXR0ZWQgdG8gYnJpbmdpbmcgcGFkZWwgdG8gQWZyaWNhLjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5XaG8gaXMgb24gb3VyIHRlYW0uPC9saT5cbiAgICAgICAgICAgICAgPGxpPldoYXQgbWFrZXMgdXMgc28gY2FwYWJsZSBvZiBzdWNjZWVkaW5nLiA8L2xpPlxuICAgICAgICAgICAgICA8bGk+SG93IHlvdSBjYW4gam9pbiB1cy48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhc2lkZSBpZD0nZXZlbnRzJyBjbGFzc05hbWU9J2JnLWdyYXktNTAgbWQ6dy0yLzUgaC1maXQgICBzcGFjZS15LTIgICAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTgnPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1oZWFkaW5nIHBiLTQnPkV2ZW50czwvaDI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdzcGFjZS15LTMgdGV4dC14cyAnPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2l0YWxpYyc+XG4gICAgICAgICAgICAgICAgUmVnaXN0ZXIgeW91ciBpbnRlcmVzdCBpbiB0aGUgZm9ybSBiZWxvdyBhbmQgd2Ugd2lsbCBrZWVwIHlvdVxuICAgICAgICAgICAgICAgIHVwZGF0ZWRcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdsaW5lLXRocm91Z2ggb3BhY2l0eS01MCc+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5PbmxpbmUgd2ViaW5hciA8L3N0cm9uZz4gLSAyM3JkIEF1Z3VzdCAtXG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndW5kZXJsaW5lIGJvbGQnXG4gICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3d3dy5ldmVudGJyaXRlLmNvbS94L3doZW4tdGhlLWZhc3Rlc3QtZ3Jvd2luZy1zcG9ydC1tZWV0cy10aGUtZmFzdGVzdC1ncm93aW5nLWNvbnRpbmVudC10aWNrZXRzLTQwMDU2Nzc0NzkxNydcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBSZWdpc3RlciBvbiBFdmVudGJyaXRlXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdsaW5lLXRocm91Z2ggb3BhY2l0eS01MCc+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5TdG9ja2hvbG0gUGFkZWwgRXhwbyAyMDIyIDwvc3Ryb25nPiAtIDE2dGggLSAxOHRoXG4gICAgICAgICAgICAgICAgU2VwdGVtYmVyIC17JyAnfVxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ndW5kZXJsaW5lIGJvbGQnIGhyZWY9J21haWx0bzpoYWthbkBiYW1id2EuY29tJz5cbiAgICAgICAgICAgICAgICAgIEVtYWlsIGZvciBkZXRhaWxzXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Hb3RoZW5idXJnIDwvc3Ryb25nPiAtIGRhdGUgYW5kIHRpbWUgVEJDXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPk1hbG1cdTAwRjY8L3N0cm9uZz4gLSBkYXRlIGFuZCB0aW1lIFRCQ1xuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5IZWxzaW5nYm9yZzwvc3Ryb25nPiAtIGRhdGUgYW5kIHRpbWUgVEJDXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkpcdTAwRjZua1x1MDBGNnBpbmc8L3N0cm9uZz4gLSBkYXRlIGFuZCB0aW1lIFRCQ1xuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Db3BlbmhhZ2VuPC9zdHJvbmc+IC0gZGF0ZSBhbmQgdGltZSBUQkNcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsICAgbXktNiB0ZXh0LXNsYXRlLTkwMCAgZGFyazp0ZXh0LXdoaXRlIG1kOm15LWF1dG8gc3BhY2UteS12dy00LW1pbkB4bCBiZy13aGl0ZSBkYXJrOmJnLXNsYXRlLTkwMCAgIGJnLW9wYWNpdHktNTAgYmFja2Ryb3AtYmx1ci1sZyBzaGFkb3ctMnhsXHQgcC0xMiAgICBoLWZpdCAnXG4gICAgICAgICAgICBtZXRob2Q9J3Bvc3QnXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj17c3RhdGUgPT09ICdzdWNjZXNzJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1oZWFkaW5nIHRleHQtbGcgIHVwcGVyY2FzZSBtYi00Jz5cbiAgICAgICAgICAgICAgICBJbnRlcmVzdGVkIGluIGhlYXJpbmcgbW9yZT9cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNic+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnIGNsYXNzTmFtZT0nYmxvY2sgIHRleHQteHMgICAnPlxuICAgICAgICAgICAgICAgICAgWW91ciBOYW1lXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICBuYW1lPSduYW1lJ1xuICAgICAgICAgICAgICAgICAgaWQ9J25hbWUnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBkYXJrOnRleHQtc2xhdGUtOTAwIHRleHQtc20gZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41IDAgIGRhcms6Zm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwJ1xuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0pvZSBCbG9nZ3MnXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNic+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJyBjbGFzc05hbWU9J2Jsb2NrIHRleHQteHMgICc+XG4gICAgICAgICAgICAgICAgICBZb3VyIGVtYWlsXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICBpZD0nZW1haWwnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LXNtIGRhcms6dGV4dC1zbGF0ZS05MDAgIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNSBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwICBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMCdcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSduYW1lQG1haWwuY29tJ1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNic+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2NvbXBhbnknIGNsYXNzTmFtZT0nYmxvY2sgdGV4dC14cyAnPlxuICAgICAgICAgICAgICAgICAgV2hlcmUgd291bGQgeW91IGxpa2UgdG8gbWVldCB1cz9cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgIGlkPSdldmVudCdcbiAgICAgICAgICAgICAgICAgIG5hbWU9J2V2ZW50J1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1zbSBkYXJrOnRleHQtc2xhdGUtOTAwICAgYmxvY2sgdy1mdWxsIHAtMi41ICAgIGRhcms6Zm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdzdG9ja2hvbG0nPlN0b2NraG9sbTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nZ290aGVuYnVyZyc+R290aGVuYnVyZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nbWFsbW8nPk1hbG1cdTAwRjY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2hlbHNpbmdib3JnJz5IZWxzaW5nYm9yZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nam9ua29waW5nJz5KXHUwMEY2bmtcdTAwRjZwaW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdjb3BlbmhhZ2VuJz5Db3BlbmhhZ2VuPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdjb3BlbmhhZ2VuJz5PbmxpbmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2NvcGVuaGFnZW4nPkRvbid0IHdhbnQgdG8gbWVldDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nIHB5LTQgcHgtNiBiZy1ncmFkaWVudC10by1iciBmcm9tLWdyZWVuLTMwMCB0by1zbGF0ZS05MDAgZGFyazp0by15ZWxsb3ctMzAwIHRleHQtd2hpdGUgZGFyazp0ZXh0LXNsYXRlLTkwMCBmb250LWhlYWRpbmcgdXBwZXJjYXNlIGhvdmVyOmJnLWdyYWRpZW50LXRvLXRsIGhvdmVyOnNjYWxlLTEwNSBzaGFkb3ctMnhsICdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICA8cD57YWN0aW9uRGF0YT8uZXJyb3IgPyBhY3Rpb25EYXRhLm1lc3NhZ2UgOiA8PiAmbmJzcDsgPC8+fTwvcD5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgIG15LTEwIHRleHQtc2xhdGUtOTAwICBkYXJrOnRleHQtd2hpdGUgbWQ6bXktYXV0byBzcGFjZS15LXZ3LTQtbWluQHhsIGJnLXdoaXRlIGRhcms6Ymctc2xhdGUtOTAwIGRhcms6Ymctb3BhY2l0eS03NSAgYmctb3BhY2l0eS01MCBiYWNrZHJvcC1ibHVyLWxnIHNoYWRvdy0yeGxcdCBwLTYgICAgaC1maXQgJ1xuICAgICAgICAgICAgLy9jbGFzc05hbWU9eyBpZiAoc3RhdGUgPT09IFwic3VjZXNzXCIpICB7J2hpZGRlbid9IGVsc2V7J2Jsb2NrJ30gfVxuICAgICAgICAgICAgYXJpYS1oaWRkZW49e3N0YXRlICE9PSAnc3VjY2Vzcyd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1oZWFkaW5nJz5cdUQ4M0RcdURFODAgWW91J3JlIG9uIHRoZSBsaXN0ITwvaDI+XG5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBUaGFua3MgZm9yIGV4cHJlc3NpbmcgaW50ZXJlc3QsIHlvdSB3aWxsIGJlIHNlbnQgYW4gZW1haWwgd2l0aFxuICAgICAgICAgICAgICBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSd1bmRlcmxpbmUgdGV4dC1ncmVlbi0zMDAnIHRvPScuJz5cbiAgICAgICAgICAgICAgU3RhcnQgT3ZlclxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FzaWRlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPENUQVxuICAgICAgICBoZWFkaW5nPSdBcmUgeW91IGludGVyZXN0ZWQgaW4gcGFydG5lcmluZyB3aXRoIHRoZSBOdW1iZXIgMSBBZnJpY2FuIFBhZGVsIGNvbXBhbnk/J1xuICAgICAgICBib2R5PSdBdCB0aGlzIHZlcnkgZWFybHkgc3RhZ2UgaW4gb3VyIGRldmVsb3BtZW50IHdlIGFyZSBpbnRlcmVzdGVkIGluIGZpbmRpbmcgcGFydG5lcnMgZnJvbSBhbGwgc2VjdG9ycyB0byBpbnZlc3RpZ2F0ZSBwYXJ0bmVyc2hpcCBwb3NzaWJpbGl0aWVzLiBJZiB0aGlzIHNvdW5kcyBsaWtlIHlvdSAtIGdldCBpbiB0b3VjaC4nXG4gICAgICAgIGJ1dHRvblRleHQ9J0NvbnRhY3QgVXMnXG4gICAgICAgIGJ1dHRvblRvPScjY29udGFjdCdcbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuXG5pbnRlcmZhY2UgQ1RBQ29udGVudCB7XG4gIGhlYWRpbmc6IHN0cmluZztcbiAgYm9keTogc3RyaW5nO1xuICBidXR0b25UZXh0OiBzdHJpbmc7XG4gIGJ1dHRvblRvOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENUQShwcm9wczogQ1RBQ29udGVudCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBpZD0ncGFydG5lcnMnXG4gICAgICBjbGFzc05hbWU9J1tjdGFdIG15LTE2IHAtMjAgbWQ6bXgtMjAgYmctc2xhdGUtOTAwICBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGFsaWduLW1pZGRsZSByb3VuZGVkLW1kIHNoYWRvdy0yeGwgdGV4dC13aGl0ZSdcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nICBtLWF1dG8gIHRleHQtY2VudGVyICBzcGFjZS15LXZ3LTYtbWluQHhsIG1kOnctMy80ICAnPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTR4bCBmb250LWhlYWRpbmcgdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgIHZpYS1ncmVlbi01MDAgdG8teWVsbG93LTQwMCAnPlxuICAgICAgICAgIHtwcm9wcy5oZWFkaW5nfVxuICAgICAgICA8L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2Jhc2UnPntwcm9wcy5ib2R5fTwvcD5cblxuICAgICAgICA8QnV0dG9uIHRpdGxlPXtwcm9wcy5idXR0b25UZXh0fSB0bz17cHJvcHMuYnV0dG9uVG99IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iLCAiaW1wb3J0IGhlcm9JbWcgZnJvbSAnLi4vaW1hZ2VzL3BhZGVsLWhlcm8uanBnJztcbmltcG9ydCBwYWRlbEltZyBmcm9tICcuLi9pbWFnZXMvcGFydG5lcnMvcGFkZWx0b3RhbC1sb2dvLnBuZyc7XG5pbXBvcnQgcGFkZWxJcSBmcm9tICcuLi9pbWFnZXMvcGFydG5lcnMvcGFkZWwtaXEucG5nJztcblxuaW50ZXJmYWNlIEhlcm9Db250ZW50IHtcbiAgaGVhZGluZzogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIGJ1dHRvbjFUZXh0OiBzdHJpbmc7XG4gIGJ1dHRvbjFUbzogc3RyaW5nO1xuICBidXR0b24yVGV4dDogc3RyaW5nO1xuICBidXR0b24yVG86IHN0cmluZztcbiAgaW1nU3JjOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm8ocHJvcHM6IEhlcm9Db250ZW50KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT0nW2hlcm9dIGNvbnRhaW5lciBteC1hdXRvIGJnLW5vbmUgbWQ6aC1zY3JlZW4gbWQ6cHQtMzIgcHktNDQgbWQ6cGItMTIgIG1kOi1tdC0xNiBweC04IHNtOnB4LTEyIGZsZXggIGZsZXgtY29sIG1kOmZsZXgtcm93IGFsaWduLW1pZGRsZSBtZDpqdXN0aWZ5LWJldHdlZW4gIGJnLWNvdmVyICBtZDpzcGFjZS14LTEyXHQgJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBtZDp3LTMvNSBteS1hdXRvIHNwYWNlLXktdnctMi1taW5AeGwgbWQ6cHktMTYgICAgJz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtaGVhZGluZyB1cHBlcmNhc2UnPldoYXQgaGFwcGVucyB3aGVuPC9wPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtNHhsIG1kOnRleHQtNnhsIHBiLTQgZm9udC1oZWFkaW5nIHVwcGVyY2FzZSAnPlxuICAgICAgICAgICAgVGhleycgJ31cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nIG1kOnRleHQtdHJhbnNwYXJlbnQgbWQ6YmctY2xpcC10ZXh0IG1kOmJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwICB2aWEtZ3JlZW4tNTAwIHRvLXNsYXRlLTkwMCBkYXJrOnRvLXllbGxvdy0zMDAnPlxuICAgICAgICAgICAgICB3b3JsZCdzIGZhc3Rlc3QgZ3Jvd2luZyBzcG9ydFxuICAgICAgICAgICAgPC9zcGFuPnsnICd9XG4gICAgICAgICAgICBtZWV0cyB0aGV7JyAnfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtZDp0ZXh0LXRyYW5zcGFyZW50IG1kOmJnLWNsaXAtdGV4dCBtZDpiZy1ncmFkaWVudC10by1iciBmcm9tLXllbGxvdy0zMDAgIHZpYS15ZWxsb3ctNTAwIHRvLXNsYXRlLTkwMCBkYXJrOnRvLWdyZWVuLTMwMCc+XG4gICAgICAgICAgICAgIHdvcmxkJ3MgZmFzdGVzdCBncm93aW5nIGNvbnRpbmVudFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgP1xuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj0nI2V2ZW50cydcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbXktNiBcbiAgICAgICAgICAgICBpbmxpbmUtYmxvY2sgdGV4dC1sZyBweS00IHB4LTYgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgdG8tc2xhdGUtOTAwIGRhcms6dG8teWVsbG93LTMwMCB0ZXh0LXdoaXRlIGRhcms6dGV4dC1zbGF0ZS05MDAgZm9udC1oZWFkaW5nIHVwcGVyY2FzZSBob3ZlcjpiZy1ncmFkaWVudC10by10bCBob3ZlcjpzY2FsZS0xMDUgc2hhZG93LTJ4bCAnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgSm9pbiB1cyB0byBmaW5kIG91dFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHtcbiAgRm9ybSxcbiAgTGluayxcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIHVzZUxvYWRlckRhdGEsXG4gIEFjdGlvbkZ1bmN0aW9uLFxufSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBNZXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgZ2V0RmlsbXMsIEZpbG0gfSBmcm9tICd+L2FwaS9maWxtcyc7XG5pbXBvcnQgQ1RBIGZyb20gJ34vQ29tcG9uZW50cy9jdGEnO1xuaW1wb3J0IEhlcm8gZnJvbSAnfi9Db21wb25lbnRzL2hlcm8nO1xuaW1wb3J0IEhlcm9BbHQgZnJvbSAnfi9Db21wb25lbnRzL2hlcm8tYWx0JztcbmltcG9ydCBIZXJvV2hpdGUgZnJvbSAnfi9Db21wb25lbnRzL2hlcm8td2hpdGUnO1xuXG5pbXBvcnQgSW5mbyBmcm9tICd+L0NvbXBvbmVudHMvaW5mbyc7XG5pbXBvcnQgaW5mb0ltZyBmcm9tICcuLi9pbWFnZXMvYWJvdXQtcGEuanBnJztcbmltcG9ydCB7IGdldENsaWVudCwgdXJsRm9yIH0gZnJvbSAnfi9saWIvc2FuaXR5L2dldENsaWVudCc7XG5pbXBvcnQge1xuICBQb3J0YWJsZVRleHQsXG4gIFBvcnRhYmxlVGV4dFR5cGVDb21wb25lbnQsXG4gIFBvcnRhYmxlVGV4dENvbXBvbmVudHNQcm92aWRlcixcbn0gZnJvbSAnQHBvcnRhYmxldGV4dC9yZWFjdCc7XG5cbi8vIGxvYWRlcigpIG11c3QgYmUgYXN5bmMhXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKCkge1xuICBjb25zdCBuZXdzUG9zdHMgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaChcbiAgICBgKltfdHlwZSA9PSBcIm5ld3NcIl17IF9pZCwgdGl0bGUsIHNsdWcsIFwiZmVhdHVyZUltYWdlXCI6IGZlYXR1cmUuYXNzZXQtPnVybFxuICAgfWBcbiAgKTtcbiAgY29uc3QgYWJvdXRUZXh0ID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJzZWN0aW9uc1wiICYmIHNsdWcuY3VycmVudCA9PSBcImFib3V0LXBhZGVsLWFmcmljYVwiIF17IF9pZCwgdGl0bGUsIG92ZXJ2aWV3LCBcImZlYXR1cmVJbWFnZVwiOiBmZWF0dXJlLmFzc2V0LT51cmxcbiAgIH1gXG4gICk7XG4gIHJldHVybiB7IG5ld3NQb3N0cywgYWJvdXRUZXh0IH07XG59XG5cbi8vIFNlcnZlciBTaWRlXG4vL2V4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4vL2NvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuLy9jb25zdCB0aXRsZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCd0aXRsZScpO1xuLy9yZXR1cm4gZ2V0RmlsbXModGl0bGUpO1xuLy99O1xuXG5leHBvcnQgY29uc3QgbWV0YSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1BhZGVsIEFmcmljYSB8IFRoZSBOdW1iZXIgMSBBZnJpY2FuIFBhZGVsIENvbXBhbnknLFxuICAgIGRlc2NyaXB0aW9uOiAnUGFkZWwgQWZyaWNhIGhvbWUgcGFnZScsXG4gICAga2V5d29yZHM6ICdwYWRlbCwgYWZyaWNhLCBzcG9ydCcsXG4gIH07XG59O1xuXG4vLyBDbGllbnQgU2lkZVxuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgbGV0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBsZXQgZW1haWwgPSBmb3JtRGF0YS5nZXQoJ2VtYWlsJyk7XG4gIGxldCBuYW1lID0gZm9ybURhdGEuZ2V0KCduYW1lJyk7XG4gIGxldCBjb21wYW55ID0gZm9ybURhdGEuZ2V0KCdjb21wYW55Jyk7XG4gIC8vcHJvY2Vzcy5lbnYuQ09OVkVSVEtJVF9LRVkgPSAnbEdmNmtPbkZPT0MtWU9pa1pEX1lQdyc7XG5cbiAgY29uc3QgQVBJX0tFWSA9ICdsR2Y2a09uRk9PQy1ZT2lrWkRfWVB3JztcbiAgY29uc3QgRk9STV9JRCA9ICczMDIyMDU0JztcbiAgY29uc3QgQVBJID0gJ2h0dHBzOi8vYXBpLmNvbnZlcnRraXQuY29tL3YzLyc7XG5cbiAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSX0vZm9ybXMvJHtGT1JNX0lEfS9zdWJzY3JpYmVgLCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgZmlyc3RfbmFtZTogbmFtZSxcbiAgICAgIGZpZWxkczogeyBjb21wYW55OiBjb21wYW55IH0sXG4gICAgICBhcGlfa2V5OiBBUElfS0VZLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgfSxcbiAgfSk7XG5cbiAgLy9jb25zb2xlLmxvZyh7IGVtYWlsIH0sIHsgbmFtZSB9LCB7IGNvbXBhbnkgfSk7XG4gIHJldHVybiByZXMuanNvbigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgbmV3c1Bvc3RzLCBhYm91dFRleHQgfSA9IHVzZUxvYWRlckRhdGEoKTtcblxuICBjb25zdCBteVBvcnRhYmxlVGV4dENvbXBvbmVudHMgPSB7XG4gICAgdHlwZXM6IHtcbiAgICAgIGltYWdlOiAodmFsdWU6IGFueSkgPT4gKFxuICAgICAgICA8aW1nIHNyYz17dmFsdWUuYXNzZXR9IGtleT17dmFsdWUuX2lkfSBjbGFzc05hbWU9e3ZhbHVlLmFzc2V0fT48L2ltZz5cbiAgICAgICksXG4gICAgfSxcbiAgfTtcbiAgLy9jb25zdCBmaWxtcyA9IHVzZUxvYWRlckRhdGE8RmlsbVtdPigpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVyb1xuICAgICAgICBoZWFkaW5nPSdQYWRlbCBoYXMgdGFrZW4gRXVyb3BlIGJ5IHN0b3JtLiBOb3cgaXRcdTIwMTlzIHRpbWUgdG8gYnJpbmcgaXQgdG8gQWZyaWNhLlxuICAgICAgICAnXG4gICAgICAgIGJvZHk9J1VzaW5nIG91ciBleHRlbnNpdmUga25vd2xlZGdlIG9mIEFmcmljYSBhbmQgYnVzaW5lc3MgZGV2ZWxvcG1lbnQsIHdlIGFpbSB0byBwcm92aWRlIFBhZGVsLCBhcyBhIHNwb3J0IGFuZCBhIGNvbW11bml0eSBlbmFibGVyLCB0byBHaGFuYSwgS2VueWEsIE5pZ2VyaWEgYW5kIG90aGVyIFN1YiBTYWhhcmFuIGNvdW50cmllcy5cbiAgICAgICAgJ1xuICAgICAgICBidXR0b24xVGV4dD0nTGVhcm4gTW9yZSdcbiAgICAgICAgYnV0dG9uMVRvPScjYWJvdXQnXG4gICAgICAgIGJ1dHRvbjJUZXh0PSdXYW50IHRvIFBhcnRuZXI/J1xuICAgICAgICBidXR0b24yVG89JyNhYm91dCdcbiAgICAgICAgaW1nU3JjPScnXG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBGb3JtLCBMaW5rLCB1c2VBY3Rpb25EYXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IGhlcm9JbWcgZnJvbSAnLi4vaW1hZ2VzL3BhZGVsLWhlcm8uanBnJztcbmltcG9ydCBwYWRlbEltZyBmcm9tICcuLi9pbWFnZXMvcGFydG5lcnMvcGFkZWx0b3RhbC1sb2dvLnBuZyc7XG5pbXBvcnQgcGFkZWxJcSBmcm9tICcuLi9pbWFnZXMvcGFydG5lcnMvcGFkZWwtaXEucG5nJztcblxuaW50ZXJmYWNlIEhlcm9Db250ZW50IHtcbiAgaGVhZGluZzogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIGJ1dHRvbjFUZXh0OiBzdHJpbmc7XG4gIGJ1dHRvbjFUbzogc3RyaW5nO1xuICBidXR0b24yVGV4dDogc3RyaW5nO1xuICBidXR0b24yVG86IHN0cmluZztcbiAgaW1nU3JjOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm8ocHJvcHM6IEhlcm9Db250ZW50KSB7XG4gIGxldCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpO1xuICBsZXQgc3RhdGU6ICdpZGxlJyB8ICdzdWNjZXNzJyB8ICdlcnJvcicgPSBhY3Rpb25EYXRhPy5zdWJzY3JpcHRpb25cbiAgICA/ICdzdWNjZXNzJ1xuICAgIDogYWN0aW9uRGF0YT8uZXJyb3JcbiAgICA/ICdlcnJvcidcbiAgICA6ICdpZGxlJztcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9J1toZXJvXSBjb250YWluZXIgbXgtYXV0byBiZy1ub25lIHB0LTE2IG1kOnB0LTMyIG1kOnBiLTEyIG1iLTEyIG1kOi1tdC0xNiBweC04IHNtOnB4LTEyIGZsZXggIGZsZXgtY29sIG1kOmZsZXgtcm93IGFsaWduLW1pZGRsZSBtZDpqdXN0aWZ5LWJldHdlZW4gIGJnLWNvdmVyICBtZDpzcGFjZS14LTEyXHQgJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBtZDp3LTIvNSBtZDpteS1hdXRvIHNwYWNlLXktdnctMi1taW5AeGwgbWQ6cHktMTYgICc+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC00eGwgbWQ6dGV4dC02eGwgZm9udC1oZWFkaW5nIHVwcGVyY2FzZSAnPlxuICAgICAgICAgICAgUGFkZWwgaGFzIHRha2VuIEV1cm9wZSBieSBzdG9ybS5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lIG1kOmJsb2NrIG1kOnRleHQtdHJhbnNwYXJlbnQgbWQ6YmctY2xpcC10ZXh0IG1kOmJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwICB2aWEtZ3JlZW4tNTAwIHRvLXNsYXRlLTkwMCBkYXJrOnRvLXllbGxvdy0zMDAnPlxuICAgICAgICAgICAgICBOb3cgaXQncyB0aW1lIHRvIGJyaW5nIGl0IHRvIEFmcmljYVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtYmFzZSAgJz5cbiAgICAgICAgICAgIFx1RDgzRFx1REM0QiBJbnRlcmVzdGVkIGluIGEgcGFydG5lcnNoaXA/XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J3VuZGVybGluZScgaHJlZj0nbWFpbHRvOmhlbGxvQHBhZGVsLmFmcmljYSc+XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIEVtYWlsIHVzXG4gICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgbWQ6dy0yLzUgbXktMTAgdGV4dC1zbGF0ZS05MDAgIGRhcms6dGV4dC13aGl0ZSBtZDpteS1hdXRvIHNwYWNlLXktdnctNC1taW5AeGwgYmctd2hpdGUgZGFyazpiZy1zbGF0ZS05MDAgZGFyazpiZy1vcGFjaXR5LTI1ICBiZy1vcGFjaXR5LTUwIGJhY2tkcm9wLWJsdXItbGcgc2hhZG93LTJ4bFx0IHAtNiAgICBoLWZpdCAnXG4gICAgICAgICAgbWV0aG9kPSdwb3N0J1xuICAgICAgICAgIGFyaWEtaGlkZGVuPXtzdGF0ZSA9PT0gJ3N1Y2Nlc3MnfVxuICAgICAgICA+XG4gICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LWhlYWRpbmcgdGV4dC1sZyAgdXBwZXJjYXNlJz5cbiAgICAgICAgICAgICAgSm9pbiB0aGUgTWFpbGluZyBMaXN0XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNic+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJyBjbGFzc05hbWU9J2Jsb2NrICB0ZXh0LXhzICAgJz5cbiAgICAgICAgICAgICAgICBZb3VyIE5hbWVcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICBuYW1lPSduYW1lJ1xuICAgICAgICAgICAgICAgIGlkPSduYW1lJ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGRhcms6dGV4dC1zbGF0ZS05MDAgdGV4dC1zbSBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgMCAgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwJ1xuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdKb2UgQmxvZ2dzJ1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi02Jz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJyBjbGFzc05hbWU9J2Jsb2NrIHRleHQteHMgICc+XG4gICAgICAgICAgICAgICAgWW91ciBlbWFpbFxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcbiAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICBpZD0nZW1haWwnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1zbSBkYXJrOnRleHQtc2xhdGUtOTAwICBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAnXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J25hbWVAbWFpbC5jb20nXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nY29tcGFueScgY2xhc3NOYW1lPSdibG9jayB0ZXh0LXhzICc+XG4gICAgICAgICAgICAgICAgWW91ciBDb21wYW55XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgaWQ9J2NvbXBhbnknXG4gICAgICAgICAgICAgICAgbmFtZT0nY29tcGFueSdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LXNtIGRhcms6dGV4dC1zbGF0ZS05MDAgICBibG9jayB3LWZ1bGwgcC0yLjUgICAgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwJ1xuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdBY21lIEluYydcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICBjbGFzc05hbWU9JyBweS00IHB4LTYgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgdG8tc2xhdGUtOTAwIGRhcms6dG8teWVsbG93LTMwMCB0ZXh0LXdoaXRlIGRhcms6dGV4dC1zbGF0ZS05MDAgZm9udC1oZWFkaW5nIHVwcGVyY2FzZSBob3ZlcjpiZy1ncmFkaWVudC10by10bCBob3ZlcjpzY2FsZS0xMDUgc2hhZG93LTJ4bCAnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICA8cD57YWN0aW9uRGF0YT8uZXJyb3IgPyBhY3Rpb25EYXRhLm1lc3NhZ2UgOiA8PiAmbmJzcDsgPC8+fTwvcD5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgbWQ6dy0yLzUgbXktMTAgdGV4dC1zbGF0ZS05MDAgIGRhcms6dGV4dC13aGl0ZSBtZDpteS1hdXRvIHNwYWNlLXktdnctNC1taW5AeGwgYmctd2hpdGUgZGFyazpiZy1zbGF0ZS05MDAgZGFyazpiZy1vcGFjaXR5LTI1ICBiZy1vcGFjaXR5LTUwIGJhY2tkcm9wLWJsdXItbGcgc2hhZG93LTJ4bFx0IHAtNiAgICBoLWZpdCAnXG4gICAgICAgICAgLy9jbGFzc05hbWU9eyBpZiAoc3RhdGUgPT09IFwic3VjZXNzXCIpICB7J2hpZGRlbid9IGVsc2V7J2Jsb2NrJ30gfVxuICAgICAgICAgIGFyaWEtaGlkZGVuPXtzdGF0ZSAhPT0gJ3N1Y2Nlc3MnfVxuICAgICAgICA+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1oZWFkaW5nJz5cdUQ4M0RcdURFODAgWW91J3JlIFN1YnNjcmliZWQhPC9oMj5cblxuICAgICAgICAgIDxwPlRoYW5rIHlvdSBmb3Igc2lnbmluZyB1cCB0byBvdXIgbWFpbGluZyBsaXN0PC9wPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0ndW5kZXJsaW5lIHRleHQtZ3JlZW4tMzAwJyB0bz0nLic+XG4gICAgICAgICAgICBTdGFydCBPdmVyXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPScgbXgtYXV0byB3LTIvMyByb3VuZGVkLWxnIG1kOnB5LTEyIHB5LTEyIGJnLXNsYXRlLTkwMCAgbWItMTIgbWQ6LW10LTE2IHB4LTggc206cHgtMTIgZmxleCAgZmxleC1jb2wgYWxpZ24tbWlkZGxlIG1kOmp1c3RpZnktYmV0d2VlbiAgbWQ6c3BhY2UteS02ICBcdCc+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J20tYXV0byB1cHBlcmNhc2UgdGV4dC1jZW50ZXIgZm9udC1oZWFkaW5nIHRleHQteGwgZGFyazp0ZXh0LXdoaXRlIHRleHQtd2hpdGUgb3BhY2l0eS03MCc+XG4gICAgICAgICAgT3VyIFN0cmF0ZWdpYyBQYXJ0bmVyc1xuICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXIgbS1hdXRvIHNwYWNlLXgtOCAnPlxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vcGFkZWx0b3RhbC5zZSc+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy01NiBoLWF1dG8gb3BhY2l0eS03NSB0cmFuc2l0aW9uIGVhc2UtaW4tb3UgIGhvdmVyOm9wYWNpdHktMTAwIGhvdmVyOnNjYWxlLTEwNSBjdXJzb3ItcG9pbnRlciAnXG4gICAgICAgICAgICAgIHNyYz17cGFkZWxJbWd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL3BhZGVsaXEuaW8vJz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTU2IGgtYXV0byBvcGFjaXR5LTc1ICAgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBob3ZlcjpvcGFjaXR5LTEwMCBob3ZlcjpzY2FsZS0xMDUgY3Vyc29yLXBvaW50ZXIgJ1xuICAgICAgICAgICAgICBzcmM9e3BhZGVsSXF9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IENUQSBmcm9tICd+L0NvbXBvbmVudHMvY3RhJztcbmltcG9ydCBFdmVudEltZyBmcm9tICd+L2ltYWdlcy9wYWRlbF9hZnJpY2Ffcm9hZHNob3cucG5nJztcbmltcG9ydCB7IE1ldGEsIExpbmsgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgTWV0YUltZyBmcm9tICd+L2ltYWdlcy9tZXRhLWltYWdlLnBuZyc7XG5cbmV4cG9ydCBjb25zdCBtZXRhID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnQWJvdXQgUGFkZWwgQWZyaWNhIC0gUGFkZWwsIE1vcmUgVGhhbiBTcG9ydCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnUGFkZWwgQWZyaWNhIGlzIGJyaW5naW5nIHBhZGVsLCBhcyBhIHNwb3J0LCBhIGxpZmVzdHlsZSwgYW5kIGEgY29tbXVuaXR5IGJ1aWxkZXIsIHRvIEFmcmljYSwgc3RhcnRpbmcgd2l0aCBjZW50ZXJzIGluIEdoYW5hIGFuZCBSd2FuZGEuIFdlIGJlbGlldmUgdGhhdCBBZnJpY2EgaXMgdGhlIG5leHQgZ3Jvd3RoIGNlbnRyZSBvZiB0aGUgd29ybGQgYW5kIHRoYXQgaXQgcHJvdmlkZXMgaW1tZW5zZSBvcHBvcnR1bml0aWVzIGZvciB0aGUgZmV3IHdobyB0YWtlIHRoZSBsZWFwIGFuZCBleHBhbmQgdG8gQWZyaWNhLiAgJyxcbiAgICBrZXl3b3JkczogJ3BhZGVsLCBhZnJpY2EsIHNwb3J0LCBnaGFuYSwgcndhbmRhLCBrZW55YSwgdWdhbmRhLCBjb21tdW5pdHknLFxuICAgICdvZzppbWFnZSc6IGBodHRwczovL3d3dy5wYWRlbC5hZnJpY2Eke01ldGFJbWd9YCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3ctZnVsbCBtZDpweC0zMiBtZDpweS0yNCBweS0xMiBweC0zIHNwYWNlLXktMTIgIGZsZXggbWQ6ZmxleC1yb3cgZmxleC1jb2wgYmctd2hpdGUganVzdGlmeS1iZXR3ZWVuIHRleHQtYmxhY2sgJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21kOnctMy81IG1kOnB4LTEyIHB4LTQgc3BhY2UteS00Jz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCAgZm9udC1oZWFkaW5nIGZvbnQtYmxhY2sgdHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZSAgJz5cbiAgICAgICAgICAgIEFib3V0IFBhZGVsIEFmcmljYVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZm9udC1oZWFkaW5nIHRleHQtMnhsJz5XaG8gd2UgYXJlPC9oMj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFdlIGJlbGlldmUgdGhhdCBBZnJpY2EgaXMgdGhlIG5leHQgZ3Jvd3RoIGNlbnRyZSBvZiB0aGUgd29ybGQgYW5kXG4gICAgICAgICAgICB0aGF0IGl0IHByb3ZpZGVzIGltbWVuc2Ugb3Bwb3J0dW5pdGllcyBmb3IgdGhlIGZldyB3aG8gdGFrZSB0aGUgbGVhcFxuICAgICAgICAgICAgYW5kIGV4cGFuZCB0byBBZnJpY2EuIE9uIHRoZSBvdGhlciBoYW5kLCB3ZSBhcmUgYWxzbyB2ZXJ5IGF3YXJlIHRoYXRcbiAgICAgICAgICAgIGluIG9yZGVyIHRvIHN1Y2NlZWQgaW4gQWZyaWNhLCBpdCByZXF1aXJlcyBpbi1kZXB0aCB1bmRlcnN0YW5kaW5nIG9mXG4gICAgICAgICAgICB0aGUgcHJvZHVjdCB5b3Ugd291bGQgbGlrZSB0byBvZmZlciwgYW5kIGEgdGhvcm91Z2ggdW5kZXJzdGFuZGluZyBvZlxuICAgICAgICAgICAgdGhlIG1hcmtldC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXZSBhcmUgY29uZmlkZW50IHRoYXQgb3VyIHRlYW0gaGFzIHRoZSByZXF1aXJlZCBwcmVyZXF1aXNpdGVzIHRvXG4gICAgICAgICAgICBzdWNjZWVkLiBXZSBhcmUgYSBjb25nbG9tZXJhdGUgb2YgcGFkZWwgZW50aHVzaWFzdHMgYW5kIGJ1c2luZXNzXG4gICAgICAgICAgICBwcm9maWxlcy4gQ29tYmluZWQgd2UgaGF2ZSBzdGFydGVkIG92ZXIgMTAwIGNvbXBhbmllcywgc29sZCAyMDAwXG4gICAgICAgICAgICBjb3VydHMsIHdvcmtlZCAyMCB5ZWFycyB3aXRoIFBhZGVsIGFuZCAzMCB5ZWFycyBvZiBidXNpbmVzc1xuICAgICAgICAgICAgZXhwZXJpZW5jZSBmcm9tIFN1YiBTYWhhcmFuIEFmcmljYS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZm9udC1oZWFkaW5nIHRleHQtMnhsJz5XaHkgd2UgZG8gdGhpczwvaDI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBPdXIgcHVycG9zZSBpbiBldmVyeXRoaW5nIHdlIGRvLCBpcyB0byB0cnkgYW5kIGltcHJvdmUgcXVhbGl0eSBvZlxuICAgICAgICAgICAgbGlmZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXZSBiZWxpZXZlIG1hbnkgZGlmZmVyZW50IG9mZmVyaW5ncyBjYW4gcHJvdmlkZSB0aGUgcGxhdGZvcm0gdG9cbiAgICAgICAgICAgIGltcHJvdmUgcXVhbGl0eSBvZiBsaWZlLCBhbmQgdGhhdCBpdCBtZXJlbHkgY29tZXMgZG93biB0byBmb2N1cyxcbiAgICAgICAgICAgIGNyZWF0aXZpdHkgYW5kIGV4ZWN1dGlvbiBhcyB0byBob3cgbXVjaCBpdCB3aWxsIGJlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIE1hbnkgcGVvcGxlIG92ZXJsb29rIHRoZSBBZnJpY2FuIGNvbnRpbmVudCB3aGVuIHRoZXkgYXJlIGxvb2tpbmcgZm9yXG4gICAgICAgICAgICBuZXcgbWFya2V0cyB0byBleHBhbmQgdG8uIFRoaXMgaXMgYSBzaGFtZSwgYXMgdGhlIGltcGFjdCBvbmUgY2FuIGRvXG4gICAgICAgICAgICBoZXJlLCBzdXBlcnNlZGVzIGFsbW9zdCBhbnl3aGVyZSBlbHNlIGluIHRoZSB3b3JsZC4gRnVydGhlcm1vcmUsIHRoZVxuICAgICAgICAgICAgY29udGluZW50IGlzIG9mdGVuIHJlZHVjZWQgdG8gYW4gdW5mYWlyIGdlbmVyYWxpc2F0aW9uLiBUaGVcbiAgICAgICAgICAgIGNvbnRpbmVudCBpcyBhcyBkaXZlcnNlIGFzIGFueSBvdGhlci5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGVyZSBhcmUgdGhvdWdoIHNvbWUgY29tbW9uIGRlbm9taW5hdG9ycyBhbW9uZyB0aGUgQWZyaWNhbnMgd2UgaGF2ZVxuICAgICAgICAgICAgbWV0OiBUaGV5IGhhdmUgYSBoaWdoIGZvY3VzIG9uIGZhbWlseSBhbmQgZnJpZW5kcywgdGhleSBsb3ZlIHRvIGhhdmVcbiAgICAgICAgICAgIGZ1biBhbmQgYXBwcmVjaWF0ZSBpZiBzb21lIG1vdmVtZW50IGlzIGludm9sdmVkLiBCZXNpZGVzIHRoaXMsIHRoZVxuICAgICAgICAgICAgY29udGluZW50IGlzIGdyb3dpbmcgcmFwaWRseSwgYm90aCBpbiB0ZXJtcyBvZiBwb3B1bGF0aW9uIGFuZFxuICAgICAgICAgICAgcHVyY2hhc2luZyBwb3dlci5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBGb3IgdGhvc2UgcmVhc29ucyB3ZSBmZWVsIHBhZGVsIGFuZCBTdWIgU2FoYXJhbiBBZnJpY2EgaXMgYSBwZXJmZWN0XG4gICAgICAgICAgICBtYXRjaCBhbmQgd2Ugd2lsbCB3b3JrIHRpcmVsZXNzbHkgdG8gYnJpbmcgQWZyaWNhIGFsb25nIG9uIHRoaXNcbiAgICAgICAgICAgIGdsb2JhbCB0cmVuZC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZm9udC1oZWFkaW5nIHRleHQtMnhsJz5XaGF0IGFyZSB3ZSBnb2luZyB0byBkbz88L2gyPlxuICAgICAgICAgIDxwPldlIGFyZSBnb2luZyB0byBicmluZyBwYWRlbCB0byBTdWIgU2FoYXJhbiBBZnJpY2EuPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgV2UgYXJlIGdvaW5nIHRvIGFjdCBhcyBhIGNvdXJ0IGRpc3RyaWJ1dG9yIGFuZCBidWlsZCBvdXIgb3duXG4gICAgICAgICAgICBjb21wbGV4ZXMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGhlIG1haW4gdGFyZ2V0cyBmb3IgdGhlIGNvdXJ0cyB3ZSBzZWxsIGFyZSBob3RlbHMsIHJlc29ydHMsXG4gICAgICAgICAgICBjb21wb3VuZHMgYW5kIHNpbWlsYXIuIFdlIHdpbGwgcHJvdmlkZSB0aGVtIHdpdGggZXZlcnl0aGluZyB0aGV5XG4gICAgICAgICAgICBuZWVkLCBzbyB0aGV5IGNhbiBvZmZlciB0aGlzIHVuaXF1ZSBhbmQgZnVuIGV4cGVyaWVuY2UgdG8gdGhlaXJcbiAgICAgICAgICAgIGd1ZXN0cyBhbmQgdmlzaXRvcnMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGhlIGNvbXBsZXhlcyB3ZSBhcmUgZ29pbmcgdG8gYnVpbGQgd2lsbCBoYXZlIGEgbGFyZ2UgZm9jdXMgb25cbiAgICAgICAgICAgIHNlcnZpbmcgYXMgYSBjb21tdW5pdHkgaHViLiBXZSB3YW50IHBlb3BsZSB0byBjb21lLCBzdGF5IGFuZCBlbmpveVxuICAgICAgICAgICAgdGhlbXNlbHZlcyBhbmQgdGhlIGNvbXBhbnkuIFBhZGVsIGhhcyB0aGUgYWJpbGl0eSB0byBicmVhayBkb3duXG4gICAgICAgICAgICBzb2NpYWwgYmFycmllcnMgYW5kIHdpbGwgcHJvdmlkZSBhIHBsYXRmb3JtIGZvciBwZW9wbGUgdG8gbWVldCBlYWNoXG4gICAgICAgICAgICBvdGhlciBhbmQgZm9ybSBmcmllbmRzaGlwcyBhbmQgbmV0d29yay5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXZSB3aWxsIG9mZmVyIGJvdGggdGhlIGNvdXJ0cyBhbmQgdGhlIGNvbXBsZXhlcyBhcyBhIHR1cm5rZXlcbiAgICAgICAgICAgIHNvbHV0aW9uLCB0byBlbnN1cmUgc2NhbGFiaWxpdHkgYW5kIGRlcGxveW1lbnQgc3BlZWQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2ZvbnQtaGVhZGluZyB0ZXh0LTJ4bCc+SG93IGFyZSB3ZSBnb2luZyB0byBkbyBpdD88L2gyPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgV2UgaGF2ZSBhIGZvY3VzIG9uIGludm9sdmVtZW50LCBwYXJ0aWNpcGF0aW9uIGFuZCBjb2xsYWJvcmF0aW9uLlxuICAgICAgICAgICAgVGhpcyBpcyB3aHkgd2UgYXJlIHdvcmtpbmcgaGFyZCB0byBpbnRlcm5hbGlzZSB0aGUgcGFydG5lcnMgd2VcbiAgICAgICAgICAgIGN1cnJlbnRseSB3b3JrIHdpdGgsIGFuZCB0aGUgZnV0dXJlIHBhcnRuZXJzIG9mIHRoZSB2ZW50dXJlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEZvciB0aGlzIHJlYXNvbiB3ZSBhcmUgY3Jvd2RmdW5kaW5nIHBhcnQgb2YgdGhlIHZlbnR1cmUuIFdlIHdhbnQgdG9cbiAgICAgICAgICAgIGJyaW5nIG9uIGxpa2UgbWluZGVkIHBlb3BsZSB3aG8gc2hhcmUgb3VyIHBhc3Npb24gZm9yIHBhZGVsLCBBZnJpY2FcbiAgICAgICAgICAgIG9yIGEgY29tYmluYXRpb24sIG9uIHRoaXMgam91cm5leS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXZSBhcmUgY3VycmVudGx5IHNlbGxpbmcgY291cnRzIGluIEFmcmljYS4gVGhpcyB3aWxsIHBhdmUgdGhlIHdheVxuICAgICAgICAgICAgZm9yIHRoZSBpbnRyb2R1Y3Rpb24gb2YgdGhlIHNwb3J0LCBjcmVhdGUgc29tZSBkZW1hbmQsIGFuZCBhbHNvXG4gICAgICAgICAgICBjcmVhdGUgc29tZSBjYXNoIGZsb3cgdG8gZnVuZCB0aGUgY29tcGxleGVzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFdpdGhpbiB0aGUgbmV4dCBxdWFydGVyIHdlIHdpbGwgc3RhcnQgY29uc3RydWN0aW5nIG91ciBmaXJzdFxuICAgICAgICAgICAgY29tcGxleGVzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT0nbWQ6dy0yLzUgaC1mdWxsICcgdG89Jy9qb2luLXVzJz5cbiAgICAgICAgICA8aW1nIHNyYz17RXZlbnRJbWd9IGNsYXNzTmFtZT0nYmctZ3JheS01MCAnPjwvaW1nPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8Q1RBXG4gICAgICAgIGhlYWRpbmc9J0FyZSB5b3UgaW50ZXJlc3RlZCBpbiBwYXJ0bmVyaW5nIHdpdGggdGhlIE51bWJlciAxIEFmcmljYW4gUGFkZWwgY29tcGFueT8nXG4gICAgICAgIGJvZHk9J0F0IHRoaXMgdmVyeSBlYXJseSBzdGFnZSBpbiBvdXIgZGV2ZWxvcG1lbnQgd2UgYXJlIGludGVyZXN0ZWQgaW4gZmluZGluZyBwYXJ0bmVycyBmcm9tIGFsbCBzZWN0b3JzIHRvIGludmVzdGlnYXRlIHBhcnRuZXJzaGlwIHBvc3NpYmlsaXRpZXMuIElmIHRoaXMgc291bmRzIGxpa2UgeW91IC0gZ2V0IGluIHRvdWNoLidcbiAgICAgICAgYnV0dG9uVGV4dD0nQ29udGFjdCBVcydcbiAgICAgICAgYnV0dG9uVG89JyNjb250YWN0J1xuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBGb3JtLFxuICBMaW5rLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgdXNlTG9hZGVyRGF0YSxcbiAgQWN0aW9uRnVuY3Rpb24sXG59IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IE1ldGEgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgaGVyb0ltZyBmcm9tICcuLi9pbWFnZXMvcGFkZWwtaGVyby5qcGcnO1xuaW1wb3J0IEJnSW1nIGZyb20gJ34vaW1hZ2VzL3dlYi1iZy5qcGcnO1xuaW1wb3J0IE1ldGFJbWcgZnJvbSAnfi9pbWFnZXMvbWV0YS1pbWFnZS5wbmcnO1xuXG5pbXBvcnQgeyBnZXRGaWxtcywgRmlsbSB9IGZyb20gJ34vYXBpL2ZpbG1zJztcbmltcG9ydCBDVEEgZnJvbSAnfi9Db21wb25lbnRzL2N0YSc7XG5pbXBvcnQgSGVybyBmcm9tICd+L0NvbXBvbmVudHMvaGVybyc7XG5pbXBvcnQgSW5mbyBmcm9tICd+L0NvbXBvbmVudHMvaW5mbyc7XG5pbXBvcnQgaW5mb0ltZyBmcm9tICcuLi9pbWFnZXMvYWJvdXQtcGEuanBnJztcbmltcG9ydCB7IGdldENsaWVudCwgdXJsRm9yIH0gZnJvbSAnfi9saWIvc2FuaXR5L2dldENsaWVudCc7XG5pbXBvcnQge1xuICBQb3J0YWJsZVRleHQsXG4gIFBvcnRhYmxlVGV4dFR5cGVDb21wb25lbnQsXG4gIFBvcnRhYmxlVGV4dENvbXBvbmVudHNQcm92aWRlcixcbn0gZnJvbSAnQHBvcnRhYmxldGV4dC9yZWFjdCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICd+L0NvbXBvbmVudHMvY29udGFjdCc7XG5cbi8vIGxvYWRlcigpIG11c3QgYmUgYXN5bmMhXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKCkge1xuICBjb25zdCBuZXdzUG9zdHMgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaChcbiAgICBgKltfdHlwZSA9PSBcIm5ld3NcIl17IF9pZCwgdGl0bGUsIHNsdWcsIFwiZmVhdHVyZUltYWdlXCI6IGZlYXR1cmUuYXNzZXQtPnVybFxuICAgfWBcbiAgKTtcbiAgY29uc3QgYWJvdXRUZXh0ID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJzZWN0aW9uc1wiICYmIHNsdWcuY3VycmVudCA9PSBcImFib3V0LXBhZGVsLWFmcmljYVwiIF17IF9pZCwgdGl0bGUsIG92ZXJ2aWV3LCBcImZlYXR1cmVJbWFnZVwiOiBmZWF0dXJlLmFzc2V0LT51cmxcbiAgIH1gXG4gICk7XG5cbiAgY29uc3QgdGVhbU1lbWJlcnMgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaChcbiAgICBgKltfdHlwZSA9PSBcInRlYW1cIiAmJiAobXlUYWdzWzBdLnZhbHVlPT1cIm1hbmFnZW1lbnRcIiB8fG15VGFnc1sxXS52YWx1ZT09XCJtYW5hZ2VtZW50XCIgICkgXXsgX2lkLCB0aXRsZSwgYm9hcmRQb3NpdGlvbiwgbXlUYWdzLCBsaW5rZWRpblVybCwgb3ZlcnZpZXcscm9sZSwgXCJmZWF0dXJlSW1hZ2VcIjogZmVhdHVyZS5hc3NldC0+dXJsXG4gICB9YFxuICApO1xuXG4gIGNvbnN0IGJvYXJkTWVtYmVycyA9IGF3YWl0IGdldENsaWVudCgpLmZldGNoKFxuICAgIGAqW190eXBlID09IFwidGVhbVwiICYmIChteVRhZ3NbMF0udmFsdWU9PVwiYm9hcmRcIiB8fCBteVRhZ3NbMV0udmFsdWU9PVwiYm9hcmRcIiAgKSBdeyBfaWQsIHRpdGxlLCBib2FyZFBvc2l0aW9uLCBteVRhZ3MsIGxpbmtlZGluVXJsLCBvdmVydmlldyxyb2xlLCBcImZlYXR1cmVJbWFnZVwiOiBmZWF0dXJlLmFzc2V0LT51cmxcbiAgIH1gXG4gICk7XG4gIHJldHVybiB7IG5ld3NQb3N0cywgYWJvdXRUZXh0LCB0ZWFtTWVtYmVycywgYm9hcmRNZW1iZXJzIH07XG59XG5cbi8vIFNlcnZlciBTaWRlXG4vL2V4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4vL2NvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuLy9jb25zdCB0aXRsZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCd0aXRsZScpO1xuLy9yZXR1cm4gZ2V0RmlsbXModGl0bGUpO1xuLy99O1xuXG5leHBvcnQgY29uc3QgbWV0YSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1BhZGVsIEFmcmljYSAtIFBhZGVsLCBNb3JlIFRoYW4gU3BvcnQnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1BhZGVsIEFmcmljYSBpcyBicmluZ2luZyBwYWRlbCwgYXMgYSBzcG9ydCwgYSBsaWZlc3R5bGUsIGFuZCBhIGNvbW11bml0eSBidWlsZGVyLCB0byBBZnJpY2EsIHN0YXJ0aW5nIHdpdGggY2VudGVycyBpbiBHaGFuYSBhbmQgUndhbmRhLiBQYWRlbCBpcyBtb3JlIHRoYW4gc3BvcnQgLSBpdCBpcyBpbXBhY3QuICcsXG4gICAga2V5d29yZHM6ICdwYWRlbCwgYWZyaWNhLCBzcG9ydCwgZ2hhbmEsIHJ3YW5kYSwga2VueWEsIHVnYW5kYSwgY29tbXVuaXR5JyxcbiAgICAnb2c6aW1hZ2UnOiBgaHR0cHM6Ly93d3cucGFkZWwuYWZyaWNhJHtNZXRhSW1nfWAsXG4gIH07XG59O1xuXG4vLyBDbGllbnQgU2lkZVxuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgbGV0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBsZXQgZW1haWwgPSBmb3JtRGF0YS5nZXQoJ2VtYWlsJyk7XG4gIGxldCBuYW1lID0gZm9ybURhdGEuZ2V0KCduYW1lJyk7XG4gIGxldCBjb21wYW55ID0gZm9ybURhdGEuZ2V0KCdjb21wYW55Jyk7XG4gIC8vcHJvY2Vzcy5lbnYuQ09OVkVSVEtJVF9LRVkgPSAnbEdmNmtPbkZPT0MtWU9pa1pEX1lQdyc7XG5cbiAgY29uc3QgQVBJX0tFWSA9ICdsR2Y2a09uRk9PQy1ZT2lrWkRfWVB3JztcbiAgY29uc3QgRk9STV9JRCA9ICczMDIyMDU0JztcbiAgY29uc3QgQVBJID0gJ2h0dHBzOi8vYXBpLmNvbnZlcnRraXQuY29tL3YzLyc7XG5cbiAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSX0vZm9ybXMvJHtGT1JNX0lEfS9zdWJzY3JpYmVgLCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgZmlyc3RfbmFtZTogbmFtZSxcbiAgICAgIGZpZWxkczogeyBjb21wYW55OiBjb21wYW55IH0sXG4gICAgICBhcGlfa2V5OiBBUElfS0VZLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgfSxcbiAgfSk7XG5cbiAgLy9jb25zb2xlLmxvZyh7IGVtYWlsIH0sIHsgbmFtZSB9LCB7IGNvbXBhbnkgfSk7XG4gIHJldHVybiByZXMuanNvbigpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IG5ld3NQb3N0cywgYWJvdXRUZXh0LCB0ZWFtTWVtYmVycywgYm9hcmRNZW1iZXJzIH0gPSB1c2VMb2FkZXJEYXRhKCk7XG4gIGNvbnN0IGRhcmtNb2RlID0gZmFsc2U7XG5cbiAgY29uc3QgbXlQb3J0YWJsZVRleHRDb21wb25lbnRzID0ge1xuICAgIHR5cGVzOiB7XG4gICAgICBpbWFnZTogKHZhbHVlOiBhbnkpID0+IChcbiAgICAgICAgPGltZyBzcmM9e3ZhbHVlLmFzc2V0fSBrZXk9e3ZhbHVlLl9pZH0gY2xhc3NOYW1lPXt2YWx1ZS5hc3NldH0+PC9pbWc+XG4gICAgICApLFxuICAgIH0sXG4gIH07XG4gIC8vY29uc3QgZmlsbXMgPSB1c2VMb2FkZXJEYXRhPEZpbG1bXT4oKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGAgJHtcbiAgICAgICAgICBkYXJrTW9kZVxuICAgICAgICAgICAgPyAnIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LDEpJ1xuICAgICAgICAgICAgOiAnIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgxNSwgMjMsIDQyLDEpJ1xuICAgICAgICB9ICAgICAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSksdXJsKCcke2hlcm9JbWd9JylgLFxuICAgICAgfX1cbiAgICAgIGNsYXNzTmFtZT0ndGV4dC1zbGF0ZS05MDAgZGFyazp0ZXh0LXdoaXRlICBiZy1jb3ZlciBiZy1maXhlZCAtbXQtMjggIHB0LTE2IG1kOnB0LTAgICdcbiAgICA+XG4gICAgICA8SGVyb1xuICAgICAgICBoZWFkaW5nPSdQYWRlbCBoYXMgdGFrZW4gRXVyb3BlIGJ5IHN0b3JtLiBOb3cgaXRcdTIwMTlzIHRpbWUgdG8gYnJpbmcgaXQgdG8gQWZyaWNhLlxuICAgICAgICAnXG4gICAgICAgIGJvZHk9J1VzaW5nIG91ciBleHRlbnNpdmUga25vd2xlZGdlIG9mIEFmcmljYSBhbmQgYnVzaW5lc3MgZGV2ZWxvcG1lbnQsIHdlIGFpbSB0byBwcm92aWRlIFBhZGVsLCBhcyBhIHNwb3J0IGFuZCBhIGNvbW11bml0eSBlbmFibGVyLCB0byBHaGFuYSwgS2VueWEsIE5pZ2VyaWEgYW5kIG90aGVyIFN1YiBTYWhhcmFuIGNvdW50cmllcy5cbiAgICAgICAgJ1xuICAgICAgICBidXR0b24xVGV4dD0nTGVhcm4gTW9yZSdcbiAgICAgICAgYnV0dG9uMVRvPScjYWJvdXQnXG4gICAgICAgIGJ1dHRvbjJUZXh0PSdXYW50IHRvIFBhcnRuZXI/J1xuICAgICAgICBidXR0b24yVG89JyNhYm91dCdcbiAgICAgICAgaW1nU3JjPScnXG4gICAgICAvPlxuXG4gICAgICA8SW5mbyBmbG93PSdsZWZ0JyAvPlxuICAgICAgPENUQVxuICAgICAgICBoZWFkaW5nPSdBcmUgeW91IGludGVyZXN0ZWQgaW4gcGFydG5lcmluZyB3aXRoIHRoZSBOdW1iZXIgMSBBZnJpY2FuIFBhZGVsIGNvbXBhbnk/J1xuICAgICAgICBib2R5PSdBdCB0aGlzIHZlcnkgZWFybHkgc3RhZ2UgaW4gb3VyIGRldmVsb3BtZW50IHdlIGFyZSBpbnRlcmVzdGVkIGluIGZpbmRpbmcgcGFydG5lcnMgZnJvbSBhbGwgc2VjdG9ycyB0byBpbnZlc3RpZ2F0ZSBwYXJ0bmVyc2hpcCBwb3NzaWJpbGl0aWVzLiBJZiB0aGlzIHNvdW5kcyBsaWtlIHlvdSAtIGdldCBpbiB0b3VjaC4nXG4gICAgICAgIGJ1dHRvblRleHQ9J0NvbnRhY3QgVXMnXG4gICAgICAgIGJ1dHRvblRvPScjY29udGFjdCdcbiAgICAgIC8+XG5cbiAgICAgIHsvKlxuXG5cbiA8c2VjdGlvbiBjbGFzc05hbWU9J1tjdGFdICBwLXZ3LTMyICBzcGFjZS14LTEwIGZsZXggJz5cbiAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9J3ctMS80Jz5cbiAgICAgICAgICA8aW1nIHNyYz17aW5mb0ltZ30gLz5cbiAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDxibG9ja3F1b3RlIGNsYXNzTmFtZT0ndy0zLzQgc3BhY2UteS00ICAnPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtaGVhZGluZyB0ZXh0LXNsYXRlLTkwMCAgZGFyazp0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgIFx1MjAxQyBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG9cbiAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXHUyMDFEXG4gICAgICAgICAgPC9oMj5cblxuICAgICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgIDxzZWN0aW9uXG4gICAgICAgIGlkPSduZXdzJ1xuICAgICAgICBjbGFzc05hbWU9J1thYm91dF0gIHAtdnctMzIgYmctd2hpdGUgIGRhcms6Ymctc2xhdGUtOTAwIHRleHQtY2VudGVyIHNwYWNlLXktdnctNi1taW5AeGwgJ1xuICAgICAgPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1zbGF0ZS05MDAgZGFyazp0ZXh0LXdoaXRlICc+XG4gICAgICAgICAgTmV3c1xuICAgICAgICA8L2gyPlxuXG4gICAgICAgIC8vU0VBUkNIIEZJTFRFUlxuICAgICAgICA8Rm9ybSBjbGFzc05hbWU9J3B5LTUnPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICBuYW1lPSd0aXRsZSdcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2VudGVyIHNvbWV0aGluZydcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdib3JkZXItMiByb3VuZGVkIHB5LTIgcHgtMidcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi04MDAgdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZCBteC0yJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIFNlYXJjaHsnICd9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgKi99XG5cbiAgICAgIHsvKlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNiAnPlxuICAgICAgICAgIHtmaWxtcy5zbGljZSgwLCA0KS5tYXAoKGZpbG0pID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdob3ZlcjpzaGFkb3ctMnhsIGhvdmVyOnNjYWxlLTEwNSBob3Zlcjpmb250LWJvbGQgY3Vyc29yLXBvaW50ZXIgIHAtNCAgc3BhY2UteS12dy00LW1heEBtZCc+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2FzcGVjdC1zcXVhcmUgcm91bmRlZC1tZCAgJ1xuICAgICAgICAgICAgICAgIHNyYz17ZmlsbS5pbWFnZX1cbiAgICAgICAgICAgICAgICBhbHQ9e2ZpbG0udGl0bGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXY+e2ZpbG0udGl0bGV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX17JyAnfVxuICAgICAgICA8L2Rpdj5cblxuXG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNiAnPlxuICAgICAgICAgIHtuZXdzUG9zdHM/Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gbmV3c1Bvc3RzLnNsaWNlKDAsIDYpLm1hcCgobmV3czogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtuZXdzLl9pZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naG92ZXI6c2hhZG93LTJ4bCBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6Zm9udC1ib2xkIGN1cnNvci1wb2ludGVyICBwLTQgIHNwYWNlLXktdnctNC1tYXhAbWQnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihuZXdzLmZlYXR1cmVJbWFnZSkud2lkdGgoNTAwKS51cmwoKX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtuZXdzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUnXG4gICAgICAgICAgICAgICAgICAgIHRvPXtuZXdzLnNsdWcuY3VycmVudH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge25ld3MudGl0bGV9eycgJ31cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cblxuXG5cblxuICAgICAgICAgICovfVxuXG4gICAgICA8c2VjdGlvblxuICAgICAgICBpZD0nbmV3cydcbiAgICAgICAgY2xhc3NOYW1lPSdbYWJvdXRdIG10LTIwICBwLXZ3LTMyIGJnLXdoaXRlICBkYXJrOmJnLXNsYXRlLTkwMCB0ZXh0LWNlbnRlciBzcGFjZS15LXZ3LTYtbWluQHhsICdcbiAgICAgID5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0yeGwgIGZvbnQtaGVhZGluZyBmb250LWJsYWNrIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2UgIHRleHQtc2xhdGUtOTAwIGRhcms6dGV4dC13aGl0ZSAnPlxuICAgICAgICAgIE1hbmFnZW1lbnQgVGVhbVxuICAgICAgICA8L2gyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdhcC02ICc+XG4gICAgICAgICAge3RlYW1NZW1iZXJzPy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHRlYW1NZW1iZXJzPy5zbGljZSgwLCA2KS5tYXAoKHRlYW1NZW1iZXI6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17dGVhbU1lbWJlci5faWR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2hvdmVyOnNoYWRvdy0yeGwgaG92ZXI6c2NhbGUtMTA1IGhvdmVyOmZvbnQtYm9sZCBjdXJzb3ItcG9pbnRlciAgcC00ICBzcGFjZS15LXZ3LTItbWF4QG1kJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IodGVhbU1lbWJlci5mZWF0dXJlSW1hZ2UpLndpZHRoKDUwMCkudXJsKCl9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17dGVhbU1lbWJlci50aXRsZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdmb250LWJvbGQnPnt0ZWFtTWVtYmVyLnRpdGxlfSA8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LWxpZ2h0IHVwcGVyY2FzZSB0ZXh0LXhzIG9wYWNpdHktNTAgbWItNCc+XG4gICAgICAgICAgICAgICAgICAgIHt0ZWFtTWVtYmVyLnJvbGV9eycgJ31cbiAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtZ3JlZW4tNTAwIHVuZGVybGluZSBjdXJzb3ItcG9pbnRlcidcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17dGVhbU1lbWJlci5saW5rZWRpblVybH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgTGlua2VkaW5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIGlkPSduZXdzJ1xuICAgICAgICBjbGFzc05hbWU9J1thYm91dF0gIHAtdnctMzIgYmctZ3JheS0xMDAgIGRhcms6Ymctc2xhdGUtODAwIHRleHQtY2VudGVyIHNwYWNlLXktdnctNi1taW5AeGwgJ1xuICAgICAgPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTJ4bCAgZm9udC1oZWFkaW5nICB0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlICB0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUgJz5cbiAgICAgICAgICBCb2FyZCBvZiBEaXJlY3RvcnNcbiAgICAgICAgPC9oMj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNiAnPlxuICAgICAgICAgIHtib2FyZE1lbWJlcnM/Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gYm9hcmRNZW1iZXJzPy5zbGljZSgwLCA2KS5tYXAoKGJvYXJkTWVtYmVyOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2JvYXJkTWVtYmVyLl9pZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naG92ZXI6c2hhZG93LTJ4bCBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6Zm9udC1ib2xkIGN1cnNvci1wb2ludGVyICBwLTQgIHNwYWNlLXktdnctMi1tYXhAbWQnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihib2FyZE1lbWJlci5mZWF0dXJlSW1hZ2UpLndpZHRoKDUwMCkudXJsKCl9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17Ym9hcmRNZW1iZXIudGl0bGV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57Ym9hcmRNZW1iZXIudGl0bGV9IDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtbGlnaHQgdXBwZXJjYXNlIHRleHQteHMgb3BhY2l0eS01MCBtYi00Jz5cbiAgICAgICAgICAgICAgICAgICAge2JvYXJkTWVtYmVyLmJvYXJkUG9zaXRpb259eycgJ31cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1zbGF0ZS05MDAgZGFyazp0ZXh0LWdyZWVuLTUwMCB1bmRlcmxpbmUgY3Vyc29yLXBvaW50ZXInXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2JvYXJkTWVtYmVyLmxpbmtlZGluVXJsfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBMaW5rZWRpblxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgaWQ9J2NvbnRhY3QnXG4gICAgICAgIGNsYXNzTmFtZT0nW2NvbnRhY3RdICBiZy1zbGF0ZS05MDAgICBzcGFjZS14LTEwICAgcC12dy0zMiAgc3BhY2UteS0xMCBtZDpzcGFjZS14LTEwIGZsZXggZmxleC1jb2wgIHRleHQtd2hpdGUgJ1xuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nICBtLWF1dG8gIHRleHQtY2VudGVyIG0gc3BhY2UteS12dy02LW1pbkB4bCBtZDp3LTEvMiAnPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtMnhsICBmb250LWhlYWRpbmcgIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2UgIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwICB2aWEtZ3JlZW4tNTAwIHRvLXllbGxvdy00MDAgJz5cbiAgICAgICAgICAgIENvbnRhY3QgVXNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYmFzZSc+XG4gICAgICAgICAgICBJZiB5b3UgYXJlIGFuIGludmVzdGVyLCBhIHBvdGVudGlhbCBwYXJ0bmVyIG9yIGFueW9uZSBpbnRlcmVzdGVkIGluXG4gICAgICAgICAgICBsZWFybmluZyBtb3JlIGFib3V0IFBhZGVsIEFmcmljYSwgeW91IGNhbiByZWFjaCB1cyBkaXJlY3RseSB3aXRoIHRoZVxuICAgICAgICAgICAgZm9sbG93aW5nIGRldGFpbHMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgc3BhY2UteC12dy00LW1pbkB4bCAgbWQ6aW5saW5lLWZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQtc2xhdGUtOTAwJz5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9J21haWx0bzpoZWxsb0BwYWRlbC5hZnJpY2EnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHktdnctNC1taW5AeGwtbWF4QDJ4bCBweC12dy00LW1pbkB4bC1tYXhAMnhsIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwICAgdG8teWVsbG93LTQwMCBmb250LWhlYWRpbmcgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCAgaG92ZXI6YmctZ3JhZGllbnQtdG8tdGwgaG92ZXI6c2NhbGUtMTA1IHNoYWRvdy0yeGwnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEVtYWlsIFVzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPSd0ZWw6MDA0NjczOTc4Nzc2NCdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPScgcHktdnctNC1taW5AeGwtbWF4QDJ4bCBweC12dy00LW1pbkB4bC1tYXhAMnhsIGJnLWdyYWRpZW50LXRvLWJyIGZyb20td2hpdGUgICB0by1ncmF5LTIwMCBmb250LWhlYWRpbmcgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCAgaG92ZXI6YmctZ3JhZGllbnQtdG8tdGwgaG92ZXI6c2NhbGUtMTA1IHNoYWRvdy0yeGwnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFRlbGVwaG9uZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgaW5mb0ltZyBmcm9tICcuLi9pbWFnZXMvYWJvdXQtcGEuanBnJztcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEsIExpbmsgfSBmcm9tICdyZW1peCc7XG5cbmltcG9ydCB7IFBvcnRhYmxlVGV4dCB9IGZyb20gJ0Bwb3J0YWJsZXRleHQvcmVhY3QnO1xuXG5pbnRlcmZhY2UgSW5mb0NvbnRlbnQge1xuICBmbG93OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZm8ocHJvcHM6IEluZm9Db250ZW50KSB7XG4gIGNvbnN0IHsgYWJvdXRUZXh0IH0gPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgY29uc3QgbXlQb3J0YWJsZVRleHRDb21wb25lbnRzID0ge1xuICAgIHR5cGVzOiB7XG4gICAgICBpbWFnZTogKHZhbHVlOiBhbnkpID0+IChcbiAgICAgICAgPGltZyBzcmM9e3ZhbHVlLmFzc2V0fSBrZXk9e3ZhbHVlLl9pZH0gY2xhc3NOYW1lPXt2YWx1ZS5hc3NldH0+PC9pbWc+XG4gICAgICApLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgaWQ9J2Fib3V0J1xuICAgICAgY2xhc3NOYW1lPXtgW2N0YV0gYmctd2hpdGUgdGV4dC1zbGF0ZS05MDAgICBwLXZ3LTMyICBzcGFjZS15LTEwIG1kOnNwYWNlLXgtMTQgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyAke1xuICAgICAgICBwcm9wcy5mbG93ID09ICdsZWZ0JyA/ICcnIDogJyBtZDpmbGV4LXJvdy1yZXZlcnNlIHNwYWNlLXgtcmV2ZXJzZSdcbiAgICAgIH0gYH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6dy0yLzUgIHNwYWNlLXktNCAgJz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0yeGwgIGZvbnQtaGVhZGluZyBmb250LWJsYWNrIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2UgJz5cbiAgICAgICAgICB7YWJvdXRUZXh0WzBdLnRpdGxlfVxuICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1jb250ZW50IHNwYWNlLXktMiB0ZXh0LW1kJz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFdlIGJlbGlldmUgdGhhdCBBZnJpY2EgaXMgdGhlIG5leHQgZ3Jvd3RoIGNlbnRyZSBvZiB0aGUgd29ybGQgYW5kXG4gICAgICAgICAgICB0aGF0IGl0IHByb3ZpZGVzIGltbWVuc2Ugb3Bwb3J0dW5pdGllcyBmb3IgdGhlIGZldyB3aG8gdGFrZSB0aGUgbGVhcFxuICAgICAgICAgICAgYW5kIGV4cGFuZCB0byBBZnJpY2EuIE9uIHRoZSBvdGhlciBoYW5kLCB3ZSBhcmUgYWxzbyB2ZXJ5IGF3YXJlIHRoYXRcbiAgICAgICAgICAgIGluIG9yZGVyIHRvIHN1Y2NlZWQgaW4gQWZyaWNhLCBpdCByZXF1aXJlcyBpbi1kZXB0aCB1bmRlcnN0YW5kaW5nIG9mXG4gICAgICAgICAgICB0aGUgcHJvZHVjdCB5b3Ugd291bGQgbGlrZSB0byBvZmZlciwgYW5kIGEgdGhvcm91Z2ggdW5kZXJzdGFuZGluZyBvZlxuICAgICAgICAgICAgdGhlIG1hcmtldC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXZSBhcmUgY29uZmlkZW50IHRoYXQgb3VyIHRlYW0gaGFzIHRoZSByZXF1aXJlZCBwcmVyZXF1aXNpdGVzIHRvXG4gICAgICAgICAgICBzdWNjZWVkLiBXZSBhcmUgYSBjb25nbG9tZXJhdGUgb2YgcGFkZWwgZW50aHVzaWFzdHMgYW5kIGJ1c2luZXNzXG4gICAgICAgICAgICBwcm9maWxlcy4gQ29tYmluZWQgd2UgaGF2ZSBzdGFydGVkIG92ZXIgMTAwIGNvbXBhbmllcywgc29sZCAyMDAwXG4gICAgICAgICAgICBjb3VydHMsIHdvcmtlZCAyMCB5ZWFycyB3aXRoIFBhZGVsIGFuZCAzMCB5ZWFycyBvZiBidXNpbmVzc1xuICAgICAgICAgICAgZXhwZXJpZW5jZSBmcm9tIFN1YiBTYWhhcmFuIEFmcmljYS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdibG9jayBtdC02IHVuZGVybGluZSB0ZXh0LWdyZWVuLTUwMCAnIHRvPScvYWJvdXQnPlxuICAgICAgICAgICAgTGVhcm4gTW9yZSBBYm91dCBVc3snICd9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIHsvKlxuICAgICAgICAgIHthYm91dFRleHRbMF0ub3ZlcnZpZXc/Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gYWJvdXRUZXh0WzBdLm92ZXJ2aWV3Lm1hcCgocGFyYWdyYXBoczogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgPFBvcnRhYmxlVGV4dFxuICAgICAgICAgICAgICAgICAga2V5PXtwYXJhZ3JhcGhzLl9pZH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtbcGFyYWdyYXBoc119XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXtteVBvcnRhYmxlVGV4dENvbXBvbmVudHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIDogbnVsbH0gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZmlndXJlIGNsYXNzTmFtZT0nbWQ6dy0xLzIgYmctc2xhdGUtMzAwJz5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9J3ctZnVsbCcgc3JjPXthYm91dFRleHRbMF0uZmVhdHVyZUltYWdlfSAvPlxuICAgICAgPC9maWd1cmU+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxVQUFVO0FBQUEsTUFDdkMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsb0JBQW9CO0FBQUEsTUFDakQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQzVJbEM7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ3BEMUM7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDaENqQztBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksU0FBUztBQUNiLFFBQUksU0FBUztBQUNiLFFBQUksV0FBVztBQUlmLFdBQU8sS0FBSyxRQUFRLFFBQVEsU0FBVSxHQUFHO0FBQ3hDLFVBQUksTUFBTSxhQUFhLENBQUMsUUFBUSxlQUFlO0FBQUksZUFBTyxlQUFlLFNBQVMsR0FBRztBQUFBLFVBQ3BGLFlBQVk7QUFBQSxVQUNaLEtBQUssV0FBWTtBQUFFLG1CQUFPLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFHbkMsV0FBTyxLQUFLLFFBQVEsUUFBUSxTQUFVLEdBQUc7QUFDeEMsVUFBSSxNQUFNLGFBQWEsQ0FBQyxRQUFRLGVBQWU7QUFBSSxlQUFPLGVBQWUsU0FBUyxHQUFHO0FBQUEsVUFDcEYsWUFBWTtBQUFBLFVBQ1osS0FBSyxXQUFZO0FBQUUsbUJBQU8sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUduQyxXQUFPLEtBQUssVUFBVSxRQUFRLFNBQVUsR0FBRztBQUMxQyxVQUFJLE1BQU0sYUFBYSxDQUFDLFFBQVEsZUFBZTtBQUFJLGVBQU8sZUFBZSxTQUFTLEdBQUc7QUFBQSxVQUNwRixZQUFZO0FBQUEsVUFDWixLQUFLLFdBQVk7QUFBRSxtQkFBTyxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDbkNyQztBQUFBO0FBQUE7QUFBQSxZQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUNBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQStCO0FBQy9CLG1CQUE0QjtBQUU1QixvQkFBbUI7QUFFSix1QkFDYixTQUNBLG9CQUNBLGlCQUNBLGNBQ0E7QUFDQSx3QkFBTztBQUVQLFFBQU0sU0FBUyxrQ0FDYixvQ0FBQywwQkFBRDtBQUFBLElBQWEsU0FBUztBQUFBLElBQWMsS0FBSyxRQUFRO0FBQUE7QUFHbkQsa0JBQWdCLElBQUksZ0JBQWdCO0FBRXBDLFNBQU8sSUFBSSxTQUFTLG9CQUFvQixRQUFRO0FBQUEsSUFDOUMsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBO0FBQUE7OztBQ3JCYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVlPO0FBR1Asa0NBQTBCO0FBRTFCLG1CQUFvQzs7Ozs7Ozs7Ozs7Ozs7O0FBU3BDLG9CQUFxQjtBQUVyQixXQUFzQjs7O0FDNUJ0QjtBQUFBLG9CQUFxQjtBQUVOLG1CQUFtQjtBQUNoQyxTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUErRix3R0FHNUcsb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxJQUFpQixJQUFHO0FBQUEsS0FBVztBQUFBOzs7QUQ0QjlDLElBQU0sU0FBeUIsWUFBWTtBQUNoRCxTQUFPLHdCQUFpQixFQUFFLGNBQWMsUUFBUSxJQUFJO0FBQUE7QUFHL0MsSUFBTSxPQUFxQixNQUFNO0FBQ3RDLFNBQU8sRUFBRSxPQUFPLGdCQUFnQixhQUFhO0FBQUE7QUFHeEMsaUJBQWlCO0FBQ3RCLFNBQU87QUFBQSxJQUNMLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQSxJQUMzQixFQUFFLEtBQUssY0FBYyxNQUFNO0FBQUE7QUFBQTtBQUl4QixJQUFNLE1BQU0sQ0FBQyxnQkFFZDtBQUNKLFFBQU0saUJBQWlCLE1BQU07QUFHM0IsZ0JBQVksWUFBWSxDQUFDLFNBQVMsQ0FBQztBQUFBO0FBR3JDLFFBQU0sV0FBVztBQUVqQixRQUFNLENBQUMsVUFBVSxhQUFhLDJCQUFTO0FBRXZDLDhCQUFVLE1BQU07QUFDZCxVQUFNLFVBQVUsTUFBTTtBQUNwQixnQkFBVSxDQUFDLGNBQWE7QUFDdEIsWUFDRSxDQUFDLGFBQ0EsVUFBUyxLQUFLLFlBQVksTUFDekIsU0FBUyxnQkFBZ0IsWUFBWSxLQUN2QztBQUNBLGlCQUFPO0FBQUE7QUFHVCxZQUNFLGFBQ0EsU0FBUyxLQUFLLFlBQVksS0FDMUIsU0FBUyxnQkFBZ0IsWUFBWSxHQUNyQztBQUNBLGlCQUFPO0FBQUE7QUFHVCxlQUFPO0FBQUE7QUFBQTtBQUlYLFdBQU8saUJBQWlCLFVBQVU7QUFDbEMsV0FBTyxNQUFNLE9BQU8sb0JBQW9CLFVBQVU7QUFBQSxLQUNqRDtBQUVILFFBQU0sQ0FBQyxZQUFZLGlCQUFpQiwyQkFBUztBQUM3QyxRQUFNLFlBQVksTUFBTTtBQUFBO0FBQ3hCLFFBQU0sZUFBZSxNQUFNO0FBSXpCLGtCQUFjLENBQUMsU0FBUyxDQUFDO0FBQUE7QUFHM0IsU0FDRSwwREFVRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxLQUFEO0FBQUEsSUFBRyxNQUFLO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FDcEIsb0NBQUMsT0FBRDtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsV0FBVyxzREFDVCxXQUFXLFNBQVM7QUFBQSxNQUl4QixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxXQUFXLHlEQUNULFdBQVcsU0FBUztBQUFBLE9BSTFCLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLFNBQVM7QUFBQSxJQUNULHdCQUFxQjtBQUFBLElBQ3JCLE1BQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxJQUNWLGlCQUFjO0FBQUEsSUFDZCxpQkFBYztBQUFBLEtBRWQsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQVUsbUJBQ3pCLGFBQ0Msb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsU0FBUTtBQUFBLElBQ1IsT0FBTTtBQUFBLEtBRU4sb0NBQUMsUUFBRDtBQUFBLElBQ0UsVUFBUztBQUFBLElBQ1QsR0FBRTtBQUFBLElBQ0YsVUFBUztBQUFBLFFBSWIsb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsU0FBUTtBQUFBLElBQ1IsT0FBTTtBQUFBLEtBRU4sb0NBQUMsUUFBRDtBQUFBLElBQ0UsVUFBUztBQUFBLElBQ1QsR0FBRTtBQUFBLElBQ0YsVUFBUztBQUFBLFFBS2pCLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVcsSUFDVCxhQUNJLDhEQUNBO0FBQUEsSUFFTixJQUFHO0FBQUEsS0FFSCxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FDWixvQ0FBQyxNQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixTQUFTLGFBQWEsZUFBZTtBQUFBLEtBRXJDLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsS0FBSSxXQUVmLG9DQUFDLE1BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFNBQVMsYUFBYSxlQUFlO0FBQUEsS0FFckMsb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLElBQUc7QUFBQSxLQUFTLFlBRXBCLG9DQUFDLE1BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFNBQVMsYUFBYSxlQUFlO0FBQUEsS0FFckMsb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLElBQUc7QUFBQSxLQUFXLGNBRXRCLG9DQUFDLE1BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFNBQVMsYUFBYSxlQUFlO0FBQUEsS0FFckMsb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLElBQUc7QUFBQSxLQUFRLFdBRW5CLG9DQUFDLE1BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFNBQVMsYUFBYSxlQUFlO0FBQUEsS0FFckMsb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLElBQUc7QUFBQSxLQUFXLGNBRXRCLG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxNQUFLO0FBQUEsSUFBdUMsV0FBVTtBQUFBLEtBQ3ZELG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVcsSUFBSSxhQUFhLFdBQVc7QUFBQSxJQUN2QyxNQUFLO0FBQUEsSUFDTCxTQUFRO0FBQUEsSUFDUixlQUFZO0FBQUEsS0FFWixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxVQUFTO0FBQUEsSUFDVCxHQUFFO0FBQUEsSUFDRixVQUFTO0FBQUEsT0FHYixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxXQUFXLElBQ1QsYUFDSSw4REFDQTtBQUFBLEtBRVAsZUFLTCxvQ0FBQyxNQUFELE1BQ0csS0FDRCxvQ0FBQyxLQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsS0FFVixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFXLElBQUksYUFBYSxXQUFXO0FBQUEsSUFDdkMsTUFBSztBQUFBLElBQ0wsU0FBUTtBQUFBLElBQ1IsUUFBTztBQUFBLElBQ1AsT0FBTTtBQUFBLElBQ04sZUFBWTtBQUFBLEtBRVosb0NBQUMsUUFBRDtBQUFBLElBQ0UsVUFBUztBQUFBLElBQ1QsR0FBRTtBQUFBLElBQ0YsVUFBUztBQUFBLE9BR2Isb0NBQUMsUUFBRDtBQUFBLElBQ0UsV0FBVyxJQUNULGFBQ0ksOERBQ0E7QUFBQSxLQUVQLFlBQ1UsUUFJZixvQ0FBQyxNQUFELE1BQ0csS0FDRCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxNQUFLO0FBQUEsSUFBMEMsV0FBVTtBQUFBLEtBQzFELG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVcsSUFBSSxhQUFhLFdBQVc7QUFBQSxJQUN2QyxNQUFLO0FBQUEsSUFDTCxTQUFRO0FBQUEsSUFDUixlQUFZO0FBQUEsS0FFWixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxVQUFTO0FBQUEsSUFDVCxHQUFFO0FBQUEsSUFDRixVQUFTO0FBQUEsT0FHYixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxXQUFXLElBQ1QsYUFDSSw4REFDQTtBQUFBLEtBRVAsYUFDVyxRQUloQixvQ0FBQyxVQUFEO0FBQUEsSUFDRSxRQUFNO0FBQUEsSUFDTixJQUFHO0FBQUEsSUFDSCxTQUFTO0FBQUEsSUFDVCxNQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsS0FFVixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFXLElBQ1QsYUFBYSxXQUFXO0FBQUEsSUFFMUIsTUFBSztBQUFBLElBQ0wsU0FBUTtBQUFBLElBQ1IsT0FBTTtBQUFBLEtBRU4sb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLE9BRVYsb0NBQUMsT0FBRDtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsV0FBVyxJQUNULGFBQWEsV0FBVztBQUFBLElBRTFCLE1BQUs7QUFBQSxJQUNMLFNBQVE7QUFBQSxJQUNSLE9BQU07QUFBQSxLQUVOLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLEdBQUU7QUFBQSxJQUNGLFVBQVM7QUFBQSxJQUNULFVBQVM7QUFBQSxPQUdiLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLFdBQVcsSUFDVCxhQUNJLDhEQUNBO0FBQUEsS0FFUDtBQUFBO0FBWVYsa0JBQWtCO0FBQ3ZCLFNBQ0Usb0NBQUMsVUFBRDtBQUFBLElBQVEsV0FBVTtBQUFBLEtBQ2hCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUEyQixhQUNsQyxLQUNQLG9DQUFDLG9CQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxRQUFPO0FBQUEsSUFDUCxXQUFVO0FBQUEsS0FDWCx1QkFFTSwwQkFHVCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBa0QscUNBR2xFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBRyxTQUcxQixvQ0FBQyxvQkFBRDtBQUFBLElBQU0sSUFBRztBQUFBLElBQVMsV0FBVTtBQUFBLEtBQUcsU0FDdkIsTUFDQSxLQUNSLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBVyxXQUFVO0FBQUEsS0FBRyxZQUdqQyxvQ0FBQyxvQkFBRDtBQUFBLElBQU0sSUFBRztBQUFBLElBQVEsV0FBVTtBQUFBLEtBQUcsU0FHOUIsb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLElBQUc7QUFBQSxJQUFXLFdBQVU7QUFBQSxLQUFHO0FBQUE7QUFTNUIsZUFBZTtBQUM1QixRQUFNLENBQUMsVUFBVSxlQUFlLDJCQUFTO0FBQ3pDLFFBQU0sV0FBVztBQUNqQixRQUFNLEVBQUUsaUJBQWlCO0FBRXpCLDhCQUFVLE1BQU07QUFDZCxRQUFJLDZDQUFjLFFBQVE7QUFDeEIsTUFBSyxjQUFTLFNBQVMsVUFBVTtBQUFBO0FBQUEsS0FFbEMsQ0FBQyxVQUFVO0FBQ2QsUUFBTSxVQUFVO0FBQ2hCLFVBQVEsSUFBSTtBQUNaLFNBQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLElBQUssV0FBVyxJQUFJLFdBQVcsS0FBSztBQUFBLEtBQzdDLG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxTQUFRO0FBQUEsTUFDZCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsSUFBVyxTQUFRO0FBQUEsTUFFOUIsb0NBQUMsVUFBRCxPQVNBLG9DQUFDLG9CQUFELE9BQ0Esb0NBQUMscUJBQUQsUUFFRixvQ0FBQyxRQUFELE1BQ0Usb0NBQUMsVUFBRDtBQUFBLElBQ0UsT0FBSztBQUFBLElBQ0wsS0FBSztBQUFBLE1BRVAsb0NBQUMsVUFBRDtBQUFBLElBQ0UsT0FBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gseUJBQXlCO0FBQUEsTUFDdkIsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BV1gsUUFBUSxHQUFHLFlBQVksY0FBYyxvQ0FBQyxTQUFELE9BRXRDLG9DQUFDLEtBQUQ7QUFBQSxJQUFLO0FBQUEsTUFDTCxvQ0FBQyxzQkFBRCxPQUNBLG9DQUFDLFFBQUQsT0FDQSxvQ0FBQyxxQ0FBRDtBQUFBLElBQ0UsVUFBUztBQUFBLElBQ1QsWUFBVztBQUFBLElBQ1gsWUFBVztBQUFBLElBQ1gsT0FBTyxFQUFFLFlBQVk7QUFBQSxJQUNyQixhQUFhLEVBQUUsT0FBTyxXQUFXLFVBQVU7QUFBQSxJQUMzQyxTQUFTO0FBQUEsS0FDViw2REFDMkQsTUFHNUQsb0NBQUMsaUNBQUQsT0FDQSxvQ0FBQyx1QkFBRCxPQUMyQyxvQ0FBQywwQkFBRDtBQUFBOzs7QUU1Ym5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxvQkFBNkI7QUFFZCx5QkFBeUI7QUFDdEMsU0FDRSxvQ0FBQyxXQUFEO0FBQUEsSUFBUyxXQUFVO0FBQUEsS0FDakIsb0NBQUMsc0JBQUQ7QUFBQTs7O0FDTk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUtBLG9CQUFxRDtBQUd0Qyx5QkFBeUIsT0FBdUI7QUFDN0QsTUFBSSxhQUFhO0FBQ2pCLE1BQUksUUFBc0MsMENBQVksZ0JBQ2xELFlBQ0EsMENBQVksU0FDWixVQUNBO0FBRUosUUFBTSxXQUFXO0FBRWpCLFFBQU0sU0FBUztBQUNmLFFBQU0sS0FBSyxPQUFPO0FBQ2xCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRCxNQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxJQUFhLGVBQWEsVUFBVTtBQUFBLEtBQ2pELG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUFrQyxxQkFDaEQsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQWtDLHNCQUMxQixLQUNuQixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBeUIscUJBQ3pDLG9DQUFDLE1BQUQsT0FBUyx1QkFBb0IsS0FDN0Isb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQTBCLE1BRTVDLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUFrQywrQkFHbkQsb0NBQUMsU0FBRCxNQUNFLG9DQUFDLG9CQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixRQUFPO0FBQUEsSUFDUCxlQUFhLFVBQVU7QUFBQSxLQUV2QixvQ0FBQyxZQUFEO0FBQUEsSUFBVSxXQUFVO0FBQUEsS0FDbEIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsV0FBVTtBQUFBLElBQ1YsYUFBWTtBQUFBLElBQ1osVUFBUTtBQUFBLE9BR1osb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsV0FBVTtBQUFBLElBQ1YsYUFBYTtBQUFBLElBQ2IsT0FBTztBQUFBLElBQ1AsVUFBUTtBQUFBLE9BSVosb0NBQUMsVUFBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLEtBQ1gsWUFJSCxvQ0FBQyxLQUFELE1BQUksMENBQVksU0FBUSxXQUFXLFVBQVUsMERBQUUsYUFFakQsb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBRVYsZUFBYSxVQUFVO0FBQUEsS0FFdkIsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQWtDLHVEQUloRCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBa0MsNENBS2pELG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsSUFBWSxJQUFHO0FBQUEsS0FBd0I7QUFBQTs7O0FEbkZ4RCxJQUFJLFNBQXlCLE9BQU8sRUFBRSxjQUFjO0FBQ3pELE1BQUksV0FBVyxNQUFNLFFBQVE7QUFDN0IsTUFBSSxRQUFRLFNBQVMsSUFBSTtBQUN6QixNQUFJLE9BQU8sU0FBUyxJQUFJO0FBSXhCLFFBQU0sVUFBVTtBQUNoQixRQUFNLFVBQVU7QUFDaEIsUUFBTSxNQUFNO0FBRVosTUFBSSxNQUFNLE1BQU0sTUFBTSxHQUFHLGFBQWEscUJBQXFCO0FBQUEsSUFDekQsUUFBUTtBQUFBLElBQ1IsTUFBTSxLQUFLLFVBQVU7QUFBQSxNQUNuQjtBQUFBLE1BQ0EsUUFBUSxFQUFFO0FBQUEsTUFDVixTQUFTO0FBQUE7QUFBQSxJQUVYLFNBQVM7QUFBQSxNQUNQLGdCQUFnQjtBQUFBO0FBQUE7QUFLcEIsU0FBTyxJQUFJO0FBQUE7QUFHRSxrQkFBa0I7QUFDL0IsU0FBTyxvQ0FBQyxpQkFBRDtBQUFBLElBQWlCLE1BQUs7QUFBQSxJQUFHLE9BQU07QUFBQTtBQUFBOzs7QUUvQnhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBMEI7QUFFWCxvQkFBb0I7QUFDakMsUUFBTSxTQUFTO0FBQ2YsUUFBTSxLQUFLLE9BQU87QUFDbEIsU0FBTztBQUFBOzs7QUNMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQXFCO0FBRU4sOEJBQThCO0FBQzNDLFNBQ0Usb0NBQUMsV0FBRDtBQUFBLElBQVMsV0FBVTtBQUFBLEtBQ2pCLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsS0FBTztBQUFBOzs7QUNMdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7OztBQ0FBOzs7QUNBQTtBQUFBLG9CQUFxQjtBQU9OLHdCQUF3QixPQUFzQjtBQUMzRCxRQUFNLGFBQWEsNkJBQTZCLE1BQU0sT0FBTyxNQUFNO0FBQ25FLFNBQ0Usb0NBQUMsb0JBQUQ7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLFdBQVU7QUFBQSxLQUVWLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUNiLE1BQU0sUUFFVCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBZ0IsTUFBTTtBQUFBOzs7QURkN0Isd0JBQXdCO0FBQ3JDLFFBQU0sY0FBNkQ7QUFBQSxJQUNqRSxFQUFFLElBQUksR0FBRyxNQUFNLFFBQVEsT0FBTztBQUFBLElBQzlCLEVBQUUsSUFBSSxHQUFHLE1BQU0saUJBQVksT0FBTztBQUFBLElBQ2xDLEVBQUUsSUFBSSxHQUFHLE1BQU0sb0JBQWUsT0FBTztBQUFBLElBQ3JDLEVBQUUsSUFBSSxHQUFHLE1BQU0sZUFBVSxPQUFPO0FBQUEsSUFDaEMsRUFBRSxJQUFJLEdBQUcsTUFBTSxhQUFRLE9BQU87QUFBQSxJQUM5QixFQUFFLElBQUksR0FBRyxNQUFNLGFBQWEsT0FBTztBQUFBLElBQ25DLEVBQUUsSUFBSSxHQUFHLE1BQU0sZ0JBQVcsT0FBTztBQUFBLElBQ2pDLEVBQUUsSUFBSSxHQUFHLE1BQU0sa0JBQWEsT0FBTztBQUFBLElBQ25DLEVBQUUsSUFBSSxHQUFHLE1BQU0sVUFBVSxPQUFPO0FBQUEsSUFDaEMsRUFBRSxJQUFJLElBQUksTUFBTSxjQUFTLE9BQU87QUFBQSxJQUNoQyxFQUFFLElBQUksSUFBSSxNQUFNLG9CQUFlLE9BQU87QUFBQSxJQUN0QyxFQUFFLElBQUksSUFBSSxNQUFNLHdCQUFjLE9BQU87QUFBQSxJQUNyQyxFQUFFLElBQUksSUFBSSxNQUFNLDBCQUFnQixPQUFPO0FBQUEsSUFDdkMsRUFBRSxJQUFJLElBQUksTUFBTSxTQUFTLE9BQU87QUFBQSxJQUNoQyxFQUFFLElBQUksSUFBSSxNQUFNLFVBQVUsT0FBTztBQUFBO0FBR25DLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQThDLFlBQ2pELEtBQ1Qsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQXlCLHFCQUF3QixLQUNqRSxvQ0FBQyxNQUFELE9BQVMsZ0JBRVgsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1osWUFBWSxJQUFJLENBQUMsT0FBTyxRQUFRO0FBQy9CLFdBQ0Usb0NBQUMsZ0JBQUQ7QUFBQSxNQUNFO0FBQUEsTUFDQSxNQUFNLE1BQU07QUFBQSxNQUNaLE9BQU8sTUFBTTtBQUFBO0FBQUE7QUFBQTs7O0FEakNaLG9CQUFvQjtBQUNqQyxTQUNFLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxjQUFEO0FBQUE7OztBREhTLGdCQUFnQjtBQUM3QixTQUFPLG9DQUFDLFVBQUQ7QUFBQTs7O0FJSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU0sVUFBUyxNQUFNO0FBRzFCLFFBQU0sVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUNoQixTQUFPLElBQUksU0FBUyxTQUFTO0FBQUEsSUFDM0IsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLE1BQ1AsZ0JBQWdCO0FBQUEsTUFDaEIsZUFBZTtBQUFBLE1BQ2YsVUFBVTtBQUFBO0FBQUE7QUFBQTs7O0FDL0NoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTSxVQUFTLE1BQU07QUFHMUIsUUFBTSxZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVsQixTQUFPLElBQUksU0FBUyxXQUFXO0FBQUEsSUFDN0IsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLE1BQ1AsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBOzs7QUNoQnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQXlEO0FBQ3pELHNCQUFnRDs7O0FDRGhEO0FBQUEsd0JBQXVCOzs7QUNBdkI7QUFBTyxJQUFNLFNBQVM7QUFBQSxFQUNwQixZQUFZO0FBQUEsRUFFWixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUE7OztBREZWLHVCQUE0QjtBQUdyQixJQUFNLGVBQWUsSUFBSSwwQkFBVztBQUVwQyxJQUFNLFVBQVUsOEJBQWdCO0FBRWhDLGdCQUFnQixRQUFhO0FBQ2xDLFNBQU8sUUFBUSxNQUFNO0FBQUE7QUFJaEIsSUFBTSxnQkFBZ0IsSUFBSSwwQkFBVyxpQ0FDdkMsU0FEdUM7QUFBQSxFQUUxQyxRQUFRO0FBQUE7QUFLSCxJQUFNLFlBQVksQ0FBQyxhQUFhLFVBQ3JDLGFBQWEsZ0JBQWdCOzs7QURuQi9CLG9CQUE2Qjs7Ozs7O0FHSjdCOzs7QUNBQTtBQUFBLG9CQUFxQjtBQU9OLGdCQUFnQixPQUFzQjtBQUNuRCxTQUNFLG9DQUFDLG9CQUFEO0FBQUEsSUFDRSxJQUFJLE1BQU07QUFBQSxJQUNWLFdBQVU7QUFBQSxLQUVULE1BQU0sT0FDUCxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxlQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxTQUFRO0FBQUEsSUFDUixPQUFNO0FBQUEsS0FFTixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxVQUFTO0FBQUEsSUFDVCxHQUFFO0FBQUEsSUFDRixVQUFTO0FBQUE7QUFBQTs7O0FEVkosa0JBQWtCLE9BQW9CO0FBQ25ELFNBQ0UsMERBQ0Usb0NBQUMsUUFBRDtBQUFBLElBQ0UsT0FBTztBQUFBLE1BQ0wsaUJBQWlCLGdGQUFnRixNQUFNO0FBQUE7QUFBQSxJQUV6RyxXQUFXLFdBQVcsTUFBTTtBQUFBLEtBRTVCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNYLEtBQ0EsTUFBTSxVQUdULG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUNWLE1BQU0sV0FFUixNQUFNLGNBQ0wsb0NBQUMsUUFBRDtBQUFBLElBQVEsT0FBTyxNQUFNO0FBQUEsSUFBYSxJQUFJLE1BQU07QUFBQSxPQUU1QztBQUFBOzs7QUVuQ1o7QUFTQSxvQkFBK0M7QUEyQmhDLGlCQUFpQixPQUFtQjtBQUNqRCxNQUFJLGFBQWE7QUFDakIsTUFBSSxRQUFzQywwQ0FBWSxnQkFDbEQsWUFDQSwwQ0FBWSxTQUNaLFVBQ0E7QUFFSixRQUFNLFdBQVc7QUFFakIsUUFBTSxTQUFTO0FBQ2YsUUFBTSxLQUFLLE9BQU87QUFFbEIsU0FDRSxvQ0FBQyxXQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFVO0FBQUEsS0FFVixvQ0FBQyxTQUFEO0FBQUEsSUFBTyxXQUFVO0FBQUEsS0FDZixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FDWCxNQUFNLFVBRVQsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQVEsTUFBTSxPQUUzQixvQ0FBQyxvQkFBRDtBQUFBLElBQ0UsUUFBTztBQUFBLElBQ1AsV0FBVTtBQUFBLElBQ1YsZUFBYSxVQUFVO0FBQUEsS0FFdkIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQVEsV0FBVTtBQUFBLEtBQVUsVUFHM0Msb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsYUFBWTtBQUFBLElBQ1osV0FBVTtBQUFBLElBQ1YsVUFBUTtBQUFBLE9BR1osb0NBQUMsVUFBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLEtBRVYsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQXNCLGNBQ3RDLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE9BQU07QUFBQSxJQUNOLE1BQUs7QUFBQSxJQUNMLFNBQVE7QUFBQSxJQUNSLFFBQU87QUFBQSxLQUVQLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLGVBQWM7QUFBQSxJQUNkLGdCQUFlO0FBQUEsSUFDZixhQUFhO0FBQUEsSUFDYixHQUFFO0FBQUEsUUFJUixvQ0FBQyxLQUFELE1BQUksMENBQVksU0FBUSxXQUFXLFVBQVUsMERBQUUsYUFFakQsb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBRVYsZUFBYSxVQUFVO0FBQUEsS0FFdkIsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQWtDO0FBQUE7OztBTDlGekQsSUFBTSxhQUFxQztBQUFBLEVBQ3pDLE9BQU87QUFBQSxJQUVMLElBQUksQ0FBQyxFQUFFLGVBQ0wsb0NBQUMsTUFBRDtBQUFBLE1BQUksV0FBVTtBQUFBLE9BQStCO0FBQUEsSUFJL0MsTUFBTSxDQUFDLEVBQUUsT0FBTyxlQUFlO0FBQzdCLFlBQU0sU0FBVSxpQ0FBTyxTQUFRLElBQUksV0FBVyxVQUMxQyxXQUNBO0FBQ0osYUFDRSxvQ0FBQyxLQUFEO0FBQUEsUUFDRSxNQUFNLCtCQUFPO0FBQUEsUUFDYjtBQUFBLFFBQ0EsV0FBVTtBQUFBLFNBR1Q7QUFBQTtBQUFBO0FBQUE7QUFPWCx1QkFBNkIsRUFBRSxVQUEyQjtBQUd4RCxRQUFNLGNBQWMsTUFBTSxZQUFZLE1BQ3BDO0FBQUEsTUFFQSxFQUFFLE1BQU0sT0FBTztBQUdqQixTQUFPLEVBQUU7QUFBQTtBQUdKLElBQU0sUUFBcUIsQ0FBQyxFQUFFLE9BQU8seUNBQXNCO0FBQ2hFLE1BQUksQ0FBQyxNQUFNO0FBQ1QsV0FBTztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsYUFDRTtBQUFBLE1BQ0YsWUFBWSwyQkFBMkI7QUFBQTtBQUFBO0FBSTNDLE1BQUksRUFBRSxTQUFTLEtBQUssWUFBWTtBQUVoQyxTQUFPO0FBQUEsSUFDTCxPQUFPLHVCQUF1QixLQUFLLFlBQVksR0FBRztBQUFBLElBQ2xELGFBQWEsS0FBSyxZQUFZLEdBQUc7QUFBQSxJQUNqQyxZQUFZLEtBQUssWUFBWSxHQUFHO0FBQUE7QUFBQTtBQUlyQixvQkFBb0I7QUFwRW5DO0FBcUVFLE1BQUksRUFBRSxnQkFBZ0I7QUFDdEIsTUFBSSxPQUFPLFlBQVk7QUFDdkIsTUFBSSxZQUFZLG9DQUNkLDZCQUFRLElBQUksS0FBSyxLQUFLLGdCQUFnQixJQUN0QyxJQUFJLFFBQ0osRUFBRSxXQUFXO0FBR2YsTUFBSSxXQUNGLHdCQUNBLDRCQUFPLElBQUksS0FBSyxLQUFLLGdCQUFnQjtBQUN2QyxVQUFRLElBQUk7QUFDWixVQUFRLElBQUk7QUFFWixTQUNFLDBEQUNFLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLFNBQVMsS0FBSztBQUFBLElBQ2QsVUFBVTtBQUFBLElBQ1YsYUFBWTtBQUFBLElBQ1osV0FBVTtBQUFBLElBQ1YsUUFBUSxLQUFLO0FBQUEsTUFFZixvQ0FBQyxXQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFVO0FBQUEsS0FFVCxZQUFLLGFBQUwsbUJBQWUsVUFBUyxJQUNyQixLQUFLLFNBQVMsSUFBSSxDQUFDLGVBQ2pCLG9DQUFDLDRCQUFEO0FBQUEsSUFDRSxLQUFLLFdBQVc7QUFBQSxJQUNoQixPQUFPLENBQUM7QUFBQSxJQUNSO0FBQUEsUUFHSixPQUVOLG9DQUFDLFdBQUQsTUFDRyxLQUNELG9DQUFDLFNBQUQ7QUFBQSxJQUNFLFNBQVE7QUFBQSxJQUNSLE1BQUs7QUFBQSxJQUNMLFlBQVc7QUFBQSxJQUNYLFVBQVM7QUFBQTtBQUFBOzs7QU1oSG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEscUJBQTBDO0FBSzFDLG9CQUE2Qjs7Ozs7O0FBSTdCLHlCQUErQjtBQUM3QixRQUFNLFlBQVksTUFBTSxZQUFZLE1BQ2xDO0FBQUE7QUFHRixTQUFPLEVBQUU7QUFBQTtBQUdKLElBQU0sUUFBTyxNQUFNO0FBQ3hCLFFBQU0sRUFBRSxjQUFjO0FBRXRCLFNBQU87QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLGFBQ0U7QUFBQSxJQUNGLFVBQ0U7QUFBQSxJQUNGLFlBQVksMkJBQTJCO0FBQUE7QUFBQTtBQUk1QixnQkFBZ0I7QUFDN0IsUUFBTSxFQUFFLGNBQWM7QUFFdEIsU0FDRSwwREFDRSxvQ0FBQyxVQUFEO0FBQUEsSUFDRSxTQUFRO0FBQUEsSUFDUixVQUFTO0FBQUEsSUFDVCxhQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsSUFDVixRQUFRO0FBQUEsTUFHVixvQ0FBQyxXQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFVO0FBQUEsS0FFVixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWix3Q0FBVyxVQUFTLElBQ2pCLFVBQVUsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVc7QUFuRHBEO0FBb0RnQiwrQ0FBQyxPQUFEO0FBQUEsTUFDRSxLQUFLLEtBQUs7QUFBQSxNQUNWLFdBQVU7QUFBQSxPQUVWLG9DQUFDLHFCQUFEO0FBQUEsTUFBTSxJQUFJLEtBQUssS0FBSztBQUFBLE9BQ2xCLG9DQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9DQUFDLE9BQUQ7QUFBQSxNQUNFLFdBQVU7QUFBQSxNQUNWLEtBQUssT0FBTyxLQUFLLGNBQWMsTUFBTSxLQUFLO0FBQUEsTUFDMUMsS0FBSTtBQUFBLFVBSVYsb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVTtBQUFBLE9BQ2Isb0NBQUMscUJBQUQ7QUFBQSxNQUFNLElBQUksS0FBSyxLQUFLO0FBQUEsT0FDbEIsb0NBQUMsTUFBRDtBQUFBLE1BQUksV0FBVTtBQUFBLE9BQ1gsS0FBSyxTQUdWLG9DQUFDLEtBQUQ7QUFBQSxNQUFHLFdBQVU7QUFBQSxPQUNWLFlBQUssWUFBTCxtQkFBYyxVQUFTLElBQ3BCLEtBQUssUUFBUSxJQUFJLENBQUMsZUFDaEIsb0NBQUMsNEJBQUQ7QUFBQSxNQUNFLEtBQUssV0FBVztBQUFBLE1BQ2hCLE9BQU8sQ0FBQztBQUFBLFVBSVosT0FFTixvQ0FBQyxRQUFEO0FBQUEsTUFBUSxJQUFJLEtBQUssS0FBSztBQUFBLE1BQVMsT0FBTTtBQUFBO0FBQUEsT0FJM0MsUUFJUixvQ0FBQyxTQUFEO0FBQUEsSUFDRSxTQUFRO0FBQUEsSUFDUixNQUFLO0FBQUEsSUFDTCxZQUFXO0FBQUEsSUFDWCxVQUFTO0FBQUE7QUFBQTs7O0FDOUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFnRTtBQVN6RCxJQUFJLFVBQXlCLE9BQU8sRUFBRSxjQUFjO0FBQ3pELE1BQUksV0FBVyxNQUFNLFFBQVE7QUFDN0IsTUFBSSxRQUFRLFNBQVMsSUFBSTtBQUN6QixNQUFJLE9BQU8sU0FBUyxJQUFJO0FBQ3hCLE1BQUksVUFBVSxTQUFTLElBQUk7QUFJM0IsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sVUFBVTtBQUNoQixRQUFNLE1BQU07QUFFWixNQUFJLE1BQU0sTUFBTSxNQUFNLEdBQUcsYUFBYSxxQkFBcUI7QUFBQSxJQUN6RCxRQUFRO0FBQUEsSUFDUixNQUFNLEtBQUssVUFBVTtBQUFBLE1BQ25CO0FBQUEsTUFDQSxZQUFZO0FBQUEsTUFDWixRQUFRLEVBQUU7QUFBQSxNQUNWLFNBQVM7QUFBQTtBQUFBLElBRVgsU0FBUztBQUFBLE1BQ1AsZ0JBQWdCO0FBQUE7QUFBQTtBQUtwQixTQUFPLElBQUk7QUFBQTtBQUdOLElBQU0sUUFBTyxNQUFNO0FBQ3hCLFNBQU87QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLGFBQ0U7QUFBQSxJQUNGLFVBQ0U7QUFBQSxJQUNGLFlBQVksMkJBQTJCO0FBQUE7QUFBQTtBQUk1QixtQkFBbUI7QUFDaEMsTUFBSSxhQUFhO0FBQ2pCLE1BQUksUUFBc0MsMENBQVksZ0JBQ2xELFlBQ0EsMENBQVksU0FDWixVQUNBO0FBQ0osUUFBTSxXQUFXO0FBRWpCLFNBQ0UsMERBQ0Usb0NBQUMsV0FBRDtBQUFBLElBQVMsV0FBVTtBQUFBLEtBQ2pCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUFnRSx5QkFHOUUsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsS0FBRCxNQUFHLG9IQUlILG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxRQUFPO0FBQUEsSUFDUCxlQUFjO0FBQUEsSUFDZCxnQkFBZTtBQUFBLElBQ2YsYUFBWTtBQUFBLElBQ1osU0FBUTtBQUFBLElBQ1IsV0FBVTtBQUFBLEtBRVYsb0NBQUMsUUFBRDtBQUFBLElBQ0UsZUFBYztBQUFBLElBQ2QsZ0JBQWU7QUFBQSxJQUNmLGFBQVk7QUFBQSxJQUNaLEdBQUU7QUFBQSxNQUVKLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLGVBQWM7QUFBQSxJQUNkLGdCQUFlO0FBQUEsSUFDZixhQUFZO0FBQUEsSUFDWixHQUFFO0FBQUEsT0FHTixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBZ0QseURBQ1Isb0NBQUMsTUFBRCxPQUFVLEtBQUkseUJBSXZFLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxLQUVWLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLFFBQU87QUFBQSxJQUNQLGVBQWM7QUFBQSxJQUNkLGdCQUFlO0FBQUEsSUFDZixhQUFZO0FBQUEsSUFDWixTQUFRO0FBQUEsSUFDUixXQUFVO0FBQUEsS0FFVixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxlQUFjO0FBQUEsSUFDZCxnQkFBZTtBQUFBLElBQ2YsYUFBWTtBQUFBLElBQ1osR0FBRTtBQUFBLE9BR04sb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQTBHLHNCQUkzSCxvQ0FBQyxLQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsS0FFVixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxRQUFPO0FBQUEsSUFDUCxlQUFjO0FBQUEsSUFDZCxnQkFBZTtBQUFBLElBQ2YsYUFBWTtBQUFBLElBQ1osU0FBUTtBQUFBLElBQ1IsV0FBVTtBQUFBLEtBRVYsb0NBQUMsUUFBRDtBQUFBLElBQ0UsZUFBYztBQUFBLElBQ2QsZ0JBQWU7QUFBQSxJQUNmLGFBQVk7QUFBQSxJQUNaLEdBQUU7QUFBQSxPQUdOLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUF3RywyQkFPL0gsb0NBQUMsU0FBRDtBQUFBLElBQU8sSUFBRztBQUFBLElBQVMsV0FBVTtBQUFBLEtBQzNCLG9DQUFDLHFCQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixRQUFPO0FBQUEsSUFDUCxlQUFhLFVBQVU7QUFBQSxLQUV2QixvQ0FBQyxZQUFELE1BQ0Usb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQXVDLG1CQUdwRCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsSUFBTyxXQUFVO0FBQUEsS0FBb0IsY0FHcEQsb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsV0FBVTtBQUFBLElBQ1YsYUFBWTtBQUFBLElBQ1osVUFBUTtBQUFBLE9BR1osb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQVEsV0FBVTtBQUFBLEtBQWtCLGVBR25ELG9DQUFDLFNBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLElBQUc7QUFBQSxJQUNILFdBQVU7QUFBQSxJQUNWLGFBQVk7QUFBQSxJQUNaLFVBQVE7QUFBQSxPQUlaLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFNBQVE7QUFBQSxJQUFVLFdBQVU7QUFBQSxLQUFpQixpQkFHcEQsb0NBQUMsWUFBRDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsV0FBVTtBQUFBLElBQ1YsYUFBWTtBQUFBLElBQ1osVUFBUTtBQUFBLE9BSVosb0NBQUMsVUFBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLEtBQ1gsWUFJSCxvQ0FBQyxLQUFELE1BQUksMENBQVksU0FBUSxXQUFXLFVBQVUsMERBQUUsYUFFakQsb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBRVYsZUFBYSxVQUFVO0FBQUEsS0FFdkIsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQXdCLHlDQUl0QyxvQ0FBQyxLQUFELE1BQUcsK0RBQ0gsb0NBQUMscUJBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxJQUEyQixJQUFHO0FBQUEsS0FBSSxrQkFPeEQsb0NBQUMsU0FBRDtBQUFBLElBQ0UsU0FBUTtBQUFBLElBQ1IsTUFBSztBQUFBLElBQ0wsWUFBVztBQUFBLElBQ1gsVUFBUztBQUFBO0FBQUE7OztBQ3ZPakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBZ0U7OztBQ0FoRTtBQVVlLGFBQWEsT0FBbUI7QUFDN0MsU0FDRSxvQ0FBQyxXQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFVO0FBQUEsS0FFVixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FDWCxNQUFNLFVBRVQsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQVEsTUFBTSxPQUUzQixvQ0FBQyxRQUFEO0FBQUEsSUFBUSxPQUFPLE1BQU07QUFBQSxJQUFZLElBQUksTUFBTTtBQUFBO0FBQUE7OztBQ3RCbkQ7QUFjZSxjQUFjLE9BQW9CO0FBQy9DLFNBQ0UsMERBQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQWtDLHNCQUMvQyxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBb0QsT0FDNUQsS0FDSixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBMEgsa0NBRWxJLEtBQUksYUFDRixLQUNWLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUEwSCxzQ0FFbkksTUFJVCxvQ0FBQyxLQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsS0FFWDtBQUFBOzs7Ozs7QUY1QkosSUFBSSxVQUF5QixPQUFPLEVBQUUsY0FBYztBQUN6RCxNQUFJLFdBQVcsTUFBTSxRQUFRO0FBQzdCLE1BQUksUUFBUSxTQUFTLElBQUk7QUFDekIsTUFBSSxPQUFPLFNBQVMsSUFBSTtBQUN4QixNQUFJLFVBQVUsU0FBUyxJQUFJO0FBQzNCLE1BQUksUUFBUSxTQUFTLElBQUk7QUFJekIsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sVUFBVTtBQUNoQixRQUFNLE1BQU07QUFFWixNQUFJLE1BQU0sTUFBTSxNQUFNLEdBQUcsYUFBYSxxQkFBcUI7QUFBQSxJQUN6RCxRQUFRO0FBQUEsSUFDUixNQUFNLEtBQUssVUFBVTtBQUFBLE1BQ25CO0FBQUEsTUFDQSxZQUFZO0FBQUEsTUFDWixRQUFRLEVBQUUsU0FBa0I7QUFBQSxNQUM1QixTQUFTO0FBQUE7QUFBQSxJQUVYLFNBQVM7QUFBQSxNQUNQLGdCQUFnQjtBQUFBO0FBQUE7QUFLcEIsU0FBTyxJQUFJO0FBQUE7QUFHTixJQUFNLFFBQU8sTUFBTTtBQUN4QixTQUFPO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUEsSUFDRixVQUNFO0FBQUEsSUFDRixZQUFZLDJCQUEyQjtBQUFBO0FBQUE7QUFJNUIsa0JBQWtCO0FBQy9CLE1BQUksYUFBYTtBQUNqQixNQUFJLFFBQXNDLDBDQUFZLGdCQUNsRCxZQUNBLDBDQUFZLFNBQ1osVUFDQTtBQUNKLFFBQU0sV0FBVztBQUVqQixTQUNFLDBEQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLE9BQU87QUFBQSxNQUNMLGlCQUFpQixTQUFTO0FBQUE7QUFBQSxJQUU1QixXQUFVO0FBQUEsS0FFVixvQ0FBQyxNQUFEO0FBQUEsSUFDRSxTQUFRO0FBQUEsSUFFUixNQUFLO0FBQUEsSUFFTCxhQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsSUFDVixhQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsSUFDVixRQUFPO0FBQUEsT0FHWCxvQ0FBQyxXQUFEO0FBQUEsSUFBUyxXQUFVO0FBQUEsS0FDakIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQWdFLHNCQUc5RSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxLQUFELE1BQUcsZ09BSXNCLE1BRXpCLG9DQUFDLEtBQUQsTUFBRyx3S0FLSCxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBd0IsZ0NBR3RDLG9DQUFDLEtBQUQsTUFBRyxnUkFPSCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBWSw4RkFJekIsb0NBQUMsS0FBRCxNQUFHLG9EQUNnRCxLQUNqRCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsSUFBc0IsTUFBSztBQUFBLEtBQTBCLGlCQUU5RCx3S0FHOEMsS0FDbEQsb0NBQUMsS0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLEtBQ04sZ0JBRUksS0FBSSxpQkFDSyxLQUNkLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxLQUNOLGtCQUVJLEtBQUksa0JBQ00sS0FDZixvQ0FBQyxLQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsS0FDTixhQUVJLEtBQUksZUFHWCxvQ0FBQyxLQUFELE1BQUcsMkxBS0gsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQXdCLDhCQUN0QyxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBbUIsa0dBSWhDLG9DQUFDLEtBQUQsTUFBRyxvSkFLSCxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBa0IsMkNBRTFCLEtBQ04sb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQ1osb0NBQUMsTUFBRCxNQUFJLHNEQUNKLG9DQUFDLE1BQUQsTUFBSSx3QkFDSixvQ0FBQyxNQUFELE1BQUksNkNBQ0osb0NBQUMsTUFBRCxNQUFJLDRCQUlWLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLElBQUc7QUFBQSxJQUFTLFdBQVU7QUFBQSxLQUMzQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBNkIsV0FDM0Msb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQ1osb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQVMsMEVBSXRCLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNaLG9DQUFDLFVBQUQsTUFBUSxvQkFBd0Isb0JBQ2hDLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxLQUNOLDRCQUlILG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNaLG9DQUFDLFVBQUQsTUFBUSwrQkFBbUMsOEJBQy9CLEtBQ1osb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLElBQWlCLE1BQUs7QUFBQSxLQUEwQix1QkFJL0Qsb0NBQUMsTUFBRCxNQUNFLG9DQUFDLFVBQUQsTUFBUSxnQkFBb0IseUJBRTlCLG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxVQUFELE1BQVEsYUFBYyx5QkFFeEIsb0NBQUMsTUFBRCxNQUNFLG9DQUFDLFVBQUQsTUFBUSxnQkFBb0IseUJBRTlCLG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxVQUFELE1BQVEsb0JBQWtCLHlCQUU1QixvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsVUFBRCxNQUFRLGVBQW1CLDJCQUlqQyxvQ0FBQyxxQkFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsUUFBTztBQUFBLElBQ1AsZUFBYSxVQUFVO0FBQUEsS0FFdkIsb0NBQUMsWUFBRCxNQUNFLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUF1QyxnQ0FHcEQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQU8sV0FBVTtBQUFBLEtBQW9CLGNBR3BELG9DQUFDLFNBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLElBQUc7QUFBQSxJQUNILFdBQVU7QUFBQSxJQUNWLGFBQVk7QUFBQSxJQUNaLFVBQVE7QUFBQSxPQUdaLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFNBQVE7QUFBQSxJQUFRLFdBQVU7QUFBQSxLQUFrQixlQUduRCxvQ0FBQyxTQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxJQUFHO0FBQUEsSUFDSCxXQUFVO0FBQUEsSUFDVixhQUFZO0FBQUEsSUFDWixVQUFRO0FBQUEsT0FJWixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsSUFBVSxXQUFVO0FBQUEsS0FBaUIscUNBR3BELG9DQUFDLFVBQUQ7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUNILE1BQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxLQUVWLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFZLGNBQzFCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFhLGVBQzNCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFRLGFBQ3RCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFjLGdCQUM1QixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxPQUFNO0FBQUEsS0FBWSxvQkFDMUIsb0NBQUMsVUFBRDtBQUFBLElBQVEsT0FBTTtBQUFBLEtBQWEsZUFDM0Isb0NBQUMsVUFBRDtBQUFBLElBQVEsT0FBTTtBQUFBLEtBQWEsV0FDM0Isb0NBQUMsVUFBRDtBQUFBLElBQVEsT0FBTTtBQUFBLEtBQWEseUJBSS9CLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxLQUNYLFlBSUgsb0NBQUMsS0FBRCxNQUFJLDBDQUFZLFNBQVEsV0FBVyxVQUFVLDBEQUFFLGFBRWpELG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUVWLGVBQWEsVUFBVTtBQUFBLEtBRXZCLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUF3QixrQ0FFdEMsb0NBQUMsS0FBRCxNQUFHLHFGQUlILG9DQUFDLHFCQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsSUFBMkIsSUFBRztBQUFBLEtBQUksa0JBTXhELG9DQUFDLEtBQUQ7QUFBQSxJQUNFLFNBQVE7QUFBQSxJQUNSLE1BQUs7QUFBQSxJQUNMLFlBQVc7QUFBQSxJQUNYLFVBQVM7QUFBQTtBQUFBOzs7QUdwU2pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFNTzs7O0FDTlA7QUFBQSxxQkFBMEQ7Ozs7Ozs7OztBQWUzQyxlQUFjLE9BQW9CO0FBQy9DLE1BQUksYUFBYTtBQUNqQixNQUFJLFFBQXNDLDBDQUFZLGdCQUNsRCxZQUNBLDBDQUFZLFNBQ1osVUFDQTtBQUVKLFNBQ0UsMERBQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQStDLG9DQUUzRCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBeUkseUNBSzNKLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUFjLDBDQUV6QixvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsSUFBWSxNQUFLO0FBQUEsS0FDM0IsS0FBSSxhQUVGLE9BSVQsb0NBQUMscUJBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFFBQU87QUFBQSxJQUNQLGVBQWEsVUFBVTtBQUFBLEtBRXZCLG9DQUFDLFlBQUQsTUFDRSxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBa0MsMEJBRy9DLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFNBQVE7QUFBQSxJQUFPLFdBQVU7QUFBQSxLQUFvQixjQUdwRCxvQ0FBQyxTQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxJQUFHO0FBQUEsSUFDSCxXQUFVO0FBQUEsSUFDVixhQUFZO0FBQUEsSUFDWixVQUFRO0FBQUEsT0FHWixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FBa0IsZUFHbkQsb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsV0FBVTtBQUFBLElBQ1YsYUFBWTtBQUFBLElBQ1osVUFBUTtBQUFBLE9BR1osb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQVUsV0FBVTtBQUFBLEtBQWlCLGlCQUdwRCxvQ0FBQyxTQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsSUFDVixhQUFZO0FBQUEsSUFDWixVQUFRO0FBQUEsT0FJWixvQ0FBQyxVQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsS0FDWCxZQUlILG9DQUFDLEtBQUQsTUFBSSwwQ0FBWSxTQUFRLFdBQVcsVUFBVSwwREFBRSxhQUVqRCxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFFVixlQUFhLFVBQVU7QUFBQSxLQUV2QixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBd0IsaUNBRXRDLG9DQUFDLEtBQUQsTUFBRyxpREFDSCxvQ0FBQyxxQkFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLElBQTJCLElBQUc7QUFBQSxLQUFJLGlCQU10RCxvQ0FBQyxXQUFEO0FBQUEsSUFBUyxXQUFVO0FBQUEsS0FDakIsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQTBGLDJCQUd4RyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxLQUFEO0FBQUEsSUFBRyxNQUFLO0FBQUEsS0FDTixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixLQUFLO0FBQUEsT0FHVCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxNQUFLO0FBQUEsS0FDTixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixLQUFLO0FBQUE7QUFBQTs7O0FEekduQix5QkFBK0I7QUFDN0IsUUFBTSxZQUFZLE1BQU0sWUFBWSxNQUNsQztBQUFBO0FBR0YsUUFBTSxZQUFZLE1BQU0sWUFBWSxNQUNsQztBQUFBO0FBR0YsU0FBTyxFQUFFLFdBQVc7QUFBQTtBQVVmLElBQU0sUUFBTyxNQUFNO0FBQ3hCLFNBQU87QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQTtBQUFBO0FBTVAsSUFBSSxVQUF5QixPQUFPLEVBQUUsY0FBYztBQUN6RCxNQUFJLFdBQVcsTUFBTSxRQUFRO0FBQzdCLE1BQUksUUFBUSxTQUFTLElBQUk7QUFDekIsTUFBSSxPQUFPLFNBQVMsSUFBSTtBQUN4QixNQUFJLFVBQVUsU0FBUyxJQUFJO0FBRzNCLFFBQU0sVUFBVTtBQUNoQixRQUFNLFVBQVU7QUFDaEIsUUFBTSxNQUFNO0FBRVosTUFBSSxNQUFNLE1BQU0sTUFBTSxHQUFHLGFBQWEscUJBQXFCO0FBQUEsSUFDekQsUUFBUTtBQUFBLElBQ1IsTUFBTSxLQUFLLFVBQVU7QUFBQSxNQUNuQjtBQUFBLE1BQ0EsWUFBWTtBQUFBLE1BQ1osUUFBUSxFQUFFO0FBQUEsTUFDVixTQUFTO0FBQUE7QUFBQSxJQUVYLFNBQVM7QUFBQSxNQUNQLGdCQUFnQjtBQUFBO0FBQUE7QUFLcEIsU0FBTyxJQUFJO0FBQUE7QUFHRSxpQkFBaUI7QUFDOUIsUUFBTSxFQUFFLFdBQVcsY0FBYztBQUVqQyxRQUFNLDJCQUEyQjtBQUFBLElBQy9CLE9BQU87QUFBQSxNQUNMLE9BQU8sQ0FBQyxVQUNOLG9DQUFDLE9BQUQ7QUFBQSxRQUFLLEtBQUssTUFBTTtBQUFBLFFBQU8sS0FBSyxNQUFNO0FBQUEsUUFBSyxXQUFXLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFLOUQsU0FDRSwwREFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxTQUFRO0FBQUEsSUFFUixNQUFLO0FBQUEsSUFFTCxhQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsSUFDVixhQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsSUFDVixRQUFPO0FBQUE7QUFBQTs7O0FFdkdmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBRUEscUJBQTJCO0FBR3BCLElBQU0sUUFBTyxNQUFNO0FBQ3hCLFNBQU87QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLGFBQ0U7QUFBQSxJQUNGLFVBQVU7QUFBQSxJQUNWLFlBQVksMkJBQTJCO0FBQUE7QUFBQTtBQUk1QixpQkFBaUI7QUFDOUIsU0FDRSwwREFDRSxvQ0FBQyxXQUFEO0FBQUEsSUFBUyxXQUFVO0FBQUEsS0FDakIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQWdFLHVCQUc5RSxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBd0IsZUFDdEMsb0NBQUMsS0FBRCxNQUFHLHNXQVFILG9DQUFDLEtBQUQsTUFBRyx1U0FPSCxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBd0IsbUJBQ3RDLG9DQUFDLEtBQUQsTUFBRyw0RUFJSCxvQ0FBQyxLQUFELE1BQUcseUxBS0gsb0NBQUMsS0FBRCxNQUFHLG9UQU9ILG9DQUFDLEtBQUQsTUFBRyxpU0FPSCxvQ0FBQyxLQUFELE1BQUcsc0pBS0gsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQXdCLDZCQUN0QyxvQ0FBQyxLQUFELE1BQUcsdURBQ0gsb0NBQUMsS0FBRCxNQUFHLDRFQUlILG9DQUFDLEtBQUQsTUFBRyx1TkFNSCxvQ0FBQyxLQUFELE1BQUcsa1RBT0gsb0NBQUMsS0FBRCxNQUFHLHVIQUlILG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUF3QiwrQkFDdEMsb0NBQUMsS0FBRCxNQUFHLGlNQUtILG9DQUFDLEtBQUQsTUFBRywrS0FLSCxvQ0FBQyxLQUFELE1BQUcsbUxBS0gsb0NBQUMsS0FBRCxNQUFHLDZFQUtMLG9DQUFDLHFCQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsSUFBbUIsSUFBRztBQUFBLEtBQ3BDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUs7QUFBQSxJQUFVLFdBQVU7QUFBQSxRQUdsQyxvQ0FBQyxLQUFEO0FBQUEsSUFDRSxTQUFRO0FBQUEsSUFDUixNQUFLO0FBQUEsSUFDTCxZQUFXO0FBQUEsSUFDWCxVQUFTO0FBQUE7QUFBQTs7O0FDeEhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTU87OztBQ05QO0FBQ0EscUJBQW9DO0FBUXJCLGNBQWMsT0FBb0I7QUFDL0MsUUFBTSxFQUFFLGNBQWM7QUFFdEIsUUFBTSwyQkFBMkI7QUFBQSxJQUMvQixPQUFPO0FBQUEsTUFDTCxPQUFPLENBQUMsVUFDTixvQ0FBQyxPQUFEO0FBQUEsUUFBSyxLQUFLLE1BQU07QUFBQSxRQUFPLEtBQUssTUFBTTtBQUFBLFFBQUssV0FBVyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBSzlELFNBQ0Usb0NBQUMsV0FBRDtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsV0FBVywrRkFDVCxNQUFNLFFBQVEsU0FBUyxLQUFLO0FBQUEsS0FHOUIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQ1gsVUFBVSxHQUFHLFFBRWhCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLEtBQUQsTUFBRyxzV0FRSCxvQ0FBQyxLQUFELE1BQUcsdVNBT0gsb0NBQUMscUJBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxJQUF1QyxJQUFHO0FBQUEsS0FBUyx1QkFDN0MsUUFjMUIsb0NBQUMsVUFBRDtBQUFBLElBQVEsV0FBVTtBQUFBLEtBQ2hCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxJQUFTLEtBQUssVUFBVSxHQUFHO0FBQUE7QUFBQTs7O0FEckNsRCx5QkFBK0I7QUFDN0IsUUFBTSxZQUFZLE1BQU0sWUFBWSxNQUNsQztBQUFBO0FBR0YsUUFBTSxZQUFZLE1BQU0sWUFBWSxNQUNsQztBQUFBO0FBSUYsUUFBTSxjQUFjLE1BQU0sWUFBWSxNQUNwQztBQUFBO0FBSUYsUUFBTSxlQUFlLE1BQU0sWUFBWSxNQUNyQztBQUFBO0FBR0YsU0FBTyxFQUFFLFdBQVcsV0FBVyxhQUFhO0FBQUE7QUFVdkMsSUFBTSxRQUFPLE1BQU07QUFDeEIsU0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBLElBQ0YsVUFBVTtBQUFBLElBQ1YsWUFBWSwyQkFBMkI7QUFBQTtBQUFBO0FBTXBDLElBQUksVUFBeUIsT0FBTyxFQUFFLGNBQWM7QUFDekQsTUFBSSxXQUFXLE1BQU0sUUFBUTtBQUM3QixNQUFJLFFBQVEsU0FBUyxJQUFJO0FBQ3pCLE1BQUksT0FBTyxTQUFTLElBQUk7QUFDeEIsTUFBSSxVQUFVLFNBQVMsSUFBSTtBQUczQixRQUFNLFVBQVU7QUFDaEIsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sTUFBTTtBQUVaLE1BQUksTUFBTSxNQUFNLE1BQU0sR0FBRyxhQUFhLHFCQUFxQjtBQUFBLElBQ3pELFFBQVE7QUFBQSxJQUNSLE1BQU0sS0FBSyxVQUFVO0FBQUEsTUFDbkI7QUFBQSxNQUNBLFlBQVk7QUFBQSxNQUNaLFFBQVEsRUFBRTtBQUFBLE1BQ1YsU0FBUztBQUFBO0FBQUEsSUFFWCxTQUFTO0FBQUEsTUFDUCxnQkFBZ0I7QUFBQTtBQUFBO0FBS3BCLFNBQU8sSUFBSTtBQUFBO0FBRUUsa0JBQWlCO0FBQzlCLFFBQU0sRUFBRSxXQUFXLFdBQVcsYUFBYSxpQkFBaUI7QUFDNUQsUUFBTSxXQUFXO0FBRWpCLFFBQU0sMkJBQTJCO0FBQUEsSUFDL0IsT0FBTztBQUFBLE1BQ0wsT0FBTyxDQUFDLFVBQ04sb0NBQUMsT0FBRDtBQUFBLFFBQUssS0FBSyxNQUFNO0FBQUEsUUFBTyxLQUFLLE1BQU07QUFBQSxRQUFLLFdBQVcsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUs5RCxTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLE9BQU87QUFBQSxNQUNMLGlCQUFpQixJQUNmLFdBQ0kscURBQ0Esd0ZBQ21DO0FBQUE7QUFBQSxJQUUzQyxXQUFVO0FBQUEsS0FFVixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxTQUFRO0FBQUEsSUFFUixNQUFLO0FBQUEsSUFFTCxhQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsSUFDVixhQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsSUFDVixRQUFPO0FBQUEsTUFHVCxvQ0FBQyxNQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsTUFDWCxvQ0FBQyxLQUFEO0FBQUEsSUFDRSxTQUFRO0FBQUEsSUFDUixNQUFLO0FBQUEsSUFDTCxZQUFXO0FBQUEsSUFDWCxVQUFTO0FBQUEsTUE2Rlgsb0NBQUMsV0FBRDtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsV0FBVTtBQUFBLEtBRVYsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQStGLG9CQUk3RyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDWiw0Q0FBYSxVQUFTLElBQ25CLDJDQUFhLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxlQUM1QixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxLQUFLLFdBQVc7QUFBQSxJQUNoQixXQUFVO0FBQUEsS0FFVixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxLQUFLLE9BQU8sV0FBVyxjQUFjLE1BQU0sS0FBSztBQUFBLElBQ2hELEtBQUssV0FBVztBQUFBLE1BRWxCLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUFhLFdBQVcsT0FBTSxNQUM1QyxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FDVixXQUFXLE1BQU0sTUFHcEIsb0NBQUMsS0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBTSxXQUFXO0FBQUEsS0FDbEIsZ0JBS0wsUUFJUixvQ0FBQyxXQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFVO0FBQUEsS0FFVixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBcUYsdUJBSW5HLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNaLDhDQUFjLFVBQVMsSUFDcEIsNkNBQWMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUM3QixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxLQUFLLFlBQVk7QUFBQSxJQUNqQixXQUFVO0FBQUEsS0FFVixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxLQUFLLE9BQU8sWUFBWSxjQUFjLE1BQU0sS0FBSztBQUFBLElBQ2pELEtBQUssWUFBWTtBQUFBLE1BRW5CLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUFhLFlBQVksT0FBTSxNQUM3QyxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FDVixZQUFZLGVBQWUsTUFFOUIsb0NBQUMsS0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBTSxZQUFZO0FBQUEsS0FDbkIsZ0JBS0wsUUFJUixvQ0FBQyxXQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFVO0FBQUEsS0FFVixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBa0osZUFHaEssb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQU8sZ0tBS3BCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxLQUNYLGFBR0Qsb0NBQUMsS0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLEtBQ1g7QUFBQTs7O0E3QmhUYixvQkFBa0M7QUFDM0IsSUFBTSxRQUFRLEVBQUUsUUFBUTtBQUN4QixJQUFNLFNBQVM7QUFBQSxFQUNwQixRQUFRO0FBQUEsSUFDTixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLDBCQUEwQjtBQUFBLElBQ3hCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsaUNBQWlDO0FBQUEsSUFDL0IsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFViwyQ0FBMkM7QUFBQSxJQUN6QyxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLGdDQUFnQztBQUFBLElBQzlCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsK0JBQStCO0FBQUEsSUFDN0IsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVix3QkFBd0I7QUFBQSxJQUN0QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLHVCQUF1QjtBQUFBLElBQ3JCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYscUJBQXFCO0FBQUEsSUFDbkIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVixxQkFBcUI7QUFBQSxJQUNuQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLGtCQUFrQjtBQUFBLElBQ2hCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsa0JBQWtCO0FBQUEsSUFDaEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVixpQkFBaUI7QUFBQSxJQUNmLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsZ0JBQWdCO0FBQUEsSUFDZCxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLGdCQUFnQjtBQUFBLElBQ2QsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
