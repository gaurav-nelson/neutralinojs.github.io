(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{117:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return t?a.a.createElement(m,l(l({ref:n},p),{},{components:t})):a.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},165:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/hmr-preview-cdce2bdfc292933f7c15696bff07cf89.gif"},88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),o=(t(0),t(117)),i={title:"Using Frontend Libraries"},l={unversionedId:"how-to/use-a-frontend-library",id:"how-to/use-a-frontend-library",isDocsHomePage:!1,title:"Using Frontend Libraries",description:"This article is outdated and we are working on an article re-write. The reason is that now you can import @neutralinojs/lib in frontend libraries without using the global Neutralino object.",source:"@site/docs/how-to/use-a-frontend-library.md",slug:"/how-to/use-a-frontend-library",permalink:"/docs/how-to/use-a-frontend-library",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/how-to/use-a-frontend-library.md",version:"current",sidebar:"docs",previous:{title:"Auto Updater",permalink:"/docs/how-to/auto-updater"},next:{title:"Distribution Overview",permalink:"/docs/distribution/overview"}},c=[{value:"Initializing projects",id:"initializing-projects",children:[]},{value:"Configuring Neutralinojs project",id:"configuring-neutralinojs-project",children:[]},{value:"Configuring neu CLI",id:"configuring-neu-cli",children:[]},{value:"Configuring the frontend app",id:"configuring-the-frontend-app",children:[]},{value:"Enabling hot-reload",id:"enabling-hot-reload",children:[]}],p={toc:c};function u(e){var n=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,i,{components:n,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This article is outdated and we are working on an article re-write. The reason is that now you can import ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@neutralinojs/lib"},Object(o.b)("inlineCode",{parentName:"a"},"@neutralinojs/lib"))," in frontend libraries without using the global ",Object(o.b)("inlineCode",{parentName:"p"},"Neutralino")," object."))),Object(o.b)("p",null,"You can build Neutralinojs apps with vanilla JavaScript or using any frontend library. This tutorial guides you\nto set up your favorite frontend library for Neutralinojs application development."),Object(o.b)("h2",{id:"initializing-projects"},"Initializing projects"),Object(o.b)("p",null,"First, you need to create a new empty Neutralinojs project. Use the\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/neutralinojs/neutralinojs-zero"},Object(o.b)("inlineCode",{parentName:"a"},"neutralinojs/neutralinojs-zero"))," template to create an\nempty project, as shown below."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"neu create myapp --template neutralinojs/neutralinojs-zero\n")),Object(o.b)("p",null,"Now, create a new project with your favorite frontend framework's command-line tools. In this tutorial,\nwe are going to use React, but you can use any frontend library as you wish.\nYou need to create this project inside the ",Object(o.b)("inlineCode",{parentName:"p"},"myapp")," directory."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cd myapp\nnpx create-react-app myapp-react\n")),Object(o.b)("h2",{id:"configuring-neutralinojs-project"},"Configuring Neutralinojs project"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"neutralinojs-zero")," template has a pre-included HTML file and icon, so delete the ",Object(o.b)("inlineCode",{parentName:"p"},"www")," directory since we\ndon't need those files now."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"rm -rf www\n")),Object(o.b)("p",null,"You need to configure the Neutralinojs project to support the frontend framework. First, you can set the\ndocument root with your frontend framework's build directory. React typically generates build outputs to\n",Object(o.b)("inlineCode",{parentName:"p"},"build")," directory, so we can update ",Object(o.b)("inlineCode",{parentName:"p"},"documentRoot")," as follows."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'"documentRoot": "/myapp-react/build/"\n')),Object(o.b)("p",null,"Now, our Neutralinojs app knows the application resource location, but it's missing an icon, so set an\nicon for the app. You can load an icon from your frontend framework's default resources directory. For\ndemonstration purposes, let's use the React icon from the ",Object(o.b)("inlineCode",{parentName:"p"},"public")," directory."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'  "modes": {\n    "window": {\n      // --- other options\n      "icon": "/myapp-react/public/logo192.png"\n    }\n  }\n')),Object(o.b)("h2",{id:"configuring-neu-cli"},"Configuring neu CLI"),Object(o.b)("p",null,"neu CLI wants to know about the client library location and resources directory to run\n",Object(o.b)("inlineCode",{parentName:"p"},"neu run")," and ",Object(o.b)("inlineCode",{parentName:"p"},"neu update")," commands properly. Store client library into your frontend framework's static\nresources directory and set application resources path with the same value you've used for ",Object(o.b)("inlineCode",{parentName:"p"},"documentRoot"),"."),Object(o.b)("p",null,"We can configure CLI for React by using the following options."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'  "cli": {\n    // --- other options\n    "resourcesPath": "/myapp-react/build/",\n    "clientLibrary": "/myapp-react/public/neutralino.js",\n  }\n')),Object(o.b)("p",null,"When we modify ",Object(o.b)("inlineCode",{parentName:"p"},"cli.clientLibrary")," property, we need to enter ",Object(o.b)("inlineCode",{parentName:"p"},"neu update")," to get the client library to\nthe new location. Go to ",Object(o.b)("inlineCode",{parentName:"p"},"myapp")," and update the client library."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"neu update\n")),Object(o.b)("p",null,"Now, you can build and run the React application as a Neutralinojs application ","\u2014"," it's possible with the\nfollowing steps."),Object(o.b)("p",null,"First, build the React application with the following command."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cd myapp-react\nnpm run build\n")),Object(o.b)("p",null,"Finally, run the Neutralinojs application."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cd ..\nneu run\n")),Object(o.b)("h2",{id:"configuring-the-frontend-app"},"Configuring the frontend app"),Object(o.b)("p",null,"You could run the application with the ",Object(o.b)("inlineCode",{parentName:"p"},"neu run")," command, but you can't use the native API yet since the\nReact application doesn't load the client library. Add a ",Object(o.b)("inlineCode",{parentName:"p"},"<script>")," tag and load the client library from\nyour frontend library's main HTML file."),Object(o.b)("p",null,"React typically holds the main HTML file content in the ",Object(o.b)("inlineCode",{parentName:"p"},"./public/index.html")," file, so we can put the following\nHTML snippet there to load the client library."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<script src="%PUBLIC_URL%/neutralino.js"><\/script>\n')),Object(o.b)("p",null,"Also, make sure to initialize the client library from your frontend application's entry point. React's\napplication entry-point is typically ",Object(o.b)("inlineCode",{parentName:"p"},"./src/index.js"),". Therefore, we can do the initialization process\nfrom there."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';\nimport App from './App';\n\nReactDOM.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>,\n  document.getElementById('root')\n);\n\nwindow.Neutralino.init(); // Add this function call\n")),Object(o.b)("p",null,"Now, build and run your application again with the inspector window."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"neu run -- --window-enable-inspector\n")),Object(o.b)("p",null,"Try entering some native API calls from the browser console."),Object(o.b)("h2",{id:"enabling-hot-reload"},"Enabling hot-reload"),Object(o.b)("p",null,"Building every code change and testing your application is undoubtedly time-consuming. Therefore, you can use\nyour frontend framework's HMR (Hot Module Replacement) features to speed up your development activities.\nBut, we have a small issue here. There are now two HTTP servers: the Neutralinojs resource server and the\nfrontend framework's development server. How can we load the Neutralinojs client library from the frontend\nframework's development server?"),Object(o.b)("p",null,"Don't worry ","\u2014"," neu CLI provides a built-in feature to enable HMR by patching the main HTML file.\nYou can add the following section to your configuration file for activating hot-reloading."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'  "cli": {\n    // --- other options\n    "frontendLibrary": {\n        "patchFile": "/myapp-react/public/index.html",\n        "devUrl": "http://localhost:3000"\n    }\n  }\n}\n')),Object(o.b)("p",null,"The above options tell neu CLI about the main HTML file and development server URL."),Object(o.b)("p",null,"Now, start your frontend development server. In React, we can do it with the following command."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),Object(o.b)("p",null,"Finally, run the Neutralinojs application with the following command."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"neu run --frontend-lib-dev\n")),Object(o.b)("p",null,Object(o.b)("img",{src:t(165).default})),Object(o.b)("p",null,"Make sure to build your frontend app once before entering the above command since it loads the client\nlibrary from the Neutralinojs application resources directory (not from your frontend framework's directory)."),Object(o.b)("p",null,"See the full source code of this tutorial ",Object(o.b)("a",{parentName:"p",href:"https://github.com/codezri/neutralinojs-react"},"here"),"."))}u.isMDXComponent=!0}}]);