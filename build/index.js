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

// app/images/padel-hero.jpg
var padel_hero_default = "/build/_assets/padel-hero-P2PSR26K.jpg";

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/root.tsx
var import_react_cookie_consent = __toModule(require("react-cookie-consent"));
var import_react = __toModule(require("react"));

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-TBIYALQQ.css";

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
  const doNothing = () => {
  };
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
    className: "flex flex-col  mt-12 md:mt-0   md:flex-row md:space-x-8 space-y-4  md:space-y-0   text-slate-900 dark:text-white"
  }, /* @__PURE__ */ React.createElement("li", {
    onClick: navbarOpen ? handleToggle : doNothing
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/"
  }, "Home ")), /* @__PURE__ */ React.createElement("li", {
    onClick: navbarOpen ? handleToggle : doNothing
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/about"
  }, "About ")), /* @__PURE__ */ React.createElement("li", {
    onClick: navbarOpen ? handleToggle : doNothing
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/join-us"
  }, "Join Us ")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
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
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/",
    className: ""
  }, "Home"), /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/about",
    className: ""
  }, "About", " "), " ", /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/join-us",
    className: ""
  }, "Join Us"))));
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
  }), /* @__PURE__ */ React.createElement("script", null), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", {
    style: {
      backgroundImage: ` ${darkMode ? " linear-gradient(to right, rgba(255, 255, 255,1)" : " linear-gradient(to right, rgba(15, 23, 42,1)"}     , rgba(255, 255, 255, 0.1)),url('${padel_hero_default}')`
    },
    className: "text-slate-900 dark:text-white  bg-cover bg-fixed   "
  }, /* @__PURE__ */ React.createElement("script", {
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
      <lastmod>2022-01-08T00:15:16+01:00</lastmod>
      <priority>1.0</priority>
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

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/join-us.tsx
var join_us_exports = {};
__export(join_us_exports, {
  action: () => action,
  default: () => JoinUs,
  meta: () => meta2
});
init_react();
var import_remix6 = __toModule(require_remix());

// app/Components/cta.tsx
init_react();
var import_remix5 = __toModule(require_remix());
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
  }, props.body), /* @__PURE__ */ React.createElement(import_remix5.Link, {
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
var meta2 = () => {
  return {
    title: "Join Padel Africa - Padel is Not Just a Sport",
    description: "Join Padel Africa in bringing padel, as a sport, a lifestyle, and a community builder, to Africa.   ",
    keywords: "padel, africa, sport, ghana, rwanda, kenya, uganda, community",
    "og:image": `https://padel.africa${web_bg_default}`
  };
};
function JoinUs() {
  let actionData = (0, import_remix6.useActionData)();
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
    className: "text-5xl  font-heading  "
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
  }, "Upcoming events"), /* @__PURE__ */ React.createElement("ul", {
    className: "space-y-3 text-xs "
  }, /* @__PURE__ */ React.createElement("p", {
    className: "italic"
  }, "Register your interest in the form below and we will keep you updated"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Stockholm "), " - 2nd September -", " ", /* @__PURE__ */ React.createElement("a", {
    className: "underline bold",
    href: "mailto:hakan@bambwa.com"
  }, "Email for details")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Gothenburg "), " - date and time TBC"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Malm\xF6"), " - date and time TBC"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Helsingborg"), " - date and time TBC"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "J\xF6nk\xF6ping"), " - date and time TBC"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Copenhagen"), " - date and time TBC"))), /* @__PURE__ */ React.createElement(import_remix6.Form, {
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
  }, "\u{1F680} You're on the list!"), /* @__PURE__ */ React.createElement("p", null, "Thanks for expressing interest, you will be sent an email with more information."), /* @__PURE__ */ React.createElement(import_remix6.Link, {
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
  loader: () => loader4,
  meta: () => meta3
});
init_react();
var import_remix8 = __toModule(require_remix());

// app/Components/hero.tsx
init_react();
var import_remix7 = __toModule(require_remix());

// app/images/partners/padeltotal-logo.png
var padeltotal_logo_default = "/build/_assets/padeltotal-logo-WIUYH4JC.png";

// app/images/partners/padel-iq.png
var padel_iq_default = "/build/_assets/padel-iq-BH4QGOBN.png";

// app/Components/hero.tsx
function Hero2(props) {
  let actionData = (0, import_remix7.useActionData)();
  let state = (actionData == null ? void 0 : actionData.subscription) ? "success" : (actionData == null ? void 0 : actionData.error) ? "error" : "idle";
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("main", {
    className: "[hero] container mx-auto bg-none  md:pt-32 md:pb-12 mb-12 md:-mt-16 px-8 sm:px-12 flex  flex-col md:flex-row align-middle md:justify-between  bg-cover  md:space-x-12	 "
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
  }, " ", "Email us"), " ")), /* @__PURE__ */ React.createElement(import_remix7.Form, {
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
  }, "\u{1F680} You're Subscribed!"), /* @__PURE__ */ React.createElement("p", null, "Thank you for signing up to our mailing list"), /* @__PURE__ */ React.createElement(import_remix7.Link, {
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
async function loader4() {
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
  const { newsPosts, aboutText } = (0, import_remix8.useLoaderData)();
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
  loader: () => loader5
});
init_react();
var import_remix9 = __toModule(require_remix());
async function loader5({ params }) {
  const initialData = await getClient().fetch(`*[_type == "news" && slug.current == $slug]{ _id, title, slug, "featureImage": feature.asset->url
  }`, { slug: params.slug });
  return { initialData };
}
function NewsPost() {
  let { initialData } = (0, import_remix9.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    style: { textAlign: "center", padding: 20 }
  }, /* @__PURE__ */ React.createElement("h1", null, initialData[0].title), /* @__PURE__ */ React.createElement("img", {
    src: initialData[0].featureImage
  }));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  meta: () => meta4
});
init_react();
var import_react_router_dom = __toModule(require("react-router-dom"));

// app/images/event_ad.png
var event_ad_default = "/build/_assets/event_ad-6H2SJYHT.png";

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/about.tsx
var meta4 = () => {
  return {
    title: "About Padel Africa - Padel is Not Just a Sport",
    description: "Learn about how Padel Africa is bringing padel, as a sport, a lifestyle, and a community builder, to Africa.   ",
    keywords: "padel, africa, sport, ghana, rwanda, kenya, uganda, community"
  };
};
function About() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    className: "w-full md:p-32 py-12 px-3 space-y-12  flex md:flex-row flex-col bg-white justify-between text-black "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:w-3/5 md:px-12 px-4 space-y-4"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl  font-heading  "
  }, "About Padel Africa"), /* @__PURE__ */ React.createElement("h2", {
    className: "font-heading text-2xl"
  }, "Who we are"), /* @__PURE__ */ React.createElement("p", null, "We believe that Africa is the next growth centre of the world and that it provides immense opportunities for the few who take the leap and expand to Africa. On the other hand, we are also very aware that in order to succeed in Africa, it requires in-depth understanding of the product you would like to offer, and a thorough understanding of the market."), /* @__PURE__ */ React.createElement("p", null, "We are confident that our team has the required prerequisites to succeed. We are a conglomerate of padel enthusiasts and business profiles. Combined we have started over 100 companies, sold 2000 courts, worked 20 years with Padel and 30 years of business experience from Sub Saharan Africa."), /* @__PURE__ */ React.createElement("h2", {
    className: "font-heading text-2xl"
  }, "Why we do this"), /* @__PURE__ */ React.createElement("p", null, "Our purpose in everything we do, is to try and improve quality of life."), /* @__PURE__ */ React.createElement("p", null, "We believe many different offerings can provide the platform to improve quality of life, and that it merely comes down to focus, creativity and execution as to how much it will be."), /* @__PURE__ */ React.createElement("p", null, "Many people overlook the African continent when they are looking for new markets to expand to. This is a shame, as the impact one can do here, supersedes almost anywhere else in the world. Furthermore, the continent is often reduced to an unfair generalisation. The continent is as diverse as any other."), /* @__PURE__ */ React.createElement("p", null, "There are though some common denominators among the Africans we have met: They have a high focus on family and friends, they love to have fun and appreciate if some movement is involved. Besides this, the continent is growing rapidly, both in terms of population and purchasing power."), /* @__PURE__ */ React.createElement("p", null, "For those reasons we feel padel and Sub Saharan Africa is a perfect match and we will work tirelessly to bring Africa along on this global trend."), /* @__PURE__ */ React.createElement("h2", {
    className: "font-heading text-2xl"
  }, "What are we going to do?"), /* @__PURE__ */ React.createElement("p", null, "We are going to bring padel to Sub Saharan Africa."), /* @__PURE__ */ React.createElement("p", null, "We are going to act as a court distributor and build our own complexes."), /* @__PURE__ */ React.createElement("p", null, "The main targets for the courts we sell are hotels, resorts, compounds and similar. We will provide them with everything they need, so they can offer this unique and fun experience to their guests and visitors."), /* @__PURE__ */ React.createElement("p", null, "The complexes we are going to build will have a large focus on serving as a community hub. We want people to come, stay and enjoy themselves and the company. Padel has the ability to break down social barriers and will provide a platform for people to meet each other and form friendships and network."), /* @__PURE__ */ React.createElement("p", null, "We will offer both the courts and the complexes as a turnkey solution, to ensure scalability and deployment speed."), /* @__PURE__ */ React.createElement("h2", {
    className: "font-heading text-2xl"
  }, "How are we going to do it?"), /* @__PURE__ */ React.createElement("p", null, "We have a focus on involvement, participation and collaboration. This is why we are working hard to internalise the partners we currently work with, and the future partners of the venture."), /* @__PURE__ */ React.createElement("p", null, "For this reason we are crowdfunding part of the venture. We want to bring on like minded people who share our passion for padel, Africa or a combination, on this journey."), /* @__PURE__ */ React.createElement("p", null, "We are currently selling courts in Africa. This will pave the way for the introduction of the sport, create some demand, and also create some cash flow to fund the complexes."), /* @__PURE__ */ React.createElement("p", null, "Within the next quarter we will start constructing our first complexes.")), /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    className: "md:w-2/5 h-full ",
    to: "/join-us"
  }, /* @__PURE__ */ React.createElement("img", {
    src: event_ad_default,
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
  action: () => action3,
  default: () => Index2,
  loader: () => loader6,
  meta: () => meta5
});
init_react();
var import_remix11 = __toModule(require_remix());

// app/Components/info.tsx
init_react();
var import_remix10 = __toModule(require_remix());
function Info(props) {
  const { aboutText } = (0, import_remix10.useLoaderData)();
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
  }, /* @__PURE__ */ React.createElement("p", null, "We believe that Africa is the next growth centre of the world and that it provides immense opportunities for the few who take the leap and expand to Africa. On the other hand, we are also very aware that in order to succeed in Africa, it requires in-depth understanding of the product you would like to offer, and a thorough understanding of the market."), /* @__PURE__ */ React.createElement("p", null, "We are confident that our team has the required prerequisites to succeed. We are a conglomerate of padel enthusiasts and business profiles. Combined we have started over 100 companies, sold 2000 courts, worked 20 years with Padel and 30 years of business experience from Sub Saharan Africa."), /* @__PURE__ */ React.createElement(import_remix10.Link, {
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
async function loader6() {
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
var meta5 = () => {
  return {
    title: "Padel Africa - Padel is Not Just a Sport",
    description: "Padel Africa is bringing padel, as a sport, a lifestyle, and a community builder, to Africa.   ",
    keywords: "padel, africa, sport, ghana, rwanda, kenya, uganda, community"
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
  const { newsPosts, aboutText, teamMembers, boardMembers } = (0, import_remix11.useLoaderData)();
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgImVtcHR5LW1vZHVsZTp+L3V0aWxzL2d0YWdzLmNsaWVudCIsICI8c3RkaW4+IiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3Jvb3QudHN4IiwgIi4uL2FwcC9Db21wb25lbnRzL2luZm8tYmFyLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvc2l0ZW1hcFsuXXhtbC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL3JvYm90c1suXXR4dC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL2pvaW4tdXMudHN4IiwgIi4uL2FwcC9Db21wb25lbnRzL2N0YS50c3giLCAiLi4vYXBwL0NvbXBvbmVudHMvY2FtcGFpZ24taGVyby50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL19pbmRleC50c3giLCAiLi4vYXBwL0NvbXBvbmVudHMvaGVyby50c3giLCAiLi4vYXBwL2xpYi9zYW5pdHkvZ2V0Q2xpZW50LnRzIiwgIi4uL2FwcC9saWIvc2FuaXR5L2NvbmZpZy50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvJHNsdWcudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy9hYm91dC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvQ29tcG9uZW50cy9pbmZvLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvc2l0ZW1hcFsuXXhtbC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvcm9ib3RzWy5ddHh0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy9qb2luLXVzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy9faW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy9hYm91dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9zaXRlbWFwWy5deG1sXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvc2l0ZW1hcFsuXXhtbFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInNpdGVtYXAueG1sXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvcm9ib3RzWy5ddHh0XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcm9ib3RzWy5ddHh0XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwicm9ib3RzLnR4dFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2pvaW4tdXNcIjoge1xuICAgIGlkOiBcInJvdXRlcy9qb2luLXVzXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiam9pbi11c1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUzXG4gIH0sXG4gIFwicm91dGVzL19pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL19pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIl9pbmRleFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU0XG4gIH0sXG4gIFwicm91dGVzLyRzbHVnXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvJHNsdWdcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCI6c2x1Z1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU1XG4gIH0sXG4gIFwicm91dGVzL2Fib3V0XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYWJvdXRcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJhYm91dFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU2XG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlN1xuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBkb3RlbnYuY29uZmlnKCk7XG5cbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZSgnPCFET0NUWVBFIGh0bWw+JyArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpbmssXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgQWN0aW9uRnVuY3Rpb24sXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VMb2NhdGlvbixcbiAgdXNlTWF0Y2hlcyxcbn0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgaGVyb0ltZyBmcm9tICcuL2ltYWdlcy9wYWRlbC1oZXJvLmpwZyc7XG5pbXBvcnQgQ29va2llQ29uc2VudCBmcm9tICdyZWFjdC1jb29raWUtY29uc2VudCc7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzL3RhaWx3aW5kLmNzcyc7XG5pbXBvcnQgYXBwU3R5bGVzIGZyb20gJy4vc3R5bGVzL2FwcC5jc3MnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi9pbWFnZXMvbG9nby5zdmcnO1xuaW1wb3J0IGxvZ29EYXJrIGZyb20gJy4vaW1hZ2VzL3BhLWxvZ28tZGFyay5zdmcnO1xuaW1wb3J0IGxvZ29MaWdodCBmcm9tICcuL2ltYWdlcy9wYS1sb2dvLWxpZ2h0LnN2Zyc7XG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBqc29uIH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgKiBhcyBndGFnIGZyb20gJ34vdXRpbHMvZ3RhZ3MuY2xpZW50JztcbmltcG9ydCBJbmZvQmFyIGZyb20gJy4vQ29tcG9uZW50cy9pbmZvLWJhcic7XG50eXBlIExvYWRlckRhdGEgPSB7XG4gIGdhVHJhY2tpbmdJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xufTtcblxuLy8gTG9hZCB0aGUgR0EgdHJhY2tpbmcgaWQgZnJvbSB0aGUgLmVudlxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiBqc29uPExvYWRlckRhdGE+KHsgZ2FUcmFja2luZ0lkOiBwcm9jZXNzLmVudi5HQV9UUkFDS0lOR19JRCB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiAnUGFkZWwgQWZyaWNhJyB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9LFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGFwcFN0eWxlcyB9LFxuICBdO1xufVxuXG5leHBvcnQgY29uc3QgTmF2ID0gKHNldERhcmtNb2RlOiB7XG4gIHNldERhcmtNb2RlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxib29sZWFuPj47XG59KSA9PiB7XG4gIGNvbnN0IGRhcmtNb2RlVG9nZ2xlID0gKCkgPT4ge1xuICAgIC8vY29uc29sZS5sb2coc2V0RGFya01vZGUuc2V0RGFya01vZGUpO1xuXG4gICAgc2V0RGFya01vZGUuc2V0RGFya01vZGUoKHByZXYpID0+ICFwcmV2KTtcbiAgICAvL3NldERhcmtNb2RlKChwcmV2KSA9PiAhcHJldik7XG4gIH07XG4gIGNvbnN0IGRhcmtNb2RlID0gdHJ1ZTtcblxuICBjb25zdCBbaXNTaHJ1bmssIHNldFNocnVua10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xuICAgICAgc2V0U2hydW5rKChpc1NocnVuaykgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIWlzU2hydW5rICYmXG4gICAgICAgICAgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4gMjAgfHxcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiAyMClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNTaHJ1bmsgJiZcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA8IDQgJiZcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIDwgNFxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXNTaHJ1bms7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlcik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBbbmF2YmFyT3Blbiwgc2V0TmF2YmFyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGRvTm90aGluZyA9ICgpID0+IHt9O1xuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgLy9jb25zb2xlLmxvZyhuYXZiYXJPcGVuKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHNldE5hdmJhck9wZW4pO1xuICAgIHNldE5hdmJhck9wZW4oKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LypcbiAgICAgIDxuYXZcbiAgICAgICAgY2xhc3NOYW1lPXtgICAke1xuICAgICAgICAgIGlzU2hydW5rXG4gICAgICAgICAgICA/ICd0cmFuc2l0aW9uIGVhc2UtaW4tb3V0ICBtZDpiZy1vcGFjaXR5LTc1IGJhY2tkcm9wLWJsdXItbGcgei0xMCBweS0yIHRleHQteHMgICAgJ1xuICAgICAgICAgICAgOiAndHJhbnNpdGlvbiBlYXNlLWluLW91dCBtZDpiZy1vcGFjaXR5LTAgJ1xuICAgICAgICB9IGJnLXNsYXRlLTkwMCBib3JkZXItZ3JheS0yMDAgcHgtNCBzbTpweC0xMiBweS02IG1kOmZpeGVkIHctZnVsbCB6LTEwIHRleHQtYmxhY2sgYH1cbiAgICAgID4qL31cblxuICAgICAgPG5hdiBjbGFzc05hbWU9J2JnLW5vbmUgYm9yZGVyLWdyYXktMjAwIHB4LTQgc206cHgtMTIgcHktNiB3LWZ1bGwgei0xMCB0ZXh0LWJsYWNrICAgJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG14LWF1dG8nPlxuICAgICAgICAgIDxhIGhyZWY9Jy8nIGNsYXNzTmFtZT0nZmxleCc+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17bG9nb0Rhcmt9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJsb2NrIGRhcms6aGlkZGVuIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgdHJhbnNmb3JtICR7XG4gICAgICAgICAgICAgICAgaXNTaHJ1bmsgPyAnaC0xNicgOiAnbWQ6aC0xNidcbiAgICAgICAgICAgICAgfSBoLTE2YH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtsb2dvTGlnaHR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhpZGRlbiBkYXJrOmJsb2NrICB0cmFuc2l0aW9uICAgZWFzZS1pbi1vdXQgdHJhbnNmb3JtICR7XG4gICAgICAgICAgICAgICAgaXNTaHJ1bmsgPyAnaC0xNicgOiAnbWQ6aC0xNidcbiAgICAgICAgICAgICAgfSBoLTE2YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX1cbiAgICAgICAgICAgIGRhdGEtY29sbGFwc2UtdG9nZ2xlPSdtb2JpbGUtbWVudSdcbiAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHAtMiBtbC0zIHRleHQtc20gcm91bmRlZC1sZyBtZDpoaWRkZW4gaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyYXktMjAwIGRhcms6dGV4dC1ncmF5LTQwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6Zm9jdXM6cmluZy1ncmF5LTYwMCdcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9J21vYmlsZS1tZW51LTInXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPSdmYWxzZSdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPk9wZW4gbWFpbiBtZW51PC9zcGFuPlxuICAgICAgICAgICAge25hdmJhck9wZW4gPyAoXG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9JyB3LTYgaC02J1xuICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjAgMjAnXG4gICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgZD0nTTQuMjkzIDQuMjkzYTEgMSAwIDAxMS40MTQgMEwxMCA4LjU4Nmw0LjI5My00LjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0TDExLjQxNCAxMGw0LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNCAxLjQxNEwxMCAxMS40MTRsLTQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0LTEuNDE0TDguNTg2IDEwIDQuMjkzIDUuNzA3YTEgMSAwIDAxMC0xLjQxNHonXG4gICAgICAgICAgICAgICAgICBjbGlwUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNiBoLTYnXG4gICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xuICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyMCAyMCdcbiAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICBkPSdNMyA1YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xek0zIDEwYTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xek0zIDE1YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xeidcbiAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtcbiAgICAgICAgICAgICAgbmF2YmFyT3BlblxuICAgICAgICAgICAgICAgID8gJ2gtc2NyZWVuIHRleHQtNHhsIHRleHQtY2VudGVyIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlcidcbiAgICAgICAgICAgICAgICA6ICdoaWRkZW4nXG4gICAgICAgICAgICB9IHctZnVsbCBtZDpibG9jayBtZDp3LWF1dG9gfVxuICAgICAgICAgICAgaWQ9J21vYmlsZS1tZW51J1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgIG10LTEyIG1kOm10LTAgICBtZDpmbGV4LXJvdyBtZDpzcGFjZS14LTggc3BhY2UteS00ICBtZDpzcGFjZS15LTAgICB0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUnPlxuICAgICAgICAgICAgICA8bGkgb25DbGljaz17bmF2YmFyT3BlbiA/IGhhbmRsZVRvZ2dsZSA6IGRvTm90aGluZ30+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89Jy8nPkhvbWUgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgb25DbGljaz17bmF2YmFyT3BlbiA/IGhhbmRsZVRvZ2dsZSA6IGRvTm90aGluZ30+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89Jy9hYm91dCc+QWJvdXQgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgb25DbGljaz17bmF2YmFyT3BlbiA/IGhhbmRsZVRvZ2dsZSA6IGRvTm90aGluZ30+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89Jy9qb2luLXVzJz5Kb2luIFVzIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wYWRlbGFmcmljYScgY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtuYXZiYXJPcGVuID8gJ2hpZGRlbicgOiAndy03IGgtNyd9IGB9XG4gICAgICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICAgICAgICBkPSdNMjIgMTJjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMFMyIDYuNDc3IDIgMTJjMCA0Ljk5MSAzLjY1NyA5LjEyOCA4LjQzOCA5Ljg3OHYtNi45ODdoLTIuNTRWMTJoMi41NFY5Ljc5N2MwLTIuNTA2IDEuNDkyLTMuODkgMy43NzctMy44OSAxLjA5NCAwIDIuMjM4LjE5NSAyLjIzOC4xOTV2Mi40NmgtMS4yNmMtMS4yNDMgMC0xLjYzLjc3MS0xLjYzIDEuNTYyVjEyaDIuNzczbC0uNDQzIDIuODloLTIuMzN2Ni45ODhDMTguMzQzIDIxLjEyOCAyMiAxNi45OTEgMjIgMTJ6J1xuICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtcbiAgICAgICAgICAgICAgICAgICAgICBuYXZiYXJPcGVuXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdoLXNjcmVlbiB0ZXh0LTR4bCB0ZXh0LWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdoaWRkZW4nXG4gICAgICAgICAgICAgICAgICAgIH0gYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRmFjZWJvb2tcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9wYWRlbGFmcmljYS8nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9JydcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke25hdmJhck9wZW4gPyAnaGlkZGVuJyA6ICd3LTcgaC03J30gYH1cbiAgICAgICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMTcgMTcnXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD0nMTAwJSdcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzEwMCUnXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgICAgIGQ9J00wIDEuMTQ2QzAgLjUxMy41MjYgMCAxLjE3NSAwaDEzLjY1QzE1LjQ3NCAwIDE2IC41MTMgMTYgMS4xNDZ2MTMuNzA4YzAgLjYzMy0uNTI2IDEuMTQ2LTEuMTc1IDEuMTQ2SDEuMTc1Qy41MjYgMTYgMCAxNS40ODcgMCAxNC44NTRWMS4xNDZ6bTQuOTQzIDEyLjI0OFY2LjE2OUgyLjU0MnY3LjIyNWgyLjQwMXptLTEuMi04LjIxMmMuODM3IDAgMS4zNTgtLjU1NCAxLjM1OC0xLjI0OC0uMDE1LS43MDktLjUyLTEuMjQ4LTEuMzQyLTEuMjQ4LS44MjIgMC0xLjM1OS41NC0xLjM1OSAxLjI0OCAwIC42OTQuNTIxIDEuMjQ4IDEuMzI3IDEuMjQ4aC4wMTZ6bTQuOTA4IDguMjEyVjkuMzU5YzAtLjIxNi4wMTYtLjQzMi4wOC0uNTg2LjE3My0uNDMxLjU2OC0uODc4IDEuMjMyLS44NzguODY5IDAgMS4yMTYuNjYyIDEuMjE2IDEuNjM0djMuODY1aDIuNDAxVjkuMjVjMC0yLjIyLTEuMTg0LTMuMjUyLTIuNzY0LTMuMjUyLTEuMjc0IDAtMS44NDUuNy0yLjE2NSAxLjE5M3YuMDI1aC0uMDE2YTUuNTQgNS41NCAwIDAgMSAuMDE2LS4wMjVWNi4xNjloLTIuNGMuMDMuNjc4IDAgNy4yMjUgMCA3LjIyNWgyLjR6J1xuICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtcbiAgICAgICAgICAgICAgICAgICAgICBuYXZiYXJPcGVuXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdoLXNjcmVlbiB0ZXh0LTR4bCB0ZXh0LWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdoaWRkZW4nXG4gICAgICAgICAgICAgICAgICAgIH0gYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgTGlua2VkaW57JyAnfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wYWRlbF9hZnJpY2EvJyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke25hdmJhck9wZW4gPyAnaGlkZGVuJyA6ICd3LTcgaC03J30gYH1cbiAgICAgICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgICAgIGQ9J00xMi4zMTUgMmMyLjQzIDAgMi43ODQuMDEzIDMuODA4LjA2IDEuMDY0LjA0OSAxLjc5MS4yMTggMi40MjcuNDY1YTQuOTAyIDQuOTAyIDAgMDExLjc3MiAxLjE1MyA0LjkwMiA0LjkwMiAwIDAxMS4xNTMgMS43NzJjLjI0Ny42MzYuNDE2IDEuMzYzLjQ2NSAyLjQyNy4wNDggMS4wNjcuMDYgMS40MDcuMDYgNC4xMjN2LjA4YzAgMi42NDMtLjAxMiAyLjk4Ny0uMDYgNC4wNDMtLjA0OSAxLjA2NC0uMjE4IDEuNzkxLS40NjUgMi40MjdhNC45MDIgNC45MDIgMCAwMS0xLjE1MyAxLjc3MiA0LjkwMiA0LjkwMiAwIDAxLTEuNzcyIDEuMTUzYy0uNjM2LjI0Ny0xLjM2My40MTYtMi40MjcuNDY1LTEuMDY3LjA0OC0xLjQwNy4wNi00LjEyMy4wNmgtLjA4Yy0yLjY0MyAwLTIuOTg3LS4wMTItNC4wNDMtLjA2LTEuMDY0LS4wNDktMS43OTEtLjIxOC0yLjQyNy0uNDY1YTQuOTAyIDQuOTAyIDAgMDEtMS43NzItMS4xNTMgNC45MDIgNC45MDIgMCAwMS0xLjE1My0xLjc3MmMtLjI0Ny0uNjM2LS40MTYtMS4zNjMtLjQ2NS0yLjQyNy0uMDQ3LTEuMDI0LS4wNi0xLjM3OS0uMDYtMy44MDh2LS42M2MwLTIuNDMuMDEzLTIuNzg0LjA2LTMuODA4LjA0OS0xLjA2NC4yMTgtMS43OTEuNDY1LTIuNDI3YTQuOTAyIDQuOTAyIDAgMDExLjE1My0xLjc3MkE0LjkwMiA0LjkwMiAwIDAxNS40NSAyLjUyNWMuNjM2LS4yNDcgMS4zNjMtLjQxNiAyLjQyNy0uNDY1QzguOTAxIDIuMDEzIDkuMjU2IDIgMTEuNjg1IDJoLjYzem0tLjA4MSAxLjgwMmgtLjQ2OGMtMi40NTYgMC0yLjc4NC4wMTEtMy44MDcuMDU4LS45NzUuMDQ1LTEuNTA0LjIwNy0xLjg1Ny4zNDQtLjQ2Ny4xODItLjguMzk4LTEuMTUuNzQ4LS4zNS4zNS0uNTY2LjY4My0uNzQ4IDEuMTUtLjEzNy4zNTMtLjMuODgyLS4zNDQgMS44NTctLjA0NyAxLjAyMy0uMDU4IDEuMzUxLS4wNTggMy44MDd2LjQ2OGMwIDIuNDU2LjAxMSAyLjc4NC4wNTggMy44MDcuMDQ1Ljk3NS4yMDcgMS41MDQuMzQ0IDEuODU3LjE4Mi40NjYuMzk5LjguNzQ4IDEuMTUuMzUuMzUuNjgzLjU2NiAxLjE1Ljc0OC4zNTMuMTM3Ljg4Mi4zIDEuODU3LjM0NCAxLjA1NC4wNDggMS4zNy4wNTggNC4wNDEuMDU4aC4wOGMyLjU5NyAwIDIuOTE3LS4wMSAzLjk2LS4wNTguOTc2LS4wNDUgMS41MDUtLjIwNyAxLjg1OC0uMzQ0LjQ2Ni0uMTgyLjgtLjM5OCAxLjE1LS43NDguMzUtLjM1LjU2Ni0uNjgzLjc0OC0xLjE1LjEzNy0uMzUzLjMtLjg4Mi4zNDQtMS44NTcuMDQ4LTEuMDU1LjA1OC0xLjM3LjA1OC00LjA0MXYtLjA4YzAtMi41OTctLjAxLTIuOTE3LS4wNTgtMy45Ni0uMDQ1LS45NzYtLjIwNy0xLjUwNS0uMzQ0LTEuODU4YTMuMDk3IDMuMDk3IDAgMDAtLjc0OC0xLjE1IDMuMDk4IDMuMDk4IDAgMDAtMS4xNS0uNzQ4Yy0uMzUzLS4xMzctLjg4Mi0uMy0xLjg1Ny0uMzQ0LTEuMDIzLS4wNDctMS4zNTEtLjA1OC0zLjgwNy0uMDU4ek0xMiA2Ljg2NWE1LjEzNSA1LjEzNSAwIDExMCAxMC4yNyA1LjEzNSA1LjEzNSAwIDAxMC0xMC4yN3ptMCAxLjgwMmEzLjMzMyAzLjMzMyAwIDEwMCA2LjY2NiAzLjMzMyAzLjMzMyAwIDAwMC02LjY2NnptNS4zMzgtMy4yMDVhMS4yIDEuMiAwIDExMCAyLjQgMS4yIDEuMiAwIDAxMC0yLjR6J1xuICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtcbiAgICAgICAgICAgICAgICAgICAgICBuYXZiYXJPcGVuXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdoLXNjcmVlbiB0ZXh0LTR4bCB0ZXh0LWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdoaWRkZW4nXG4gICAgICAgICAgICAgICAgICAgIH0gYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgSW5zdGFncmFteycgJ31cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBoaWRkZW5cbiAgICAgICAgICAgICAgICBpZD0ndGhlbWUtdG9nZ2xlJ1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2RhcmtNb2RlVG9nZ2xlfVxuICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtc2xhdGUtOTAwIGRhcms6dGV4dC13aGl0ZSBtZDpob3ZlcjpiZy1ncmF5LTEwMCBtZDpkYXJrOmhvdmVyOmJnLXNsYXRlLTkwMCAgcm91bmRlZC1sZyB0ZXh0LXNtICdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIGlkPSd0aGVtZS10b2dnbGUtZGFyay1pY29uJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7XG4gICAgICAgICAgICAgICAgICAgIG5hdmJhck9wZW4gPyAnaGlkZGVuJyA6ICdibG9jayBkYXJrOmhpZGRlbiB3LTcgaC03J1xuICAgICAgICAgICAgICAgICAgfSBgfVxuICAgICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xuICAgICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDIwIDIwJ1xuICAgICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xNy4yOTMgMTMuMjkzQTggOCAwIDAxNi43MDcgMi43MDdhOC4wMDEgOC4wMDEgMCAxMDEwLjU4NiAxMC41ODZ6Jz48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgaWQ9J3RoZW1lLXRvZ2dsZS1saWdodC1pY29uJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7XG4gICAgICAgICAgICAgICAgICAgIG5hdmJhck9wZW4gPyAnaGlkZGVuJyA6ICdoaWRkZW4gZGFyazpibG9jayB3LTcgaC03J1xuICAgICAgICAgICAgICAgICAgfSBgfVxuICAgICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xuICAgICAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDIwIDIwJ1xuICAgICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9J00xMCAyYTEgMSAwIDAxMSAxdjFhMSAxIDAgMTEtMiAwVjNhMSAxIDAgMDExLTF6bTQgOGE0IDQgMCAxMS04IDAgNCA0IDAgMDE4IDB6bS0uNDY0IDQuOTVsLjcwNy43MDdhMSAxIDAgMDAxLjQxNC0xLjQxNGwtLjcwNy0uNzA3YTEgMSAwIDAwLTEuNDE0IDEuNDE0em0yLjEyLTEwLjYwN2ExIDEgMCAwMTAgMS40MTRsLS43MDYuNzA3YTEgMSAwIDExLTEuNDE0LTEuNDE0bC43MDctLjcwN2ExIDEgMCAwMTEuNDE0IDB6TTE3IDExYTEgMSAwIDEwMC0yaC0xYTEgMSAwIDEwMCAyaDF6bS03IDRhMSAxIDAgMDExIDF2MWExIDEgMCAxMS0yIDB2LTFhMSAxIDAgMDExLTF6TTUuMDUgNi40NjRBMSAxIDAgMTA2LjQ2NSA1LjA1bC0uNzA4LS43MDdhMSAxIDAgMDAtMS40MTQgMS40MTRsLjcwNy43MDd6bTEuNDE0IDguNDg2bC0uNzA3LjcwN2ExIDEgMCAwMS0xLjQxNC0xLjQxNGwuNzA3LS43MDdhMSAxIDAgMDExLjQxNCAxLjQxNHpNNCAxMWExIDEgMCAxMDAtMkgzYTEgMSAwIDAwMCAyaDF6J1xuICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtcbiAgICAgICAgICAgICAgICAgICAgbmF2YmFyT3BlblxuICAgICAgICAgICAgICAgICAgICAgID8gJ2gtc2NyZWVuIHRleHQtNHhsIHRleHQtY2VudGVyIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICA6ICdoaWRkZW4nXG4gICAgICAgICAgICAgICAgICB9IGB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgVG9nZ2xlIERhcmsgTW9kZVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT0ncC00ICBzbTpwLTggIGJnLXdoaXRlIGRhcms6Ymctc2xhdGUtOTAwIGRhcms6Ymctb3BhY2l0eS03NSBiZy1vcGFjaXR5LTI1IHRleHQtc2xhdGUtOTAwIGRhcms6dGV4dC13aGl0ZSc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc206ZmxleCBzbTppdGVtcy1jZW50ZXIgc206anVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXNtIHNtOnRleHQtY2VudGVyICc+XG4gICAgICAgICAgXHUwMEE5IDIwMjJ7JyAnfVxuICAgICAgICAgIDxhIGhyZWY9JyMnIHRhcmdldD0nX2JsYW5rJyBjbGFzc05hbWU9J2hvdmVyOnVuZGVybGluZSc+XG4gICAgICAgICAgICBQYWRlbCBBZnJpY2FcdTIxMjJcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG10LTQgc3BhY2UteC02IHNtOmp1c3RpZnktY2VudGVyIHNtOm10LTAnPlxuICAgICAgICAgIDxMaW5rIHRvPScvJyBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIHRvPScvYWJvdXQnIGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgIEFib3V0eycgJ31cbiAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICA8TGluayB0bz0nL2pvaW4tdXMnIGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgIEpvaW4gVXNcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2RhcmtNb2RlLCBzZXREYXJrTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3QgeyBnYVRyYWNraW5nSWQgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChnYVRyYWNraW5nSWQ/Lmxlbmd0aCkge1xuICAgICAgZ3RhZy5wYWdldmlldyhsb2NhdGlvbi5wYXRobmFtZSwgZ2FUcmFja2luZ0lkKTtcbiAgICB9XG4gIH0sIFtsb2NhdGlvbiwgZ2FUcmFja2luZ0lkXSk7XG4gIGNvbnN0IG1hdGNoZXMgPSB1c2VNYXRjaGVzKCk7XG4gIGNvbnNvbGUubG9nKG1hdGNoZXMpO1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9J2VuJyBjbGFzc05hbWU9e2AgJHtkYXJrTW9kZSA/ICcnIDogJ2RhcmsnfSBzY3JvbGwtc21vb3RoYH0+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xJyAvPlxuXG4gICAgICAgIDxzY3JpcHQ+PC9zY3JpcHQ+XG4gICAgICAgIHsvKlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgaWQ9J0Nvb2tpZWJvdCdcbiAgICAgICAgICBzcmM9J2h0dHBzOi8vY29uc2VudC5jb29raWVib3QuY29tL3VjLmpzJ1xuICAgICAgICAgIGRhdGEtY2JpZD0nNjRlZmE0ZWYtOGRhNS00YzY0LTllNjMtMzkyYmFjMThkM2MxJ1xuICAgICAgICAgIGRhdGEtYmxvY2tpbmdtb2RlPSdhdXRvJ1xuICAgICAgICAgIHR5cGU9J3RleHQvamF2YXNjcmlwdCdcbiAgPjwvc2NyaXB0PiAqL31cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYCAke1xuICAgICAgICAgICAgZGFya01vZGVcbiAgICAgICAgICAgICAgPyAnIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LDEpJ1xuICAgICAgICAgICAgICA6ICcgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDE1LCAyMywgNDIsMSknXG4gICAgICAgICAgfSAgICAgLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkpLHVybCgnJHtoZXJvSW1nfScpYCxcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUgIGJnLWNvdmVyIGJnLWZpeGVkICAgJ1xuICAgICAgPlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmNcbiAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctTVY1SFlFWjY3RmB9XG4gICAgICAgIC8+XG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBhc3luY1xuICAgICAgICAgIGlkPSdndGFnLWluaXQnXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuXG4gICAgICAgICAgICAgICAgZ3RhZygnY29uZmlnJywgJ0ctTVY1SFlFWjY3RicsIHtcbiAgICAgICAgICAgICAgICAgIHBhZ2VfcGF0aDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBgLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIHttYXRjaGVzWzFdLnBhdGhuYW1lICE9ICcvam9pbi11cycgJiYgPEluZm9CYXIgLz59XG5cbiAgICAgICAgPE5hdiBzZXREYXJrTW9kZT17c2V0RGFya01vZGV9IC8+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8Q29va2llQ29uc2VudFxuICAgICAgICAgIGxvY2F0aW9uPSdib3R0b20nXG4gICAgICAgICAgYnV0dG9uVGV4dD0nQWNjZXB0J1xuICAgICAgICAgIGNvb2tpZU5hbWU9J3BhZGVsLWFmcmljYS1jb29raWUnXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogJyMyQjM3M0InIH19XG4gICAgICAgICAgYnV0dG9uU3R5bGU9e3sgY29sb3I6ICcjNGU1MDNiJywgZm9udFNpemU6ICcxcmVtJyB9fVxuICAgICAgICAgIGV4cGlyZXM9ezE1MH1cbiAgICAgICAgPlxuICAgICAgICAgIFRoaXMgd2Vic2l0ZSB1c2VzIGNvb2tpZXMgdG8gZW5oYW5jZSB0aGUgdXNlciBleHBlcmllbmNlLnsnICd9XG4gICAgICAgIDwvQ29va2llQ29uc2VudD5cblxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmZvQmFyKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdoLWF1dG8gZmxleC1yb3cgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyZWVuLTUwMCB0by15ZWxsb3ctNTAwIHRleHQtc2xhdGUtOTAwIHAtMyB0ZXh0LWNlbnRlcic+XG4gICAgICBcdUQ4M0RcdURDNEIgSGV5ISBXZSBhcmUgZG9pbmcgc29tZSBwcmVzZW50YXRpb24gcm9hZHNob3dzIGFyb3VuZCBTd2VkZW4gYW5kXG4gICAgICBEZW5tYXJrLiBXaHkgZG9uJ3QgeW91Jm5ic3A7XG4gICAgICA8TGluayBjbGFzc05hbWU9J3VuZGVybGluZSBib2xkJyB0bz0nL2pvaW4tdXMnPlxuICAgICAgICBqb2luIHVzLlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBjb25zdCBsb2FkZXIgPSAoKSA9PiB7XG4gIC8vIGhhbmRsZSBcIkdFVFwiIHJlcXVlc3RcbiAgLy8gc2VwYXJhdGluZyB4bWwgY29udGVudCBmcm9tIFJlc3BvbnNlIHRvIGtlZXAgY2xlYW4gY29kZS5cbiAgY29uc3QgY29udGVudCA9IGBcbiAgICAgICAgICA8dXJsc2V0IHhtbG5zPVwiaHR0cDovL3d3dy5zaXRlbWFwcy5vcmcvc2NoZW1hcy9zaXRlbWFwLzAuOVwiPlxuICAgICAgPHVybD5cbiAgICAgIDxsb2M+aHR0cHM6Ly93d3cucGFkZWwuYWZyaWNhLzwvbG9jPlxuICAgICAgPGxhc3Rtb2Q+MjAyMi0wMS0wOFQwMDoxNToxNiswMTowMDwvbGFzdG1vZD5cbiAgICAgIDxwcmlvcml0eT4xLjA8L3ByaW9yaXR5PlxuICAgICAgPC91cmw+XG4gICAgICA8L3VybHNldD5cbiAgICAgIGA7XG4gIC8vIFJldHVybiB0aGUgcmVzcG9uc2Ugd2l0aCB0aGUgY29udGVudCwgYSBzdGF0dXMgMjAwIG1lc3NhZ2UsIGFuZCB0aGUgYXBwcm9wcmlhdGUgaGVhZGVycyBmb3IgYW4gWE1MIHBhZ2VcbiAgcmV0dXJuIG5ldyBSZXNwb25zZShjb250ZW50LCB7XG4gICAgc3RhdHVzOiAyMDAsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94bWwnLFxuICAgICAgJ3htbC12ZXJzaW9uJzogJzEuMCcsXG4gICAgICBlbmNvZGluZzogJ1VURi04JyxcbiAgICB9LFxuICB9KTtcbn07XG4iLCAiZXhwb3J0IGNvbnN0IGxvYWRlciA9ICgpID0+IHtcbiAgLy8gaGFuZGxlIFwiR0VUXCIgcmVxdWVzdFxuICAvLyBzZXQgdXAgb3VyIHRleHQgY29udGVudCB0aGF0IHdpbGwgYmUgcmV0dXJuZWQgaW4gdGhlIHJlc3BvbnNlXG4gIGNvbnN0IHJvYm90VGV4dCA9IGBcbiAgICAgICAgVXNlci1hZ2VudDogR29vZ2xlYm90XG4gICAgICAgIERpc2FsbG93OiAvbm9nb29nbGVib3QvXG4gICAgXG4gICAgICAgIFVzZXItYWdlbnQ6ICpcbiAgICAgICAgQWxsb3c6IC9cbiAgICBcbiAgICAgICAgU2l0ZW1hcDogaHR0cHM6Ly93d3cucGFkZWwuYWZyaWNhL3NpdGVtYXAueG1sXG4gICAgICAgIGA7XG4gIC8vIHJldHVybiB0aGUgdGV4dCBjb250ZW50LCBhIHN0YXR1cyAyMDAgc3VjY2VzcyByZXNwb25zZSwgYW5kIHNldCB0aGUgY29udGVudCB0eXBlIHRvIHRleHQvcGxhaW5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShyb2JvdFRleHQsIHtcbiAgICBzdGF0dXM6IDIwMCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nLFxuICAgIH0sXG4gIH0pO1xufTtcbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgRm9ybSwgdXNlQWN0aW9uRGF0YSwgTGluaywgTWV0YSB9IGZyb20gJ3JlbWl4JztcblxuaW1wb3J0IENUQSBmcm9tICd+L0NvbXBvbmVudHMvY3RhJztcbmltcG9ydCBIZXJvIGZyb20gJ34vQ29tcG9uZW50cy9jYW1wYWlnbi1oZXJvJztcbmltcG9ydCBCZ0ltZyBmcm9tICd+L2ltYWdlcy93ZWItYmcuanBnJztcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGxldCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgbGV0IGVtYWlsID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpO1xuICBsZXQgbmFtZSA9IGZvcm1EYXRhLmdldCgnbmFtZScpO1xuICBsZXQgY29tcGFueSA9IGZvcm1EYXRhLmdldCgnY29tcGFueScpO1xuICBsZXQgZXZlbnQgPSBmb3JtRGF0YS5nZXQoJ2V2ZW50Jyk7XG5cbiAgLy9wcm9jZXNzLmVudi5DT05WRVJUS0lUX0tFWSA9ICdsR2Y2a09uRk9PQy1ZT2lrWkRfWVB3JztcblxuICBjb25zdCBBUElfS0VZID0gJ2xHZjZrT25GT09DLVlPaWtaRF9ZUHcnO1xuICBjb25zdCBGT1JNX0lEID0gJzMwMjIwNTQnO1xuICBjb25zdCBBUEkgPSAnaHR0cHM6Ly9hcGkuY29udmVydGtpdC5jb20vdjMvJztcblxuICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJfS9mb3Jtcy8ke0ZPUk1fSUR9L3N1YnNjcmliZWAsIHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBlbWFpbDogZW1haWwsXG4gICAgICBmaXJzdF9uYW1lOiBuYW1lLFxuICAgICAgZmllbGRzOiB7IGNvbXBhbnk6IGNvbXBhbnksIGV2ZW50OiBldmVudCB9LFxuICAgICAgYXBpX2tleTogQVBJX0tFWSxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vY29uc29sZS5sb2coeyBlbWFpbCB9LCB7IG5hbWUgfSwgeyBjb21wYW55IH0pO1xuICByZXR1cm4gcmVzLmpzb24oKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnSm9pbiBQYWRlbCBBZnJpY2EgLSBQYWRlbCBpcyBOb3QgSnVzdCBhIFNwb3J0JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdKb2luIFBhZGVsIEFmcmljYSBpbiBicmluZ2luZyBwYWRlbCwgYXMgYSBzcG9ydCwgYSBsaWZlc3R5bGUsIGFuZCBhIGNvbW11bml0eSBidWlsZGVyLCB0byBBZnJpY2EuICAgJyxcbiAgICBrZXl3b3JkczogJ3BhZGVsLCBhZnJpY2EsIHNwb3J0LCBnaGFuYSwgcndhbmRhLCBrZW55YSwgdWdhbmRhLCBjb21tdW5pdHknLFxuICAgICdvZzppbWFnZSc6IGBodHRwczovL3BhZGVsLmFmcmljYSR7QmdJbWd9YCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEpvaW5VcygpIHtcbiAgbGV0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKCk7XG4gIGxldCBzdGF0ZTogJ2lkbGUnIHwgJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyA9IGFjdGlvbkRhdGE/LnN1YnNjcmlwdGlvblxuICAgID8gJ3N1Y2Nlc3MnXG4gICAgOiBhY3Rpb25EYXRhPy5lcnJvclxuICAgID8gJ2Vycm9yJ1xuICAgIDogJ2lkbGUnO1xuICBjb25zdCBkYXJrTW9kZSA9IGZhbHNlO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGAgdXJsKCcke0JnSW1nfScpYCxcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXNsYXRlLTkwMCAtbXQtMzIgZGFyazp0ZXh0LXdoaXRlICBtZDpiZy1maXhlZCBtZDpiZy1jZW50ZXIgYmctW2NlbnRlcl9yaWdodF8tMTdyZW1dICBtZDpiZy1jb3ZlciAgICdcbiAgICAgID5cbiAgICAgICAgPEhlcm9cbiAgICAgICAgICBoZWFkaW5nPSdXaGF0IGhhcHBlbnMgd2hlbiB0aGUgZmFzdGVzdCBzcG9ydCBtZWV0cyB0aGUgZmFzdGVzdCBjb250aW5lbnQ/XG4gICAgICAgICAgICAnXG4gICAgICAgICAgYm9keT0nSm9pbiBVcyB0byBGaW5kIG91dFxuICAgICAgICAgICAgJ1xuICAgICAgICAgIGJ1dHRvbjFUZXh0PSdMZWFybiBNb3JlJ1xuICAgICAgICAgIGJ1dHRvbjFUbz0nI2Fib3V0J1xuICAgICAgICAgIGJ1dHRvbjJUZXh0PSdXYW50IHRvIFBhcnRuZXI/J1xuICAgICAgICAgIGJ1dHRvbjJUbz0nI2Fib3V0J1xuICAgICAgICAgIGltZ1NyYz0nJ1xuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J215LWF1dG8gYmctd2hpdGUgbWQ6cC0zMiBweS0xMiBweC0zIGZsZXggbWQ6ZmxleC1yb3cgZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHRleHQtYmxhY2sgJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21kOnctMS8yIHB4LTggc3BhY2UteS00Jz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTV4bCAgZm9udC1oZWFkaW5nICAnPkpvaW4gUGFkZWwgQWZyaWNhPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhY2UteS0yICc+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgU28sIHdoYXQgaGFwcGVucyB3aGVuIHRoZSBmYXN0ZXN0IGdyb3dpbmcgc3BvcnQgbWVldHMgdGhlIGZhc3Rlc3RcbiAgICAgICAgICAgICAgZ3Jvd2luZyBjb250aW5lbnQ/IEluY3JlZGlibGUsIGV4Y2l0aW5nLCBsaWZlIGNoYW5naW5nIHRoaW5ncyBvZlxuICAgICAgICAgICAgICBjb3Vyc2UuIEVzcGVjaWFsbHkgaWYgeW91IGFyZSBvbmUgb2YgdGhlIGNhbm55IHBlb3BsZSBzaGFycCBlbm91Z2hcbiAgICAgICAgICAgICAgdG8gZ2V0IGludm9sdmVkIGVhcmx5LnsnICd9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVGhpcyBpcyBhbiBvcHBvcnR1bml0eSB0byBiZSBhIHBhcnQgb2YgYSB0cmFuc2Zvcm1hdGl2ZSBqb3VybmV5LlxuICAgICAgICAgICAgICBUbyBiZSBhIHBhcnQgb2YgdGhlIHByb2Nlc3Mgb2YgYnJpbmdpbmcgYSBuZXcgc3BvcnQgYW5kIGxpZmVzdHlsZVxuICAgICAgICAgICAgICBhY3Rpdml0eSB0byBhbiBlbnRpcmUgY29udGluZW50LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZm9udC1oZWFkaW5nIHRleHQtMnhsJz5cbiAgICAgICAgICAgICAgU29tZSBiYWNrZ3JvdW5kIGluZm9ybWF0aW9uXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFBhZGVsIGhhcyBzZWVuIGluY3JlZGlibGUgZ3Jvd3RoIGluIEV1cm9wZSBvdmVyIHRoZSBsYXN0IGRlY2FkZS5cbiAgICAgICAgICAgICAgVGhlIGVhc2Ugb2YgcGxheSBoYXMgZW5hYmxlZCBwYWRlbCB0byBzY2FsZSBhbmQgbWF0dXJlIGZhc3RlciB0aGFuXG4gICAgICAgICAgICAgIGFueSBvdGhlciBzcG9ydC4gU28gbXVjaCBzbyB0aGF0IGl0IGlzIHBsYW5uZWQgdG8gYmUgYW4gZXhoaWJpdGlvblxuICAgICAgICAgICAgICBzcG9ydCBhdCB0aGUgT2x5bXBpY3MgMjAyNCBhbmQgcG90ZW50aWFsbHkgYW4gb2x5bXBpYyBzcG9ydCBpblxuICAgICAgICAgICAgICAyMDI4LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LWJvbGQnPlxuICAgICAgICAgICAgICBQYWRlbCBBZnJpY2EgaXMgYSBjb21wYW55IHRoYXQgaXMgcHJlcGFyZWQgYW5kIGNvbW1pdHRlZCB0b1xuICAgICAgICAgICAgICBicmluZ2luZyB0aGUgc3BvcnQgdG8gQWZyaWNhLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEJhY2tlZCBieSBOb3JkaWMtQWZyaWNhbiB2ZW50dXJlIGNhcGl0YWwgY29tcGFueXsnICd9XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ndW5kZXJsaW5lIGZvbnQtYm9sZCcgaHJlZj0naHR0cHM6Ly9iYW1id2Fncm91cC5jb20nPlxuICAgICAgICAgICAgICAgIEJhbWJ3YSBHcm91cFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICwgYW5kIGxlZCBieSB0aGVpciBmb3VuZGVyIGFuZCBDRU8sIE1pY2hhZWwgTWF0aGllc2VuLCBQYWRlbFxuICAgICAgICAgICAgICBBZnJpY2Egd2FzIGZvdW5kZWQgaW4gMjAyMSBpbiBwYXJ0bmVyc2hpcCB3aXRoIHR3byBvZlxuICAgICAgICAgICAgICBTY2FuZGluYXZpYSdzIGxhcmdlc3QgcGFkZWwgYnVzaW5lc3NlcyAtIFN3ZWRlbidzeycgJ31cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3VuZGVybGluZSBmb250LWJvbGQnXG4gICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cucGFkZWx0b3RhbC5zZS8nXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQYWRlbCBUb3RhbFxuICAgICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICAgICAgYW5kIERlbm1hcmsnc3snICd9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1bmRlcmxpbmUgZm9udC1ib2xkJ1xuICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vc3BvcnR5ZnJpZW5kcy5jb20vZW4vaG9tZSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNwb3J0eWZyaWVuZHNcbiAgICAgICAgICAgICAgPC9hPnsnICd9XG4gICAgICAgICAgICAgIChPd25lcnMgb2YgdGhleycgJ31cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3VuZGVybGluZSBmb250LWJvbGQnXG4gICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cucGFkZWxpcS5pby9kYSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFBhZGVsIGlRXG4gICAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgICBzb2Z0d2FyZSkuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgV2l0aCBwYXJ0bmVycyBvbiB0aGUgZ3JvdW5kIGluIEdoYW5hLCBLZW55YSwgUndhbmRhLCBMaWJlcmlhIGFuZFxuICAgICAgICAgICAgICBzZXZlcmFsIG90aGVyIEFmcmljYW4gbmF0aW9ucywgUGFkZWwgQWZyaWNhIGlzIHBlcmZlY3RseSBwbGFjZWQgdG9cbiAgICAgICAgICAgICAgbGVhZCB0aGUgY2hhcmdlIG9mIHBpb25lZXJpbmcgcGFkZWwgYWNyb3NzIEFmcmljYS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2ZvbnQtaGVhZGluZyB0ZXh0LTJ4bCc+V2hhdCBkbyB3ZSB3YW50IGZyb20geW91PzwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtYm9sZCBpdGFsaWMnPlxuICAgICAgICAgICAgICBXZSBhcmUgbG9va2luZyBmb3IgaW52ZXN0b3JzIGVhZ2VyIHRvIGJlIGEgcGFydCBvZiBhbiBleGNpdGluZyBhbmRcbiAgICAgICAgICAgICAgZ3JvdW5kYnJlYWtpbmcgaW52ZXN0bWVudC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBXZSBhcmUganVzdCBhYm91dCB0byBzZXQgb2ZmIG9uIGEgcm9hZHNob3cgd2hlcmUgd2Ugd2lsbCBwcmVzZW50XG4gICAgICAgICAgICAgIHRvIGF1ZGllbmNlcyBhY3Jvc3MgRGVubWFyayBhbmQgU3dlZGVuIChzZWUgZGF0ZXMgYW5kIGxvY2F0aW9ucyBvblxuICAgICAgICAgICAgICB0aGlzIHBhZ2UpLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nZm9udC1ib2xkIG10LTQgJz5cbiAgICAgICAgICAgICAgV2Ugd291bGQgbGlrZSB5b3UgdG8gam9pbiB1cyB0byBsZWFybjpcbiAgICAgICAgICAgIDwvaDM+eycgJ31cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9JyBsaXN0LWRpc2MgbGlzdC1pbnNpZGUnPlxuICAgICAgICAgICAgICA8bGk+V2h5IGFyZSB3ZSBjb21taXR0ZWQgdG8gYnJpbmdpbmcgcGFkZWwgdG8gQWZyaWNhLjwvbGk+XG4gICAgICAgICAgICAgIDxsaT5XaG8gaXMgb24gb3VyIHRlYW0uPC9saT5cbiAgICAgICAgICAgICAgPGxpPldoYXQgbWFrZXMgdXMgc28gY2FwYWJsZSBvZiBzdWNjZWVkaW5nLiA8L2xpPlxuICAgICAgICAgICAgICA8bGk+SG93IHlvdSBjYW4gam9pbiB1cy48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhc2lkZSBpZD0nZXZlbnRzJyBjbGFzc05hbWU9J2JnLWdyYXktNTAgbWQ6dy0yLzUgaC1maXQgICBzcGFjZS15LTIgICAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTgnPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1oZWFkaW5nIHBiLTQnPlVwY29taW5nIGV2ZW50czwvaDI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdzcGFjZS15LTMgdGV4dC14cyAnPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2l0YWxpYyc+XG4gICAgICAgICAgICAgICAgUmVnaXN0ZXIgeW91ciBpbnRlcmVzdCBpbiB0aGUgZm9ybSBiZWxvdyBhbmQgd2Ugd2lsbCBrZWVwIHlvdVxuICAgICAgICAgICAgICAgIHVwZGF0ZWRcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5TdG9ja2hvbG0gPC9zdHJvbmc+IC0gMm5kIFNlcHRlbWJlciAteycgJ31cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3VuZGVybGluZSBib2xkJyBocmVmPSdtYWlsdG86aGFrYW5AYmFtYndhLmNvbSc+XG4gICAgICAgICAgICAgICAgICBFbWFpbCBmb3IgZGV0YWlsc1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+R290aGVuYnVyZyA8L3N0cm9uZz4gLSBkYXRlIGFuZCB0aW1lIFRCQ1xuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5NYWxtXHUwMEY2PC9zdHJvbmc+IC0gZGF0ZSBhbmQgdGltZSBUQkNcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+SGVsc2luZ2Jvcmc8L3N0cm9uZz4gLSBkYXRlIGFuZCB0aW1lIFRCQ1xuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5KXHUwMEY2bmtcdTAwRjZwaW5nPC9zdHJvbmc+IC0gZGF0ZSBhbmQgdGltZSBUQkNcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+Q29wZW5oYWdlbjwvc3Ryb25nPiAtIGRhdGUgYW5kIHRpbWUgVEJDXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCAgIG15LTYgdGV4dC1zbGF0ZS05MDAgIGRhcms6dGV4dC13aGl0ZSBtZDpteS1hdXRvIHNwYWNlLXktdnctNC1taW5AeGwgYmctd2hpdGUgZGFyazpiZy1zbGF0ZS05MDAgICBiZy1vcGFjaXR5LTUwIGJhY2tkcm9wLWJsdXItbGcgc2hhZG93LTJ4bFx0IHAtMTIgICAgaC1maXQgJ1xuICAgICAgICAgICAgbWV0aG9kPSdwb3N0J1xuICAgICAgICAgICAgYXJpYS1oaWRkZW49e3N0YXRlID09PSAnc3VjY2Vzcyd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtaGVhZGluZyB0ZXh0LWxnICB1cHBlcmNhc2UgbWItNCc+XG4gICAgICAgICAgICAgICAgSW50ZXJlc3RlZCBpbiBoZWFyaW5nIG1vcmU/XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJyBjbGFzc05hbWU9J2Jsb2NrICB0ZXh0LXhzICAgJz5cbiAgICAgICAgICAgICAgICAgIFlvdXIgTmFtZVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcbiAgICAgICAgICAgICAgICAgIGlkPSduYW1lJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZGFyazp0ZXh0LXNsYXRlLTkwMCB0ZXh0LXNtIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNSAwICBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCdcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdKb2UgQmxvZ2dzJ1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCcgY2xhc3NOYW1lPSdibG9jayB0ZXh0LXhzICAnPlxuICAgICAgICAgICAgICAgICAgWW91ciBlbWFpbFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgaWQ9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1zbSBkYXJrOnRleHQtc2xhdGUtOTAwICBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAnXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nbmFtZUBtYWlsLmNvbSdcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdjb21wYW55JyBjbGFzc05hbWU9J2Jsb2NrIHRleHQteHMgJz5cbiAgICAgICAgICAgICAgICAgIFdoZXJlIHdvdWxkIHlvdSBsaWtlIHRvIG1lZXQgdXM/XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICBpZD0nZXZlbnQnXG4gICAgICAgICAgICAgICAgICBuYW1lPSdldmVudCdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtc20gZGFyazp0ZXh0LXNsYXRlLTkwMCAgIGJsb2NrIHctZnVsbCBwLTIuNSAgICBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nc3RvY2tob2xtJz5TdG9ja2hvbG08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2dvdGhlbmJ1cmcnPkdvdGhlbmJ1cmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J21hbG1vJz5NYWxtXHUwMEY2PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdoZWxzaW5nYm9yZyc+SGVsc2luZ2Jvcmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2pvbmtvcGluZyc+Slx1MDBGNm5rXHUwMEY2cGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nY29wZW5oYWdlbic+Q29wZW5oYWdlbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nY29wZW5oYWdlbic+T25saW5lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdjb3BlbmhhZ2VuJz5Eb24ndCB3YW50IHRvIG1lZXQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9JyBweS00IHB4LTYgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgdG8tc2xhdGUtOTAwIGRhcms6dG8teWVsbG93LTMwMCB0ZXh0LXdoaXRlIGRhcms6dGV4dC1zbGF0ZS05MDAgZm9udC1oZWFkaW5nIHVwcGVyY2FzZSBob3ZlcjpiZy1ncmFkaWVudC10by10bCBob3ZlcjpzY2FsZS0xMDUgc2hhZG93LTJ4bCAnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgPHA+e2FjdGlvbkRhdGE/LmVycm9yID8gYWN0aW9uRGF0YS5tZXNzYWdlIDogPD4gJm5ic3A7IDwvPn08L3A+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsICBteS0xMCB0ZXh0LXNsYXRlLTkwMCAgZGFyazp0ZXh0LXdoaXRlIG1kOm15LWF1dG8gc3BhY2UteS12dy00LW1pbkB4bCBiZy13aGl0ZSBkYXJrOmJnLXNsYXRlLTkwMCBkYXJrOmJnLW9wYWNpdHktNzUgIGJnLW9wYWNpdHktNTAgYmFja2Ryb3AtYmx1ci1sZyBzaGFkb3ctMnhsXHQgcC02ICAgIGgtZml0ICdcbiAgICAgICAgICAgIC8vY2xhc3NOYW1lPXsgaWYgKHN0YXRlID09PSBcInN1Y2Vzc1wiKSAgeydoaWRkZW4nfSBlbHNleydibG9jayd9IH1cbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPXtzdGF0ZSAhPT0gJ3N1Y2Nlc3MnfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtaGVhZGluZyc+XHVEODNEXHVERTgwIFlvdSdyZSBvbiB0aGUgbGlzdCE8L2gyPlxuXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVGhhbmtzIGZvciBleHByZXNzaW5nIGludGVyZXN0LCB5b3Ugd2lsbCBiZSBzZW50IGFuIGVtYWlsIHdpdGhcbiAgICAgICAgICAgICAgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0ndW5kZXJsaW5lIHRleHQtZ3JlZW4tMzAwJyB0bz0nLic+XG4gICAgICAgICAgICAgIFN0YXJ0IE92ZXJcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hc2lkZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxDVEFcbiAgICAgICAgaGVhZGluZz0nQXJlIHlvdSBpbnRlcmVzdGVkIGluIHBhcnRuZXJpbmcgd2l0aCB0aGUgTnVtYmVyIDEgQWZyaWNhbiBQYWRlbCBjb21wYW55PydcbiAgICAgICAgYm9keT0nQXQgdGhpcyB2ZXJ5IGVhcmx5IHN0YWdlIGluIG91ciBkZXZlbG9wbWVudCB3ZSBhcmUgaW50ZXJlc3RlZCBpbiBmaW5kaW5nIHBhcnRuZXJzIGZyb20gYWxsIHNlY3RvcnMgdG8gaW52ZXN0aWdhdGUgcGFydG5lcnNoaXAgcG9zc2liaWxpdGllcy4gSWYgdGhpcyBzb3VuZHMgbGlrZSB5b3UgLSBnZXQgaW4gdG91Y2guJ1xuICAgICAgICBidXR0b25UZXh0PSdDb250YWN0IFVzJ1xuICAgICAgICBidXR0b25Ubz0nI2NvbnRhY3QnXG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XG5cbmludGVyZmFjZSBDVEFDb250ZW50IHtcbiAgaGVhZGluZzogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIGJ1dHRvblRleHQ6IHN0cmluZztcbiAgYnV0dG9uVG86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ1RBKHByb3BzOiBDVEFDb250ZW50KSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIGlkPSdwYXJ0bmVycydcbiAgICAgIGNsYXNzTmFtZT0nW2N0YV0gbXktMTYgcC0yMCBtZDpteC0yMCBiZy1zbGF0ZS05MDAgIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgYWxpZ24tbWlkZGxlIHJvdW5kZWQtbWQgc2hhZG93LTJ4bCB0ZXh0LXdoaXRlJ1xuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPScgIG0tYXV0byAgdGV4dC1jZW50ZXIgIHNwYWNlLXktdnctNi1taW5AeGwgbWQ6dy0zLzQgICc+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtaGVhZGluZyB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1iciBmcm9tLWdyZWVuLTMwMCAgdmlhLWdyZWVuLTUwMCB0by15ZWxsb3ctNDAwICc+XG4gICAgICAgICAge3Byb3BzLmhlYWRpbmd9XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nYmFzZSc+e3Byb3BzLmJvZHl9PC9wPlxuICAgICAgICA8TGluayB0bz17cHJvcHMuYnV0dG9uVG99IGNsYXNzTmFtZT0nIGlubGluZS1mbGV4ICc+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3B5LTQgcHgtNiBiZy1ncmFkaWVudC10by1iciBmcm9tLWdyZWVuLTMwMCAgdmlhLWdyZWVuLTUwMCB0by15ZWxsb3ctNDAwIHJvdW5kZWQteGwgdGV4dC1ibGFjayBmb250LWJvbGQgaG92ZXI6YmctZ3JhZGllbnQtdG8tdGwgaG92ZXI6c2NhbGUtMTA1IHNoYWRvdy0yeGwnPlxuICAgICAgICAgICAge3Byb3BzLmJ1dHRvblRleHR9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgaGVyb0ltZyBmcm9tICcuLi9pbWFnZXMvcGFkZWwtaGVyby5qcGcnO1xuaW1wb3J0IHBhZGVsSW1nIGZyb20gJy4uL2ltYWdlcy9wYXJ0bmVycy9wYWRlbHRvdGFsLWxvZ28ucG5nJztcbmltcG9ydCBwYWRlbElxIGZyb20gJy4uL2ltYWdlcy9wYXJ0bmVycy9wYWRlbC1pcS5wbmcnO1xuXG5pbnRlcmZhY2UgSGVyb0NvbnRlbnQge1xuICBoZWFkaW5nOiBzdHJpbmc7XG4gIGJvZHk6IHN0cmluZztcbiAgYnV0dG9uMVRleHQ6IHN0cmluZztcbiAgYnV0dG9uMVRvOiBzdHJpbmc7XG4gIGJ1dHRvbjJUZXh0OiBzdHJpbmc7XG4gIGJ1dHRvbjJUbzogc3RyaW5nO1xuICBpbWdTcmM6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVybyhwcm9wczogSGVyb0NvbnRlbnQpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPSdbaGVyb10gY29udGFpbmVyIG14LWF1dG8gYmctbm9uZSBtZDpoLXNjcmVlbiBtZDpwdC0zMiBweS00NCBtZDpwYi0xMiAgbWQ6LW10LTE2IHB4LTggc206cHgtMTIgZmxleCAgZmxleC1jb2wgbWQ6ZmxleC1yb3cgYWxpZ24tbWlkZGxlIG1kOmp1c3RpZnktYmV0d2VlbiAgYmctY292ZXIgIG1kOnNwYWNlLXgtMTJcdCAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIG1kOnctMy81IG15LWF1dG8gc3BhY2UteS12dy0yLW1pbkB4bCBtZDpweS0xNiAgICAnPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1oZWFkaW5nIHVwcGVyY2FzZSc+V2hhdCBoYXBwZW5zIHdoZW48L3A+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC00eGwgbWQ6dGV4dC02eGwgcGItNCBmb250LWhlYWRpbmcgdXBwZXJjYXNlICc+XG4gICAgICAgICAgICBUaGV7JyAnfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPScgbWQ6dGV4dC10cmFuc3BhcmVudCBtZDpiZy1jbGlwLXRleHQgbWQ6YmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgIHZpYS1ncmVlbi01MDAgdG8tc2xhdGUtOTAwIGRhcms6dG8teWVsbG93LTMwMCc+XG4gICAgICAgICAgICAgIHdvcmxkJ3MgZmFzdGVzdCBncm93aW5nIHNwb3J0XG4gICAgICAgICAgICA8L3NwYW4+eycgJ31cbiAgICAgICAgICAgIG1lZXRzIHRoZXsnICd9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21kOnRleHQtdHJhbnNwYXJlbnQgbWQ6YmctY2xpcC10ZXh0IG1kOmJnLWdyYWRpZW50LXRvLWJyIGZyb20teWVsbG93LTMwMCAgdmlhLXllbGxvdy01MDAgdG8tc2xhdGUtOTAwIGRhcms6dG8tZ3JlZW4tMzAwJz5cbiAgICAgICAgICAgICAgd29ybGQncyBmYXN0ZXN0IGdyb3dpbmcgY29udGluZW50XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA/XG4gICAgICAgICAgPC9oMT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPScjZXZlbnRzJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdteS02IFxuICAgICAgICAgICAgIGlubGluZS1ibG9jayB0ZXh0LWxnIHB5LTQgcHgtNiBiZy1ncmFkaWVudC10by1iciBmcm9tLWdyZWVuLTMwMCB0by1zbGF0ZS05MDAgZGFyazp0by15ZWxsb3ctMzAwIHRleHQtd2hpdGUgZGFyazp0ZXh0LXNsYXRlLTkwMCBmb250LWhlYWRpbmcgdXBwZXJjYXNlIGhvdmVyOmJnLWdyYWRpZW50LXRvLXRsIGhvdmVyOnNjYWxlLTEwNSBzaGFkb3ctMnhsICdcbiAgICAgICAgICA+XG4gICAgICAgICAgICBKb2luIHVzIHRvIGZpbmQgb3V0XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQge1xuICBGb3JtLFxuICBMaW5rLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgdXNlTG9hZGVyRGF0YSxcbiAgQWN0aW9uRnVuY3Rpb24sXG59IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IE1ldGEgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBnZXRGaWxtcywgRmlsbSB9IGZyb20gJ34vYXBpL2ZpbG1zJztcbmltcG9ydCBDVEEgZnJvbSAnfi9Db21wb25lbnRzL2N0YSc7XG5pbXBvcnQgSGVybyBmcm9tICd+L0NvbXBvbmVudHMvaGVybyc7XG5pbXBvcnQgSGVyb0FsdCBmcm9tICd+L0NvbXBvbmVudHMvaGVyby1hbHQnO1xuaW1wb3J0IEhlcm9XaGl0ZSBmcm9tICd+L0NvbXBvbmVudHMvaGVyby13aGl0ZSc7XG5cbmltcG9ydCBJbmZvIGZyb20gJ34vQ29tcG9uZW50cy9pbmZvJztcbmltcG9ydCBpbmZvSW1nIGZyb20gJy4uL2ltYWdlcy9hYm91dC1wYS5qcGcnO1xuaW1wb3J0IHsgZ2V0Q2xpZW50LCB1cmxGb3IgfSBmcm9tICd+L2xpYi9zYW5pdHkvZ2V0Q2xpZW50JztcbmltcG9ydCB7XG4gIFBvcnRhYmxlVGV4dCxcbiAgUG9ydGFibGVUZXh0VHlwZUNvbXBvbmVudCxcbiAgUG9ydGFibGVUZXh0Q29tcG9uZW50c1Byb3ZpZGVyLFxufSBmcm9tICdAcG9ydGFibGV0ZXh0L3JlYWN0JztcblxuLy8gbG9hZGVyKCkgbXVzdCBiZSBhc3luYyFcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoKSB7XG4gIGNvbnN0IG5ld3NQb3N0cyA9IGF3YWl0IGdldENsaWVudCgpLmZldGNoKFxuICAgIGAqW190eXBlID09IFwibmV3c1wiXXsgX2lkLCB0aXRsZSwgc2x1ZywgXCJmZWF0dXJlSW1hZ2VcIjogZmVhdHVyZS5hc3NldC0+dXJsXG4gICB9YFxuICApO1xuICBjb25zdCBhYm91dFRleHQgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaChcbiAgICBgKltfdHlwZSA9PSBcInNlY3Rpb25zXCIgJiYgc2x1Zy5jdXJyZW50ID09IFwiYWJvdXQtcGFkZWwtYWZyaWNhXCIgXXsgX2lkLCB0aXRsZSwgb3ZlcnZpZXcsIFwiZmVhdHVyZUltYWdlXCI6IGZlYXR1cmUuYXNzZXQtPnVybFxuICAgfWBcbiAgKTtcbiAgcmV0dXJuIHsgbmV3c1Bvc3RzLCBhYm91dFRleHQgfTtcbn1cblxuLy8gU2VydmVyIFNpZGVcbi8vZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbi8vY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4vL2NvbnN0IHRpdGxlID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3RpdGxlJyk7XG4vL3JldHVybiBnZXRGaWxtcyh0aXRsZSk7XG4vL307XG5cbmV4cG9ydCBjb25zdCBtZXRhID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnUGFkZWwgQWZyaWNhIHwgVGhlIE51bWJlciAxIEFmcmljYW4gUGFkZWwgQ29tcGFueScsXG4gICAgZGVzY3JpcHRpb246ICdQYWRlbCBBZnJpY2EgaG9tZSBwYWdlJyxcbiAgICBrZXl3b3JkczogJ3BhZGVsLCBhZnJpY2EsIHNwb3J0JyxcbiAgfTtcbn07XG5cbi8vIENsaWVudCBTaWRlXG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBsZXQgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGxldCBlbWFpbCA9IGZvcm1EYXRhLmdldCgnZW1haWwnKTtcbiAgbGV0IG5hbWUgPSBmb3JtRGF0YS5nZXQoJ25hbWUnKTtcbiAgbGV0IGNvbXBhbnkgPSBmb3JtRGF0YS5nZXQoJ2NvbXBhbnknKTtcbiAgLy9wcm9jZXNzLmVudi5DT05WRVJUS0lUX0tFWSA9ICdsR2Y2a09uRk9PQy1ZT2lrWkRfWVB3JztcblxuICBjb25zdCBBUElfS0VZID0gJ2xHZjZrT25GT09DLVlPaWtaRF9ZUHcnO1xuICBjb25zdCBGT1JNX0lEID0gJzMwMjIwNTQnO1xuICBjb25zdCBBUEkgPSAnaHR0cHM6Ly9hcGkuY29udmVydGtpdC5jb20vdjMvJztcblxuICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJfS9mb3Jtcy8ke0ZPUk1fSUR9L3N1YnNjcmliZWAsIHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBlbWFpbDogZW1haWwsXG4gICAgICBmaXJzdF9uYW1lOiBuYW1lLFxuICAgICAgZmllbGRzOiB7IGNvbXBhbnk6IGNvbXBhbnkgfSxcbiAgICAgIGFwaV9rZXk6IEFQSV9LRVksXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICB9LFxuICB9KTtcblxuICAvL2NvbnNvbGUubG9nKHsgZW1haWwgfSwgeyBuYW1lIH0sIHsgY29tcGFueSB9KTtcbiAgcmV0dXJuIHJlcy5qc29uKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBuZXdzUG9zdHMsIGFib3V0VGV4dCB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIGNvbnN0IG15UG9ydGFibGVUZXh0Q29tcG9uZW50cyA9IHtcbiAgICB0eXBlczoge1xuICAgICAgaW1hZ2U6ICh2YWx1ZTogYW55KSA9PiAoXG4gICAgICAgIDxpbWcgc3JjPXt2YWx1ZS5hc3NldH0ga2V5PXt2YWx1ZS5faWR9IGNsYXNzTmFtZT17dmFsdWUuYXNzZXR9PjwvaW1nPlxuICAgICAgKSxcbiAgICB9LFxuICB9O1xuICAvL2NvbnN0IGZpbG1zID0gdXNlTG9hZGVyRGF0YTxGaWxtW10+KCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZXJvXG4gICAgICAgIGhlYWRpbmc9J1BhZGVsIGhhcyB0YWtlbiBFdXJvcGUgYnkgc3Rvcm0uIE5vdyBpdFx1MjAxOXMgdGltZSB0byBicmluZyBpdCB0byBBZnJpY2EuXG4gICAgICAgICdcbiAgICAgICAgYm9keT0nVXNpbmcgb3VyIGV4dGVuc2l2ZSBrbm93bGVkZ2Ugb2YgQWZyaWNhIGFuZCBidXNpbmVzcyBkZXZlbG9wbWVudCwgd2UgYWltIHRvIHByb3ZpZGUgUGFkZWwsIGFzIGEgc3BvcnQgYW5kIGEgY29tbXVuaXR5IGVuYWJsZXIsIHRvIEdoYW5hLCBLZW55YSwgTmlnZXJpYSBhbmQgb3RoZXIgU3ViIFNhaGFyYW4gY291bnRyaWVzLlxuICAgICAgICAnXG4gICAgICAgIGJ1dHRvbjFUZXh0PSdMZWFybiBNb3JlJ1xuICAgICAgICBidXR0b24xVG89JyNhYm91dCdcbiAgICAgICAgYnV0dG9uMlRleHQ9J1dhbnQgdG8gUGFydG5lcj8nXG4gICAgICAgIGJ1dHRvbjJUbz0nI2Fib3V0J1xuICAgICAgICBpbWdTcmM9JydcbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIEZvcm0sIExpbmssIHVzZUFjdGlvbkRhdGEgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgaGVyb0ltZyBmcm9tICcuLi9pbWFnZXMvcGFkZWwtaGVyby5qcGcnO1xuaW1wb3J0IHBhZGVsSW1nIGZyb20gJy4uL2ltYWdlcy9wYXJ0bmVycy9wYWRlbHRvdGFsLWxvZ28ucG5nJztcbmltcG9ydCBwYWRlbElxIGZyb20gJy4uL2ltYWdlcy9wYXJ0bmVycy9wYWRlbC1pcS5wbmcnO1xuXG5pbnRlcmZhY2UgSGVyb0NvbnRlbnQge1xuICBoZWFkaW5nOiBzdHJpbmc7XG4gIGJvZHk6IHN0cmluZztcbiAgYnV0dG9uMVRleHQ6IHN0cmluZztcbiAgYnV0dG9uMVRvOiBzdHJpbmc7XG4gIGJ1dHRvbjJUZXh0OiBzdHJpbmc7XG4gIGJ1dHRvbjJUbzogc3RyaW5nO1xuICBpbWdTcmM6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVybyhwcm9wczogSGVyb0NvbnRlbnQpIHtcbiAgbGV0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKCk7XG4gIGxldCBzdGF0ZTogJ2lkbGUnIHwgJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyA9IGFjdGlvbkRhdGE/LnN1YnNjcmlwdGlvblxuICAgID8gJ3N1Y2Nlc3MnXG4gICAgOiBhY3Rpb25EYXRhPy5lcnJvclxuICAgID8gJ2Vycm9yJ1xuICAgIDogJ2lkbGUnO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT0nW2hlcm9dIGNvbnRhaW5lciBteC1hdXRvIGJnLW5vbmUgIG1kOnB0LTMyIG1kOnBiLTEyIG1iLTEyIG1kOi1tdC0xNiBweC04IHNtOnB4LTEyIGZsZXggIGZsZXgtY29sIG1kOmZsZXgtcm93IGFsaWduLW1pZGRsZSBtZDpqdXN0aWZ5LWJldHdlZW4gIGJnLWNvdmVyICBtZDpzcGFjZS14LTEyXHQgJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBtZDp3LTIvNSBtZDpteS1hdXRvIHNwYWNlLXktdnctMi1taW5AeGwgbWQ6cHktMTYgICc+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC00eGwgbWQ6dGV4dC02eGwgZm9udC1oZWFkaW5nIHVwcGVyY2FzZSAnPlxuICAgICAgICAgICAgUGFkZWwgaGFzIHRha2VuIEV1cm9wZSBieSBzdG9ybS5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lIG1kOmJsb2NrIG1kOnRleHQtdHJhbnNwYXJlbnQgbWQ6YmctY2xpcC10ZXh0IG1kOmJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwICB2aWEtZ3JlZW4tNTAwIHRvLXNsYXRlLTkwMCBkYXJrOnRvLXllbGxvdy0zMDAnPlxuICAgICAgICAgICAgICBOb3cgaXQncyB0aW1lIHRvIGJyaW5nIGl0IHRvIEFmcmljYVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtYmFzZSAgJz5cbiAgICAgICAgICAgIFx1RDgzRFx1REM0QiBJbnRlcmVzdGVkIGluIGEgcGFydG5lcnNoaXA/XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J3VuZGVybGluZScgaHJlZj0nbWFpbHRvOmhlbGxvQHBhZGVsLmFmcmljYSc+XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIEVtYWlsIHVzXG4gICAgICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgbWQ6dy0yLzUgbXktMTAgdGV4dC1zbGF0ZS05MDAgIGRhcms6dGV4dC13aGl0ZSBtZDpteS1hdXRvIHNwYWNlLXktdnctNC1taW5AeGwgYmctd2hpdGUgZGFyazpiZy1zbGF0ZS05MDAgZGFyazpiZy1vcGFjaXR5LTI1ICBiZy1vcGFjaXR5LTUwIGJhY2tkcm9wLWJsdXItbGcgc2hhZG93LTJ4bFx0IHAtNiAgICBoLWZpdCAnXG4gICAgICAgICAgbWV0aG9kPSdwb3N0J1xuICAgICAgICAgIGFyaWEtaGlkZGVuPXtzdGF0ZSA9PT0gJ3N1Y2Nlc3MnfVxuICAgICAgICA+XG4gICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LWhlYWRpbmcgdGV4dC1sZyAgdXBwZXJjYXNlJz5cbiAgICAgICAgICAgICAgSm9pbiB0aGUgTWFpbGluZyBMaXN0XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNic+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJyBjbGFzc05hbWU9J2Jsb2NrICB0ZXh0LXhzICAgJz5cbiAgICAgICAgICAgICAgICBZb3VyIE5hbWVcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICBuYW1lPSduYW1lJ1xuICAgICAgICAgICAgICAgIGlkPSduYW1lJ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGRhcms6dGV4dC1zbGF0ZS05MDAgdGV4dC1zbSBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgMCAgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwJ1xuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdKb2UgQmxvZ2dzJ1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi02Jz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJyBjbGFzc05hbWU9J2Jsb2NrIHRleHQteHMgICc+XG4gICAgICAgICAgICAgICAgWW91ciBlbWFpbFxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcbiAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICBpZD0nZW1haWwnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1zbSBkYXJrOnRleHQtc2xhdGUtOTAwICBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAnXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J25hbWVAbWFpbC5jb20nXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nY29tcGFueScgY2xhc3NOYW1lPSdibG9jayB0ZXh0LXhzICc+XG4gICAgICAgICAgICAgICAgWW91ciBDb21wYW55XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgaWQ9J2NvbXBhbnknXG4gICAgICAgICAgICAgICAgbmFtZT0nY29tcGFueSdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LXNtIGRhcms6dGV4dC1zbGF0ZS05MDAgICBibG9jayB3LWZ1bGwgcC0yLjUgICAgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwJ1xuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdBY21lIEluYydcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICBjbGFzc05hbWU9JyBweS00IHB4LTYgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgdG8tc2xhdGUtOTAwIGRhcms6dG8teWVsbG93LTMwMCB0ZXh0LXdoaXRlIGRhcms6dGV4dC1zbGF0ZS05MDAgZm9udC1oZWFkaW5nIHVwcGVyY2FzZSBob3ZlcjpiZy1ncmFkaWVudC10by10bCBob3ZlcjpzY2FsZS0xMDUgc2hhZG93LTJ4bCAnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICA8cD57YWN0aW9uRGF0YT8uZXJyb3IgPyBhY3Rpb25EYXRhLm1lc3NhZ2UgOiA8PiAmbmJzcDsgPC8+fTwvcD5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgbWQ6dy0yLzUgbXktMTAgdGV4dC1zbGF0ZS05MDAgIGRhcms6dGV4dC13aGl0ZSBtZDpteS1hdXRvIHNwYWNlLXktdnctNC1taW5AeGwgYmctd2hpdGUgZGFyazpiZy1zbGF0ZS05MDAgZGFyazpiZy1vcGFjaXR5LTI1ICBiZy1vcGFjaXR5LTUwIGJhY2tkcm9wLWJsdXItbGcgc2hhZG93LTJ4bFx0IHAtNiAgICBoLWZpdCAnXG4gICAgICAgICAgLy9jbGFzc05hbWU9eyBpZiAoc3RhdGUgPT09IFwic3VjZXNzXCIpICB7J2hpZGRlbid9IGVsc2V7J2Jsb2NrJ30gfVxuICAgICAgICAgIGFyaWEtaGlkZGVuPXtzdGF0ZSAhPT0gJ3N1Y2Nlc3MnfVxuICAgICAgICA+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1oZWFkaW5nJz5cdUQ4M0RcdURFODAgWW91J3JlIFN1YnNjcmliZWQhPC9oMj5cblxuICAgICAgICAgIDxwPlRoYW5rIHlvdSBmb3Igc2lnbmluZyB1cCB0byBvdXIgbWFpbGluZyBsaXN0PC9wPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0ndW5kZXJsaW5lIHRleHQtZ3JlZW4tMzAwJyB0bz0nLic+XG4gICAgICAgICAgICBTdGFydCBPdmVyXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPScgbXgtYXV0byB3LTIvMyByb3VuZGVkLWxnIG1kOnB5LTEyIHB5LTEyIGJnLXNsYXRlLTkwMCAgbWItMTIgbWQ6LW10LTE2IHB4LTggc206cHgtMTIgZmxleCAgZmxleC1jb2wgYWxpZ24tbWlkZGxlIG1kOmp1c3RpZnktYmV0d2VlbiAgbWQ6c3BhY2UteS02ICBcdCc+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J20tYXV0byB1cHBlcmNhc2UgdGV4dC1jZW50ZXIgZm9udC1oZWFkaW5nIHRleHQteGwgZGFyazp0ZXh0LXdoaXRlIHRleHQtd2hpdGUgb3BhY2l0eS03MCc+XG4gICAgICAgICAgT3VyIFN0cmF0ZWdpYyBQYXJ0bmVyc1xuICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXIgbS1hdXRvIHNwYWNlLXgtOCAnPlxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vcGFkZWx0b3RhbC5zZSc+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy01NiBoLWF1dG8gb3BhY2l0eS03NSB0cmFuc2l0aW9uIGVhc2UtaW4tb3UgIGhvdmVyOm9wYWNpdHktMTAwIGhvdmVyOnNjYWxlLTEwNSBjdXJzb3ItcG9pbnRlciAnXG4gICAgICAgICAgICAgIHNyYz17cGFkZWxJbWd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL3BhZGVsaXEuaW8vJz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTU2IGgtYXV0byBvcGFjaXR5LTc1ICAgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBob3ZlcjpvcGFjaXR5LTEwMCBob3ZlcjpzY2FsZS0xMDUgY3Vyc29yLXBvaW50ZXIgJ1xuICAgICAgICAgICAgICBzcmM9e3BhZGVsSXF9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IFBpY29TYW5pdHkgZnJvbSAncGljb3Nhbml0eSc7XG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xuXG4vLyBTdGFuZGFyZCBjbGllbnQgZm9yIGZldGNoaW5nIGRhdGFcbmV4cG9ydCBjb25zdCBzYW5pdHlDbGllbnQgPSBuZXcgUGljb1Nhbml0eShjb25maWcpO1xuXG5leHBvcnQgY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihzYW5pdHlDbGllbnQpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXJsRm9yKHNvdXJjZTogYW55KSB7XG4gIHJldHVybiBidWlsZGVyLmltYWdlKHNvdXJjZSk7XG59XG5cbi8vIEF1dGhlbnRpY2F0ZWQgY2xpZW50IGZvciBmZXRjaGluZyBkcmFmdCBkb2N1bWVudHNcbmV4cG9ydCBjb25zdCBwcmV2aWV3Q2xpZW50ID0gbmV3IFBpY29TYW5pdHkoe1xuICAuLi5jb25maWcsXG4gIHVzZUNkbjogZmFsc2UsXG4gIC8vdG9rZW46IHByb2Nlc3MuZW52LlNBTklUWV9BUElfVE9LRU4sXG59KTtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNob29zZSB0aGUgY29ycmVjdCBjbGllbnRcbmV4cG9ydCBjb25zdCBnZXRDbGllbnQgPSAodXNlUHJldmlldyA9IGZhbHNlKSA9PlxuICB1c2VQcmV2aWV3ID8gcHJldmlld0NsaWVudCA6IHNhbml0eUNsaWVudDtcbiIsICJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGlWZXJzaW9uOiAnMjAyMS0wMy0yNScsXG4gIC8vIEZpbmQgdGhlc2UgaW4geW91ciAuL3N0dWRpby9zYW5pdHkuanNvbiBmaWxlXG4gIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJyxcbiAgcHJvamVjdElkOiAncWk4aHIzcnYnLFxuICB1c2VDZG46IGZhbHNlLFxufTtcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgeyBnZXRDbGllbnQgfSBmcm9tICd+L2xpYi9zYW5pdHkvZ2V0Q2xpZW50JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcih7IHBhcmFtcyB9OiB7IHBhcmFtczogYW55IH0pIHtcbiAgLy8gUXVlcnkgZm9yIF9hbGxfIGRvY3VtZW50cyB3aXRoIHRoaXMgc2x1Z1xuICAvLyBUaGVyZSBjb3VsZCBiZSB0d286IERyYWZ0IGFuZCBQdWJsaXNoZWQhXG4gIGNvbnN0IGluaXRpYWxEYXRhID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJuZXdzXCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXXsgX2lkLCB0aXRsZSwgc2x1ZywgXCJmZWF0dXJlSW1hZ2VcIjogZmVhdHVyZS5hc3NldC0+dXJsXG4gIH1gLFxuICAgIHsgc2x1ZzogcGFyYW1zLnNsdWcgfVxuICApO1xuXG4gIHJldHVybiB7IGluaXRpYWxEYXRhIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NQb3N0KCkge1xuICBsZXQgeyBpbml0aWFsRGF0YSB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBwYWRkaW5nOiAyMCB9fT5cbiAgICAgIDxoMT57aW5pdGlhbERhdGFbMF0udGl0bGV9PC9oMT5cbiAgICAgIDxpbWcgc3JjPXtpbml0aWFsRGF0YVswXS5mZWF0dXJlSW1hZ2V9PjwvaW1nPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBDVEEgZnJvbSAnfi9Db21wb25lbnRzL2N0YSc7XG5pbXBvcnQgRXZlbnRJbWcgZnJvbSAnfi9pbWFnZXMvZXZlbnRfYWQucG5nJztcbmltcG9ydCB7IE1ldGEgfSBmcm9tICdyZW1peCc7XG5cbmV4cG9ydCBjb25zdCBtZXRhID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnQWJvdXQgUGFkZWwgQWZyaWNhIC0gUGFkZWwgaXMgTm90IEp1c3QgYSBTcG9ydCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnTGVhcm4gYWJvdXQgaG93IFBhZGVsIEFmcmljYSBpcyBicmluZ2luZyBwYWRlbCwgYXMgYSBzcG9ydCwgYSBsaWZlc3R5bGUsIGFuZCBhIGNvbW11bml0eSBidWlsZGVyLCB0byBBZnJpY2EuICAgJyxcbiAgICBrZXl3b3JkczogJ3BhZGVsLCBhZnJpY2EsIHNwb3J0LCBnaGFuYSwgcndhbmRhLCBrZW55YSwgdWdhbmRhLCBjb21tdW5pdHknLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndy1mdWxsIG1kOnAtMzIgcHktMTIgcHgtMyBzcGFjZS15LTEyICBmbGV4IG1kOmZsZXgtcm93IGZsZXgtY29sIGJnLXdoaXRlIGp1c3RpZnktYmV0d2VlbiB0ZXh0LWJsYWNrICc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZDp3LTMvNSBtZDpweC0xMiBweC00IHNwYWNlLXktNCc+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC01eGwgIGZvbnQtaGVhZGluZyAgJz5BYm91dCBQYWRlbCBBZnJpY2E8L2gxPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2ZvbnQtaGVhZGluZyB0ZXh0LTJ4bCc+V2hvIHdlIGFyZTwvaDI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXZSBiZWxpZXZlIHRoYXQgQWZyaWNhIGlzIHRoZSBuZXh0IGdyb3d0aCBjZW50cmUgb2YgdGhlIHdvcmxkIGFuZFxuICAgICAgICAgICAgdGhhdCBpdCBwcm92aWRlcyBpbW1lbnNlIG9wcG9ydHVuaXRpZXMgZm9yIHRoZSBmZXcgd2hvIHRha2UgdGhlIGxlYXBcbiAgICAgICAgICAgIGFuZCBleHBhbmQgdG8gQWZyaWNhLiBPbiB0aGUgb3RoZXIgaGFuZCwgd2UgYXJlIGFsc28gdmVyeSBhd2FyZSB0aGF0XG4gICAgICAgICAgICBpbiBvcmRlciB0byBzdWNjZWVkIGluIEFmcmljYSwgaXQgcmVxdWlyZXMgaW4tZGVwdGggdW5kZXJzdGFuZGluZyBvZlxuICAgICAgICAgICAgdGhlIHByb2R1Y3QgeW91IHdvdWxkIGxpa2UgdG8gb2ZmZXIsIGFuZCBhIHRob3JvdWdoIHVuZGVyc3RhbmRpbmcgb2ZcbiAgICAgICAgICAgIHRoZSBtYXJrZXQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgV2UgYXJlIGNvbmZpZGVudCB0aGF0IG91ciB0ZWFtIGhhcyB0aGUgcmVxdWlyZWQgcHJlcmVxdWlzaXRlcyB0b1xuICAgICAgICAgICAgc3VjY2VlZC4gV2UgYXJlIGEgY29uZ2xvbWVyYXRlIG9mIHBhZGVsIGVudGh1c2lhc3RzIGFuZCBidXNpbmVzc1xuICAgICAgICAgICAgcHJvZmlsZXMuIENvbWJpbmVkIHdlIGhhdmUgc3RhcnRlZCBvdmVyIDEwMCBjb21wYW5pZXMsIHNvbGQgMjAwMFxuICAgICAgICAgICAgY291cnRzLCB3b3JrZWQgMjAgeWVhcnMgd2l0aCBQYWRlbCBhbmQgMzAgeWVhcnMgb2YgYnVzaW5lc3NcbiAgICAgICAgICAgIGV4cGVyaWVuY2UgZnJvbSBTdWIgU2FoYXJhbiBBZnJpY2EuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2ZvbnQtaGVhZGluZyB0ZXh0LTJ4bCc+V2h5IHdlIGRvIHRoaXM8L2gyPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgT3VyIHB1cnBvc2UgaW4gZXZlcnl0aGluZyB3ZSBkbywgaXMgdG8gdHJ5IGFuZCBpbXByb3ZlIHF1YWxpdHkgb2ZcbiAgICAgICAgICAgIGxpZmUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgV2UgYmVsaWV2ZSBtYW55IGRpZmZlcmVudCBvZmZlcmluZ3MgY2FuIHByb3ZpZGUgdGhlIHBsYXRmb3JtIHRvXG4gICAgICAgICAgICBpbXByb3ZlIHF1YWxpdHkgb2YgbGlmZSwgYW5kIHRoYXQgaXQgbWVyZWx5IGNvbWVzIGRvd24gdG8gZm9jdXMsXG4gICAgICAgICAgICBjcmVhdGl2aXR5IGFuZCBleGVjdXRpb24gYXMgdG8gaG93IG11Y2ggaXQgd2lsbCBiZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBNYW55IHBlb3BsZSBvdmVybG9vayB0aGUgQWZyaWNhbiBjb250aW5lbnQgd2hlbiB0aGV5IGFyZSBsb29raW5nIGZvclxuICAgICAgICAgICAgbmV3IG1hcmtldHMgdG8gZXhwYW5kIHRvLiBUaGlzIGlzIGEgc2hhbWUsIGFzIHRoZSBpbXBhY3Qgb25lIGNhbiBkb1xuICAgICAgICAgICAgaGVyZSwgc3VwZXJzZWRlcyBhbG1vc3QgYW55d2hlcmUgZWxzZSBpbiB0aGUgd29ybGQuIEZ1cnRoZXJtb3JlLCB0aGVcbiAgICAgICAgICAgIGNvbnRpbmVudCBpcyBvZnRlbiByZWR1Y2VkIHRvIGFuIHVuZmFpciBnZW5lcmFsaXNhdGlvbi4gVGhlXG4gICAgICAgICAgICBjb250aW5lbnQgaXMgYXMgZGl2ZXJzZSBhcyBhbnkgb3RoZXIuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGhlcmUgYXJlIHRob3VnaCBzb21lIGNvbW1vbiBkZW5vbWluYXRvcnMgYW1vbmcgdGhlIEFmcmljYW5zIHdlIGhhdmVcbiAgICAgICAgICAgIG1ldDogVGhleSBoYXZlIGEgaGlnaCBmb2N1cyBvbiBmYW1pbHkgYW5kIGZyaWVuZHMsIHRoZXkgbG92ZSB0byBoYXZlXG4gICAgICAgICAgICBmdW4gYW5kIGFwcHJlY2lhdGUgaWYgc29tZSBtb3ZlbWVudCBpcyBpbnZvbHZlZC4gQmVzaWRlcyB0aGlzLCB0aGVcbiAgICAgICAgICAgIGNvbnRpbmVudCBpcyBncm93aW5nIHJhcGlkbHksIGJvdGggaW4gdGVybXMgb2YgcG9wdWxhdGlvbiBhbmRcbiAgICAgICAgICAgIHB1cmNoYXNpbmcgcG93ZXIuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgRm9yIHRob3NlIHJlYXNvbnMgd2UgZmVlbCBwYWRlbCBhbmQgU3ViIFNhaGFyYW4gQWZyaWNhIGlzIGEgcGVyZmVjdFxuICAgICAgICAgICAgbWF0Y2ggYW5kIHdlIHdpbGwgd29yayB0aXJlbGVzc2x5IHRvIGJyaW5nIEFmcmljYSBhbG9uZyBvbiB0aGlzXG4gICAgICAgICAgICBnbG9iYWwgdHJlbmQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2ZvbnQtaGVhZGluZyB0ZXh0LTJ4bCc+V2hhdCBhcmUgd2UgZ29pbmcgdG8gZG8/PC9oMj5cbiAgICAgICAgICA8cD5XZSBhcmUgZ29pbmcgdG8gYnJpbmcgcGFkZWwgdG8gU3ViIFNhaGFyYW4gQWZyaWNhLjwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFdlIGFyZSBnb2luZyB0byBhY3QgYXMgYSBjb3VydCBkaXN0cmlidXRvciBhbmQgYnVpbGQgb3VyIG93blxuICAgICAgICAgICAgY29tcGxleGVzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFRoZSBtYWluIHRhcmdldHMgZm9yIHRoZSBjb3VydHMgd2Ugc2VsbCBhcmUgaG90ZWxzLCByZXNvcnRzLFxuICAgICAgICAgICAgY29tcG91bmRzIGFuZCBzaW1pbGFyLiBXZSB3aWxsIHByb3ZpZGUgdGhlbSB3aXRoIGV2ZXJ5dGhpbmcgdGhleVxuICAgICAgICAgICAgbmVlZCwgc28gdGhleSBjYW4gb2ZmZXIgdGhpcyB1bmlxdWUgYW5kIGZ1biBleHBlcmllbmNlIHRvIHRoZWlyXG4gICAgICAgICAgICBndWVzdHMgYW5kIHZpc2l0b3JzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFRoZSBjb21wbGV4ZXMgd2UgYXJlIGdvaW5nIHRvIGJ1aWxkIHdpbGwgaGF2ZSBhIGxhcmdlIGZvY3VzIG9uXG4gICAgICAgICAgICBzZXJ2aW5nIGFzIGEgY29tbXVuaXR5IGh1Yi4gV2Ugd2FudCBwZW9wbGUgdG8gY29tZSwgc3RheSBhbmQgZW5qb3lcbiAgICAgICAgICAgIHRoZW1zZWx2ZXMgYW5kIHRoZSBjb21wYW55LiBQYWRlbCBoYXMgdGhlIGFiaWxpdHkgdG8gYnJlYWsgZG93blxuICAgICAgICAgICAgc29jaWFsIGJhcnJpZXJzIGFuZCB3aWxsIHByb3ZpZGUgYSBwbGF0Zm9ybSBmb3IgcGVvcGxlIHRvIG1lZXQgZWFjaFxuICAgICAgICAgICAgb3RoZXIgYW5kIGZvcm0gZnJpZW5kc2hpcHMgYW5kIG5ldHdvcmsuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgV2Ugd2lsbCBvZmZlciBib3RoIHRoZSBjb3VydHMgYW5kIHRoZSBjb21wbGV4ZXMgYXMgYSB0dXJua2V5XG4gICAgICAgICAgICBzb2x1dGlvbiwgdG8gZW5zdXJlIHNjYWxhYmlsaXR5IGFuZCBkZXBsb3ltZW50IHNwZWVkLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdmb250LWhlYWRpbmcgdGV4dC0yeGwnPkhvdyBhcmUgd2UgZ29pbmcgdG8gZG8gaXQ/PC9oMj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFdlIGhhdmUgYSBmb2N1cyBvbiBpbnZvbHZlbWVudCwgcGFydGljaXBhdGlvbiBhbmQgY29sbGFib3JhdGlvbi5cbiAgICAgICAgICAgIFRoaXMgaXMgd2h5IHdlIGFyZSB3b3JraW5nIGhhcmQgdG8gaW50ZXJuYWxpc2UgdGhlIHBhcnRuZXJzIHdlXG4gICAgICAgICAgICBjdXJyZW50bHkgd29yayB3aXRoLCBhbmQgdGhlIGZ1dHVyZSBwYXJ0bmVycyBvZiB0aGUgdmVudHVyZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBGb3IgdGhpcyByZWFzb24gd2UgYXJlIGNyb3dkZnVuZGluZyBwYXJ0IG9mIHRoZSB2ZW50dXJlLiBXZSB3YW50IHRvXG4gICAgICAgICAgICBicmluZyBvbiBsaWtlIG1pbmRlZCBwZW9wbGUgd2hvIHNoYXJlIG91ciBwYXNzaW9uIGZvciBwYWRlbCwgQWZyaWNhXG4gICAgICAgICAgICBvciBhIGNvbWJpbmF0aW9uLCBvbiB0aGlzIGpvdXJuZXkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgV2UgYXJlIGN1cnJlbnRseSBzZWxsaW5nIGNvdXJ0cyBpbiBBZnJpY2EuIFRoaXMgd2lsbCBwYXZlIHRoZSB3YXlcbiAgICAgICAgICAgIGZvciB0aGUgaW50cm9kdWN0aW9uIG9mIHRoZSBzcG9ydCwgY3JlYXRlIHNvbWUgZGVtYW5kLCBhbmQgYWxzb1xuICAgICAgICAgICAgY3JlYXRlIHNvbWUgY2FzaCBmbG93IHRvIGZ1bmQgdGhlIGNvbXBsZXhlcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXaXRoaW4gdGhlIG5leHQgcXVhcnRlciB3ZSB3aWxsIHN0YXJ0IGNvbnN0cnVjdGluZyBvdXIgZmlyc3RcbiAgICAgICAgICAgIGNvbXBsZXhlcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TGluayBjbGFzc05hbWU9J21kOnctMi81IGgtZnVsbCAnIHRvPScvam9pbi11cyc+XG4gICAgICAgICAgPGltZyBzcmM9e0V2ZW50SW1nfSBjbGFzc05hbWU9J2JnLWdyYXktNTAgJz48L2ltZz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPENUQVxuICAgICAgICBoZWFkaW5nPSdBcmUgeW91IGludGVyZXN0ZWQgaW4gcGFydG5lcmluZyB3aXRoIHRoZSBOdW1iZXIgMSBBZnJpY2FuIFBhZGVsIGNvbXBhbnk/J1xuICAgICAgICBib2R5PSdBdCB0aGlzIHZlcnkgZWFybHkgc3RhZ2UgaW4gb3VyIGRldmVsb3BtZW50IHdlIGFyZSBpbnRlcmVzdGVkIGluIGZpbmRpbmcgcGFydG5lcnMgZnJvbSBhbGwgc2VjdG9ycyB0byBpbnZlc3RpZ2F0ZSBwYXJ0bmVyc2hpcCBwb3NzaWJpbGl0aWVzLiBJZiB0aGlzIHNvdW5kcyBsaWtlIHlvdSAtIGdldCBpbiB0b3VjaC4nXG4gICAgICAgIGJ1dHRvblRleHQ9J0NvbnRhY3QgVXMnXG4gICAgICAgIGJ1dHRvblRvPScjY29udGFjdCdcbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHtcbiAgRm9ybSxcbiAgTGluayxcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIHVzZUxvYWRlckRhdGEsXG4gIEFjdGlvbkZ1bmN0aW9uLFxufSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBNZXRhIH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgeyBnZXRGaWxtcywgRmlsbSB9IGZyb20gJ34vYXBpL2ZpbG1zJztcbmltcG9ydCBDVEEgZnJvbSAnfi9Db21wb25lbnRzL2N0YSc7XG5pbXBvcnQgSGVybyBmcm9tICd+L0NvbXBvbmVudHMvaGVybyc7XG5pbXBvcnQgSW5mbyBmcm9tICd+L0NvbXBvbmVudHMvaW5mbyc7XG5pbXBvcnQgaW5mb0ltZyBmcm9tICcuLi9pbWFnZXMvYWJvdXQtcGEuanBnJztcbmltcG9ydCB7IGdldENsaWVudCwgdXJsRm9yIH0gZnJvbSAnfi9saWIvc2FuaXR5L2dldENsaWVudCc7XG5pbXBvcnQge1xuICBQb3J0YWJsZVRleHQsXG4gIFBvcnRhYmxlVGV4dFR5cGVDb21wb25lbnQsXG4gIFBvcnRhYmxlVGV4dENvbXBvbmVudHNQcm92aWRlcixcbn0gZnJvbSAnQHBvcnRhYmxldGV4dC9yZWFjdCc7XG5cbi8vIGxvYWRlcigpIG11c3QgYmUgYXN5bmMhXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKCkge1xuICBjb25zdCBuZXdzUG9zdHMgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaChcbiAgICBgKltfdHlwZSA9PSBcIm5ld3NcIl17IF9pZCwgdGl0bGUsIHNsdWcsIFwiZmVhdHVyZUltYWdlXCI6IGZlYXR1cmUuYXNzZXQtPnVybFxuICAgfWBcbiAgKTtcbiAgY29uc3QgYWJvdXRUZXh0ID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJzZWN0aW9uc1wiICYmIHNsdWcuY3VycmVudCA9PSBcImFib3V0LXBhZGVsLWFmcmljYVwiIF17IF9pZCwgdGl0bGUsIG92ZXJ2aWV3LCBcImZlYXR1cmVJbWFnZVwiOiBmZWF0dXJlLmFzc2V0LT51cmxcbiAgIH1gXG4gICk7XG5cbiAgY29uc3QgdGVhbU1lbWJlcnMgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaChcbiAgICBgKltfdHlwZSA9PSBcInRlYW1cIiAmJiAobXlUYWdzWzBdLnZhbHVlPT1cIm1hbmFnZW1lbnRcIiB8fG15VGFnc1sxXS52YWx1ZT09XCJtYW5hZ2VtZW50XCIgICkgXXsgX2lkLCB0aXRsZSwgYm9hcmRQb3NpdGlvbiwgbXlUYWdzLCBsaW5rZWRpblVybCwgb3ZlcnZpZXcscm9sZSwgXCJmZWF0dXJlSW1hZ2VcIjogZmVhdHVyZS5hc3NldC0+dXJsXG4gICB9YFxuICApO1xuXG4gIGNvbnN0IGJvYXJkTWVtYmVycyA9IGF3YWl0IGdldENsaWVudCgpLmZldGNoKFxuICAgIGAqW190eXBlID09IFwidGVhbVwiICYmIChteVRhZ3NbMF0udmFsdWU9PVwiYm9hcmRcIiB8fCBteVRhZ3NbMV0udmFsdWU9PVwiYm9hcmRcIiAgKSBdeyBfaWQsIHRpdGxlLCBib2FyZFBvc2l0aW9uLCBteVRhZ3MsIGxpbmtlZGluVXJsLCBvdmVydmlldyxyb2xlLCBcImZlYXR1cmVJbWFnZVwiOiBmZWF0dXJlLmFzc2V0LT51cmxcbiAgIH1gXG4gICk7XG4gIHJldHVybiB7IG5ld3NQb3N0cywgYWJvdXRUZXh0LCB0ZWFtTWVtYmVycywgYm9hcmRNZW1iZXJzIH07XG59XG5cbi8vIFNlcnZlciBTaWRlXG4vL2V4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4vL2NvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuLy9jb25zdCB0aXRsZSA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCd0aXRsZScpO1xuLy9yZXR1cm4gZ2V0RmlsbXModGl0bGUpO1xuLy99O1xuXG5leHBvcnQgY29uc3QgbWV0YSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1BhZGVsIEFmcmljYSAtIFBhZGVsIGlzIE5vdCBKdXN0IGEgU3BvcnQnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1BhZGVsIEFmcmljYSBpcyBicmluZ2luZyBwYWRlbCwgYXMgYSBzcG9ydCwgYSBsaWZlc3R5bGUsIGFuZCBhIGNvbW11bml0eSBidWlsZGVyLCB0byBBZnJpY2EuICAgJyxcbiAgICBrZXl3b3JkczogJ3BhZGVsLCBhZnJpY2EsIHNwb3J0LCBnaGFuYSwgcndhbmRhLCBrZW55YSwgdWdhbmRhLCBjb21tdW5pdHknLFxuICB9O1xufTtcblxuLy8gQ2xpZW50IFNpZGVcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGxldCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgbGV0IGVtYWlsID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpO1xuICBsZXQgbmFtZSA9IGZvcm1EYXRhLmdldCgnbmFtZScpO1xuICBsZXQgY29tcGFueSA9IGZvcm1EYXRhLmdldCgnY29tcGFueScpO1xuICAvL3Byb2Nlc3MuZW52LkNPTlZFUlRLSVRfS0VZID0gJ2xHZjZrT25GT09DLVlPaWtaRF9ZUHcnO1xuXG4gIGNvbnN0IEFQSV9LRVkgPSAnbEdmNmtPbkZPT0MtWU9pa1pEX1lQdyc7XG4gIGNvbnN0IEZPUk1fSUQgPSAnMzAyMjA1NCc7XG4gIGNvbnN0IEFQSSA9ICdodHRwczovL2FwaS5jb252ZXJ0a2l0LmNvbS92My8nO1xuXG4gIGxldCByZXMgPSBhd2FpdCBmZXRjaChgJHtBUEl9L2Zvcm1zLyR7Rk9STV9JRH0vc3Vic2NyaWJlYCwge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIGZpcnN0X25hbWU6IG5hbWUsXG4gICAgICBmaWVsZHM6IHsgY29tcGFueTogY29tcGFueSB9LFxuICAgICAgYXBpX2tleTogQVBJX0tFWSxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vY29uc29sZS5sb2coeyBlbWFpbCB9LCB7IG5hbWUgfSwgeyBjb21wYW55IH0pO1xuICByZXR1cm4gcmVzLmpzb24oKTtcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBuZXdzUG9zdHMsIGFib3V0VGV4dCwgdGVhbU1lbWJlcnMsIGJvYXJkTWVtYmVycyB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIGNvbnN0IG15UG9ydGFibGVUZXh0Q29tcG9uZW50cyA9IHtcbiAgICB0eXBlczoge1xuICAgICAgaW1hZ2U6ICh2YWx1ZTogYW55KSA9PiAoXG4gICAgICAgIDxpbWcgc3JjPXt2YWx1ZS5hc3NldH0ga2V5PXt2YWx1ZS5faWR9IGNsYXNzTmFtZT17dmFsdWUuYXNzZXR9PjwvaW1nPlxuICAgICAgKSxcbiAgICB9LFxuICB9O1xuICAvL2NvbnN0IGZpbG1zID0gdXNlTG9hZGVyRGF0YTxGaWxtW10+KCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZXJvXG4gICAgICAgIGhlYWRpbmc9J1BhZGVsIGhhcyB0YWtlbiBFdXJvcGUgYnkgc3Rvcm0uIE5vdyBpdFx1MjAxOXMgdGltZSB0byBicmluZyBpdCB0byBBZnJpY2EuXG4gICAgICAgICdcbiAgICAgICAgYm9keT0nVXNpbmcgb3VyIGV4dGVuc2l2ZSBrbm93bGVkZ2Ugb2YgQWZyaWNhIGFuZCBidXNpbmVzcyBkZXZlbG9wbWVudCwgd2UgYWltIHRvIHByb3ZpZGUgUGFkZWwsIGFzIGEgc3BvcnQgYW5kIGEgY29tbXVuaXR5IGVuYWJsZXIsIHRvIEdoYW5hLCBLZW55YSwgTmlnZXJpYSBhbmQgb3RoZXIgU3ViIFNhaGFyYW4gY291bnRyaWVzLlxuICAgICAgICAnXG4gICAgICAgIGJ1dHRvbjFUZXh0PSdMZWFybiBNb3JlJ1xuICAgICAgICBidXR0b24xVG89JyNhYm91dCdcbiAgICAgICAgYnV0dG9uMlRleHQ9J1dhbnQgdG8gUGFydG5lcj8nXG4gICAgICAgIGJ1dHRvbjJUbz0nI2Fib3V0J1xuICAgICAgICBpbWdTcmM9JydcbiAgICAgIC8+XG5cbiAgICAgIDxJbmZvIGZsb3c9J2xlZnQnIC8+XG4gICAgICA8Q1RBXG4gICAgICAgIGhlYWRpbmc9J0FyZSB5b3UgaW50ZXJlc3RlZCBpbiBwYXJ0bmVyaW5nIHdpdGggdGhlIE51bWJlciAxIEFmcmljYW4gUGFkZWwgY29tcGFueT8nXG4gICAgICAgIGJvZHk9J0F0IHRoaXMgdmVyeSBlYXJseSBzdGFnZSBpbiBvdXIgZGV2ZWxvcG1lbnQgd2UgYXJlIGludGVyZXN0ZWQgaW4gZmluZGluZyBwYXJ0bmVycyBmcm9tIGFsbCBzZWN0b3JzIHRvIGludmVzdGlnYXRlIHBhcnRuZXJzaGlwIHBvc3NpYmlsaXRpZXMuIElmIHRoaXMgc291bmRzIGxpa2UgeW91IC0gZ2V0IGluIHRvdWNoLidcbiAgICAgICAgYnV0dG9uVGV4dD0nQ29udGFjdCBVcydcbiAgICAgICAgYnV0dG9uVG89JyNjb250YWN0J1xuICAgICAgLz5cblxuICAgICAgey8qXG5cblxuIDxzZWN0aW9uIGNsYXNzTmFtZT0nW2N0YV0gIHAtdnctMzIgIHNwYWNlLXgtMTAgZmxleCAnPlxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT0ndy0xLzQnPlxuICAgICAgICAgIDxpbWcgc3JjPXtpbmZvSW1nfSAvPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPGJsb2NrcXVvdGUgY2xhc3NOYW1lPSd3LTMvNCBzcGFjZS15LTQgICc+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC00eGwgZm9udC1oZWFkaW5nIHRleHQtc2xhdGUtOTAwICBkYXJrOnRleHQtd2hpdGUnPlxuICAgICAgICAgICAgXHUyMDFDIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cdTIwMURcbiAgICAgICAgICA8L2gyPlxuXG4gICAgICAgIDwvYmxvY2txdW90ZT5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgPHNlY3Rpb25cbiAgICAgICAgaWQ9J25ld3MnXG4gICAgICAgIGNsYXNzTmFtZT0nW2Fib3V0XSAgcC12dy0zMiBiZy13aGl0ZSAgZGFyazpiZy1zbGF0ZS05MDAgdGV4dC1jZW50ZXIgc3BhY2UteS12dy02LW1pbkB4bCAnXG4gICAgICA+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUgJz5cbiAgICAgICAgICBOZXdzXG4gICAgICAgIDwvaDI+XG5cbiAgICAgICAgLy9TRUFSQ0ggRklMVEVSXG4gICAgICAgIDxGb3JtIGNsYXNzTmFtZT0ncHktNSc+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgIG5hbWU9J3RpdGxlJ1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nZW50ZXIgc29tZXRoaW5nJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlci0yIHJvdW5kZWQgcHktMiBweC0yJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTgwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkIG14LTInXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2VhcmNoeycgJ31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9Gb3JtPlxuICAqL31cblxuICAgICAgey8qXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdhcC02ICc+XG4gICAgICAgICAge2ZpbG1zLnNsaWNlKDAsIDQpLm1hcCgoZmlsbSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hvdmVyOnNoYWRvdy0yeGwgaG92ZXI6c2NhbGUtMTA1IGhvdmVyOmZvbnQtYm9sZCBjdXJzb3ItcG9pbnRlciAgcC00ICBzcGFjZS15LXZ3LTQtbWF4QG1kJz5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYXNwZWN0LXNxdWFyZSByb3VuZGVkLW1kICAnXG4gICAgICAgICAgICAgICAgc3JjPXtmaWxtLmltYWdlfVxuICAgICAgICAgICAgICAgIGFsdD17ZmlsbS50aXRsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdj57ZmlsbS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfXsnICd9XG4gICAgICAgIDwvZGl2PlxuXG5cblxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdhcC02ICc+XG4gICAgICAgICAge25ld3NQb3N0cz8ubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBuZXdzUG9zdHMuc2xpY2UoMCwgNikubWFwKChuZXdzOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e25ld3MuX2lkfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdob3ZlcjpzaGFkb3ctMnhsIGhvdmVyOnNjYWxlLTEwNSBob3Zlcjpmb250LWJvbGQgY3Vyc29yLXBvaW50ZXIgIHAtNCAgc3BhY2UteS12dy00LW1heEBtZCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKG5ld3MuZmVhdHVyZUltYWdlKS53aWR0aCg1MDApLnVybCgpfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e25ld3MudGl0bGV9XG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtc2xhdGUtOTAwIGRhcms6dGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgdG89e25ld3Muc2x1Zy5jdXJyZW50fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bmV3cy50aXRsZX17JyAnfVxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuXG5cblxuXG4gICAgICAgICAgKi99XG5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIGlkPSduZXdzJ1xuICAgICAgICBjbGFzc05hbWU9J1thYm91dF0gbXQtMjAgIHAtdnctMzIgYmctd2hpdGUgIGRhcms6Ymctc2xhdGUtOTAwIHRleHQtY2VudGVyIHNwYWNlLXktdnctNi1taW5AeGwgJ1xuICAgICAgPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTV4bCBmb250LWhlYWRpbmcgdGV4dC1zbGF0ZS05MDAgZGFyazp0ZXh0LXdoaXRlICc+XG4gICAgICAgICAgTWFuYWdlbWVudCBUZWFtXG4gICAgICAgIDwvaDI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTYgJz5cbiAgICAgICAgICB7dGVhbU1lbWJlcnM/Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gdGVhbU1lbWJlcnM/LnNsaWNlKDAsIDYpLm1hcCgodGVhbU1lbWJlcjogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXt0ZWFtTWVtYmVyLl9pZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naG92ZXI6c2hhZG93LTJ4bCBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6Zm9udC1ib2xkIGN1cnNvci1wb2ludGVyICBwLTQgIHNwYWNlLXktdnctMi1tYXhAbWQnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcih0ZWFtTWVtYmVyLmZlYXR1cmVJbWFnZSkud2lkdGgoNTAwKS51cmwoKX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXt0ZWFtTWVtYmVyLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+e3RlYW1NZW1iZXIudGl0bGV9IDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtbGlnaHQgdXBwZXJjYXNlIHRleHQteHMgb3BhY2l0eS01MCBtYi00Jz5cbiAgICAgICAgICAgICAgICAgICAge3RlYW1NZW1iZXIucm9sZX17JyAnfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtc2xhdGUtOTAwIGRhcms6dGV4dC1ncmVlbi01MDAgdW5kZXJsaW5lIGN1cnNvci1wb2ludGVyJ1xuICAgICAgICAgICAgICAgICAgICBocmVmPXt0ZWFtTWVtYmVyLmxpbmtlZGluVXJsfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBMaW5rZWRpblxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgaWQ9J25ld3MnXG4gICAgICAgIGNsYXNzTmFtZT0nW2Fib3V0XSAgcC12dy0zMiBiZy1ncmF5LTEwMCAgZGFyazpiZy1zbGF0ZS04MDAgdGV4dC1jZW50ZXIgc3BhY2UteS12dy02LW1pbkB4bCAnXG4gICAgICA+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtNXhsIGZvbnQtaGVhZGluZyB0ZXh0LXNsYXRlLTkwMCBkYXJrOnRleHQtd2hpdGUgJz5cbiAgICAgICAgICBCb2FyZCBvZiBEaXJlY3RvcnNcbiAgICAgICAgPC9oMj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNiAnPlxuICAgICAgICAgIHtib2FyZE1lbWJlcnM/Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gYm9hcmRNZW1iZXJzPy5zbGljZSgwLCA2KS5tYXAoKGJvYXJkTWVtYmVyOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2JvYXJkTWVtYmVyLl9pZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naG92ZXI6c2hhZG93LTJ4bCBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6Zm9udC1ib2xkIGN1cnNvci1wb2ludGVyICBwLTQgIHNwYWNlLXktdnctMi1tYXhAbWQnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihib2FyZE1lbWJlci5mZWF0dXJlSW1hZ2UpLndpZHRoKDUwMCkudXJsKCl9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17Ym9hcmRNZW1iZXIudGl0bGV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nZm9udC1ib2xkJz57Ym9hcmRNZW1iZXIudGl0bGV9IDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtbGlnaHQgdXBwZXJjYXNlIHRleHQteHMgb3BhY2l0eS01MCBtYi00Jz5cbiAgICAgICAgICAgICAgICAgICAge2JvYXJkTWVtYmVyLmJvYXJkUG9zaXRpb259eycgJ31cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1zbGF0ZS05MDAgZGFyazp0ZXh0LWdyZWVuLTUwMCB1bmRlcmxpbmUgY3Vyc29yLXBvaW50ZXInXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2JvYXJkTWVtYmVyLmxpbmtlZGluVXJsfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBMaW5rZWRpblxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgaWQ9J2NvbnRhY3QnXG4gICAgICAgIGNsYXNzTmFtZT0nW2NvbnRhY3RdICBiZy1zbGF0ZS05MDAgICBzcGFjZS14LTEwICAgcC12dy0zMiAgc3BhY2UteS0xMCBtZDpzcGFjZS14LTEwIGZsZXggZmxleC1jb2wgIHRleHQtd2hpdGUgJ1xuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nICBtLWF1dG8gIHRleHQtY2VudGVyIG0gc3BhY2UteS12dy02LW1pbkB4bCBtZDp3LTEvMiAnPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtaGVhZGluZyB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1iciBmcm9tLWdyZWVuLTMwMCAgdmlhLWdyZWVuLTUwMCB0by15ZWxsb3ctNDAwICc+XG4gICAgICAgICAgICBDb250YWN0IFVzXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2Jhc2UnPlxuICAgICAgICAgICAgSWYgeW91IGFyZSBhbiBpbnZlc3RlciwgYSBwb3RlbnRpYWwgcGFydG5lciBvciBhbnlvbmUgaW50ZXJlc3RlZCBpblxuICAgICAgICAgICAgbGVhcm5pbmcgbW9yZSBhYm91dCBQYWRlbCBBZnJpY2EsIHlvdSBjYW4gcmVhY2ggdXMgZGlyZWN0bHkgd2l0aCB0aGVcbiAgICAgICAgICAgIGZvbGxvd2luZyBkZXRhaWxzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHNwYWNlLXgtdnctNC1taW5AeGwgIG1kOmlubGluZS1mbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNsYXRlLTkwMCc+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPSdtYWlsdG86aGVsbG9AcGFkZWwuYWZyaWNhJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J3B5LXZ3LTQtbWluQHhsLW1heEAyeGwgcHgtdnctNC1taW5AeGwtbWF4QDJ4bCBiZy1ncmFkaWVudC10by1iciBmcm9tLWdyZWVuLTMwMCAgIHRvLXllbGxvdy00MDAgcm91bmRlZC14bCBmb250LWJvbGQgaG92ZXI6YmctZ3JhZGllbnQtdG8tdGwgaG92ZXI6c2NhbGUtMTA1IHNoYWRvdy0yeGwnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEVtYWlsIFVzXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPSd0ZWw6MDA0NjczOTc4Nzc2NCdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPScgcHktdnctNC1taW5AeGwtbWF4QDJ4bCBweC12dy00LW1pbkB4bC1tYXhAMnhsIGJnLWdyYWRpZW50LXRvLWJyIGZyb20td2hpdGUgICB0by1ncmF5LTIwMCByb3VuZGVkLXhsIGZvbnQtYm9sZCBob3ZlcjpiZy1ncmFkaWVudC10by10bCBob3ZlcjpzY2FsZS0xMDUgc2hhZG93LTJ4bCdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVGVsZXBob25lXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCBpbmZvSW1nIGZyb20gJy4uL2ltYWdlcy9hYm91dC1wYS5qcGcnO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgTGluayB9IGZyb20gJ3JlbWl4JztcblxuaW1wb3J0IHsgUG9ydGFibGVUZXh0IH0gZnJvbSAnQHBvcnRhYmxldGV4dC9yZWFjdCc7XG5cbmludGVyZmFjZSBJbmZvQ29udGVudCB7XG4gIGZsb3c6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5mbyhwcm9wczogSW5mb0NvbnRlbnQpIHtcbiAgY29uc3QgeyBhYm91dFRleHQgfSA9IHVzZUxvYWRlckRhdGEoKTtcblxuICBjb25zdCBteVBvcnRhYmxlVGV4dENvbXBvbmVudHMgPSB7XG4gICAgdHlwZXM6IHtcbiAgICAgIGltYWdlOiAodmFsdWU6IGFueSkgPT4gKFxuICAgICAgICA8aW1nIHNyYz17dmFsdWUuYXNzZXR9IGtleT17dmFsdWUuX2lkfSBjbGFzc05hbWU9e3ZhbHVlLmFzc2V0fT48L2ltZz5cbiAgICAgICksXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBpZD0nYWJvdXQnXG4gICAgICBjbGFzc05hbWU9e2BbY3RhXSAgcC12dy0zMiAgc3BhY2UteS0xMCBtZDpzcGFjZS14LTE0IGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgJHtcbiAgICAgICAgcHJvcHMuZmxvdyA9PSAnbGVmdCcgPyAnJyA6ICcgbWQ6ZmxleC1yb3ctcmV2ZXJzZSBzcGFjZS14LXJldmVyc2UnXG4gICAgICB9IGB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J21kOnctMi81ICBzcGFjZS15LTQgICc+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtNXhsIGZvbnQtaGVhZGluZyc+e2Fib3V0VGV4dFswXS50aXRsZX08L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1jb250ZW50IHNwYWNlLXktMiB0ZXh0LW1kJz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFdlIGJlbGlldmUgdGhhdCBBZnJpY2EgaXMgdGhlIG5leHQgZ3Jvd3RoIGNlbnRyZSBvZiB0aGUgd29ybGQgYW5kXG4gICAgICAgICAgICB0aGF0IGl0IHByb3ZpZGVzIGltbWVuc2Ugb3Bwb3J0dW5pdGllcyBmb3IgdGhlIGZldyB3aG8gdGFrZSB0aGUgbGVhcFxuICAgICAgICAgICAgYW5kIGV4cGFuZCB0byBBZnJpY2EuIE9uIHRoZSBvdGhlciBoYW5kLCB3ZSBhcmUgYWxzbyB2ZXJ5IGF3YXJlIHRoYXRcbiAgICAgICAgICAgIGluIG9yZGVyIHRvIHN1Y2NlZWQgaW4gQWZyaWNhLCBpdCByZXF1aXJlcyBpbi1kZXB0aCB1bmRlcnN0YW5kaW5nIG9mXG4gICAgICAgICAgICB0aGUgcHJvZHVjdCB5b3Ugd291bGQgbGlrZSB0byBvZmZlciwgYW5kIGEgdGhvcm91Z2ggdW5kZXJzdGFuZGluZyBvZlxuICAgICAgICAgICAgdGhlIG1hcmtldC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXZSBhcmUgY29uZmlkZW50IHRoYXQgb3VyIHRlYW0gaGFzIHRoZSByZXF1aXJlZCBwcmVyZXF1aXNpdGVzIHRvXG4gICAgICAgICAgICBzdWNjZWVkLiBXZSBhcmUgYSBjb25nbG9tZXJhdGUgb2YgcGFkZWwgZW50aHVzaWFzdHMgYW5kIGJ1c2luZXNzXG4gICAgICAgICAgICBwcm9maWxlcy4gQ29tYmluZWQgd2UgaGF2ZSBzdGFydGVkIG92ZXIgMTAwIGNvbXBhbmllcywgc29sZCAyMDAwXG4gICAgICAgICAgICBjb3VydHMsIHdvcmtlZCAyMCB5ZWFycyB3aXRoIFBhZGVsIGFuZCAzMCB5ZWFycyBvZiBidXNpbmVzc1xuICAgICAgICAgICAgZXhwZXJpZW5jZSBmcm9tIFN1YiBTYWhhcmFuIEFmcmljYS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdibG9jayBtdC02IHVuZGVybGluZSB0ZXh0LWdyZWVuLTUwMCAnIHRvPScvYWJvdXQnPlxuICAgICAgICAgICAgTGVhcm4gTW9yZSBBYm91dCBVc3snICd9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIHsvKlxuICAgICAgICAgIHthYm91dFRleHRbMF0ub3ZlcnZpZXc/Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gYWJvdXRUZXh0WzBdLm92ZXJ2aWV3Lm1hcCgocGFyYWdyYXBoczogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgPFBvcnRhYmxlVGV4dFxuICAgICAgICAgICAgICAgICAga2V5PXtwYXJhZ3JhcGhzLl9pZH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtbcGFyYWdyYXBoc119XG4gICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXtteVBvcnRhYmxlVGV4dENvbXBvbmVudHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIDogbnVsbH0gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZmlndXJlIGNsYXNzTmFtZT0nbWQ6dy0xLzIgYmctc2xhdGUtMzAwJz5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9J3ctZnVsbCcgc3JjPXthYm91dFRleHRbMF0uZmVhdHVyZUltYWdlfSAvPlxuICAgICAgPC9maWd1cmU+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxVQUFVO0FBQUEsTUFDdkMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsb0JBQW9CO0FBQUEsTUFDakQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQzVJbEM7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ3BEMUM7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDaENqQztBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksU0FBUztBQUNiLFFBQUksU0FBUztBQUNiLFFBQUksV0FBVztBQUlmLFdBQU8sS0FBSyxRQUFRLFFBQVEsU0FBVSxHQUFHO0FBQ3hDLFVBQUksTUFBTSxhQUFhLENBQUMsUUFBUSxlQUFlO0FBQUksZUFBTyxlQUFlLFNBQVMsR0FBRztBQUFBLFVBQ3BGLFlBQVk7QUFBQSxVQUNaLEtBQUssV0FBWTtBQUFFLG1CQUFPLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFHbkMsV0FBTyxLQUFLLFFBQVEsUUFBUSxTQUFVLEdBQUc7QUFDeEMsVUFBSSxNQUFNLGFBQWEsQ0FBQyxRQUFRLGVBQWU7QUFBSSxlQUFPLGVBQWUsU0FBUyxHQUFHO0FBQUEsVUFDcEYsWUFBWTtBQUFBLFVBQ1osS0FBSyxXQUFZO0FBQUUsbUJBQU8sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUduQyxXQUFPLEtBQUssVUFBVSxRQUFRLFNBQVUsR0FBRztBQUMxQyxVQUFJLE1BQU0sYUFBYSxDQUFDLFFBQVEsZUFBZTtBQUFJLGVBQU8sZUFBZSxTQUFTLEdBQUc7QUFBQSxVQUNwRixZQUFZO0FBQUEsVUFDWixLQUFLLFdBQVk7QUFBRSxtQkFBTyxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDbkNyQztBQUFBO0FBQUE7QUFBQSxZQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUNBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQStCO0FBQy9CLG1CQUE0QjtBQUU1QixvQkFBbUI7QUFFSix1QkFDYixTQUNBLG9CQUNBLGlCQUNBLGNBQ0E7QUFDQSx3QkFBTztBQUVQLFFBQU0sU0FBUyxrQ0FDYixvQ0FBQywwQkFBRDtBQUFBLElBQWEsU0FBUztBQUFBLElBQWMsS0FBSyxRQUFRO0FBQUE7QUFHbkQsa0JBQWdCLElBQUksZ0JBQWdCO0FBRXBDLFNBQU8sSUFBSSxTQUFTLG9CQUFvQixRQUFRO0FBQUEsSUFDOUMsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBO0FBQUE7OztBQ3JCYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVlPOzs7Ozs7QUFHUCxrQ0FBMEI7QUFFMUIsbUJBQW9DOzs7Ozs7Ozs7Ozs7Ozs7QUFPcEMsb0JBQXFCO0FBRXJCLFdBQXNCOzs7QUMxQnRCO0FBQUEsb0JBQXFCO0FBRU4sbUJBQW1CO0FBQ2hDLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQStGLHdHQUc1RyxvQ0FBQyxvQkFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLElBQWlCLElBQUc7QUFBQSxLQUFXO0FBQUE7OztBRDBCOUMsSUFBTSxTQUF5QixZQUFZO0FBQ2hELFNBQU8sd0JBQWlCLEVBQUUsY0FBYyxRQUFRLElBQUk7QUFBQTtBQUcvQyxJQUFNLE9BQXFCLE1BQU07QUFDdEMsU0FBTyxFQUFFLE9BQU87QUFBQTtBQUdYLGlCQUFpQjtBQUN0QixTQUFPO0FBQUEsSUFDTCxFQUFFLEtBQUssY0FBYyxNQUFNO0FBQUEsSUFDM0IsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBQUE7QUFJeEIsSUFBTSxNQUFNLENBQUMsZ0JBRWQ7QUFDSixRQUFNLGlCQUFpQixNQUFNO0FBRzNCLGdCQUFZLFlBQVksQ0FBQyxTQUFTLENBQUM7QUFBQTtBQUdyQyxRQUFNLFdBQVc7QUFFakIsUUFBTSxDQUFDLFVBQVUsYUFBYSwyQkFBUztBQUV2Qyw4QkFBVSxNQUFNO0FBQ2QsVUFBTSxVQUFVLE1BQU07QUFDcEIsZ0JBQVUsQ0FBQyxjQUFhO0FBQ3RCLFlBQ0UsQ0FBQyxhQUNBLFVBQVMsS0FBSyxZQUFZLE1BQ3pCLFNBQVMsZ0JBQWdCLFlBQVksS0FDdkM7QUFDQSxpQkFBTztBQUFBO0FBR1QsWUFDRSxhQUNBLFNBQVMsS0FBSyxZQUFZLEtBQzFCLFNBQVMsZ0JBQWdCLFlBQVksR0FDckM7QUFDQSxpQkFBTztBQUFBO0FBR1QsZUFBTztBQUFBO0FBQUE7QUFJWCxXQUFPLGlCQUFpQixVQUFVO0FBQ2xDLFdBQU8sTUFBTSxPQUFPLG9CQUFvQixVQUFVO0FBQUEsS0FDakQ7QUFFSCxRQUFNLENBQUMsWUFBWSxpQkFBaUIsMkJBQVM7QUFDN0MsUUFBTSxZQUFZLE1BQU07QUFBQTtBQUN4QixRQUFNLGVBQWUsTUFBTTtBQUl6QixrQkFBYyxDQUFDLFNBQVMsQ0FBQztBQUFBO0FBRzNCLFNBQ0UsMERBVUUsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsS0FBRDtBQUFBLElBQUcsTUFBSztBQUFBLElBQUksV0FBVTtBQUFBLEtBQ3BCLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMLFdBQVcsc0RBQ1QsV0FBVyxTQUFTO0FBQUEsTUFJeEIsb0NBQUMsT0FBRDtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsV0FBVyx5REFDVCxXQUFXLFNBQVM7QUFBQSxPQUkxQixvQ0FBQyxVQUFEO0FBQUEsSUFDRSxTQUFTO0FBQUEsSUFDVCx3QkFBcUI7QUFBQSxJQUNyQixNQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsSUFDVixpQkFBYztBQUFBLElBQ2QsaUJBQWM7QUFBQSxLQUVkLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFVLG1CQUN6QixhQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLFNBQVE7QUFBQSxJQUNSLE9BQU07QUFBQSxLQUVOLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLFVBQVM7QUFBQSxJQUNULEdBQUU7QUFBQSxJQUNGLFVBQVM7QUFBQSxRQUliLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLFNBQVE7QUFBQSxJQUNSLE9BQU07QUFBQSxLQUVOLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLFVBQVM7QUFBQSxJQUNULEdBQUU7QUFBQSxJQUNGLFVBQVM7QUFBQSxRQUtqQixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFXLElBQ1QsYUFDSSw4REFDQTtBQUFBLElBRU4sSUFBRztBQUFBLEtBRUgsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQ1osb0NBQUMsTUFBRDtBQUFBLElBQUksU0FBUyxhQUFhLGVBQWU7QUFBQSxLQUN2QyxvQ0FBQyxvQkFBRDtBQUFBLElBQU0sSUFBRztBQUFBLEtBQUksV0FFZixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxTQUFTLGFBQWEsZUFBZTtBQUFBLEtBQ3ZDLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsS0FBUyxZQUVwQixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxTQUFTLGFBQWEsZUFBZTtBQUFBLEtBQ3ZDLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsS0FBVyxjQUV0QixvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsS0FBRDtBQUFBLElBQUcsTUFBSztBQUFBLElBQXVDLFdBQVU7QUFBQSxLQUN2RCxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFXLElBQUksYUFBYSxXQUFXO0FBQUEsSUFDdkMsTUFBSztBQUFBLElBQ0wsU0FBUTtBQUFBLElBQ1IsZUFBWTtBQUFBLEtBRVosb0NBQUMsUUFBRDtBQUFBLElBQ0UsVUFBUztBQUFBLElBQ1QsR0FBRTtBQUFBLElBQ0YsVUFBUztBQUFBLE9BR2Isb0NBQUMsUUFBRDtBQUFBLElBQ0UsV0FBVyxJQUNULGFBQ0ksOERBQ0E7QUFBQSxLQUVQLGVBS0wsb0NBQUMsTUFBRCxNQUNHLEtBQ0Qsb0NBQUMsS0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLEtBRVYsb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVyxJQUFJLGFBQWEsV0FBVztBQUFBLElBQ3ZDLE1BQUs7QUFBQSxJQUNMLFNBQVE7QUFBQSxJQUNSLFFBQU87QUFBQSxJQUNQLE9BQU07QUFBQSxJQUNOLGVBQVk7QUFBQSxLQUVaLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLFVBQVM7QUFBQSxJQUNULEdBQUU7QUFBQSxJQUNGLFVBQVM7QUFBQSxPQUdiLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLFdBQVcsSUFDVCxhQUNJLDhEQUNBO0FBQUEsS0FFUCxZQUNVLFFBSWYsb0NBQUMsTUFBRCxNQUNHLEtBQ0Qsb0NBQUMsS0FBRDtBQUFBLElBQUcsTUFBSztBQUFBLElBQTBDLFdBQVU7QUFBQSxLQUMxRCxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFXLElBQUksYUFBYSxXQUFXO0FBQUEsSUFDdkMsTUFBSztBQUFBLElBQ0wsU0FBUTtBQUFBLElBQ1IsZUFBWTtBQUFBLEtBRVosb0NBQUMsUUFBRDtBQUFBLElBQ0UsVUFBUztBQUFBLElBQ1QsR0FBRTtBQUFBLElBQ0YsVUFBUztBQUFBLE9BR2Isb0NBQUMsUUFBRDtBQUFBLElBQ0UsV0FBVyxJQUNULGFBQ0ksOERBQ0E7QUFBQSxLQUVQLGFBQ1csUUFJaEIsb0NBQUMsVUFBRDtBQUFBLElBQ0UsUUFBTTtBQUFBLElBQ04sSUFBRztBQUFBLElBQ0gsU0FBUztBQUFBLElBQ1QsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLEtBRVYsb0NBQUMsT0FBRDtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsV0FBVyxJQUNULGFBQWEsV0FBVztBQUFBLElBRTFCLE1BQUs7QUFBQSxJQUNMLFNBQVE7QUFBQSxJQUNSLE9BQU07QUFBQSxLQUVOLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxPQUVWLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUNILFdBQVcsSUFDVCxhQUFhLFdBQVc7QUFBQSxJQUUxQixNQUFLO0FBQUEsSUFDTCxTQUFRO0FBQUEsSUFDUixPQUFNO0FBQUEsS0FFTixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxHQUFFO0FBQUEsSUFDRixVQUFTO0FBQUEsSUFDVCxVQUFTO0FBQUEsT0FHYixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxXQUFXLElBQ1QsYUFDSSw4REFDQTtBQUFBLEtBRVA7QUFBQTtBQVlWLGtCQUFrQjtBQUN2QixTQUNFLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxLQUNoQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBMEIsYUFDakMsS0FDUCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxNQUFLO0FBQUEsSUFBSSxRQUFPO0FBQUEsSUFBUyxXQUFVO0FBQUEsS0FBa0IsdUJBRXBELDJCQUdOLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBRyxTQUcxQixvQ0FBQyxvQkFBRDtBQUFBLElBQU0sSUFBRztBQUFBLElBQVMsV0FBVTtBQUFBLEtBQUcsU0FDdkIsTUFDQSxLQUNSLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBVyxXQUFVO0FBQUEsS0FBRztBQUFBO0FBUzVCLGVBQWU7QUFDNUIsUUFBTSxDQUFDLFVBQVUsZUFBZSwyQkFBUztBQUN6QyxRQUFNLFdBQVc7QUFDakIsUUFBTSxFQUFFLGlCQUFpQjtBQUV6Qiw4QkFBVSxNQUFNO0FBQ2QsUUFBSSw2Q0FBYyxRQUFRO0FBQ3hCLE1BQUssY0FBUyxTQUFTLFVBQVU7QUFBQTtBQUFBLEtBRWxDLENBQUMsVUFBVTtBQUNkLFFBQU0sVUFBVTtBQUNoQixVQUFRLElBQUk7QUFDWixTQUNFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxJQUFLLFdBQVcsSUFBSSxXQUFXLEtBQUs7QUFBQSxLQUM3QyxvQ0FBQyxRQUFELE1BQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sU0FBUTtBQUFBLE1BQ2Qsb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLElBQVcsU0FBUTtBQUFBLE1BRTlCLG9DQUFDLFVBQUQsT0FTQSxvQ0FBQyxvQkFBRCxPQUNBLG9DQUFDLHFCQUFELFFBRUYsb0NBQUMsUUFBRDtBQUFBLElBQ0UsT0FBTztBQUFBLE1BQ0wsaUJBQWlCLElBQ2YsV0FDSSxxREFDQSx3RkFDbUM7QUFBQTtBQUFBLElBRTNDLFdBQVU7QUFBQSxLQUVWLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLE9BQUs7QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUVQLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLE9BQUs7QUFBQSxJQUNMLElBQUc7QUFBQSxJQUNILHlCQUF5QjtBQUFBLE1BQ3ZCLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVdYLFFBQVEsR0FBRyxZQUFZLGNBQWMsb0NBQUMsU0FBRCxPQUV0QyxvQ0FBQyxLQUFEO0FBQUEsSUFBSztBQUFBLE1BQ0wsb0NBQUMsc0JBQUQsT0FDQSxvQ0FBQyxRQUFELE9BQ0Esb0NBQUMscUNBQUQ7QUFBQSxJQUNFLFVBQVM7QUFBQSxJQUNULFlBQVc7QUFBQSxJQUNYLFlBQVc7QUFBQSxJQUNYLE9BQU8sRUFBRSxZQUFZO0FBQUEsSUFDckIsYUFBYSxFQUFFLE9BQU8sV0FBVyxVQUFVO0FBQUEsSUFDM0MsU0FBUztBQUFBLEtBQ1YsNkRBQzJELE1BRzVELG9DQUFDLGlDQUFELE9BQ0Esb0NBQUMsdUJBQUQsT0FDMkMsb0NBQUMsMEJBQUQ7QUFBQTs7O0FFamFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTSxVQUFTLE1BQU07QUFHMUIsUUFBTSxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVoQixTQUFPLElBQUksU0FBUyxTQUFTO0FBQUEsSUFDM0IsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLE1BQ1AsZ0JBQWdCO0FBQUEsTUFDaEIsZUFBZTtBQUFBLE1BQ2YsVUFBVTtBQUFBO0FBQUE7QUFBQTs7O0FDbEJoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTSxVQUFTLE1BQU07QUFHMUIsUUFBTSxZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVsQixTQUFPLElBQUksU0FBUyxXQUFXO0FBQUEsSUFDN0IsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLE1BQ1AsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBOzs7QUNoQnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWdFOzs7QUNBaEU7QUFBQSxvQkFBcUI7QUFTTixhQUFhLE9BQW1CO0FBQzdDLFNBQ0Usb0NBQUMsV0FBRDtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsV0FBVTtBQUFBLEtBRVYsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQ1gsTUFBTSxVQUVULG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUFRLE1BQU0sT0FDM0Isb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLElBQUksTUFBTTtBQUFBLElBQVUsV0FBVTtBQUFBLEtBQ2xDLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxLQUNmLE1BQU07QUFBQTs7O0FDdEJuQjtBQWNlLGNBQWMsT0FBb0I7QUFDL0MsU0FDRSwwREFDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBa0Msc0JBQy9DLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUFvRCxPQUM1RCxLQUNKLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUEwSCxrQ0FFbEksS0FBSSxhQUNGLEtBQ1Ysb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQTBILHNDQUVuSSxNQUlULG9DQUFDLEtBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxLQUVYO0FBQUE7Ozs7OztBRjlCSixJQUFJLFNBQXlCLE9BQU8sRUFBRSxjQUFjO0FBQ3pELE1BQUksV0FBVyxNQUFNLFFBQVE7QUFDN0IsTUFBSSxRQUFRLFNBQVMsSUFBSTtBQUN6QixNQUFJLE9BQU8sU0FBUyxJQUFJO0FBQ3hCLE1BQUksVUFBVSxTQUFTLElBQUk7QUFDM0IsTUFBSSxRQUFRLFNBQVMsSUFBSTtBQUl6QixRQUFNLFVBQVU7QUFDaEIsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sTUFBTTtBQUVaLE1BQUksTUFBTSxNQUFNLE1BQU0sR0FBRyxhQUFhLHFCQUFxQjtBQUFBLElBQ3pELFFBQVE7QUFBQSxJQUNSLE1BQU0sS0FBSyxVQUFVO0FBQUEsTUFDbkI7QUFBQSxNQUNBLFlBQVk7QUFBQSxNQUNaLFFBQVEsRUFBRSxTQUFrQjtBQUFBLE1BQzVCLFNBQVM7QUFBQTtBQUFBLElBRVgsU0FBUztBQUFBLE1BQ1AsZ0JBQWdCO0FBQUE7QUFBQTtBQUtwQixTQUFPLElBQUk7QUFBQTtBQUdOLElBQU0sUUFBTyxNQUFNO0FBQ3hCLFNBQU87QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLGFBQ0U7QUFBQSxJQUNGLFVBQVU7QUFBQSxJQUNWLFlBQVksdUJBQXVCO0FBQUE7QUFBQTtBQUl4QixrQkFBa0I7QUFDL0IsTUFBSSxhQUFhO0FBQ2pCLE1BQUksUUFBc0MsMENBQVksZ0JBQ2xELFlBQ0EsMENBQVksU0FDWixVQUNBO0FBQ0osUUFBTSxXQUFXO0FBRWpCLFNBQ0UsMERBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQ0UsT0FBTztBQUFBLE1BQ0wsaUJBQWlCLFNBQVM7QUFBQTtBQUFBLElBRTVCLFdBQVU7QUFBQSxLQUVWLG9DQUFDLE1BQUQ7QUFBQSxJQUNFLFNBQVE7QUFBQSxJQUVSLE1BQUs7QUFBQSxJQUVMLGFBQVk7QUFBQSxJQUNaLFdBQVU7QUFBQSxJQUNWLGFBQVk7QUFBQSxJQUNaLFdBQVU7QUFBQSxJQUNWLFFBQU87QUFBQSxPQUdYLG9DQUFDLFdBQUQ7QUFBQSxJQUFTLFdBQVU7QUFBQSxLQUNqQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBMkIsc0JBQ3pDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLEtBQUQsTUFBRyxnT0FJc0IsTUFFekIsb0NBQUMsS0FBRCxNQUFHLHdLQUtILG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUF3QixnQ0FHdEMsb0NBQUMsS0FBRCxNQUFHLGdSQU9ILG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUFZLDhGQUl6QixvQ0FBQyxLQUFELE1BQUcsb0RBQ2dELEtBQ2pELG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxJQUFzQixNQUFLO0FBQUEsS0FBMEIsaUJBRTlELHdLQUc4QyxLQUNsRCxvQ0FBQyxLQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsS0FDTixnQkFFSSxLQUFJLGlCQUNLLEtBQ2Qsb0NBQUMsS0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLEtBQ04sa0JBRUksS0FBSSxrQkFDTSxLQUNmLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxLQUNOLGFBRUksS0FBSSxlQUdYLG9DQUFDLEtBQUQsTUFBRywyTEFLSCxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBd0IsOEJBQ3RDLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUFtQixrR0FJaEMsb0NBQUMsS0FBRCxNQUFHLG9KQUtILG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUFrQiwyQ0FFMUIsS0FDTixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FDWixvQ0FBQyxNQUFELE1BQUksc0RBQ0osb0NBQUMsTUFBRCxNQUFJLHdCQUNKLG9DQUFDLE1BQUQsTUFBSSw2Q0FDSixvQ0FBQyxNQUFELE1BQUksNEJBSVYsb0NBQUMsU0FBRDtBQUFBLElBQU8sSUFBRztBQUFBLElBQVMsV0FBVTtBQUFBLEtBQzNCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUE2QixvQkFDM0Msb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQ1osb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQVMsMEVBSXRCLG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxVQUFELE1BQVEsZUFBbUIsc0JBQW1CLEtBQzlDLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxJQUFpQixNQUFLO0FBQUEsS0FBMEIsdUJBSS9ELG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxVQUFELE1BQVEsZ0JBQW9CLHlCQUU5QixvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsVUFBRCxNQUFRLGFBQWMseUJBRXhCLG9DQUFDLE1BQUQsTUFDRSxvQ0FBQyxVQUFELE1BQVEsZ0JBQW9CLHlCQUU5QixvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsVUFBRCxNQUFRLG9CQUFrQix5QkFFNUIsb0NBQUMsTUFBRCxNQUNFLG9DQUFDLFVBQUQsTUFBUSxlQUFtQiwyQkFJakMsb0NBQUMsb0JBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLFFBQU87QUFBQSxJQUNQLGVBQWEsVUFBVTtBQUFBLEtBRXZCLG9DQUFDLFlBQUQsTUFDRSxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBdUMsZ0NBR3BELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFNBQVE7QUFBQSxJQUFPLFdBQVU7QUFBQSxLQUFvQixjQUdwRCxvQ0FBQyxTQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxJQUFHO0FBQUEsSUFDSCxXQUFVO0FBQUEsSUFDVixhQUFZO0FBQUEsSUFDWixVQUFRO0FBQUEsT0FHWixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FBa0IsZUFHbkQsb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsV0FBVTtBQUFBLElBQ1YsYUFBWTtBQUFBLElBQ1osVUFBUTtBQUFBLE9BSVosb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQVUsV0FBVTtBQUFBLEtBQWlCLHFDQUdwRCxvQ0FBQyxVQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsS0FFVixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxPQUFNO0FBQUEsS0FBWSxjQUMxQixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxPQUFNO0FBQUEsS0FBYSxlQUMzQixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxPQUFNO0FBQUEsS0FBUSxhQUN0QixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxPQUFNO0FBQUEsS0FBYyxnQkFDNUIsb0NBQUMsVUFBRDtBQUFBLElBQVEsT0FBTTtBQUFBLEtBQVksb0JBQzFCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFhLGVBQzNCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFhLFdBQzNCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFhLHlCQUkvQixvQ0FBQyxVQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsS0FDWCxZQUlILG9DQUFDLEtBQUQsTUFBSSwwQ0FBWSxTQUFRLFdBQVcsVUFBVSwwREFBRSxhQUVqRCxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFFVixlQUFhLFVBQVU7QUFBQSxLQUV2QixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBd0Isa0NBRXRDLG9DQUFDLEtBQUQsTUFBRyxxRkFJSCxvQ0FBQyxvQkFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLElBQTJCLElBQUc7QUFBQSxLQUFJLGtCQU14RCxvQ0FBQyxLQUFEO0FBQUEsSUFDRSxTQUFRO0FBQUEsSUFDUixNQUFLO0FBQUEsSUFDTCxZQUFXO0FBQUEsSUFDWCxVQUFTO0FBQUE7QUFBQTs7O0FHclJqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTU87OztBQ05QO0FBQUEsb0JBQTBEOzs7Ozs7Ozs7QUFlM0MsZUFBYyxPQUFvQjtBQUMvQyxNQUFJLGFBQWE7QUFDakIsTUFBSSxRQUFzQywwQ0FBWSxnQkFDbEQsWUFDQSwwQ0FBWSxTQUNaLFVBQ0E7QUFFSixTQUNFLDBEQUNFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUNkLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUErQyxvQ0FFM0Qsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQXlJLHlDQUszSixvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBYywwQ0FFekIsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLElBQVksTUFBSztBQUFBLEtBQzNCLEtBQUksYUFFRixPQUlULG9DQUFDLG9CQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixRQUFPO0FBQUEsSUFDUCxlQUFhLFVBQVU7QUFBQSxLQUV2QixvQ0FBQyxZQUFELE1BQ0Usb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQWtDLDBCQUcvQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsSUFBTyxXQUFVO0FBQUEsS0FBb0IsY0FHcEQsb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsV0FBVTtBQUFBLElBQ1YsYUFBWTtBQUFBLElBQ1osVUFBUTtBQUFBLE9BR1osb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQVEsV0FBVTtBQUFBLEtBQWtCLGVBR25ELG9DQUFDLFNBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLElBQUc7QUFBQSxJQUNILFdBQVU7QUFBQSxJQUNWLGFBQVk7QUFBQSxJQUNaLFVBQVE7QUFBQSxPQUdaLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFNBQVE7QUFBQSxJQUFVLFdBQVU7QUFBQSxLQUFpQixpQkFHcEQsb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLElBQ1YsYUFBWTtBQUFBLElBQ1osVUFBUTtBQUFBLE9BSVosb0NBQUMsVUFBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLEtBQ1gsWUFJSCxvQ0FBQyxLQUFELE1BQUksMENBQVksU0FBUSxXQUFXLFVBQVUsMERBQUUsYUFFakQsb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBRVYsZUFBYSxVQUFVO0FBQUEsS0FFdkIsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQXdCLGlDQUV0QyxvQ0FBQyxLQUFELE1BQUcsaURBQ0gsb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxJQUEyQixJQUFHO0FBQUEsS0FBSSxpQkFNdEQsb0NBQUMsV0FBRDtBQUFBLElBQVMsV0FBVTtBQUFBLEtBQ2pCLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUEwRiwyQkFHeEcsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsS0FBRDtBQUFBLElBQUcsTUFBSztBQUFBLEtBQ04sb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsS0FBSztBQUFBLE9BR1Qsb0NBQUMsS0FBRDtBQUFBLElBQUcsTUFBSztBQUFBLEtBQ04sb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsS0FBSztBQUFBO0FBQUE7OztBQ2pJbkI7QUFBQSx3QkFBdUI7OztBQ0F2QjtBQUFPLElBQU0sU0FBUztBQUFBLEVBQ3BCLFlBQVk7QUFBQSxFQUVaLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQTs7O0FERlYsdUJBQTRCO0FBR3JCLElBQU0sZUFBZSxJQUFJLDBCQUFXO0FBRXBDLElBQU0sVUFBVSw4QkFBZ0I7QUFFaEMsZ0JBQWdCLFFBQWE7QUFDbEMsU0FBTyxRQUFRLE1BQU07QUFBQTtBQUloQixJQUFNLGdCQUFnQixJQUFJLDBCQUFXLGlDQUN2QyxTQUR1QztBQUFBLEVBRTFDLFFBQVE7QUFBQTtBQUtILElBQU0sWUFBWSxDQUFDLGFBQWEsVUFDckMsYUFBYSxnQkFBZ0I7OztBRkMvQix5QkFBK0I7QUFDN0IsUUFBTSxZQUFZLE1BQU0sWUFBWSxNQUNsQztBQUFBO0FBR0YsUUFBTSxZQUFZLE1BQU0sWUFBWSxNQUNsQztBQUFBO0FBR0YsU0FBTyxFQUFFLFdBQVc7QUFBQTtBQVVmLElBQU0sUUFBTyxNQUFNO0FBQ3hCLFNBQU87QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQTtBQUFBO0FBTVAsSUFBSSxVQUF5QixPQUFPLEVBQUUsY0FBYztBQUN6RCxNQUFJLFdBQVcsTUFBTSxRQUFRO0FBQzdCLE1BQUksUUFBUSxTQUFTLElBQUk7QUFDekIsTUFBSSxPQUFPLFNBQVMsSUFBSTtBQUN4QixNQUFJLFVBQVUsU0FBUyxJQUFJO0FBRzNCLFFBQU0sVUFBVTtBQUNoQixRQUFNLFVBQVU7QUFDaEIsUUFBTSxNQUFNO0FBRVosTUFBSSxNQUFNLE1BQU0sTUFBTSxHQUFHLGFBQWEscUJBQXFCO0FBQUEsSUFDekQsUUFBUTtBQUFBLElBQ1IsTUFBTSxLQUFLLFVBQVU7QUFBQSxNQUNuQjtBQUFBLE1BQ0EsWUFBWTtBQUFBLE1BQ1osUUFBUSxFQUFFO0FBQUEsTUFDVixTQUFTO0FBQUE7QUFBQSxJQUVYLFNBQVM7QUFBQSxNQUNQLGdCQUFnQjtBQUFBO0FBQUE7QUFLcEIsU0FBTyxJQUFJO0FBQUE7QUFHRSxpQkFBaUI7QUFDOUIsUUFBTSxFQUFFLFdBQVcsY0FBYztBQUVqQyxRQUFNLDJCQUEyQjtBQUFBLElBQy9CLE9BQU87QUFBQSxNQUNMLE9BQU8sQ0FBQyxVQUNOLG9DQUFDLE9BQUQ7QUFBQSxRQUFLLEtBQUssTUFBTTtBQUFBLFFBQU8sS0FBSyxNQUFNO0FBQUEsUUFBSyxXQUFXLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFLOUQsU0FDRSwwREFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxTQUFRO0FBQUEsSUFFUixNQUFLO0FBQUEsSUFFTCxhQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsSUFDVixhQUFZO0FBQUEsSUFDWixXQUFVO0FBQUEsSUFDVixRQUFPO0FBQUE7QUFBQTs7O0FJdkdmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUE4QjtBQUk5Qix1QkFBNkIsRUFBRSxVQUEyQjtBQUd4RCxRQUFNLGNBQWMsTUFBTSxZQUFZLE1BQ3BDO0FBQUEsTUFFQSxFQUFFLE1BQU0sT0FBTztBQUdqQixTQUFPLEVBQUU7QUFBQTtBQUdJLG9CQUFvQjtBQUNqQyxNQUFJLEVBQUUsZ0JBQWdCO0FBRXRCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssT0FBTyxFQUFFLFdBQVcsVUFBVSxTQUFTO0FBQUEsS0FDMUMsb0NBQUMsTUFBRCxNQUFLLFlBQVksR0FBRyxRQUNwQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFLLFlBQVksR0FBRztBQUFBO0FBQUE7OztBQ3RCL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQXFCOzs7Ozs7QUFLZCxJQUFNLFFBQU8sTUFBTTtBQUN4QixTQUFPO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxhQUNFO0FBQUEsSUFDRixVQUFVO0FBQUE7QUFBQTtBQUlDLGlCQUFpQjtBQUM5QixTQUNFLDBEQUNFLG9DQUFDLFdBQUQ7QUFBQSxJQUFTLFdBQVU7QUFBQSxLQUNqQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBMkIsdUJBQ3pDLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUF3QixlQUN0QyxvQ0FBQyxLQUFELE1BQUcsc1dBUUgsb0NBQUMsS0FBRCxNQUFHLHVTQU9ILG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUF3QixtQkFDdEMsb0NBQUMsS0FBRCxNQUFHLDRFQUlILG9DQUFDLEtBQUQsTUFBRyx5TEFLSCxvQ0FBQyxLQUFELE1BQUcsb1RBT0gsb0NBQUMsS0FBRCxNQUFHLGlTQU9ILG9DQUFDLEtBQUQsTUFBRyxzSkFLSCxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBd0IsNkJBQ3RDLG9DQUFDLEtBQUQsTUFBRyx1REFDSCxvQ0FBQyxLQUFELE1BQUcsNEVBSUgsb0NBQUMsS0FBRCxNQUFHLHVOQU1ILG9DQUFDLEtBQUQsTUFBRyxrVEFPSCxvQ0FBQyxLQUFELE1BQUcsdUhBSUgsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQXdCLCtCQUN0QyxvQ0FBQyxLQUFELE1BQUcsaU1BS0gsb0NBQUMsS0FBRCxNQUFHLCtLQUtILG9DQUFDLEtBQUQsTUFBRyxtTEFLSCxvQ0FBQyxLQUFELE1BQUcsNkVBS0wsb0NBQUMsOEJBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxJQUFtQixJQUFHO0FBQUEsS0FDcEMsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSztBQUFBLElBQVUsV0FBVTtBQUFBLFFBR2xDLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLFNBQVE7QUFBQSxJQUNSLE1BQUs7QUFBQSxJQUNMLFlBQVc7QUFBQSxJQUNYLFVBQVM7QUFBQTtBQUFBOzs7QUNySGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFNTzs7O0FDTlA7QUFDQSxxQkFBb0M7QUFRckIsY0FBYyxPQUFvQjtBQUMvQyxRQUFNLEVBQUUsY0FBYztBQUV0QixRQUFNLDJCQUEyQjtBQUFBLElBQy9CLE9BQU87QUFBQSxNQUNMLE9BQU8sQ0FBQyxVQUNOLG9DQUFDLE9BQUQ7QUFBQSxRQUFLLEtBQUssTUFBTTtBQUFBLFFBQU8sS0FBSyxNQUFNO0FBQUEsUUFBSyxXQUFXLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFLOUQsU0FDRSxvQ0FBQyxXQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFXLHNFQUNULE1BQU0sUUFBUSxTQUFTLEtBQUs7QUFBQSxLQUc5QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBeUIsVUFBVSxHQUFHLFFBQ3BELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLEtBQUQsTUFBRyxzV0FRSCxvQ0FBQyxLQUFELE1BQUcsdVNBT0gsb0NBQUMscUJBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxJQUF1QyxJQUFHO0FBQUEsS0FBUyx1QkFDN0MsUUFjMUIsb0NBQUMsVUFBRDtBQUFBLElBQVEsV0FBVTtBQUFBLEtBQ2hCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxJQUFTLEtBQUssVUFBVSxHQUFHO0FBQUE7QUFBQTs7O0FEdkNsRCx5QkFBK0I7QUFDN0IsUUFBTSxZQUFZLE1BQU0sWUFBWSxNQUNsQztBQUFBO0FBR0YsUUFBTSxZQUFZLE1BQU0sWUFBWSxNQUNsQztBQUFBO0FBSUYsUUFBTSxjQUFjLE1BQU0sWUFBWSxNQUNwQztBQUFBO0FBSUYsUUFBTSxlQUFlLE1BQU0sWUFBWSxNQUNyQztBQUFBO0FBR0YsU0FBTyxFQUFFLFdBQVcsV0FBVyxhQUFhO0FBQUE7QUFVdkMsSUFBTSxRQUFPLE1BQU07QUFDeEIsU0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsYUFDRTtBQUFBLElBQ0YsVUFBVTtBQUFBO0FBQUE7QUFNUCxJQUFJLFVBQXlCLE9BQU8sRUFBRSxjQUFjO0FBQ3pELE1BQUksV0FBVyxNQUFNLFFBQVE7QUFDN0IsTUFBSSxRQUFRLFNBQVMsSUFBSTtBQUN6QixNQUFJLE9BQU8sU0FBUyxJQUFJO0FBQ3hCLE1BQUksVUFBVSxTQUFTLElBQUk7QUFHM0IsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sVUFBVTtBQUNoQixRQUFNLE1BQU07QUFFWixNQUFJLE1BQU0sTUFBTSxNQUFNLEdBQUcsYUFBYSxxQkFBcUI7QUFBQSxJQUN6RCxRQUFRO0FBQUEsSUFDUixNQUFNLEtBQUssVUFBVTtBQUFBLE1BQ25CO0FBQUEsTUFDQSxZQUFZO0FBQUEsTUFDWixRQUFRLEVBQUU7QUFBQSxNQUNWLFNBQVM7QUFBQTtBQUFBLElBRVgsU0FBUztBQUFBLE1BQ1AsZ0JBQWdCO0FBQUE7QUFBQTtBQUtwQixTQUFPLElBQUk7QUFBQTtBQUVFLGtCQUFpQjtBQUM5QixRQUFNLEVBQUUsV0FBVyxXQUFXLGFBQWEsaUJBQWlCO0FBRTVELFFBQU0sMkJBQTJCO0FBQUEsSUFDL0IsT0FBTztBQUFBLE1BQ0wsT0FBTyxDQUFDLFVBQ04sb0NBQUMsT0FBRDtBQUFBLFFBQUssS0FBSyxNQUFNO0FBQUEsUUFBTyxLQUFLLE1BQU07QUFBQSxRQUFLLFdBQVcsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUs5RCxTQUNFLDBEQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFNBQVE7QUFBQSxJQUVSLE1BQUs7QUFBQSxJQUVMLGFBQVk7QUFBQSxJQUNaLFdBQVU7QUFBQSxJQUNWLGFBQVk7QUFBQSxJQUNaLFdBQVU7QUFBQSxJQUNWLFFBQU87QUFBQSxNQUdULG9DQUFDLE1BQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxNQUNYLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLFNBQVE7QUFBQSxJQUNSLE1BQUs7QUFBQSxJQUNMLFlBQVc7QUFBQSxJQUNYLFVBQVM7QUFBQSxNQTZGWCxvQ0FBQyxXQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFVO0FBQUEsS0FFVixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBd0Qsb0JBSXRFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNaLDRDQUFhLFVBQVMsSUFDbkIsMkNBQWEsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQzVCLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLEtBQUssV0FBVztBQUFBLElBQ2hCLFdBQVU7QUFBQSxLQUVWLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLEtBQUssT0FBTyxXQUFXLGNBQWMsTUFBTSxLQUFLO0FBQUEsSUFDaEQsS0FBSyxXQUFXO0FBQUEsTUFFbEIsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQWEsV0FBVyxPQUFNLE1BQzVDLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUNWLFdBQVcsTUFBTSxNQUdwQixvQ0FBQyxLQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFNLFdBQVc7QUFBQSxLQUNsQixnQkFLTCxRQUlSLG9DQUFDLFdBQUQ7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUNILFdBQVU7QUFBQSxLQUVWLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUF3RCx1QkFJdEUsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1osOENBQWMsVUFBUyxJQUNwQiw2Q0FBYyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQzdCLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLEtBQUssWUFBWTtBQUFBLElBQ2pCLFdBQVU7QUFBQSxLQUVWLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLEtBQUssT0FBTyxZQUFZLGNBQWMsTUFBTSxLQUFLO0FBQUEsSUFDakQsS0FBSyxZQUFZO0FBQUEsTUFFbkIsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQWEsWUFBWSxPQUFNLE1BQzdDLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUNWLFlBQVksZUFBZSxNQUU5QixvQ0FBQyxLQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFNLFlBQVk7QUFBQSxLQUNuQixnQkFLTCxRQUlSLG9DQUFDLFdBQUQ7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUNILFdBQVU7QUFBQSxLQUVWLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUFxSCxlQUduSSxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBTyxnS0FLcEIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsS0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLEtBQ1gsYUFHRCxvQ0FBQyxLQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxXQUFVO0FBQUEsS0FDWDtBQUFBOzs7QWZ4U2Isb0JBQWtDO0FBQzNCLElBQU0sUUFBUSxFQUFFLFFBQVE7QUFDeEIsSUFBTSxTQUFTO0FBQUEsRUFDcEIsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVix3QkFBd0I7QUFBQSxJQUN0QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLHVCQUF1QjtBQUFBLElBQ3JCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsa0JBQWtCO0FBQUEsSUFDaEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVixpQkFBaUI7QUFBQSxJQUNmLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsZ0JBQWdCO0FBQUEsSUFDZCxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLGdCQUFnQjtBQUFBLElBQ2QsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFVixnQkFBZ0I7QUFBQSxJQUNkLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
