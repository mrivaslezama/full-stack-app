"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[539],{183:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(5711);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.Z)("MailPlus",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M16 19h6",key:"xwg31i"}]])},9462:function(e,t,r){function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}r.d(t,{oT:function(){return N},gN:function(){return A},__:function(){return P},fC:function(){return T},k4:function(){return j}});var n=r(7294),a=r.t(n,2);function $e42e1063c40fb3ef$export$b9ecd428b558ff10(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(null==e||e(n),!1===r||!n.defaultPrevented)return null==t?void 0:t(n)}}function $6ed0406888f73fc4$var$setRef(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)}function $6ed0406888f73fc4$export$43e446d32b3d21af(...e){return t=>e.forEach(e=>$6ed0406888f73fc4$var$setRef(e,t))}function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...e){return(0,n.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...e),e)}function $c512c27ab02ef895$export$50c7b4e9d9f19c1(e,t=[]){let r=[];function $c512c27ab02ef895$export$fd42f52fd3ae1109(t,a){let l=(0,n.createContext)(a),i=r.length;function Provider(t){let{scope:r,children:a,...o}=t,d=(null==r?void 0:r[e][i])||l,c=(0,n.useMemo)(()=>o,Object.values(o));return(0,n.createElement)(d.Provider,{value:c},a)}function useContext(r,o){let d=(null==o?void 0:o[e][i])||l,c=(0,n.useContext)(d);if(c)return c;if(void 0!==a)return a;throw Error(`\`${r}\` must be used within \`${t}\``)}return r=[...r,a],Provider.displayName=t+"Provider",[Provider,useContext]}let createScope=()=>{let t=r.map(e=>(0,n.createContext)(e));return function(r){let a=(null==r?void 0:r[e])||t;return(0,n.useMemo)(()=>({[`__scope${e}`]:{...r,[e]:a}}),[r,a])}};return createScope.scopeName=e,[$c512c27ab02ef895$export$fd42f52fd3ae1109,$c512c27ab02ef895$var$composeContextScopes(createScope,...t)]}function $c512c27ab02ef895$var$composeContextScopes(...e){let t=e[0];if(1===e.length)return t;let createScope1=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let a=r.reduce((t,{useScope:r,scopeName:n})=>{let a=r(e),l=a[`__scope${n}`];return{...t,...l}},{});return(0,n.useMemo)(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return createScope1.scopeName=t.scopeName,createScope1}let l=(null==globalThis?void 0:globalThis.document)?n.useLayoutEffect:()=>{},i=a["useId".toString()]||(()=>void 0),o=0;function $1746a345f3d73bb7$export$f680877a34711e37(e){let[t,r]=n.useState(i());return l(()=>{e||r(e=>null!=e?e:String(o++))},[e]),e||(t?`radix-${t}`:"")}r(3935);let d=(0,n.forwardRef)((e,t)=>{let{children:r,...a}=e,l=n.Children.toArray(r),i=l.find($5e63c961fc1ce211$var$isSlottable);if(i){let e=i.props.children,r=l.map(t=>t!==i?t:n.Children.count(e)>1?n.Children.only(null):(0,n.isValidElement)(e)?e.props.children:null);return(0,n.createElement)(c,_extends({},a,{ref:t}),(0,n.isValidElement)(e)?(0,n.cloneElement)(e,void 0,r):null)}return(0,n.createElement)(c,_extends({},a,{ref:t}),r)});d.displayName="Slot";let c=(0,n.forwardRef)((e,t)=>{let{children:r,...a}=e;return(0,n.isValidElement)(r)?(0,n.cloneElement)(r,{...$5e63c961fc1ce211$var$mergeProps(a,r.props),ref:t?$6ed0406888f73fc4$export$43e446d32b3d21af(t,r.ref):r.ref}):n.Children.count(r)>1?n.Children.only(null):null});c.displayName="SlotClone";let $5e63c961fc1ce211$export$d9f1ccf0bdb05d45=({children:e})=>(0,n.createElement)(n.Fragment,null,e);function $5e63c961fc1ce211$var$isSlottable(e){return(0,n.isValidElement)(e)&&e.type===$5e63c961fc1ce211$export$d9f1ccf0bdb05d45}function $5e63c961fc1ce211$var$mergeProps(e,t){let r={...t};for(let n in t){let a=e[n],l=t[n],i=/^on[A-Z]/.test(n);i?a&&l?r[n]=(...e)=>{l(...e),a(...e)}:a&&(r[n]=a):"style"===n?r[n]={...a,...l}:"className"===n&&(r[n]=[a,l].filter(Boolean).join(" "))}return{...e,...r}}let u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,n.forwardRef)((e,r)=>{let{asChild:a,...l}=e,i=a?d:t;return(0,n.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,n.createElement)(i,_extends({},l,{ref:r}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),s=(0,n.forwardRef)((e,t)=>(0,n.createElement)(u.label,_extends({},e,{ref:t,onMouseDown:t=>{var r;null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}}))),[f,$]=$c512c27ab02ef895$export$50c7b4e9d9f19c1("Form"),v="Form",[m,p]=f(v),[b,h]=f(v),g=(0,n.forwardRef)((e,t)=>{let{__scopeForm:r,onClearServerErrors:a=()=>{},...l}=e,i=(0,n.useRef)(null),o=$6ed0406888f73fc4$export$c7b2cbe3552a0d05(t,i),[d,c]=(0,n.useState)({}),s=(0,n.useCallback)(e=>d[e],[d]),f=(0,n.useCallback)((e,t)=>c(r=>{var n;return{...r,[e]:{...null!==(n=r[e])&&void 0!==n?n:{},...t}}}),[]),$=(0,n.useCallback)(e=>{c(t=>({...t,[e]:void 0})),y(t=>({...t,[e]:{}}))},[]),[v,p]=(0,n.useState)({}),h=(0,n.useCallback)(e=>{var t;return null!==(t=v[e])&&void 0!==t?t:[]},[v]),g=(0,n.useCallback)((e,t)=>{p(r=>{var n;return{...r,[e]:[...null!==(n=r[e])&&void 0!==n?n:[],t]}})},[]),C=(0,n.useCallback)((e,t)=>{p(r=>{var n;return{...r,[e]:(null!==(n=r[e])&&void 0!==n?n:[]).filter(e=>e.id!==t)}})},[]),[E,y]=(0,n.useState)({}),F=(0,n.useCallback)(e=>{var t;return null!==(t=E[e])&&void 0!==t?t:{}},[E]),x=(0,n.useCallback)((e,t)=>{y(r=>{var n;return{...r,[e]:{...null!==(n=r[e])&&void 0!==n?n:{},...t}}})},[]),[_,M]=(0,n.useState)({}),S=(0,n.useCallback)((e,t)=>{M(r=>{let n=new Set(r[e]).add(t);return{...r,[e]:n}})},[]),I=(0,n.useCallback)((e,t)=>{M(r=>{let n=new Set(r[e]);return n.delete(t),{...r,[e]:n}})},[]),k=(0,n.useCallback)(e=>{var t;return Array.from(null!==(t=_[e])&&void 0!==t?t:[]).join(" ")||void 0},[_]);return(0,n.createElement)(m,{scope:r,getFieldValidity:s,onFieldValidityChange:f,getFieldCustomMatcherEntries:h,onFieldCustomMatcherEntryAdd:g,onFieldCustomMatcherEntryRemove:C,getFieldCustomErrors:F,onFieldCustomErrorsChange:x,onFieldValiditionClear:$},(0,n.createElement)(b,{scope:r,onFieldMessageIdAdd:S,onFieldMessageIdRemove:I,getFieldDescription:k},(0,n.createElement)(u.form,_extends({},l,{ref:o,onInvalid:$e42e1063c40fb3ef$export$b9ecd428b558ff10(e.onInvalid,e=>{let t=$d94698215c4408a7$var$getFirstInvalidControl(e.currentTarget);t===e.target&&t.focus(),e.preventDefault()}),onSubmit:$e42e1063c40fb3ef$export$b9ecd428b558ff10(e.onSubmit,a,{checkForDefaultPrevented:!1}),onReset:$e42e1063c40fb3ef$export$b9ecd428b558ff10(e.onReset,a)}))))}),C="FormField",[E,y]=f(C),F=(0,n.forwardRef)((e,t)=>{let{__scopeForm:r,name:a,serverInvalid:l=!1,...i}=e,o=p(C,r),d=o.getFieldValidity(a),c=$1746a345f3d73bb7$export$f680877a34711e37();return(0,n.createElement)(E,{scope:r,id:c,name:a,serverInvalid:l},(0,n.createElement)(u.div,_extends({"data-valid":$d94698215c4408a7$var$getValidAttribute(d,l),"data-invalid":$d94698215c4408a7$var$getInvalidAttribute(d,l)},i,{ref:t})))}),x="FormLabel",_=(0,n.forwardRef)((e,t)=>{let{__scopeForm:r,...a}=e,l=p(x,r),i=y(x,r),o=a.htmlFor||i.id,d=l.getFieldValidity(i.name);return(0,n.createElement)(s,_extends({"data-valid":$d94698215c4408a7$var$getValidAttribute(d,i.serverInvalid),"data-invalid":$d94698215c4408a7$var$getInvalidAttribute(d,i.serverInvalid)},a,{ref:t,htmlFor:o}))}),M="FormControl",S=(0,n.forwardRef)((e,t)=>{let{__scopeForm:r,...a}=e,l=p(M,r),i=y(M,r),o=h(M,r),d=(0,n.useRef)(null),c=$6ed0406888f73fc4$export$c7b2cbe3552a0d05(t,d),s=a.name||i.name,f=a.id||i.id,$=l.getFieldCustomMatcherEntries(s),{onFieldValidityChange:v,onFieldCustomErrorsChange:m,onFieldValiditionClear:b}=l,g=(0,n.useCallback)(async e=>{if($d94698215c4408a7$var$hasBuiltInError(e.validity)){let t=$d94698215c4408a7$var$validityStateToObject(e.validity);v(s,t);return}let t=e.form?new FormData(e.form):new FormData,r=[e.value,t],n=[],a=[];$.forEach(e=>{$d94698215c4408a7$var$isAsyncCustomMatcherEntry(e,r)?a.push(e):$d94698215c4408a7$var$isSyncCustomMatcherEntry(e)&&n.push(e)});let l=n.map(({id:e,match:t})=>[e,t(...r)]),i=Object.fromEntries(l),o=Object.values(i).some(Boolean);e.setCustomValidity(o?I:"");let d=$d94698215c4408a7$var$validityStateToObject(e.validity);if(v(s,d),m(s,i),!o&&a.length>0){let t=a.map(({id:e,match:t})=>t(...r).then(t=>[e,t])),n=await Promise.all(t),l=Object.fromEntries(n),i=Object.values(l).some(Boolean);e.setCustomValidity(i?I:"");let o=$d94698215c4408a7$var$validityStateToObject(e.validity);v(s,o),m(s,l)}},[$,s,m,v]);(0,n.useEffect)(()=>{let e=d.current;if(e){let handleChange=()=>g(e);return e.addEventListener("change",handleChange),()=>e.removeEventListener("change",handleChange)}},[g]);let C=(0,n.useCallback)(()=>{let e=d.current;e&&(e.setCustomValidity(""),b(s))},[s,b]);(0,n.useEffect)(()=>{var e;let t=null===(e=d.current)||void 0===e?void 0:e.form;if(t)return t.addEventListener("reset",C),()=>t.removeEventListener("reset",C)},[C]),(0,n.useEffect)(()=>{let e=d.current,t=null==e?void 0:e.closest("form");if(t&&i.serverInvalid){let r=$d94698215c4408a7$var$getFirstInvalidControl(t);r===e&&r.focus()}},[i.serverInvalid]);let E=l.getFieldValidity(s);return(0,n.createElement)(u.input,_extends({"data-valid":$d94698215c4408a7$var$getValidAttribute(E,i.serverInvalid),"data-invalid":$d94698215c4408a7$var$getInvalidAttribute(E,i.serverInvalid),"aria-invalid":!!i.serverInvalid||void 0,"aria-describedby":o.getFieldDescription(s),title:""},a,{ref:c,id:f,name:s,onInvalid:$e42e1063c40fb3ef$export$b9ecd428b558ff10(e.onInvalid,e=>{let t=e.currentTarget;g(t)}),onChange:$e42e1063c40fb3ef$export$b9ecd428b558ff10(e.onChange,e=>{C()})}))}),I="This value is not valid",k={badInput:I,patternMismatch:"This value does not match the required pattern",rangeOverflow:"This value is too large",rangeUnderflow:"This value is too small",stepMismatch:"This value does not match the required step",tooLong:"This value is too long",tooShort:"This value is too short",typeMismatch:"This value does not match the required type",valid:void 0,valueMissing:"This value is missing"},w="FormMessage",V=((e,t)=>{let{match:r,forceMatch:a=!1,name:l,children:i,...o}=e,d=p(w,o.__scopeForm),c=d.getFieldValidity(l),u=a||(null==c?void 0:c[r]);return u?(0,n.createElement)(V,_extends({ref:t},o,{name:l}),null!=i?i:k[r]):null},(0,n.forwardRef)((e,t)=>{let{__scopeForm:r,id:a,name:l,...i}=e,o=h(w,r),d=$1746a345f3d73bb7$export$f680877a34711e37(),c=null!=a?a:d,{onFieldMessageIdAdd:s,onFieldMessageIdRemove:f}=o;return(0,n.useEffect)(()=>(s(l,c),()=>f(l,c)),[l,c,s,f]),(0,n.createElement)(u.span,_extends({id:c},i,{ref:t}))})),R=(0,n.forwardRef)((e,t)=>{let{__scopeForm:r,...a}=e;return(0,n.createElement)(u.button,_extends({type:"submit"},a,{ref:t}))});function $d94698215c4408a7$var$validityStateToObject(e){let t={};for(let r in e)t[r]=e[r];return t}function $d94698215c4408a7$var$isHTMLElement(e){return e instanceof HTMLElement}function $d94698215c4408a7$var$isFormControl(e){return"validity"in e}function $d94698215c4408a7$var$isInvalid(e){return $d94698215c4408a7$var$isFormControl(e)&&(!1===e.validity.valid||"true"===e.getAttribute("aria-invalid"))}function $d94698215c4408a7$var$getFirstInvalidControl(e){let t=e.elements,[r]=Array.from(t).filter($d94698215c4408a7$var$isHTMLElement).filter($d94698215c4408a7$var$isInvalid);return r}function $d94698215c4408a7$var$isAsyncCustomMatcherEntry(e,t){return"AsyncFunction"===e.match.constructor.name||$d94698215c4408a7$var$returnsPromise(e.match,t)}function $d94698215c4408a7$var$isSyncCustomMatcherEntry(e){return"Function"===e.match.constructor.name}function $d94698215c4408a7$var$returnsPromise(e,t){return e(...t) instanceof Promise}function $d94698215c4408a7$var$hasBuiltInError(e){let t=!1;for(let r in e)if("valid"!==r&&"customError"!==r&&e[r]){t=!0;break}return t}function $d94698215c4408a7$var$getValidAttribute(e,t){if((null==e?void 0:e.valid)===!0&&!t)return!0}function $d94698215c4408a7$var$getInvalidAttribute(e,t){if((null==e?void 0:e.valid)===!1||t)return!0}let T=g,A=F,P=_,N=S,j=R}}]);