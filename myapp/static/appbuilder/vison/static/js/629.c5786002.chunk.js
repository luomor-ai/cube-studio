"use strict";(self.webpackChunkvite_ml_platform=self.webpackChunkvite_ml_platform||[]).push([[629],{11116:function(e,t,o){o.r(t),o.d(t,{default:function(){return w}});var r=o(51869),n=o(25810),i=o(64120),s=o(16027),a=o(24258),l=o(12898),c=o(64606),f=o(4879),u=o(78960),d=o(10493),p=o(78195),m=o(57764),v=o(38319),g=o(1649),h=o(60854),_=o(78288),Z=o(90117),y=o(29916),b=o(80340),x={uuid:Date.now(),getUUid:function(){return this.uuid++}};function w(){var e=(0,y.k6)(),t=c.createRef(),o=(0,c.useState)([{preds:"",uuid:x.getUUid()}]),w=(0,l.Z)(o,2),C=w[0],j=w[1],O=(0,c.useState)([{fe_proc_id:"",fe_proc_name:""}]),N=(0,l.Z)(O,2),k=N[0],P=N[1],I=(0,c.useState)([{model_serv_id:"",model_serv_name:""}]),S=(0,l.Z)(I,2),E=S[0],T=S[1],V=(0,c.useState)({scene_id:"",preds:"",title:"",model_id:"",fe_proc_id:{fe_proc_id:""},resource_info:{model_serv_id:""}}),D=(0,l.Z)(V,2),R=D[0],A=D[1];(0,c.useEffect)((function(){var o={};if(e.location.state){if(o=e.location.state,sessionStorage.setItem("registerModelInformationKeyID",JSON.stringify(o)),A(o),Z.Z.featureFeProcConfigDisplayGetQuest(o.scene_id,"fe_proc_config").then((function(e){P(e.result)})),Z.Z.featureFeProcConfigDisplayGetQuest(o.scene_id,"model_serv_router").then((function(e){T(e.result)})),"\u66f4\u6539\u6ce8\u518c\u6a21\u578b\u4fe1\u606f"===o.title){var r;null===(r=t.current)||void 0===r||r.setFieldsValue({model_name:o.model_name,model_desc:o.model_desc,owner_rtxs:o.owner_rtxs,resource_info:o.resource_info.model_serv_id,fe_proc_id:o.fe_proc_id.fe_proc_name});var n;n=o.preds.split(",").map((function(e,t){return{preds:e}})),j(o.preds.split(",")?n:[])}}else if(o=JSON.parse(sessionStorage.getItem("registerModelInformationKeyID")||""),A(o),Z.Z.featureFeProcConfigDisplayGetQuest(o.scene_id,"fe_proc_config").then((function(e){P(e.result)})),Z.Z.featureFeProcConfigDisplayGetQuest(o.scene_id,"model_serv_router").then((function(e){T(e.result)})),"\u66f4\u6539\u6ce8\u518c\u6a21\u578b\u4fe1\u606f"===o.title){var i;null===(i=t.current)||void 0===i||i.setFieldsValue({model_name:o.model_name,model_desc:o.model_desc,owner_rtxs:o.owner_rtxs,resource_info:o.resource_info.model_serv_id,fe_proc_id:o.fe_proc_id.fe_proc_name});var s;s=o.preds.split(",").map((function(e,t){return{preds:e}})),j(o.preds.split(",")?s:[])}}),[]),(0,c.useEffect)((function(){for(var e=0;e<C.length;e++){var o;null===(o=t.current)||void 0===o||o.setFieldsValue((0,s.Z)({},"preds".concat(e),C[e].preds))}}),[C]);var F=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e,o){try{var r,n=null===(r=t.current)||void 0===r?void 0:r.getFieldsValue(),i=/(\d+)$/,s=[],c={};Object.entries(n).forEach((function(e){var t=(0,l.Z)(e,2),o=t[0],r=t[1];if(i.test(o)){var n=RegExp.$1;s[n]||(s[n]={}),s[n][o.substring(0,o.length-1)]=r}else c[o]=r})),e(s.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{uuid:x.getUUid()})})))}catch(f){o(f)}}));case 3:o=e.sent,j([].concat((0,n.Z)(o),[{preds:"",uuid:x.getUUid()}])),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,b.jsx)("div",{className:"RegisterModelInformationClass",children:(0,b.jsxs)("div",{className:"bodyClass",children:[(0,b.jsx)("div",{className:"SceneHeader",children:"\u6ce8\u518c\u6a21\u578b\u4fe1\u606f"}),(0,b.jsxs)(u.Z,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},onFinish:function(t){var o={},r=[];for(var n in t)n.includes("preds")?r.push(t[n]):o[n]=t[n];o.preds=r.toString(),"\u66f4\u6539\u6ce8\u518c\u6a21\u578b\u4fe1\u606f"===R.title?Z.Z.featureUpdateModelConfigPostQuest((0,a.Z)((0,a.Z)({},o),{},{scene_id:R.scene_id,fe_proc_id:R.fe_proc_id.fe_proc_id,model_id:R.model_id})).then((function(t){0===t.retcode?e.push("/HeterogeneousPlatform/Nationalkaraoke/SceneModelInformation"):t.retmsg&&f.ZP.error("\u5931\u8d25\u539f\u56e0: ".concat(t.retmsg))})):Z.Z.featureRegisterModelConfigPostQuest((0,a.Z)((0,a.Z)({},o),{},{scene_id:R.scene_id})).then((function(t){0===t.retcode?e.push("/HeterogeneousPlatform/Nationalkaraoke/SceneModelInformation"):t.retmsg&&f.ZP.error("\u5931\u8d25\u539f\u56e0: ".concat(t.retmsg))}))},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",ref:t,children:[(0,b.jsx)(u.Z.Item,{label:"\u6a21\u578b\u4e2d\u6587\u540d",name:"model_name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6a21\u578b\u4e2d\u6587\u540d"}],children:(0,b.jsx)(d.Z,{style:{width:160}})}),(0,b.jsx)(u.Z.Item,{label:"\u6a21\u578b\u82f1\u6587\u540d",name:"model_desc",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6a21\u578b\u82f1\u6587\u540d"}],children:(0,b.jsx)(d.Z,{style:{width:160}})}),(0,b.jsx)(u.Z.Item,{label:"\u9884\u6d4b\u76ee\u6807",children:C.map((function(e,t){return(0,b.jsxs)(p.Z,{gutter:16,children:[(0,b.jsx)(m.Z,{className:"gutter-row",span:16,children:(0,b.jsx)(u.Z.Item,{name:"preds".concat(t),rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],children:(0,b.jsx)(d.Z,{style:{width:160}})})}),(0,b.jsx)(m.Z,{className:"gutter-row",span:4,children:(0,b.jsx)(u.Z.Item,{children:(0,b.jsx)(v.Z,{className:"ButtonClass",type:"dashed",onClick:function(){return(t=e).uuid&&j(C.filter((function(e){return e.uuid!==t.uuid}))),void(t.uuid||j(C.filter((function(e){return e!==t}))));var t},block:!0,icon:(0,b.jsx)(h.Z,{})})})}),(0,b.jsx)(m.Z,{className:"gutter-row",span:4,children:(0,b.jsx)(u.Z.Item,{children:(0,b.jsx)(v.Z,{className:"ButtonClass",type:"dashed",onClick:function(){return F()},block:!0,icon:(0,b.jsx)(_.Z,{})})})})]},e.uuid)}))}),(0,b.jsx)(u.Z.Item,{hasFeedback:!0,label:"\u7279\u5f81\u63d2\u4ef6\u914d\u7f6e",children:(0,b.jsxs)(p.Z,{gutter:10,children:[(0,b.jsx)(m.Z,{className:"gutter-row",span:16,children:(0,b.jsx)(u.Z.Item,{name:"fe_proc_id",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7279\u5f81\u63d2\u4ef6\u914d\u7f6e"}],children:(0,b.jsx)(g.Z,{placeholder:"Please select a country",style:{width:160},children:k.map((function(e){return(0,b.jsx)(g.Z.Option,{value:e.fe_proc_id,children:e.fe_proc_name},e.fe_proc_id)}))})})}),(0,b.jsx)(m.Z,{className:"gutter-row",span:4,children:(0,b.jsx)(u.Z.Item,{children:(0,b.jsx)(v.Z,{onClick:function(){e.push({pathname:"/HeterogeneousPlatform/Nationalkaraoke/FeatureConfiguration",state:(0,a.Z)((0,a.Z)({},R),{},{title:"\u7279\u5f81\u63d2\u4ef6\u914d\u7f6e"})})},className:"ButtonClass",type:"dashed",block:!0,icon:(0,b.jsx)(_.Z,{})})})})]})}),(0,b.jsx)(u.Z.Item,{label:"\u6a21\u578b\u670d\u52a1\u4fe1\u606f",hasFeedback:!0,children:(0,b.jsxs)(p.Z,{gutter:16,children:[(0,b.jsx)(m.Z,{className:"gutter-row",span:16,children:(0,b.jsx)(u.Z.Item,{name:"resource_info",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6a21\u578b\u670d\u52a1\u4fe1\u606f"}],children:(0,b.jsx)(g.Z,{placeholder:"Please select a country",style:{width:160},children:E.map((function(e){return(0,b.jsx)(g.Z.Option,{value:e.model_serv_id,children:e.model_serv_name},e.model_serv_id)}))})})}),(0,b.jsx)(m.Z,{className:"gutter-row",span:4,children:(0,b.jsx)(u.Z.Item,{children:(0,b.jsx)(v.Z,{onClick:function(){e.push("/HeterogeneousPlatform/Nationalkaraoke/RegisterModelService")},className:"ButtonClass",type:"dashed",block:!0,icon:(0,b.jsx)(_.Z,{})})})})]})}),(0,b.jsx)(u.Z.Item,{label:"\u8d23\u4efb\u4eba",name:"owner_rtxs",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d23\u4efb\u4eba"}],children:(0,b.jsx)(d.Z,{style:{width:160}})}),(0,b.jsx)(u.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,b.jsx)(v.Z,{className:"preservationClass",type:"primary",htmlType:"submit",children:"\u4fdd\u5b58"})})]})]})})}},60854:function(e,t,o){o.d(t,{Z:function(){return l}});var r=o(24258),n=o(64606),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"},s=o(17240),a=function(e,t){return n.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:i}))};a.displayName="MinusCircleOutlined";var l=n.forwardRef(a)},78288:function(e,t,o){o.d(t,{Z:function(){return l}});var r=o(24258),n=o(64606),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},s=o(17240),a=function(e,t){return n.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:i}))};a.displayName="PlusOutlined";var l=n.forwardRef(a)},90101:function(e,t,o){o.d(t,{E:function(){return n},Y:function(){return i}});var r=o(37274),n=(0,r.b)("success","processing","error","default","warning"),i=(0,r.b)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")},79445:function(e,t,o){o.d(t,{Z:function(){return E}});var r=o(16027),n=o(12898),i=o(17706),s=o(64606),a=o(64490),l=o(24258),c=o(15095),f=o(97715),u={adjustX:1,adjustY:1},d=[0,0],p={left:{points:["cr","cl"],overflow:u,offset:[-4,0],targetOffset:d},right:{points:["cl","cr"],overflow:u,offset:[4,0],targetOffset:d},top:{points:["bc","tc"],overflow:u,offset:[0,-4],targetOffset:d},bottom:{points:["tc","bc"],overflow:u,offset:[0,4],targetOffset:d},topLeft:{points:["bl","tl"],overflow:u,offset:[0,-4],targetOffset:d},leftTop:{points:["tr","tl"],overflow:u,offset:[-4,0],targetOffset:d},topRight:{points:["br","tr"],overflow:u,offset:[0,-4],targetOffset:d},rightTop:{points:["tl","tr"],overflow:u,offset:[4,0],targetOffset:d},bottomRight:{points:["tr","br"],overflow:u,offset:[0,4],targetOffset:d},rightBottom:{points:["bl","br"],overflow:u,offset:[4,0],targetOffset:d},bottomLeft:{points:["tl","bl"],overflow:u,offset:[0,4],targetOffset:d},leftBottom:{points:["br","bl"],overflow:u,offset:[-4,0],targetOffset:d}},m=function(e){var t=e.overlay,o=e.prefixCls,r=e.id,n=e.overlayInnerStyle;return s.createElement("div",{className:"".concat(o,"-inner"),id:r,role:"tooltip",style:n},"function"===typeof t?t():t)},v=function(e,t){var o=e.overlayClassName,r=e.trigger,n=void 0===r?["hover"]:r,u=e.mouseEnterDelay,d=void 0===u?0:u,v=e.mouseLeaveDelay,g=void 0===v?.1:v,h=e.overlayStyle,_=e.prefixCls,Z=void 0===_?"rc-tooltip":_,y=e.children,b=e.onVisibleChange,x=e.afterVisibleChange,w=e.transitionName,C=e.animation,j=e.motion,O=e.placement,N=void 0===O?"right":O,k=e.align,P=void 0===k?{}:k,I=e.destroyTooltipOnHide,S=void 0!==I&&I,E=e.defaultVisible,T=e.getTooltipContainer,V=e.overlayInnerStyle,D=(0,c.Z)(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle"]),R=(0,s.useRef)(null);(0,s.useImperativeHandle)(t,(function(){return R.current}));var A=(0,l.Z)({},D);"visible"in e&&(A.popupVisible=e.visible);var F=!1,q=!1;if("boolean"===typeof S)F=S;else if(S&&"object"===(0,a.Z)(S)){var B=S.keepParent;F=!0===B,q=!1===B}return s.createElement(f.Z,(0,i.Z)({popupClassName:o,prefixCls:Z,popup:function(){var t=e.arrowContent,o=void 0===t?null:t,r=e.overlay,n=e.id;return[s.createElement("div",{className:"".concat(Z,"-arrow"),key:"arrow"},o),s.createElement(m,{key:"content",prefixCls:Z,id:n,overlay:r,overlayInnerStyle:V})]},action:n,builtinPlacements:p,popupPlacement:N,ref:R,popupAlign:P,getPopupContainer:T,onPopupVisibleChange:b,afterPopupVisibleChange:x,popupTransitionName:w,popupAnimation:C,popupMotion:j,defaultPopupVisible:E,destroyPopupOnHide:F,autoDestroy:q,mouseLeaveDelay:g,popupStyle:h,mouseEnterDelay:d},A),y)},g=(0,s.forwardRef)(v),h=o(86126),_=o(82444),Z=o.n(_),y={adjustX:1,adjustY:1},b={adjustX:0,adjustY:0},x=[0,0];function w(e){return"boolean"===typeof e?e?y:b:(0,i.Z)((0,i.Z)({},b),e)}var C=o(70170),j=o(3251),O=o(90101),N=o(75416),k=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]])}return o},P=new RegExp("^(".concat(O.Y.join("|"),")(-inverse)?$"));function I(e,t){var o=e.type;if((!0===o.__ANT_BUTTON||!0===o.__ANT_SWITCH||!0===o.__ANT_CHECKBOX||"button"===e.type)&&e.props.disabled){var r=function(e,t){var o={},r=(0,i.Z)({},e);return t.forEach((function(t){e&&t in e&&(o[t]=e[t],delete r[t])})),{picked:o,omitted:r}}(e.props.style,["position","left","right","top","bottom","float","display","zIndex"]),n=r.picked,a=r.omitted,l=(0,i.Z)((0,i.Z)({display:"inline-block"},n),{cursor:"not-allowed",width:e.props.block?"100%":null}),c=(0,i.Z)((0,i.Z)({},a),{pointerEvents:"none"}),f=(0,C.Tm)(e,{style:c,className:null});return s.createElement("span",{style:l,className:Z()(e.props.className,"".concat(t,"-disabled-compatible-wrapper"))},f)}return e}var S=s.forwardRef((function(e,t){var o,a=s.useContext(j.E_),l=a.getPopupContainer,c=a.getPrefixCls,f=a.direction,u=(0,h.Z)(!1,{value:e.visible,defaultValue:e.defaultVisible}),d=(0,n.Z)(u,2),m=d[0],v=d[1],_=function(){var t=e.title,o=e.overlay;return!t&&!o&&0!==t},y=function(){var t=e.builtinPlacements,o=e.arrowPointAtCenter,r=e.autoAdjustOverflow;return t||function(e){var t=e.arrowWidth,o=void 0===t?4:t,r=e.horizontalArrowShift,n=void 0===r?16:r,s=e.verticalArrowShift,a=void 0===s?8:s,l=e.autoAdjustOverflow,c={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(n+o),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(a+o)]},topRight:{points:["br","tc"],offset:[n+o,-4]},rightTop:{points:["tl","cr"],offset:[4,-(a+o)]},bottomRight:{points:["tr","bc"],offset:[n+o,4]},rightBottom:{points:["bl","cr"],offset:[4,a+o]},bottomLeft:{points:["tl","bc"],offset:[-(n+o),4]},leftBottom:{points:["br","cl"],offset:[-4,a+o]}};return Object.keys(c).forEach((function(t){c[t]=e.arrowPointAtCenter?(0,i.Z)((0,i.Z)({},c[t]),{overflow:w(l),targetOffset:x}):(0,i.Z)((0,i.Z)({},p[t]),{overflow:w(l)}),c[t].ignoreShake=!0})),c}({arrowPointAtCenter:o,autoAdjustOverflow:r})},b=e.getPopupContainer,O=k(e,["getPopupContainer"]),S=e.prefixCls,E=e.openClassName,T=e.getTooltipContainer,V=e.overlayClassName,D=e.color,R=e.overlayInnerStyle,A=e.children,F=c("tooltip",S),q=c(),B=m;!("visible"in e)&&_()&&(B=!1);var M,H=I((0,C.l$)(A)?A:s.createElement("span",null,A),F),U=H.props,L=Z()(U.className,(0,r.Z)({},E||"".concat(F,"-open"),!0)),z=Z()(V,(o={},(0,r.Z)(o,"".concat(F,"-rtl"),"rtl"===f),(0,r.Z)(o,"".concat(F,"-").concat(D),D&&P.test(D)),o)),Q=R;return D&&!P.test(D)&&(Q=(0,i.Z)((0,i.Z)({},R),{background:D}),M={background:D}),s.createElement(g,(0,i.Z)({},O,{prefixCls:F,overlayClassName:z,getTooltipContainer:b||T||l,ref:t,builtinPlacements:y(),overlay:function(){var t=e.title,o=e.overlay;return 0===t?t:o||t||""}(),visible:B,onVisibleChange:function(t){var o;v(!_()&&t),_()||null===(o=e.onVisibleChange)||void 0===o||o.call(e,t)},onPopupAlign:function(e,t){var o=y(),r=Object.keys(o).filter((function(e){return o[e].points[0]===t.points[0]&&o[e].points[1]===t.points[1]}))[0];if(r){var n=e.getBoundingClientRect(),i={top:"50%",left:"50%"};r.indexOf("top")>=0||r.indexOf("Bottom")>=0?i.top="".concat(n.height-t.offset[1],"px"):(r.indexOf("Top")>=0||r.indexOf("bottom")>=0)&&(i.top="".concat(-t.offset[1],"px")),r.indexOf("left")>=0||r.indexOf("Right")>=0?i.left="".concat(n.width-t.offset[0],"px"):(r.indexOf("right")>=0||r.indexOf("Left")>=0)&&(i.left="".concat(-t.offset[0],"px")),e.style.transformOrigin="".concat(i.left," ").concat(i.top)}},overlayInnerStyle:Q,arrowContent:s.createElement("span",{className:"".concat(F,"-arrow-content"),style:M}),motion:{motionName:(0,N.m)(q,"zoom-big-fast",e.transitionName),motionDeadline:1e3}}),B?(0,C.Tm)(H,{className:L}):H)}));S.displayName="Tooltip",S.defaultProps={placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0};var E=S}}]);