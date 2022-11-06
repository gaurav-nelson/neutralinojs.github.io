(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{105:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return r})),o.d(n,"metadata",(function(){return l})),o.d(n,"toc",(function(){return c})),o.d(n,"default",(function(){return b}));var t=o(3),i=o(8),a=(o(0),o(116)),r={title:"neutralino.config.json"},l={unversionedId:"configuration/neutralino.config.json",id:"configuration/neutralino.config.json",isDocsHomePage:!1,title:"neutralino.config.json",description:"neutralino.config.json file contains the application configuration details.\xa0Every Neutralinojs app requires",source:"@site/docs/configuration/neutralino.config.json.md",slug:"/configuration/neutralino.config.json",permalink:"/docs/configuration/neutralino.config.json",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/configuration/neutralino.config.json.md",version:"current",sidebar:"docs",previous:{title:"Internal CLI Arguments",permalink:"/docs/cli/internal-cli-arguments"},next:{title:"Project Structure",permalink:"/docs/configuration/project-structure"}},c=[{value:"Primary",id:"primary",children:[{value:"<code>applicationId: string</code>",id:"applicationid-string",children:[]},{value:"<code>version: string</code>",id:"version-string",children:[]},{value:"<code>defaultMode: string</code>",id:"defaultmode-string",children:[]}]},{value:"General",id:"general",children:[{value:"<code>port: number</code>",id:"port-number",children:[]},{value:"<code>enableServer: boolean</code>",id:"enableserver-boolean",children:[]},{value:"<code>enableNativeAPI: boolean</code>",id:"enablenativeapi-boolean",children:[]},{value:"<code>tokenSecurity: string</code>",id:"tokensecurity-string",children:[]},{value:"<code>url: string</code>",id:"url-string",children:[]},{value:"<code>documentRoot: string</code>",id:"documentroot-string",children:[]},{value:"<code>exportAuthInfo: boolean</code>",id:"exportauthinfo-boolean",children:[]},{value:"<code>enableExtensions: boolean</code>",id:"enableextensions-boolean",children:[]},{value:"<code>extensions: object[]</code>",id:"extensions-object",children:[]},{value:"<code>nativeBlockList: string[]</code>",id:"nativeblocklist-string",children:[]},{value:"<code>nativeAllowList: string[]</code>",id:"nativeallowlist-string",children:[]},{value:"<code>globalVariables: object</code>",id:"globalvariables-object",children:[]},{value:"<code>logging.enabled: boolean</code>",id:"loggingenabled-boolean",children:[]},{value:"<code>logging.writeToLogFile: boolean</code>",id:"loggingwritetologfile-boolean",children:[]},{value:"<code>serverHeaders: object</code>",id:"serverheaders-object",children:[]}]},{value:"Window mode",id:"window-mode",children:[{value:"<code>modes.window.title: string</code>",id:"modeswindowtitle-string",children:[]},{value:"<code>modes.window.width: number</code>",id:"modeswindowwidth-number",children:[]},{value:"<code>modes.window.height: number</code>",id:"modeswindowheight-number",children:[]},{value:"<code>modes.window.minWidth: number</code>",id:"modeswindowminwidth-number",children:[]},{value:"<code>modes.window.minHeight: number</code>",id:"modeswindowminheight-number",children:[]},{value:"<code>modes.window.maxWidth: number</code>",id:"modeswindowmaxwidth-number",children:[]},{value:"<code>modes.window.maxHeight: number</code>",id:"modeswindowmaxheight-number",children:[]},{value:"<code>modes.window.fullScreen: boolean</code>",id:"modeswindowfullscreen-boolean",children:[]},{value:"<code>modes.window.icon: string</code>",id:"modeswindowicon-string",children:[]},{value:"<code>modes.window.alwaysOnTop: boolean</code>",id:"modeswindowalwaysontop-boolean",children:[]},{value:"<code>modes.window.enableInspector: boolean</code>",id:"modeswindowenableinspector-boolean",children:[]},{value:"<code>modes.window.borderless: boolean</code>",id:"modeswindowborderless-boolean",children:[]},{value:"<code>modes.window.maximize: boolean</code>",id:"modeswindowmaximize-boolean",children:[]},{value:"<code>modes.window.resizable: boolean</code>",id:"modeswindowresizable-boolean",children:[]},{value:"<code>modes.window.hidden: boolean</code>",id:"modeswindowhidden-boolean",children:[]},{value:"<code>modes.window.exitProcessOnClose: boolean</code>",id:"modeswindowexitprocessonclose-boolean",children:[]}]},{value:"Chrome mode",id:"chrome-mode",children:[{value:"<code>modes.chrome.width: number</code>",id:"modeschromewidth-number",children:[]},{value:"<code>modes.chrome.height: number</code>",id:"modeschromeheight-number",children:[]},{value:"<code>modes.chrome.args: string</code>",id:"modeschromeargs-string",children:[]}]},{value:"CLI",id:"cli",children:[{value:"<code>cli.binaryName: string</code>",id:"clibinaryname-string",children:[]},{value:"<code>cli.resourcesPath: string</code>",id:"cliresourcespath-string",children:[]},{value:"<code>cli.extensionsPath: string</code>",id:"cliextensionspath-string",children:[]},{value:"<code>cli.clientLibrary: string</code>",id:"cliclientlibrary-string",children:[]},{value:"<code>cli.binaryVersion: string</code>",id:"clibinaryversion-string",children:[]},{value:"<code>cli.clientVersion: string</code>",id:"cliclientversion-string",children:[]},{value:"<code>cli.autoReloadExclude: string</code>",id:"cliautoreloadexclude-string",children:[]},{value:"<code>cli.frontendLibrary: object</code>",id:"clifrontendlibrary-object",children:[]}]}],d={toc:c};function b(e){var n=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},d,o,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"neutralino.config.json")," file contains the application configuration details.\xa0Every Neutralinojs app requires\nthe following mandatory keys from the config file."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"applicationId")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"url")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"defaultMode"))),Object(a.b)("p",null,"Other configuration properties are optional and may have default values."),Object(a.b)("h2",{id:"primary"},"Primary"),Object(a.b)("p",null,"The following configuraion values cannot be overridden in different Neutralinojs modes."),Object(a.b)("h3",{id:"applicationid-string"},Object(a.b)("inlineCode",{parentName:"h3"},"applicationId: string")),Object(a.b)("p",null,"Unique string to identify your application. Eg: ",Object(a.b)("inlineCode",{parentName:"p"},"js.neutralino.sample")),Object(a.b)("h3",{id:"version-string"},Object(a.b)("inlineCode",{parentName:"h3"},"version: string")),Object(a.b)("p",null,"Application version. Eg: ",Object(a.b)("inlineCode",{parentName:"p"},"2.4.22")),Object(a.b)("h3",{id:"defaultmode-string"},Object(a.b)("inlineCode",{parentName:"h3"},"defaultMode: string")),Object(a.b)("p",null,"Mode of the application. Accepted values are ",Object(a.b)("inlineCode",{parentName:"p"},"window"),", ",Object(a.b)("inlineCode",{parentName:"p"},"browser"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"cloud"),"."),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("p",null,"You can override the following configuration values from different modes. For example, you can use a specific\nURL in root-level and another URL in window-mode-level, as shown below."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "url": "/"\n    "modes": {\n        "window": {\n            "url": "/#window-mode"\n        }\n    }\n}\n')),Object(a.b)("h3",{id:"port-number"},Object(a.b)("inlineCode",{parentName:"h3"},"port: number")),Object(a.b)("p",null,"The port of your application. If the value is ",Object(a.b)("inlineCode",{parentName:"p"},"0"),", Neutralinojs will use a random available port."),Object(a.b)("h3",{id:"enableserver-boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"enableServer: boolean")),Object(a.b)("p",null,"Enables or disables the background server (Disables static file servering feature and native API messaging).\nIf you load a remote URL to the webview, you can set this option to ",Object(a.b)("inlineCode",{parentName:"p"},"false"),". Make sure to set this option to ",Object(a.b)("inlineCode",{parentName:"p"},"true")," if you load resources from local sources. The default value is ",Object(a.b)("inlineCode",{parentName:"p"},"false"),"."),Object(a.b)("h3",{id:"enablenativeapi-boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"enableNativeAPI: boolean")),Object(a.b)("p",null,"Enables or disables the native API. If you want to use any native API functions, you can set this option to ",Object(a.b)("inlineCode",{parentName:"p"},"true"),". The default value is ",Object(a.b)("inlineCode",{parentName:"p"},"false"),"."),Object(a.b)("h3",{id:"tokensecurity-string"},Object(a.b)("inlineCode",{parentName:"h3"},"tokenSecurity: string")),Object(a.b)("p",null,"Neutralinojs uses a client-server communication pattern with a local WebSocket to handle native calls. This\nlocal server is protected with an auto-generated token. This option defines the security implementation for the\ntoken."),Object(a.b)("p",null,"Accepts the following values:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"one-time")," ",Object(a.b)("strong",{parentName:"p"},"(Recommended)")," : Server sends the access token only once, and the client persists it in the\n",Object(a.b)("inlineCode",{parentName:"p"},"sessionStorage"),". If another client (Eg: browser) tries to access the app, ",Object(a.b)("inlineCode",{parentName:"p"},"NE_RT_INVTOKN")," error message will be\nshown instead of the application. Using this option is recommended since it reduces security issues.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"none")," : Server sends the access token always, so any new client can see the application."))),Object(a.b)("p",null,"The default value becomes ",Object(a.b)("inlineCode",{parentName:"p"},"one-time")," if this setting is not specified by the developer."),Object(a.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"If you are using native APIs that can access your computer's internals such as ",Object(a.b)("inlineCode",{parentName:"p"},"os"),", ",Object(a.b)("inlineCode",{parentName:"p"},"filesystem"),", modules,\nnever use ",Object(a.b)("inlineCode",{parentName:"p"},"none")," option since any new client can use those APIs."))),Object(a.b)("h3",{id:"url-string"},Object(a.b)("inlineCode",{parentName:"h3"},"url: string")),Object(a.b)("p",null,"The entry URL of the application. Neutralinojs will initially load this URL.\nThis property accepts both relative and absolute URLs. See following examples."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'"url": "/"\n')),Object(a.b)("p",null,"The above config loads ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:<port>/")," URL initially (internally ",Object(a.b)("inlineCode",{parentName:"p"},"/index.html")," is loaded).\nYou can use remote urls too."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'"url": "http://example.com"\n')),Object(a.b)("h3",{id:"documentroot-string"},Object(a.b)("inlineCode",{parentName:"h3"},"documentRoot: string")),Object(a.b)("p",null,"Sets the document root for the static server. For example, if you need to use ",Object(a.b)("inlineCode",{parentName:"p"},"resources")," directory as\nthe document root, you can use setup ",Object(a.b)("inlineCode",{parentName:"p"},"documentRoot")," as follows."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "documentRoot": "/resources/",\n    "url": "/"\n}\n')),Object(a.b)("p",null,"Make sure to configure ",Object(a.b)("inlineCode",{parentName:"p"},"url")," properly with the document root. The following configuration is ",Object(a.b)("strong",{parentName:"p"},"wrong"),", it\ninstructs the static server to fetch resources from ",Object(a.b)("inlineCode",{parentName:"p"},"./resources/resources"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "documentRoot": "/resources/",\n    "url": "/resources/"\n}\n')),Object(a.b)("p",null,"However, you can use a sub-directory in URL, as shown below."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "documentRoot": "/",\n    "url": "/resources/"\n}\n')),Object(a.b)("h3",{id:"exportauthinfo-boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"exportAuthInfo: boolean")),Object(a.b)("p",null,"Exports authentication details to the ",Object(a.b)("inlineCode",{parentName:"p"},"${NL_PATH}/.tmp/auth_info.json")," file with the following JSON structure."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "port": "<port>",\n    "accessToken": "<access_token>"\n}\n')),Object(a.b)("p",null,"You can use the above authentication details to connect with Neutralinojs from external processes by using\nWebSocket as an IPC mechanism."),Object(a.b)("h3",{id:"enableextensions-boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"enableExtensions: boolean")),Object(a.b)("p",null,"Enables/disables extensions.\nLearn more about this option ",Object(a.b)("a",{parentName:"p",href:"/docs/how-to/extensions-overview#enable-the-extensions-feature"},"here")),Object(a.b)("h3",{id:"extensions-object"},Object(a.b)("inlineCode",{parentName:"h3"},"extensions: object[]")),Object(a.b)("p",null,"An array of extension definitions.\nLearn more about this option ",Object(a.b)("a",{parentName:"p",href:"/docs/how-to/extensions-overview#defining-the-extensions"},"here")),Object(a.b)("h3",{id:"nativeblocklist-string"},Object(a.b)("inlineCode",{parentName:"h3"},"nativeBlockList: string[]")),Object(a.b)("p",null,"An array of native methods needs to be blocked from the frontend of the application. The wildcard character ",Object(a.b)("inlineCode",{parentName:"p"},"*")," is allowed\ninside entries."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "nativeBlockList": ["os.execCommand"],\n    "nativeBlockList": ["app.*"]\n}\n')),Object(a.b)("h3",{id:"nativeallowlist-string"},Object(a.b)("inlineCode",{parentName:"h3"},"nativeAllowList: string[]")),Object(a.b)("p",null,"An array of native methods needs to be allowed from the frontend of the application. The wildcard character ",Object(a.b)("inlineCode",{parentName:"p"},"*")," is allowed\ninside entries."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "nativeAllowList": ["os.getEnv"],\n    "nativeAllowList": ["storage.*"]\n}\n')),Object(a.b)("h3",{id:"globalvariables-object"},Object(a.b)("inlineCode",{parentName:"h3"},"globalVariables: object")),Object(a.b)("p",null,"A key-value-based JavaScript object of custom ",Object(a.b)("a",{parentName:"p",href:"/docs/api/global-variables#custom-global-variables"},"global variables"),"."),Object(a.b)("h3",{id:"loggingenabled-boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"logging.enabled: boolean")),Object(a.b)("p",null,"Enables or disables the logging feature."),Object(a.b)("h3",{id:"loggingwritetologfile-boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"logging.writeToLogFile: boolean")),Object(a.b)("p",null,"Enables or disables log file. If this setting is ",Object(a.b)("inlineCode",{parentName:"p"},"false"),", the framework won't write log to ",Object(a.b)("inlineCode",{parentName:"p"},"neutralinojs.log"),",\nand it will write logs to standard streams."),Object(a.b)("h3",{id:"serverheaders-object"},Object(a.b)("inlineCode",{parentName:"h3"},"serverHeaders: object")),Object(a.b)("p",null,"Custom headers for the static server and Websocket handshake process. For example, the following configuration\nsends a custom header with every outgoing HTTP response."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "serverHeaders": {\n        "Test-Header-Option": "Value"\n    }\n}\n')),Object(a.b)("h2",{id:"window-mode"},"Window mode"),Object(a.b)("p",null,"The following configuration values are used when the application runs with the window mode."),Object(a.b)("h3",{id:"modeswindowtitle-string"},Object(a.b)("inlineCode",{parentName:"h3"},"modes.window.title: string")),Object(a.b)("p",null,"Title of the native window."),Object(a.b)("h3",{id:"modeswindowwidth-number"},Object(a.b)("inlineCode",{parentName:"h3"},"modes.window.width: number")),Object(a.b)("p",null,"Width of the native window."),Object(a.b)("h3",{id:"modeswindowheight-number"},Object(a.b)("inlineCode",{parentName:"h3"},"modes.window.height: number")),Object(a.b)("p",null,"Height of the native window."),Object(a.b)("h3",{id:"modeswindowminwidth-number"},Object(a.b)("inlineCode",{parentName:"h3"},"modes.window.minWidth: number")),Object(a.b)("p",null,"Minimum width of the native window."),Object(a.b)("h3",{id:"modeswindowminheight-number"},Object(a.b)("inlineCode",{parentName:"h3"},"modes.window.minHeight: number")),Object(a.b)("p",null,"Minimum height of the native window."),Object(a.b)("h3",{id:"modeswindowmaxwidth-number"},Object(a.b)("inlineCode",{parentName:"h3"},"modes.window.maxWidth: number")),Object(a.b)("p",null,"Maximum width of the native window."),Object(a.b)("h3",{id:"modeswindowmaxheight-number"},Object(a.b)("inlineCode",{parentName:"h3"},"modes.window.maxHeight: number")),Object(a.b)("p",null,"Maximum height of the native window."),Object(a.b)("h3",{id:"modeswindowfullscreen-boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"modes.window.fullScreen: boolean")),Object(a.b)("p",null,"Activates the full-screen mode."),Object(a.b)("h3",{id:"modeswindowicon-string"},Object(a.b)("inlineCode",{parentName:"h3"},"modes.window.icon: string")),Object(a.b)("p",null,"Application icon's file name. You can directly point to an image file in the\nresources directory. We recommend you to choose a transparent PNG file."),Object(a.b)("h3",{id:"modeswindowalwaysontop-boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"modes.window.alwaysOnTop: boolean")),Object(a.b)("p",null,"Activates the top-most mode."),Object(a.b)("h3",{id:"modeswindowenableinspector-boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"modes.window.enableInspector: boolean")),Object(a.b)("p",null,"Automatically opens the developer tools window."),Object(a.b)("h3",{id:"modeswindowborderless-boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"modes.window.borderless: boolean")),Object(a.b)("p",null,"Activates the borderless mode."),Object(a.b)("h3",{id:"modeswindowmaximize-boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"modes.window.maximize: boolean")),Object(a.b)("p",null,"Launches the application maximized."),Object(a.b)("h3",{id:"modeswindowresizable-boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"modes.window.resizable: boolean")),Object(a.b)("p",null,"Make the window resizable or not. The default value is ",Object(a.b)("inlineCode",{parentName:"p"},"true"),"."),Object(a.b)("h3",{id:"modeswindowhidden-boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"modes.window.hidden: boolean")),Object(a.b)("p",null,"Make the window invisible. This setting can be used to develop background services."),Object(a.b)("h3",{id:"modeswindowexitprocessonclose-boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"modes.window.exitProcessOnClose: boolean")),Object(a.b)("p",null,"If this setting is ",Object(a.b)("inlineCode",{parentName:"p"},"true"),", the app process will exit when the user clicks on the close button. Otherwise,\nthe framework will dispatch the ",Object(a.b)("inlineCode",{parentName:"p"},"windowClose")," event."),Object(a.b)("h2",{id:"chrome-mode"},"Chrome mode"),Object(a.b)("p",null,"The following configuration values are used when the application starts with the chrome mode."),Object(a.b)("h3",{id:"modeschromewidth-number"},Object(a.b)("inlineCode",{parentName:"h3"},"modes.chrome.width: number")),Object(a.b)("p",null,"Width of the chrome window."),Object(a.b)("h3",{id:"modeschromeheight-number"},Object(a.b)("inlineCode",{parentName:"h3"},"modes.chrome.height: number")),Object(a.b)("p",null,"Height of the chrome window."),Object(a.b)("h3",{id:"modeschromeargs-string"},Object(a.b)("inlineCode",{parentName:"h3"},"modes.chrome.args: string")),Object(a.b)("p",null,"Additional command-line arguments for the Chrome process. Read more about chrome mode\nfrom ",Object(a.b)("a",{parentName:"p",href:"/docs/configuration/modes#chrome"},"here")),Object(a.b)("h2",{id:"cli"},"CLI"),Object(a.b)("p",null,"The following configuration values are used for the neu CLI."),Object(a.b)("h3",{id:"clibinaryname-string"},Object(a.b)("inlineCode",{parentName:"h3"},"cli.binaryName: string")),Object(a.b)("p",null,"Binary file name of your application. If it is ",Object(a.b)("inlineCode",{parentName:"p"},"myapp"),", all binaries will use\n",Object(a.b)("inlineCode",{parentName:"p"},"myapp-<platform>_<arch>")," format."),Object(a.b)("h3",{id:"cliresourcespath-string"},Object(a.b)("inlineCode",{parentName:"h3"},"cli.resourcesPath: string")),Object(a.b)("p",null,"Path of your application resources."),Object(a.b)("h3",{id:"cliextensionspath-string"},Object(a.b)("inlineCode",{parentName:"h3"},"cli.extensionsPath: string")),Object(a.b)("p",null,"Path of your application extensions."),Object(a.b)("h3",{id:"cliclientlibrary-string"},Object(a.b)("inlineCode",{parentName:"h3"},"cli.clientLibrary: string")),Object(a.b)("p",null,"Filename of the Neutralinojs JavaScript library."),Object(a.b)("h3",{id:"clibinaryversion-string"},Object(a.b)("inlineCode",{parentName:"h3"},"cli.binaryVersion: string")),Object(a.b)("p",null,"Neutralinojs server version. Get nightly builds by using the ",Object(a.b)("inlineCode",{parentName:"p"},"nightly")," tag."),Object(a.b)("h3",{id:"cliclientversion-string"},Object(a.b)("inlineCode",{parentName:"h3"},"cli.clientVersion: string")),Object(a.b)("p",null,"Neutralinojs client version.  Get nightly builds by using the ",Object(a.b)("inlineCode",{parentName:"p"},"nightly")," tag."),Object(a.b)("h3",{id:"cliautoreloadexclude-string"},Object(a.b)("inlineCode",{parentName:"h3"},"cli.autoReloadExclude: string")),Object(a.b)("p",null,"A JavaScript regular expression to exclude files from the auto-reload file watcher. For example, the\nfollowing configuration will disable auto-reloading for SASS stylesheets (",Object(a.b)("inlineCode",{parentName:"p"},".scss"),")."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "autoReloadExclude": ".*\\\\.scss$"\n}\n')),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"|")," character to set multiple regular expressions, as shown below."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "autoReloadExclude": ".*\\\\.scss$|.*\\\\.less$"\n}\n')),Object(a.b)("h3",{id:"clifrontendlibrary-object"},Object(a.b)("inlineCode",{parentName:"h3"},"cli.frontendLibrary: object")),Object(a.b)("p",null,"Enables frontend development tools (HMR, etc) for the ",Object(a.b)("inlineCode",{parentName:"p"},"neu run --frontend-lib-dev")," command. Learn more about frontend\nframework integration from ",Object(a.b)("a",{parentName:"p",href:"/docs/how-to/use-a-frontend-library"},"here")))}b.isMDXComponent=!0},116:function(e,n,o){"use strict";o.d(n,"a",(function(){return s})),o.d(n,"b",(function(){return m}));var t=o(0),i=o.n(t);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,t,i=function(e,n){if(null==e)return{};var o,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(i[o]=e[o]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var d=i.a.createContext({}),b=function(e){var n=i.a.useContext(d),o=n;return e&&(o="function"==typeof e?e(n):l(l({},n),e)),o},s=function(e){var n=b(e.components);return i.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,a=e.originalType,r=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=b(o),p=t,m=s["".concat(r,".").concat(p)]||s[p]||u[p]||a;return o?i.a.createElement(m,l(l({ref:n},d),{},{components:o})):i.a.createElement(m,l({ref:n},d))}));function m(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=o.length,r=new Array(a);r[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,r[1]=l;for(var d=2;d<a;d++)r[d]=o[d];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"}}]);