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

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-AFACRODL.css";

// app/images/logo-light.svg
var logo_light_default = "/build/_assets/logo-light-W72WDGBG.svg";

// route-module:/Users/markmulvaney/Local-Sites/padel-africa/padel-web/app/root.tsx
var meta = () => {
  return { title: "Padel Africa" };
};
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
function Nav() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "bg-slate-900 md:bg-opacity-0 border-gray-200 px-4 sm:px-6 py-4 text-black md:fixed w-full z-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container flex flex-wrap justify-between items-center mx-auto"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "flex"
  }, /* @__PURE__ */ React.createElement("img", {
    src: logo_light_default,
    className: "h-16"
  })), /* @__PURE__ */ React.createElement("button", {
    "data-collapse-toggle": "mobile-menu",
    type: "button",
    className: "inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    "aria-controls": "mobile-menu-2",
    "aria-expanded": "false"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), /* @__PURE__ */ React.createElement("svg", {
    className: "w-6 h-6",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    "fill-rule": "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    "clip-rule": "evenodd"
  })), /* @__PURE__ */ React.createElement("svg", {
    className: "hidden w-6 h-6",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    "fill-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "clip-rule": "evenodd"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "hidden w-full md:block md:w-auto",
    id: "mobile-menu"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "flex flex-col  md:flex-row md:space-x-8   text-white"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "#about",
    className: "block py-2 pr-4 pl-3  border-b border-gray-100  md:border-0  md:p-0  "
  }, "About")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "#partners",
    className: "block py-2 pr-4 pl-3  border-b border-gray-100  md:border-0  md:p-0  "
  }, "Partners")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "#contact",
    className: "block py-2 pr-4 pl-3  border-b border-gray-100  md:border-0  md:p-0  "
  }, "Investors")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "#contact",
    className: "block py-2 pr-4 pl-3  border-b border-gray-100  md:border-0  md:p-0  "
  }, "Contact")))))));
}
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
var sanityClient = new import_picosanity.default(config);
var previewClient = new import_picosanity.default(__spreadProps(__spreadValues({}, config), {
  useCdn: false,
  token: process.env.SANITY_API_TOKEN ?? ``
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
    className: "[hero] min-h-screen   px-6 md:px-24 flex  flex-col md:flex-row align-middle justify-between  bg-cover     md:space-x-12	 ",
    style: {
      backgroundImage: `linear-gradient(to right, rgb(15, 23, 42), rgba(255, 255, 255, 0.23)),url('${padel_hero_default}')`
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full md:w-3/5 my-auto space-y-vw-2-min@xl "
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-8xl font-bold text-white"
  }, props.heading), /* @__PURE__ */ React.createElement("p", {
    className: "text-base font-light text-slate-300"
  }, props.body), /* @__PURE__ */ React.createElement("div", {
    className: " md:space-x-vw-4-min@xl  md:inline-flex justify-between"
  }, /* @__PURE__ */ React.createElement("button", {
    className: " py-4 px-6 bg-gradient-to-br from-green-300   to-yellow-400 rounded-xl font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl"
  }, props.button1Text), /* @__PURE__ */ React.createElement("button", {
    className: " py-4 px-6 bg-gradient-to-br from-white   to-gray-200 rounded-xl font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl"
  }, props.button2Text))), /* @__PURE__ */ React.createElement("form", {
    className: "w-full md:w-1/2  my-auto space-y-vw-4-min@xl bg-white bg-opacity-50 backdrop-blur-lg shadow-2xl	 p-6 rounded-lg  border-slate-900 border-2  h-fit"
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
async function loader2() {
  const newsPosts = await getClient().fetch(`*[_type == "news"]{ _id, title, slug, "featureImage": feature.asset->url
   }`);
  const aboutText = await getClient().fetch(`*[_type == "about"]{ _id, title, overview, "overviewText": overview[0].children, "featureImage": feature.asset->url
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
  const { newsPosts, aboutText } = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Hero, {
    heading: "Let the game begin",
    body: "Integer a eros venenatis, interdum lorem eu, lobortis ligula. Curabitur vel ipsum non tellus convallis elementum. Vivamus pulvinar risus nec sapien commodo bibendum",
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
    heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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
  }, "\u201C Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\u201D"), /* @__PURE__ */ React.createElement("p", {
    className: "base"
  }, "The Author"))), /* @__PURE__ */ React.createElement("section", {
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
    className: "aspect-square rounded-md  ",
    src: news.featureImage,
    alt: news.title
  }), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: news.slug.current
  }, news.title, " "))) : null)), /* @__PURE__ */ React.createElement("section", {
    id: "contact",
    className: "[contact]  bg-slate-900  p-vw-32 space-x-10 flex flex-col text-white "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "  m-auto  text-center m space-y-vw-6-min@xl w-1/2 "
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-300  via-green-500 to-yellow-400 "
  }, "Contact Us"), /* @__PURE__ */ React.createElement("p", {
    className: "base"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), /* @__PURE__ */ React.createElement("div", {
    className: "md:space-x-vw-4-min@xl"
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "#",
    className: " inline-flex "
  }, /* @__PURE__ */ React.createElement("button", {
    className: "py-4 px-6 bg-gradient-to-br from-green-300  via-green-500 to-yellow-400 rounded-xl text-black font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl"
  }, "Email Us")), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "#",
    className: " inline-flex "
  }, /* @__PURE__ */ React.createElement("button", {
    className: " py-4 px-6 bg-gradient-to-br  from-white text-slate-900  to-gray-200 rounded-xl font-bold hover:bg-gradient-to-tl hover:scale-105 shadow-2xl"
  }, "Join Mailing List"))))));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm9vdC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzLyRzbHVnLnRzeCIsICIuLi9hcHAvbGliL3Nhbml0eS9nZXRDbGllbnQudHMiLCAiLi4vYXBwL2xpYi9zYW5pdHkvY29uZmlnLnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy9hYm91dC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvQ29tcG9uZW50cy9jdGEudHN4IiwgIi4uL2FwcC9Db21wb25lbnRzL2hlcm8udHN4IiwgIi4uL2FwcC9Db21wb25lbnRzL2luZm8udHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvbWFya211bHZhbmV5L0xvY2FsLVNpdGVzL3BhZGVsLWFmcmljYS9wYWRlbC13ZWIvYXBwL3JvdXRlcy8kc2x1Zy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL21hcmttdWx2YW5leS9Mb2NhbC1TaXRlcy9wYWRlbC1hZnJpY2EvcGFkZWwtd2ViL2FwcC9yb3V0ZXMvYWJvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9tYXJrbXVsdmFuZXkvTG9jYWwtU2l0ZXMvcGFkZWwtYWZyaWNhL3BhZGVsLXdlYi9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvJHNsdWdcIjoge1xuICAgIGlkOiBcInJvdXRlcy8kc2x1Z1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIjpzbHVnXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvYWJvdXRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9hYm91dFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImFib3V0XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUzXG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGRvdGVudi5jb25maWcoKTtcblxuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKCc8IURPQ1RZUEUgaHRtbD4nICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGluayxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy90YWlsd2luZC5jc3MnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi9pbWFnZXMvbG9nby5zdmcnO1xuaW1wb3J0IGxvZ29EYXJrIGZyb20gJy4vaW1hZ2VzL2xvZ28tZGFyay5zdmcnO1xuaW1wb3J0IGxvZ29MaWdodCBmcm9tICcuL2ltYWdlcy9sb2dvLWxpZ2h0LnN2Zyc7XG5cbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogJ1BhZGVsIEFmcmljYScgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOYXYoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPSdiZy1zbGF0ZS05MDAgbWQ6Ymctb3BhY2l0eS0wIGJvcmRlci1ncmF5LTIwMCBweC00IHNtOnB4LTYgcHktNCB0ZXh0LWJsYWNrIG1kOmZpeGVkIHctZnVsbCB6LTEwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG14LWF1dG8nPlxuICAgICAgICAgIDxhIGhyZWY9JyMnIGNsYXNzTmFtZT0nZmxleCc+XG4gICAgICAgICAgICA8aW1nIHNyYz17bG9nb0xpZ2h0fSBjbGFzc05hbWU9J2gtMTYnIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGRhdGEtY29sbGFwc2UtdG9nZ2xlPSdtb2JpbGUtbWVudSdcbiAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHAtMiBtbC0zIHRleHQtc20gcm91bmRlZC1sZyBtZDpoaWRkZW4gaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyYXktMjAwIGRhcms6dGV4dC1ncmF5LTQwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6Zm9jdXM6cmluZy1ncmF5LTYwMCdcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9J21vYmlsZS1tZW51LTInXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPSdmYWxzZSdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPk9wZW4gbWFpbiBtZW51PC9zcGFuPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNiBoLTYnXG4gICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDIwIDIwJ1xuICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbC1ydWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgIGQ9J00zIDVhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6TTMgMTBhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6TTMgMTVhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6J1xuICAgICAgICAgICAgICAgIGNsaXAtcnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2hpZGRlbiB3LTYgaC02J1xuICAgICAgICAgICAgICBmaWxsPSdjdXJyZW50Q29sb3InXG4gICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyMCAyMCdcbiAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGwtcnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICBkPSdNNC4yOTMgNC4yOTNhMSAxIDAgMDExLjQxNCAwTDEwIDguNTg2bDQuMjkzLTQuMjkzYTEgMSAwIDExMS40MTQgMS40MTRMMTEuNDE0IDEwbDQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0IDEuNDE0TDEwIDExLjQxNGwtNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQtMS40MTRMOC41ODYgMTAgNC4yOTMgNS43MDdhMSAxIDAgMDEwLTEuNDE0eidcbiAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGlkZGVuIHctZnVsbCBtZDpibG9jayBtZDp3LWF1dG8nIGlkPSdtb2JpbGUtbWVudSc+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sICBtZDpmbGV4LXJvdyBtZDpzcGFjZS14LTggICB0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICB0bz0nI2Fib3V0J1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdibG9jayBweS0yIHByLTQgcGwtMyAgYm9yZGVyLWIgYm9yZGVyLWdyYXktMTAwICBtZDpib3JkZXItMCAgbWQ6cC0wICAnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgdG89JyNwYXJ0bmVycydcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmxvY2sgcHktMiBwci00IHBsLTMgIGJvcmRlci1iIGJvcmRlci1ncmF5LTEwMCAgbWQ6Ym9yZGVyLTAgIG1kOnAtMCAgJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFBhcnRuZXJzXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIHRvPScjY29udGFjdCdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmxvY2sgcHktMiBwci00IHBsLTMgIGJvcmRlci1iIGJvcmRlci1ncmF5LTEwMCAgbWQ6Ym9yZGVyLTAgIG1kOnAtMCAgJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEludmVzdG9yc1xuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICB0bz0nI2NvbnRhY3QnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Jsb2NrIHB5LTIgcHItNCBwbC0zICBib3JkZXItYiBib3JkZXItZ3JheS0xMDAgIG1kOmJvcmRlci0wICBtZDpwLTAgICdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT0ncC00ICBzbTpwLTggYmctc2xhdGUtOTAwJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZDpmbGV4IG1kOmp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi02IG1kOm1iLTAnPlxuICAgICAgICAgIDxhIGhyZWY9JyMnIHRhcmdldD0nX2JsYW5rJyBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvTGlnaHR9IGNsYXNzTmFtZT0nbXItNCBoLTIwJyBhbHQ9J0Zsb3dCaXRlIExvZ28nIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTIgZ2FwLTggc206Z2FwLTYgc206Z3JpZC1jb2xzLTMnPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdtYi02IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIHVwcGVyY2FzZSBkYXJrOnRleHQtd2hpdGUnPlxuICAgICAgICAgICAgICBSZXNvdXJjZXNcbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J21iLTQnPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2Zsb3diaXRlLmNvbSdcbiAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNjAwIGhvdmVyOnVuZGVybGluZSBkYXJrOnRleHQtZ3JheS00MDAnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgSW52ZXN0b3JzXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9JyMnXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgICAgIHJlbD0nbm9mb2xsb3cnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtZ3JheS02MDAgaG92ZXI6dW5kZXJsaW5lIGRhcms6dGV4dC1ncmF5LTQwMCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBQYXJ0bmVyc1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J21iLTYgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgdXBwZXJjYXNlIGRhcms6dGV4dC13aGl0ZSc+XG4gICAgICAgICAgICAgIEZvbGxvdyB1c1xuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbWItNCc+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9JyMnXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTYwMCBob3Zlcjp1bmRlcmxpbmUgZGFyazp0ZXh0LWdyYXktNDAwJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEZhY2Vib29rXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9JyMnXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTYwMCBob3Zlcjp1bmRlcmxpbmUgZGFyazp0ZXh0LWdyYXktNDAwJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIE5ld3NsZXR0ZXJcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdtYi02IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIHVwcGVyY2FzZSBkYXJrOnRleHQtd2hpdGUnPlxuICAgICAgICAgICAgICBMZWdhbFxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nbWItNCc+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9JyMnXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTYwMCBob3Zlcjp1bmRlcmxpbmUgZGFyazp0ZXh0LWdyYXktNDAwJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFByaXZhY3kgUG9saWN5XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9JyMnXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTYwMCBob3Zlcjp1bmRlcmxpbmUgZGFyazp0ZXh0LWdyYXktNDAwJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFRlcm1zICZhbXA7IENvbmRpdGlvbnNcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGhyIGNsYXNzTmFtZT0nbXktNiBib3JkZXItZ3JheS0yMDAgc206bXgtYXV0byBkYXJrOmJvcmRlci1ncmF5LTcwMCBsZzpteS04JyAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NtOmZsZXggc206aXRlbXMtY2VudGVyIHNtOmp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1zbSB0ZXh0LWdyYXktNTAwIHNtOnRleHQtY2VudGVyIGRhcms6dGV4dC1ncmF5LTQwMCc+XG4gICAgICAgICAgXHUwMEE5IDIwMjJ7JyAnfVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPSdodHRwczovL2Zsb3diaXRlLmNvbSdcbiAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdob3Zlcjp1bmRlcmxpbmUnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUGFkZWwgQWZyaWNhXHUyMTIyXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBtdC00IHNwYWNlLXgtNiBzbTpqdXN0aWZ5LWNlbnRlciBzbTptdC0wJz5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj0nIydcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy01IGgtNSdcbiAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xuICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgICAgIGQ9J00yMiAxMmMwLTUuNTIzLTQuNDc3LTEwLTEwLTEwUzIgNi40NzcgMiAxMmMwIDQuOTkxIDMuNjU3IDkuMTI4IDguNDM4IDkuODc4di02Ljk4N2gtMi41NFYxMmgyLjU0VjkuNzk3YzAtMi41MDYgMS40OTItMy44OSAzLjc3Ny0zLjg5IDEuMDk0IDAgMi4yMzguMTk1IDIuMjM4LjE5NXYyLjQ2aC0xLjI2Yy0xLjI0MyAwLTEuNjMuNzcxLTEuNjMgMS41NjJWMTJoMi43NzNsLS40NDMgMi44OWgtMi4zM3Y2Ljk4OEMxOC4zNDMgMjEuMTI4IDIyIDE2Ljk5MSAyMiAxMnonXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9J2V2ZW5vZGQnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9JyMnXG4gICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTkwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNSBoLTUnXG4gICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgICBkPSdNMTIuMzE1IDJjMi40MyAwIDIuNzg0LjAxMyAzLjgwOC4wNiAxLjA2NC4wNDkgMS43OTEuMjE4IDIuNDI3LjQ2NWE0LjkwMiA0LjkwMiAwIDAxMS43NzIgMS4xNTMgNC45MDIgNC45MDIgMCAwMTEuMTUzIDEuNzcyYy4yNDcuNjM2LjQxNiAxLjM2My40NjUgMi40MjcuMDQ4IDEuMDY3LjA2IDEuNDA3LjA2IDQuMTIzdi4wOGMwIDIuNjQzLS4wMTIgMi45ODctLjA2IDQuMDQzLS4wNDkgMS4wNjQtLjIxOCAxLjc5MS0uNDY1IDIuNDI3YTQuOTAyIDQuOTAyIDAgMDEtMS4xNTMgMS43NzIgNC45MDIgNC45MDIgMCAwMS0xLjc3MiAxLjE1M2MtLjYzNi4yNDctMS4zNjMuNDE2LTIuNDI3LjQ2NS0xLjA2Ny4wNDgtMS40MDcuMDYtNC4xMjMuMDZoLS4wOGMtMi42NDMgMC0yLjk4Ny0uMDEyLTQuMDQzLS4wNi0xLjA2NC0uMDQ5LTEuNzkxLS4yMTgtMi40MjctLjQ2NWE0LjkwMiA0LjkwMiAwIDAxLTEuNzcyLTEuMTUzIDQuOTAyIDQuOTAyIDAgMDEtMS4xNTMtMS43NzJjLS4yNDctLjYzNi0uNDE2LTEuMzYzLS40NjUtMi40MjctLjA0Ny0xLjAyNC0uMDYtMS4zNzktLjA2LTMuODA4di0uNjNjMC0yLjQzLjAxMy0yLjc4NC4wNi0zLjgwOC4wNDktMS4wNjQuMjE4LTEuNzkxLjQ2NS0yLjQyN2E0LjkwMiA0LjkwMiAwIDAxMS4xNTMtMS43NzJBNC45MDIgNC45MDIgMCAwMTUuNDUgMi41MjVjLjYzNi0uMjQ3IDEuMzYzLS40MTYgMi40MjctLjQ2NUM4LjkwMSAyLjAxMyA5LjI1NiAyIDExLjY4NSAyaC42M3ptLS4wODEgMS44MDJoLS40NjhjLTIuNDU2IDAtMi43ODQuMDExLTMuODA3LjA1OC0uOTc1LjA0NS0xLjUwNC4yMDctMS44NTcuMzQ0LS40NjcuMTgyLS44LjM5OC0xLjE1Ljc0OC0uMzUuMzUtLjU2Ni42ODMtLjc0OCAxLjE1LS4xMzcuMzUzLS4zLjg4Mi0uMzQ0IDEuODU3LS4wNDcgMS4wMjMtLjA1OCAxLjM1MS0uMDU4IDMuODA3di40NjhjMCAyLjQ1Ni4wMTEgMi43ODQuMDU4IDMuODA3LjA0NS45NzUuMjA3IDEuNTA0LjM0NCAxLjg1Ny4xODIuNDY2LjM5OS44Ljc0OCAxLjE1LjM1LjM1LjY4My41NjYgMS4xNS43NDguMzUzLjEzNy44ODIuMyAxLjg1Ny4zNDQgMS4wNTQuMDQ4IDEuMzcuMDU4IDQuMDQxLjA1OGguMDhjMi41OTcgMCAyLjkxNy0uMDEgMy45Ni0uMDU4Ljk3Ni0uMDQ1IDEuNTA1LS4yMDcgMS44NTgtLjM0NC40NjYtLjE4Mi44LS4zOTggMS4xNS0uNzQ4LjM1LS4zNS41NjYtLjY4My43NDgtMS4xNS4xMzctLjM1My4zLS44ODIuMzQ0LTEuODU3LjA0OC0xLjA1NS4wNTgtMS4zNy4wNTgtNC4wNDF2LS4wOGMwLTIuNTk3LS4wMS0yLjkxNy0uMDU4LTMuOTYtLjA0NS0uOTc2LS4yMDctMS41MDUtLjM0NC0xLjg1OGEzLjA5NyAzLjA5NyAwIDAwLS43NDgtMS4xNSAzLjA5OCAzLjA5OCAwIDAwLTEuMTUtLjc0OGMtLjM1My0uMTM3LS44ODItLjMtMS44NTctLjM0NC0xLjAyMy0uMDQ3LTEuMzUxLS4wNTgtMy44MDctLjA1OHpNMTIgNi44NjVhNS4xMzUgNS4xMzUgMCAxMTAgMTAuMjcgNS4xMzUgNS4xMzUgMCAwMTAtMTAuMjd6bTAgMS44MDJhMy4zMzMgMy4zMzMgMCAxMDAgNi42NjYgMy4zMzMgMy4zMzMgMCAwMDAtNi42NjZ6bTUuMzM4LTMuMjA1YTEuMiAxLjIgMCAxMTAgMi40IDEuMiAxLjIgMCAwMTAtMi40eidcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT0nZXZlbm9kZCdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj0nIydcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy01IGgtNSdcbiAgICAgICAgICAgICAgZmlsbD0nY3VycmVudENvbG9yJ1xuICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aCBkPSdNOC4yOSAyMC4yNTFjNy41NDcgMCAxMS42NzUtNi4yNTMgMTEuNjc1LTExLjY3NSAwLS4xNzggMC0uMzU1LS4wMTItLjUzQTguMzQ4IDguMzQ4IDAgMDAyMiA1LjkyYTguMTkgOC4xOSAwIDAxLTIuMzU3LjY0NiA0LjExOCA0LjExOCAwIDAwMS44MDQtMi4yNyA4LjIyNCA4LjIyNCAwIDAxLTIuNjA1Ljk5NiA0LjEwNyA0LjEwNyAwIDAwLTYuOTkzIDMuNzQzIDExLjY1IDExLjY1IDAgMDEtOC40NTctNC4yODcgNC4xMDYgNC4xMDYgMCAwMDEuMjcgNS40NzdBNC4wNzIgNC4wNzIgMCAwMTIuOCA5LjcxM3YuMDUyYTQuMTA1IDQuMTA1IDAgMDAzLjI5MiA0LjAyMiA0LjA5NSA0LjA5NSAwIDAxLTEuODUzLjA3IDQuMTA4IDQuMTA4IDAgMDAzLjgzNCAyLjg1QTguMjMzIDguMjMzIDAgMDEyIDE4LjQwN2ExMS42MTYgMTEuNjE2IDAgMDA2LjI5IDEuODQnIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPSdlbicgY2xhc3NOYW1lPSdzY3JvbGwtc21vb3RoJz5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEnIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHkgY2xhc3NOYW1lPSd0ZXh0LXNsYXRlLTkwMCc+XG4gICAgICAgIDxOYXYgLz5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCc7XG5cbmltcG9ydCB7IGdldENsaWVudCB9IGZyb20gJ34vbGliL3Nhbml0eS9nZXRDbGllbnQnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKHsgcGFyYW1zIH06IHsgcGFyYW1zOiBhbnkgfSkge1xuICAvLyBRdWVyeSBmb3IgX2FsbF8gZG9jdW1lbnRzIHdpdGggdGhpcyBzbHVnXG4gIC8vIFRoZXJlIGNvdWxkIGJlIHR3bzogRHJhZnQgYW5kIFB1Ymxpc2hlZCFcbiAgY29uc3QgaW5pdGlhbERhdGEgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaChcbiAgICBgKltfdHlwZSA9PSBcIm5ld3NcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddeyBfaWQsIHRpdGxlLCBzbHVnLCBcImZlYXR1cmVJbWFnZVwiOiBmZWF0dXJlLmFzc2V0LT51cmxcbiAgfWAsXG4gICAgeyBzbHVnOiBwYXJhbXMuc2x1ZyB9XG4gICk7XG5cbiAgcmV0dXJuIHsgaW5pdGlhbERhdGEgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3c1Bvc3QoKSB7XG4gIGxldCB7IGluaXRpYWxEYXRhIH0gPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIHBhZGRpbmc6IDIwIH19PlxuICAgICAgPGgxPntpbml0aWFsRGF0YVswXS50aXRsZX08L2gxPlxuICAgICAgPGltZyBzcmM9e2luaXRpYWxEYXRhWzBdLmZlYXR1cmVJbWFnZX0+PC9pbWc+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IFBpY29TYW5pdHkgZnJvbSAncGljb3Nhbml0eSc7XG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuLy8gU3RhbmRhcmQgY2xpZW50IGZvciBmZXRjaGluZyBkYXRhXG5leHBvcnQgY29uc3Qgc2FuaXR5Q2xpZW50ID0gbmV3IFBpY29TYW5pdHkoY29uZmlnKTtcblxuLy8gQXV0aGVudGljYXRlZCBjbGllbnQgZm9yIGZldGNoaW5nIGRyYWZ0IGRvY3VtZW50c1xuZXhwb3J0IGNvbnN0IHByZXZpZXdDbGllbnQgPSBuZXcgUGljb1Nhbml0eSh7XG4gIC4uLmNvbmZpZyxcbiAgdXNlQ2RuOiBmYWxzZSxcbiAgdG9rZW46IHByb2Nlc3MuZW52LlNBTklUWV9BUElfVE9LRU4gPz8gYGAsXG59KTtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNob29zZSB0aGUgY29ycmVjdCBjbGllbnRcbmV4cG9ydCBjb25zdCBnZXRDbGllbnQgPSAodXNlUHJldmlldyA9IGZhbHNlKSA9PlxuICB1c2VQcmV2aWV3ID8gcHJldmlld0NsaWVudCA6IHNhbml0eUNsaWVudDtcbiIsICJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGlWZXJzaW9uOiAnMjAyMS0wMy0yNScsXG4gIC8vIEZpbmQgdGhlc2UgaW4geW91ciAuL3N0dWRpby9zYW5pdHkuanNvbiBmaWxlXG4gIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJyxcbiAgcHJvamVjdElkOiAncWk4aHIzcnYnLFxuICB1c2VDZG46IGZhbHNlLFxufTtcbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdzeXN0ZW0tdWksIHNhbnMtc2VyaWYnLCBsaW5lSGVpZ2h0OiAnMS40JyB9fT5cbiAgICAgIDxoMT5XZWxjb21lIHRvIFJlbWl4PC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT0ncC02Jz5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICBocmVmPSdodHRwczovL3JlbWl4LnJ1bi90dXRvcmlhbHMvYmxvZydcbiAgICAgICAgICAgIHJlbD0nbm9yZWZlcnJlcidcbiAgICAgICAgICA+PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBGb3JtLCBMaW5rLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IE1ldGEgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBnZXRGaWxtcywgRmlsbSB9IGZyb20gJ34vYXBpL2ZpbG1zJztcbmltcG9ydCBDVEEgZnJvbSAnfi9Db21wb25lbnRzL2N0YSc7XG5pbXBvcnQgSGVybyBmcm9tICd+L0NvbXBvbmVudHMvaGVybyc7XG5pbXBvcnQgSW5mbyBmcm9tICd+L0NvbXBvbmVudHMvaW5mbyc7XG5pbXBvcnQgaW5mb0ltZyBmcm9tICcuLi9pbWFnZXMvYWJvdXQtcGEuanBnJztcbmltcG9ydCB7IGdldENsaWVudCB9IGZyb20gJ34vbGliL3Nhbml0eS9nZXRDbGllbnQnO1xuXG4vLyBsb2FkZXIoKSBtdXN0IGJlIGFzeW5jIVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcigpIHtcbiAgY29uc3QgbmV3c1Bvc3RzID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJuZXdzXCJdeyBfaWQsIHRpdGxlLCBzbHVnLCBcImZlYXR1cmVJbWFnZVwiOiBmZWF0dXJlLmFzc2V0LT51cmxcbiAgIH1gXG4gICk7XG4gIGNvbnN0IGFib3V0VGV4dCA9IGF3YWl0IGdldENsaWVudCgpLmZldGNoKFxuICAgIGAqW190eXBlID09IFwiYWJvdXRcIl17IF9pZCwgdGl0bGUsIG92ZXJ2aWV3LCBcIm92ZXJ2aWV3VGV4dFwiOiBvdmVydmlld1swXS5jaGlsZHJlbiwgXCJmZWF0dXJlSW1hZ2VcIjogZmVhdHVyZS5hc3NldC0+dXJsXG4gICB9YFxuICApO1xuICByZXR1cm4geyBuZXdzUG9zdHMsIGFib3V0VGV4dCB9O1xufVxuXG4vLyBTZXJ2ZXIgU2lkZVxuLy9leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuLy9jb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbi8vY29uc3QgdGl0bGUgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgndGl0bGUnKTtcbi8vcmV0dXJuIGdldEZpbG1zKHRpdGxlKTtcbi8vfTtcblxuZXhwb3J0IGNvbnN0IG1ldGEgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdQYWRlbCBBZnJpY2EgfCBUaGUgTnVtYmVyIDEgQWZyaWNhbiBQYWRlbCBDb21wYW55JyxcbiAgICBkZXNjcmlwdGlvbjogJ1BhZGVsIEFmcmljYSBob21lIHBhZ2UnLFxuICAgIGtleXdvcmRzOiAncGFkZWwsIGFmcmljYSwgc3BvcnQnLFxuICB9O1xufTtcblxuLy8gQ2xpZW50IFNpZGVcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgbmV3c1Bvc3RzLCBhYm91dFRleHQgfSA9IHVzZUxvYWRlckRhdGEoKTtcblxuICAvL2NvbnN0IGZpbG1zID0gdXNlTG9hZGVyRGF0YTxGaWxtW10+KCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZXJvXG4gICAgICAgIGhlYWRpbmc9J0xldCB0aGUgZ2FtZSBiZWdpbidcbiAgICAgICAgYm9keT0nSW50ZWdlciBhIGVyb3MgdmVuZW5hdGlzLCBpbnRlcmR1bSBsb3JlbSBldSwgbG9ib3J0aXMgbGlndWxhLiBDdXJhYml0dXIgdmVsIGlwc3VtIG5vbiB0ZWxsdXMgY29udmFsbGlzIGVsZW1lbnR1bS4gVml2YW11cyBwdWx2aW5hciByaXN1cyBuZWMgc2FwaWVuIGNvbW1vZG8gYmliZW5kdW0nXG4gICAgICAgIGJ1dHRvbjFUZXh0PSdMZWFybiBNb3JlJ1xuICAgICAgICBidXR0b24xVG89JyNhYm91dCdcbiAgICAgICAgYnV0dG9uMlRleHQ9J1dhbnQgdG8gUGFydG5lcj8nXG4gICAgICAgIGJ1dHRvbjJUbz0nI2Fib3V0J1xuICAgICAgICBpbWdTcmM9JydcbiAgICAgIC8+XG5cbiAgICAgIDxJbmZvXG4gICAgICAgIHRpdGxlPSdBYm91dCBVcydcbiAgICAgICAgYm9keT0nSW50ZWdlciBhIGVyb3MgdmVuZW5hdGlzLCBpbnRlcmR1bSBsb3JlbSBldSwgbG9ib3J0aXMgbGlndWxhLiBDdXJhYml0dXIgdmVsIGlwc3VtIG5vbiB0ZWxsdXMgY29udmFsbGlzIGVsZW1lbnR1bS4gVml2YW11cyBwdWx2aW5hciByaXN1cyBuZWMgc2FwaWVuIGNvbW1vZG8gYmliZW5kdW0nXG4gICAgICAgIGZsb3c9J2xlZnQnXG4gICAgICAgIGltYWdlPScjJ1xuICAgICAgLz5cbiAgICAgIDxDVEFcbiAgICAgICAgaGVhZGluZz0nTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCdcbiAgICAgICAgYm9keT0nSW50ZWdlciBhIGVyb3MgdmVuZW5hdGlzLCBpbnRlcmR1bSBsb3JlbSBldSwgbG9ib3J0aXMgbGlndWxhLiBDdXJhYml0dXIgdmVsIGlwc3VtIG5vbiB0ZWxsdXMgY29udmFsbGlzIGVsZW1lbnR1bS4gVml2YW11cyBwdWx2aW5hciByaXN1cyBuZWMgc2FwaWVuIGNvbW1vZG8gYmliZW5kdW0nXG4gICAgICAgIGJ1dHRvblRleHQ9J0NsaWNrIGhlcmUnXG4gICAgICAgIGJ1dHRvblRvPScjYWJvdXQnXG4gICAgICAvPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J1tjdGFdICBwLXZ3LTMyIHBiLTAgIHNwYWNlLXgtMTAgZmxleCAnPlxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT0ndy0xLzQnPlxuICAgICAgICAgIDxpbWcgc3JjPXtpbmZvSW1nfSAvPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPGJsb2NrcXVvdGUgY2xhc3NOYW1lPSd3LTMvNCBzcGFjZS15LTQgICc+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1ib2xkJz5cbiAgICAgICAgICAgIFx1MjAxQyBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG9cbiAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXHUyMDFEXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2Jhc2UnPlRoZSBBdXRob3I8L3A+XG4gICAgICAgIDwvYmxvY2txdW90ZT5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgaWQ9J25ld3MnXG4gICAgICAgIGNsYXNzTmFtZT0nW2Fib3V0XSAgcC12dy0zMiBiZy13aGl0ZSB0ZXh0LWNlbnRlciBzcGFjZS15LXZ3LTYtbWluQHhsICdcbiAgICAgID5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC00eGwgZm9udC1ib2xkJz5OZXdzPC9oMj5cblxuICAgICAgICB7LypcbiAgICAgICAgLy9TRUFSQ0ggRklMVEVSXG4gICAgICAgIDxGb3JtIGNsYXNzTmFtZT0ncHktNSc+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgIG5hbWU9J3RpdGxlJ1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nZW50ZXIgc29tZXRoaW5nJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlci0yIHJvdW5kZWQgcHktMiBweC0yJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTgwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkIG14LTInXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2VhcmNoeycgJ31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9Gb3JtPlxuICAqL31cblxuICAgICAgICB7LypcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTYgJz5cbiAgICAgICAgICB7ZmlsbXMuc2xpY2UoMCwgNCkubWFwKChmaWxtKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG92ZXI6c2hhZG93LTJ4bCBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6Zm9udC1ib2xkIGN1cnNvci1wb2ludGVyICBwLTQgIHNwYWNlLXktdnctNC1tYXhAbWQnPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhc3BlY3Qtc3F1YXJlIHJvdW5kZWQtbWQgICdcbiAgICAgICAgICAgICAgICBzcmM9e2ZpbG0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PXtmaWxtLnRpdGxlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2PntmaWxtLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9eycgJ31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKi99XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTYgJz5cbiAgICAgICAgICB7bmV3c1Bvc3RzPy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IG5ld3NQb3N0cy5zbGljZSgwLCA2KS5tYXAoKG5ld3M6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17bmV3cy5faWR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2hvdmVyOnNoYWRvdy0yeGwgaG92ZXI6c2NhbGUtMTA1IGhvdmVyOmZvbnQtYm9sZCBjdXJzb3ItcG9pbnRlciAgcC00ICBzcGFjZS15LXZ3LTQtbWF4QG1kJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhc3BlY3Qtc3F1YXJlIHJvdW5kZWQtbWQgICdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtuZXdzLmZlYXR1cmVJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtuZXdzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtuZXdzLnNsdWcuY3VycmVudH0+e25ld3MudGl0bGV9IDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIGlkPSdjb250YWN0J1xuICAgICAgICBjbGFzc05hbWU9J1tjb250YWN0XSAgYmctc2xhdGUtOTAwICBwLXZ3LTMyIHNwYWNlLXgtMTAgZmxleCBmbGV4LWNvbCB0ZXh0LXdoaXRlICdcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyAgbS1hdXRvICB0ZXh0LWNlbnRlciBtIHNwYWNlLXktdnctNi1taW5AeGwgdy0xLzIgJz5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgIHZpYS1ncmVlbi01MDAgdG8teWVsbG93LTQwMCAnPlxuICAgICAgICAgICAgQ29udGFjdCBVc1xuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdiYXNlJz5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21kOnNwYWNlLXgtdnctNC1taW5AeGwnPlxuICAgICAgICAgICAgPExpbmsgdG89JyMnIGNsYXNzTmFtZT0nIGlubGluZS1mbGV4ICc+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdweS00IHB4LTYgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1ncmVlbi0zMDAgIHZpYS1ncmVlbi01MDAgdG8teWVsbG93LTQwMCByb3VuZGVkLXhsIHRleHQtYmxhY2sgZm9udC1ib2xkIGhvdmVyOmJnLWdyYWRpZW50LXRvLXRsIGhvdmVyOnNjYWxlLTEwNSBzaGFkb3ctMnhsJz5cbiAgICAgICAgICAgICAgICBFbWFpbCBVc1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIHRvPScjJyBjbGFzc05hbWU9JyBpbmxpbmUtZmxleCAnPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nIHB5LTQgcHgtNiBiZy1ncmFkaWVudC10by1iciAgZnJvbS13aGl0ZSB0ZXh0LXNsYXRlLTkwMCAgdG8tZ3JheS0yMDAgcm91bmRlZC14bCBmb250LWJvbGQgaG92ZXI6YmctZ3JhZGllbnQtdG8tdGwgaG92ZXI6c2NhbGUtMTA1IHNoYWRvdy0yeGwnPlxuICAgICAgICAgICAgICAgIEpvaW4gTWFpbGluZyBMaXN0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnO1xuXG5pbnRlcmZhY2UgQ1RBQ29udGVudCB7XG4gIGhlYWRpbmc6IHN0cmluZztcbiAgYm9keTogc3RyaW5nO1xuICBidXR0b25UZXh0OiBzdHJpbmc7XG4gIGJ1dHRvblRvOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENUQShwcm9wczogQ1RBQ29udGVudCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBpZD0ncGFydG5lcnMnXG4gICAgICBjbGFzc05hbWU9J1tjdGFdIHAtMjAgbWQ6bXgtMjAgYmctc2xhdGUtOTAwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgYWxpZ24tbWlkZGxlIHJvdW5kZWQtbWQgc2hhZG93LTJ4bCB0ZXh0LXdoaXRlJ1xuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPScgIG0tYXV0byAgdGV4dC1jZW50ZXIgIHNwYWNlLXktdnctNi1taW5AeGwgbWQ6dy0zLzQgJz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC00eGwgZm9udC1ib2xkIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwICB2aWEtZ3JlZW4tNTAwIHRvLXllbGxvdy00MDAgJz5cbiAgICAgICAgICB7cHJvcHMuaGVhZGluZ31cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdiYXNlJz57cHJvcHMuYm9keX08L3A+XG4gICAgICAgIDxMaW5rIHRvPXtwcm9wcy5idXR0b25Ub30gY2xhc3NOYW1lPScgaW5saW5lLWZsZXggJz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncHktNCBweC02IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwICB2aWEtZ3JlZW4tNTAwIHRvLXllbGxvdy00MDAgcm91bmRlZC14bCB0ZXh0LWJsYWNrIGZvbnQtYm9sZCBob3ZlcjpiZy1ncmFkaWVudC10by10bCBob3ZlcjpzY2FsZS0xMDUgc2hhZG93LTJ4bCc+XG4gICAgICAgICAgICB7cHJvcHMuYnV0dG9uVGV4dH1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgaGVyb0ltZyBmcm9tICcuLi9pbWFnZXMvcGFkZWwtaGVyby5qcGcnO1xuXG5pbnRlcmZhY2UgSGVyb0NvbnRlbnQge1xuICBoZWFkaW5nOiBzdHJpbmc7XG4gIGJvZHk6IHN0cmluZztcbiAgYnV0dG9uMVRleHQ6IHN0cmluZztcbiAgYnV0dG9uMVRvOiBzdHJpbmc7XG4gIGJ1dHRvbjJUZXh0OiBzdHJpbmc7XG4gIGJ1dHRvbjJUbzogc3RyaW5nO1xuICBpbWdTcmM6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVybyhwcm9wczogSGVyb0NvbnRlbnQpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgY2xhc3NOYW1lPSdbaGVyb10gbWluLWgtc2NyZWVuICAgcHgtNiBtZDpweC0yNCBmbGV4ICBmbGV4LWNvbCBtZDpmbGV4LXJvdyBhbGlnbi1taWRkbGUganVzdGlmeS1iZXR3ZWVuICBiZy1jb3ZlciAgICAgbWQ6c3BhY2UteC0xMlx0ICdcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDE1LCAyMywgNDIpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjMpKSx1cmwoJyR7aGVyb0ltZ30nKWAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgbWQ6dy0zLzUgbXktYXV0byBzcGFjZS15LXZ3LTItbWluQHhsICc+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtOHhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlJz57cHJvcHMuaGVhZGluZ308L2gxPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1iYXNlIGZvbnQtbGlnaHQgdGV4dC1zbGF0ZS0zMDAnPntwcm9wcy5ib2R5fTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBtZDpzcGFjZS14LXZ3LTQtbWluQHhsICBtZDppbmxpbmUtZmxleCBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPScgcHktNCBweC02IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwICAgdG8teWVsbG93LTQwMCByb3VuZGVkLXhsIGZvbnQtYm9sZCBob3ZlcjpiZy1ncmFkaWVudC10by10bCBob3ZlcjpzY2FsZS0xMDUgc2hhZG93LTJ4bCc+XG4gICAgICAgICAgICB7cHJvcHMuYnV0dG9uMVRleHR9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9JyBweS00IHB4LTYgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS13aGl0ZSAgIHRvLWdyYXktMjAwIHJvdW5kZWQteGwgZm9udC1ib2xkIGhvdmVyOmJnLWdyYWRpZW50LXRvLXRsIGhvdmVyOnNjYWxlLTEwNSBzaGFkb3ctMnhsJz5cbiAgICAgICAgICAgIHtwcm9wcy5idXR0b24yVGV4dH1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGZvcm0gY2xhc3NOYW1lPSd3LWZ1bGwgbWQ6dy0xLzIgIG15LWF1dG8gc3BhY2UteS12dy00LW1pbkB4bCBiZy13aGl0ZSBiZy1vcGFjaXR5LTUwIGJhY2tkcm9wLWJsdXItbGcgc2hhZG93LTJ4bFx0IHAtNiByb3VuZGVkLWxnICBib3JkZXItc2xhdGUtOTAwIGJvcmRlci0yICBoLWZpdCc+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtbGcnPkpvaW4gdGhlIE1haWxpbmcgTGlzdDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCcgY2xhc3NOYW1lPSdibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gJz5cbiAgICAgICAgICAgIFlvdXIgTmFtZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgaWQ9J25hbWUnXG4gICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41IDAgIGRhcms6Zm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMCdcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdKb2UgQmxvZ2dzJ1xuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCcgY2xhc3NOYW1lPSdibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gJz5cbiAgICAgICAgICAgIFlvdXIgZW1haWxcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0nZW1haWwnXG4gICAgICAgICAgICBpZD0nZW1haWwnXG4gICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41IGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwJ1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J25hbWVAZmxvd2JpdGUuY29tJ1xuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTYnPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCcgY2xhc3NOYW1lPSdibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gJz5cbiAgICAgICAgICAgIFlvdXIgQ29tcGFueVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgaWQ9J2NvbXBhbnknXG4gICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgIGJsb2NrIHctZnVsbCBwLTIuNSAgIGRhcms6dGV4dC13aGl0ZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDAnXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nQWNtZSBJbmMnXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgY2xhc3NOYW1lPScgcHktNCBweC02IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZ3JlZW4tMzAwIHRvLXllbGxvdy00MDAgcm91bmRlZC14bCBmb250LWJvbGQgaG92ZXI6YmctZ3JhZGllbnQtdG8tdGwgaG92ZXI6c2NhbGUtMTA1IHNoYWRvdy0yeGwnXG4gICAgICAgID5cbiAgICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIiwgImltcG9ydCBpbmZvSW1nIGZyb20gJy4uL2ltYWdlcy9hYm91dC1wYS5qcGcnO1xuXG5pbnRlcmZhY2UgSW5mb0NvbnRlbnQge1xuICB0aXRsZTogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIGZsb3c6IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5mbyhwcm9wczogSW5mb0NvbnRlbnQpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgaWQ9J2Fib3V0J1xuICAgICAgY2xhc3NOYW1lPXtgW2N0YV0gIHAtdnctMzIgIHNwYWNlLXktMTAgbWQ6c3BhY2UteC0xMCBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93ICR7XG4gICAgICAgIHByb3BzLmZsb3cgPT0gJ2xlZnQnID8gJycgOiAnIG1kOmZsZXgtcm93LXJldmVyc2Ugc3BhY2UteC1yZXZlcnNlJ1xuICAgICAgfSBgfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZDp3LTEvMiBzcGFjZS15LTQgICc+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtYm9sZCc+e3Byb3BzLnRpdGxlfTwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nYmFzZSc+e3Byb3BzLmJvZHl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZmlndXJlIGNsYXNzTmFtZT0nbWQ6dy0xLzIgYmctc2xhdGUtMzAwJz5cbiAgICAgICAgPGltZyBzcmM9e2luZm9JbWd9IC8+XG4gICAgICA8L2ZpZ3VyZT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7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
