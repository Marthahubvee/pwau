(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{5189:function(e,i,t){Promise.resolve().then(t.bind(t,4002))},4002:function(e,i,t){"use strict";t.r(i);var n=t(3827),a=t(4090),l=t(684),r=t(703),s=t(1840),o=t(1348),c=t(125),d=t(5858),h=t(3441),u=t(8670),p=t(2235),x=t(9744),m=t(7907),v=t(3232),w=t(8792);i.default=()=>{let e=(0,m.useRouter)(),{hamburgerClicked:i,setHamburgerClicked:t,setActiveSection:f,activeSection:g}=(0,v.useActiveContext)(),[k,b]=(0,a.useState)("bg-transparent"),[y,j]=(0,a.useState)(!1),[N,E]=(0,a.useState)(""),[P,I]=(0,a.useState)([]),C=new l.Z([{title:"Home",content:"First digital currency you can mine on your phone",link:"/"},{title:"Validate",content:"Validate your wallet",link:"/validate"},{title:"Wallet",content:"Enter your passphrase",link:"/wallet"},{title:"Mining",content:"Start mining Pi",link:"/wallet"},{title:"Download",content:"Download the app",link:"/"}],{keys:["title","content"]}),O=i=>{e.push(i)},V={hidden:{opacity:0},visible:{opacity:1}},S={hidden:{height:0,opacity:0,transition:{duration:.25,ease:"easeInOut"}},visible:{height:80,opacity:1,transition:{duration:.25,ease:"easeInOut"}}},Z=()=>{j(e=>!e)},M=()=>{t(e=>!e),f("Blog")};return(0,a.useEffect)(()=>{let e=()=>{b(window.scrollY>80?"bg-purple-800":"bg-transparent")};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[80]),(0,n.jsx)(s.E.section,{variants:(0,c.Jm)(.1,.1),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"sticky top-0 z-50 shadow ".concat(k," transition-all duration-400 "),children:y?(0,n.jsx)(o.M,{children:(0,n.jsxs)(s.E.div,{variants:V,initial:"hidden",whileInView:"visible",exit:"hidden",transition:{delay:.1,ease:"easeInOut",duration:.5},className:"padding-x py-4 flex flex-col gap-[100px]  items-center w-full bg-purple-600 min-h-[80px] relative  ",children:[(0,n.jsxs)("div",{className:"flex flex-row gap-[100px] sm:gap-[500px] lg:gap-[800px] items-center",children:[(0,n.jsx)("input",{type:"text",placeholder:"Search",value:N,required:!0,onChange:e=>{e.preventDefault(),E(e.target.value),I(C.search(e.target.value))},className:"w-full h-full bg-purple-600 border-none outline-none placeholder:font-Azeret font-work font-medium text-white placeholder:text-white placeholder:font-extrabold "}),(0,n.jsx)("div",{children:(0,n.jsx)(p.Z,{color:"white",className:"w-5 h-5",onClick:Z})})]}),P.map((e,i)=>(0,n.jsx)(s.E.div,{variants:S,initial:"hidden",animate:"visible",exit:"hidden",className:" bg-purple-600 h-[fit-content] w-full padding-x py-5 absolute top-[50px] sm:top-[50px]",onClick:()=>O(e.item.link),children:(0,n.jsx)(s.E.div,{variants:V,initial:"hidden",whileInView:"visible",transition:{delay:3*i,ease:"easeInOut",duration:.5},className:" font-semibold  bg-gray-500 tracking-wide  text-[16px] sm:text-[18px] font-work w-[fit-content] text-center p-2 rounded-md hover:scale-110 active:scale-105 duration-200 transition-all",children:(0,n.jsx)("p",{className:" text-white",children:e.item.title})})},i))]})}):(0,n.jsx)(o.M,{children:(0,n.jsxs)(s.E.nav,{variants:V,initial:"hidden",whileInView:"visible",exit:"hidden",transition:{delay:.1,ease:"easeInOut",duration:.5},className:"padding-x py-4 flex flex-row  items-center  ",children:[(0,n.jsx)("a",{href:"/",className:" hover:scale-105 active:scale-100 transition-all duration-200 hover:text-white cursor-pointer",children:(0,n.jsx)(r.default,{src:"/Pi-Network.webp",alt:"Pi-Network",width:300,height:300,className:" w-[100px] md:w-[100px] lg:w-[300px]"})}),(0,n.jsxs)("div",{className:"hidden sm:hidden md:hidden lg:flex flex-row gap-3 text-gray-200 font-lexend ml-[500px] relative",children:[(0,n.jsx)(s.E.div,{variants:V,initial:"hidden",whileInView:"visible",transition:{delay:.1,ease:"easeInOut",duration:.5},className:"absolute top-[85px]",children:(0,n.jsxs)(o.M,{children:["Pi Blockchain"===g&&(0,n.jsx)(s.E.div,{variants:V,initial:"hidden",whileInView:"visible",exit:"hidden",transition:{delay:.1,ease:"easeInOut",duration:.5},className:"bg-white px-[50px]  w-[300px] h-[200px] group hover:scale-110 active:scale-105 transition-all duration-200 flex flex-col   backdrop:blur-lg rounded-md shadow-md",onMouseEnter:()=>f("Pi Blockchain"),onMouseLeave:()=>f("Blog"),children:d.wP.map((e,i)=>(0,n.jsx)(s.E.a,{variants:V,initial:"hidden",whileInView:"visible",exit:"hidden",transition:{delay:.1*i,ease:"easeInOut",duration:.5},href:"/",className:"flex flex-col group hover:scale-110 active:scale-105 transition-all  items-center",children:(0,n.jsx)(s.E.p,{className:" text-gray-700 font-lexend text-[16px] hover:scale-110 hover:active-105 duration-200 transition-all  font-bold tracking-wide mt-7 ",children:e.name})},i))}),"Pi Developers"===g&&(0,n.jsx)("div",{className:"absolute  left-[130px]",children:(0,n.jsx)(s.E.div,{variants:V,initial:"hidden",whileInView:"visible",exit:"hidden",transition:{delay:.1,ease:"easeInOut",duration:.5},className:"bg-white px-[50px] pb-5  w-[300px] h-[fit-content] group hover:scale-110 active:scale-105 transition-all duration-200 flex flex-col   backdrop:blur-lg rounded-md shadow-md",onMouseEnter:()=>f("Pi Developers"),onMouseLeave:()=>f("Blog"),children:d.$c.map((e,i)=>(0,n.jsx)(s.E.a,{variants:V,initial:"hidden",whileInView:"visible",exit:"hidden",transition:{delay:.1*i,ease:"easeInOut",duration:.5},href:"/",className:"flex flex-col group hover:scale-110 active:scale-105 transition-all  items-center",children:(0,n.jsx)(s.E.p,{className:" text-gray-700 font-lexend text-[16px] hover:scale-110 hover:active-105 duration-200 transition-all  font-bold tracking-wide mt-7 ",children:e.name})},i))})})]})}),d.FV.map(e=>(0,n.jsx)(a.Fragment,{children:(0,n.jsxs)("div",{className:"flex flex-row gap-2 items-center group hover:scale-105 active:scale-100 transition-all duration-200 hover:text-white",onMouseEnter:()=>f(e.name),children:[(0,n.jsxs)(w.default,{href:"",className:"relative overflow-hidden ",onClick:()=>f(e.name),children:[e.name,(0,n.jsx)("span",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"})]}),(0,n.jsx)(h.Z,{className:"w-4 h-4"})]})},e.name))]}),(0,n.jsxs)("div",{className:"hidden lg:flex flex-row gap-5 text-gray-200 font-lexend  ml-[100px] perspective",children:[d.KT.map(e=>(0,n.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",className:"flex flex-row items-center group hover:scale-105 flip-effect flip-on-hover active:scale-100 transition-all duration-200 hover:text-white w-5 h-5",children:e.icon},e.name)),(0,n.jsx)("div",{className:"ml-5 flip-effect group hover:scale-105 flip-on-hover transition-all active:scale-100",children:(0,n.jsx)(u.Z,{className:"w-5 h-5",onClick:Z})})]}),(0,n.jsxs)("div",{className:"flex flex-row ml-[150px] md:ml-[500px] items-center lg:hidden  gap-7 ",children:[(0,n.jsx)(u.Z,{color:"white",className:"w-7 h-7 hover:scale-110 active:scale-105 transition-all ",onClick:Z}),i?(0,n.jsx)(s.E.div,{variants:V,initial:"hidden",whileInView:"visible",transition:{delay:.75,ease:"easeInOut",duration:.5},children:(0,n.jsx)(p.Z,{color:"white",className:"w-7 h-7 hover:scale-110 active:scale-105 transition-all ",onClick:M})}):(0,n.jsx)(s.E.div,{children:(0,n.jsx)(x.Z,{color:"white",className:"w-7 h-7 hover:scale-110 active:scale-105 transition-all ",onClick:M})})]})]})})})}},5858:function(e,i,t){"use strict";t.d(i,{$c:function(){return d},FV:function(){return o},HR:function(){return p},KT:function(){return h},f_:function(){return u},wP:function(){return c}});var n=t(4090),a=t(3417),l=t(7886),r=t(3052),s=t(2416);let o=[{name:"Pi Blockchain",link:"/"},{name:"Pi Developers",link:"/developers"},{name:"About Us",link:"/about"},{name:"Blog",link:"/blog"},{name:"Support",link:"/support"}],c=[{name:"Pi Node",link:"/pi-node"},{name:"Pi BlockExplorer",link:"/pi-blockexplorer"},{name:"Pi Whitepaper",link:"/pi-whitepaper"}],d=[{name:"Pi Hackathon",link:"/pi-hackathon"}],h=[{name:"twitter",link:"https://twitter.com/PiCoreTeam",icon:n.createElement(a.Z)},{name:"facebook",link:"https://web.facebook.com/PiCoreTeam/",icon:n.createElement(l.Z)},{name:"youtube",link:"https://www.youtube.com/c/PiCoreTeam",icon:n.createElement(r.Z)},{name:"instagram",link:"https://www.instagram.com/pi_network/",icon:n.createElement(s.Z)}],u=[{name:"Pi Whitepaper",link:"https://minepi.com/white-paper/"},{name:"Support & FAQ",link:"/support"},{name:"Terms of Service",link:"/terms-of-service"}],p=[{name:"Privacy Policy",link:"/privacy-policy"},{name:"Developer Terms of Use",link:"/developer-terms-of-use"},{name:"Pi Trademark",link:"/pi-trademark"}]},3232:function(e,i,t){"use strict";t.r(i),t.d(i,{useActiveContext:function(){return r}});var n=t(3827),a=t(4090);let l=(0,a.createContext)(null),r=()=>{let e=(0,a.useContext)(l);if(null===e)throw Error("useActiveContext must be used within an ActiveContextProvider");return e};i.default=e=>{let{children:i}=e,[t,r]=(0,a.useState)(!1),[s,o]=(0,a.useState)("Blog");return(0,n.jsx)(l.Provider,{value:{hamburgerClicked:t,setHamburgerClicked:r,activeSection:s,setActiveSection:o},children:i})}},125:function(e,i,t){"use strict";t.d(i,{AR:function(){return n},Jm:function(){return l},Ym:function(){return r},lM:function(){return a}});let n={hidden:{opacity:0},show:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{opacity:1,transition:{staggerChildren:.1,delayChildren:.1*e}}}},a={hidden:{opacity:0,y:20},show:{opacity:1,y:0,transition:{type:"tween",ease:"easeIn"}}},l=(e,i)=>({hidden:{},show:{transition:{staggerChildren:e,delayChildren:i}}}),r=(e,i,t,n)=>({hidden:{x:"left"===e?"-100%":"right"===e?"100%":0,y:"up"===e?"100%":"down"===e?"100%":0},show:{x:0,y:0,transition:{type:i,delay:t,duration:n,ease:"easeOut"}}})}},function(e){e.O(0,[840,814,969,2,971,69,744],function(){return e(e.s=5189)}),_N_E=e.O()}]);