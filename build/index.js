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
var tailwind_default = "/build/_assets/tailwind-D5B7B3LI.css";

// app/images/logo-light.svg
var logo_light_default = "/build/_assets/logo-light-W72WDGBG.svg";

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/root.tsx
var meta = () => {
  return { title: "Padel Africa" };
};
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
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
    className: `  ${isShrunk ? "transition ease-in-out  md:bg-opacity-75 backdrop-blur-lg z-10 py-2 text-xs   " : "transition ease-in-out md:bg-opacity-0 "} bg-slate-900 border-gray-200 px-4 sm:px-6 py-4 md:fixed w-full text-black `
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

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => NewsPost,
  loader: () => loader
});
init_react();
var import_remix3 = __toModule(require_remix());

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

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/$slug.tsx
async function loader({ params }) {
  const initialData = await getClient().fetch(`*[_type == "news" && slug.current == $slug]{ _id, title, slug, "featureImage": feature.asset->url
  }`, { slug: params.slug });
  return { initialData };
}
function NewsPost() {
  let { initialData } = (0, import_remix3.useLoaderData)();
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
  loader: () => loader2,
  meta: () => meta2
});
init_react();
var import_remix5 = __toModule(require_remix());

// app/Components/cta.tsx
init_react();
var import_remix4 = __toModule(require_remix());
function CTA(props) {
  return /* @__PURE__ */ React.createElement("section", {
    id: "partners",
    className: "[cta] p-20 md:mx-20 bg-slate-900 flex flex-col justify-center align-middle rounded-md shadow-2xl text-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "  m-auto  text-center  space-y-vw-6-min@xl md:w-3/4 "
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-300  via-green-500 to-yellow-400 "
  }, props.heading), /* @__PURE__ */ React.createElement("p", {
    className: "base"
  }, props.body), /* @__PURE__ */ React.createElement(import_remix4.Link, {
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
    className: "w-full md:w-3/5 my-auto space-y-vw-2-min@xl py-8  "
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-bold text-white"
  }, props.heading), /* @__PURE__ */ React.createElement("p", {
    className: "text-base font-light text-slate-300"
  }, props.body), /* @__PURE__ */ React.createElement("div", {
    className: " space-x-vw-4-min@xl  md:inline-flex justify-between"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "py-vw-4-min@xl-max@2xl px-vw-4-min@xl-max@2xl bg-gradient-to-br from-green-300   to-yellow-400 rounded-xl font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl"
  }, props.button1Text), /* @__PURE__ */ React.createElement("button", {
    className: " py-vw-4-min@xl-max@2xl px-vw-4-min@xl-max@2xl bg-gradient-to-br from-white   to-gray-200 rounded-xl font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl"
  }, props.button2Text))), /* @__PURE__ */ React.createElement("form", {
    className: "w-full md:w-1/2  my-auto space-y-vw-4-min@xl bg-white  bg-opacity-50 backdrop-blur-lg shadow-2xl	 p-6 rounded-lg  border-slate-900 border-2  h-fit "
  }, /* @__PURE__ */ React.createElement("p", {
    className: "font-bold text-lg"
  }, "Join the Mailing List"), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "block mb-2 text-sm font-medium "
  }, "Your Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "name",
    className: "bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0  dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "Joe Bloggs",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "block mb-2 text-sm font-medium "
  }, "Your email"), /* @__PURE__ */ React.createElement("input", {
    type: "email",
    id: "email",
    className: "bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500",
    placeholder: "name@flowbite.com",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "block mb-2 text-sm font-medium "
  }, "Your Company"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "company",
    className: "bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "Acme Inc",
    required: true
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: " py-4 px-6 bg-gradient-to-br from-green-300 to-yellow-400 rounded-xl font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl"
  }, "Submit")));
}

// app/Components/info.tsx
init_react();

// app/images/about-pa.jpg
var about_pa_default = "/build/_assets/about-pa-V2X3EPXD.jpg";

// app/Components/info.tsx
function Info(props) {
  return /* @__PURE__ */ React.createElement("section", {
    id: "about",
    className: `[cta]  p-vw-32  space-y-10 md:space-x-10 flex flex-col md:flex-row ${props.flow == "left" ? "" : " md:flex-row-reverse space-x-reverse"} `
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:w-1/2 space-y-4  "
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-4xl font-bold"
  }, props.title), /* @__PURE__ */ React.createElement("p", {
    className: "base"
  }, props.body)), /* @__PURE__ */ React.createElement("figure", {
    className: "md:w-1/2 bg-slate-300"
  }, /* @__PURE__ */ React.createElement("img", {
    src: about_pa_default
  })));
}

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/routes/index.tsx
var import_react2 = __toModule(require("@portabletext/react"));
async function loader2() {
  const newsPosts = await getClient().fetch(`*[_type == "news"]{ _id, title, slug, "featureImage": feature.asset->url
   }`);
  const aboutText = await getClient().fetch(`*[_type == "about"]{ _id, title, overview, "overviewText": overview[0].children, 
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
function Index() {
  var _a;
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
    title: "About Us",
    body: "Integer a eros venenatis, interdum lorem eu, lobortis ligula. Curabitur vel ipsum non tellus convallis elementum. Vivamus pulvinar risus nec sapien commodo bibendum",
    flow: "left",
    image: "#"
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
  }, "\u201C Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\u201D"), /* @__PURE__ */ React.createElement("div", {
    className: "main-content space-y-2"
  }, ((_a = aboutText[0].overview) == null ? void 0 : _a.length) > 0 ? aboutText[0].overview.map((paragraphs) => /* @__PURE__ */ React.createElement(import_react2.PortableText, {
    key: paragraphs._id,
    value: [paragraphs],
    components: myPortableTextComponents
  })) : null))), /* @__PURE__ */ React.createElement("section", {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm9vdC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzLyRzbHVnLnRzeCIsICIuLi9hcHAvbGliL3Nhbml0eS9nZXRDbGllbnQudHMiLCAiLi4vYXBwL2xpYi9zYW5pdHkvY29uZmlnLnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy9hYm91dC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvQ29tcG9uZW50cy9jdGEudHN4IiwgIi4uL2FwcC9Db21wb25lbnRzL2hlcm8udHN4IiwgIi4uL2FwcC9Db21wb25lbnRzL2luZm8udHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy8kc2x1Zy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvYWJvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvJHNsdWdcIjoge1xuICAgIGlkOiBcInJvdXRlcy8kc2x1Z1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIjpzbHVnXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvYWJvdXRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9hYm91dFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImFib3V0XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUzXG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGRvdGVudi5jb25maWcoKTtcblxuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKCc8IURPQ1RZUEUgaHRtbD4nICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGluayxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMvdGFpbHdpbmQuY3NzJztcbmltcG9ydCBsb2dvIGZyb20gJy4vaW1hZ2VzL2xvZ28uc3ZnJztcbmltcG9ydCBsb2dvRGFyayBmcm9tICcuL2ltYWdlcy9sb2dvLWRhcmsuc3ZnJztcbmltcG9ydCBsb2dvTGlnaHQgZnJvbSAnLi9pbWFnZXMvbG9nby1saWdodC5zdmcnO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCc7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiAnUGFkZWwgQWZyaWNhJyB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGNvbnN0IE5hdiA9ICgpID0+IHtcbiAgY29uc3QgW2lzU2hydW5rLCBzZXRTaHJ1bmtdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHNldFNocnVuaygoaXNTaHJ1bmspID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFpc1NocnVuayAmJlxuICAgICAgICAgIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDIwIHx8XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMjApXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzU2hydW5rICYmXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPCA0ICYmXG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA8IDRcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzU2hydW5rO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW25hdmJhck9wZW4sIHNldE5hdmJhck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgc2V0TmF2YmFyT3BlbigocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxuYXZcbiAgICAgICAgY2xhc3NOYW1lPXtgICAke1xuICAgICAgICAgIGlzU2hydW5rXG4gICAgICAgICAgICA/ICd0cmFuc2l0aW9uIGVhc2UtaW4tb3V0ICBtZDpiZy1vcGFjaXR5LTc1IGJhY2tkcm9wLWJsdXItbGcgei0xMCBweS0yIHRleHQteHMgICAnXG4gICAgICAgICAgICA6ICd0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IG1kOmJnLW9wYWNpdHktMCAnXG4gICAgICAgIH0gYmctc2xhdGUtOTAwIGJvcmRlci1ncmF5LTIwMCBweC00IHNtOnB4LTYgcHktNCBtZDpmaXhlZCB3LWZ1bGwgdGV4dC1ibGFjayBgfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGZsZXggZmxleC13cmFwIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbXgtYXV0byc+XG4gICAgICAgICAgPGEgaHJlZj0nLycgY2xhc3NOYW1lPSdmbGV4Jz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtsb2dvTGlnaHR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgdHJhbnNmb3JtICR7XG4gICAgICAgICAgICAgICAgaXNTaHJ1bmsgPyAnaC0xMicgOiAnbWQ6aC0yMCdcbiAgICAgICAgICAgICAgfSBoLTEwYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX1cbiAgICAgICAgICAgIGRhdGEtY29sbGFwc2UtdG9nZ2xlPSdtb2JpbGUtbWVudSdcbiAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHAtMiBtbC0zIHRleHQtc20gcm91bmRlZC1sZyBtZDpoaWRkZW4gaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyYXktMjAwIGRhcms6dGV4dC1ncmF5LTQwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6Zm9jdXM6cmluZy1ncmF5LTYwMCdcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9J21vYmlsZS1tZW51LTInXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPSdmYWxzZSdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPk9wZW4gbWFpbiBtZW51PC9zcGFuPlxuICAgICAgICAgICAge25hdmJhck9wZW4gPyAoXG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9JyB3LTYgaC02J1xuICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjAgMjAnXG4gICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgICAgZD0nTTQuMjkzIDQuMjkzYTEgMSAwIDAxMS40MTQgMEwxMCA4LjU4Nmw0LjI5My00LjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0TDExLjQxNCAxMGw0LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNCAxLjQxNEwxMCAxMS40MTRsLTQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0LTEuNDE0TDguNTg2IDEwIDQuMjkzIDUuNzA3YTEgMSAwIDAxMC0xLjQxNHonXG4gICAgICAgICAgICAgICAgICBjbGlwUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNiBoLTYnXG4gICAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xuICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyMCAyMCdcbiAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgICBkPSdNMyA1YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xek0zIDEwYTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xek0zIDE1YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xeidcbiAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtcbiAgICAgICAgICAgICAgbmF2YmFyT3BlblxuICAgICAgICAgICAgICAgID8gJ2gtc2NyZWVuIHRleHQtNHhsIHRleHQtY2VudGVyIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlcidcbiAgICAgICAgICAgICAgICA6ICdoaWRkZW4nXG4gICAgICAgICAgICB9IHctZnVsbCBtZDpibG9jayBtZDp3LWF1dG9gfVxuICAgICAgICAgICAgaWQ9J21vYmlsZS1tZW51J1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgIG10LTEyIG1kOm10LTAgICBtZDpmbGV4LXJvdyBtZDpzcGFjZS14LTggICB0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICB0bz0nI2Fib3V0J1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdibG9jayBweS0yIHByLTQgcGwtMyAgICBtZDpib3JkZXItMCAgbWQ6cC0wICAnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgdG89JyNwYXJ0bmVycydcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmxvY2sgcHktMiBwci00IHBsLTMgICAgbWQ6cC0wICAnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUGFydG5lcnNcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgdG89JyNjb250YWN0J1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdibG9jayBweS0yIHByLTQgcGwtMyAgICBtZDpwLTAgICdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBJbnZlc3RvcnNcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGluayB0bz0nI2NvbnRhY3QnIGNsYXNzTmFtZT0nYmxvY2sgcHktMiBwci00IHBsLTMgICBtZDpwLTAgICc+XG4gICAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9J3AtNCAgc206cC04IGJnLXNsYXRlLTkwMCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6ZmxleCBtZDpqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNiBtZDptYi0wJz5cbiAgICAgICAgICA8YSBocmVmPScjJyB0YXJnZXQ9J19ibGFuaycgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8aW1nIHNyYz17bG9nb0xpZ2h0fSBjbGFzc05hbWU9J21yLTQgaC0yMCcgYWx0PSdGbG93Qml0ZSBMb2dvJyAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0yIGdhcC04IHNtOmdhcC02IHNtOmdyaWQtY29scy0zJz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nbWItNiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCB1cHBlcmNhc2UgZGFyazp0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgICAgUmVzb3VyY2VzXG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdtYi00Jz5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9mbG93Yml0ZS5jb20nXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTYwMCBob3Zlcjp1bmRlcmxpbmUgZGFyazp0ZXh0LWdyYXktNDAwJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEludmVzdG9yc1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgICAgICByZWw9J25vZm9sbG93J1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNjAwIGhvdmVyOnVuZGVybGluZSBkYXJrOnRleHQtZ3JheS00MDAnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUGFydG5lcnNcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdtYi02IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIHVwcGVyY2FzZSBkYXJrOnRleHQtd2hpdGUnPlxuICAgICAgICAgICAgICBGb2xsb3cgdXNcbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J21iLTQnPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtZ3JheS02MDAgaG92ZXI6dW5kZXJsaW5lIGRhcms6dGV4dC1ncmF5LTQwMCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBGYWNlYm9va1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtZ3JheS02MDAgaG92ZXI6dW5kZXJsaW5lIGRhcms6dGV4dC1ncmF5LTQwMCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBOZXdzbGV0dGVyXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nbWItNiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCB1cHBlcmNhc2UgZGFyazp0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgICAgTGVnYWxcbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J21iLTQnPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtZ3JheS02MDAgaG92ZXI6dW5kZXJsaW5lIGRhcms6dGV4dC1ncmF5LTQwMCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBQcml2YWN5IFBvbGljeVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtZ3JheS02MDAgaG92ZXI6dW5kZXJsaW5lIGRhcms6dGV4dC1ncmF5LTQwMCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBUZXJtcyAmYW1wOyBDb25kaXRpb25zXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxociBjbGFzc05hbWU9J215LTYgYm9yZGVyLWdyYXktMjAwIHNtOm14LWF1dG8gZGFyazpib3JkZXItZ3JheS03MDAgbGc6bXktOCcgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbTpmbGV4IHNtOml0ZW1zLWNlbnRlciBzbTpqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtc20gdGV4dC1ncmF5LTUwMCBzbTp0ZXh0LWNlbnRlciBkYXJrOnRleHQtZ3JheS00MDAnPlxuICAgICAgICAgIFx1MDBBOSAyMDIyeycgJ31cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9mbG93Yml0ZS5jb20nXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naG92ZXI6dW5kZXJsaW5lJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIFBhZGVsIEFmcmljYVx1MjEyMlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICAuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbXQtNCBzcGFjZS14LTYgc206anVzdGlmeS1jZW50ZXIgc206bXQtMCc+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9JyMnXG4gICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTkwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNSBoLTUnXG4gICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICBkPSdNMjIgMTJjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMFMyIDYuNDc3IDIgMTJjMCA0Ljk5MSAzLjY1NyA5LjEyOCA4LjQzOCA5Ljg3OHYtNi45ODdoLTIuNTRWMTJoMi41NFY5Ljc5N2MwLTIuNTA2IDEuNDkyLTMuODkgMy43NzctMy44OSAxLjA5NCAwIDIuMjM4LjE5NSAyLjIzOC4xOTV2Mi40NmgtMS4yNmMtMS4yNDMgMC0xLjYzLjc3MS0xLjYzIDEuNTYyVjEyaDIuNzczbC0uNDQzIDIuODloLTIuMzN2Ni45ODhDMTguMzQzIDIxLjEyOCAyMiAxNi45OTEgMjIgMTJ6J1xuICAgICAgICAgICAgICAgIGNsaXBSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS05MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTUgaC01J1xuICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXG4gICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgICAgZD0nTTEyLjMxNSAyYzIuNDMgMCAyLjc4NC4wMTMgMy44MDguMDYgMS4wNjQuMDQ5IDEuNzkxLjIxOCAyLjQyNy40NjVhNC45MDIgNC45MDIgMCAwMTEuNzcyIDEuMTUzIDQuOTAyIDQuOTAyIDAgMDExLjE1MyAxLjc3MmMuMjQ3LjYzNi40MTYgMS4zNjMuNDY1IDIuNDI3LjA0OCAxLjA2Ny4wNiAxLjQwNy4wNiA0LjEyM3YuMDhjMCAyLjY0My0uMDEyIDIuOTg3LS4wNiA0LjA0My0uMDQ5IDEuMDY0LS4yMTggMS43OTEtLjQ2NSAyLjQyN2E0LjkwMiA0LjkwMiAwIDAxLTEuMTUzIDEuNzcyIDQuOTAyIDQuOTAyIDAgMDEtMS43NzIgMS4xNTNjLS42MzYuMjQ3LTEuMzYzLjQxNi0yLjQyNy40NjUtMS4wNjcuMDQ4LTEuNDA3LjA2LTQuMTIzLjA2aC0uMDhjLTIuNjQzIDAtMi45ODctLjAxMi00LjA0My0uMDYtMS4wNjQtLjA0OS0xLjc5MS0uMjE4LTIuNDI3LS40NjVhNC45MDIgNC45MDIgMCAwMS0xLjc3Mi0xLjE1MyA0LjkwMiA0LjkwMiAwIDAxLTEuMTUzLTEuNzcyYy0uMjQ3LS42MzYtLjQxNi0xLjM2My0uNDY1LTIuNDI3LS4wNDctMS4wMjQtLjA2LTEuMzc5LS4wNi0zLjgwOHYtLjYzYzAtMi40My4wMTMtMi43ODQuMDYtMy44MDguMDQ5LTEuMDY0LjIxOC0xLjc5MS40NjUtMi40MjdhNC45MDIgNC45MDIgMCAwMTEuMTUzLTEuNzcyQTQuOTAyIDQuOTAyIDAgMDE1LjQ1IDIuNTI1Yy42MzYtLjI0NyAxLjM2My0uNDE2IDIuNDI3LS40NjVDOC45MDEgMi4wMTMgOS4yNTYgMiAxMS42ODUgMmguNjN6bS0uMDgxIDEuODAyaC0uNDY4Yy0yLjQ1NiAwLTIuNzg0LjAxMS0zLjgwNy4wNTgtLjk3NS4wNDUtMS41MDQuMjA3LTEuODU3LjM0NC0uNDY3LjE4Mi0uOC4zOTgtMS4xNS43NDgtLjM1LjM1LS41NjYuNjgzLS43NDggMS4xNS0uMTM3LjM1My0uMy44ODItLjM0NCAxLjg1Ny0uMDQ3IDEuMDIzLS4wNTggMS4zNTEtLjA1OCAzLjgwN3YuNDY4YzAgMi40NTYuMDExIDIuNzg0LjA1OCAzLjgwNy4wNDUuOTc1LjIwNyAxLjUwNC4zNDQgMS44NTcuMTgyLjQ2Ni4zOTkuOC43NDggMS4xNS4zNS4zNS42ODMuNTY2IDEuMTUuNzQ4LjM1My4xMzcuODgyLjMgMS44NTcuMzQ0IDEuMDU0LjA0OCAxLjM3LjA1OCA0LjA0MS4wNThoLjA4YzIuNTk3IDAgMi45MTctLjAxIDMuOTYtLjA1OC45NzYtLjA0NSAxLjUwNS0uMjA3IDEuODU4LS4zNDQuNDY2LS4xODIuOC0uMzk4IDEuMTUtLjc0OC4zNS0uMzUuNTY2LS42ODMuNzQ4LTEuMTUuMTM3LS4zNTMuMy0uODgyLjM0NC0xLjg1Ny4wNDgtMS4wNTUuMDU4LTEuMzcuMDU4LTQuMDQxdi0uMDhjMC0yLjU5Ny0uMDEtMi45MTctLjA1OC0zLjk2LS4wNDUtLjk3Ni0uMjA3LTEuNTA1LS4zNDQtMS44NThhMy4wOTcgMy4wOTcgMCAwMC0uNzQ4LTEuMTUgMy4wOTggMy4wOTggMCAwMC0xLjE1LS43NDhjLS4zNTMtLjEzNy0uODgyLS4zLTEuODU3LS4zNDQtMS4wMjMtLjA0Ny0xLjM1MS0uMDU4LTMuODA3LS4wNTh6TTEyIDYuODY1YTUuMTM1IDUuMTM1IDAgMTEwIDEwLjI3IDUuMTM1IDUuMTM1IDAgMDEwLTEwLjI3em0wIDEuODAyYTMuMzMzIDMuMzMzIDAgMTAwIDYuNjY2IDMuMzMzIDMuMzMzIDAgMDAwLTYuNjY2em01LjMzOC0zLjIwNWExLjIgMS4yIDAgMTEwIDIuNCAxLjIgMS4yIDAgMDEwLTIuNHonXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9JyMnXG4gICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTkwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNSBoLTUnXG4gICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGggZD0nTTguMjkgMjAuMjUxYzcuNTQ3IDAgMTEuNjc1LTYuMjUzIDExLjY3NS0xMS42NzUgMC0uMTc4IDAtLjM1NS0uMDEyLS41M0E4LjM0OCA4LjM0OCAwIDAwMjIgNS45MmE4LjE5IDguMTkgMCAwMS0yLjM1Ny42NDYgNC4xMTggNC4xMTggMCAwMDEuODA0LTIuMjcgOC4yMjQgOC4yMjQgMCAwMS0yLjYwNS45OTYgNC4xMDcgNC4xMDcgMCAwMC02Ljk5MyAzLjc0MyAxMS42NSAxMS42NSAwIDAxLTguNDU3LTQuMjg3IDQuMTA2IDQuMTA2IDAgMDAxLjI3IDUuNDc3QTQuMDcyIDQuMDcyIDAgMDEyLjggOS43MTN2LjA1MmE0LjEwNSA0LjEwNSAwIDAwMy4yOTIgNC4wMjIgNC4wOTUgNC4wOTUgMCAwMS0xLjg1My4wNyA0LjEwOCA0LjEwOCAwIDAwMy44MzQgMi44NUE4LjIzMyA4LjIzMyAwIDAxMiAxOC40MDdhMTEuNjE2IDExLjYxNiAwIDAwNi4yOSAxLjg0JyAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz0nZW4nIGNsYXNzTmFtZT0nc2Nyb2xsLXNtb290aCc+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT0ndGV4dC1zbGF0ZS05MDAnPlxuICAgICAgICA8TmF2IC8+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgeyBnZXRDbGllbnQgfSBmcm9tICd+L2xpYi9zYW5pdHkvZ2V0Q2xpZW50JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcih7IHBhcmFtcyB9OiB7IHBhcmFtczogYW55IH0pIHtcbiAgLy8gUXVlcnkgZm9yIF9hbGxfIGRvY3VtZW50cyB3aXRoIHRoaXMgc2x1Z1xuICAvLyBUaGVyZSBjb3VsZCBiZSB0d286IERyYWZ0IGFuZCBQdWJsaXNoZWQhXG4gIGNvbnN0IGluaXRpYWxEYXRhID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJuZXdzXCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXXsgX2lkLCB0aXRsZSwgc2x1ZywgXCJmZWF0dXJlSW1hZ2VcIjogZmVhdHVyZS5hc3NldC0+dXJsXG4gIH1gLFxuICAgIHsgc2x1ZzogcGFyYW1zLnNsdWcgfVxuICApO1xuXG4gIHJldHVybiB7IGluaXRpYWxEYXRhIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NQb3N0KCkge1xuICBsZXQgeyBpbml0aWFsRGF0YSB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBwYWRkaW5nOiAyMCB9fT5cbiAgICAgIDxoMT57aW5pdGlhbERhdGFbMF0udGl0bGV9PC9oMT5cbiAgICAgIDxpbWcgc3JjPXtpbml0aWFsRGF0YVswXS5mZWF0dXJlSW1hZ2V9PjwvaW1nPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCBQaWNvU2FuaXR5IGZyb20gJ3BpY29zYW5pdHknO1xuXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJztcblxuLy8gU3RhbmRhcmQgY2xpZW50IGZvciBmZXRjaGluZyBkYXRhXG5leHBvcnQgY29uc3Qgc2FuaXR5Q2xpZW50ID0gbmV3IFBpY29TYW5pdHkoY29uZmlnKTtcblxuZXhwb3J0IGNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoc2FuaXR5Q2xpZW50KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVybEZvcihzb3VyY2U6IGFueSkge1xuICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpO1xufVxuXG4vLyBBdXRoZW50aWNhdGVkIGNsaWVudCBmb3IgZmV0Y2hpbmcgZHJhZnQgZG9jdW1lbnRzXG5leHBvcnQgY29uc3QgcHJldmlld0NsaWVudCA9IG5ldyBQaWNvU2FuaXR5KHtcbiAgLi4uY29uZmlnLFxuICB1c2VDZG46IGZhbHNlLFxuICAvL3Rva2VuOiBwcm9jZXNzLmVudi5TQU5JVFlfQVBJX1RPS0VOLFxufSk7XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjaG9vc2UgdGhlIGNvcnJlY3QgY2xpZW50XG5leHBvcnQgY29uc3QgZ2V0Q2xpZW50ID0gKHVzZVByZXZpZXcgPSBmYWxzZSkgPT5cbiAgdXNlUHJldmlldyA/IHByZXZpZXdDbGllbnQgOiBzYW5pdHlDbGllbnQ7XG4iLCAiZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpVmVyc2lvbjogJzIwMjEtMDMtMjUnLFxuICAvLyBGaW5kIHRoZXNlIGluIHlvdXIgLi9zdHVkaW8vc2FuaXR5Lmpzb24gZmlsZVxuICBkYXRhc2V0OiAncHJvZHVjdGlvbicsXG4gIHByb2plY3RJZDogJ3FpOGhyM3J2JyxcbiAgdXNlQ2RuOiBmYWxzZSxcbn07XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiAnc3lzdGVtLXVpLCBzYW5zLXNlcmlmJywgbGluZUhlaWdodDogJzEuNCcgfX0+XG4gICAgICA8aDE+V2VsY29tZSB0byBSZW1peDwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9J3AtNic+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9yZW1peC5ydW4vdHV0b3JpYWxzL2Jsb2cnXG4gICAgICAgICAgICByZWw9J25vcmVmZXJyZXInXG4gICAgICAgICAgPjwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgRm9ybSwgTGluaywgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBNZXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgZ2V0RmlsbXMsIEZpbG0gfSBmcm9tICd+L2FwaS9maWxtcyc7XG5pbXBvcnQgQ1RBIGZyb20gJ34vQ29tcG9uZW50cy9jdGEnO1xuaW1wb3J0IEhlcm8gZnJvbSAnfi9Db21wb25lbnRzL2hlcm8nO1xuaW1wb3J0IEluZm8gZnJvbSAnfi9Db21wb25lbnRzL2luZm8nO1xuaW1wb3J0IGluZm9JbWcgZnJvbSAnLi4vaW1hZ2VzL2Fib3V0LXBhLmpwZyc7XG5pbXBvcnQgeyBnZXRDbGllbnQsIHVybEZvciB9IGZyb20gJ34vbGliL3Nhbml0eS9nZXRDbGllbnQnO1xuaW1wb3J0IHtcbiAgUG9ydGFibGVUZXh0LFxuICBQb3J0YWJsZVRleHRUeXBlQ29tcG9uZW50LFxuICBQb3J0YWJsZVRleHRDb21wb25lbnRzUHJvdmlkZXIsXG59IGZyb20gJ0Bwb3J0YWJsZXRleHQvcmVhY3QnO1xuXG4vLyBsb2FkZXIoKSBtdXN0IGJlIGFzeW5jIVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcigpIHtcbiAgY29uc3QgbmV3c1Bvc3RzID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJuZXdzXCJdeyBfaWQsIHRpdGxlLCBzbHVnLCBcImZlYXR1cmVJbWFnZVwiOiBmZWF0dXJlLmFzc2V0LT51cmxcbiAgIH1gXG4gICk7XG4gIGNvbnN0IGFib3V0VGV4dCA9IGF3YWl0IGdldENsaWVudCgpLmZldGNoKFxuICAgIGAqW190eXBlID09IFwiYWJvdXRcIl17IF9pZCwgdGl0bGUsIG92ZXJ2aWV3LCBcIm92ZXJ2aWV3VGV4dFwiOiBvdmVydmlld1swXS5jaGlsZHJlbiwgXG4gICB9YFxuICApO1xuICByZXR1cm4geyBuZXdzUG9zdHMsIGFib3V0VGV4dCB9O1xufVxuXG4vLyBTZXJ2ZXIgU2lkZVxuLy9leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuLy9jb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbi8vY29uc3QgdGl0bGUgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgndGl0bGUnKTtcbi8vcmV0dXJuIGdldEZpbG1zKHRpdGxlKTtcbi8vfTtcblxuZXhwb3J0IGNvbnN0IG1ldGEgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdQYWRlbCBBZnJpY2EgfCBUaGUgTnVtYmVyIDEgQWZyaWNhbiBQYWRlbCBDb21wYW55JyxcbiAgICBkZXNjcmlwdGlvbjogJ1BhZGVsIEFmcmljYSBob21lIHBhZ2UnLFxuICAgIGtleXdvcmRzOiAncGFkZWwsIGFmcmljYSwgc3BvcnQnLFxuICB9O1xufTtcblxuLy8gQ2xpZW50IFNpZGVcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgbmV3c1Bvc3RzLCBhYm91dFRleHQgfSA9IHVzZUxvYWRlckRhdGEoKTtcblxuICBjb25zdCBteVBvcnRhYmxlVGV4dENvbXBvbmVudHMgPSB7XG4gICAgdHlwZXM6IHtcbiAgICAgIGltYWdlOiAodmFsdWU6IGFueSkgPT4gKFxuICAgICAgICA8aW1nIHNyYz17dmFsdWUuYXNzZXR9IGtleT17dmFsdWUuX2lkfSBjbGFzc05hbWU9e3ZhbHVlLmFzc2V0fT48L2ltZz5cbiAgICAgICksXG4gICAgfSxcbiAgfTtcbiAgLy9jb25zdCBmaWxtcyA9IHVzZUxvYWRlckRhdGE8RmlsbVtdPigpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVyb1xuICAgICAgICBoZWFkaW5nPSdQYWRlbCBoYXMgdGFrZW4gRXVyb3BlIGJ5IHN0b3JtLiBOb3cgaXRcdTIwMTlzIHRpbWUgdG8gYnJpbmcgaXQgdG8gQWZyaWNhLlxuICAgICAgICAnXG4gICAgICAgIGJvZHk9J1VzaW5nIG91ciBleHRlbnNpdmUga25vd2xlZGdlIG9mIEFmcmljYSBhbmQgYnVzaW5lc3MgZGV2ZWxvcG1lbnQsIHdlIGFpbSB0byBwcm92aWRlIFBhZGVsLCBhcyBhIHNwb3J0IGFuZCBhIGNvbW11bml0eSBlbmFibGVyLCB0byBHaGFuYSwgS2VueWEsIE5pZ2VyaWEgYW5kIG90aGVyIFN1YiBTYWhhcmFuIGNvdW50cmllcy5cbiAgICAgICAgJ1xuICAgICAgICBidXR0b24xVGV4dD0nTGVhcm4gTW9yZSdcbiAgICAgICAgYnV0dG9uMVRvPScjYWJvdXQnXG4gICAgICAgIGJ1dHRvbjJUZXh0PSdXYW50IHRvIFBhcnRuZXI/J1xuICAgICAgICBidXR0b24yVG89JyNhYm91dCdcbiAgICAgICAgaW1nU3JjPScnXG4gICAgICAvPlxuXG4gICAgICA8SW5mb1xuICAgICAgICB0aXRsZT0nQWJvdXQgVXMnXG4gICAgICAgIGJvZHk9J0ludGVnZXIgYSBlcm9zIHZlbmVuYXRpcywgaW50ZXJkdW0gbG9yZW0gZXUsIGxvYm9ydGlzIGxpZ3VsYS4gQ3VyYWJpdHVyIHZlbCBpcHN1bSBub24gdGVsbHVzIGNvbnZhbGxpcyBlbGVtZW50dW0uIFZpdmFtdXMgcHVsdmluYXIgcmlzdXMgbmVjIHNhcGllbiBjb21tb2RvIGJpYmVuZHVtJ1xuICAgICAgICBmbG93PSdsZWZ0J1xuICAgICAgICBpbWFnZT0nIydcbiAgICAgIC8+XG4gICAgICA8Q1RBXG4gICAgICAgIGhlYWRpbmc9J0FyZSB5b3UgaW50ZXJlc3RlZCBpbiBwYXJ0bmVyaW5nIHdpdGggdGhlIE51bWJlciAxIEFmcmljYW4gUGFkZWwgY29tcGFueT8nXG4gICAgICAgIGJvZHk9J0ludGVnZXIgYSBlcm9zIHZlbmVuYXRpcywgaW50ZXJkdW0gbG9yZW0gZXUsIGxvYm9ydGlzIGxpZ3VsYS4gQ3VyYWJpdHVyIHZlbCBpcHN1bSBub24gdGVsbHVzIGNvbnZhbGxpcyBlbGVtZW50dW0uIFZpdmFtdXMgcHVsdmluYXIgcmlzdXMgbmVjIHNhcGllbiBjb21tb2RvIGJpYmVuZHVtJ1xuICAgICAgICBidXR0b25UZXh0PSdDbGljayBoZXJlJ1xuICAgICAgICBidXR0b25Ubz0nI2Fib3V0J1xuICAgICAgLz5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdbY3RhXSAgcC12dy0zMiBwYi0wICBzcGFjZS14LTEwIGZsZXggJz5cbiAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9J3ctMS80Jz5cbiAgICAgICAgICA8aW1nIHNyYz17aW5mb0ltZ30gLz5cbiAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDxibG9ja3F1b3RlIGNsYXNzTmFtZT0ndy0zLzQgc3BhY2UteS00ICAnPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtM3hsIGZvbnQtYm9sZCc+XG4gICAgICAgICAgICBcdTIwMUMgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXG4gICAgICAgICAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlx1MjAxRFxuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICB7LyogVGhlIDIgUG9ydGFibGVUZXh0IGluc3RhbmNlcyBiZWxvdyB3aWxsIHJlY2VpdmUgdGhlIHNhbWUgY3VzdG9tIGNvbXBvbmVudHMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4tY29udGVudCBzcGFjZS15LTInPlxuICAgICAgICAgICAge2Fib3V0VGV4dFswXS5vdmVydmlldz8ubGVuZ3RoID4gMFxuICAgICAgICAgICAgICA/IGFib3V0VGV4dFswXS5vdmVydmlldy5tYXAoKHBhcmFncmFwaHM6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFBvcnRhYmxlVGV4dFxuICAgICAgICAgICAgICAgICAgICBrZXk9e3BhcmFncmFwaHMuX2lkfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17W3BhcmFncmFwaHNdfVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXtteVBvcnRhYmxlVGV4dENvbXBvbmVudHN9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9ibG9ja3F1b3RlPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvblxuICAgICAgICBpZD0nbmV3cydcbiAgICAgICAgY2xhc3NOYW1lPSdbYWJvdXRdICBwLXZ3LTMyIGJnLXdoaXRlIHRleHQtY2VudGVyIHNwYWNlLXktdnctNi1taW5AeGwgJ1xuICAgICAgPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTR4bCBmb250LWJvbGQnPk5ld3M8L2gyPlxuXG4gICAgICAgIHsvKlxuICAgICAgICAvL1NFQVJDSCBGSUxURVJcbiAgICAgICAgPEZvcm0gY2xhc3NOYW1lPSdweS01Jz5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgbmFtZT0ndGl0bGUnXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdlbnRlciBzb21ldGhpbmcnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYm9yZGVyLTIgcm91bmRlZCBweS0yIHB4LTInXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tODAwIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWQgbXgtMidcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTZWFyY2h7JyAnfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICovfVxuXG4gICAgICAgIHsvKlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNiAnPlxuICAgICAgICAgIHtmaWxtcy5zbGljZSgwLCA0KS5tYXAoKGZpbG0pID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdob3ZlcjpzaGFkb3ctMnhsIGhvdmVyOnNjYWxlLTEwNSBob3Zlcjpmb250LWJvbGQgY3Vyc29yLXBvaW50ZXIgIHAtNCAgc3BhY2UteS12dy00LW1heEBtZCc+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2FzcGVjdC1zcXVhcmUgcm91bmRlZC1tZCAgJ1xuICAgICAgICAgICAgICAgIHNyYz17ZmlsbS5pbWFnZX1cbiAgICAgICAgICAgICAgICBhbHQ9e2ZpbG0udGl0bGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXY+e2ZpbG0udGl0bGV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX17JyAnfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAqL31cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNiAnPlxuICAgICAgICAgIHtuZXdzUG9zdHM/Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gbmV3c1Bvc3RzLnNsaWNlKDAsIDYpLm1hcCgobmV3czogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtuZXdzLl9pZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naG92ZXI6c2hhZG93LTJ4bCBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6Zm9udC1ib2xkIGN1cnNvci1wb2ludGVyICBwLTQgIHNwYWNlLXktdnctNC1tYXhAbWQnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihuZXdzLmZlYXR1cmVJbWFnZSkud2lkdGgoNTAwKS51cmwoKX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtuZXdzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89e25ld3Muc2x1Zy5jdXJyZW50fT57bmV3cy50aXRsZX0gPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgaWQ9J2NvbnRhY3QnXG4gICAgICAgIGNsYXNzTmFtZT0nW2NvbnRhY3RdICBiZy1zbGF0ZS05MDAgICBzcGFjZS14LTEwICAgcC12dy0zMiAgc3BhY2UteS0xMCBtZDpzcGFjZS14LTEwIGZsZXggZmxleC1jb2wgIHRleHQtd2hpdGUgJ1xuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nICBtLWF1dG8gIHRleHQtY2VudGVyIG0gc3BhY2UteS12dy02LW1pbkB4bCBtZDp3LTEvMiAnPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1iciBmcm9tLWdyZWVuLTMwMCAgdmlhLWdyZWVuLTUwMCB0by15ZWxsb3ctNDAwICc+XG4gICAgICAgICAgICBDb250YWN0IFVzXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2Jhc2UnPlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXG4gICAgICAgICAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHNwYWNlLXgtdnctNC1taW5AeGwgIG1kOmlubGluZS1mbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNsYXRlLTkwMCc+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncHktdnctNC1taW5AeGwtbWF4QDJ4bCBweC12dy00LW1pbkB4bC1tYXhAMnhsIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwICAgdG8teWVsbG93LTQwMCByb3VuZGVkLXhsIGZvbnQtYm9sZCBob3ZlcjpiZy1ncmFkaWVudC10by10bCBob3ZlcjpzY2FsZS0xMDUgc2hhZG93LTJ4bCc+XG4gICAgICAgICAgICAgIEVtYWlsIFVzXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPScgcHktdnctNC1taW5AeGwtbWF4QDJ4bCBweC12dy00LW1pbkB4bC1tYXhAMnhsIGJnLWdyYWRpZW50LXRvLWJyIGZyb20td2hpdGUgICB0by1ncmF5LTIwMCByb3VuZGVkLXhsIGZvbnQtYm9sZCBob3ZlcjpiZy1ncmFkaWVudC10by10bCBob3ZlcjpzY2FsZS0xMDUgc2hhZG93LTJ4bCc+XG4gICAgICAgICAgICAgIEpvaW4gTWFpbGluZyBMaXN0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4JztcblxuaW50ZXJmYWNlIENUQUNvbnRlbnQge1xuICBoZWFkaW5nOiBzdHJpbmc7XG4gIGJvZHk6IHN0cmluZztcbiAgYnV0dG9uVGV4dDogc3RyaW5nO1xuICBidXR0b25Ubzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDVEEocHJvcHM6IENUQUNvbnRlbnQpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgaWQ9J3BhcnRuZXJzJ1xuICAgICAgY2xhc3NOYW1lPSdbY3RhXSBwLTIwIG1kOm14LTIwIGJnLXNsYXRlLTkwMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGFsaWduLW1pZGRsZSByb3VuZGVkLW1kIHNoYWRvdy0yeGwgdGV4dC13aGl0ZSdcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nICBtLWF1dG8gIHRleHQtY2VudGVyICBzcGFjZS15LXZ3LTYtbWluQHhsIG1kOnctMy80ICc+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1iciBmcm9tLWdyZWVuLTMwMCAgdmlhLWdyZWVuLTUwMCB0by15ZWxsb3ctNDAwICc+XG4gICAgICAgICAge3Byb3BzLmhlYWRpbmd9XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nYmFzZSc+e3Byb3BzLmJvZHl9PC9wPlxuICAgICAgICA8TGluayB0bz17cHJvcHMuYnV0dG9uVG99IGNsYXNzTmFtZT0nIGlubGluZS1mbGV4ICc+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3B5LTQgcHgtNiBiZy1ncmFkaWVudC10by1iciBmcm9tLWdyZWVuLTMwMCAgdmlhLWdyZWVuLTUwMCB0by15ZWxsb3ctNDAwIHJvdW5kZWQteGwgdGV4dC1ibGFjayBmb250LWJvbGQgaG92ZXI6YmctZ3JhZGllbnQtdG8tdGwgaG92ZXI6c2NhbGUtMTA1IHNoYWRvdy0yeGwnPlxuICAgICAgICAgICAge3Byb3BzLmJ1dHRvblRleHR9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IGhlcm9JbWcgZnJvbSAnLi4vaW1hZ2VzL3BhZGVsLWhlcm8uanBnJztcblxuaW50ZXJmYWNlIEhlcm9Db250ZW50IHtcbiAgaGVhZGluZzogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIGJ1dHRvbjFUZXh0OiBzdHJpbmc7XG4gIGJ1dHRvbjFUbzogc3RyaW5nO1xuICBidXR0b24yVGV4dDogc3RyaW5nO1xuICBidXR0b24yVG86IHN0cmluZztcbiAgaW1nU3JjOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm8ocHJvcHM6IEhlcm9Db250ZW50KSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIGNsYXNzTmFtZT0nW2hlcm9dIG1pbi1oLXNjcmVlbiBweS02ICAgcHgtNiBtZDpweC0yNCBmbGV4ICBmbGV4LWNvbCBtZDpmbGV4LXJvdyBhbGlnbi1taWRkbGUganVzdGlmeS1iZXR3ZWVuICBiZy1jb3ZlciAgICAgbWQ6c3BhY2UteC0xMlx0ICdcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDE1LCAyMywgNDIpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjMpKSx1cmwoJyR7aGVyb0ltZ30nKWAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgbWQ6dy0zLzUgbXktYXV0byBzcGFjZS15LXZ3LTItbWluQHhsIHB5LTggICc+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlJz57cHJvcHMuaGVhZGluZ308L2gxPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1iYXNlIGZvbnQtbGlnaHQgdGV4dC1zbGF0ZS0zMDAnPntwcm9wcy5ib2R5fTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBzcGFjZS14LXZ3LTQtbWluQHhsICBtZDppbmxpbmUtZmxleCBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdweS12dy00LW1pbkB4bC1tYXhAMnhsIHB4LXZ3LTQtbWluQHhsLW1heEAyeGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgICB0by15ZWxsb3ctNDAwIHJvdW5kZWQteGwgZm9udC1ib2xkIGhvdmVyOmJnLWdyYWRpZW50LXRvLXRsIGhvdmVyOnNjYWxlLTEwNSBzaGFkb3ctMnhsJz5cbiAgICAgICAgICAgIHtwcm9wcy5idXR0b24xVGV4dH1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nIHB5LXZ3LTQtbWluQHhsLW1heEAyeGwgcHgtdnctNC1taW5AeGwtbWF4QDJ4bCBiZy1ncmFkaWVudC10by1iciBmcm9tLXdoaXRlICAgdG8tZ3JheS0yMDAgcm91bmRlZC14bCBmb250LWJvbGQgaG92ZXI6YmctZ3JhZGllbnQtdG8tdGwgaG92ZXI6c2NhbGUtMTA1IHNoYWRvdy0yeGwnPlxuICAgICAgICAgICAge3Byb3BzLmJ1dHRvbjJUZXh0fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9J3ctZnVsbCBtZDp3LTEvMiAgbXktYXV0byBzcGFjZS15LXZ3LTQtbWluQHhsIGJnLXdoaXRlICBiZy1vcGFjaXR5LTUwIGJhY2tkcm9wLWJsdXItbGcgc2hhZG93LTJ4bFx0IHAtNiByb3VuZGVkLWxnICBib3JkZXItc2xhdGUtOTAwIGJvcmRlci0yICBoLWZpdCAnPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LWxnJz5Kb2luIHRoZSBNYWlsaW5nIExpc3Q8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi02Jz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnIGNsYXNzTmFtZT0nYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtICc+XG4gICAgICAgICAgICBZb3VyIE5hbWVcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIGlkPSduYW1lJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNSAwICBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAnXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nSm9lIEJsb2dncydcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi02Jz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnIGNsYXNzTmFtZT0nYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtICc+XG4gICAgICAgICAgICBZb3VyIGVtYWlsXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xuICAgICAgICAgICAgaWQ9J2VtYWlsJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNSBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwICBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMCdcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSduYW1lQGZsb3diaXRlLmNvbSdcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi02Jz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnIGNsYXNzTmFtZT0nYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtICc+XG4gICAgICAgICAgICBZb3VyIENvbXBhbnlcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIGlkPSdjb21wYW55J1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1zbSByb3VuZGVkLWxnICBibG9jayB3LWZ1bGwgcC0yLjUgICBkYXJrOnRleHQtd2hpdGUgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwJ1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0FjbWUgSW5jJ1xuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgIGNsYXNzTmFtZT0nIHB5LTQgcHgtNiBiZy1ncmFkaWVudC10by1iciBmcm9tLWdyZWVuLTMwMCB0by15ZWxsb3ctNDAwIHJvdW5kZWQteGwgZm9udC1ib2xkIGhvdmVyOmJnLWdyYWRpZW50LXRvLXRsIGhvdmVyOnNjYWxlLTEwNSBzaGFkb3ctMnhsJ1xuICAgICAgICA+XG4gICAgICAgICAgU3VibWl0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgaW5mb0ltZyBmcm9tICcuLi9pbWFnZXMvYWJvdXQtcGEuanBnJztcblxuaW50ZXJmYWNlIEluZm9Db250ZW50IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgYm9keTogc3RyaW5nO1xuICBmbG93OiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZm8ocHJvcHM6IEluZm9Db250ZW50KSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIGlkPSdhYm91dCdcbiAgICAgIGNsYXNzTmFtZT17YFtjdGFdICBwLXZ3LTMyICBzcGFjZS15LTEwIG1kOnNwYWNlLXgtMTAgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyAke1xuICAgICAgICBwcm9wcy5mbG93ID09ICdsZWZ0JyA/ICcnIDogJyBtZDpmbGV4LXJvdy1yZXZlcnNlIHNwYWNlLXgtcmV2ZXJzZSdcbiAgICAgIH0gYH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6dy0xLzIgc3BhY2UteS00ICAnPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTR4bCBmb250LWJvbGQnPntwcm9wcy50aXRsZX08L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2Jhc2UnPntwcm9wcy5ib2R5fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9J21kOnctMS8yIGJnLXNsYXRlLTMwMCc+XG4gICAgICAgIDxpbWcgc3JjPXtpbmZvSW1nfSAvPlxuICAgICAgPC9maWd1cmU+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
