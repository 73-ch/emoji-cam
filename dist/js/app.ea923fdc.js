(function(e){function t(t){for(var i,o,s=t[0],c=t[1],h=t[2],d=0,l=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(l.length)l.shift()();return a.push.apply(a,h||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var h=0;h<s.length;h++)t(s[h]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"035a":function(e,t,n){"use strict";var i=n("98a4"),r=n.n(i);r.a},1:function(e,t){},2:function(e,t){},3:function(e,t){},"326a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],o=(n("5c0b"),n("2877")),s={},c=Object(o["a"])(s,r,a,!1,null,null,null),h=c.exports,u=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("renderer",{staticClass:"renderer"})],1)},l=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("canvas",{ref:"canvas",attrs:{id:"main-canvas"}})])},m=[],p=(n("96cf"),n("1da1")),v=n("d4ec"),w=n("bee2"),_={audio:!1,video:!0},g=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;Object(v["a"])(this,e),this.constraints=t,this.camera_size=[0,0],this.camera_aspect_ratio=1,this.createCameraStream().then((function(){}),(function(e){console.error(e)}))}return Object(w["a"])(e,[{key:"getVideoElement",value:function(){return this.video_element||this.createHiddenVideo(),this.video_element}},{key:"getCameraStream",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.stream){e.next=3;break}return e.next=3,this.createCameraStream();case 3:return e.abrupt("return",this.stream);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"createCameraStream",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(navigator.mediaDevices){e.next=2;break}throw new Error("mediaDevices not found");case 2:return e.next=4,navigator.mediaDevices.getUserMedia(this.constraints).catch((function(e){console.error(e)}));case 4:this.stream=e.sent;try{this.camera_size=[this.stream.getVideoTracks()[0].getSettings().width,this.stream.getVideoTracks()[0].getSettings().height],this.camera_aspect_ratio=this.camera_size[0]/this.camera_size[1]}catch(t){console.error("video track is invalid")}case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"createHiddenVideo",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.camera_size[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.camera_size[1];return this.video_element=document.createElement("video"),this.stream?this.video_element.srcObject=this.stream:this.createCameraStream().then((function(){e.video_element.srcObject=e.stream})),this.video_element.muted=!0,this.video_element.width=t,this.video_element.height=n,this.video_element.play(),this.video_element}}]),e}(),b=n("45eb"),y=n("7e84"),j=n("262e"),O=n("2caf"),k=function(){function e(){Object(v["a"])(this,e)}return Object(w["a"])(e,[{key:"draw",value:function(){}}]),e}(),x=function(e){Object(j["a"])(n,e);var t=Object(O["a"])(n);function n(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new T;return Object(v["a"])(this,n),e=t.call(this),e.ctl=i,e.target="😎",e.position=[.5*e.ctl.width,.5*e.ctl.height],e.font_size=500,e.emoji_lookup={angry:"😡",disgusted:"🤢",fearful:"😰",happy:"🤩",neutral:"🙂",sad:"🥺",surprised:"😳"},e}return Object(w["a"])(n,[{key:"setEmotion",value:function(e){e in this.emoji_lookup?this.target=this.emoji_lookup[e]:console.error("given ".concat(e," is not defined"))}},{key:"setPosition",value:function(e,t){this.position=[e,t]}},{key:"draw",value:function(){Object(b["a"])(Object(y["a"])(n.prototype),"draw",this).call(this),this.ctl.ctx.font="".concat(this.font_size,"px serif"),this.ctl.ctx.fillText(this.target,this.position[0]-.5*this.font_size,this.position[1]+.5*this.font_size)}}]),n}(k),E=(n("d3b7"),n("3ca3"),n("ddb0"),n("ab39")),z="./models",S=68,R=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new g;Object(v["a"])(this,e),this.camera=t,this.landmarks=new Array(S),this.ready=!1,this.updated=!1,this.result={},this.position=[0,0],this.height=0}return Object(w["a"])(e,[{key:"load",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([E["c"].tinyFaceDetector.loadFromUri(z),E["c"].faceLandmark68Net.loadFromUri(z),E["c"].faceRecognitionNet.loadFromUri(z),E["c"].faceExpressionNet.loadFromUri(z)]).catch((function(e){throw e}));case 2:return this.ready=!0,e.abrupt("return","model loaded");case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ready){e.next=2;break}throw new Error("model is not loaded.");case 2:return e.next=4,E["b"](this.camera.getVideoElement(),new E["a"]).withFaceLandmarks().withFaceExpressions();case 4:t=e.sent,e.prev=5,this.result=E["d"](t,{width:this.camera.getVideoElement().width,height:this.camera.getVideoElement().height}),n=this.result.detection.box,this.expressions=t.expressions,this.position=[n.x+.5*n.width,n.y+.2*n.height],this.height=.7*this.height+.3*n.height,this.updated=!0,e.next=18;break;case 14:return e.prev=14,e.t0=e["catch"](5),this.updated=!1,e.abrupt("return","detection failed");case 18:case"end":return e.stop()}}),e,this,[[5,14]])})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),P=(n("caad"),n("13d5"),n("b64b"),n("2532"),function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new R,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new x;Object(v["a"])(this,e),this.face_detector=t,this.emoji_renderer=n,this._current_emotion="neutral",this.EMOTION_LIST=["angry","disgusted","fearful","happy","neutral","sad","surprised"]}return Object(w["a"])(e,[{key:"setParams",value:function(){}},{key:"update",value:function(){var e=this,t=Object.keys(this.face_detector.expressions).reduce((function(t,n,i){return e.face_detector.expressions[t]>e.face_detector.expressions[n]?t:n}));this.emoji_renderer.setEmotion(t)}},{key:"current_emotion",get:function(){return this._current_emotion}},{key:"currentEmotion",set:function(e){this.EMOTION_LIST.includes(e)?this._current_emotion=e:console.error("cannot set current emotion: ".concat(e))}}]),e}()),T=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new g;Object(v["a"])(this,e),this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.render_status=!1,this.resized(),this.camera=n,this.emoji_renderer=new x(this),this.face_detector=new R(this.camera),this.face_detector.load().then((function(){}),console.error),this.emotion_controller=new P(this.face_detector,this.emoji_renderer),window.addEventListener("resize",this.resized.bind(this))}return Object(w["a"])(e,[{key:"start",value:function(){this.render_status=!0,this.draw()}},{key:"stop",value:function(){this.render_status=!1}},{key:"draw",value:function(){var e=this;this.ctx.clearRect(0,0,this.width,this.height),this.face_detector.ready&&this.face_detector.update().then((function(){e.emoji_renderer.setPosition(e.face_detector.position[0],e.face_detector.position[1]),e.emoji_renderer.font_size=1.4*e.face_detector.height,e.emotion_controller.update()})),this.emoji_renderer.draw(),this.render_status&&requestAnimationFrame(this.draw.bind(this))}},{key:"resized",value:function(){this.width=this.canvas.width,this.height=this.canvas.height}}]),e}(),C={name:"Renderer",mounted:function(){var e=this;this.camera=new g,this.camera.createCameraStream().then((function(t){e.videoElement=e.camera.createHiddenVideo(window.innerWidth,window.innerHeight),e.resized(),e.$el.appendChild(e.videoElement),e.controller=new T(e.$refs.canvas,e.camera),e.controller.start(),window.addEventListener("resize",e.resized.bind(e))}))},methods:{resized:function(){window.innerWidth>window.innerHeight*this.camera.camera_aspect_ratio?(this.videoElement.width=window.innerHeight*this.camera.camera_aspect_ratio,this.videoElement.height=window.innerHeight):(this.videoElement.width=window.innerWidth,this.videoElement.height=window.innerWidth/this.camera.camera_aspect_ratio),this.$refs.canvas.width=this.videoElement.width,this.$refs.canvas.height=this.videoElement.height}}},M=C,V=(n("ae1e"),Object(o["a"])(M,f,m,!1,null,"b148e526",null)),F=V.exports,$={name:"Main",components:{Renderer:F}},H=$,L=(n("035a"),Object(o["a"])(H,d,l,!1,null,"5e39d016",null)),N=L.exports;i["a"].use(u["a"]);var U=[{path:"/",name:"Main",component:N}],D=new u["a"]({routes:U}),I=D;i["a"].config.productionTip=!1,new i["a"]({router:I,render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("9c0c"),r=n.n(i);r.a},"98a4":function(e,t,n){},"9c0c":function(e,t,n){},ae1e:function(e,t,n){"use strict";var i=n("326a"),r=n.n(i);r.a}});
//# sourceMappingURL=app.ea923fdc.js.map