"use strict";(self.webpackChunkopengarlic_site=self.webpackChunkopengarlic_site||[]).push([[5563],{4348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"Tutorial/gifs","title":"GIFs","description":"You can create GIFs of your game mode for download.","source":"@site/docs/Tutorial/gifs.md","sourceDirName":"Tutorial","slug":"/Tutorial/gifs","permalink":"/docs/Tutorial/gifs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Events","permalink":"/docs/Tutorial/events"},"next":{"title":"Introduction","permalink":"/docs/intro"}}');var a=n(4848),o=n(8453);const s={},i="GIFs",l={},d=[{value:"Create Frames for the GIF",id:"create-frames-for-the-gif",level:2},{value:"Provided Frames",id:"provided-frames",level:2},{value:"Frame Functions",id:"frame-functions",level:2},{value:"Create the Maker for your mode",id:"create-the-maker-for-your-mode",level:2},{value:"Import your maker",id:"import-your-maker",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"gifs",children:"GIFs"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"You can create GIFs of your game mode for download."})}),"\n",(0,a.jsx)(t.h2,{id:"create-frames-for-the-gif",children:"Create Frames for the GIF"}),"\n",(0,a.jsx)(t.p,{children:"Konva and Canvas are available on the server for designing your frames.\nSome prebuilt frames for displaying text or an image are provided."}),"\n",(0,a.jsx)(t.p,{children:"To make compatible frames:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["All frames should be named as follows: ",(0,a.jsx)(t.em,{children:"username.frame0000.png"})]}),"\n",(0,a.jsx)(t.li,{children:"Username should be the name of the user who started that series."}),"\n",(0,a.jsxs)(t.li,{children:["Frames should be saved in the directory provided (see ",(0,a.jsx)(t.a,{href:"#create-the-maker-for-your-mode",children:"Maker"}),")"]}),"\n",(0,a.jsx)(t.li,{children:"For quality, it's suggested to save frames as png.\nCanvas will automatically use png if you use 'toDataURL'"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"provided-frames",children:"Provided Frames"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:'title="modules/FrameMakers/TextFrame.js"',children:"// Creates a png frame that display text\n// stageSize - { width:number, height:number }\n// slices - List of slices for the background generation.\n// colors - List of colors for background generation.\n// frameData - Text to display and username. { value:string, name:string }\n// savePath - Path to save the frame.\ncreateFrame:function(stageSize:object, slices:Array<object>, colors:Array<string>, frameData:object, savePath:string)\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:'title="modules/FrameMakers/ImageFrame.js"',children:"// stageSize:object { width:number, height:number }\n// slices - List of slices for the background generation.\n// colors - List of colors for background generation.\n// frameData - Text to display and username. { value:string, name:string }\n// savePath - Path to save the frame.\n// tmpPath - Path to save temporary intermediate image (auto deleted).\ncreateFrame:function(stageSize:object, slices:Array<object>, colors:Array<string>, frameData:object, savePath:string, tmpPath:string)\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsx)(t.p,{children:"Currently these frames are mostly calculated for the Standard mode,\nwhich uses 1000x600 size canvas. If you want to use a different size,\nyou may need to create your own."})}),"\n",(0,a.jsx)(t.h2,{id:"frame-functions",children:"Frame Functions"}),"\n",(0,a.jsx)(t.p,{children:"There are also some premade functions available to help with designing\nyour frames."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:'title="modules/FrameFunctions.js"',children:"// In order to provide better randomization and avoid clustering\n// you provide grid slices in which to generate.\n\n// Creates a colored background with random stars.\n// stageSize - { width:number, height:number }\n// layer - The layer object on which to draw.\n// slices - List of slice objects passed to createStars.\n// colors - List of colors, one is randomly selected for\n// \t\t\t\tthe background, the rest used for stars.\ncreateBackground:function(stageSize:object, layer:Konva.Layer, slices:Array<object>, colors:Array<string>)\n\n// Creates random 4 and 8 pointed stars on the given layer.\n// slice - { startX:number, endX:number, startY:number, endY: number }\n// starColors - ['#000','#F00', ...] List of randomly selected colors\n// layer - The layer object on which to draw\ncreateStars:function(slice:object, starColors:Array<string>, layer:Konva.Layer)\n\n// Creates a chat bubble in which to display text.\n// Note: currently some of the calculations for placement may only work for Standard stage size.\n// stageSize - { width:number, height:number }\n// position - Upper-left corner of the bubble. { x:number, y:number }\n// layer - The layer object on which to draw.\ncreateTextBubble:function(stageSize:object, position:object, layer:Konva.Layer)\n\n// Creates an anonymous user icon.\n// position - Position to place the icon. { x:number, y:number }\n// layer - The layer object on which to draw.\ncreateUserIcon:function(position:object, layer:Konva.Layer)\n\n// Calculate width of text to display with the given font.\n// text - The text to measure.\n// font - Size & Font (ex. '12px sans-serif')\ngetTextWidth:function(text:string, font:string)\n\n// Creates a box for displaying a username.\n// position - Upper-left corner of the box. { x:number, y: number }\n// width - Width of the box. (getTextWidth can be useful for this)\n// height - Height of the box.\n// layer - The layer object on which to draw.\ncreateUserNameBox:function(position:object, width:number, height:number, layer:Konva.Layer)\n"})}),"\n",(0,a.jsx)(t.h2,{id:"create-the-maker-for-your-mode",children:"Create the Maker for your mode"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Create your color Array"}),"\n",(0,a.jsx)(t.li,{children:"Create your Array of slices for the canvas"}),"\n",(0,a.jsx)(t.li,{children:"Create your stage size"}),"\n",(0,a.jsx)(t.li,{children:"Export a function named 'generateFrames' (see below)"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:'title="modules/FrameMakers/MyExampleMaker.js"',children:"import * as Lobby from '../Lobby.js'\n\n/**\n * @param {string} lobbyCode The code for the lobby\n * @param {string} playerName The name of the user who started the series\n * @param {string} outputDir The directory where the frames should be saved\n */\nexport const generateFrames = async (lobbyCode, playerName, outputDir) => {\n\n\t// Get the data you saved for the lobby\n\tconst lobby = await Lobby.getLobbyData(lobbyCode);\n\n\t// Process your data creating frames from the functions/modules\n\t// provided or you create.\n\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["After your frames have been generated, the GIF will be automatically built\nfrom the frames and saved as ",(0,a.jsx)(t.em,{children:"username.gif"})," in the same directory. This will\nthen be converted to via into a data URL. This is then passed to the front-end\nin the 'GIFCreated' event. You can listen to this event on your end screen to\nreceive the image and start the download."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:'title="client/src/components/screens/MyEndGame.js"',children:"const events = {\n\t\tGIFCreated: (data, filename) => {\n\t\t\tconsole.log('GIF Created');\n\t\t\tsetGifButtonDisabled(false);\n\t\t\tlet link = document.createElement('a');\n\t\t\tlink.href = data;\n\t\t\tlink.download = filename;\n\t\t\tlink.style = 'display:none';\n\t\t\tdocument.body.appendChild(link);\n\t\t\tlink.click();\n\t\t\tdocument.body.removeChild(link);\n\t\t}\n\t};\n\n\tuseEffect(() => {\n\t\tfor(const name in events) {\n\t\t\tsocket.on(name, events[name]);\n\t\t}\n\n\t\treturn () => {\n\t\t\tfor(const name in events) {\n\t\t\t\tsocket.off(name, events[name]);\n\t\t\t}\n\t\t}\n\t\t// eslint-disable-next-line\n\t}, []);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"import-your-maker",children:"Import your maker"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:'title="modules/FrameMakers.js"',children:"import * as StandardFrameMaker from './FrameMakers/StandardFrameMaker.js';\nimport * as MyExampleMaker from './FrameMakers/MyExampleMaker.js';\n\nconst FrameMakers = {\n\t'Standard': StandardFrameMaker\n\t'MyExampleMode': MyExampleMaker\t\t// The key should match the name of the mode saved in lobby.mode\n};\n\nexport default FrameMakers;\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(6540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);