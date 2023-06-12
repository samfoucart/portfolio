(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},241:function(e,t,c){},242:function(e,t,c){},243:function(e,t,c){},244:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c(16),s=c.n(n),o=(c(22),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,245)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),i(e),n(e),s(e),o(e)}))}),a=c(4),r=c(2),l=(c(23),c(24),c(0));function j(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"footer-spacer"}),Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsx)("p",{children:Object(l.jsx)("i",{children:"Sam Foucart - 2022"})}),Object(l.jsx)(a.b,{to:"/",children:"Back to Home"})]})]})}c(26);function d(){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("nav",{className:"top-nav",children:[Object(l.jsx)(a.b,{to:"/",children:"Home"}),Object(l.jsx)(a.b,{to:"/posts",children:"Blog"}),Object(l.jsx)(a.b,{to:"/projects",children:"Projects"}),Object(l.jsx)(a.b,{to:"/contact",children:"Contact/About"})]}),Object(l.jsx)("div",{className:"top-nav-spacer"})]})}c(27);function h(e){var t=e.children;return Object(l.jsxs)("div",{className:"layout",children:[Object(l.jsx)(d,{}),t,Object(l.jsx)(j,{})]})}var u=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(h,{children:Object(l.jsx)(r.a,{})})})};c(28);function b(){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"home-container",children:[Object(l.jsx)("div",{className:"home-headshot",children:Object(l.jsx)("img",{src:"/portfolio/images/home/circle-headshot.png",alt:"circle-headshot",width:"256",height:"256"})}),Object(l.jsxs)("div",{className:"home-textfields",children:[Object(l.jsx)("h1",{children:"Hello!"}),Object(l.jsx)("p",{children:"I am Sam Foucart, a computer engineer from southeast Ohio. I am currently working at NICE CXone on the CXone recording platform."}),Object(l.jsx)("p",{children:"This website is a home for my engineering blog and side projects. It was originally made to learn React, but I have been adding more too it as time goes on. Although I'm not formally a frontend developer, this still shows a demonstration of my work."})]})]}),Object(l.jsx)("img",{src:"/portfolio/images/home/IMG_5120.jpeg",style:{objectFit:"scale-down",flexShrink:1,width:"100%",height:"100%"}})]})}var m=c(5),p=c(11),O=c(17),x=c.n(O),f=(c(29),c(12)),g=c.n(f);function v(){var e=Object(i.useState)({loading:!0,failed:!1,post:""}),t=Object(m.a)(e,2),c=t[0],n=t[1],s=Object(r.h)();return Object(i.useEffect)((function(){p.marked.setOptions({highlight:function(e,t){var c=g.a.getLanguage(t)?t:"plaintext";return g.a.highlight(e,{language:c}).value},langPrefix:"hljs language-"}),fetch("/portfolio"+"/posts-raw/".concat(s.postId,".md")).then((function(e){return e.text()})).then((function(e){var t=x.a.sanitize(p.marked.parse(e));n({loading:!1,failed:!1,post:t})})).catch((function(e){console.log(e),n({loading:!1,failed:!0,post:""})}))}),[s]),Object(l.jsx)("div",{className:"post-container",children:!0===c.loading?Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:"Loading"})}):!1===c.loading&&!0===c.failed?Object(l.jsx)("div",{children:Object(l.jsxs)("p",{children:["Failed to load ",s.postId]})}):Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:c.post},style:{overflowWrap:"break-word"}})})}c(241);function w(){var e,t=Object(i.useState)(null),c=Object(m.a)(t,2),n=c[0],s=c[1],o=Object(r.f)();return Object(i.useEffect)((function(){return fetch("/portfolio/posts-raw/posts.json").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return e}));s(t)})),function(){s(null)}}),[o]),Object(l.jsx)("div",{children:(e=n,null==e?Object(l.jsx)("div",{className:"post-list-container",children:Object(l.jsx)("p",{children:"Loading..."})}):Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"post-list-container",children:Object(l.jsx)("div",{className:"individual-post-metadata",children:e.map((function(e){return Object(l.jsxs)(a.b,{to:"/posts/".concat(e.id),children:[Object(l.jsx)("h2",{children:e.title}),Object(l.jsxs)("div",{className:"individual-post-metadata-inline",children:[Object(l.jsxs)("p",{children:["Author: ",Object(l.jsx)("i",{children:e.author})]}),Object(l.jsxs)("p",{children:["Date Created: ",Object(l.jsx)("i",{children:e.date_created})]}),Object(l.jsxs)("p",{children:["Date Last Updated: ",Object(l.jsx)("i",{children:e.date_last_updated})]})]})]},e.id)}))})})}))})}c(242);var _=[{title:"Fourier Heat Equation Interactive WebGL Demonstration",description:"A lit, shaded mesh that over time approaches a steady state temperature. This was my first project made in WebGL and was completed as the final project of CS4250 of Ohio University.",image:"/images/projects/mesh_thumb.png",url:"fourier_heat_equation_interactive_webgl_demonstation",outside_url:"https://samfoucart.github.io/Fourier-Series-Visualization/index.html",id:1},{title:"Micromouse Maze Solving Demonstration",description:"A randomly generated maze and a controllable mouse that is able to solve the maze. This project was made during my sophomore year at Ohio University as part of IEEE.",image:"/images/projects/micromouse_thumb.png",url:"micromouse_maze_solving_demonstration",outside_url:"https://samfoucart.github.io/Ohio-University-Micromouse/simulator/index.html",id:2},{title:"Electromagnetic Spectral Data Collector/Viewer",description:"An Android application that is able to collect, plot, and save data from an Ocean Optics USB2000 spectrometer. This project was made as part of the PACE program at Ohio University.",image:"/images/projects/zoomed-spectra.png",url:"electromagnetic_spectral_data_collector",outside_url:"https://github.com/samfoucart/oueecs_SpectralDataViewer",id:3}];function N(){var e,t=Object(i.useState)(null),c=Object(m.a)(t,2),n=c[0],s=c[1],o=Object(r.f)();return Object(i.useEffect)((function(){return s(_),function(){s(null)}}),[o]),Object(l.jsx)("div",{children:(e=n,null==e?Object(l.jsx)("div",{className:"project-list-container",children:Object(l.jsx)("p",{children:"Loading..."})}):Object(l.jsx)("div",{className:"project-list-container",children:Object(l.jsx)("div",{className:"project-metadata",children:e.map((function(e){return Object(l.jsx)("a",{href:e.outside_url?"".concat(e.outside_url):"".concat("/portfolio","/projects/").concat(e.url),children:Object(l.jsxs)("div",{className:"project-outline",children:[Object(l.jsx)("img",{src:"/portfolio"+e.image,alt:e.title,width:"128",height:"128"}),Object(l.jsxs)("div",{className:"project-text",children:[Object(l.jsx)("h2",{children:e.title}),Object(l.jsx)("p",{children:e.description})]})]})},e.id)}))})}))})}c(243);function y(){return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"contact-container",children:[Object(l.jsx)("h1",{children:"You can reach me at:"}),Object(l.jsxs)("div",{className:"contact-row",children:[Object(l.jsx)("a",{children:"samfoucart25@gmail.com"}),Object(l.jsx)("a",{children:"linkedin.com/in/samfoucart"}),Object(l.jsx)("a",{children:"github.com/samfoucart"})]}),Object(l.jsx)("div",{className:"contact-row",children:Object(l.jsx)("p",{children:"Phone: (740) 785-8278"})}),Object(l.jsx)("h2",{children:"Work Experience"}),Object(l.jsxs)("div",{className:"contact-work-experience-row",children:[Object(l.jsx)("h3",{children:"NICE CXone"}),Object(l.jsx)("p",{children:"Software Engineer"}),Object(l.jsx)("p",{children:"August 2021 - Current"})]})]})})}function I(){return Object(l.jsx)("div",{children:Object(l.jsx)(a.a,{children:Object(l.jsx)(r.d,{children:Object(l.jsxs)(r.b,{path:"/",element:Object(l.jsx)(u,{}),children:[Object(l.jsx)(r.b,{index:!0,element:Object(l.jsx)(b,{})}),Object(l.jsx)(r.b,{path:"posts",element:Object(l.jsx)(w,{})}),Object(l.jsx)(r.b,{path:"posts/:postId",element:Object(l.jsx)(v,{})}),Object(l.jsx)(r.b,{path:"projects",element:Object(l.jsx)(N,{})}),Object(l.jsx)(r.b,{path:"contact",element:Object(l.jsx)(y,{})})]})})})})}s.a.render(Object(l.jsx)(I,{}),document.getElementById("root")),o()},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){}},[[244,1,2]]]);
//# sourceMappingURL=main.8ae4ab02.chunk.js.map