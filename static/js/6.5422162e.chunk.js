(this["webpackJsonpinstagram-clone"]=this["webpackJsonpinstagram-clone"]||[]).push([[6],{115:function(e,a,o){"use strict";o.d(a,"a",(function(){return c})),o.d(a,"c",(function(){return d})),o.d(a,"d",(function(){return i}));var t=o(116),n=t.a.initializeApp({apiKey:"AIzaSyCztakH5kbQAx_-8SNOZtDLoq-8AmHTN1U",authDomain:"instagram-clone-react-e8004.firebaseapp.com",projectId:"instagram-clone-react-e8004",storageBucket:"instagram-clone-react-e8004.appspot.com",messagingSenderId:"485454194350",appId:"1:485454194350:web:9dcef08d4383719e2bef3f",measurementId:"G-1Z61LZMR0Q"}),r=t.a.firestore(),i=n.storage(),c=n.auth(),d=new t.a.auth.GoogleAuthProvider;a.b=r},132:function(e,a,o){"use strict";var t=o(3),n=o(1),r=o(0),i=(o(6),o(4)),c=o(7),d=o(16),l=o(78),s=o(13),p=r.forwardRef((function(e,a){var o=e.children,c=e.classes,d=e.className,p=e.color,b=void 0===p?"default":p,m=e.component,u=void 0===m?"button":m,h=e.disabled,g=void 0!==h&&h,y=e.disableElevation,x=void 0!==y&&y,f=e.disableFocusRipple,S=void 0!==f&&f,v=e.endIcon,k=e.focusVisibleClassName,z=e.fullWidth,j=void 0!==z&&z,C=e.size,O=void 0===C?"medium":C,w=e.startIcon,I=e.type,R=void 0===I?"button":I,N=e.variant,L=void 0===N?"text":N,T=Object(t.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),$=w&&r.createElement("span",{className:Object(i.a)(c.startIcon,c["iconSize".concat(Object(s.a)(O))])},w),E=v&&r.createElement("span",{className:Object(i.a)(c.endIcon,c["iconSize".concat(Object(s.a)(O))])},v);return r.createElement(l.a,Object(n.a)({className:Object(i.a)(c.root,c[L],d,"inherit"===b?c.colorInherit:"default"!==b&&c["".concat(L).concat(Object(s.a)(b))],"medium"!==O&&[c["".concat(L,"Size").concat(Object(s.a)(O))],c["size".concat(Object(s.a)(O))]],x&&c.disableElevation,g&&c.disabled,j&&c.fullWidth),component:u,disabled:g,focusRipple:!S,focusVisibleClassName:Object(i.a)(c.focusVisible,k),ref:a,type:R},T),r.createElement("span",{className:c.label},$,o,E))}));a.a=Object(c.a)((function(e){return{root:Object(n.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(d.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(d.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(d.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(d.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(d.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(p)},147:function(e,a,o){"use strict";o.r(a),o.d(a,"default",(function(){return s}));var t=o(18),n=o(132),r=(o(0),o(49)),i=o(115),c=o(14),d=o(30),l=o(2);function s(){var e=Object(c.b)(),a=Object(t.a)(e,2),o=(a[0].user,a[1]);return Object(l.jsxs)("div",{className:"py-5 flex flex-col items-center text-center",children:[Object(l.jsx)("img",{className:"my-5 object-contain",src:r.a,alt:"Instagram Logo",style:{width:200,height:200}}),Object(l.jsx)(n.a,{className:"focus:outline-none",onClick:function(){i.a.signInWithPopup(i.c).then((function(e){o({type:d.a.SET_USER,user:e.user})})).catch((function(e){console.log(e)}))},style:{background:"#1976D2",paddingTop:"0.8rem",paddingBottom:"0.8rem",borderRadius:"1.6rem"},variant:"contained",color:"primary",children:"Login With Google"})]})}}}]);
//# sourceMappingURL=6.5422162e.chunk.js.map