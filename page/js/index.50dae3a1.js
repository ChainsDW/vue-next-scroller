(function(e){function t(t){for(var r,i,a=t[0],l=t[1],s=t[2],d=0,h=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(h.length)h.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={index:0},u=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var c=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("a429")},a429:function(e,t,n){"use strict";n.r(t);var r=n("7a23");const o=Object(r["p"])("data-v-7211d5d8"),u=o((e,t,n,u,i,a)=>{const l=Object(r["l"])("scroll");return Object(r["h"])(),Object(r["d"])(l,{height:20,data:e.cols,ease:!1,speed:500,"hold-up":1e3,"show-line":2},{default:o(()=>[(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["j"])(e.cols,n=>(Object(r["h"])(),Object(r["d"])("div",{style:{height:"20px"},key:n,onClick:t[1]||(t[1]=(...t)=>e.handleSearch&&e.handleSearch(...t))},Object(r["m"])(n),1))),128))]),_:1},8,["data"])});function i(e,t,n,o,u,i){const a=Object(r["l"])("scrollChild");return Object(r["h"])(),Object(r["d"])("div",{style:e.outerHeight,onMouseenter:t[1]||(t[1]=(...t)=>e.handleMouEn&&e.handleMouEn(...t)),onMouseleave:t[2]||(t[2]=(...t)=>e.handleMouOut&&e.handleMouOut(...t))},[Object(r["e"])(a,{height:e.height,data:e.data,ease:e.ease,isFirst:!1,isHover:e.isHover,speed:e.speed,"hold-up":e.holdUp,"show-line":e.showLine},{default:Object(r["o"])(()=>[Object(r["k"])(e.$slots,"default")]),_:3},8,["height","data","ease","isHover","speed","hold-up","show-line"]),Object(r["e"])(a,{height:e.height,data:e.data,ease:e.ease,isFirst:!0,isHover:e.isHover,speed:e.speed,"hold-up":e.holdUp,"show-line":e.showLine},{default:Object(r["o"])(()=>[Object(r["k"])(e.$slots,"default")]),_:3},8,["height","data","ease","isHover","speed","hold-up","show-line"])],36)}function a(e,t,n,o,u,i){return Object(r["h"])(),Object(r["d"])("div",{ref:"scrollBox",style:e.trans},[Object(r["k"])(e.$slots,"default")],4)}var l=Object(r["f"])({name:"scrollChild",props:{height:{default:function(){return 18},type:Number},data:{default:function(){return[]},type:Array},ease:{default:function(){return!1},type:Boolean},isFirst:{default:function(){return!0},type:Boolean},isHover:{default:function(){return!1},type:Boolean},speed:{default:function(){return 1e3},type:Number},holdUp:{default:function(){return 1e3},type:Number},showLine:{default:function(){return 1},type:Number}},setup:function(e){var t,n=Object(r["i"])(0),o="ease-in-out",u="cubic-bezier(0.44, 0.44, 0.61, 0.63)",i=e.data.length*e.height+e.showLine*e.height-e.showLine*e.height,a=Object(r["b"])((function(){return{transform:"translate(0, "+n.value+"px)",transition:"transform "+e.speed+"ms "+(e.ease?o:u)+" "+e.holdUp+"ms",overflow:"hidden",position:"relative",top:"-"+i+"px",display:"flex",flexDirection:"column-reverse",justifyContent:"flex-end"}})),l=function(){e.data.length<=e.showLine||(n.value+=e.height,e.isHover||(t=setTimeout(l,e.speed+e.holdUp)))};return Object(r["n"])(n,(function(){var t=e.isFirst?i:i+e.data.length*e.height;n.value>t&&(i+=e.data.length*e.height*2)})),Object(r["g"])((function(){l(),document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState?clearTimeout(t):"visible"===document.visibilityState&&l()}))})),Object(r["n"])(e,(function(){e.isHover?e.isHover&&clearTimeout(t):l()})),{trans:a}}});l.render=a;var s=l,c=Object(r["f"])({name:"Scroll",components:{scrollChild:s},props:{height:{default:function(){return 18},type:Number},data:{default:function(){return[]},type:Array},ease:{default:function(){return!1},type:Boolean},speed:{default:function(){return 1e3},type:Number},holdUp:{default:function(){return 1e3},type:Number},showLine:{default:function(){return 1},type:Number}},setup:function(e){var t=Object(r["i"])(!1),n=Object(r["b"])((function(){return{height:e.showLine*e.height+"px",overflow:"hidden"}})),o=function(){t.value=!0},u=function(){t.value=!1};return{isHover:t,handleMouEn:o,handleMouOut:u,outerHeight:n}}});c.render=i;var d=c,h=Object(r["f"])({name:"App",data:function(){return{cols:["第一行第一行第一行第一行第一行","第二行第二行第二行第二行第二行","第三行第三行第三行第三行第三行","第四行第四行第四行第四行第四行","第五行第五行第五行第五行第五行","第六行第六行第六行第六行第六行"]}},components:{scroll:d}});h.render=u,h.__scopeId="data-v-7211d5d8";var f=h;Object(r["c"])(f).mount("#app")}});
//# sourceMappingURL=index.50dae3a1.js.map