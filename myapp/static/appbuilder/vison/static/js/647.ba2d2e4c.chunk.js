"use strict";(self.webpackChunkvite_ml_platform=self.webpackChunkvite_ml_platform||[]).push([[647],{93483:function(e,t,n){n.d(t,{Z:function(){return a}});n(64606);var r=n(23530),i=n(80340);function a(e){var t=e.columns,n=e.data;return(0,i.jsx)("div",{children:(0,i.jsx)(r.Z,{pagination:!1,columns:t,dataSource:n})})}},98647:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(24258),i=n(12898),a=n(64606),s=n(96279),l=n(79445),o=n(4879),d=n(12522),c=n(78195),u=n(57764),m=n(38319),p=n(78288),f=n(23530),x=n(80340);function h(e){var t=e.columns,n=e.data;return(0,x.jsx)("div",{children:(0,x.jsx)(f.Z,{columns:t,dataSource:n})})}var _=n(93483),v=n(29916),j=n(90117),y={padding:"8px 0",display:"flex",alignItems:"center"};function g(){var e=(0,v.k6)(),t=(0,a.useState)({bid:"",business:"",cre_time:"",last_mod:"",owner_rtxs:"",report_field:"",resource_info:"",sample_id:"",scene_desc:"",scene_id:"",scene_name:"",tid:"",ReFeatureInformationTitle:"\u573a\u666f\u6a21\u578b\u914d\u7f6e\u4fe1\u606f"}),n=(0,i.Z)(t,2),f=n[0],g=n[1],Z=(0,a.useState)([]),k=(0,i.Z)(Z,2),w=k[0],I=k[1],N=(0,a.useState)([{feature_set_id:""}]),S=(0,i.Z)(N,2),b=S[0],C=S[1],z=(0,a.useState)(""),F=(0,i.Z)(z,2),P=F[0],E=F[1],O=[{title:"\u6a21\u578bid",dataIndex:"model_id",key:"model_id",render:function(e){return(0,x.jsx)("div",{children:e})}},{title:"\u540d\u5b57",dataIndex:"model_name",key:"model_name",ellipsis:!0},{title:"\u9884\u6d4b\u76ee\u6807",dataIndex:"preds",key:"preds"},{title:"\u8d85\u65f6",dataIndex:"resource_info",key:"resource_info",render:function(e){return e.timeout}},{title:"\u7279\u5f81\u63d2\u4ef6\u914d\u7f6e",dataIndex:"fe_proc_id",key:"fe_proc_id",width:120,render:function(e){return(0,x.jsx)(s.Z,{size:"middle",children:(0,x.jsx)("a",{onClick:function(){return D(e)},children:e.fe_proc_name})})}},{title:"\u6a21\u578b\u670d\u52a1\u914d\u7f6e",dataIndex:"resource_info",key:"resource_info",width:120,ellipsis:!0,render:function(e){return(0,x.jsx)(l.Z,{title:e.model_serv_name,children:(0,x.jsx)(s.Z,{size:"middle",children:(0,x.jsx)("a",{onClick:function(){return G(e)},children:e.model_serv_name})})})}},{title:"\u8d23\u4efb\u4eba",dataIndex:"owner_rtxs",key:"owner_rtxs"},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"cre_time",key:"cre_time",width:140},{title:"\u4e0a\u6b21\u4fee\u6539\u65f6\u95f4",dataIndex:"last_mod",key:"last_mod",width:140},{title:"\u64cd\u4f5c",key:"action",render:function(e,t){return(0,x.jsx)(s.Z,{size:"middle",onClick:function(){return H(e)},children:(0,x.jsx)("a",{children:"Edit"})})}}],R=[{title:"\u7279\u5f81\u96c6\u5408ID",dataIndex:"feature_set_id",key:"feature_set_id"},{title:"\u540d\u5b57",dataIndex:"feature_set_name",key:"feature_set_name"},{title:"\u8d23\u4efb\u4eba",dataIndex:"owner_rtxs",key:"owner_rtxs"},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"cre_time",key:"cre_time",width:140},{title:"\u4e0a\u6b21\u4fee\u6539\u65f6\u95f4",dataIndex:"last_mod",key:"last_mod",width:140},{title:"\u64cd\u4f5c",key:"action",render:function(e,t){return"\u67e5\u770b\u573a\u666f\u6a21\u578b\u914d\u7f6e\u4fe1\u606f"===f.ReFeatureInformationTitle?"":(0,x.jsx)(s.Z,{size:"middle",onClick:function(){return M(t)},children:(0,x.jsx)("a",{children:"Edit"})})}}];(0,a.useEffect)((function(){var t={};e.location.state?(t=e.location.state,sessionStorage.setItem("sceneModelInformationKeyID",JSON.stringify(t)),g(t),T(t.scene_id)):(t=JSON.parse(sessionStorage.getItem("sceneModelInformationKeyID")||""),g(t),T(t.scene_id))}),[]);var M=function(t){e.push({pathname:"/HeterogeneousPlatform/Nationalkaraoke/FeatureSetConfiguration",state:(0,r.Z)((0,r.Z)({},f),{},{title:"\u66f4\u6539\u7279\u5f81\u96c6\u5408\u914d\u7f6e",record:t})})},H=function(t){e.push({pathname:"/HeterogeneousPlatform/Nationalkaraoke/RegisterModelInformation",state:(0,r.Z)((0,r.Z)({},t),{},{feature_set_id:P,title:"\u66f4\u6539\u6ce8\u518c\u6a21\u578b\u4fe1\u606f"})})},D=function(t){e.push({pathname:"/HeterogeneousPlatform/Nationalkaraoke/FeatureConfiguration",state:(0,r.Z)((0,r.Z)({},t),{},{feature_set_id:P,title:"\u66f4\u6539\u7279\u5f81\u63d2\u4ef6\u914d\u7f6e"})})},G=function(t){e.push({pathname:"/HeterogeneousPlatform/Nationalkaraoke/RegisterModelService",state:(0,r.Z)((0,r.Z)({},t),{},{feature_set_id:P,title:"\u66f4\u6539\u6a21\u578b\u670d\u52a1"})})};function T(e){j.Z.featureSceneDisplayGetQuest(e).then((function(e){if(0===e.retcode){o.ZP.success("\u67e5\u8be2\u6210\u529f"),I(e.result.ModelConfigs);var t=[];t.push(e.result.FeatureSet),C(t),E(e.result.FeatureSet.feature_set_id)}else e.retmsg&&o.ZP.error("\u5931\u8d25\u539f\u56e0: ".concat(e.retmsg))}))}return(0,x.jsx)("div",{className:"SceneModelInformationClassLess",children:(0,x.jsxs)("div",{className:"bodyClass",children:[(0,x.jsx)("div",{className:"SceneHeader",children:null===f||void 0===f?void 0:f.ReFeatureInformationTitle}),(0,x.jsxs)("div",{className:"site-card-border-less-wrapper",children:[(0,x.jsx)(d.Z,{title:"\u57fa\u672c\u4fe1\u606f",bordered:!1,children:(0,x.jsxs)(c.Z,{gutter:16,children:[(0,x.jsx)(u.Z,{className:"gutter-row",span:12,children:(0,x.jsxs)("div",{style:y,children:[(0,x.jsx)("span",{style:{width:"26%"},children:"\u573a\u666fID"}),(0,x.jsx)("span",{children:null===f||void 0===f?void 0:f.scene_id})]})}),(0,x.jsx)(u.Z,{className:"gutter-row",span:12,children:(0,x.jsxs)("div",{style:y,children:[(0,x.jsx)("span",{style:{width:"26%"},children:"\u6240\u5c5e\u4e1a\u52a1"}),(0,x.jsx)("span",{children:function(e){switch(e){case 1:return"QQ\u97f3\u4e50";case 2:return"\u5168\u6c11K\u6b4c";default:return"\u672a\u77e5"}}(null===f||void 0===f?void 0:f.business)})]})}),(0,x.jsx)(u.Z,{className:"gutter-row",span:12,children:(0,x.jsxs)("div",{style:y,children:[(0,x.jsx)("span",{style:{width:"26%"},children:"\u573a\u666f\u82f1\u6587\u540d"}),(0,x.jsx)("span",{children:null===f||void 0===f?void 0:f.scene_name})]})}),(0,x.jsx)(u.Z,{className:"gutter-row",span:12,children:(0,x.jsxs)("div",{style:y,children:[(0,x.jsx)("span",{style:{width:"26%"},children:"\u8d23\u4efb\u4eba"}),(0,x.jsx)("span",{children:null===f||void 0===f?void 0:f.owner_rtxs})]})}),(0,x.jsx)(u.Z,{className:"gutter-row",span:12,children:(0,x.jsxs)("div",{style:y,children:[(0,x.jsx)("span",{style:{width:"26%"},children:"\u4e0a\u62a5bid"}),(0,x.jsx)("span",{children:null===f||void 0===f?void 0:f.bid})]})}),(0,x.jsx)(u.Z,{className:"gutter-row",span:12,children:(0,x.jsxs)("div",{style:y,children:[(0,x.jsx)("span",{style:{width:"26%"},children:"\u4e0a\u62a5tid"}),(0,x.jsx)("span",{children:null===f||void 0===f?void 0:f.tid})]})}),(0,x.jsx)(u.Z,{className:"gutter-row",span:12,children:(0,x.jsxs)("div",{style:y,children:[(0,x.jsx)("span",{style:{width:"26%"},children:"\u4e0a\u62a5\u5b57\u6bb5"}),(0,x.jsx)("span",{children:null===f||void 0===f?void 0:f.report_field})]})})]})}),(0,x.jsx)(d.Z,{title:"\u7279\u5f81\u96c6\u5408\u914d\u7f6e\u4fe1\u606f",extra:b.map((function(e){return e.feature_set_id?"":(0,x.jsx)(m.Z,{children:(0,x.jsx)(p.Z,{})})})),bordered:!1,children:(0,x.jsx)(_.Z,{columns:R,data:b})}),(0,x.jsx)(d.Z,{title:"\u6a21\u578b\u670d\u52a1\u914d\u7f6e\u4fe1\u606f",extra:"\u67e5\u770b\u573a\u666f\u6a21\u578b\u914d\u7f6e\u4fe1\u606f"===f.ReFeatureInformationTitle?"":(0,x.jsx)(m.Z,{onClick:function(){e.push({pathname:"/HeterogeneousPlatform/Nationalkaraoke/RegisterModelInformation",state:(0,r.Z)((0,r.Z)({},f),{},{feature_set_id:P,title:"\u66f4\u6539\u7279\u5f81\u63d2\u4ef6\u914d\u7f6e"})})},children:(0,x.jsx)(p.Z,{})}),bordered:!1,children:(0,x.jsx)(h,{columns:O,data:w})}),(0,x.jsxs)("div",{className:"preservationClass",children:[(0,x.jsx)(m.Z,{style:{backgroundColor:"rgba(255, 87, 51, 1)",width:" 140px",height:"40px",marginRight:"10px"},onClick:function(){return e.go(-1)},type:"primary",children:"\u8fd4\u56de"}),(0,x.jsx)(m.Z,{style:{backgroundColor:"rgba(255, 87, 51, 1)",width:" 140px",height:"40px"},type:"primary",onClick:function(){"\u4fee\u6539\u573a\u666f\u6a21\u578b\u914d\u7f6e\u4fe1\u606f"===f.ReFeatureInformationTitle||"\u573a\u666f\u6a21\u578b\u914d\u7f6e\u4fe1\u606f"===f.ReFeatureInformationTitle?(T(f.scene_id),e.push("/HeterogeneousPlatform/Nationalkaraoke")):e.push("/HeterogeneousPlatform/Nationalkaraoke")},children:"\u4fdd\u5b58"})]})]})]})})}},96279:function(e,t,n){n.d(t,{u:function(){return f},Z:function(){return h}});var r=n(17706),i=n(16027),a=n(12898),s=n(64606),l=n(82444),o=n.n(l),d=n(86131),c=n(3251);function u(e){var t=e.className,n=e.direction,a=e.index,l=e.marginDirection,o=e.children,d=e.split,c=e.wrap,u=s.useContext(f),m=u.horizontalSize,p=u.verticalSize,x=u.latestIndex,h={};return u.supportFlexGap||("vertical"===n?a<x&&(h={marginBottom:m/(d?2:1)}):h=(0,r.Z)((0,r.Z)({},a<x&&(0,i.Z)({},l,m/(d?2:1))),c&&{paddingBottom:p})),null===o||void 0===o?null:s.createElement(s.Fragment,null,s.createElement("div",{className:t,style:h},o),a<x&&d&&s.createElement("span",{className:"".concat(t,"-split"),style:h},d))}var m=n(2341),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},f=s.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),x={small:8,middle:16,large:24};var h=function(e){var t,n=s.useContext(c.E_),l=n.getPrefixCls,h=n.space,_=n.direction,v=e.size,j=void 0===v?(null===h||void 0===h?void 0:h.size)||"small":v,y=e.align,g=e.className,Z=e.children,k=e.direction,w=void 0===k?"horizontal":k,I=e.prefixCls,N=e.split,S=e.style,b=e.wrap,C=void 0!==b&&b,z=p(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),F=(0,m.Z)(),P=s.useMemo((function(){return(Array.isArray(j)?j:[j,j]).map((function(e){return function(e){return"string"===typeof e?x[e]:e||0}(e)}))}),[j]),E=(0,a.Z)(P,2),O=E[0],R=E[1],M=(0,d.Z)(Z,{keepEmpty:!0}),H=void 0===y&&"horizontal"===w?"center":y,D=l("space",I),G=o()(D,"".concat(D,"-").concat(w),(t={},(0,i.Z)(t,"".concat(D,"-rtl"),"rtl"===_),(0,i.Z)(t,"".concat(D,"-align-").concat(H),H),t),g),T="".concat(D,"-item"),B="rtl"===_?"marginLeft":"marginRight",K=0,Q=M.map((function(e,t){return null!==e&&void 0!==e&&(K=t),s.createElement(u,{className:T,key:"".concat(T,"-").concat(t),direction:w,index:t,marginDirection:B,split:N,wrap:C},e)})),A=s.useMemo((function(){return{horizontalSize:O,verticalSize:R,latestIndex:K,supportFlexGap:F}}),[O,R,K,F]);if(0===M.length)return null;var J={};return C&&(J.flexWrap="wrap",F||(J.marginBottom=-R)),F&&(J.columnGap=O,J.rowGap=R),s.createElement("div",(0,r.Z)({className:G,style:(0,r.Z)((0,r.Z)({},J),S)},z),s.createElement(f.Provider,{value:A},Q))}}}]);