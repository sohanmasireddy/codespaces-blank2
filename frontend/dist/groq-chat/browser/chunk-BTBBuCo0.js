import{$ as ce$1,$t as wr$1,A as P$,At as ou,B as Tg,Bt as tw,C as Iy,Ct as me$1,D as O,Dt as mv,E as My,Et as mt$1,F as QI,Ft as pu,G as Yw,Gt as vg,H as Xm,Ht as uI,I as Qm,It as rw,J as _y,Jt as vr$1,K as Z,Kt as vn$1,L as SI,Lt as se$1,M as Pp,Mt as pI,N as Ps$1,Nt as pa$1,O as Ob,Ot as nb,P as Q,Pt as pe$1,Q as cI,Qt as wg,R as Sg,Rt as tb,S as Ig,St as m,T as Ke$1,Tt as mr$1,U as Xr,Ut as ue$1,V as Xg,Vt as uB,W as Xs,Wt as ug,X as bg,Xt as wI,Y as ai,Yt as w2,Z as br$1,Zt as wa$1,_ as Er$1,_t as kr$1,a as CI,an as ya$1,at as fB,b as Fe$1,bt as lt$1,c as Ci,cn as yy,ct as fg,d as Dn$1,dn as p,dt as fu,en as wy,et as dI,f as Do$1,fn as q,ft as ga$1,g as Eo$1,gt as k,h as Ea$1,ht as hu,i as As$1,in as xy,it as ee,j as Pb,jt as pB,k as Os$1,kt as nn$1,l as DI,ln as z,lt as fh,m as E,mt as gs$1,n as $e$1,nn as xg,nt as dr$1,o as Cb,on as yg,ot as fI,p as Dr$1,pt as gg,q as _I,qt as vo$1,r as Ar$1,rn as xs$1,rt as eb,s as Cg,sn as yr$1,st as ff,t as $b,tn as xc,tt as df,u as Dg,un as zl,ut as fo$1,v as Et$1,vt as ks$1,w as Jr$1,wt as mg,x as Gi$1,xt as lu,y as Ey,yt as lB,z as TI,zt as tr}from"./main-TUDV6A2E.js";var Qi=(()=>{class i{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,n){this._renderer=t,this._elementRef=n}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty(`disabled`,t)}static ɵfac=function(n){return new(n||i)(mr$1(dr$1),mr$1(Ke$1))};static ɵdir=ou({type:i})}return i})();var Cn=(()=>{class i extends Qi{static ɵfac=(()=>{let t;return function(o){return(t||(t=Pp(i)))(o||i)}})();static ɵdir=ou({type:i,features:[ug]})}return i})();var Pe=new E(``);var Jr={provide:Pe,useExisting:Ci(()=>Ve),multi:!0};function ta(){let i=mt$1()?mt$1().getUserAgent():``;return/android (\d+)/.test(i.toLowerCase())}var ea=new E(``);var Ve=(()=>{class i extends Qi{_compositionMode;_composing=!1;constructor(t,n,o){super(t,n),this._compositionMode=o,this._compositionMode??=!ta()}writeValue(t){let n=t??``;this.setProperty(`value`,n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static ɵfac=function(n){return new(n||i)(mr$1(dr$1),mr$1(Ke$1),mr$1(ea,8))};static ɵdir=ou({type:i,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(n,o){n&1&&Ig(`input`,function(a){return o._handleInput(a.target.value)})(`blur`,function(){return o.onTouched()})(`compositionstart`,function(){return o._compositionStart()})(`compositionend`,function(a){return o._compositionEnd(a.target.value)})},standalone:!1,features:[eb([Jr]),ug]})}return i})();function Sn(i){return i==null||wn(i)===0}function wn(i){return i==null?null:Array.isArray(i)||typeof i==`string`?i.length:i instanceof Set?i.size:null}var Ji=new E(``);var na=new E(``);var ia=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var bn=class{static min(e){return oa(e)}static max(e){return ra(e)}static required(e){return to(e)}static requiredTrue(e){return aa(e)}static email(e){return sa(e)}static minLength(e){return la(e)}static maxLength(e){return da(e)}static pattern(e){return ca(e)}static nullValidator(e){return Re()}static compose(e){return ao(e)}static composeAsync(e){return lo(e)}};function oa(i){return e=>{if(e.value==null||i==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t<i?{min:{min:i,actual:e.value}}:null}}function ra(i){return e=>{if(e.value==null||i==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t>i?{max:{max:i,actual:e.value}}:null}}function to(i){return Sn(i.value)?{required:!0}:null}function aa(i){return i.value===!0?null:{required:!0}}function sa(i){return Sn(i.value)||ia.test(i.value)?null:{email:!0}}function la(i){return e=>{let t=e.value?.length??wn(e.value);return t===null||t===0?null:t<i?{minlength:{requiredLength:i,actualLength:t}}:null}}function da(i){return e=>{let t=e.value?.length??wn(e.value);return t!==null&&t>i?{maxlength:{requiredLength:i,actualLength:t}}:null}}function ca(i){if(!i)return Re;let e,t;return typeof i==`string`?(t=``,i.charAt(0)!==`^`&&(t+=`^`),t+=i,i.charAt(i.length-1)!==`$`&&(t+=`$`),e=new RegExp(t)):(t=i.toString(),e=i),n=>{if(Sn(n.value))return null;let o=n.value;return e.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}function Re(i){return null}function eo(i){return i!=null}function no(i){return xs$1(i)?$e$1(i):i}function io(i){let e={};return i.forEach(t=>{e=t!=null?p(p({},e),t):e}),Object.keys(e).length===0?null:e}function oo(i,e){return e.map(t=>t(i))}function ma(i){return!i.validate}function ro(i){return i.map(e=>ma(e)?e:t=>e.validate(t))}function ao(i){if(!i)return null;let e=i.filter(eo);return e.length==0?null:function(t){return io(oo(t,e))}}function so(i){return i!=null?ao(ro(i)):null}function lo(i){if(!i)return null;let e=i.filter(eo);return e.length==0?null:function(t){let n=oo(t,e).map(no);return Ey(n).pipe(se$1(io))}}function co(i){return i!=null?lo(ro(i)):null}function Hi(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function ua(i){return i._rawValidators}function fa(i){return i._rawAsyncValidators}function gn(i){return i?Array.isArray(i)?i:[i]:[]}function Fe(i,e){return Array.isArray(i)?i.includes(e):i===e}function Gi(i,e){let t=gn(e);return gn(i).forEach(o=>{Fe(t,o)||t.push(o)}),t}function Ui(i,e){return gn(e).filter(t=>!Fe(i,t))}var Ie=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=so(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=co(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control?.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}};var vn=class extends Ie{name;get formDirective(){return null}get path(){return null}};var ne=`VALID`;var Ae=`INVALID`;var $t=`PENDING`;var ie=`DISABLED`;var Vt=class{};var Te=class extends Vt{value;source;constructor(e,t){super(),this.value=e,this.source=t}};var oe=class extends Vt{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}};var re=class extends Vt{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}};var qt=class extends Vt{status;source;constructor(e,t){super(),this.status=e,this.source=t}};var ae=class extends Vt{source;constructor(e){super(),this.source=e}};function pa(i){return(Le(i)?i.validators:i)||null}function ha(i){return Array.isArray(i)?so(i):i||null}function ba(i,e){return(Le(e)?e.asyncValidators:i)||null}function ga(i){return Array.isArray(i)?co(i):i||null}function Le(i){return i!=null&&!Array.isArray(i)&&typeof i==`object`}var va=Symbol();var yn=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=tr(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this[va]=!0,this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return Er$1(this.statusReactive)}set status(e){Er$1(()=>this.statusReactive.set(e))}_status=Dr$1(()=>this.statusReactive());statusReactive=tr(void 0);get valid(){return this.status===ne}get invalid(){return this.status===Ae}get pending(){return this.status===$t}get disabled(){return this.status===ie}get enabled(){return this.status!==ie}get errors(){return Er$1(this.errorsReactive)}set errors(e){Er$1(()=>this.errorsReactive.set(e))}_errors=Dr$1(()=>this.errorsReactive());errorsReactive=tr(null);get pristine(){return Er$1(this.pristineReactive)}set pristine(e){Er$1(()=>this.pristineReactive.set(e))}_pristine=Dr$1(()=>this.pristineReactive());pristineReactive=tr(!0);get dirty(){return!this.pristine}get touched(){return Er$1(this.touchedReactive)}set touched(e){Er$1(()=>this.touchedReactive.set(e))}_touched=Dr$1(()=>this.touchedReactive());touchedReactive=tr(!1);get untouched(){return!this.touched}_events=new z;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Gi(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Gi(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ui(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ui(e,this._rawAsyncValidators))}hasValidator(e){return Fe(this._rawValidators,e)}hasAsyncValidator(e){return Fe(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;e.onlySelf||this._parent?.markAsTouched(q(p({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new re(!0,n))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),e.onlySelf||this._parent?._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new re(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;e.onlySelf||this._parent?.markAsDirty(q(p({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new oe(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),e.onlySelf||this._parent?._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new oe(!0,n))}markAsPending(e={}){this.status=$t;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new qt(this.status,t)),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.markAsPending(q(p({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=ie,this.errors=null,this._forEachChild(o=>{o.disable(q(p({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Te(this.value,n)),this._events.next(new qt(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(q(p({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=ne,this._forEachChild(n=>{n.enable(q(p({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(q(p({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){e.onlySelf||(this._parent?.updateValueAndValidity(e),e.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ne||this.status===$t)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Te(this.value,t)),this._events.next(new qt(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.updateValueAndValidity(q(p({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ie:ne}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=$t,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:e!==!1};let n=no(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(`.`)),t.length===0)?null:t.reduce((n,o)=>n&&n._find(o),this)}getError(e,t){let n=t?this.get(t):this;return n?.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new qt(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new me$1,this.statusChanges=new me$1}_calculateStatus(){return this._allControlsDisabled()?ie:this.errors?Ae:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus($t)?$t:this._anyControlsHaveStatus(Ae)?Ae:ne}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),o=this.pristine!==n;this.pristine=n,e.onlySelf||this._parent?._updatePristine(e,t),o&&this._events.next(new oe(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new re(this.touched,t)),e.onlySelf||this._parent?._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Le(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ha(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ga(this._rawAsyncValidators)}_updateHasRequiredValidator(){Er$1(()=>this._hasRequired.set(this.hasValidator(bn.required)))}};function ya(i){return i.tagName===`INPUT`||i.tagName===`SELECT`||i.tagName===`TEXTAREA`}function _a(i,e,t,n){switch(t){case`name`:i.setAttribute(e,t,n);break;case`disabled`:case`readonly`:case`required`:n?i.setAttribute(e,t,``):i.removeAttribute(e,t);break;case`max`:case`min`:case`minLength`:case`maxLength`:n!==void 0?i.setAttribute(e,t,n.toString()):i.removeAttribute(e,t)}}var _n=class{kind;context;control;message;constructor({kind:e,context:t,control:n}){this.kind=e,this.context=t,this.control=n}};var xa=new E(``);var mo=new E(``,{factory:()=>Mn});var Mn=`always`;function Ca(i,e){return[...e.path,i]}function Wi(i,e,t=Mn){uo(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t===`always`)&&e.valueAccessor.setDisabledState?.(i.disabled),wa(i,e),Na(i,e),Ma(i,e),Sa(i,e)}function $i(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Sa(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function uo(i,e){let t=ua(i);e.validator!==null?i.setValidators(Hi(t,e.validator)):typeof t==`function`&&i.setValidators([t]);let n=fa(i);e.asyncValidator!==null?i.setAsyncValidators(Hi(n,e.asyncValidator)):typeof n==`function`&&i.setAsyncValidators([n]);let o=()=>i.updateValueAndValidity();$i(e._rawValidators,o),$i(e._rawAsyncValidators,o)}function wa(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn===`change`&&fo(i,e)})}function Ma(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn===`blur`&&i._pendingChange&&fo(i,e),i.updateOn!==`submit`&&i.markAsTouched()})}function fo(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Na(i,e){let t=(n,o)=>{e.valueAccessor.writeValue(n),o&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Ea(i,e){if(!Object.hasOwn(i,`model`))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function ka(i){return Object.getPrototypeOf(i.constructor)===Cn}function Da(i,e){if(!e)return null;let t,n,o;return e.forEach(r=>{r.constructor===Ve?t=r:ka(r)?n=r:o=r}),o||n||t||null}var Oa=(()=>{class i{_validator=Re;_onChange;get _enabled(){return this.enabledReactive()}enabledReactive=tr(void 0);ngOnChanges(t){if(this.inputName in t){let n=this.normalizeInput(t[this.inputName].currentValue),o=this.enabled(n);this.enabledReactive.set(o),this._validator=o?this.createValidator(n):Re,this._onChange?.()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static ɵfac=function(n){return new(n||i)};static ɵdir=ou({type:i,features:[fo$1]})}return i})();var Aa={provide:Ji,useExisting:Ci(()=>po),multi:!0};var po=(()=>{class i extends Oa{required;inputName=`required`;normalizeInput=Ob;createValidator=t=>to;enabled(t){return t}static ɵfac=(()=>{let t;return function(o){return(t||(t=Pp(i)))(o||i)}})();static ɵdir=ou({type:i,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(n,o){n&2&&mg(`required`,o._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[eb([Aa]),ug]})}return i})();var Ra={provide:xa,useFactory:()=>{let i=m(Yt,{self:!0});return{setParseErrors:e=>{i.setParseErrorSource(e)},set onReset(e){i.onReset=e}}}};var Yt=class extends Ie{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(e){this.userOnReset=e,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof ae&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=Da(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;pendingCustomValue=void 0;hasPendingCustomValue=!1;constructor(e,t,n){super(),this.injector=e,this.renderer=t,this.rawValueAccessors=n,this.injector?.get(ue$1)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let e=this.control,t=this.injector?.get(Cb);if(!e||!t)return;uo(e,this);let n=t.markForCheck.bind(t);if(this.subscription=new Q,this.subscription.add(()=>this.discardPendingCustomValue(e)),typeof e.registerOnChange==`function`){let o=(r,a)=>{this.discardPendingCustomValue(e),a&&this.viewToModelUpdate(r),n()};e.registerOnChange(o),this.subscription.add(()=>e._unregisterOnChange(o))}this.subscription.add(e.valueChanges.subscribe(n)),this.subscription.add(e.statusChanges.subscribe(n)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=e.events.subscribe(o=>{o instanceof ae&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&e.addValidators(this.parseErrorsValidator)}ngControlCreate(e){!e.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!e.customControl||(this.isCustomControlBased=!0,e.listenToCustomControlModel(o=>{let r=this.control;r&&(r._pendingValue=o,r._pendingChange=!0,r._pendingDirty=!0,this.pendingCustomValue=o,this.hasPendingCustomValue=!0,r.updateOn===`change`&&this.updateControlFromCustom(r))}),e.listenToCustomControlOutput(`touch`,()=>{let o=this.control;o&&(o._pendingTouched=!0,o.updateOn===`blur`&&o._pendingChange&&this.updateControlFromCustom(o),o.updateOn!==`submit`&&o.markAsTouched())}),this.customControlBindings={},this.isNativeFormElement=ya(e.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(o=>o instanceof po))}updateControlFromCustom(e){let t=e._pendingValue;e._pendingChange=!1,this.clearPendingCustomValue(),this.customControlBindings&&(this.customControlBindings.value=t),e._pendingDirty&&e.markAsDirty(),e.setValue(t,{emitModelToViewChange:!1}),this.viewToModelUpdate(e.value)}discardPendingCustomValue(e){this.hasPendingCustomValue&&(this.customControlBindings&&(this.customControlBindings.value=this.pendingCustomValue),this.clearPendingCustomValue(),e._pendingValue=e.value,e._pendingChange=!1,e._pendingDirty=!1)}clearPendingCustomValue(){this.pendingCustomValue=void 0,this.hasPendingCustomValue=!1}ngControlUpdate(e){if(!this.isCustomControlBased)return;let t=this.control,n=this.customControlBindings;if(!t||!n)return;this.hasPendingCustomValue&&!t._pendingChange&&(n.value=this.pendingCustomValue,this.clearPendingCustomValue()),t._status(),t._errors(),Object.is(n.value,t.value)||(this.discardPendingCustomValue(t),n.value=t.value,e.setCustomControlModelInput(t.value)),this.bindControlProperty(e,n,`touched`,t.touched),this.bindControlProperty(e,n,`dirty`,t.dirty),this.bindControlProperty(e,n,`valid`,t.valid),this.bindControlProperty(e,n,`invalid`,t.invalid),this.bindControlProperty(e,n,`pending`,t.pending),this.bindControlProperty(e,n,`disabled`,t.disabled);let o=this.requiredValidatorViaDi;if(o){let a=this.isRequired;e.setInputOnDirectives(`required`,a,(s,d)=>d!==o&&s!==a)}else this.bindControlProperty(e,n,`required`,this.isRequired);let r=t.errors;if(n.errors!==r){n.errors=r;let a=this._convertErrors(r);e.setInputOnDirectives(`errors`,a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}bindControlProperty(e,t,n,o){if(t[n]===o)return;t[n]=o;let r=e.setInputOnDirectives(n,o);this.isNativeFormElement&&!r&&(n===`disabled`||n===`required`)&&this.renderer&&_a(this.renderer,e.nativeElement,n,o)}_convertErrors(e){if(e===null)return[];let t=this.control;return Object.entries(e).map(([n,o])=>new _n({context:o,kind:n,control:t}))}setParseErrorSource(e){if(e===void 0)return;let t=null,n=Dr$1(()=>{let o=e();return o.length===0?null:o.reduce((r,a)=>(r[a.kind]=a,r),{})});this.parseErrorsValidator=()=>(t=Er$1(n),t),Gi$1(()=>{let o=n();o!==t&&(t=o,this.control?.updateValueAndValidity({emitEvent:!1}),this.injector?.get(Cb)?.markForCheck())},{injector:this.injector})}removeParseErrorsValidator(e){this.parseErrorsValidator&&(e?.removeValidators(this.parseErrorsValidator),e?.updateValueAndValidity({emitEvent:!1}))}};var xn=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var ho=(()=>{class i extends xn{constructor(t){super(t)}static ɵfac=function(n){return new(n||i)(mr$1(Yt,2))};static ɵdir=ou({type:i,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(n,o){n&2&&Os$1(`ng-untouched`,o.isUntouched)(`ng-touched`,o.isTouched)(`ng-pristine`,o.isPristine)(`ng-dirty`,o.isDirty)(`ng-valid`,o.isValid)(`ng-invalid`,o.isInvalid)(`ng-pending`,o.isPending)},standalone:!1,features:[ug]})}return i})();function qi(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Yi(i){return typeof i==`object`&&i!==null&&Object.keys(i).length===2&&`value`in i&&`disabled`in i}var Fa=class extends yn{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,n){super(pa(t),ba(n,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Le(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Yi(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){Er$1(()=>{this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)})}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new ae(this))}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){qi(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){qi(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Yi(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Ia={provide:Yt,useExisting:Ci(()=>Nn)};var Xi=Promise.resolve();var Nn=(()=>{class i extends Yt{_changeDetectorRef;callSetDisabledState;control=new Fa;static ngAcceptInputType_isDisabled;_registered=!1;_ngModelInjector;viewModel;name=``;isDisabled;model;options;update=new me$1;constructor(t,n,o,r,a,s,d,u){super(d,u,r),this._changeDetectorRef=a,this.callSetDisabledState=s,this._parent=t,this._setValidators(n),this._setAsyncValidators(o)}ngOnChanges(t){if(this._registered,this._checkForErrors(),!this._registered||`name`in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}`isDisabled`in t&&this._updateDisabled(t),Ea(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}ɵngControlCreate(t){super.ngControlCreate(t)}ɵngControlUpdate(t){super.ngControlUpdate(t)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Wi(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(t){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Wi(this.control,this,t))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Xi.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,o=n!==0&&Ob(n);Xi.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Ca(t,this._parent):[t]}static ɵfac=function(n){return new(n||i)(mr$1(vn,9),mr$1(Ji,10),mr$1(na,10),mr$1(Pe,10),mr$1(Cb,8),mr$1(mo,8),mr$1(ee,8),mr$1(dr$1,8))};static ɵdir=ou({type:i,selectors:[[``,`ngModel`,``,3,`formControlName`,``,3,`formControl`,``]],inputs:{name:`name`,isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`],options:[0,`ngModelOptions`,`options`]},outputs:{update:`ngModelChange`},exportAs:[`ngModel`],standalone:!1,features:[eb([Ia,Ra]),ug,fo$1,Yw(null)]})}return i})();var Ta={provide:Pe,useExisting:Ci(()=>go),multi:!0};function bo(i,e){return i==null?`${e}`:(e&&typeof e==`object`&&(e=`Object`),`${i}: ${e}`.slice(0,50))}function Pa(i){return i.split(`:`)[0]}var go=(()=>{class i extends Cn{value;_optionMap=/* @__PURE__ */ new Map;_idCounter=0;set compareWith(t){this._compareWith=t}_compareWith=Object.is;appRefInjector=m(vo$1).injector;destroyRef=m(ue$1);cdr=m(Cb);_queuedWrite=!1;_writeValueAfterRender(){this._queuedWrite||this.appRefInjector.destroyed||(this._queuedWrite=!0,fh({write:()=>{this.destroyRef.destroyed||(this._queuedWrite=!1,this.writeValue(this.value))}},{injector:this.appRefInjector}))}writeValue(t){this.cdr.markForCheck(),this.value=t;let o=bo(this._getOptionId(t),t);this.setProperty(`value`,o)}registerOnChange(t){this.onChange=n=>{this.value=this._getOptionValue(n),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n),t))return n;return null}_getOptionValue(t){let n=Pa(t);return this._optionMap.has(n)?this._optionMap.get(n):t}static ɵfac=(()=>{let t;return function(o){return(t||(t=Pp(i)))(o||i)}})();static ɵdir=ou({type:i,selectors:[[`select`,`formControlName`,``,3,`multiple`,``,3,`ngNoCva`,``],[`select`,`formControl`,``,3,`multiple`,``,3,`ngNoCva`,``],[`select`,`ngModel`,``,3,`multiple`,``,3,`ngNoCva`,``]],hostBindings:function(n,o){n&1&&Ig(`change`,function(a){return o.onChange(a.target.value)})(`blur`,function(){return o.onTouched()})},inputs:{compareWith:`compareWith`},standalone:!1,features:[eb([Ta]),ug]})}return i})();var vo=(()=>{class i{_element;_renderer;_select;id;constructor(t,n,o){this._element=t,this._renderer=n,this._select=o,this._select&&(this.id=this._select._registerOption())}set ngValue(t){this._select!=null&&(this._select._optionMap.set(this.id,t),this._setElementValue(bo(this.id,t)),this._select._writeValueAfterRender())}set value(t){this._setElementValue(t),this._select?._writeValueAfterRender()}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,`value`,t)}ngOnDestroy(){this._select?._optionMap.delete(this.id),this._select?._writeValueAfterRender()}static ɵfac=function(n){return new(n||i)(mr$1(Ke$1),mr$1(dr$1),mr$1(go,9))};static ɵdir=ou({type:i,selectors:[[`option`]],inputs:{ngValue:`ngValue`,value:`value`},standalone:!1})}return i})();var Ki=Symbol(`negativeZero`);var Va={provide:Pe,useExisting:Ci(()=>yo),multi:!0};function Zi(i,e){return i==null?`${e}`:(typeof e==`string`&&(e=`'${e}'`),e&&typeof e==`object`&&(e=`Object`),`${i}: ${e}`.slice(0,50))}function La(i){return i.split(`:`)[0]}var yo=(()=>{class i extends Cn{value;_optionMap=/* @__PURE__ */ new Map;_idCounter=0;set compareWith(t){this._compareWith=t}_compareWith=Object.is;writeValue(t){this.value=t;let n;if(Array.isArray(t)){let o=this._getOptionIds(t);n=(r,a)=>{r._setSelected(o.has(a))}}else n=o=>{o._setSelected(!1)};this._optionMap.forEach(n)}registerOnChange(t){this.onChange=n=>{let o=[],r=n.selectedOptions;if(r!==void 0){let a=r;for(let s=0;s<a.length;s++){let d=a[s],u=this._getOptionValue(d.value);o.push(u)}}else{let a=n.options;for(let s=0;s<a.length;s++){let d=a[s];if(d.selected){let u=this._getOptionValue(d.value);o.push(u)}}}this.value=o,t(o)}}_registerOption(t){let n=(this._idCounter++).toString();return this._optionMap.set(n,t),n}_getOptionIds(t){if(this._compareWith!==Object.is||t.length<2)return new Set(t.map(r=>this._getOptionId(r)).filter(r=>r!==null));let n=/* @__PURE__ */ new Set;t.forEach(r=>n.add(r===0&&Object.is(r,-0)?Ki:r));let o=/* @__PURE__ */ new Set;for(let[r,a]of this._optionMap){if(n.size===0)break;let s=a._value,d=s===0&&Object.is(s,-0)?Ki:s;n.delete(d)&&o.add(r)}return o}_getOptionId(t){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n)._value,t))return n;return null}_getOptionValue(t){let n=La(t);return this._optionMap.has(n)?this._optionMap.get(n)._value:t}static ɵfac=(()=>{let t;return function(o){return(t||(t=Pp(i)))(o||i)}})();static ɵdir=ou({type:i,selectors:[[`select`,`multiple`,``,`formControlName`,``,3,`ngNoCva`,``],[`select`,`multiple`,``,`formControl`,``,3,`ngNoCva`,``],[`select`,`multiple`,``,`ngModel`,``,3,`ngNoCva`,``]],hostBindings:function(n,o){n&1&&Ig(`change`,function(a){return o.onChange(a.target)})(`blur`,function(){return o.onTouched()})},inputs:{compareWith:`compareWith`},standalone:!1,features:[eb([Va]),ug]})}return i})();var _o=(()=>{class i{_element;_renderer;_select;id;_value;constructor(t,n,o){this._element=t,this._renderer=n,this._select=o,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){this._select!=null&&(this._value=t,this._setElementValue(Zi(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(Zi(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,`value`,t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,`selected`,t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static ɵfac=function(n){return new(n||i)(mr$1(Ke$1),mr$1(dr$1),mr$1(yo,9))};static ɵdir=ou({type:i,selectors:[[`option`]],inputs:{ngValue:`ngValue`,value:`value`},standalone:!1})}return i})();var za=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=vr$1({type:i});static ɵinj=nn$1({})}return i})();var xo=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:mo,useValue:t.callSetDisabledState??Mn}]}}static ɵfac=function(n){return new(n||i)};static ɵmod=vr$1({type:i});static ɵinj=nn$1({imports:[za]})}return i})();function se(i){return i.buttons===0||i.detail===0}function le(i){let e=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!e&&e.identifier===-1&&(e.radiusX==null||e.radiusX===1)&&(e.radiusY==null||e.radiusY===1)}var En;function Co(){if(En==null){let i=typeof document<`u`?document.head:null;En=!!(i&&(i.createShadowRoot||i.attachShadow))}return En}function kn(i){if(Co()){let e=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}function lt(i){if(i.composedPath)try{return i.composedPath()[0]}catch{}return i.target}var Dn;try{Dn=typeof Intl<`u`&&Intl.v8BreakIterator}catch{Dn=!1}var j=(()=>{class i{_platformId=m(lt$1);isBrowser=this._platformId?br$1(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Dn)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(n){return new(n||i)};static ɵprov=Fe$1({token:i,factory:i.ɵfac})}return i})();var de;function So(){if(de==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>de=!0}))}finally{de=de||!1}return de}function Xt(i){return So()?i:!!i.capture}function ce(i,e=0){return wo(i)?Number(i):arguments.length===2?e:0}function wo(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function pt(i){return i instanceof Ke$1?i.nativeElement:i}var Mo=new E(`cdk-input-modality-detector-options`);var No={ignoreKeys:[18,17,224,91,16]};var Eo=650;var On={passive:!0,capture:!0};var ko=(()=>{class i{_platform=m(j);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ar$1(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(n=>n===t.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=lt(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Eo||(this._modality.next(se(t)?`keyboard`:`mouse`),this._mostRecentTarget=lt(t))};_onTouchstart=t=>{if(le(t)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=lt(t)};constructor(){let t=m(ce$1),n=m(Z),o=m(Mo,{optional:!0});if(this._options=p(p({},No),o),this.modalityDetected=this._modality.pipe(My(1)),this.modalityChanged=this.modalityDetected.pipe(ya$1()),this._platform.isBrowser){let r=m(vn$1).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[r.listen(n,`keydown`,this._onKeydown,On),r.listen(n,`mousedown`,this._onMousedown,On),r.listen(n,`touchstart`,this._onTouchstart,On)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static ɵfac=function(n){return new(n||i)};static ɵprov=Fe$1({token:i,factory:i.ɵfac})}return i})();var me=(function(i){return i[i.IMMEDIATE=0]=`IMMEDIATE`,i[i.EVENTUAL=1]=`EVENTUAL`,i})(me||{});var Do=new E(`cdk-focus-monitor-default-options`);var ze=Xt({passive:!0,capture:!0});var An=(()=>{class i{_ngZone=m(ce$1);_platform=m(j);_inputModalityDetector=m(ko);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=/* @__PURE__ */ new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=/* @__PURE__ */ new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=m(Z);_stopInputModalityDetector=new z;constructor(){let t=m(Do,{optional:!0});this._detectionMode=t?.detectionMode||me.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let n=lt(t);for(let o=n;o;o=o.parentElement)t.type===`focus`?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,n=!1){let o=pt(t);if(!this._platform.isBrowser||o.nodeType!==1)return kr$1();let r=kn(o)||this._document,a=this._elementInfo.get(o);if(a)return n&&(a.checkChildren=!0),a.subject;let s={checkChildren:n,subject:new z,rootNode:r};return this._elementInfo.set(o,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(t){let n=pt(t),o=this._elementInfo.get(n);o&&(o.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(o))}focusVia(t,n,o){let r=pt(t);r===this._document.activeElement?this._getClosestElementsInfo(r).forEach(([s,d])=>this._originChanged(s,n,d)):(this._setOrigin(n),typeof r.focus==`function`&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?`mouse`:`program`}_shouldBeAttributedToTouch(t){return this._detectionMode===me.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,n){t.classList.toggle(`cdk-focused`,!!n),t.classList.toggle(`cdk-touch-focused`,n===`touch`),t.classList.toggle(`cdk-keyboard-focused`,n===`keyboard`),t.classList.toggle(`cdk-mouse-focused`,n===`mouse`),t.classList.toggle(`cdk-program-focused`,n===`program`)}_setOrigin(t,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t===`touch`&&n,this._detectionMode===me.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?Eo:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,n){let o=this._elementInfo.get(n),r=lt(t);!o||!o.checkChildren&&n!==r||this._originChanged(n,this._getFocusOrigin(r),o)}_onBlur(t,n){let o=this._elementInfo.get(n);!o||o.checkChildren&&t.relatedTarget instanceof Node&&n.contains(t.relatedTarget)||(this._setClasses(n),this._emitOrigin(o,null))}_emitOrigin(t,n){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(n))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let n=t.rootNode,o=this._rootNodeFocusListenerCount.get(n)||0;o||this._ngZone.runOutsideAngular(()=>{n.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,ze),n.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,ze)}),this._rootNodeFocusListenerCount.set(n,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(wa$1(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(t){let n=t.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let o=this._rootNodeFocusListenerCount.get(n);o>1?this._rootNodeFocusListenerCount.set(n,o-1):(n.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,ze),n.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,ze),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,n,o){this._setClasses(t,n),this._emitOrigin(o,n),this._lastFocusOrigin=n}_getClosestElementsInfo(t){let n=[];return this._elementInfo.forEach((o,r)=>{(r===t||o.checkChildren&&r.contains(t))&&n.push([r,o])}),n}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:n,mostRecentModality:o}=this._inputModalityDetector;if(o!==`mouse`||!n||n===t||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`||t.disabled)return!1;let r=t.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(n))return!0}return!1}static ɵfac=function(n){return new(n||i)};static ɵprov=Fe$1({token:i,factory:i.ɵfac})}return i})();var Be=/* @__PURE__ */ new WeakMap;var gt=(()=>{class i{_appRef;_injector=m(ee);_environmentInjector=m(pe$1);load(t){let n=this._appRef=this._appRef||this._injector.get(vo$1),o=Be.get(n);o||(o={loaders:/* @__PURE__ */ new Set,refs:[]},Be.set(n,o),n.onDestroy(()=>{Be.get(n)?.refs.forEach(r=>r.destroy()),Be.delete(n)})),o.loaders.has(t)||(o.loaders.add(t),o.refs.push(pB(t,{environmentInjector:this._environmentInjector})))}static ɵfac=function(n){return new(n||i)};static ɵprov=Fe$1({token:i,factory:i.ɵfac})}return i})();function Kt(i){return Array.isArray(i)?i:[i]}var Oo=/* @__PURE__ */ new Set;var Lt;var je=(()=>{class i{_platform=m(j);_nonce=m(Jr$1,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Ha}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&ja(t,this._nonce),this._matchMedia(t)}static ɵfac=function(n){return new(n||i)};static ɵprov=Fe$1({token:i,factory:i.ɵfac})}return i})();function ja(i,e){if(!Oo.has(i))try{Lt||(Lt=document.createElement(`style`),e&&Lt.setAttribute(`nonce`,e),Lt.setAttribute(`type`,`text/css`),document.head.appendChild(Lt)),Lt.sheet&&(Lt.sheet.insertRule(`@media ${i.replace(/[{}]/g,``)} {body{ }}`,0),Oo.add(i))}catch(t){console.error(t)}}function Ha(i){return{matches:i===`all`||i===``,media:i,addListener:()=>{},removeListener:()=>{}}}var Rn=(()=>{class i{_mediaMatcher=m(je);_zone=m(ce$1);_queries=/* @__PURE__ */ new Map;_destroySubject=new z;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Ao(Kt(t)).some(o=>this._registerQuery(o).mql.matches)}observe(t){let o=Ao(Kt(t)).map(a=>this._registerQuery(a).observable),r=yy(o);return r=ai(r.pipe(ga$1(1)),r.pipe(My(1),Iy(0))),r.pipe(se$1(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:d,query:u})=>{s.matches=s.matches||d,s.breakpoints[u]=d}),s}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let n=this._mediaMatcher.matchMedia(t),r={observable:new k(a=>{let s=d=>this._zone.run(()=>a.next(d));return n.addListener(s),()=>{n.removeListener(s)}}).pipe(xy(n),se$1(({matches:a})=>({query:t,matches:a})),wa$1(this._destroySubject)),mql:n};return this._queries.set(t,r),r}static ɵfac=function(n){return new(n||i)};static ɵprov=Fe$1({token:i,factory:i.ɵfac})}return i})();function Ao(i){return i.map(e=>e.split(`,`)).reduce((e,t)=>e.concat(t)).map(e=>e.trim())}var Ga=(()=>{class i{create(t){return typeof MutationObserver>`u`?null:new MutationObserver(t)}static ɵfac=function(n){return new(n||i)};static ɵprov=Fe$1({token:i,factory:i.ɵfac})}return i})();var He=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=vr$1({type:i});static ɵinj=nn$1({providers:[Ga]})}return i})();var Et=(function(i){return i[i.NONE=0]=`NONE`,i[i.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,i[i.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,i})(Et||{});var Ro=`cdk-high-contrast-black-on-white`;var Fo=`cdk-high-contrast-white-on-black`;var Fn=`cdk-high-contrast-active`;var Io=(()=>{class i{_platform=m(j);_hasCheckedHighContrastMode=!1;_document=m(Z);_breakpointSubscription;constructor(){this._breakpointSubscription=m(Rn).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Et.NONE;let t=this._document.createElement(`div`);t.style.backgroundColor=`rgb(1,2,3)`,t.style.position=`absolute`,this._document.body.appendChild(t);let n=this._document.defaultView||window,o=n&&n.getComputedStyle?n.getComputedStyle(t):null,r=(o&&o.backgroundColor||``).replace(/ /g,``);switch(t.remove(),r){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return Et.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return Et.BLACK_ON_WHITE}return Et.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(Fn,Ro,Fo),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===Et.BLACK_ON_WHITE?t.add(Fn,Ro):n===Et.WHITE_ON_BLACK&&t.add(Fn,Fo)}}static ɵfac=function(n){return new(n||i)};static ɵprov=Fe$1({token:i,factory:i.ɵfac})}return i})();var In=(()=>{class i{constructor(){m(Io)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(n){return new(n||i)};static ɵmod=vr$1({type:i});static ɵinj=nn$1({imports:[He]})}return i})();var To=/* @__PURE__ */ new Map;var kt=class i{_appId=m(Xr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(e,t=!1){this._appId!==`ng`&&(e+=this._appId);let n=To.get(e);return n===void 0?n=0:n++,To.set(e,n),`${e}${t?i._infix+`-`:``}${n}`}static ɵfac=function(t){return new(t||i)};static ɵprov=Fe$1({token:i,factory:i.ɵfac})};var zt;function Po(){if(zt==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return zt=!1,zt;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)zt=!0;else{let i=Element.prototype.scrollTo;i?zt=!/\{\s*\[native code\]\s*\}/.test(i.toString()):zt=!1}}return zt}function Tn(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var Ua=new E(`MATERIAL_ANIMATIONS`);var Vo=null;function Wa(){return m(Ua,{optional:!0})?.animationsDisabled||m(mv,{optional:!0})===`NoopAnimations`?`di-disabled`:(Vo??=m(je).matchMedia(`(prefers-reduced-motion)`).matches,Vo?`reduced-motion`:`enabled`)}function Zt(){return Wa()!==`enabled`}function G(i){return i==null?``:typeof i==`string`?i:`${i}px`}function Lo(i){return i!=null&&`${i}`!=`false`}var mt=(function(i){return i[i.FADING_IN=0]=`FADING_IN`,i[i.VISIBLE=1]=`VISIBLE`,i[i.FADING_OUT=2]=`FADING_OUT`,i[i.HIDDEN=3]=`HIDDEN`,i})(mt||{});var Pn=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=mt.HIDDEN;constructor(e,t,n,o=!1){this._renderer=e,this.element=t,this.config=n,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}};var zo=Xt({passive:!0,capture:!0});var Vn=class{_events=/* @__PURE__ */ new Map;addHandler(e,t,n,o){let r=this._events.get(t);if(r){let a=r.get(n);a?a.add(o):r.set(n,/* @__PURE__ */ new Set([o]))}else this._events.set(t,/* @__PURE__ */ new Map([[n,/* @__PURE__ */ new Set([o])]])),e.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,zo)})}removeHandler(e,t,n){let o=this._events.get(e);if(!o)return;let r=o.get(t);r&&(r.delete(n),r.size===0&&o.delete(t),o.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,zo)))}_delegateEventHandler=e=>{let t=lt(e);t&&this._events.get(e.type)?.forEach((n,o)=>{(o===t||o.contains(t))&&n.forEach(r=>r.handleEvent(e))})}};var ue={enterDuration:225,exitDuration:150};var $a=800;var Bo=Xt({passive:!0,capture:!0});var jo=[`mousedown`,`touchstart`];var Ho=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var qa=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=yr$1({type:i,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return i})();var Ge=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=/* @__PURE__ */ new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Vn;constructor(e,t,n,o,r){this._target=e,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=pt(n)),r&&r.get(gt).load(qa)}fadeInRipple(e,t,n={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=p(p({},ue),n.animation);n.centered&&(e=o.left+o.width/2,t=o.top+o.height/2);let a=n.radius||Ya(e,t,o),s=e-o.left,d=t-o.top,u=r.enterDuration,m=document.createElement(`div`);m.classList.add(`mat-ripple-element`),m.style.left=`${s-a}px`,m.style.top=`${d-a}px`,m.style.height=`${a*2}px`,m.style.width=`${a*2}px`,n.color!=null&&(m.style.backgroundColor=n.color),m.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(m);let b=window.getComputedStyle(m),I=b.transitionProperty,U=b.transitionDuration,H=I===`none`||U===`0s`||U===`0s, 0s`||o.width===0&&o.height===0,z=new Pn(this,m,n,H);m.style.transform=`scale3d(1, 1, 1)`,z.state=mt.FADING_IN,n.persistent||(this._mostRecentTransientRipple=z);let vt=null;return!H&&(u||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ye=()=>{vt&&(vt.fallbackTimer=null),clearTimeout(_e),this._finishRippleTransition(z)},Qt=()=>this._destroyRipple(z),_e=setTimeout(Qt,u+100);m.addEventListener(`transitionend`,ye),m.addEventListener(`transitioncancel`,Qt),vt={onTransitionEnd:ye,onTransitionCancel:Qt,fallbackTimer:_e}}),this._activeRipples.set(z,vt),(H||!u)&&this._finishRippleTransition(z),z}fadeOutRipple(e){if(e.state===mt.FADING_OUT||e.state===mt.HIDDEN)return;let t=e.element,n=p(p({},ue),e.config.animation);t.style.transitionDuration=`${n.exitDuration}ms`,t.style.opacity=`0`,e.state=mt.FADING_OUT,(e._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){let t=pt(e);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,jo.forEach(n=>{i._eventManager.addHandler(this._ngZone,n,t,this)}))}handleEvent(e){e.type===`mousedown`?this._onMousedown(e):e.type===`touchstart`?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ho.forEach(t=>{this._triggerElement.addEventListener(t,this,Bo)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){e.state===mt.FADING_IN?this._startFadeOutTransition(e):e.state===mt.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let t=e===this._mostRecentTransientRipple,{persistent:n}=e.config;e.state=mt.VISIBLE,!n&&(!t||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){let t=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=mt.HIDDEN,t!==null&&(e.element.removeEventListener(`transitionend`,t.onTransitionEnd),e.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),e.element.remove()}_onMousedown(e){let t=se(e),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+$a;!this._target.rippleDisabled&&!t&&!n&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!le(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=e.changedTouches;if(t)for(let n=0;n<t.length;n++)this.fadeInRipple(t[n].clientX,t[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let t=e.state===mt.VISIBLE||e.config.terminateOnPointerUp&&e.state===mt.FADING_IN;!e.config.persistent&&t&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let e=this._triggerElement;e&&(jo.forEach(t=>i._eventManager.removeHandler(t,e,this)),this._pointerUpEventsRegistered&&(Ho.forEach(t=>e.removeEventListener(t,this,Bo)),this._pointerUpEventsRegistered=!1))}};function Ya(i,e,t){let n=Math.max(Math.abs(i-t.left),Math.abs(i-t.right)),o=Math.max(Math.abs(e-t.top),Math.abs(e-t.bottom));return Math.sqrt(n*n+o*o)}var Go=new E(`mat-ripple-global-options`);var Xa={capture:!0};var Ka=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var Ln=`mat-ripple-loader-uninitialized`;var zn=`mat-ripple-loader-class-name`;var Uo=`mat-ripple-loader-centered`;var Ue=`mat-ripple-loader-disabled`;var Wo=(()=>{class i{_document=m(Z);_animationsDisabled=Zt();_globalRippleOptions=m(Go,{optional:!0});_platform=m(j);_ngZone=m(ce$1);_injector=m(ee);_eventCleanups;_hosts=/* @__PURE__ */ new Map;constructor(){let t=m(vn$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Ka.map(n=>t.listen(this._document,n,this._onInteraction,Xa)))}ngOnDestroy(){let t=this._hosts.keys();for(let n of t)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(t,n){t.setAttribute(Ln,this._globalRippleOptions?.namespace??``),(n.className||!t.hasAttribute(zn))&&t.setAttribute(zn,n.className||``),n.centered&&t.setAttribute(Uo,``),n.disabled&&t.setAttribute(Ue,``)}setDisabled(t,n){let o=this._hosts.get(t);o?(o.target.rippleDisabled=n,!n&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):n?t.setAttribute(Ue,``):t.removeAttribute(Ue)}_onInteraction=t=>{let n=lt(t);if(n instanceof HTMLElement){let o=n.closest(`[${Ln}="${this._globalRippleOptions?.namespace??``}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let n=this._document.createElement(`span`);n.classList.add(`mat-ripple`,t.getAttribute(zn)),t.append(n);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??ue.enterDuration,a=this._animationsDisabled?0:o?.animation?.exitDuration??ue.exitDuration,s={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(Ue),rippleConfig:{centered:t.hasAttribute(Uo),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:a}}},d=new Ge(s,this._ngZone,n,this._platform,this._injector),u=!s.rippleDisabled;u&&d.setupTriggerEvents(t),this._hosts.set(t,{target:s,renderer:d,hasSetUpEvents:u}),t.removeAttribute(Ln)}destroyRipple(t){let n=this._hosts.get(t);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(n){return new(n||i)};static ɵprov=Fe$1({token:i,factory:i.ɵfac})}return i})();var $o=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=yr$1({type:i,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return i})();var Za=new E(`MAT_BUTTON_CONFIG`);function qo(i){return i==null?void 0:Pb(i)}var Yo=(()=>{class i{_elementRef=m(Ke$1);_ngZone=m(ce$1);_animationsDisabled=Zt();_config=m(Za,{optional:!0});_focusMonitor=m(An);_cleanupClick;_renderer=m(dr$1);_rippleLoader=m(Wo);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=wr$1(!1,{transform:Ob});constructor(){m(gt).load($o);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,n){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(n){return new(n||i)};static ɵdir=ou({type:i,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(n,o){n&2&&(mg(`disabled`,o._getDisabledAttribute())(`aria-disabled`,o._getAriaDisabled())(`tabindex`,o._getTabIndex()),xg(o.color?`mat-`+o.color:``),Os$1(`mat-mdc-button-progress-indicator-shown`,o.showProgress())(`mat-mdc-button-disabled`,o.disabled)(`mat-mdc-button-disabled-interactive`,o.disabledInteractive)(`mat-unthemed`,!o.color)(`_mat-animation-noopable`,o._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,Ob],disabled:[2,`disabled`,`disabled`,Ob],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,Ob],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Ob],tabIndex:[2,`tabIndex`,`tabIndex`,qo],_tabindex:[2,`tabindex`,`_tabindex`,qo],showProgress:[1,`showProgress`]}})}return i})();var Bn=(()=>{class i extends Yo{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let t=[`*`,[[``,`progressIndicator`,``]]],n=[`*`,`[progressIndicator]`];function o(r,a){r&1&&(Do$1(0,`div`,1),ks$1(1,1),Eo$1())}return yr$1({type:i,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[ug],ngContentSelectors:n,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(a,s){a&1&&(As$1(t),Dg(0,`span`,0),ks$1(1),cI(2,o,2,0,`div`,1),Dg(3,`span`,2)(4,`span`,3)),a&2&&(zl(2),uI(s.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return i})();var Qa=new E(`cdk-dir-doc`,{providedIn:`root`,factory:()=>m(Z)});var Ja=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Xo(i){let e=i?.toLowerCase()||``;return e===`auto`&&typeof navigator<`u`&&navigator?.language?Ja.test(navigator.language)?`rtl`:`ltr`:e===`rtl`?`rtl`:`ltr`}var fe=(()=>{class i{get value(){return this.valueSignal()}valueSignal=tr(`ltr`);change=new me$1;constructor(){let t=m(Qa,{optional:!0});if(t){let n=t.body?t.body.dir:null,o=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(Xo(n||o||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(n){return new(n||i)};static ɵprov=Fe$1({token:i,factory:i.ɵfac})}return i})();var nt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=vr$1({type:i});static ɵinj=nn$1({})}return i})();var Ko=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=vr$1({type:i});static ɵinj=nn$1({imports:[nt]})}return i})();var Zo=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=vr$1({type:i});static ɵinj=nn$1({imports:[Ko,nt]})}return i})();var Jo=Symbol(`FIELD_TREE`);function pe(i){return typeof i==`function`&&i[Jo]===!0}var jn=class{_box;_destroyed=new z;_resizeSubject=new z;_resizeObserver;_elementObservables=/* @__PURE__ */ new Map;constructor(e){this._box=e,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(e){return this._elementObservables.has(e)||this._elementObservables.set(e,new k(t=>{let n=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(e,{box:this._box}),()=>{this._resizeObserver?.unobserve(e),n.unsubscribe(),this._elementObservables.delete(e)}}).pipe(se$1(t=>t.filter(n=>n.target===e)),Et$1(t=>t.length>0),Ea$1({bufferSize:1,refCount:!0}),wa$1(this._destroyed))),this._elementObservables.get(e)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var er=(()=>{class i{_cleanupErrorListener;_observers=/* @__PURE__ */ new Map;_ngZone=m(ce$1);constructor(){}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,n){let o=n?.box||`content-box`;return this._observers.has(o)||this._observers.set(o,new jn(o)),this._observers.get(o).observe(t)}static ɵfac=function(n){return new(n||i)};static ɵprov=Fe$1({token:i,factory:i.ɵfac})}return i})();var Hn=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵdir=ou({type:i,selectors:[[`mat-label`]]})}return i})();var es=new E(`MatError`);var Gn=(()=>{class i{align=`start`;id=m(kt).getId(`mat-mdc-hint-`);static ɵfac=function(n){return new(n||i)};static ɵdir=ou({type:i,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(n,o){n&2&&(fu(`id`,o.id),mg(`align`,null),Os$1(`mat-mdc-form-field-hint-end`,o.align===`end`))},inputs:{align:`align`,id:`id`}})}return i})();var ns=new E(`MatPrefix`);var is=new E(`MatSuffix`);var lr=new E(`FloatingLabelParent`);var nr=(()=>{class i{_elementRef=m(Ke$1);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=m(er);_ngZone=m(ce$1);_parent=m(lr);_resizeSubscription=new Q;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return os(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(n){return new(n||i)};static ɵdir=ou({type:i,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(n,o){n&2&&Os$1(`mdc-floating-label--float-above`,o.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return i})();function os(i){let e=i;if(e.offsetParent!==null)return e.scrollWidth;let t=e.cloneNode(!0);t.style.setProperty(`position`,`absolute`),t.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(t);let n=t.scrollWidth;return t.remove(),n}var ir=`mdc-line-ripple--active`;var We=`mdc-line-ripple--deactivating`;var or=(()=>{class i{_elementRef=m(Ke$1);_cleanupTransitionEnd;constructor(){let t=m(ce$1),n=m(dr$1);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(We),t.add(ir)}deactivate(){this._elementRef.nativeElement.classList.add(We)}_handleTransitionEnd=t=>{let n=this._elementRef.nativeElement.classList,o=n.contains(We);t.propertyName===`opacity`&&o&&n.remove(ir,We)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(n){return new(n||i)};static ɵdir=ou({type:i,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return i})();var rr=(()=>{class i{_elementRef=m(Ke$1);_ngZone=m(ce$1);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,n=t.querySelector(`.mdc-floating-label`);n?(t.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(n.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration=``)}))):t.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(t){let n=this._notch.nativeElement;!this.open||!t?n.style.width=``:n.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${t}px)`)}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let t=[`notch`];return yr$1({type:i,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(r,a){if(r&1&&Cg(t,5),r&2){let s;CI(s=TI())&&(a._notch=s.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(r,a){r&2&&Os$1(`mdc-notched-outline--notched`,a.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:[`*`],decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(r,a){r&1&&(As$1(),Dg(0,`div`,1),Do$1(1,`div`,2,0),ks$1(3),Eo$1(),Dg(4,`div`,3))},encapsulation:2})})()}return i})();var rs=(()=>{class i{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static ɵfac=function(n){return new(n||i)};static ɵdir=ou({type:i})}return i})();var as=new E(`MatFormField`);var ss=new E(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var ar=`fill`;var ls=`auto`;var sr=`fixed`;var ds=`translateY(-50%)`;var dr=(()=>{class i{_elementRef=m(Ke$1);_changeDetectorRef=m(Cb);_platform=m(j);_idGenerator=m(kt);_ngZone=m(ce$1);_defaults=m(ss,{optional:!0});_currentDirection;_unwrapMaybeSignal(t){return xc(t)?t():t}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=lB(`iconPrefixContainer`);_textPrefixContainerSignal=lB(`textPrefixContainer`);_iconSuffixContainerSignal=lB(`iconSuffixContainer`);_textSuffixContainerSignal=lB(`textSuffixContainer`);_prefixSuffixContainers=Dr$1(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=uB(Hn);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=Lo(t)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||ls}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let n=t||this._defaults?.appearance||ar;this._appearanceSignal.set(n)}_appearanceSignal=tr(ar);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||sr}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||sr}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new z;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Zt();constructor(){let t=this._defaults,n=m(fe);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),Gi$1(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=pe(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!pe(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Dr$1(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(t){let n=this._control,o=`mat-mdc-form-field-type-`;t&&this._elementRef.nativeElement.classList.remove(o+t.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(o+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges?.pipe(xy([void 0,void 0]),se$1(()=>[this._unwrapMaybeSignal(n.errorState),n.userAriaDescribedBy]),_y(),Et$1(([[r,a],[s,d]])=>r!==s||a!==d)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&!pe(n.ngField)&&(this._valueChanges=n.ngControl.valueChanges.pipe(wa$1(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),pa$1(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._unwrapMaybeSignal(this._control.focused);t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,t),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,t)}_syncOutlineLabelOffset(){fB({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Dr$1(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(t){let n=this._control?.ngField||this._control?.ngControl;if(!n)return!1;if(pe(n)){let o=n();return t===`valid`?o.valid():t===`dirty`?o.dirty():t===`touched`?o.touched():t===`pending`?o.pending():t===`untouched`?!o.touched():t===`pristine`?!o.dirty():t===`invalid`?!o.valid():!1}else{let o=n;return t===`valid`?o.valid:t===`dirty`?o.dirty:t===`touched`?o.touched:t===`pending`?o.pending:t===`untouched`?o.untouched:t===`pristine`?o.pristine:t===`invalid`?o.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&t.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let r=this._hintChildren?this._hintChildren.find(s=>s.align===`start`):null,a=this._hintChildren?this._hintChildren.find(s=>s.align===`end`):null;r?t.push(r.id):this._hintLabel&&t.push(this._hintLabelId),a&&t.push(a.id)}else this._errorChildren&&t.push(...this._errorChildren.map(r=>r.id));let n=this._control.describedByIds,o;if(n){let r=this._describedByIds||t;o=t.concat(n.filter(a=>a&&!r.includes(a)))}else o=t;this._control.setDescribedByIds(o),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,o=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,a=t?.getBoundingClientRect().width??0,s=n?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,u=r?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${ds} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${a+s}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,a+s+d+u]}_writeOutlinedLabelStyles(t){if(t!==null){let[n,o]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),o!==null&&this._notchedOutline?._setMaxWidth(o)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let n=t.getRootNode();return n&&n!==t}return document.documentElement.contains(t)}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let t=[`iconPrefixContainer`],n=[`textPrefixContainer`],o=[`iconSuffixContainer`],r=[`textSuffixContainer`],a=[`textField`],s=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]],d=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function u(g,D){g&1&&vg(0,`span`,21)}function m(g,D){if(g&1&&(gs$1(0,`label`,20),ks$1(1,1),cI(2,u,1,0,`span`,21),lu()),g&2){let c=wI(2);yg(`floating`,c._shouldLabelFloat())(`monitorResize`,c._hasOutline())(`id`,c._labelId),mg(`for`,c._control.disableAutomaticLabeling?null:c._control.id),zl(2),uI(!c.hideRequiredMarker&&c._unwrapMaybeSignal(c._control.required)?2:-1)}}function b(g,D){if(g&1&&cI(0,m,3,5,`label`,20),g&2){let c=wI();uI(c._hasFloatingLabel()?0:-1)}}function I(g,D){g&1&&vg(0,`div`,7)}function U(g,D){}function H(g,D){if(g&1&&fg(0,U,0,0,`ng-template`,13),g&2){wI(2);let c=_I(1);yg(`ngTemplateOutlet`,c)}}function z(g,D){if(g&1&&(gs$1(0,`div`,9),cI(1,H,1,1,null,13),lu()),g&2){let c=wI();yg(`matFormFieldNotchedOutlineOpen`,c._shouldLabelFloat()),zl(),uI(c._forceDisplayInfixLabel()?-1:1)}}function vt(g,D){g&1&&(gs$1(0,`div`,10,2),ks$1(2,2),lu())}function ye(g,D){g&1&&(gs$1(0,`div`,11,3),ks$1(2,3),lu())}function Qt(g,D){}function _e(g,D){if(g&1&&fg(0,Qt,0,0,`ng-template`,13),g&2){wI();let c=_I(1);yg(`ngTemplateOutlet`,c)}}function $r(g,D){g&1&&(gs$1(0,`div`,14,4),ks$1(2,4),lu())}function qr(g,D){g&1&&(gs$1(0,`div`,15,5),ks$1(2,5),lu())}function Yr(g,D){g&1&&vg(0,`div`,16)}function Xr(g,D){g&1&&(gs$1(0,`div`,18),ks$1(1,6),lu())}function Kr(g,D){if(g&1&&(gs$1(0,`mat-hint`,22),pu(1),lu()),g&2){let c=wI(2);yg(`id`,c._hintLabelId),zl(),Ps$1(c.hintLabel)}}function Zr(g,D){if(g&1&&(gs$1(0,`div`,19),cI(1,Kr,2,2,`mat-hint`,22),ks$1(2,7),vg(3,`div`,23),ks$1(4,8),lu()),g&2){let c=wI();zl(),uI(c.hintLabel?1:-1)}}return yr$1({type:i,selectors:[[`mat-form-field`]],contentQueries:function(D,c,O){if(D&1&&(Tg(O,c._labelChild,Hn,5),bg(O,rs,5)(O,ns,5)(O,is,5)(O,es,5)(O,Gn,5)),D&2){SI();let J;CI(J=TI())&&(c._formFieldControl=J.first),CI(J=TI())&&(c._prefixChildren=J),CI(J=TI())&&(c._suffixChildren=J),CI(J=TI())&&(c._errorChildren=J),CI(J=TI())&&(c._hintChildren=J)}},viewQuery:function(D,c){if(D&1&&(Sg(c._iconPrefixContainerSignal,t,5)(c._textPrefixContainerSignal,n,5)(c._iconSuffixContainerSignal,o,5)(c._textSuffixContainerSignal,r,5),Cg(a,5)(t,5)(n,5)(o,5)(r,5)(nr,5)(rr,5)(or,5)),D&2){SI(4);let O;CI(O=TI())&&(c._textField=O.first),CI(O=TI())&&(c._iconPrefixContainer=O.first),CI(O=TI())&&(c._textPrefixContainer=O.first),CI(O=TI())&&(c._iconSuffixContainer=O.first),CI(O=TI())&&(c._textSuffixContainer=O.first),CI(O=TI())&&(c._floatingLabel=O.first),CI(O=TI())&&(c._notchedOutline=O.first),CI(O=TI())&&(c._lineRipple=O.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(D,c){D&2&&Os$1(`mat-mdc-form-field-label-always-float`,c._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,c._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,c._hasIconSuffix)(`mat-form-field-invalid`,c._unwrapMaybeSignal(c._control.errorState))(`mat-form-field-disabled`,c._unwrapMaybeSignal(c._control.disabled))(`mat-form-field-autofilled`,c._unwrapMaybeSignal(c._control.autofilled))(`mat-form-field-appearance-fill`,c.appearance==`fill`)(`mat-form-field-appearance-outline`,c.appearance==`outline`)(`mat-form-field-hide-placeholder`,c._hasFloatingLabel()&&!c._shouldLabelFloat())(`mat-primary`,c.color!==`accent`&&c.color!==`warn`)(`mat-accent`,c.color===`accent`)(`mat-warn`,c.color===`warn`)(`ng-untouched`,c._shouldForward(`untouched`))(`ng-touched`,c._shouldForward(`touched`))(`ng-pristine`,c._shouldForward(`pristine`))(`ng-dirty`,c._shouldForward(`dirty`))(`ng-valid`,c._shouldForward(`valid`))(`ng-invalid`,c._shouldForward(`invalid`))(`ng-pending`,c._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[eb([{provide:as,useExisting:i},{provide:lr,useExisting:i}])],ngContentSelectors:d,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(D,c){if(D&1&&(As$1(s),fg(0,b,1,1,`ng-template`,null,0,nb),gs$1(2,`div`,6,1),Ig(`click`,function(J){return c._control.onContainerClick(J)}),cI(4,I,1,0,`div`,7),gs$1(5,`div`,8),cI(6,z,2,2,`div`,9),cI(7,vt,3,0,`div`,10),cI(8,ye,3,0,`div`,11),gs$1(9,`div`,12),cI(10,_e,1,1,null,13),ks$1(11),lu(),cI(12,$r,3,0,`div`,14),cI(13,qr,3,0,`div`,15),lu(),cI(14,Yr,1,0,`div`,16),lu(),gs$1(15,`div`,17),cI(16,Xr,2,0,`div`,18)(17,Zr,5,1,`div`,19),lu()),D&2){let O,J=c._unwrapMaybeSignal(c._control.disabled);zl(2),Os$1(`mdc-text-field--filled`,!c._hasOutline())(`mdc-text-field--outlined`,c._hasOutline())(`mdc-text-field--no-label`,!c._hasFloatingLabel())(`mdc-text-field--disabled`,J)(`mdc-text-field--invalid`,c._unwrapMaybeSignal(c._control.errorState)),zl(2),uI(!c._hasOutline()&&!J?4:-1),zl(2),uI(c._hasOutline()?6:-1),zl(),uI(c._hasIconPrefix?7:-1),zl(),uI(c._hasTextPrefix?8:-1),zl(2),uI(!c._hasOutline()||c._forceDisplayInfixLabel()?10:-1),zl(2),uI(c._hasTextSuffix?12:-1),zl(),uI(c._hasIconSuffix?13:-1),zl(),uI(c._hasOutline()?-1:14),zl(),Os$1(`mat-mdc-form-field-subscript-dynamic-size`,c.subscriptSizing===`dynamic`);let Qr=c._getSubscriptMessageType();zl(),uI((O=Qr)===`error`?16:O===`hint`?17:-1)}},dependencies:[nr,rr,$b,or,Gn],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})})()}return i})();var he=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=vr$1({type:i});static ɵinj=nn$1({imports:[He,dr,nt]})}return i})();var cs=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=yr$1({type:i,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(n,o){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return i})();var cr=(()=>{class i{_elementRef=m(Ke$1);_platform=m(j);_ngZone=m(ce$1);_renderer=m(dr$1);_resizeEvents=new z;_previousValue;_initialHeight;_destroyed=new z;_listenerCleanups;_minRows;_maxRows;_enabled=!0;_previousMinRows=-1;_textareaElement;get minRows(){return this._minRows}set minRows(t){this._minRows=ce(t),this._setMinHeight()}get maxRows(){return this._maxRows}set maxRows(t){this._maxRows=ce(t),this._setMaxHeight()}get enabled(){return this._enabled}set enabled(t){this._enabled!==t&&((this._enabled=t)?this.resizeToFitContent(!0):this.reset())}get placeholder(){return this._textareaElement.placeholder}set placeholder(t){this._cachedPlaceholderHeight=void 0,t?this._textareaElement.setAttribute(`placeholder`,t):this._textareaElement.removeAttribute(`placeholder`),this._cacheTextareaPlaceholderHeight()}_cachedLineHeight;_cachedPlaceholderHeight;_document=m(Z);_hasFocus=!1;_isViewInited=!1;constructor(){m(gt).load(cs),this._textareaElement=this._elementRef.nativeElement}_setMinHeight(){let t=this.minRows&&this._cachedLineHeight?`${this.minRows*this._cachedLineHeight}px`:null;t&&(this._textareaElement.style.minHeight=t)}_setMaxHeight(){let t=this.maxRows&&this._cachedLineHeight?`${this.maxRows*this._cachedLineHeight}px`:null;t&&(this._textareaElement.style.maxHeight=t)}ngAfterViewInit(){this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen(`window`,`resize`,()=>this._resizeEvents.next()),this._renderer.listen(this._textareaElement,`focus`,this._handleFocusEvent),this._renderer.listen(this._textareaElement,`blur`,this._handleFocusEvent)],this._resizeEvents.pipe(wy(16)).subscribe(()=>{this._cachedLineHeight=this._cachedPlaceholderHeight=void 0,this.resizeToFitContent(!0)})}),this._isViewInited=!0,this.resizeToFitContent(!0))}ngOnDestroy(){this._listenerCleanups?.forEach(t=>t()),this._resizeEvents.complete(),this._destroyed.next(),this._destroyed.complete()}_cacheTextareaLineHeight(){if(this._cachedLineHeight)return;let t=this._textareaElement.cloneNode(!1),n=t.style;t.rows=1,n.position=`absolute`,n.visibility=`hidden`,n.border=`none`,n.padding=`0`,n.height=``,n.minHeight=``,n.maxHeight=``,n.top=n.bottom=n.left=n.right=`auto`,n.overflow=`hidden`,this._textareaElement.parentNode.appendChild(t),this._cachedLineHeight=t.clientHeight,t.remove(),this._setMinHeight(),this._setMaxHeight()}_measureScrollHeight(){let t=this._textareaElement,n=t.style.marginBottom||``,o=this._platform.FIREFOX,r=this._hasFocus,a=o?`cdk-textarea-autosize-measuring-firefox`:`cdk-textarea-autosize-measuring`;r&&(t.style.marginBottom=`${t.clientHeight}px`),t.classList.add(a);let s=t.scrollHeight-4;return t.classList.remove(a),r&&(t.style.marginBottom=n),s}_cacheTextareaPlaceholderHeight(){if(!this._isViewInited||this._cachedPlaceholderHeight!=null)return;if(!this.placeholder){this._cachedPlaceholderHeight=0;return}let t=this._textareaElement.value;this._textareaElement.value=this._textareaElement.placeholder,this._cachedPlaceholderHeight=this._measureScrollHeight(),this._textareaElement.value=t}_handleFocusEvent=t=>{this._hasFocus=t.type===`focus`};ngDoCheck(){this._platform.isBrowser&&this.resizeToFitContent()}resizeToFitContent(t=!1){if(!this._enabled||(this._cacheTextareaLineHeight(),this._cacheTextareaPlaceholderHeight(),!this._cachedLineHeight))return;let n=this._elementRef.nativeElement,o=n.value;if(!t&&this._minRows===this._previousMinRows&&o===this._previousValue)return;let r=this._measureScrollHeight(),a=Math.max(r,this._cachedPlaceholderHeight||0);n.style.height=`${a}px`,this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame<`u`?requestAnimationFrame(()=>this._scrollToCaretPosition(n)):setTimeout(()=>this._scrollToCaretPosition(n))}),this._previousValue=o,this._previousMinRows=this._minRows}reset(){this._initialHeight!==void 0&&(this._textareaElement.style.height=this._initialHeight)}_noopInputHandler(){}_scrollToCaretPosition(t){let{selectionStart:n,selectionEnd:o}=t;!this._destroyed.isStopped&&this._hasFocus&&t.setSelectionRange(n,o)}static ɵfac=function(n){return new(n||i)};static ɵdir=ou({type:i,selectors:[[`textarea`,`cdkTextareaAutosize`,``]],hostAttrs:[`rows`,`1`,1,`cdk-textarea-autosize`],hostBindings:function(n,o){n&1&&Ig(`input`,function(){return o._noopInputHandler()})},inputs:{minRows:[0,`cdkAutosizeMinRows`,`minRows`],maxRows:[0,`cdkAutosizeMaxRows`,`maxRows`],enabled:[2,`cdkTextareaAutosize`,`enabled`,Ob],placeholder:`placeholder`},exportAs:[`cdkTextareaAutosize`]})}return i})();var $e=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=vr$1({type:i});static ɵinj=nn$1({})}return i})();var mr=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=vr$1({type:i});static ɵinj=nn$1({imports:[he,he,$e,nt]})}return i})();var us=20;var Un=(()=>{class i{_ngZone=m(ce$1);_platform=m(j);_renderer=m(vn$1).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new z;_scrolledCount=0;scrollContainers=/* @__PURE__ */ new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let n=this.scrollContainers.get(t);n&&(n.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=us){return this._platform.isBrowser?new k(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let o=t>0?this._scrolled.pipe(wy(t)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):kr$1()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(t,n){let o=this.getAncestorScrollContainers(t);return this.scrolled(n).pipe(Et$1(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(t){let n=[];return this.scrollContainers.forEach((o,r)=>{this._targetContainsElement(r,t)&&n.push(r)}),n}_targetContainsElement(t,n){let o=pt(n),r=t.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static ɵfac=function(n){return new(n||i)};static ɵprov=Fe$1({token:i,factory:i.ɵfac})}return i})();var fs=20;var be=(()=>{class i{_platform=m(j);_listeners;_viewportSize=null;_change=new z;_document=m(Z);constructor(){let t=m(ce$1),n=m(vn$1).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[n.listen(`window`,`resize`,o),n.listen(`window`,`orientationchange`,o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:n,height:o}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+o,right:t.left+n,height:o,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,n=this._getWindow(),o=t.documentElement,r=o.getBoundingClientRect();return{top:-r.top||t.body?.scrollTop||n.scrollY||o.scrollTop||0,left:-r.left||t.body?.scrollLeft||n.scrollX||o.scrollLeft||0}}change(t=fs){return t>0?this._change.pipe(wy(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static ɵfac=function(n){return new(n||i)};static ɵprov=Fe$1({token:i,factory:i.ɵfac})}return i})();var qe=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=vr$1({type:i});static ɵinj=nn$1({})}return i})();var Wn=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=vr$1({type:i});static ɵinj=nn$1({imports:[nt,qe,nt,qe]})}return i})();var ge=class{_attachedHost=null;attach(e){return this._attachedHost=e,e.attach(this)}detach(){let e=this._attachedHost;e!=null&&(this._attachedHost=null,e.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(e){this._attachedHost=e}};var $n=class extends ge{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(e,t,n,o,r,a){super(),this.component=e,this.viewContainerRef=t,this.injector=n,this.projectableNodes=o,this.bindings=r||null,this.directives=a||null}};var Ye=class extends ge{templateRef;viewContainerRef;context;injector;constructor(e,t,n,o){super(),this.templateRef=e,this.viewContainerRef=t,this.context=n,this.injector=o}get origin(){return this.templateRef.elementRef}attach(e,t=this.context){return this.context=t,super.attach(e)}detach(){return this.context=void 0,super.detach()}};var qn=class extends ge{element;constructor(e){super(),this.element=e instanceof Ke$1?e.nativeElement:e}};var Yn=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(e){if(e instanceof $n)return this._attachedPortal=e,this.attachComponentPortal(e);if(e instanceof Ye)return this._attachedPortal=e,this.attachTemplatePortal(e);if(this.attachDomPortal&&e instanceof qn)return this._attachedPortal=e,this.attachDomPortal(e)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(e){this._disposeFn=e}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Xe=class extends Yn{outletElement;_appRef;_defaultInjector;constructor(e,t,n){super(),this.outletElement=e,this._appRef=t,this._defaultInjector=n}attachComponentPortal(e){let t;if(e.viewContainerRef){let n=e.injector||e.viewContainerRef.injector,o=n.get(Dn$1,null,{optional:!0})||void 0;t=e.viewContainerRef.createComponent(e.component,{index:e.viewContainerRef.length,injector:n,ngModuleRef:o,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let n=this._appRef,o=e.injector||this._defaultInjector||ee.NULL,r=o.get(pe$1,n.injector);t=pB(e.component,{elementInjector:o,environmentInjector:r,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0}),n.attachView(t.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=e,t}attachTemplatePortal(e){let t=e.viewContainerRef,n=t.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return n.rootNodes.forEach(o=>this.outletElement.appendChild(o)),n.detectChanges(),this.setDisposeFn(()=>{let o=t.indexOf(n);o!==-1&&t.remove(o)}),this._attachedPortal=e,n}attachDomPortal=e=>{let t=e.element;t.parentNode;let n=this.outletElement.ownerDocument.createComment(`dom-portal`);t.parentNode.insertBefore(n,t),this.outletElement.appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(t,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(e){return e.hostView.rootNodes[0]}};var pr=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=vr$1({type:i});static ɵinj=nn$1({})}return i})();var hr=Po();function Cr(i){return new Ke(i.get(be),i.get(Z))}var Ke=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(e,t){this._viewportRuler=e,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let e=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=e.style.left||``,this._previousHTMLStyles.top=e.style.top||``,e.style.left=G(-this._previousScrollPosition.left),e.style.top=G(-this._previousScrollPosition.top),e.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let e=this._document.documentElement,t=this._document.body,n=e.style,o=t.style,r=n.scrollBehavior||``,a=o.scrollBehavior||``;this._isEnabled=!1,n.left=this._previousHTMLStyles.left,n.top=this._previousHTMLStyles.top,e.classList.remove(`cdk-global-scrollblock`),hr&&(n.scrollBehavior=o.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),hr&&(n.scrollBehavior=r,o.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let t=this._document.documentElement,n=this._viewportRuler.getViewportSize();return t.scrollHeight>n.height||t.scrollWidth>n.width}};function Sr(i,e){return new Ze(i.get(Un),i.get(ce$1),i.get(be),e)}var Ze=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(e,t,n,o){this._scrollDispatcher=e,this._ngZone=t,this._viewportRuler=n,this._config=o}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(this._scrollSubscription)return;let e=this._scrollDispatcher.scrolled(0).pipe(Et$1(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=e.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=e.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var ve=class{enable(){}disable(){}attach(){}};function Kn(i,e){return e.some(t=>{let n=i.bottom<t.top,o=i.top>t.bottom,r=i.right<t.left,a=i.left>t.right;return n||o||r||a})}function br(i,e){return e.some(t=>{let n=i.top<t.top,o=i.bottom>t.bottom,r=i.left<t.left,a=i.right>t.right;return n||o||r||a})}function wr(i,e){return new Qe(i.get(Un),i.get(be),i.get(ce$1),e)}var Qe=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(e,t,n,o){this._scrollDispatcher=e,this._viewportRuler=t,this._ngZone=n,this._config=o}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(!this._scrollSubscription){let e=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(e).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:o}=this._viewportRuler.getViewportSize();Kn(t,[{width:n,height:o,bottom:o,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Mr=(()=>{class i{_injector=m(ee);noop=()=>new ve;close=t=>Sr(this._injector,t);block=()=>Cr(this._injector);reposition=t=>wr(this._injector,t);static ɵfac=function(n){return new(n||i)};static ɵprov=Fe$1({token:i,factory:i.ɵfac})}return i})();var Je=class{positionStrategy;scrollStrategy=new ve;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(e){if(e){let t=Object.keys(e);for(let n of t)e[n]!==void 0&&(this[n]=e[n])}}};var tn=class{connectionPair;scrollableViewProperties;constructor(e,t){this.connectionPair=e,this.scrollableViewProperties=t}};var Nr=(()=>{class i{_attachedOverlays=[];_document=m(Z);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let n=this._attachedOverlays.indexOf(t);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,n,o){return o.observers.length<1?!1:t.eventPredicate?t.eventPredicate(n):!0}static ɵfac=function(n){return new(n||i)};static ɵprov=Fe$1({token:i,factory:i.ɵfac})}return i})();var Er=(()=>{class i extends Nr{_ngZone=m(ce$1);_renderer=m(vn$1).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let n=this._attachedOverlays;for(let o=n.length-1;o>-1;o--){let r=n[o];if(this.canReceiveEvent(r,t,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(t));break}}};static ɵfac=function(n){return new(n||i)};static ɵprov=Fe$1({token:i,factory:i.ɵfac})}return i})();var kr=(()=>{class i extends Nr{_platform=m(j);_ngZone=m(ce$1);_renderer=m(vn$1).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let n=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(n,`pointerdown`,this._pointerDownListener,o),r.listen(n,`click`,this._clickListener,o),r.listen(n,`auxclick`,this._clickListener,o),r.listen(n,`contextmenu`,this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=lt(t)};_clickListener=t=>{let n=lt(t),o=t.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:n;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let a=r.length-1;a>-1;a--){let s=r[a],d=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,t,d))){if(gr(s.overlayElement,n)||gr(s.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>d.next(t)):d.next(t)}}};static ɵfac=function(n){return new(n||i)};static ɵprov=Fe$1({token:i,factory:i.ɵfac})}return i})();function gr(i,e){let t=typeof ShadowRoot<`u`&&ShadowRoot,n=e;for(;n;){if(n===i)return!0;n=t&&n instanceof ShadowRoot?n.host:n.parentNode}return!1}var Dr=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=yr$1({type:i,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(n,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return i})();var Or=(()=>{class i{_platform=m(j);_containerElement;_document=m(Z);_styleLoader=m(gt);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=`cdk-overlay-container`;if(this._platform.isBrowser||Tn()){let o=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let n=this._document.createElement(`div`);n.classList.add(t),Tn()?n.setAttribute(`platform`,`test`):this._platform.isBrowser||n.setAttribute(`platform`,`server`),this._document.body.appendChild(n),this._containerElement=n}_loadStyles(){this._styleLoader.load(Dr)}static ɵfac=function(n){return new(n||i)};static ɵprov=Fe$1({token:i,factory:i.ɵfac})}return i})();var Zn=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(e,t,n,o){this._renderer=t,this._ngZone=n,this.element=e.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=t.listen(this.element,`click`,o)}detach(){this._ngZone.runOutsideAngular(()=>{let e=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(e,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),e.style.pointerEvents=`none`,e.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Qn(i){return i&&i.nodeType===1}var Xn=tr([]);var en=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new z;_attachments=new z;_detachments=new z;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new z;_outsidePointerEvents=new z;_afterNextRenderRef;constructor(e,t,n,o,r,a,s,d,u,m=!1,b,I){this._portalOutlet=e,this._host=t,this._pane=n,this._config=o,this._ngZone=r,this._keyboardDispatcher=a,this._document=s,this._location=d,this._outsideClickDispatcher=u,this._animationsDisabled=m,this._injector=b,this._renderer=I,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(e){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(e);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),Er$1(()=>{Xn.update(n=>n.includes(this)?n:[...n,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=fh(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let n=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>n.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof t?.onDestroy==`function`&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let e=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),Er$1(()=>{Xn.update(t=>t.filter(n=>n!==this))}),e}dispose(){if(this._disposed)return;let e=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,e&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,Er$1(()=>{Xn.update(t=>t.filter(n=>n!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(e){e!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=e,this.hasAttached()&&(e.attach(this),this.updatePosition()))}updateSize(e){this._config=p(p({},this._config),e),this._updateElementSize()}setDirection(e){this._config=q(p({},this._config),{direction:e}),this._updateElementDirection()}addPanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!0)}removePanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!1)}getDirection(){let e=this._config.direction;return e?typeof e==`string`?e:e.value:`ltr`}updateScrollStrategy(e){e!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=e,this.hasAttached()&&(e.attach(this),e.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let e=this._pane.style;e.width=G(this._config.width),e.height=G(this._config.height),e.minWidth=G(this._config.minWidth),e.minHeight=G(this._config.minHeight),e.maxWidth=G(this._config.maxWidth),e.maxHeight=G(this._config.maxHeight)}_togglePointerEvents(e){this._pane.style.pointerEvents=e?``:`none`}_attachHost(){if(!this._host.parentElement){let e=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Qn(e)?e.after(this._host):e?.type===`parent`?e.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let e=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new Zn(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(e))}):this._backdropRef.element.classList.add(e)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(e,t,n){let o=Kt(t||[]).filter(r=>!!r);o.length&&(n?e.classList.add(...o):e.classList.remove(...o))}_detachContentWhenEmpty(){let e=!1;try{this._detachContentAfterRenderRef=fh(()=>{e=!0,this._detachContent()},{injector:this._injector})}catch(t){if(e)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let e=this._scrollStrategy;e?.disable(),e?.detach?.()}};var vr=`cdk-overlay-connected-position-bounding-box`;var ps=/([A-Za-z%]+)$/;function Ar(i,e){return new nn(e,i.get(be),i.get(Z),i.get(j),i.get(Or))}var nn=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new z;_resizeSubscription=Q.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(e,t,n,o,r){this._viewportRuler=t,this._document=n,this._platform=o,this._overlayContainer=r,this.setOrigin(e)}attach(e){this._overlayRef&&this._overlayRef,this._validatePositions(),e.hostElement.classList.add(vr),this._overlayRef=e,this._boundingBox=e.hostElement,this._pane=e.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let e=this._originRect,t=this._overlayRect,n=this._viewportRect,o=this._containerRect,r=[],a;for(let s of this._preferredPositions){let d=this._getOriginPoint(e,o,s),u=this._getOverlayPoint(d,t,s),m=this._getOverlayFit(u,t,n,s);if(m.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,d);return}if(this._canFitWithFlexibleDimensions(m,u,n)){r.push({position:s,origin:d,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(d,s)});continue}(!a||a.overlayFit.visibleArea<m.visibleArea)&&(a={overlayFit:m,overlayPoint:u,originPoint:d,position:s,overlayRect:t})}if(r.length){let s=null,d=-1;for(let u of r){let m=u.boundingBoxRect.width*u.boundingBoxRect.height*(u.position.weight||1);m>d&&(d=m,s=u)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Bt(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(vr),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let e=this._lastPosition;e?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(e,this._getOriginPoint(this._originRect,this._containerRect,e))):this.apply()}withScrollableContainers(e){return this._scrollables=e,this}withPositions(e){return this._preferredPositions=e,e.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(e){return this._viewportMargin=e,this}withFlexibleDimensions(e=!0){return this._hasFlexibleDimensions=e,this}withGrowAfterOpen(e=!0){return this._growAfterOpen=e,this}withPush(e=!0){return this._canPush=e,this}withLockedPosition(e=!0){return this._positionLocked=e,this}setOrigin(e){return this._origin=e,this}withDefaultOffsetX(e){return this._offsetX=e,this}withDefaultOffsetY(e){return this._offsetY=e,this}withTransformOriginOn(e){return this._transformOriginSelector=e,this}withPopoverLocation(e){return this._popoverLocation=e,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Ke$1?this._origin.nativeElement:Qn(this._origin)?this._origin:null}_getOriginPoint(e,t,n){let o;if(n.originX==`center`)o=e.left+e.width/2;else{let a=this._isRtl()?e.right:e.left,s=this._isRtl()?e.left:e.right;o=n.originX==`start`?a:s}t.left<0&&(o-=t.left);let r;return n.originY==`center`?r=e.top+e.height/2:r=n.originY==`top`?e.top:e.bottom,t.top<0&&(r-=t.top),{x:o,y:r}}_getOverlayPoint(e,t,n){let o;n.overlayX==`center`?o=-t.width/2:n.overlayX===`start`?o=this._isRtl()?-t.width:0:o=this._isRtl()?0:-t.width;let r;return n.overlayY==`center`?r=-t.height/2:r=n.overlayY==`top`?0:-t.height,{x:e.x+o,y:e.y+r}}_getOverlayFit(e,t,n,o){let r=_r(t),{x:a,y:s}=e,d=this._getOffset(o,`x`),u=this._getOffset(o,`y`);d&&(a+=d),u&&(s+=u);let m=0-a,b=a+r.width-n.width,I=0-s,U=s+r.height-n.height,H=this._subtractOverflows(r.width,m,b),z=this._subtractOverflows(r.height,I,U),vt=H*z;return{visibleArea:vt,isCompletelyWithinViewport:r.width*r.height===vt,fitsInViewportVertically:z===r.height,fitsInViewportHorizontally:H==r.width}}_canFitWithFlexibleDimensions(e,t,n){if(this._hasFlexibleDimensions){let o=n.bottom-t.y,r=n.right-t.x,a=yr(this._overlayRef.getConfig().minHeight),s=yr(this._overlayRef.getConfig().minWidth),d=e.fitsInViewportVertically||a!=null&&a<=o,u=e.fitsInViewportHorizontally||s!=null&&s<=r;return d&&u}return!1}_pushOverlayOnScreen(e,t,n){if(this._previousPushAmount&&this._positionLocked)return{x:e.x+this._previousPushAmount.x,y:e.y+this._previousPushAmount.y};let o=_r(t),r=this._viewportRect,a=Math.max(e.x+o.width-r.width,0),s=Math.max(e.y+o.height-r.height,0),d=Math.max(r.top-n.top-e.y,0),u=Math.max(r.left-n.left-e.x,0),m=0,b=0;return o.width<=r.width?m=u||-a:m=e.x<this._getViewportMarginStart()?r.left-n.left-e.x:0,o.height<=r.height?b=d||-s:b=e.y<this._getViewportMarginTop()?r.top-n.top-e.y:0,this._previousPushAmount={x:m,y:b},{x:e.x+m,y:e.y+b}}_applyPosition(e,t){if(this._setTransformOrigin(e),this._setOverlayElementStyles(t,e),this._setBoundingBoxStyles(t,e),e.panelClass&&this._addPanelClasses(e.panelClass),this._positionChanges.observers.length){let n=this._getScrollVisibility();if(e!==this._lastPosition||!this._lastScrollVisibility||!hs(this._lastScrollVisibility,n)){let o=new tn(e,n);this._positionChanges.next(o)}this._lastScrollVisibility=n}this._lastPosition=e,this._isInitialRender=!1}_setTransformOrigin(e){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),n,o=e.overlayY;e.overlayX===`center`?n=`center`:this._isRtl()?n=e.overlayX===`start`?`right`:`left`:n=e.overlayX===`start`?`left`:`right`;for(let r=0;r<t.length;r++)t[r].style.transformOrigin=`${n} ${o}`}_calculateBoundingBoxRect(e,t){let n=this._viewportRect,o=this._isRtl(),r,a,s;if(t.overlayY===`top`)a=e.y,r=n.height-a+this._getViewportMarginBottom();else if(t.overlayY===`bottom`)s=n.height-e.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=n.height-s+this._getViewportMarginTop();else{let U=Math.min(n.bottom-e.y+n.top,e.y),H=this._lastBoundingBoxSize.height;r=U*2,a=e.y-U,r>H&&!this._isInitialRender&&!this._growAfterOpen&&(a=e.y-H/2)}let d=t.overlayX===`start`&&!o||t.overlayX===`end`&&o,u=t.overlayX===`end`&&!o||t.overlayX===`start`&&o,m,b,I;if(u)I=n.width-e.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),m=e.x-this._getViewportMarginStart();else if(d)b=e.x,m=n.right-e.x-this._getViewportMarginEnd();else{let U=Math.min(n.right-e.x+n.left,e.x),H=this._lastBoundingBoxSize.width;m=U*2,b=e.x-U,m>H&&!this._isInitialRender&&!this._growAfterOpen&&(b=e.x-H/2)}return{top:a,left:b,bottom:s,right:I,width:m,height:r}}_setBoundingBoxStyles(e,t){let n=this._calculateBoundingBoxRect(e,t);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left=`0`,o.bottom=o.right=`auto`,o.maxHeight=o.maxWidth=``,o.width=o.height=`100%`;else{let r=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;o.width=G(n.width),o.height=G(n.height),o.top=G(n.top)||`auto`,o.bottom=G(n.bottom)||`auto`,o.left=G(n.left)||`auto`,o.right=G(n.right)||`auto`,t.overlayX===`center`?o.alignItems=`center`:o.alignItems=t.overlayX===`end`?`flex-end`:`flex-start`,t.overlayY===`center`?o.justifyContent=`center`:o.justifyContent=t.overlayY===`bottom`?`flex-end`:`flex-start`,r&&(o.maxHeight=G(r)),a&&(o.maxWidth=G(a))}this._lastBoundingBoxSize=n,Bt(this._boundingBox.style,o)}_resetBoundingBoxStyles(){Bt(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){Bt(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(e,t){let n={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(o){let m=this._viewportRuler.getViewportScrollPosition();Bt(n,this._getExactOverlayY(t,e,m)),Bt(n,this._getExactOverlayX(t,e,m))}else n.position=`static`;let s=``,d=this._getOffset(t,`x`),u=this._getOffset(t,`y`);d&&(s+=`translateX(${d}px) `),u&&(s+=`translateY(${u}px)`),n.transform=s.trim(),a.maxHeight&&(o?n.maxHeight=G(a.maxHeight):r&&(n.maxHeight=``)),a.maxWidth&&(o?n.maxWidth=G(a.maxWidth):r&&(n.maxWidth=``)),Bt(this._pane.style,n)}_getExactOverlayY(e,t,n){let o={top:``,bottom:``},r=this._getOverlayPoint(t,this._overlayRect,e);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,n)),e.overlayY===`bottom`)o.bottom=`${this._document.documentElement.clientHeight-(r.y+this._overlayRect.height)}px`;else o.top=G(r.y);return o}_getExactOverlayX(e,t,n){let o={left:``,right:``},r=this._getOverlayPoint(t,this._overlayRect,e);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,n));let a;if(this._isRtl()?a=e.overlayX===`end`?`left`:`right`:a=e.overlayX===`end`?`right`:`left`,a===`right`)o.right=`${this._document.documentElement.clientWidth-(r.x+this._overlayRect.width)}px`;else o.left=G(r.x);return o}_getScrollVisibility(){let e=this._getOriginRect(),t=this._pane.getBoundingClientRect(),n=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:br(e,n),isOriginOutsideView:Kn(e,n),isOverlayClipped:br(t,n),isOverlayOutsideView:Kn(t,n)}}_subtractOverflows(e,...t){return t.reduce((n,o)=>n-Math.max(o,0),e)}_getNarrowedViewportRect(){let e=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._getViewportMarginTop(),left:n.left+this._getViewportMarginStart(),right:n.left+e-this._getViewportMarginEnd(),bottom:n.top+t-this._getViewportMarginBottom(),width:e-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(e,t){return t===`x`?e.offsetX==null?this._offsetX:e.offsetX:e.offsetY==null?this._offsetY:e.offsetY}_validatePositions(){}_addPanelClasses(e){this._pane&&Kt(e).forEach(t=>{t!==``&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(e=>{this._pane.classList.remove(e)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let e=this._origin;if(e instanceof Ke$1)return e.nativeElement.getBoundingClientRect();if(e instanceof Element)return e.getBoundingClientRect();let t=e.width||0,n=e.height||0;return{top:e.y,bottom:e.y+n,left:e.x,right:e.x+t,height:n,width:t}}_getContainerRect(){let e=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,t=this._overlayContainer.getContainerElement();e&&(t.style.display=`block`);let n=t.getBoundingClientRect();return e&&(t.style.display=``),n}};function Bt(i,e){for(let t in e)Object.hasOwn(e,t)&&(i[t]=e[t]);return i}function yr(i){if(typeof i!=`number`&&i!=null){let[e,t]=i.split(ps);return!t||t===`px`?parseFloat(e):null}return i||null}function _r(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function hs(i,e){return i===e?!0:i.isOriginClipped===e.isOriginClipped&&i.isOriginOutsideView===e.isOriginOutsideView&&i.isOverlayClipped===e.isOverlayClipped&&i.isOverlayOutsideView===e.isOverlayOutsideView}var xr=`cdk-global-overlay-wrapper`;function Rr(i){return new on}var on=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(e){let t=e.getConfig();this._overlayRef=e,this._width&&!t.width&&e.updateSize({width:this._width}),this._height&&!t.height&&e.updateSize({height:this._height}),e.hostElement.classList.add(xr),this._isDisposed=!1}top(e=``){return this._bottomOffset=``,this._topOffset=e,this._alignItems=`flex-start`,this}left(e=``){return this._xOffset=e,this._xPosition=`left`,this}bottom(e=``){return this._topOffset=``,this._bottomOffset=e,this._alignItems=`flex-end`,this}right(e=``){return this._xOffset=e,this._xPosition=`right`,this}start(e=``){return this._xOffset=e,this._xPosition=`start`,this}end(e=``){return this._xOffset=e,this._xPosition=`end`,this}width(e=``){return this._overlayRef?this._overlayRef.updateSize({width:e}):this._width=e,this}height(e=``){return this._overlayRef?this._overlayRef.updateSize({height:e}):this._height=e,this}centerHorizontally(e=``){return this.left(e),this._xPosition=`center`,this}centerVertically(e=``){return this.top(e),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,{width:o,height:r,maxWidth:a,maxHeight:s}=this._overlayRef.getConfig(),d=(o===`100%`||o===`100vw`)&&(!a||a===`100%`||a===`100vw`),u=(r===`100%`||r===`100vh`)&&(!s||s===`100%`||s===`100vh`),m=this._xPosition,b=this._xOffset,I=this._overlayRef.getConfig().direction===`rtl`,U=``,H=``,z=``;d?z=`flex-start`:m===`center`?(z=`center`,I?H=b:U=b):I?m===`left`||m===`end`?(z=`flex-end`,U=b):(m===`right`||m===`start`)&&(z=`flex-start`,H=b):m===`left`||m===`start`?(z=`flex-start`,U=b):(m===`right`||m===`end`)&&(z=`flex-end`,H=b),e.position=this._cssPosition,e.marginLeft=d?`0`:U,e.marginTop=u?`0`:this._topOffset,e.marginBottom=this._bottomOffset,e.marginRight=d?`0`:H,t.justifyContent=z,t.alignItems=u?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,n=t.style;t.classList.remove(xr),n.justifyContent=n.alignItems=e.marginTop=e.marginBottom=e.marginLeft=e.marginRight=e.position=``,this._overlayRef=null,this._isDisposed=!0}};var Fr=(()=>{class i{_injector=m(ee);global(){return Rr()}flexibleConnectedTo(t){return Ar(this._injector,t)}static ɵfac=function(n){return new(n||i)};static ɵprov=Fe$1({token:i,factory:i.ɵfac})}return i})();var Ir=new E(`OVERLAY_DEFAULT_CONFIG`);function Tr(i,e){i.get(gt).load(Dr);let t=i.get(Or),n=i.get(Z),o=i.get(kt),r=i.get(vo$1),a=i.get(fe),s=i.get(dr$1,null,{optional:!0})||i.get(vn$1).createRenderer(null,null),d=new Je(e),u=i.get(Ir,null,{optional:!0})?.usePopover??!0;d.direction=d.direction||a.value,!n.body||!(`showPopover`in n.body)?d.usePopover=!1:d.usePopover=e?.usePopover??u;let m=n.createElement(`div`),b=n.createElement(`div`);m.id=o.getId(`cdk-overlay-`),m.classList.add(`cdk-overlay-pane`),b.appendChild(m),d.usePopover&&(b.setAttribute(`popover`,`manual`),b.classList.add(`cdk-overlay-popover`));let I=d.usePopover?d.positionStrategy?.getPopoverInsertionPoint?.():null;return Qn(I)?I.after(b):I?.type===`parent`?I.element.appendChild(b):t.getContainerElement().appendChild(b),new en(new Xe(m,r,i),b,m,d,i.get(ce$1),i.get(Er),n,i.get(Xg),i.get(kr),e?.disableAnimations??i.get(mv,null,{optional:!0})===`NoopAnimations`,i.get(pe$1),s)}var Pr=(()=>{class i{scrollStrategies=m(Mr);_positionBuilder=m(Fr);_injector=m(ee);create(t){return Tr(this._injector,t)}position(){return this._positionBuilder}static ɵfac=function(n){return new(n||i)};static ɵprov=Fe$1({token:i,factory:i.ɵfac})}return i})();var Jn=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=vr$1({type:i});static ɵinj=nn$1({providers:[Pr],imports:[nt,pr,Wn,Wn]})}return i})();var Vr=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=vr$1({type:i});static ɵinj=nn$1({imports:[In,Jn,nt,qe]})}return i})();var rn=class i{http=m(Xs);getModels(){return this.http.get(`/api/models`)}search(e){return this.http.get(`/api/search`,{params:{query:e}})}streamChat(e){return new k(t=>{let n=new AbortController;return(async()=>{try{let r=await fetch(`/api/chat`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e),signal:n.signal});if(!r.ok){let u=await r.json().catch(()=>({}));throw new Error(u.issues?.[0]?.message||u.error||`The chat request failed (${r.status}).`)}if(!r.body)throw new Error(`The server did not provide a response stream.`);let a=r.body.getReader(),s=new TextDecoder,d=``;for(;;){let{value:u,done:m}=await a.read();d+=s.decode(u,{stream:!m});let b=/\r?\n\r?\n/.exec(d);for(;b;){let I=d.slice(0,b.index);d=d.slice(b.index+b[0].length),this.consumeFrame(I,t),b=/\r?\n\r?\n/.exec(d)}if(m)break}d.trim()&&this.consumeFrame(d,t),t.complete()}catch(r){n.signal.aborted?t.complete():t.error(r instanceof Error?r:/* @__PURE__ */ new Error(`The stream ended unexpectedly.`))}})(),()=>n.abort()})}consumeFrame(e,t){let n=e.split(/\r?\n/).filter(r=>r.startsWith(`data:`)).map(r=>r.slice(5).trimStart()).join(`
`);if(!n||n===`[DONE]`)return;let o;try{o=JSON.parse(n)}catch{throw new Error(`The server returned an invalid streaming event.`)}if(o.type===`error`)throw new Error(o.message||`The model could not complete this response.`);if(o.type===`delta`&&typeof o.text==`string`)t.next({type:`delta`,text:o.text});else if(o.type===`done`){let r=o.usage?this.toUsage(o.usage):void 0;t.next({type:`done`,usage:r})}}toUsage(e){return{promptTokens:e.prompt_tokens??0,completionTokens:e.completion_tokens??0,totalTokens:e.total_tokens??0}}static ɵfac=function(t){return new(t||i)};static ɵprov=O({token:i,factory:i.ɵfac,providedIn:`root`})};var Br=`groq-chat.conversations`;var ei=`groq-chat.activeConversation`;var Lr=`groq-chat.settings`;var ti={model:`openai/gpt-oss-20b`,thinkingLevel:`medium`,systemPrompt:`You are a helpful assistant.`,temperature:.7,maxTokens:4096,theme:`system`};function ni(i,e){try{let t=localStorage.getItem(i);return t?JSON.parse(t):e}catch(t){return console.error(`Unable to read ${i} from browser storage.`,t),e}}function bs(i){if(!i||typeof i!=`object`)return!1;let e=i;return typeof e.id==`string`&&typeof e.title==`string`&&typeof e.createdAt==`string`&&typeof e.updatedAt==`string`&&Array.isArray(e.messages)&&e.messages.every(gs)}function gs(i){if(!i||typeof i!=`object`)return!1;let e=i;return typeof e.id==`string`&&(e.role===`user`||e.role===`assistant`)&&typeof e.content==`string`&&typeof e.createdAt==`string`&&(!e.usage||typeof e.usage.promptTokens==`number`&&typeof e.usage.completionTokens==`number`&&typeof e.usage.totalTokens==`number`)}function vs(i){if(!i||typeof i!=`object`)return!1;let e=i;return typeof e.model==`string`&&(e.thinkingLevel===void 0||e.thinkingLevel===`low`||e.thinkingLevel===`medium`||e.thinkingLevel===`high`)&&typeof e.systemPrompt==`string`&&typeof e.temperature==`number`&&Number.isFinite(e.temperature)&&e.temperature>=0&&e.temperature<=2&&typeof e.maxTokens==`number`&&Number.isInteger(e.maxTokens)&&e.maxTokens>=1&&e.maxTokens<=131072&&(e.theme===`system`||e.theme===`light`||e.theme===`dark`)}function ys(){let i=ni(Br,[]);return Array.isArray(i)?i.filter(bs):[]}function _s(){let i=ni(ei,null);return typeof i==`string`?i:null}function zr(i){let e=i.trim().replace(/\s+/g,` `);return e.length>48?`${e.slice(0,47).trimEnd()}\u2026`:e||`New chat`}function xs(i){let e=new Date(i),t=/* @__PURE__ */ new Date,n=new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime(),o=new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),r=Math.floor((n-o)/864e5);return r<=0?`Today`:r===1?`Yesterday`:r<7?`Previous 7 days`:r<30?`Previous 30 days`:`Older`}var an=class i{document=m(Z);persistTimer;conversations=tr(ys());activeConversationId=tr(_s());settings=tr((()=>{let e=ni(Lr,ti);return vs(e)?q(p({},e),{thinkingLevel:e.thinkingLevel??ti.thinkingLevel}):ti})());activeConversation=Dr$1(()=>this.conversations().find(e=>e.id===this.activeConversationId())??null);constructor(){Gi$1(()=>{let e=this.settings().theme;e===`system`?this.document.documentElement.removeAttribute(`data-theme`):this.document.documentElement.setAttribute(`data-theme`,e)})}createConversation(){let e=(/* @__PURE__ */ new Date()).toISOString(),t={id:crypto.randomUUID(),title:`New chat`,createdAt:e,updatedAt:e,messages:[]};return this.conversations.update(n=>[t,...n]),this.selectConversation(t.id),this.persistConversations(),t}selectConversation(e){this.activeConversationId.set(e);try{e?localStorage.setItem(ei,e):localStorage.removeItem(ei)}catch(t){console.error(`Unable to persist the active conversation.`,t)}}addMessage(e,t){this.conversations.update(n=>n.map(o=>{if(o.id!==e)return o;let r=[...o.messages,t],a=o.title===`New chat`&&t.role===`user`?zr(t.content):o.title;return q(p({},o),{title:a,messages:r,updatedAt:t.createdAt})})),this.persistConversations()}updateMessage(e,t,n){this.conversations.update(o=>o.map(r=>r.id!==e?r:q(p({},r),{updatedAt:(/* @__PURE__ */ new Date()).toISOString(),messages:r.messages.map(a=>a.id===t?n(a):a)}))),this.schedulePersist()}replaceMessages(e,t){this.conversations.update(n=>n.map(o=>o.id===e?q(p({},o),{messages:t,updatedAt:(/* @__PURE__ */ new Date()).toISOString()}):o)),this.persistConversations()}removeMessage(e,t){this.conversations.update(n=>n.map(o=>o.id===e?q(p({},o),{messages:o.messages.filter(r=>r.id!==t)}):o)),this.persistConversations()}renameConversation(e,t){let n=t.trim();n&&(this.conversations.update(o=>o.map(r=>r.id===e?q(p({},r),{title:zr(n)}):r)),this.persistConversations())}deleteConversation(e){let t=this.conversations().filter(n=>n.id!==e);this.conversations.set(t),this.activeConversationId()===e&&this.selectConversation(t[0]?.id??null),this.persistConversations()}clearConversations(){this.conversations.set([]),this.selectConversation(null),this.persistConversations()}updateSettings(e){this.settings.update(t=>p(p({},t),e));try{localStorage.setItem(Lr,JSON.stringify(this.settings()))}catch(t){console.error(`Unable to persist chat settings.`,t)}}groupedConversations(e){let t=e.trim().toLocaleLowerCase(),n=/* @__PURE__ */ new Map;for(let o of[...this.conversations()].sort((r,a)=>a.updatedAt.localeCompare(r.updatedAt))){if(t&&!o.title.toLocaleLowerCase().includes(t)&&!o.messages.some(a=>a.content.toLocaleLowerCase().includes(t)))continue;let r=xs(o.updatedAt);n.set(r,[...n.get(r)??[],o])}return[...n].map(([o,r])=>({title:o,conversations:r}))}persistConversations(){this.persistTimer&&clearTimeout(this.persistTimer);try{localStorage.setItem(Br,JSON.stringify(this.conversations()))}catch(e){console.error(`Unable to persist conversation history.`,e)}}schedulePersist(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persistConversations(),300)}static ɵfac=function(t){return new(t||i)};static ɵprov=O({token:i,factory:i.ɵfac,providedIn:`root`})};var Cs={bash:()=>import(`./chunk-D9dvhQnG.js`),c:()=>import(`./chunk-CQzjVZOh.js`),cpp:()=>import(`./chunk-DugMKH9H.js`),css:()=>import(`./chunk-BwnteLpm.js`),go:()=>import(`./chunk-yjSaOQb-.js`),html:()=>import(`./chunk-BtqiAr7L.js`),java:()=>import(`./chunk-DzYC7yxL.js`),javascript:()=>import(`./chunk-ZW5Elq14.js`),json:()=>import(`./chunk-sBgcsEPo.js`),markdown:()=>import(`./chunk-D-n5-f0Y.js`),python:()=>import(`./chunk-7m41mZzF.js`),rust:()=>import(`./chunk-pTFVIxQB.js`),sql:()=>import(`./chunk-4uKphPX3.js`),typescript:()=>import(`./chunk-toh0Mbxk.js`),yaml:()=>import(`./chunk-DuwMP9ff.js`)};var Ss={bash:`bash`,c:`c`,"c++":`cpp`,cpp:`cpp`,css:`css`,go:`go`,golang:`go`,html:`html`,java:`java`,js:`javascript`,javascript:`javascript`,json:`json`,md:`markdown`,markdown:`markdown`,py:`python`,python:`python`,rs:`rust`,rust:`rust`,sh:`bash`,shell:`bash`,sql:`sql`,ts:`typescript`,tsx:`typescript`,typescript:`typescript`,yaml:`yaml`,yml:`yaml`};var jr;var ii=/* @__PURE__ */ new Map;var sn=class i{constructor(e){this.host=e}host;document=m(Z);observer;ngAfterViewInit(){this.observer=new MutationObserver(()=>this.highlightCode()),this.observer.observe(this.host.nativeElement,{childList:!0,subtree:!0}),this.highlightCode()}ngOnDestroy(){this.observer?.disconnect()}highlightCode(){for(let t of this.host.nativeElement.querySelectorAll(`a`))t.target=`_blank`,t.rel=`noopener noreferrer`;let e=this.host.nativeElement.querySelectorAll(`pre:not([data-shiki])`);for(let t of e){let n=t.querySelector(`code`);!n||n.dataset.shikiProcessing||(n.dataset.shikiProcessing=`true`,this.renderBlock(t,n))}}async renderBlock(e,t){let o=[...t.classList].find(d=>d.startsWith(`language-`))?.slice(9)||`text`,r=Ss[o.toLowerCase()],a=r||o,s=t.textContent??``;try{if(!r){this.wrapPlainCode(e,a);return}let d=await this.getHighlighter();await this.loadLanguage(d,r);let u=d.codeToHtml(s,{lang:r,theme:`github-dark`});if(!e.isConnected)return;this.wrapHighlightedCode(e,u,a)}catch(d){console.error(`Unable to highlight ${a} code block.`,d),e.isConnected&&this.wrapPlainCode(e,a)}}async getHighlighter(){return jr??=(async()=>{let[{createHighlighterCore:e},{createOnigurumaEngine:t},n]=await Promise.all([import(`./chunk-DvLe4tHP.js`),import(`./chunk-BJjGz-A6.js`),import(`./chunk-DEXSpYAj.js`)]);return e({themes:[n.default],langs:[],engine:t(import(`./chunk-b3Y_88Tl.js`))})})(),jr}async loadLanguage(e,t){let n=ii.get(t);if(n)return n;let o=Cs[t];if(!o)throw new Error(`No syntax grammar is configured for ${t}.`);let r=e.loadLanguage(o());ii.set(t,r);try{await r}catch(a){throw ii.delete(t),a}}wrapHighlightedCode(e,t,n){let r=this.document.createRange().createContextualFragment(t).querySelector(`pre`),a=r?.querySelector(`code`);!r||!a||(r.dataset.shiki=`true`,a.dataset.shiki=`true`,this.wrapCode(e,r,n))}wrapPlainCode(e,t){e.isConnected&&(e.dataset.shiki=`true`,this.wrapCode(e,e,t))}wrapCode(e,t,n){let o=e.parentNode;if(!o)return;let r=this.document.createElement(`div`);r.className=`code-block`;let a=this.document.createElement(`div`);a.className=`code-toolbar`;let s=this.document.createElement(`span`);s.textContent=n;let d=this.document.createElement(`button`);d.type=`button`,d.className=`code-copy`,d.dataset.copyCode=`true`,d.setAttribute(`aria-label`,`Copy code`),d.textContent=`Copy`,a.append(s,d),o.insertBefore(r,e),r.append(a,t),t!==e&&e.remove()}static ɵfac=function(t){return new(t||i)(mr$1(Ke$1))};static ɵdir=ou({type:i,selectors:[[``,`appShikiHighlight`,``]]})};var ws=[`messageScroll`];var Ms=()=>[];var Wr=(i,e)=>e.id;function Ns(i,e){if(i&1&&vg(0,`markdown`,17),i&2){let t=wI(2).$implicit;yg(`data`,t.content)}}function Es(i,e){if(i&1&&(gs$1(0,`div`,18),vg(1,`markdown`,17),lu()),i&2){let t=wI(2).$implicit;zl(),yg(`data`,t.content)}}function ks(i,e){if(i&1&&(gs$1(0,`div`,14),cI(1,Ns,1,1,`markdown`,17)(2,Es,2,1,`div`,18),lu()),i&2){let t=wI().$implicit,n=wI(2);zl(),uI(n.isStreamingMessage(t)?1:2)}}function Ds(i,e){i&1&&(gs$1(0,`div`,15),vg(1,`span`)(2,`span`)(3,`span`),lu())}function Os(i,e){if(i&1){let t=DI();gs$1(0,`button`,23),Ig(`click`,function(){df(t);let o=wI(4);return ff(o.regenerate())}),vg(1,`ng-icon`,24),lu()}}function As(i,e){if(i&1&&(gs$1(0,`span`,22),pu(1),lu()),i&2){let t=wI(2).$implicit;zl(),hu(``,t.usage.totalTokens,` tokens`)}}function Rs(i,e){if(i&1){let t=DI();gs$1(0,`div`,16)(1,`button`,19),Ig(`click`,function(){df(t);let o=wI().$implicit,r=wI(2);return ff(r.copyMessage(o))}),vg(2,`ng-icon`,20),lu(),cI(3,Os,2,0,`button`,21),cI(4,As,2,1,`span`,22),lu()}if(i&2){let t=wI().$implicit,n=wI(2);zl(3),uI(n.isLastAssistant(t)&&!n.isGenerating()?3:-1),zl(),uI(t.usage?4:-1)}}function Fs(i,e){if(i&1&&(gs$1(0,`article`,12)(1,`div`,13),cI(2,ks,3,1,`div`,14)(3,Ds,4,0,`div`,15),cI(4,Rs,5,2,`div`,16),lu()()),i&2){let t=e.$implicit,n=wI(2);Os$1(`user-message`,t.role===`user`)(`assistant-message`,t.role===`assistant`),zl(2),uI(t.content?2:n.isGenerating()&&n.isLastAssistant(t)?3:-1),zl(2),uI(t.role===`assistant`&&t.content?4:-1)}}function Is(i,e){i&1&&wg(0)}function Ts(i,e){if(i&1&&(gs$1(0,`section`,8,1)(2,`div`,9),fI(3,Fs,5,6,`article`,10,Wr),lu()(),fg(5,Is,1,0,`ng-container`,11)),i&2){let t=wI(),n=_I(6);zl(3),pI(t.state.activeConversation()?.messages??tb(1,Ms)),zl(2),yg(`ngTemplateOutlet`,n)}}function Ps(i,e){i&1&&wg(0)}function Vs(i,e){if(i&1&&(gs$1(0,`section`,6)(1,`h1`),pu(2,`FastBot`),lu(),fg(3,Ps,1,0,`ng-container`,11),lu()),i&2){wI();let t=_I(6);zl(3),yg(`ngTemplateOutlet`,t)}}function Ls(i,e){if(i&1){let t=DI();gs$1(0,`div`,7),vg(1,`ng-icon`,25),gs$1(2,`span`),pu(3),lu(),gs$1(4,`button`,26),Ig(`click`,function(){df(t);let o=wI();return ff(o.errorMessage.set(``))}),vg(5,`ng-icon`,27),lu()()}if(i&2){let t=wI();zl(3),Ps$1(t.errorMessage())}}function zs(i,e){if(i&1){let t=DI();gs$1(0,`span`,51)(1,`span`,52),pu(2),lu(),gs$1(3,`button`,53),Ig(`click`,function(){let o=df(t).$index,r=wI(3);return ff(r.removeFile(o))}),vg(4,`ng-icon`,27),lu()()}if(i&2){let t=e.$implicit;zl(2),Ps$1(t.name),zl(),gg(`aria-label`,QI(`Remove `,t.name))}}function Bs(i,e){if(i&1&&(gs$1(0,`div`,29),fI(1,zs,5,3,`span`,51,dI),lu()),i&2){let t=wI(2);zl(),pI(t.attachments())}}function js(i,e){if(i&1&&(gs$1(0,`option`,43),pu(1),lu()),i&2){let t=e.$implicit;yg(`value`,t.id),zl(),Ps$1(t.label.toLowerCase())}}function Hs(i,e){if(i&1){let t=DI();gs$1(0,`button`,54),Ig(`click`,function(){df(t);let o=wI(2);return ff(o.stopGeneration())}),vg(1,`ng-icon`,55),lu()}}function Gs(i,e){i&1&&vg(0,`ng-icon`,57)}function Us(i,e){i&1&&vg(0,`ng-icon`,58)}function Ws(i,e){if(i&1){let t=DI();gs$1(0,`button`,56),Ig(`click`,function(){df(t);let o=wI(2);return ff(o.send())}),cI(1,Gs,1,0,`ng-icon`,57)(2,Us,1,0,`ng-icon`,58),lu()}if(i&2){let t=wI(2);yg(`disabled`,!t.draft().trim()&&t.attachments().length===0||t.isReadingFiles()||!t.selectedModel()),zl(),uI(t.isReadingFiles()?1:2)}}function $s(i,e){if(i&1){let t=DI();gs$1(0,`footer`,28),cI(1,Bs,3,0,`div`,29),gs$1(2,`div`,30)(3,`textarea`,31,2),tw(),Ig(`ngModelChange`,function(o){df(t);let r=wI();return ff(r.draft.set(o))})(`keydown`,function(o){df(t);let r=wI();return ff(r.handleComposerKeydown(o))}),lu(),gs$1(5,`div`,32)(6,`div`,33)(7,`input`,34,3),Ig(`change`,function(o){df(t);let r=wI();return ff(r.addFiles(o))}),lu(),gs$1(9,`button`,35),Ig(`click`,function(){df(t);let o=_I(8);return ff(o.click())}),vg(10,`ng-icon`,36),lu(),gs$1(11,`button`,37),Ig(`click`,function(){df(t);let o=wI();return ff(o.toggleWebSearch())}),vg(12,`ng-icon`,38),gs$1(13,`span`),pu(14,`Web Search`),lu()()(),gs$1(15,`div`,39)(16,`label`,40)(17,`span`,41),pu(18,`Choose model`),lu(),gs$1(19,`select`,42),Ig(`change`,function(o){df(t);let r=wI();return ff(r.onModelChange(o.target.value))}),fI(20,js,2,2,`option`,43,Wr),lu()(),gs$1(22,`label`,44)(23,`span`,41),pu(24,`Thinking level`),lu(),gs$1(25,`select`,45),Ig(`change`,function(o){df(t);let r=wI();return ff(r.onThinkingLevelChange(o.target.value))}),gs$1(26,`option`,46),pu(27,`Low`),lu(),gs$1(28,`option`,47),pu(29,`Medium`),lu(),gs$1(30,`option`,48),pu(31,`High`),lu()()(),cI(32,Hs,2,0,`button`,49)(33,Ws,3,2,`button`,50),lu()()()()}if(i&2){let t=wI();zl(),uI(t.attachments().length?1:-1),zl(2),yg(`cdkAutosizeMinRows`,1)(`cdkAutosizeMaxRows`,7)(`ngModel`,t.draft()),rw(),zl(6),yg(`disabled`,t.attachments().length>=5||t.isReadingFiles()||t.isGenerating()),zl(2),Os$1(`active`,t.webSearchEnabled()),yg(`disabled`,t.isGenerating()),mg(`aria-pressed`,t.webSearchEnabled()),zl(8),yg(`value`,t.state.settings().model)(`disabled`,t.models().length===0||t.isGenerating()),zl(),pI(t.models()),zl(5),yg(`value`,t.state.settings().thinkingLevel)(`disabled`,t.isGenerating()),zl(7),uI(t.isGenerating()?32:33)}}var qs=5242880;var Hr=5;var ln=4e4;var Ys=/* @__PURE__ */ new Set([`c`,`cc`,`cpp`,`cs`,`css`,`csv`,`go`,`h`,`html`,`java`,`js`,`json`,`jsx`,`kt`,`log`,`md`,`mjs`,`php`,`py`,`rb`,`rs`,`sh`,`sql`,`svg`,`swift`,`ts`,`tsx`,`txt`,`xml`,`yaml`,`yml`]);function oi(i){return i.name.split(`.`).pop()?.toLowerCase()??``}function Gr(i){return Ys.has(oi(i))}var Ur=class i{state=m(an);api=m(rn);messageScroll;models=tr([]);errorMessage=tr(``);draft=tr(``);attachments=tr([]);isReadingFiles=tr(!1);isGenerating=tr(!1);webSearchEnabled=tr(!1);selectedModel=Dr$1(()=>this.models().find(e=>e.id===this.state.settings().model)??null);generationSubscription;currentAssistantMessageId;currentConversationId;stopping=!1;ngOnInit(){this.api.getModels().subscribe({next:e=>{if(this.models.set(e),!e.some(t=>t.id===this.state.settings().model)){let t=e[0];t&&this.state.updateSettings({model:t.id,maxTokens:Math.min(this.state.settings().maxTokens,t.maxCompletionTokens)})}},error:()=>{this.errorMessage.set(`Could not load the GPT-OSS models. Check that the server is running.`)}})}ngOnDestroy(){this.generationSubscription?.unsubscribe()}async send(){if(this.isGenerating()||this.isReadingFiles())return;let e=this.draft().trim(),t=this.attachments();if(!e&&t.length===0)return;this.isReadingFiles.set(!0),this.errorMessage.set(``);let n;try{n=await this.prepareMessage(e,t)}catch(d){this.errorMessage.set(d instanceof Error?d.message:`Could not read one of the selected files.`),this.isReadingFiles.set(!1);return}this.isReadingFiles.set(!1);let o=this.state.activeConversation();o||(o=this.state.createConversation());let r=(/* @__PURE__ */ new Date()).toISOString(),a={id:crypto.randomUUID(),role:`user`,content:n,createdAt:r};this.state.addMessage(o.id,a),this.draft.set(``),this.attachments.set([]),this.scrollToBottom(!0);let s=``;if(this.webSearchEnabled())try{let d=e||n.slice(0,500),u=await Qm(this.api.search(d));u.results.length&&(s=`Use the following DuckDuckGo search results as supporting sources. Cite links by title and URL when relevant:

`+u.results.map((m,b)=>`${b+1}. ${m.title}
${m.snippet}
${m.url}`).join(`

`))}catch(d){this.errorMessage.set(d instanceof Error?d.message:`Web search could not be completed.`)}this.startGeneration(o.id,[...o.messages.map(({role:d,content:u})=>({role:d,content:u})),{role:`user`,content:n}],s)}async prepareMessage(e,t){if(t.length===0)return e;let n=[],o=ln;for(let r of t){if(o<=0)throw new Error(`Attachments exceed ${ln.toLocaleString()} characters. Split them across messages.`);let s=(await this.extractFileText(r)).trim();if(!s)throw new Error(`No readable text was found in ${r.name}.`);if(s.length>o)throw new Error(`Attachments exceed ${ln.toLocaleString()} characters. Split them across messages.`);n.push(`--- ${r.name} ---
${s}`),o-=s.length}return[e,n.join(`

`)].filter(Boolean).join(`

`)}async extractFileText(e){let t=oi(e);if(Gr(e))return e.text();if(t===`docx`)return(await(await import(`./chunk-Br9oDHZP.js`)).extractRawText({arrayBuffer:await e.arrayBuffer()})).value;if(t===`pdf`){let n=await import(`./chunk-0LmV6z2g.js`);n.GlobalWorkerOptions.workerSrc=`/assets/pdfjs/pdf.worker.min.mjs`;let o=n.getDocument({data:await e.arrayBuffer()});try{let r=await o.promise,a=[],s=0;for(let d=1;d<=r.numPages&&s<ln;d++){let b=(await(await r.getPage(d)).getTextContent()).items.map(I=>`str`in I?I.str:``).filter(Boolean).join(` `);a.push(b),s+=b.length}return a.join(`
`)}finally{await o.destroy()}}throw new Error(`Unsupported file type: ${e.name}. Add a text, code, PDF, or DOCX file.`)}addFiles(e){let t=e.target;if(!(t instanceof HTMLInputElement))return;this.errorMessage.set(``);let n=Array.from(t.files??[]);t.value=``;let o=[...this.attachments()];for(let r of n){if(!Gr(r)&&![`pdf`,`docx`].includes(oi(r))){this.errorMessage.set(`Unsupported file type: ${r.name}. Add text, code, PDF, or DOCX files.`);continue}if(r.size>qs){this.errorMessage.set(`${r.name} is larger than the 5 MB per-file limit.`);continue}if(o.length>=Hr){this.errorMessage.set(`You can attach up to ${Hr} files at a time.`);break}o.push(r)}this.attachments.set(o)}removeFile(e){this.attachments.update(t=>t.filter((n,o)=>o!==e))}onModelChange(e){let t=this.models().find(n=>n.id===e);t&&this.state.updateSettings({model:e,maxTokens:Math.min(this.state.settings().maxTokens,t.maxCompletionTokens)})}onThinkingLevelChange(e){(e===`low`||e===`medium`||e===`high`)&&this.state.updateSettings({thinkingLevel:e})}toggleWebSearch(){this.webSearchEnabled.update(e=>!e)}handleComposerKeydown(e){e.key===`Enter`&&!e.shiftKey&&!e.isComposing&&(e.preventDefault(),this.send())}stopGeneration(){if(this.generationSubscription){if(this.stopping=!0,this.generationSubscription.unsubscribe(),this.generationSubscription=void 0,this.isGenerating.set(!1),this.currentAssistantMessageId){let e=this.currentConversationId,t=this.state.conversations().find(n=>n.id===e)?.messages.find(n=>n.id===this.currentAssistantMessageId);e&&t&&!t.content&&this.state.removeMessage(e,t.id)}this.currentAssistantMessageId=void 0,this.currentConversationId=void 0,this.stopping=!1}}regenerate(){if(this.isGenerating())return;let e=this.state.activeConversation();if(!e)return;let t=-1;for(let o=e.messages.length-1;o>=0;o--)if(e.messages[o]?.role===`user`){t=o;break}if(t<0)return;let n=e.messages.slice(0,t+1);this.state.replaceMessages(e.id,n),this.errorMessage.set(``),this.startGeneration(e.id,n.map(({role:o,content:r})=>({role:o,content:r}))),this.scrollToBottom(!0)}copyMessage(e){this.writeClipboard(e.content,`Could not copy the response.`)}copyCode(e){let t=e.target;if(!(t instanceof Element))return;let n=t.closest(`[data-copy-code]`);if(!n)return;let o=n.closest(`.code-block`)?.querySelector(`pre code`)?.textContent;o!==void 0&&this.writeClipboard(o,`Could not copy code.`,()=>{n.textContent=`Copied`,window.setTimeout(()=>n.textContent=`Copy`,1400)})}isLastAssistant(e){return e.role!==`assistant`?!1:[...this.state.activeConversation()?.messages??[]].reverse().find(n=>n.role===`assistant`)?.id===e.id}isStreamingMessage(e){return this.isGenerating()&&e.id===this.currentAssistantMessageId}startGeneration(e,t,n=``){let o=this.selectedModel();if(!o){this.errorMessage.set(`Select an available model before sending a message.`);return}let r=this.state.settings(),a={id:crypto.randomUUID(),role:`assistant`,content:``,createdAt:(/* @__PURE__ */ new Date()).toISOString()};this.currentAssistantMessageId=a.id,this.currentConversationId=e,this.state.addMessage(e,a),this.isGenerating.set(!0);let s=p({model:o.id,messages:t,systemPrompt:n?`${r.systemPrompt}

${n}`:r.systemPrompt,maxTokens:Math.min(r.maxTokens,o.maxCompletionTokens)},o.supportsReasoning?{reasoningEffort:r.thinkingLevel}:{});this.generationSubscription=this.api.streamChat(s).pipe(Xm(40),Et$1(d=>d.length>0)).subscribe({next:d=>this.applyStreamEvents(e,a.id,d),error:d=>{let u=this.findMessage(e,a.id);u&&!u.content&&this.state.removeMessage(e,a.id),this.errorMessage.set(d instanceof Error?d.message:`The response could not be completed.`),this.finishGeneration()},complete:()=>{let d=this.findMessage(e,a.id);d&&!d.content&&!this.stopping&&(this.state.removeMessage(e,a.id),this.errorMessage.set(`The model returned an empty response. Please try again.`)),this.finishGeneration()}})}applyStreamEvents(e,t,n){let o=``,r;for(let a of n)a.type===`delta`&&(o+=a.text),a.type===`done`&&(r=a.usage);(o||r)&&(this.state.updateMessage(e,t,a=>p(q(p({},a),{content:a.content+o}),r?{usage:r}:{})),this.scrollToBottom(!1,!1))}findMessage(e,t){return this.state.conversations().find(n=>n.id===e)?.messages.find(n=>n.id===t)}finishGeneration(){this.isGenerating.set(!1),this.currentAssistantMessageId=void 0,this.currentConversationId=void 0,this.generationSubscription=void 0}async writeClipboard(e,t,n){try{if(!navigator.clipboard)throw new Error(`Clipboard API is unavailable.`);await navigator.clipboard.writeText(e),this.errorMessage.set(``),n?.()}catch(o){console.error(`Clipboard copy failed.`,o),this.errorMessage.set(`${t} Check clipboard permissions.`)}}scrollToBottom(e=!1,t=!0){let n=this.messageScroll?.nativeElement;if(!n)return;let o=n.scrollHeight-n.scrollTop-n.clientHeight<120;!e&&!o||requestAnimationFrame(()=>{t?n.scrollTo({top:n.scrollHeight,behavior:`smooth`}):n.scrollTop=n.scrollHeight})}static ɵfac=function(t){return new(t||i)};static ɵcmp=yr$1({type:i,selectors:[[`app-chat-page`]],viewQuery:function(t,n){if(t&1&&Cg(ws,5),t&2){let o;CI(o=TI())&&(n.messageScroll=o.first)}},decls:7,vars:2,consts:[[`composerContent`,``],[`messageScroll`,``],[`composer`,``],[`fileInput`,``],[1,`app-shell`],[1,`main-panel`,3,`click`],[1,`landing`],[`role`,`alert`,1,`notice`,`notice-error`],[`aria-live`,`polite`,1,`chat-scroll`],[1,`message-list`],[1,`message-row`,3,`user-message`,`assistant-message`],[4,`ngTemplateOutlet`],[1,`message-row`],[1,`message-body`],[1,`markdown-body`],[`aria-label`,`Generating response`,1,`typing-indicator`],[1,`message-actions`],[3,`data`],[`appShikiHighlight`,``],[`mat-icon-button`,``,`aria-label`,`Copy response`,3,`click`],[`name`,`lucideCopy`],[`mat-icon-button`,``,`aria-label`,`Regenerate response`],[1,`usage-count`],[`mat-icon-button`,``,`aria-label`,`Regenerate response`,3,`click`],[`name`,`lucideRotateCcw`],[`name`,`lucideAlertCircle`],[`mat-icon-button`,``,`aria-label`,`Dismiss error`,3,`click`],[`name`,`lucideX`],[1,`composer-area`],[`aria-label`,`Attached files`,1,`attachment-list`],[1,`composer-shell`],[`cdkTextareaAutosize`,``,`placeholder`,``,`aria-label`,`Message`,1,`composer-input`,3,`ngModelChange`,`keydown`,`cdkAutosizeMinRows`,`cdkAutosizeMaxRows`,`ngModel`],[1,`composer-controls`],[1,`composer-left`],[`type`,`file`,`multiple`,``,`accept`,`.c,.cc,.cpp,.cs,.css,.csv,.docx,.go,.h,.html,.java,.js,.json,.jsx,.kt,.log,.md,.mjs,.pdf,.php,.py,.rb,.rs,.sh,.sql,.svg,.swift,.ts,.tsx,.txt,.xml,.yaml,.yml`,`aria-label`,`Choose files to attach`,1,`file-input`,3,`change`],[`type`,`button`,`aria-label`,`Add files`,1,`add-control`,3,`click`,`disabled`],[`name`,`lucidePlus`],[`type`,`button`,`aria-label`,`Toggle DuckDuckGo web search`,1,`web-control`,3,`click`,`disabled`],[`name`,`lucideGlobe`],[1,`composer-right`],[1,`model-control`],[1,`visually-hidden`],[`aria-label`,`Choose model`,3,`change`,`value`,`disabled`],[3,`value`],[1,`select-control`,`thinking-select`],[`aria-label`,`Thinking level`,3,`change`,`value`,`disabled`],[`value`,`low`],[`value`,`medium`],[`value`,`high`],[`mat-icon-button`,``,`aria-label`,`Stop generating`,1,`send-button`,`stop-button`],[`mat-icon-button`,``,`aria-label`,`Send message`,1,`send-button`,3,`disabled`],[1,`attachment-chip`],[1,`attachment-name`],[`type`,`button`,3,`click`,`aria-label`],[`mat-icon-button`,``,`aria-label`,`Stop generating`,1,`send-button`,`stop-button`,3,`click`],[`name`,`lucideSquare`],[`mat-icon-button`,``,`aria-label`,`Send message`,1,`send-button`,3,`click`,`disabled`],[`name`,`lucideLoaderCircle`,1,`loading-indicator`],[`name`,`lucideArrowUp`]],template:function(t,n){t&1&&(gs$1(0,`div`,4)(1,`main`,5),Ig(`click`,function(r){return n.copyCode(r)}),cI(2,Ts,6,2)(3,Vs,4,1,`section`,6),cI(4,Ls,6,1,`div`,7),lu(),fg(5,$s,34,14,`ng-template`,null,0,nb),lu()),t&2&&(zl(2),uI(n.state.activeConversation()?.messages?.length?2:3),zl(2),uI(n.errorMessage()?4:-1))},dependencies:[xo,vo,_o,Ve,ho,Nn,$b,Zo,Bn,he,mr,cr,Vr,$e,P$,w2,sn],styles:[`[_nghost-%COMP%]{display:block;width:100%;height:100dvh;min-height:420px}.app-shell[_ngcontent-%COMP%], .main-panel[_ngcontent-%COMP%]{width:100%;height:100%;min-width:0;background:var(--%NS%app-bg);color:var(--%NS%text-primary)}.main-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;overflow:hidden}.landing[_ngcontent-%COMP%]{display:flex;width:min(620px,calc(100% - 40px));flex:1;flex-direction:column;align-items:center;justify-content:center;align-self:center;padding:20px 0 0}.landing[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 0 82px;color:var(--%NS%text-primary);font-size:48px;font-weight:400;letter-spacing:-1.8px;text-align:center}.chat-scroll[_ngcontent-%COMP%]{flex:1;overflow:auto;overscroll-behavior:contain}.chat-scroll[_ngcontent-%COMP%]::-webkit-scrollbar, .composer-input[_ngcontent-%COMP%]::-webkit-scrollbar{display:none;width:0;height:0}.message-list[_ngcontent-%COMP%]{display:flex;width:min(790px,calc(100% - 40px));flex-direction:column;gap:30px;margin:0 auto;padding:38px 0 52px}.message-row[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:13px}.user-message[_ngcontent-%COMP%]{justify-content:flex-end;gap:11px}.message-body[_ngcontent-%COMP%]{min-width:0;max-width:min(100%,710px);color:var(--%NS%text-primary);font-size:14px;line-height:1.72}.user-message[_ngcontent-%COMP%]   .message-body[_ngcontent-%COMP%]{max-width:min(78%,630px);padding:10px 15px;border:1px solid var(--%NS%border-subtle);border-radius:17px;background:var(--%NS%user-message-bg);line-height:1.6;white-space:pre-wrap;overflow-wrap:anywhere}.typing-indicator[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px;height:30px}.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%;background:var(--%NS%text-muted);animation:_ngcontent-%COMP%_typing 1.2s ease-in-out infinite}.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){animation-delay:.15s}.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){animation-delay:.3s}@keyframes _ngcontent-%COMP%_typing{0%,60%,to{transform:translateY(0);opacity:.42}30%{transform:translateY(-4px);opacity:1}}.message-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1px;margin:7px 0 0 -7px;color:var(--%NS%text-muted)}.message-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:32px!important;height:32px!important;color:var(--%NS%text-muted)!important}.usage-count[_ngcontent-%COMP%]{margin-left:6px;font-size:10px}.composer-area[_ngcontent-%COMP%]{z-index:1;width:min(620px,100%);flex:0 0 auto;margin:0 auto}.main-panel[_ngcontent-%COMP%] > .composer-area[_ngcontent-%COMP%]{padding:12px 0 18px}.composer-shell[_ngcontent-%COMP%]{display:grid;min-height:106px;grid-template-rows:minmax(42px,1fr) 44px;align-items:end;gap:2px;padding:12px 14px 10px 18px;border:1px solid var(--%NS%border-subtle);border-radius:22px;background:var(--%NS%composer-bg);box-shadow:none}.composer-shell[_ngcontent-%COMP%]:focus-within{border-color:var(--%NS%border-strong);box-shadow:none}.composer-shell[_ngcontent-%COMP%], .composer-shell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .composer-shell[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .composer-shell[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .composer-shell[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .composer-shell[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{border:0;box-shadow:none;outline:0}.composer-input[_ngcontent-%COMP%]{width:100%;max-height:190px;align-self:start;padding:2px 4px 0;border:0;outline:0;background:transparent;resize:none;color:var(--%NS%text-primary);font-size:14px;line-height:1.55}.composer-input[_ngcontent-%COMP%]::placeholder{color:var(--%NS%text-muted);opacity:1}.composer-controls[_ngcontent-%COMP%]{display:flex;height:44px;min-width:0;align-items:center;justify-content:space-between;gap:10px}.send-button[_ngcontent-%COMP%]{width:36px!important;height:36px!important;flex:0 0 auto;display:inline-grid!important;place-items:center;border-radius:50%!important;background:transparent!important;color:#4e535c!important;box-shadow:none!important}.send-button[_ngcontent-%COMP%]:disabled{background:transparent!important;color:#60656d!important}.send-button.stop-button[_ngcontent-%COMP%]{background:var(--%NS%surface-muted)!important;color:var(--%NS%text-primary)!important}.loading-indicator[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spin .65s linear infinite}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}.composer-toolbar[_ngcontent-%COMP%], .composer-options[_ngcontent-%COMP%]{display:flex;align-items:center}.composer-left[_ngcontent-%COMP%], .composer-right[_ngcontent-%COMP%]{display:flex;height:44px;align-items:center;white-space:nowrap}.composer-left[_ngcontent-%COMP%]{gap:14px;flex:1}.composer-right[_ngcontent-%COMP%]{gap:8px;color:#555a62;font-size:13px}.model-control[_ngcontent-%COMP%], .thinking-select[_ngcontent-%COMP%]{display:flex;height:44px;align-items:center}.add-control[_ngcontent-%COMP%]{display:grid;width:44px;height:44px;flex:0 0 auto;place-items:center;padding:0;border:0;background:transparent;color:#555a62;cursor:pointer}.add-control[_ngcontent-%COMP%]:disabled{color:#a4a9b2;cursor:default}.web-control[_ngcontent-%COMP%]{display:inline-flex;height:44px;align-items:center;gap:8px;padding:0;border:0;background:transparent;color:#555a62;cursor:pointer;font-size:14px}.web-control.active[_ngcontent-%COMP%]{color:var(--%NS%accent)}.model-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .thinking-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{height:44px;border:0;outline:0;background:transparent;color:#555a62;cursor:pointer;font-size:13px}.model-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{max-width:130px;padding:0 5px}.thinking-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{max-width:58px;padding:0 4px}.composer-toolbar[_ngcontent-%COMP%]{justify-content:space-between;gap:8px;padding:8px 4px 0}.composer-options[_ngcontent-%COMP%]{min-width:0;gap:7px}.add-files-button[_ngcontent-%COMP%]{min-width:0;min-height:34px;gap:6px;padding:0 9px;border-radius:9px;color:var(--%NS%text-secondary);font-size:12px}.add-files-button[_ngcontent-%COMP%]:hover{background:var(--%NS%surface-hover)}.add-files-button[_ngcontent-%COMP%]:disabled{color:var(--%NS%text-faint)}.file-input[_ngcontent-%COMP%]{display:none}.select-control[_ngcontent-%COMP%]{display:block;min-width:0}.select-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{max-width:100%;height:44px;padding:0 4px;border:0;border-radius:0;outline:0;background:transparent;color:var(--%NS%text-secondary);cursor:pointer;font-size:11px}.select-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible{border:0;outline:0}.select-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:disabled{cursor:default;opacity:.65}.attachment-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:7px;margin:0 0 9px}.attachment-chip[_ngcontent-%COMP%]{display:inline-flex;max-width:100%;min-height:30px;align-items:center;gap:5px;padding:0 5px 0 10px;border:0;border-radius:9px;background:var(--%NS%surface);color:var(--%NS%text-secondary);font-size:11px}.attachment-name[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.attachment-chip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:grid;width:23px;height:23px;flex:0 0 auto;place-items:center;padding:0;border:0;border-radius:6px;background:transparent;color:var(--%NS%text-muted);cursor:pointer}.attachment-chip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:var(--%NS%surface-hover);color:var(--%NS%text-primary)}.notice[_ngcontent-%COMP%]{z-index:3;display:flex;width:min(780px,calc(100% - 36px));align-items:center;gap:10px;margin:0 auto 10px;padding:9px 12px;border:1px solid color-mix(in srgb,#ba4a52 30%,var(--%NS%border-subtle));border-radius:10px;background:color-mix(in srgb,#f8e1e2 55%,var(--%NS%surface));color:var(--%NS%error-text);font-size:12px}.notice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:1;line-height:1.5}.notice[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:0 0 auto;color:var(--%NS%error-text)!important}.visually-hidden[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;clip-path:inset(50%)}@media(max-width:600px){.landing[_ngcontent-%COMP%]{width:calc(100% - 24px)}.main-panel[_ngcontent-%COMP%] > .composer-area[_ngcontent-%COMP%]{width:calc(100% - 24px);padding-bottom:12px}.message-list[_ngcontent-%COMP%]{width:calc(100% - 32px);gap:24px;padding-top:25px}.message-body[_ngcontent-%COMP%]{font-size:13px}.user-message[_ngcontent-%COMP%]   .message-body[_ngcontent-%COMP%]{max-width:calc(100% - 32px)}.composer-options[_ngcontent-%COMP%]{gap:5px}.select-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{max-width:37vw;padding:0 22px 0 7px;font-size:10px}.thinking-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{max-width:31vw}}@media(prefers-reduced-motion:reduce){*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}`]})};export{Ur as ChatPage};