(this["webpackJsonpreact-three-fiber-challenge"]=this["webpackJsonpreact-three-fiber-challenge"]||[]).push([[0],{34:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r,a,c,u=n(5),i=n.n(u),s=n(28),o=n.n(s),f=(n(34),n(10)),l=n.n(f),d=n(13),h=n(9),b=n(26),j=n(7),v=n(42),p=n(11),x=Object(u.forwardRef)((function(e,t){var n=e.shader,r=e.analyser,a=e.audioData,c=Object(u.useRef)({iTime:{value:0},iResolution:{value:new j.Vector3},iChannel0:{value:new j.DataTexture},iChannel1:{value:new j.DataTexture},iChannel2:{value:new j.DataTexture},iChannel3:{value:new j.DataTexture}});r&&(c.current.iChannel0={value:new j.DataTexture(a,r.fftSize/8,1,j.LuminanceFormat)},c.current.iChannel1={value:new j.DataTexture(a,r.fftSize/8,1,j.LuminanceFormat)},c.current.iChannel2={value:new j.DataTexture(a,r.fftSize/8,1,j.LuminanceFormat)},c.current.iChannel3={value:new j.DataTexture(a,r.fftSize/8,1,j.LuminanceFormat)});var i=function(){var e=document.getElementById("fiberCanvas");c.current.iResolution.value.set(e.offsetWidth,e.offsetHeight,1)};return Object(u.useEffect)((function(){i(),window.addEventListener("resize",(function(){return i()}))}),[]),Object(b.b)((function(){null===r||void 0===r||r.getByteFrequencyData(a),t.current.material.uniforms.iTime.value+=.015,t.current.material.uniforms.iChannel0.value.needsUpdate=!0})),Object(p.jsx)(v.a,{ref:t,args:[15,15],children:Object(p.jsx)("shaderMaterial",{args:[{uniforms:c.current,fragmentShader:n}]})})})),m=(n(39),function(){var e=Object(u.useRef)(11),t=Object(u.useRef)(null),n=Object(u.useState)(),i=Object(h.a)(n,2),s=i[0],o=i[1],f=Object(u.useState)(!1),j=Object(h.a)(f,2),v=j[0],m=j[1],O=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./".concat(t,".json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.shader);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var t=Object(d.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((r=e.current+parseInt(n.target.value))<1||r>16)){t.next=3;break}return t.abrupt("return");case 3:return e.current=r,t.t0=o,t.next=7,O(r);case 7:t.t1=t.sent,(0,t.t0)(t.t1);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(e){return new Promise((function(t){return setTimeout(t,e)}))},g=function(){var n=Object(d.a)(l.a.mark((function n(){var r,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(1!==e.current){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,O(e.current-1);case 4:r=n.sent,a=0;case 6:if(!(a<100)){n.next=18;break}return t.current.material.fragmentShader=r,t.current.material.needsUpdate=!0,n.next=11,C(6);case 11:return t.current.material.fragmentShader=s,t.current.material.needsUpdate=!0,n.next=15,C(6);case 15:a++,n.next=6;break;case 18:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),k=function(){var t=Object(d.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e.current);case 2:n=t.sent,o(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(u.useEffect)((function(){k()}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{id:"next",children:[Object(p.jsx)("button",{onClick:w,value:1,children:"Next"}),Object(p.jsx)("button",{onClick:g,value:1,children:"rapid"}),!r&&Object(p.jsx)("button",{onClick:function(){v||(r=new AudioContext,a=r.createAnalyser(),c=new Uint8Array(a.frequencyBinCount),navigator.mediaDevices.getUserMedia({audio:!0}).then((function(e){r.createMediaStreamSource(e).connect(a)})),m(!0))},children:"Mic"})]}),Object(p.jsx)("div",{id:"prev",children:Object(p.jsx)("button",{onClick:w,value:-1,children:"Previous"})}),Object(p.jsx)(b.a,{id:"fiberCanvas",children:s&&Object(p.jsx)(x,{ref:t,shader:s,analyser:a,audioData:c})})]})}),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,u=t.getTTFB;n(e),r(e),a(e),c(e),u(e)}))};o.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root")),O()}},[[40,1,2]]]);
//# sourceMappingURL=main.1a0e15d1.chunk.js.map