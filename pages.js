const pages = [
  {
    id: "welcome",
    title: "Welcome Page",
    subtitle: "Welcome to the Browser Extension Explorer!",
    description: "",
  },
  {
    id: "popup",
    title: "Popup Page",
    subtitle: "Experiment with the default popup page",
    description:
      "The manifest specifies this page as the default popup page. By default, it opens when the toolbar icon is clicked.",
  },
  {
    id: "options",
    title: "Options Page",
    subtitle: "Experiment with the default options page",
    description:
      "The manifest specifies this page as the default options page. By default, it will open as a modal window in the browser extension page.",
  },
  {
    id: "environment-info",
    title: "Environment Details",
    subtitle: "View information about the extension and its environment",
    description:
      "The Web Extensions API offers a handful of methods that expose information about the current page, manifest content, and system platform.",
  },
  {
    id: "url-analyzer",
    title: "Inspect Extension URL",
    subtitle: "Understand how extension URLs are constructed",
    description: "Browser extensions use a special URL format to serve files.",
  },
  {
    id: "chrome-tutorial",
    title: "Chrome Extension Tutorial",
    subtitle:
      "Use the WebExtension Storage API and content scripts to modify webpages",
    description:
      'This example is based off <a class="btn-link" href="https://developer.chrome.com/docs/extensions/mv3/getstarted/">Google\'s browser extension tutorial</a>',
  },
  {
    id: "modify-toolbar-icon",
    title: "Modify Toolbar Icon",
    subtitle: "Programmatically change the extension's toolbar icon",
    description:
      "The extension's toolbar icon can be programmatically modified in a wide variety of ways. You can control the image, hover text, badge text, and badge color.",
  },
  {
    id: "static-dnr",
    title: "Static Declarative Net Request",
    subtitle: "Experiment with static DNR rulesets",
    description:
      "Static rulesets can block or modify outgoing network requests from browser tabs. The Declarative Net Request API allows rulesets to be enabled or disabled on demand.",
  },
  {
    id: "dynamic-dnr",
    title: "Dynamic Declarative Net Request",
    subtitle: "Experiment with dynamic DNR rules",
    description:
      "Dynamic rulesets can block or modify outgoing network requests from browser tabs. The Declarative Net Request API allows rules to be created, modified, or destroyed on demand.",
  },
  {
    id: "tabs-viewer",
    title: "Tab/Window Dashboard",
    subtitle: "View and control your browser's tabs and windows in real-time",
    description:
      "This dashboard shows all of your browser's windows and tabs in real-time. You can manipulate the windows and tabs directly from the control buttons available in each card.",
  },
  {
    id: "navigation-events",
    title: "Navigation Events",
    subtitle: "View browser navigation events in real time",
    description:
      "Browser navigation events in other tabs and frames will display here in real time. This page must be left open to collect navigation events.",
  },
  {
    id: "messaging",
    title: "Extension Messaging",
    subtitle: "Send and recieve messages across the extension",
    description:
      "The Web Extensions API allows for two ways of sending cross-context messages: one-off messages, or connecting message ports to send streams of messages.",
  },
  {
    id: "context-menus",
    title: "Context Menu Clicks",
    subtitle: "Track click information for custom context menu items",
    description:
      "The ContextMenus API allows you to add custom items to right click context menus throughout the browser. Right click on the page, links, selected text, or the toolbar icon to access it.",
  },
  {
    id: "omnibox",
    title: "Omnibox Events",
    subtitle: "Track omnibox events sent from the URL bar",
    description:
      "The Omnibox API allows you to define a custom search interface from the URL bar. In the browser's URL bar, type 'bex' and then a space to open the omnibox interface. Events fired will appear below.",
  },
  {
    id: "oauth2",
    title: "Native Browser Google OAuth",
    subtitle: "Authenticate with Google OAuth",
    description:
      "If using OAuth in Google Chrome and with a Google Login, the flow can be greatly simplified using the identity API. Click the button below to securely authenticate with your Google account.",
  },
  {
    id: "openid",
    title: "Google OpenID Connect Authentication",
    subtitle: "Authentiate with Google OpenID",
    description:
      "Google supports OpenID authentication, and this can be easily used with the identity API. Click the button below to securely authenticate with your Google account.",
  },
  {
    id: "github-oauth",
    title: "Manual Github OAuth",
    subtitle: "Authenticate with Github OAuth",
    description:
      "The identity API is compatible with any OAuth provider. Click the button below to securely authenticate with your Github account.",
  },
];

export default pages;