(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(7800)}])},7800:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return m}});var n=l(5893),t=l(7294);let a=()=>{let[e,s]=(0,t.useState)(new Date);return(0,t.useEffect)(()=>{let e=setInterval(()=>{s(new Date)},1e3);return()=>{clearInterval(e)}},[]),e.toLocaleTimeString("en-US",{hour12:!1,hour:"numeric",minute:"numeric"})},r=["./dawn.svg","./sunrise.svg","./sun.svg","./haze.svg","./evening.svg","./night.svg"],c=["Fajr","Sunrise","Dhuhr","Asr","Maghrib","Isha"],i=e=>{let{prayerTime:s}=e,l=a(),t=Object.values(s.times)[0],i=t.findIndex((e,s,n)=>{let t=n[s+1];return t?e<=l&&l<t:e<l}),x=c[i];return(0,n.jsxs)("div",{className:"w-full flex flex-row justify-around max-md:flex-col max-md:gap-4",children:[(0,n.jsxs)("div",{className:"flex-1 flex flex-row justify-around max-w-lg max-md:max-w-full max-sm:flex-col max-sm:mb-8",children:[(0,n.jsxs)("div",{className:"flex flex-col text-center",children:[(0,n.jsx)("div",{className:"text-xl font-semibold",children:s.place.city}),(0,n.jsx)("div",{className:"text-lg",children:s.place.country})]}),(0,n.jsx)("div",{className:"flex flex-col items-center",children:(0,n.jsx)("img",{src:r[i]||"fog.svg",className:"max-w-[5rem]"})}),(0,n.jsxs)("div",{className:"flex flex-col text-center",children:[(0,n.jsx)("div",{className:"text-2xl",children:l}),(0,n.jsx)("div",{className:"text-tiny",children:x})]})]}),(0,n.jsx)("div",{className:"flex-1 flex flex-row gap-4 justify-around max-w-xl max-md:max-w-full max-sm:flex-col",children:c.map((e,s)=>(0,n.jsxs)("div",{className:"flex flex-col text-center",children:[(0,n.jsx)("div",{className:"text-xl font-semibold",children:e}),(0,n.jsx)("div",{className:"text-lg",children:t[s]})]}))})]})},x=()=>{let[e]=function(){let[e,s]=(0,t.useState)(void 0);return(0,t.useEffect)(()=>{fetch("https://namaz-vakti.vercel.app/api/timesFromPlace?country=Netherlands&region=Groningen&city=Groningen&timezoneOffset=60&days=1").then(e=>e.json()).then(e=>{s(e)}).catch(e=>{console.error(e)})},[]),[e]}();return(0,n.jsxs)("div",{className:"w-screen h-screen flex justify-center items-center",children:[e&&(0,n.jsx)(i,{prayerTime:e}),!e&&(0,n.jsx)("div",{children:"Loading..."})]})};var m=x}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);