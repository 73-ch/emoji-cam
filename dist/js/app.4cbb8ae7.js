(function(e){function t(t){for(var i,n,s=t[0],c=t[1],u=t[2],l=0,h=[];l<s.length;l++)n=s[l],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&h.push(a[n][0]),a[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(h.length)h.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],i=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(i=!1)}i&&(o.splice(t--,1),e=n(n.s=r[0]))}return e}var i={},a={app:0},o=[];function n(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=i,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1:function(e,t){},2:function(e,t){},"2bfd":function(e,t,r){"use strict";var i=r("5854"),a=r.n(i);a.a},3:function(e,t){},"38fd":function(e,t,r){},"44a5":function(e,t,r){"use strict";var i=r("afd7"),a=r.n(i);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[],n=(r("5c0b"),r("2877")),s={},c=Object(n["a"])(s,a,o,!1,null,null,null),u=c.exports,d=r("8c4f"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main"},[r("full-window-loading",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]}),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.policy_checked,expression:"!policy_checked"}],staticClass:"policy-check"},[r("p",[e._v(" 本サイトは認識結果の調査およびCookieを使用しております．詳しくは "),r("router-link",{attrs:{to:"/privacy_policy"}},[e._v("プライバシーポリシー")]),e._v("をご覧ください．本サイトの利用を続けることでプライバシーポリシーに同意するものとします． ")],1),r("button",{on:{click:function(t){e.policy_checked=!0}}},[e._v("閉じる")])]),r("controller",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],on:{"background-color-changed":e.setBackgroundColor}}),r("renderer",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"renderer",on:{loaded:function(t){e.loading=!1}}})],1)},h=[],v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("canvas",{ref:"canvas",attrs:{id:"main-canvas",width:"300",height:"200"}}),r("img",{directives:[{name:"show",rawName:"v-show",value:e.background_enable,expression:"background_enable"}],ref:"background_img",attrs:{id:"background-img",alt:"background image"}})])},m=[],p=(r("4de4"),r("45fc"),r("b64b"),r("d3b7"),r("3ca3"),r("ddb0"),r("b85c")),f=(r("96cf"),r("1da1")),g=r("d4ec"),_=r("bee2"),b={audio:!1,video:!0},k=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;Object(g["a"])(this,e),this.constraints=t,this.camera_size=[0,0],this.camera_aspect_ratio=1}return Object(_["a"])(e,[{key:"getVideoElement",value:function(){return this.video_element||this.createHiddenVideo(),this.video_element}},{key:"getCameraStream",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.stream){e.next=3;break}return e.next=3,this.createCameraStream();case 3:return e.abrupt("return",this.stream);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"setDeviceId",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.constraints.video.deviceId||this.constraints.video.deviceId!==t){e.next=2;break}return e.abrupt("return");case 2:return this.constraints.video={},this.constraints.video.deviceId=t,e.next=6,this.createCameraStream();case 6:this.setStreamToVideo();case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"createCameraStream",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,r,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(navigator.mediaDevices){e.next=2;break}throw new Error("mediaDevices not found");case 2:if(this.stream){t=Object(p["a"])(this.stream.getTracks());try{for(t.s();!(r=t.n()).done;)i=r.value,i.stop()}catch(o){t.e(o)}finally{t.f()}}return e.next=5,navigator.mediaDevices.getUserMedia(this.constraints).catch((function(e){console.error(e)}));case 5:return this.stream=e.sent,e.prev=6,a=this.stream.getVideoTracks()[0],this.camera_size=[a.getSettings().width,a.getSettings().height],this.camera_aspect_ratio=this.camera_size[0]/this.camera_size[1],e.abrupt("return",a.getCapabilities().deviceId);case 13:e.prev=13,e.t0=e["catch"](6),console.error("video track is invalid");case 16:case"end":return e.stop()}}),e,this,[[6,13]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"createHiddenVideo",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.camera_size[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.camera_size[1];return this.video_element=document.createElement("video"),this.video_element.width=e,this.video_element.height=t,this.video_element.muted=!0,this.setStreamToVideo(),this.video_element}},{key:"setStreamToVideo",value:function(){var e=this;this.stream?this.video_element.srcObject=this.stream:this.createCameraStream().then((function(){e.video_element.srcObject=e.stream})),this.video_element.play()}}]),e}(),w=(r("4160"),r("13d5"),r("fb6a"),r("07ac"),r("159b"),r("45eb")),y=r("7e84"),j=r("262e"),x=r("2caf"),$=function(){function e(){Object(g["a"])(this,e)}return Object(_["a"])(e,[{key:"draw",value:function(){}}]),e}(),O=function(e){Object(j["a"])(r,e);var t=Object(x["a"])(r);function r(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new P;return Object(g["a"])(this,r),e=t.call(this),e.ctl=i,e.targets="😎",e._emotions=[],e.before_square=[],e.squares=[],e.size_adjust=1,e.ctl.ctx.font="500px serif",e.emoji_lookup={angry:"😡",disgusted:"😟",fearful:"😨",happy:"🤩",neutral:"🙂",sad:"🥺",surprised:"😳"},e.resetStatics(),e}return Object(_["a"])(r,[{key:"resetStatics",value:function(){this.statics={angry:0,disgusted:0,fearful:0,happy:0,neutral:0,sad:0,surprised:0}}},{key:"getStaticsJson",value:function(){var e=this,t=Object.values(this.statics).reduce((function(e,t){return e+t})),r={};return Object.keys(this.statics).forEach((function(i){r[i]=e.statics[i]/t})),this.resetStatics(),r}},{key:"getStaticsText",value:function(){var e=this,t="";return Object.keys(this.statics).sort().forEach((function(r){t+=e.statics[r]+"\t"})),t=t.slice(0,-1),this.resetStatics(),t}},{key:"setSquare",value:function(e){this.squares=[[e]]}},{key:"setSquares",value:function(e){this.squares=e}},{key:"draw",value:function(){var e=this;Object(w["a"])(Object(y["a"])(r.prototype),"draw",this).call(this);var t=this.squares.length;this.squares.forEach((function(r,i){e.squares.length===e.before_square.length&&e.before_square[i].distance(r)<100&&r.interpolate(e.before_square[i],.1);var a=r.height*e.size_adjust;e.ctl.ctx.font="".concat(Math.floor(a),"px serif"),e.ctl.ctx.textAlign="center",e.ctl.ctx.fillText(e.emoji_lookup[e._emotions[i]],r.position[0],r.position[1]+.5*a),e.statics[e._emotions[i]]+=1/t||0})),this.before_square=this.squares}},{key:"emotions",set:function(e){this._emotions=e}}]),r}($),E=(r("d81d"),r("ab39")),S=function(){function e(t,r){Object(g["a"])(this,e),this.position=t,this.height=r}return Object(_["a"])(e,[{key:"interpolate",value:function(e,t){this.position=this.position.map((function(r,i){return r*t+e.position[i]*(1-t)})),this.height=this.height*t+e.height*(1-t)}},{key:"distance",value:function(e){return Math.sqrt(Math.pow(this.position[0]-e.position[0],2)+(this.position[1]-e.position[1]))}}]),e}(),C="./models",z=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new k;Object(g["a"])(this,e),this.camera=t,this.ready=!1,this.updated=!1,this.results=[],this.squares=[],this.expressions=[]}return Object(_["a"])(e,[{key:"load",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([E["c"].ssdMobilenetv1.loadFromUri(C),E["c"].faceExpressionNet.loadFromUri(C)]).catch((function(e){throw e}));case 2:return this.ready=!0,e.abrupt("return","model loaded");case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,r,i,a,o,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ready){e.next=2;break}throw new Error("model is not loaded.");case 2:return e.next=4,E["b"](this.camera.getVideoElement(),new E["a"]).withFaceExpressions();case 4:t=e.sent,e.prev=5,this.results=t.map((function(e){return E["d"](e,{width:n.camera.getVideoElement().width,height:n.camera.getVideoElement().height})})),this.squares=[],this.expressions=[],r=Object(p["a"])(this.results);try{for(r.s();!(i=r.n()).done;)a=i.value,o=a.detection.box,this.expressions.push(a.expressions),this.squares.push(new S([o.x+.5*o.width,o.y+.2*o.height],o.height))}catch(s){r.e(s)}finally{r.f()}this.updated=!0,e.next=18;break;case 14:return e.prev=14,e.t0=e["catch"](5),this.updated=!1,e.abrupt("return","detection failed");case 18:case"end":return e.stop()}}),e,this,[[5,14]])})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),N=(r("caad"),r("2532"),function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new z,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new O;Object(g["a"])(this,e),this.face_detector=t,this.emoji_renderer=r,this._current_emotion="neutral",this.manual_mode=!1,this.EMOTION_LIST=["angry","disgusted","fearful","happy","neutral","sad","surprised"]}return Object(_["a"])(e,[{key:"setParams",value:function(){}},{key:"update",value:function(){var e,t=[],r=Object(p["a"])(this.face_detector.expressions);try{var i=function(){var r=e.value;t.push(Object.keys(r).reduce((function(e,t,i){return r[e]>r[t]?e:t})))};for(r.s();!(e=r.n()).done;)i()}catch(a){r.e(a)}finally{r.f()}this.emoji_renderer.emotions=t}},{key:"current_emotion",get:function(){return this._current_emotion}},{key:"currentEmotion",set:function(e){this.EMOTION_LIST.includes(e)?this._current_emotion=e:console.error("cannot set current emotion: ".concat(e))}}]),e}()),P=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new k;Object(g["a"])(this,e),this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.render_status=!1,this.resized(),this.camera=r,this.emoji_renderer=new O(this),this.face_detector=new z(this.camera),this.emotion_controller=new N(this.face_detector,this.emoji_renderer),window.addEventListener("resize",this.resized.bind(this))}return Object(_["a"])(e,[{key:"load",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.face_detector.load().catch(console.error);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"start",value:function(){this.render_status=!0,this.draw()}},{key:"stop",value:function(){this.render_status=!1}},{key:"draw",value:function(){var e=this;this.ctx.clearRect(0,0,this.width,this.height),this.face_detector.ready&&this.face_detector.update().then((function(){e.emoji_renderer.setSquares(e.face_detector.squares),e.emotion_controller.update()})),this.emoji_renderer.draw(),this.render_status&&requestAnimationFrame(this.draw.bind(this))}},{key:"resized",value:function(){this.width=this.canvas.width,this.height=this.canvas.height}}]),e}(),q={name:"Renderer",data:function(){return{background_enable:!1,background_aspect:1}},mounted:function(){var e=this,t={audio:!1,video:!0};localStorage.struct&&(t.video={deviceId:JSON.parse(localStorage.struct).camera_device_id}),this.camera=new k(t),this.controller=new P(this.$refs.canvas,this.camera),Promise.all([this.camera.createCameraStream(),this.controller.load()]).then((function(t){e.videoElement=e.camera.createHiddenVideo(window.innerWidth,window.innerHeight),e.resized(),e.$el.appendChild(e.videoElement),e.controller.start(),e.$root.$emit("stream_created",t[0]),window.addEventListener("resize",e.resized.bind(e)),e.$root.$emit("renderer-loaded",!0),e.$emit("loaded")})),this.$root.$on("controller_update",(function(t,r){if("video-checkbox"===t.target.id)e.videoElement.style.visibility=r.showvideo?"visible":"hidden";else if("video-blur-checkbox"===t.target.id)e.videoElement.style.filter=r.blurvideo?"blur(10px)":"none";else if("canvas-checkbox"===t.target.id)e.$refs.canvas.style.visibility=r.showcanvas?"visible":"hidden";else if("device-select"===t.target.id)e.camera.setDeviceId(r.camera_device_id);else if("emoji-size"===t.target.id)e.controller.emoji_renderer.size_adjust=r.emoji_size;else if("background-img"===t.target.id){var i=new FileReader;i.addEventListener("load",(function(){e.$refs.background_img.src=i.result;var t=new Image;t.addEventListener("load",(function(){e.background_aspect=t.naturalWidth/t.naturalHeight,e.background_enable=!0,e.resized(),e.$root.$emit("background-img-loaded",!0)})),t.src=i.result})),i.readAsDataURL(r)}else if("background-checkbox"===t.target.id)e.background_enable=r.showbackground;else if(Object.keys(e.controller.emoji_renderer.emoji_lookup).some((function(e){return e===t.target.id})))e.controller.emoji_renderer.emoji_lookup[t.target.id]=t.target.value;else if("all"===t.target){e.videoElement.style.visibility=r.showvideo?"visible":"hidden",e.videoElement.style.visibility=r.showvideo?"visible":"hidden",e.videoElement.style.filter=r.blurvideo?"blur(10px)":"none",e.camera.setDeviceId(r.camera_device_id),e.controller.emoji_renderer.size_adjust=r.emoji_size,e.background_enable=r.showbackground;for(var a=0,o=Object.keys(r.emoji_lookup);a<o.length;a++){var n=o[a];e.controller.emoji_renderer.emoji_lookup[n]=r.emoji_lookup[n]}}})),this.$root.$on("requestStatics",(function(){var t=e.controller.emoji_renderer.getStaticsText(),r=document.createElement("textarea");document.body.appendChild(r),r.textContent=t,r.select(),document.execCommand("copy"),document.body.removeChild(r),console.log(t)})),window.addEventListener("beforeunload",(function(){for(var t=e.controller.emoji_renderer.getStaticsJson(),r=0,i=Object.keys(t);r<i.length;r++){var a=i[r];e.$ga.event("Emotion","rate",a,Math.floor(100*t[a]))}}))},beforeDestroy:function(){this.controller.stop()},methods:{resized:function(){window.innerWidth>window.innerHeight*this.camera.camera_aspect_ratio?(this.videoElement.width=window.innerHeight*this.camera.camera_aspect_ratio,this.videoElement.height=window.innerHeight):(this.videoElement.width=window.innerWidth,this.videoElement.height=window.innerWidth/this.camera.camera_aspect_ratio),this.videoElement.width>this.background_aspect*this.videoElement.height?(this.$refs.background_img.width=this.background_aspect*this.videoElement.height,this.$refs.background_img.height=this.videoElement.height):(this.$refs.background_img.width=this.videoElement.width,this.$refs.background_img.height=this.videoElement.width/this.background_aspect),this.$refs.canvas.width=this.videoElement.width,this.$refs.canvas.height=this.videoElement.height,this.controller.resized()}}},A=q,I=(r("44a5"),Object(n["a"])(A,v,m,!1,null,"7edf8a69",null)),R=I.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"container"},[r("div",[r("label",{attrs:{for:"video-checkbox"}},[e._v("video: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.struct.showvideo,expression:"struct.showvideo"}],attrs:{id:"video-checkbox",type:"checkbox"},domProps:{checked:Array.isArray(e.struct.showvideo)?e._i(e.struct.showvideo,null)>-1:e.struct.showvideo},on:{change:[function(t){var r=e.struct.showvideo,i=t.target,a=!!i.checked;if(Array.isArray(r)){var o=null,n=e._i(r,o);i.checked?n<0&&e.$set(e.struct,"showvideo",r.concat([o])):n>-1&&e.$set(e.struct,"showvideo",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(e.struct,"showvideo",a)},e.update]}})]),r("div",[r("label",{attrs:{for:"canvas-checkbox"}},[e._v("canvas:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.struct.showcanvas,expression:"struct.showcanvas"}],attrs:{id:"canvas-checkbox",type:"checkbox"},domProps:{checked:Array.isArray(e.struct.showcanvas)?e._i(e.struct.showcanvas,null)>-1:e.struct.showcanvas},on:{change:[function(t){var r=e.struct.showcanvas,i=t.target,a=!!i.checked;if(Array.isArray(r)){var o=null,n=e._i(r,o);i.checked?n<0&&e.$set(e.struct,"showcanvas",r.concat([o])):n>-1&&e.$set(e.struct,"showcanvas",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(e.struct,"showcanvas",a)},e.update]}})]),r("div",[r("label",{attrs:{for:"background-checkbox"}},[e._v("background image:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.struct.showbackground,expression:"struct.showbackground"}],attrs:{id:"background-checkbox",type:"checkbox"},domProps:{checked:Array.isArray(e.struct.showbackground)?e._i(e.struct.showbackground,null)>-1:e.struct.showbackground},on:{change:[function(t){var r=e.struct.showbackground,i=t.target,a=!!i.checked;if(Array.isArray(r)){var o=null,n=e._i(r,o);i.checked?n<0&&e.$set(e.struct,"showbackground",r.concat([o])):n>-1&&e.$set(e.struct,"showbackground",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(e.struct,"showbackground",a)},e.update]}})]),r("div",[r("label",{attrs:{for:"video-blur-checkbox"}},[e._v("blur video:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.struct.blurvideo,expression:"struct.blurvideo"}],attrs:{id:"video-blur-checkbox",type:"checkbox"},domProps:{checked:Array.isArray(e.struct.blurvideo)?e._i(e.struct.blurvideo,null)>-1:e.struct.blurvideo},on:{change:[function(t){var r=e.struct.blurvideo,i=t.target,a=!!i.checked;if(Array.isArray(r)){var o=null,n=e._i(r,o);i.checked?n<0&&e.$set(e.struct,"blurvideo",r.concat([o])):n>-1&&e.$set(e.struct,"blurvideo",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(e.struct,"blurvideo",a)},e.update]}})]),r("div",[r("label",{attrs:{for:"device-select"}},[e._v("camera device:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.struct.camera_device_id,expression:"struct.camera_device_id"}],ref:"device_select",attrs:{id:"device-select"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.struct,"camera_device_id",t.target.multiple?r:r[0])},e.update]}})]),r("div",[r("label",{attrs:{for:"emoji-size"}},[e._v("emoji size:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.struct.emoji_size,expression:"struct.emoji_size"}],attrs:{id:"emoji-size",type:"range",min:"0.1",max:"4.0",step:"0.1"},domProps:{value:e.struct.emoji_size},on:{input:e.update,__r:function(t){return e.$set(e.struct,"emoji_size",t.target.value)}}})]),r("div",[r("label",{attrs:{for:"background-color"}},[e._v("background color :")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.struct.background_color,expression:"struct.background_color"}],attrs:{id:"background-color",type:"color"},domProps:{value:e.struct.background_color},on:{input:[function(t){t.target.composing||e.$set(e.struct,"background_color",t.target.value)},e.backgroundColorChanged]}})]),r("div",[r("label",{attrs:{for:"background-img"}},[e._v("background image: ")]),r("input",{attrs:{id:"background-img",type:"file",accept:"image/png,image/gif,image/jpeg"},on:{change:e.imgFileSelected}})]),e._m(0),r("div",[r("button",{on:{click:e.getStatics}},[e._v("statics")])])]),r("div",{staticClass:"container"},[r("div",[r("label",{attrs:{for:"neutral"}},[e._v("neutral: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.struct.emoji_lookup.neutral,expression:"struct.emoji_lookup.neutral"}],ref:"neutral",attrs:{type:"text",id:"neutral",size:"2"},domProps:{value:e.struct.emoji_lookup.neutral},on:{input:[function(t){t.target.composing||e.$set(e.struct.emoji_lookup,"neutral",t.target.value)},e.update]}})]),r("div",[r("label",{attrs:{for:"angry"}},[e._v("angry: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.struct.emoji_lookup.angry,expression:"struct.emoji_lookup.angry"}],ref:"angry",attrs:{type:"text",id:"angry",size:"2"},domProps:{value:e.struct.emoji_lookup.angry},on:{input:[function(t){t.target.composing||e.$set(e.struct.emoji_lookup,"angry",t.target.value)},e.update]}})]),r("div",[r("label",{attrs:{for:"disgusted"}},[e._v("disgusted: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.struct.emoji_lookup.disgusted,expression:"struct.emoji_lookup.disgusted"}],ref:"disgusted",attrs:{type:"text",id:"disgusted",size:"2"},domProps:{value:e.struct.emoji_lookup.disgusted},on:{input:[function(t){t.target.composing||e.$set(e.struct.emoji_lookup,"disgusted",t.target.value)},e.update]}})]),r("div",[r("label",{attrs:{for:"fearful"}},[e._v("fearful: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.struct.emoji_lookup.fearful,expression:"struct.emoji_lookup.fearful"}],ref:"fearful",attrs:{type:"text",id:"fearful",size:"2"},domProps:{value:e.struct.emoji_lookup.fearful},on:{input:[function(t){t.target.composing||e.$set(e.struct.emoji_lookup,"fearful",t.target.value)},e.update]}})]),r("div",[r("label",{attrs:{for:"happy"}},[e._v("happy: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.struct.emoji_lookup.happy,expression:"struct.emoji_lookup.happy"}],ref:"happy",attrs:{type:"text",id:"happy",size:"2"},domProps:{value:e.struct.emoji_lookup.happy},on:{input:[function(t){t.target.composing||e.$set(e.struct.emoji_lookup,"happy",t.target.value)},e.update]}})]),r("div",[r("label",{attrs:{for:"sad"}},[e._v("sad: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.struct.emoji_lookup.sad,expression:"struct.emoji_lookup.sad"}],ref:"sad",attrs:{type:"text",id:"sad",size:"2"},domProps:{value:e.struct.emoji_lookup.sad},on:{input:[function(t){t.target.composing||e.$set(e.struct.emoji_lookup,"sad",t.target.value)},e.update]}})]),r("div",[r("label",{attrs:{for:"surprised"}},[e._v("surprised: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.struct.emoji_lookup.surprised,expression:"struct.emoji_lookup.surprised"}],ref:"surprised",attrs:{type:"text",id:"surprised",size:"2"},domProps:{value:e.struct.emoji_lookup.surprised},on:{input:[function(t){t.target.composing||e.$set(e.struct.emoji_lookup,"surprised",t.target.value)},e.update]}})])])])},M=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("a",{attrs:{href:"https://github.com/73-ch/emoji-cam#how-to-use"}},[r("button",{attrs:{id:"help"}},[e._v("help")])])])}],D={name:"Controller",data:function(){return{struct:{showvideo:!0,showcanvas:!0,blurvideo:!1,showbackground:!1,camera_device_id:"",emoji_size:"1.0",background_color:"#ffffff",emoji_lookup:{angry:"😡",disgusted:"😟",fearful:"😨",happy:"🤩",neutral:"🙂",sad:"🥺",surprised:"😳"}}}},mounted:function(){var e=this;if(this.initDeviceSelect(),this.$root.$on("stream_created",(function(t){if(e.$refs.device_select){var r,i=Object(p["a"])(e.$refs.device_select.childNodes);try{for(i.s();!(r=i.n()).done;){var a=r.value;a.value===t&&(e.struct.camera_device_id=t)}}catch(o){i.e(o)}finally{i.f()}}})),this.$root.$on("background-img-loaded",(function(t){e.$set(e.struct,"showbackground",t)})),localStorage.struct){for(var t=JSON.parse(localStorage.struct),r=0,i=Object.keys(t);r<i.length;r++){var a=i[r];if("camera_device_id"===a){var o,n=Object(p["a"])(this.$refs.device_select.childNodes);try{for(n.s();!(o=n.n()).done;){var s=o.value;s.value===t[a]&&(this.struct.camera_device_id=t[a])}}catch(l){n.e(l)}finally{n.f()}}else if("emoji_lookup"===a)for(var c=0,u=Object.keys(t[a]);c<u.length;c++){var d=u[c];this.$set(this.struct.emoji_lookup,d,t[a][d])}else this.$set(this.struct,a,t[a])}this.$root.$on("renderer-loaded",(function(){e.update({target:"all"}),e.backgroundColorChanged()}))}window.addEventListener("beforeunload",(function(){localStorage.setItem("struct",JSON.stringify(e.struct))}))},methods:{initDeviceSelect:function(){var e=this;navigator.mediaDevices.enumerateDevices().then((function(t){for(var r=0;r<t.length;++r)if("videoinput"===t[r].kind){var i=document.createElement("option");i.value=t[r].deviceId,i.text=t[r].label||"device ".concat(r),e.$refs.device_select.appendChild(i)}}),(function(e){console.error(e)}))},update:function(e){this.$root.$emit("controller_update",e,this.struct)},backgroundColorChanged:function(){this.$emit("background-color-changed",this.struct.background_color)},imgFileSelected:function(e){e.target.files[0]&&this.$root.$emit("controller_update",e,e.target.files[0])},getStatics:function(){this.$root.$emit("requestStatics")}}},L=D,V=(r("959b"),Object(n["a"])(L,T,M,!1,null,"78bdcc46",null)),H=V.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("vue-loading",{staticClass:"loading",attrs:{type:"spiningDubbles",color:"#aaa",size:{width:"100px",height:"100px"}}})],1)},J=[],W=r("d523"),U={name:"Loading",components:{VueLoading:W["VueLoading"]}},G=U,B=(r("2bfd"),Object(n["a"])(G,F,J,!1,null,"76267b1e",null)),K=B.exports,Q={name:"Main",components:{Renderer:R,Controller:H,FullWindowLoading:K},data:function(){return{loading:!0,policy_checked:!1}},mounted:function(){localStorage.getItem("policy_checked")&&(this.policy_checked=!0)},methods:{setBackgroundColor:function(e){this.$el.style.backgroundColor=e}},watch:{policy_checked:function(){localStorage.setItem("policy_checked","1")}}},X=Q,Y=(r("c311"),Object(n["a"])(X,l,h,!1,null,"279021d4",null)),Z=Y.exports,ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e._m(0),r("div",{staticClass:"home-link"},[r("span",[r("router-link",{attrs:{to:"/"}},[e._v("Homeへ戻る")])],1)])])},te=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"policy"},[r("h1",[e._v("プライバシーポリシー")]),r("p",[e._v(" 浪川洪作（以下，私）は，本ウェブサイト上で提供するサービス（以下，「本サービス」と言います．）における，ユーザーの個人情報の取り扱いについて，以下の通りプライバシーポリシー（以下，「本ポリシー」と言います．）を定めます． ")]),r("h2",[e._v("個人情報")]),r("p",[e._v(" 「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します. ")]),r("h2",[e._v("個人情報の収集")]),r("p",[e._v("私は、当サイトの利用にあたって、ユーザーから以下の情報を取得することがあります。")]),r("ul",[r("li",[e._v("端末の種類")]),r("li",[e._v("ブラウザの種類")]),r("li",[e._v("リファラ")]),r("li",[e._v("IPアドレス")]),r("li",[e._v("Cookie")]),r("li",[e._v("感情認識の統計情報")])]),r("p",[e._v("収集した情報は使用状況の分析や遠隔コミュニケーションの調査および分析を目的として使用することがあります．")]),r("h2",[e._v("個人情報の第三者提供")]),r("p",[e._v(" 私は、ユーザー情報のうち個人情報に関して、あらかじめユーザーの同意を得ることなく、第三者に提供しません。但し、次に定める場合にはこの限りではなく、ユーザー情報を第三者に提供することがあります。 ")]),r("ul",[r("li",[e._v(" 外部サービスとの連携または、外部サービスを利用した認証にあたり、当該外部サービス運営会社にユーザー情報を提供する場合 ")]),r("li",[e._v(" 国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して、私が協力する必要があり、かつユーザーからの同意取得が当該事務の遂行に支障を及ぼすおそれがある場合 ")]),r("li",[e._v("その他法令で認められる場合")])]),r("h2",[e._v("個人情報の開示")]),r("p",[e._v(" 私は，本人から個人情報の開示を求められたときは，本人に対し，遅滞なくこれを開示します。ただし，開示することにより次のいずれかに該当する場合は，その全部または一部を開示しないこともあり，開示しない決定をした場合には，その旨を遅滞なく通知します。なお，個人情報の開示に際しては，1件あたり1，000円の手数料を申し受けます。 ")]),r("ul",[r("li",[e._v("本人または第三者の生命，身体，財産その他の権利利益を害するおそれがある場合")]),r("li",[e._v("私の業務の適正な実施に著しい支障を及ぼすおそれがある場合")]),r("li",[e._v("その他法令に違反することとなる場合")])]),r("p",[e._v("なお，履歴情報および特性情報などの個人情報以外の情報については，原則として開示いたしません。")]),r("h2",[e._v("個人情報の訂正および削除")]),r("p",[e._v(" ユーザーは，私の保有する自己の個人情報が誤った情報である場合には，私が定める手続きにより，私に対して個人情報の訂正，追加または削除（以下，「訂正等」といいます。）を請求することができます。 ")]),r("p",[e._v(" 私は，ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には，遅滞なく，当該個人情報の訂正等を行うものとします。 ")]),r("p",[e._v(" 私は，前項の規定に基づき訂正等を行った場合，または訂正等を行わない旨の決定をしたときは遅滞なく，これをユーザーに通知します。 ")]),r("h2",[e._v("個人情報の利用停止等")]),r("p",[e._v(" 私は，本人から，個人情報が，利用目的の範囲を超えて取り扱われているという理由，または不正の手段により取得されたものであるという理由により，その利用の停止または消去（以下，「利用停止等」といいます。）を求められた場合には，遅滞なく必要な調査を行います。調査結果に基づき，その請求に応じる必要があると判断した場合には，遅滞なく，当該個人情報の利用停止等を行います。 ")]),r("p",[e._v(" 私は，前項の規定に基づき利用停止等を行った場合，または利用停止等を行わない旨の決定をしたときは，遅滞なく，これをユーザーに通知します。 ")]),r("p",[e._v(" 利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって，ユーザーの権利利益を保護するために必要なこれに代わるべき措置をとれる場合は，この代替策を講じるものとします。 ")]),r("h2",[e._v("Googleアナリティクスの使用")]),r("p",[e._v(" 当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくはここをクリックしてください。 ")]),r("h2",[e._v("プライバシーポリシーの変更")]),r("p",[e._v(" 本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，ユーザーに通知することなく，変更することができるものとします。 私が別途定める場合を除いて，変更後のプライバシーポリシーは，に掲載したときから効力を生じるものとします。 ")]),r("h2",[e._v("問い合わせ先")]),r("p",[e._v("筑波大学デジタルネイチャー推進戦略研究基盤研究室")]),r("p",[e._v("担当: 浪川洪作")]),r("p",[e._v("メールアドレス: namikawa@digitalnature.slis.tsukuba.ac.jp")])])}],re={name:"Privacy"},ie=re,ae=(r("7dc5"),Object(n["a"])(ie,ee,te,!1,null,"9ecf5d66",null)),oe=ae.exports;i["default"].use(d["a"]);var ne=[{path:"/",name:"Main",component:Z},{path:"/privacy_policy",name:"PrivacyPolicy",component:oe}],se=new d["a"]({routes:ne}),ce=se,ue=r("0284"),de=r.n(ue);i["default"].config.productionTip=!1,new i["default"]({router:ce,render:function(e){return e(u)}}).$mount("#app"),i["default"].use(de.a,{id:"UA-170263013-1"})},5854:function(e,t,r){},"5c0b":function(e,t,r){"use strict";var i=r("9c0c"),a=r.n(i);a.a},"7dc5":function(e,t,r){"use strict";var i=r("38fd"),a=r.n(i);a.a},"8de7":function(e,t,r){},"959b":function(e,t,r){"use strict";var i=r("8de7"),a=r.n(i);a.a},"9c0c":function(e,t,r){},afd7:function(e,t,r){},c311:function(e,t,r){"use strict";var i=r("e3d0"),a=r.n(i);a.a},e3d0:function(e,t,r){}});
//# sourceMappingURL=app.4cbb8ae7.js.map