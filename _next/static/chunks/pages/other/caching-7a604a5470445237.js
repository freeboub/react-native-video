(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79],{6745:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/other/caching",function(){return n(7267)}])},7267:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return c}});var o=n(5893),i=n(2673),a=n(3393),s=n(2702);n(9128);var r=n(2643);let c=[{depth:2,value:"Technology",id:"technology"},{depth:2,value:"How Does It Work",id:"how-does-it-work"},{depth:2,value:"Restrictions",id:"restrictions"}];function _createMdxContent(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",a:"a"},(0,r.a)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{children:"Caching"}),"\n",(0,o.jsxs)(t.p,{children:["Caching is currently only supported on ",(0,o.jsx)(t.code,{children:"iOS"})," platforms with a CocoaPods setup."]}),"\n",(0,o.jsx)(t.h2,{id:"technology",children:"Technology"}),"\n",(0,o.jsxs)(t.p,{children:["The cache is backed by ",(0,o.jsx)(t.a,{href:"https://github.com/spotify/SPTPersistentCache",children:"SPTPersistentCache"})," and ",(0,o.jsx)(t.a,{href:"https://github.com/vdugnist/DVAssetLoaderDelegate",children:"DVAssetLoaderDelegate"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"how-does-it-work",children:"How Does It Work"}),"\n",(0,o.jsxs)(t.p,{children:["The caching is based on the url of the asset.\nSPTPersistentCache is a LRU (",(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)",children:"Least Recently Used"}),") cache."]}),"\n",(0,o.jsx)(t.h2,{id:"restrictions",children:"Restrictions"}),"\n",(0,o.jsxs)(t.p,{children:["Currently, caching is only supported for URLs that end in a ",(0,o.jsx)(t.code,{children:".mp4"}),", ",(0,o.jsx)(t.code,{children:".m4v"}),", or ",(0,o.jsx)(t.code,{children:".mov"})," extension. In future versions, URLs that end in a query string (e.g. test.mp4?resolution=480p) will be support once dependencies allow access to the ",(0,o.jsx)(t.code,{children:"Content-Type"})," header.  At this time, HLS playlists (.m3u8) and videos that sideload text tracks are not supported and will bypass the cache."]}),"\n",(0,o.jsxs)(t.p,{children:["You will also receive warnings in the Xcode logs by using the ",(0,o.jsx)(t.code,{children:"debug"})," mode. So if you are not 100% sure if your video is cached, check your Xcode logs!"]}),"\n",(0,o.jsx)(t.p,{children:"By default files expire after 30 days and the maximum cache size is 100mb."}),"\n",(0,o.jsx)(t.p,{children:"In a future release the cache might have more configurable options."})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.a)(),e.components);return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/other/caching.md",route:"/other/caching",timestamp:1711492909e3,pageMap:[{kind:"Meta",data:{index:"Introduction",installation:"Installation",component:"API",other:"Other",separator_versions:{type:"separator",title:""},updating:"Updating",changelog:{title:"Changelog",newWindow:!0,href:"https://github.com/react-native-video/react-native-video/blob/master/CHANGELOG.md"},separator_community:{type:"separator",title:""},projects:"Useful projects"}},{kind:"Folder",name:"component",route:"/component",children:[{kind:"Meta",data:{props:"Properties",drm:"DRM",ads:"Ads",events:"Events",methods:"Methods"}},{kind:"MdxPage",name:"ads",route:"/component/ads"},{kind:"MdxPage",name:"drm",route:"/component/drm"},{kind:"MdxPage",name:"events",route:"/component/events"},{kind:"MdxPage",name:"methods",route:"/component/methods"},{kind:"MdxPage",name:"props",route:"/component/props"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"other",route:"/other",children:[{kind:"Meta",data:{caching:"Caching",misc:"Misc",debug:"Debugging","new-arch":"New Architecture"}},{kind:"MdxPage",name:"caching",route:"/other/caching"},{kind:"MdxPage",name:"debug",route:"/other/debug"},{kind:"MdxPage",name:"misc",route:"/other/misc"},{kind:"MdxPage",name:"new-arch",route:"/other/new-arch"}]},{kind:"MdxPage",name:"projects",route:"/projects"},{kind:"MdxPage",name:"updating",route:"/updating"}],flexsearch:{codeblocks:!0},title:"Caching",headings:c},pageNextRoute:"/other/caching",nextraLayout:a.ZP,themeConfig:s.Z};t.default=(0,i.j)(d)},2702:function(e,t,n){"use strict";var o=n(5893);n(7294),t.Z={head:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{name:"language",content:"en"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,o.jsx)("meta",{name:"description",content:"Video component for React Native"}),(0,o.jsx)("meta",{name:"og:title",content:"React Native Video"}),(0,o.jsx)("meta",{name:"og:description",content:"A Video component for React Native"}),(0,o.jsx)("meta",{name:"og:image",content:"https://react-native-video.github.io/react-native-video/thumbnail.jpg"}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:title",content:"React Native Video"}),(0,o.jsx)("meta",{name:"twitter:description",content:"A Video component for React Native"}),(0,o.jsx)("meta",{name:"twitter:image",content:"https://react-native-video.github.io/react-native-video/thumbnail.jpg"}),(0,o.jsx)("meta",{name:"twitter:image:alt",content:"React Native Video"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,o.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap",rel:"stylesheet"})]}),logo:(0,o.jsxs)("span",{children:["\uD83C\uDFAC ",(0,o.jsx)("strong",{children:"Video component"})," for React Native"]}),faviconGlyph:"\uD83C\uDFAC",project:{link:"https://github.com/react-native-video/react-native-video"},docsRepositoryBase:"https://github.com/react-native-video/react-native-video/tree/master/docs/",footer:{text:(0,o.jsxs)("span",{children:["Built with love ❤️ by ",(0,o.jsx)("strong",{children:"React Native Community"})]})},useNextSeoProps:()=>({titleTemplate:"%s – Video"})}},5789:function(){}},function(e){e.O(0,[774,890,888,179],function(){return e(e.s=6745)}),_N_E=e.O()}]);