(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{color:"blue accent-4",dense:"",dark:"",fixed:"","elevate-on-scroll":!0}},[n("v-toolbar-title",[t._v("Kripto App")]),n("v-spacer"),n("v-menu",{attrs:{"offset-x":!1,"offset-y":!0},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{"max-width":"32","min-width":"32",depressed:"",text:"",disabled:0==t.newNotificationsCount},on:{click:function(e){return t.onMenuClick()}}},a),[t.newNotificationsCount>0?n("v-badge",{attrs:{color:"red",content:t.newNotificationsCount,"offset-y":"15"}},[n("v-icon",{attrs:{color:"blue darken-4"}},[t._v("mdi-alert-box")])],1):n("span",[n("v-icon",{attrs:{color:"blue darken-4"}},[t._v("mdi-alert-box")])],1)],1)]}}]),model:{value:t.menuState,callback:function(e){t.menuState=e},expression:"menuState"}},[t.notifications.length>0?n("v-list",{attrs:{"min-width":"200","max-height":"300"}},t._l(t.notifications,(function(e){return n("v-list-item",{key:e.id},[n("v-list-item-title",[t._v(t._s(e.title))]),n("v-divider")],1)})),1):t._e()],1),n("v-btn",{staticClass:"ml-2",attrs:{text:"",to:"/"}},[t._v("Coins")]),n("v-btn",{staticClass:"ml-2",attrs:{text:"",to:"/alerts"}},[t._v("Alerts")])],1),n("v-card",{attrs:{"min-height":"48","max-height":"48"}}),n("keep-alive",[n("router-view")],1),n("audio",{ref:"notification-sound"},[n("source",{attrs:{src:"/notification.ogg",type:"audio/ogg"}}),t._v(" Your browser does not support the audio element. ")])],1)},i=[],o=(n("99af"),n("159b"),function(t){return"lt"==t?"<":">"}),s=window.socket,l={data:function(){return{notifications:[],newNotificationsCount:0,menuState:!1,audio:null}},methods:{onMenuClick:function(){this.menuState||(this.newNotificationsCount=0)}},mounted:function(){var t=this;s.on("alerts",(function(e){var n=e.data,a=n.display,r=n.currentPrice,i=n.all;a.forEach((function(e){t.notifications.unshift({title:"BTC price is: ".concat(r,", ").concat(o(e.type)," ").concat(e.value)}),t.menuState||(t.newNotificationsCount+=1,t.$refs["notification-sound"].play())})),t.$store.commit("updateAlerts",{alerts:i.reverse()})})),s.on("coins",(function(e){console.log(e),console.log(e.data);var n=e.data;t.$store.commit("updateCoins",{coins:n})}))},created:function(){this.newNotificationsCount=this.notifications.length}},c=l,u=n("2877"),d=n("6544"),p=n.n(d),f=n("7496"),v=n("40dc"),m=n("4ca6"),h=n("8336"),b=n("b0af"),g=n("ce7e"),w=n("132d"),y=n("8860"),x=n("da13"),_=n("5d23"),k=n("e449"),C=n("2fa4"),O=n("2a7f"),T=Object(u["a"])(c,r,i,!1,null,null,null),V=T.exports;p()(T,{VApp:f["a"],VAppBar:v["a"],VBadge:m["a"],VBtn:h["a"],VCard:b["a"],VDivider:g["a"],VIcon:w["a"],VList:y["a"],VListItem:x["a"],VListItemTitle:_["c"],VMenu:k["a"],VSpacer:C["a"],VToolbarTitle:O["a"]});var S=n("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",[t.loading?n("v-card",{attrs:{align:"center",elevation:"0"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):t._e(),t._l(t.coins,(function(e){return n("v-card",{key:e.id,staticClass:"mx-auto mb-4",attrs:{"min-width":"344","max-width":"344",elevation:"8"}},[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("div",{staticClass:"overline mb-4"},[t._v(t._s(e.symbol)+" ("+t._s(e.id)+")")]),n("v-list-item-title",{staticClass:"headline mb-1"},[t._v(t._s(e.name))]),n("v-list-item-subtitle",[t._v("$ "+t._s(e.quote.USD.price.toFixed(2)))]),1==e.id?n("v-btn",{staticClass:"ml-auto",attrs:{small:"",color:"primary","max-width":"100",to:"/detail/"+e.id}},[t._v("Details")]):t._e()],1)],1)],1)}))],2)],1)],1)},A=[],F=(n("d3b7"),{name:"homepage",data:function(){return{loading:!1}},computed:{coins:function(){return this.$store.getters.coins}},methods:{getCoins:function(){var t=this,e="/api/coins";fetch(e).then((function(t){return t.json()})).then((function(e){t.$store.commit("updateCoins",{coins:e.data}),t.loading=!1}))}},mounted:function(){this.loading=!0,this.getCoins()}}),U=F,P=n("62ad"),$=n("a523"),E=n("490a"),I=n("0fd9"),L=Object(u["a"])(U,j,A,!1,null,null,null),N=L.exports;p()(L,{VBtn:h["a"],VCard:b["a"],VCol:P["a"],VContainer:$["a"],VListItem:x["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VProgressCircular:E["a"],VRow:I["a"]});var D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{staticClass:"mx-auto",attrs:{lg:"6"}},[n("FormAddAlert"),n("div",{staticStyle:{height:"560px","background-color":"#FFFFFF",overflow:"hidden","box-sizing":"border-box",border:"1px solid #56667F","border-radius":"4px","text-align":"right","line-height":"14px","font-size":"12px","font-feature-settings":"normal","text-size-adjust":"100%","box-shadow":"inset 0 -20px 0 0 #56667F",padding:"0px",margin:"0px",width:"100%"}},[n("div",{staticStyle:{height:"540px",padding:"0px",margin:"0px",width:"100%"}},[n("iframe",{staticStyle:{border:"0",margin:"0",padding:"0","line-height":"14px"},attrs:{src:"https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505",width:"100%",height:"536px",scrolling:"auto",marginwidth:"0",marginheight:"0",frameborder:"0",border:"0"}})]),n("div",{staticStyle:{color:"#FFFFFF","line-height":"14px","font-weight":"400","font-size":"11px","box-sizing":"border-box",padding:"2px 6px",width:"100%","font-family":"Verdana, Tahoma, Arial, sans-serif"}},[n("a",{staticStyle:{"font-weight":"500",color:"#FFFFFF","text-decoration":"none","font-size":"11px"},attrs:{href:"https://coinlib.io/widgets",target:"_blank"}},[t._v("Bitcoin Widget")]),t._v(" by Coinlib")])])],1)],1)],1)},B=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{attrs:{cols:"12",lg:"4"}},[n("v-text-field",{attrs:{label:"Enter value"},model:{value:t.newOne.value,callback:function(e){t.$set(t.newOne,"value",e)},expression:"newOne.value"}})],1),n("v-col",{attrs:{cols:"12",lg:"4"}},[n("v-select",{attrs:{items:[{name:"Less than",value:"lt"},{name:"Greater than",value:"gt"}],label:"Type","item-text":"name","item-value":"value"},model:{value:t.newOne.type,callback:function(e){t.$set(t.newOne,"type",e)},expression:"newOne.type"}})],1),n("v-col",{staticClass:"my-auto",attrs:{cols:"12",lg:"4"}},[n("v-btn",{attrs:{small:""},on:{click:function(e){return t.addAlert()}}},[t._v("Add alert")])],1),n("v-snackbar",{model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.snackbarText)+" "),n("v-btn",{attrs:{color:"white",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v(" Close ")])],1)],1)},M=[],z=(n("acd8"),n("96cf"),n("1da1")),K=n("d4ec"),J=n("bee2"),G=function(){function t(){Object(K["a"])(this,t)}return Object(J["a"])(t,null,[{key:"get",value:function(){var t=Object(z["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){fetch("/api/alerts").then((function(t){return t.json()})).then((function(e){t(e)}))})));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"insert",value:function(t){return new Promise((function(e){fetch("/api/alerts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:parseFloat(t.value),type:t.type})}).then((function(t){return t.json()})).then((function(){e()}))}))}},{key:"update",value:function(t){return new Promise((function(e){fetch("/api/alerts/".concat(t._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:parseFloat(t.value),type:t.type,status:t.status})}).then((function(t){return t.json()})).then((function(){e()}))}))}},{key:"delete",value:function(){var t=Object(z["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){fetch("/api/alerts/".concat(e),{method:"DELETE"}).then((function(t){return t.json()})).then((function(){t()}))})));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),q={data:function(){return{newOne:{},snackbar:!1,snackbarText:""}},props:{onSubmit:Function},methods:{addAlert:function(){var t=this;if(this.snackbar=!1,this.newOne.type&&this.newOne.value){if(isNaN(this.newOne.value))return this.snackbarText="Value must be number (float)",void(this.snackbar=!0);G.insert(this.newOne).then((function(){t.newOne={},G.get().then((function(e){t.$store.commit("updateAlerts",{alerts:e.reverse()}),t.snackbarText="Alert saved",t.snackbar=!0}))}))}else this.snackbarText="Enter value and select type",this.snackbar=!0}}},W=q,Y=n("b974"),H=n("2db4"),Q=n("8654"),X=Object(u["a"])(W,R,M,!1,null,null,null),Z=X.exports;p()(X,{VBtn:h["a"],VCol:P["a"],VRow:I["a"],VSelect:Y["a"],VSnackbar:H["a"],VTextField:Q["a"]});var tt={components:{FormAddAlert:Z}},et=tt,nt=Object(u["a"])(et,D,B,!1,null,null,null),at=nt.exports;p()(nt,{VCol:P["a"],VContainer:$["a"],VRow:I["a"]});var rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{key:t.componentKey},[n("v-row",[n("v-col",{staticClass:"mx-auto",attrs:{cols:"12",lg:"3"}},[n("FormAddAlert"),t.loading?n("v-card",{attrs:{align:"center",elevation:"0"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):t._e(),t._l(t.alerts,(function(e){return n("v-card",{key:e._id,staticClass:"mx-auto mb-4",attrs:{elevation:"8"}},[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline mb-1"},[t.alertToUpdate[e._id]?n("div",[n("v-row",[n("v-col",{attrs:{cols:"12",lg:"6",md:"6",sm:"6"}},[n("v-select",{attrs:{items:[{name:"Less than",value:"lt"},{name:"Greater than",value:"gt"}],label:"Type","item-text":"name","item-value":"value"},model:{value:t.alertToUpdate[e._id].type,callback:function(n){t.$set(t.alertToUpdate[e._id],"type",n)},expression:"alertToUpdate[alert._id].type"}})],1),n("v-col",{attrs:{cols:"12",lg:"6",md:"6",sm:"6"}},[n("v-text-field",{attrs:{label:"Enter value"},model:{value:t.alertToUpdate[e._id].value,callback:function(n){t.$set(t.alertToUpdate[e._id],"value",n)},expression:"alertToUpdate[alert._id].value"}})],1)],1)],1):n("div",[t._v(" "+t._s(t.display(e))+" ")])]),n("v-row",[n("v-btn",{staticClass:"mr-auto ml-2",attrs:{icon:"",small:"",text:"","max-width":"24","min-width":"24"},on:{click:function(n){return t.updateStatus(e)}}},[t.alertToUpdate[e._id]?n("v-icon",{attrs:{color:t.getStatusColor(t.alertToUpdate[e._id])}},[t._v(t._s(t.getStatusIcon(t.alertToUpdate[e._id])))]):n("v-icon",{attrs:{color:t.getStatusColor(e)}},[t._v(t._s(t.getStatusIcon(e)))])],1),t.alertToUpdate[e._id]?n("div",[n("v-btn",{staticClass:"ml-auto",attrs:{small:"",color:"warning","max-width":"120"},on:{click:function(n){return t.confirmUpdate(t.alertToUpdate[e._id])}}},[t._v("Save changes")]),n("v-btn",{staticClass:"ml-2 mr-2",attrs:{icon:"",small:"",text:"","max-width":"24","min-width":"24"},on:{click:function(n){return t.clearAlertToUpdate(e._id)}}},[n("v-icon",[t._v("mdi-close")])],1)],1):n("div",[n("v-btn",{staticClass:"ml-auto",attrs:{small:"",color:"primary","max-width":"120"},on:{click:function(n){return t.setAlertToUpdate(e)}}},[t._v("Update")]),n("v-btn",{staticClass:"ml-2 mr-2",attrs:{icon:"",small:"",text:"","max-width":"24","min-width":"24"},on:{click:function(n){return t.deleteAlert(e._id)}}},[n("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1)],1)],1)})),n("v-snackbar",{model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.snackbarText)+" "),n("v-btn",{attrs:{color:"white",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v(" Close ")])],1)],2)],1)],1)},it=[],ot=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("ade3"));function st(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function lt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?st(Object(n),!0).forEach((function(e){Object(ot["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):st(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ct={name:"alerts",components:{FormAddAlert:Z},data:function(){return{alertToUpdate:{},componentKey:0,snackbar:!1,snackbarText:"",loading:!1}},computed:{alerts:function(){return this.$store.getters.alerts}},methods:{display:function(t){return"".concat(o(t.type)," ").concat(t.value," $")},getStatusIcon:function(t){return t.status?"mdi-lightbulb-on":"mdi-lightbulb-off"},getStatusColor:function(t){return t.status?"green":"red"},updateStatus:function(t){this.alertToUpdate[t._id]&&(this.alertToUpdate[t._id].status=!this.alertToUpdate[t._id].status,this.componentKey+=1)},setAlertToUpdate:function(t){this.alertToUpdate[t._id]=lt({},t),this.componentKey+=1},clearAlertToUpdate:function(t){delete this.alertToUpdate[t],this.componentKey+=1},getAlerts:function(){var t=this;G.get().then((function(e){t.$store.commit("updateAlerts",{alerts:e.reverse()}),t.loading=!1}))},confirmUpdate:function(t){var e=this;if(this.snackbar=!1,t.type&&t.value){if(isNaN(t.value))return this.snackbarText="Value must be number (float)",void(this.snackbar=!0);G.update(t).then((function(){e.getAlerts(),e.clearAlertToUpdate(t._id),e.snackbarText="Alert updated",e.snackbar=!0}))}},deleteAlert:function(t){var e=this;this.snackbar=!1,confirm("Delete this alert?")&&G.delete(t).then((function(){e.getAlerts(),e.snackbarText="Alert deleted",e.snackbar=!0}))}},mounted:function(){this.loading=!0,this.getAlerts()}},ut=ct,dt=Object(u["a"])(ut,rt,it,!1,null,null,null),pt=dt.exports;p()(dt,{VBtn:h["a"],VCard:b["a"],VCol:P["a"],VContainer:$["a"],VIcon:w["a"],VListItem:x["a"],VListItemContent:_["a"],VListItemTitle:_["c"],VProgressCircular:E["a"],VRow:I["a"],VSelect:Y["a"],VSnackbar:H["a"],VTextField:Q["a"]}),a["a"].use(S["a"]);var ft=new S["a"]({mode:"history",routes:[{path:"/",name:"homepage",component:N},{path:"/detail/:id",name:"detail",component:at},{path:"/alerts",name:"alerts",component:pt}]}),vt=ft,mt=n("2f62");a["a"].use(mt["a"]);var ht=new mt["a"].Store({state:{alerts:[],coins:{}},getters:{alerts:function(t){return t.alerts},coins:function(t){return t.coins}},mutations:{updateAlerts:function(t,e){t.alerts=e.alerts},updateCoins:function(t,e){t.coins=e.coins}},actions:{}}),bt=ht,gt=n("f309");a["a"].use(gt["a"]);var wt=new gt["a"]({});a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(V)},router:vt,store:bt,vuetify:wt}).$mount("#app")}});
//# sourceMappingURL=app.69679a80.js.map